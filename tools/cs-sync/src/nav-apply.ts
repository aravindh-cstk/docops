#!/usr/bin/env node
/**
 * Phase 2 of the cs-docs nav rebuild: write the tree described by
 * .nav-tree.json to disk, one product at a time.
 *
 * Every leaf is written from the CMS, including leaves already sitting at the
 * right path, so a run is idempotent and the file content always matches
 * production rather than whatever an older backfill happened to leave behind.
 * Where a file with the same url already exists somewhere else it is `git mv`d
 * first so history follows the move, then overwritten.
 *
 * Ordering matters and is deliberate: everything is written before anything is
 * deleted. Two FAQ containers (Assets, Agent OS) have no files on disk at all,
 * so a delete-first pass would remove cs-docs/assets/faqs.md before its
 * replacement existed.
 *
 * Usage:
 *   npx tsx src/nav-apply.ts --product studio [--dry-run]
 *   npx tsx src/nav-apply.ts --orphans [--dry-run]
 *   npx tsx src/nav-apply.ts --all [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import matter from "gray-matter";
import { htmlToMarkdown } from "./html-to-md.js";
import { extractSections } from "./cda-fetch.js";
import { jsonRteToHtml, type RteNode } from "./lib/json-rte-to-html.js";
import { canonicalizeUrl } from "./doc-index.js";
import {
  slugify,
  normalizeUrl,
  cleanTitle,
  isPublishedToProd,
  PRODUCTION_ENV_UID,
  DOCS_BASE_URL,
  type Entry,
  type NavLeaf,
  type NavTree,
} from "./nav-tree.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
config({ path: path.join(repoRoot, ".env") });
config({ path: path.join(scriptDir, "..", ".env") });

const API_KEY = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
const TOKEN = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!API_KEY || !TOKEN) throw new Error("CONTENTSTACK_DOCS_STACK_* must be set (repo-root .env)");

const HOST = "https://api.contentstack.io/v3";
const DOCS_ROOT = "cs-docs";
const ORPHAN_DIR = `${DOCS_ROOT}/orphan-docs`;

async function request(reqPath: string, retriesLeft = 5): Promise<any> {
  let res: Response;
  try {
    res = await fetch(`${HOST}${reqPath}`, { headers: { api_key: API_KEY!, authorization: TOKEN! } });
  } catch (err) {
    // fetch rejects outright on network faults (ECONNRESET mid-run over a few
    // thousand requests), which no status-code check would ever see.
    if (retriesLeft > 0) {
      await new Promise((r) => setTimeout(r, 2000 * (6 - retriesLeft)));
      return request(reqPath, retriesLeft - 1);
    }
    throw err;
  }
  if ((res.status === 429 || res.status >= 500) && retriesLeft > 0) {
    await new Promise((r) => setTimeout(r, 1500 * (6 - retriesLeft)));
    return request(reqPath, retriesLeft - 1);
  }
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status}): ${await res.text()}`);
  return res.json();
}

async function fetchAll(contentType: string): Promise<Map<string, Entry>> {
  const out = new Map<string, Entry>();
  let skip = 0;
  for (;;) {
    const query = new URLSearchParams({
      locale: "en-us",
      limit: "100",
      skip: String(skip),
      include_count: "true",
      include_publish_details: "true",
    });
    const data = await request(`/content_types/${contentType}/entries?${query}`);
    const entries: Entry[] = Array.isArray(data.entries) ? data.entries : [];
    for (const e of entries) out.set(e.uid, e);
    const total = typeof data.count === "number" ? data.count : out.size;
    skip += entries.length;
    if (entries.length === 0 || out.size >= total) break;
  }
  return out;
}

/**
 * The bulk list endpoint stubs JSON RTE fields: a rich answer comes back as
 * {"uid": "...", "__v": 2} with no children, which jsonRteToHtml renders as an
 * empty string. Plain HTML string fields (docs_article's article_section
 * content) are returned in full, so only content types with a JSON RTE field
 * need this. product_faqs_2026 is the only one in the nav tree, and there are
 * just 22 of them, so fetching each individually costs nothing.
 */
async function fetchEntry(contentType: string, uid: string): Promise<Entry | null> {
  try {
    const data = await request(`/content_types/${contentType}/entries/${uid}?locale=en-us&include_publish_details=true`);
    return data.entry as Entry;
  } catch (err) {
    console.log(`  FAILED to fetch ${contentType}/${uid}: ${(err as Error).message}`);
    return null;
  }
}

/**
 * The bulk list endpoint returns the latest draft. When production is pinned to
 * an older version we want what production actually serves, so refetch that
 * exact version. Cached because duplicated entries are requested once per slot.
 */
const versionCache = new Map<string, Entry>();
async function productionVersionOf(contentType: string, entry: Entry): Promise<Entry> {
  const details = Array.isArray(entry.publish_details) ? entry.publish_details : [];
  const prod = details.find((d) => d?.environment === PRODUCTION_ENV_UID);
  if (!prod || typeof prod.version !== "number" || prod.version === entry._version) return entry;
  const key = `${contentType}:${entry.uid}:${prod.version}`;
  const hit = versionCache.get(key);
  if (hit) return hit;
  const data = await request(
    `/content_types/${contentType}/entries/${entry.uid}?locale=en-us&version=${prod.version}`,
  );
  versionCache.set(key, data.entry);
  return data.entry;
}

function escapeForFrontmatter(value: string): string {
  return value.replace(/"/g, '\\"');
}

export function articleFileName(url: string | null): string | null {
  const segments = (url ?? "").split("/").filter(Boolean);
  if (segments.length === 0) return null;
  return `${(segments.length > 1 ? segments.slice(1) : segments).join("-")}.md`;
}

// ── git helpers ─────────────────────────────────────────────────────────────

function git(args: string[]): string {
  return execFileSync("git", args, { cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

function isTracked(rel: string): boolean {
  try {
    return git(["ls-files", "--error-unmatch", rel]).trim().length > 0;
  } catch {
    return false;
  }
}

/** Move preserving history where git knows the file, plain rename otherwise. */
function movePath(from: string, to: string, dryRun: boolean): void {
  if (dryRun) return;
  const absTo = path.join(repoRoot, to);
  fs.mkdirSync(path.dirname(absTo), { recursive: true });
  if (isTracked(from)) {
    try {
      git(["mv", "-f", from, to]);
      return;
    } catch {
      // fall through to a plain rename, e.g. when the destination already
      // exists in the index from an earlier step in this same run
    }
  }
  fs.renameSync(path.join(repoRoot, from), absTo);
}

function removePath(rel: string, dryRun: boolean): void {
  if (dryRun) return;
  const abs = path.join(repoRoot, rel);
  if (!fs.existsSync(abs)) return;
  if (isTracked(rel)) {
    try {
      git(["rm", "-r", "-q", "--force", rel]);
    } catch {
      /* fall through to the unconditional removal below */
    }
  }
  // Always finish on the filesystem. `git rm -r` only drops tracked files, so
  // untracked siblings and the now-empty directory shells survive it, and git
  // does not track directories at all.
  fs.rmSync(abs, { recursive: true, force: true });
}

function writeFile(rel: string, content: string, dryRun: boolean): void {
  if (dryRun) return;
  const abs = path.join(repoRoot, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

// ── content builders ────────────────────────────────────────────────────────

/**
 * `urlOverride` carries the entry's CURRENT url while the body comes from the
 * version published to production, and the two can disagree: a rename that is
 * drafted but not yet published leaves the published version holding the old
 * url. Mixing them wrote a file named from one url with frontmatter declaring
 * another (7 CLI pages did exactly this), and the reverse sync resolves a file
 * back to its entry by querying that url, so it has to be the live one.
 */
export function buildArticle(entry: Entry, urlOverride?: string | null): string | null {
  const sections = extractSections(entry as { article_content?: unknown });
  if (sections.length === 0) return null;
  const heading = cleanTitle(entry.title);
  const description = (entry as any).seo?.description ?? "";
  const body = sections
    .map((s) =>
      s.heading.trim() ? `## ${s.heading.trim()}\n\n${htmlToMarkdown(s.content)}` : htmlToMarkdown(s.content),
    )
    .join("\n\n");
  const frontmatter = [
    "---",
    `title: "${escapeForFrontmatter(heading)}"`,
    `description: "${escapeForFrontmatter(description)}"`,
    // Always the entry's own url, never rewritten to match the folder this
    // copy happens to sit in. One entry, one url, however many copies.
    `url: ${urlOverride ?? entry.url ?? ""}`,
    "---",
  ].join("\n");
  return `${frontmatter}\n\n# ${heading}\n\n${body}\n`;
}

/**
 * sample_apps_demo_page has no article_content. It is a demo landing page whose
 * prose lives in `introduction` (md_content exists in the schema but is empty
 * on all 5 live entries), so buildArticle returns null for it and it would
 * otherwise be silently absent from the tree.
 */
export function buildSampleApp(entry: Entry): string | null {
  const md = String((entry as any).md_content ?? "").trim();
  const intro = String((entry as any).introduction ?? "").trim();
  const body = md || intro;
  if (!body) return null;
  const heading = cleanTitle(entry.title);
  const description = (entry as any).seo?.description ?? intro.slice(0, 200);
  const frontmatter = [
    "---",
    `title: "${escapeForFrontmatter(heading)}"`,
    `description: "${escapeForFrontmatter(description)}"`,
    `url: ${entry.url ?? ""}`,
    "doc_type: sample-app",
    "---",
  ].join("\n");
  return `${frontmatter}\n\n# ${heading}\n\n${body}\n`;
}

export function buildStub(leaf: NavLeaf): string {
  const title = leaf.title || "Untitled";
  const raw = (leaf.url ?? "").trim();
  const href = raw.startsWith("/") ? `${DOCS_BASE_URL}${raw}` : raw;
  const frontmatter = [
    "---",
    `title: "${escapeForFrontmatter(title)}"`,
    `description: "${escapeForFrontmatter(title)}"`,
    `url: ${raw}`,
    "doc_type: link",
    "---",
  ].join("\n");
  return `${frontmatter}\n\n# ${title}\n\nThis navigation entry links to [${title}](${href}).\n`;
}

function orderPrefix(index: number, total: number): string {
  const width = String(total).length;
  return String(index + 1).padStart(Math.max(2, width), "0");
}

/** Mirrors backfill-product-faqs.ts, but rooted at the nav-derived directory. */
export function buildFaqFiles(
  entry: Entry,
  targetDir: string,
  emptyAnswers: string[] = [],
): Array<{ rel: string; content: string | null }> {
  const out: Array<{ rel: string; content: string | null }> = [];
  const sections: any[] = Array.isArray((entry as any).faqs_section) ? (entry as any).faqs_section : [];
  sections.forEach((section, sectionIndex) => {
    const sectionSlug = `${orderPrefix(sectionIndex, sections.length)}-${slugify(String(section.heading ?? ""))}`;
    const sectionUid = section._metadata?.uid ?? "";
    const faqs: any[] = Array.isArray(section.faqs) ? section.faqs : [];
    faqs.forEach((faq, index) => {
      const prefix = orderPrefix(index, faqs.length);
      const questionSlug = slugify(String(faq.question ?? "untitled"));
      const rel = `${targetDir}/${sectionSlug}/${prefix}-${questionSlug}.md`;
      const question = String(faq.question ?? "Untitled").trim();
      const body = htmlToMarkdown(jsonRteToHtml(faq.answer as RteNode));
      // An answer that renders to nothing means we were handed a JSON RTE stub
      // rather than the real document. Writing the file anyway would leave a
      // question with no answer, which reads as real content but is not.
      if (!body.trim()) {
        // Emit the path with no content so the caller still claims it as
        // "keep". Skipping it outright would drop it from the keep set and the
        // delete pass would then remove a file that may hold good content.
        emptyAnswers.push(`${entry.uid}:${question.slice(0, 60)}`);
        out.push({ rel, content: null });
        return;
      }
      const frontmatter = [
        "---",
        `title: "${escapeForFrontmatter(question)}"`,
        `description: "${escapeForFrontmatter(question)}"`,
        // Synthetic, there is no per-question url in the CMS. It tracks the
        // file's location, so it moves with the container.
        `url: /${rel.slice(DOCS_ROOT.length + 1)}`.replace(/\.md$/, ""),
        "doc_type: faq",
        `_cms_section_uid: ${sectionUid}`,
        `_cms_faq_uid: ${faq._metadata?.uid ?? ""}`,
        "---",
      ].join("\n");
      out.push({ rel, content: `${frontmatter}\n\n# ${question}\n\n${body}\n` });
    });
  });
  return out;
}

// ── disk index ──────────────────────────────────────────────────────────────

function listMarkdown(absDir: string, out: string[]): void {
  if (!fs.existsSync(absDir)) return;
  for (const e of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(absDir, e.name);
    if (e.isDirectory()) listMarkdown(full, out);
    else if (e.isFile() && e.name.endsWith(".md")) out.push(full);
  }
}

function buildUrlIndex(): Map<string, string[]> {
  const files: string[] = [];
  listMarkdown(path.join(repoRoot, DOCS_ROOT), files);
  const index = new Map<string, string[]>();
  for (const abs of files) {
    let url: string | null = null;
    try {
      const parsed = matter(fs.readFileSync(abs, "utf8"));
      url = typeof parsed.data.url === "string" ? parsed.data.url : null;
    } catch {
      /* malformed frontmatter, treat as unindexed */
    }
    const key = canonicalizeUrl(url);
    if (!key) continue;
    const rel = path.relative(repoRoot, abs);
    const bucket = index.get(key);
    if (bucket) bucket.push(rel);
    else index.set(key, [rel]);
  }
  return index;
}

// ── main ────────────────────────────────────────────────────────────────────

interface Stats {
  written: number;
  moved: number;
  faqFiles: number;
  deleted: number;
  skippedNoContent: number;
  emptyFaqAnswers: number;
}

/**
 * Every path the whole nav tree needs, across all products. A file sitting at
 * one of these is never eligible to be moved somewhere else, even when the
 * product that owns it has not been applied yet.
 *
 * Without this, applying products one at a time silently breaks the 100
 * duplicated entries: 12 Administration SSO/SCIM guides are also nav positions
 * under Developer Resources, so applying developer-resources second moved them
 * out of administration/ and left empty directories behind.
 */
function allExpectedPaths(tree: NavTree): Set<string> {
  const out = new Set<string>();
  for (const leaf of tree.leaves) {
    if (leaf.kind === "faqs") continue;
    const dir = leaf.chain.join("/");
    if (leaf.kind === "stub") {
      out.add(`${DOCS_ROOT}/${dir}/${slugify(leaf.title) || "untitled"}/index.md`);
      continue;
    }
    const name = articleFileName(leaf.url);
    if (name) out.add(`${DOCS_ROOT}/${dir}/${name}`);
  }
  return out;
}

async function applyProduct(
  tree: NavTree,
  slug: string,
  store: Map<string, Map<string, Entry>>,
  urlIndex: Map<string, string[]>,
  globalExpected: Set<string>,
  dryRun: boolean,
): Promise<Stats> {
  const stats: Stats = { written: 0, moved: 0, faqFiles: 0, deleted: 0, skippedNoContent: 0, emptyFaqAnswers: 0 };
  const leaves = tree.leaves.filter((l) => l.chain[0] === slug);
  if (leaves.length === 0) {
    console.log(`  no leaves for "${slug}"`);
    return stats;
  }

  const articles = store.get("docs_article")!;
  const faqEntries = store.get("product_faqs_2026")!;
  const samples = store.get("sample_apps_demo_page")!;

  /** Every path this product legitimately owns after the run. */
  const keep = new Set<string>();
  const consumed = new Set<string>();

  // Pass 1: write every leaf.
  for (const leaf of leaves) {
    if (leaf.kind === "faqs") {
      // Must come from the single-entry endpoint, see fetchEntry: the list
      // endpoint would hand us answer stubs and we would write empty files.
      const entry = (await fetchEntry("product_faqs_2026", leaf.entryUid!)) ?? faqEntries.get(leaf.entryUid!);
      if (!entry) {
        console.log(`  MISSING product_faqs_2026 ${leaf.entryUid}`);
        continue;
      }
      const source = await productionVersionOf("product_faqs_2026", entry);
      const containerSlug = slugify(leaf.title) || "untitled";
      const targetDir = `${DOCS_ROOT}/${leaf.chain.join("/")}/${containerSlug}`;
      const empties: string[] = [];
      const files = buildFaqFiles(source, targetDir, empties);
      if (empties.length) {
        console.log(`  WARNING ${leaf.title}: ${empties.length} FAQ answer(s) rendered empty, not written`);
        stats.emptyFaqAnswers += empties.length;
      }
      for (const f of files) {
        keep.add(f.rel);
        if (f.content !== null) writeFile(f.rel, f.content, dryRun);
      }
      stats.faqFiles += files.filter((f) => f.content !== null).length;
      continue;
    }

    const dir = leaf.chain.join("/");
    let rel: string;
    let content: string | null;

    if (leaf.kind === "stub") {
      rel = `${DOCS_ROOT}/${dir}/${slugify(leaf.title) || "untitled"}/index.md`;
      content = buildStub(leaf);
    } else {
      // leaf.contentType is the NAV node's type. For a stub the nav resolved by
      // url it is links_2026, while entryUid points at a docs_article, so the
      // entry's own type has to be derived rather than taken from the leaf.
      const entryContentType = leaf.kind === "article_via_url" ? "docs_article" : leaf.contentType;
      const bucket = entryContentType === "sample_apps_demo_page" ? samples : articles;
      const entry = bucket.get(leaf.entryUid!) ?? articles.get(leaf.entryUid!);
      if (!entry) {
        console.log(`  MISSING ${leaf.contentType} ${leaf.entryUid}`);
        continue;
      }
      const name = articleFileName(leaf.url);
      if (!name) {
        console.log(`  SKIP (no derivable filename): ${leaf.entryUid} url=${JSON.stringify(leaf.url)}`);
        continue;
      }
      rel = `${DOCS_ROOT}/${dir}/${name}`;
      const source = await productionVersionOf(entryContentType, entry);
      content =
        entryContentType === "sample_apps_demo_page"
          ? buildSampleApp(source)
          : buildArticle(source, leaf.url);
      if (content === null) {
        // No article_section blocks. Leaving the old file in place would be
        // worse than saying so, since it would silently survive as content the
        // CMS no longer backs.
        stats.skippedNoContent++;
        console.log(`  SKIP (no article_section content): ${leaf.url}`);
        keep.add(rel);
        continue;
      }
    }

    keep.add(rel);

    // Pull an existing file with the same url over first so git follows it.
    if (!fs.existsSync(path.join(repoRoot, rel))) {
      const key = canonicalizeUrl(leaf.url);
      const candidates = key ? (urlIndex.get(key) ?? []) : [];
      const from = candidates.find(
        (c) => !consumed.has(c) && c !== rel && !globalExpected.has(c) && fs.existsSync(path.join(repoRoot, c)),
      );
      if (from) {
        consumed.add(from);
        movePath(from, rel, dryRun);
        stats.moved++;
      }
    }

    writeFile(rel, content, dryRun);
    stats.written++;
  }

  // Pass 2: delete whatever this product's folder still holds that the nav
  // does not claim. Runs only after every write above has landed.
  const existing: string[] = [];
  listMarkdown(path.join(repoRoot, DOCS_ROOT, slug), existing);
  for (const abs of existing) {
    const rel = path.relative(repoRoot, abs);
    if (keep.has(rel)) continue;
    removePath(rel, dryRun);
    stats.deleted++;
  }
  pruneEmptyDirs(path.join(repoRoot, DOCS_ROOT, slug), dryRun);

  return stats;
}

function pruneEmptyDirs(absDir: string, dryRun: boolean): void {
  if (dryRun || !fs.existsSync(absDir)) return;
  for (const e of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (e.isDirectory()) pruneEmptyDirs(path.join(absDir, e.name), dryRun);
  }
  if (fs.readdirSync(absDir).length === 0) fs.rmdirSync(absDir);
}

async function applyOrphans(
  tree: NavTree,
  store: Map<string, Map<string, Entry>>,
  urlIndex: Map<string, string[]>,
  globalExpected: Set<string>,
  dryRun: boolean,
): Promise<Stats> {
  const stats: Stats = { written: 0, moved: 0, faqFiles: 0, deleted: 0, skippedNoContent: 0, emptyFaqAnswers: 0 };
  const articles = store.get("docs_article")!;
  const rows: string[][] = [["Doc name", "UID", "Full URL"]];

  for (const orphan of tree.orphans) {
    const entry = articles.get(orphan.uid);
    if (!entry) continue;
    const name = articleFileName(orphan.url) ?? `${orphan.uid}.md`;
    const rel = `${ORPHAN_DIR}/${name}`;

    if (!fs.existsSync(path.join(repoRoot, rel))) {
      const key = canonicalizeUrl(orphan.url);
      const from = (key ? (urlIndex.get(key) ?? []) : []).find(
        (c) => !globalExpected.has(c) && fs.existsSync(path.join(repoRoot, c)),
      );
      if (from) {
        movePath(from, rel, dryRun);
        stats.moved++;
      }
    }

    const source = await productionVersionOf("docs_article", entry);
    const content = buildArticle(source);
    if (content) {
      writeFile(rel, content, dryRun);
      stats.written++;
    } else if (!fs.existsSync(path.join(repoRoot, rel))) {
      stats.skippedNoContent++;
      console.log(`  SKIP (no article_section content): ${orphan.url}`);
      continue;
    }
    rows.push([orphan.title, orphan.uid, orphan.fullUrl]);
  }

  const csv = rows
    .map((r) => r.map((v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v)).join(","))
    .join("\n");
  writeFile(`${ORPHAN_DIR}/orphan-docs.csv`, `${csv}\n`, dryRun);
  console.log(`  orphan-docs.csv: ${rows.length - 1} rows`);
  return stats;
}

/**
 * Top-level cs-docs entries no product owns, so applyProduct never reaches
 * them. Removed only after --orphans has lifted anything still published, and
 * after every product has been written.
 */
const STALE_TOP_LEVEL = [
  "developers", "content-managers", "data-and-insights-lytics", "lytics",
  "data-and-insights", "get-started", "overview",
];
const STALE_ROOT_FILES = [
  "contentstack-help-center.md", "introducing-the-new-contentstack.md",
  "keyboard-shortcuts.md", "platform-discovery.md", "test-entry-csdocs.md",
];
const STALE_ASSET_DIRS = ["assets/screenshots", "assets/svg"];

function applyCleanup(tree: NavTree, dryRun: boolean): Stats {
  const stats: Stats = { written: 0, moved: 0, faqFiles: 0, deleted: 0, skippedNoContent: 0, emptyFaqAnswers: 0 };
  const productSlugs = new Set(tree.products.map((p) => p.slug));

  for (const dir of STALE_TOP_LEVEL) {
    if (productSlugs.has(dir)) {
      // A slug that became a real nav product since the list was written.
      console.log(`  KEEP ${dir}/ (now a nav product)`);
      continue;
    }
    const abs = path.join(repoRoot, DOCS_ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    const files: string[] = [];
    listMarkdown(abs, files);
    removePath(`${DOCS_ROOT}/${dir}`, dryRun);
    stats.deleted += files.length;
    console.log(`  removed ${DOCS_ROOT}/${dir}/ (${files.length} files)`);
  }

  for (const file of STALE_ROOT_FILES) {
    const rel = `${DOCS_ROOT}/${file}`;
    if (!fs.existsSync(path.join(repoRoot, rel))) continue;
    removePath(rel, dryRun);
    stats.deleted++;
    console.log(`  removed ${rel}`);
  }

  for (const dir of STALE_ASSET_DIRS) {
    const rel = `${DOCS_ROOT}/${dir}`;
    if (!fs.existsSync(path.join(repoRoot, rel))) continue;
    removePath(rel, dryRun);
    console.log(`  removed ${rel}/ (image folder)`);
  }

  // Products prune their own empties, but a move out of a folder no product
  // owns leaves shells behind that nothing else would clear.
  pruneEmptyDirs(path.join(repoRoot, DOCS_ROOT), dryRun);
  return stats;
}

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes("--dry-run");
  const all = argv.includes("--all");
  const orphansOnly = argv.includes("--orphans");
  const cleanupOnly = argv.includes("--cleanup");
  let product = "";
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--product" && argv[i + 1]) product = argv[++i]!;
  }
  if (!product && !all && !orphansOnly && !cleanupOnly) {
    console.error("Usage: nav-apply.ts (--product <slug> | --orphans | --cleanup | --all) [--dry-run]");
    process.exit(1);
  }

  const treePath = path.join(scriptDir, "..", ".nav-tree.json");
  if (!fs.existsSync(treePath)) {
    console.error(`No nav tree at ${treePath}. Run: npm run nav-tree`);
    process.exit(1);
  }
  const tree: NavTree = JSON.parse(fs.readFileSync(treePath, "utf8"));

  process.stderr.write("Fetching entries...\n");
  const store = new Map<string, Map<string, Entry>>();
  for (const ct of ["docs_article", "product_faqs_2026", "sample_apps_demo_page"]) {
    store.set(ct, await fetchAll(ct));
  }
  const urlIndex = buildUrlIndex();
  const globalExpected = allExpectedPaths(tree);

  const label = dryRun ? "[dry-run] " : "";
  const totals: Stats = { written: 0, moved: 0, faqFiles: 0, deleted: 0, skippedNoContent: 0, emptyFaqAnswers: 0 };
  const add = (s: Stats) => {
    totals.written += s.written;
    totals.moved += s.moved;
    totals.faqFiles += s.faqFiles;
    totals.deleted += s.deleted;
    totals.skippedNoContent += s.skippedNoContent;
    totals.emptyFaqAnswers += s.emptyFaqAnswers;
  };

  // Orphans are lifted out of the stale folders before anything deletes them.
  if (orphansOnly || all) {
    console.log(`\n${label}orphan-docs/`);
    add(await applyOrphans(tree, store, urlIndex, globalExpected, dryRun));
  }

  if (!orphansOnly && !cleanupOnly) {
    // Least-changed products first so a regression shows up on a product whose
    // tree we already know is correct, rather than buried in the biggest one.
    const order = [
      "studio", "assets", "brand-kit", "analytics", "developer-hub", "personalize",
      "lytics-cdp", "agent-os", "administration", "launch", "developer-resources",
      "marketplace", "headless-cms",
    ];
    const slugs = all
      ? [...order.filter((s) => tree.products.some((p) => p.slug === s)),
         ...tree.products.map((p) => p.slug).filter((s) => !order.includes(s))]
      : [product];
    for (const slug of slugs) {
      if (!tree.products.some((p) => p.slug === slug)) {
        console.error(`Unknown product "${slug}". Known: ${tree.products.map((p) => p.slug).join(", ")}`);
        process.exit(1);
      }
      console.log(`\n${label}${slug}`);
      const s = await applyProduct(tree, slug, store, urlIndex, globalExpected, dryRun);
      console.log(
        `  written ${s.written}  moved ${s.moved}  faqFiles ${s.faqFiles}  deleted ${s.deleted}` +
          (s.skippedNoContent ? `  noContent ${s.skippedNoContent}` : ""),
      );
      add(s);
    }
  }

  if (cleanupOnly || all) {
    console.log(`\n${label}cleanup`);
    add(applyCleanup(tree, dryRun));
  }

  console.log(`\n${label}TOTAL  written ${totals.written}  moved ${totals.moved}  faqFiles ${totals.faqFiles}  deleted ${totals.deleted}`);
  if (totals.skippedNoContent) console.log(`  entries with no article_section content: ${totals.skippedNoContent}`);
  if (dryRun) console.log("\nNothing was modified.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
