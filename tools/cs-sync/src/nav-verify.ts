#!/usr/bin/env node

/**
 * Prove that cs-docs is an exact mirror of the left navigation.
 *
 * Read-only. Never touches cs-docs/. Exits 1 on the first failing check so it
 * can gate a workflow.
 *
 * This is the verifier Build 1 asks for and never got. Until now the reconcile
 * was proved by throwaway scripts, which is how a stale nav snapshot (crawled
 * while the headless-cms CLI subtree was still excluded) went unnoticed and cost
 * 94 leaves. A check that only ever runs once, by hand, is not a check.
 *
 * Deliberately offline. No live-site HTTP, so it is fast, runs in CI, and cannot
 * fail because contentstack.com had a bad minute. It does read the CMS, because
 * check 6 has to compare each file against a fresh render of its entry, and a
 * verifier that trusts the same snapshot the writer used proves nothing about
 * the CMS.
 *
 * Usage:
 *   npm run nav-verify                 # all checks, human-readable
 *   npm run nav-verify -- --csv        # also write nav-verify/*.csv
 *   npm run nav-verify -- --skip-cms   # checks 1-5 only, no CMS fetch
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import matter from "gray-matter";
import { buildDocIndex, canonicalizeUrl, resolveEntry, type DocIndex } from "./doc-index.js";
import { frontMatterSchema } from "./parser.js";
import { entryToMarkdown, type DocsArticleLike } from "./lib/entry-to-markdown.js";
import {
  articleFileName,
  slugify,
  EXCLUDED_CHAINS,
  PRODUCTION_ENV_UID,
  type NavLeaf,
  type NavTree,
} from "./lib/nav-shared.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
const DOCS_ROOT = "cs-docs";

// Same two-file load order as nav-tree.ts: the repo-root .env holds the
// CONTENTSTACK_DOCS_STACK_* pair, tools/cs-sync/.env holds the delivery pair.
config({ path: path.join(repoRoot, ".env") });
config({ path: path.join(scriptDir, "..", ".env") });

const HOST = "https://api.contentstack.io/v3";

/**
 * Paths this verifier does not own.
 *
 * orphan-docs/ holds pages the nav cannot reach, quarantined for review rather
 * than mirrored. nav-audit.ts learned the same lesson: without this exclusion
 * every file in it reports as an extra on every run.
 */
const IGNORED_PREFIXES = [`${DOCS_ROOT}/orphan-docs/`];

/** Leaf kinds that own exactly one file. */
function ownsOneFile(leaf: NavLeaf): boolean {
  // "faqs" is a container that expands to a directory of files, counted
  // separately. "stub" is a nav position linking outside this repo and owns no
  // file at all since link stubs were removed.
  return leaf.kind !== "faqs" && leaf.kind !== "stub";
}

function expectedPathFor(leaf: NavLeaf): string | null {
  const name = articleFileName(leaf.url);
  if (!name) return null;
  return `${DOCS_ROOT}/${leaf.chain.join("/")}/${name}`;
}

// ── reporting ───────────────────────────────────────────────────────────────

interface Failure {
  check: string;
  detail: string;
}

const failures: Failure[] = [];
let checksRun = 0;

function report(check: string, ok: boolean, summary: string, details: string[] = []): void {
  checksRun++;
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${check.padEnd(42)} ${summary}`);
  if (ok) return;
  for (const d of details.slice(0, 15)) console.log(`          ${d}`);
  if (details.length > 15) console.log(`          ... and ${details.length - 15} more`);
  failures.push({ check, detail: summary });
}

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function writeCsv(file: string, header: string[], rows: unknown[][]): void {
  const lines = [header.join(","), ...rows.map((r) => r.map(csvEscape).join(","))];
  fs.writeFileSync(file, `${lines.join("\n")}\n`);
  console.log(`  ${path.basename(file).padEnd(24)} ${rows.length} rows`);
}

// ── CMS access, for the byte-equality check only ────────────────────────────

async function request(reqPath: string, retriesLeft = 4): Promise<any> {
  const apiKey = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
  const token = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
  if (!apiKey || !token) {
    throw new Error(
      "CONTENTSTACK_DOCS_STACK_API_KEY / _MANAGEMENT_TOKEN must be set, or pass --skip-cms",
    );
  }
  let res: Response;
  try {
    res = await fetch(`${HOST}${reqPath}`, { headers: { api_key: apiKey, authorization: token } });
  } catch (err) {
    if (retriesLeft > 0) {
      await new Promise((r) => setTimeout(r, 2000 * (5 - retriesLeft)));
      return request(reqPath, retriesLeft - 1);
    }
    throw err;
  }
  if ((res.status === 429 || res.status >= 500) && retriesLeft > 0) {
    await new Promise((r) => setTimeout(r, 1500 * (5 - retriesLeft)));
    return request(reqPath, retriesLeft - 1);
  }
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status})`);
  return res.json();
}

async function fetchAllArticles(): Promise<Map<string, any>> {
  const out = new Map<string, any>();
  let skip = 0;
  for (;;) {
    const query = new URLSearchParams({
      locale: "en-us",
      limit: "100",
      skip: String(skip),
      include_count: "true",
      include_publish_details: "true",
    });
    const data = await request(`/content_types/docs_article/entries?${query}`);
    const entries: any[] = Array.isArray(data.entries) ? data.entries : [];
    for (const e of entries) out.set(e.uid, e);
    const total = typeof data.count === "number" ? data.count : out.size;
    skip += entries.length;
    process.stderr.write(`\r  fetching entries ${out.size}/${total}`);
    if (entries.length === 0 || out.size >= total) break;
  }
  process.stderr.write("\n");
  return out;
}

// ── the checks ──────────────────────────────────────────────────────────────

/** 1. Every nav leaf has its file, and every file is claimed by a nav leaf. */
function checkPathSets(tree: NavTree, index: DocIndex): Set<string> {
  const expected = new Set<string>();
  const unnameable: string[] = [];
  for (const leaf of tree.leaves) {
    if (!ownsOneFile(leaf)) continue;
    const rel = expectedPathFor(leaf);
    if (!rel) {
      unnameable.push(`${leaf.chain.join("/")} url=${JSON.stringify(leaf.url)}`);
      continue;
    }
    expected.add(rel);
  }

  const missing = [...expected].filter((rel) => !fs.existsSync(path.join(repoRoot, rel)));
  report(
    "1a nav leaf -> file",
    missing.length === 0,
    `${expected.size} leaves, ${missing.length} missing`,
    missing,
  );
  if (unnameable.length) {
    report("1b leaf url is nameable", false, `${unnameable.length} leaves yield no filename`, unnameable);
  }

  // The reverse direction. FAQ files are claimed by their container, so they are
  // matched by directory prefix rather than by exact path.
  const faqDirs = tree.leaves
    .filter((l) => l.kind === "faqs")
    .map((l) => `${DOCS_ROOT}/${l.chain.join("/")}/${slugify(l.title) || "untitled"}/`);

  const extra = index.files
    .map((f) => f.relPath)
    .filter((rel) => !expected.has(rel))
    .filter((rel) => !faqDirs.some((d) => rel.startsWith(d)))
    .filter((rel) => !IGNORED_PREFIXES.some((p) => rel.startsWith(p)));

  report("1c file -> nav leaf", extra.length === 0, `${extra.length} files no leaf claims`, extra);
  return expected;
}

/** 2. Per-product counts agree between nav and disk. */
function checkPerProduct(tree: NavTree, expected: Set<string>): void {
  const navByProduct = new Map<string, number>();
  for (const rel of expected) {
    const product = rel.split("/")[1] ?? "(root)";
    navByProduct.set(product, (navByProduct.get(product) ?? 0) + 1);
  }
  const mismatches: string[] = [];
  for (const [product, navCount] of [...navByProduct].sort()) {
    const onDisk = [...expected].filter(
      (r) => r.split("/")[1] === product && fs.existsSync(path.join(repoRoot, r)),
    ).length;
    if (onDisk !== navCount) mismatches.push(`${product}: nav ${navCount}, on disk ${onDisk}`);
  }
  report(
    "2  per-product counts",
    mismatches.length === 0,
    `${navByProduct.size} products`,
    mismatches,
  );
}

/** 3. Every leaf entry resolves. Cross-listed entries are expected to be ambiguous. */
function checkResolve(tree: NavTree, index: DocIndex): void {
  const positions = new Map<string, number>();
  for (const leaf of tree.leaves) {
    if (!ownsOneFile(leaf) || !leaf.entryUid) continue;
    positions.set(leaf.entryUid, (positions.get(leaf.entryUid) ?? 0) + 1);
  }

  const bad: string[] = [];
  let mirrored = 0;
  for (const leaf of tree.leaves) {
    if (!ownsOneFile(leaf) || !leaf.entryUid) continue;
    const outcome = resolveEntry(index, { uid: leaf.entryUid, url: leaf.url });
    const navPositions = positions.get(leaf.entryUid) ?? 1;

    if (outcome.status === "unmatched") {
      bad.push(`unmatched ${leaf.entryUid} ${leaf.url ?? ""}`);
    } else if (outcome.status === "ambiguous") {
      // Legitimate only when the nav really does list this entry more than once.
      if (navPositions > 1) mirrored++;
      else bad.push(`ambiguous but listed once: ${leaf.entryUid} ${leaf.url ?? ""}`);
    }
  }
  report(
    "3  resolveEntry for every leaf",
    bad.length === 0,
    `${positions.size} entries, ${mirrored} mirrored positions`,
    bad,
  );
}

/** 4. Frontmatter passes the schema the sync depends on. */
function checkFrontmatter(index: DocIndex): void {
  const bad: string[] = [];
  for (const file of index.files) {
    if (IGNORED_PREFIXES.some((p) => file.relPath.startsWith(p))) continue;
    let data: unknown;
    try {
      data = matter(fs.readFileSync(file.filePath, "utf8")).data;
    } catch (err) {
      bad.push(`${file.relPath}: unparseable frontmatter (${(err as Error).message.split("\n")[0]})`);
      continue;
    }
    const res = frontMatterSchema.safeParse(data);
    if (!res.success) {
      for (const issue of res.error.issues) {
        bad.push(`${file.relPath}: ${issue.path.join(".") || "(root)"}: ${issue.message}`);
      }
    }
  }
  report("4  frontmatter schema", bad.length === 0, `${index.files.length} files`, bad);
}

/**
 * 5. Duplicate urls, with the same rule lint.ts applies.
 *
 * Two files sharing a url is legal and expected for a cross-listed page. What is
 * illegal is those copies differing, because only one of them could sync back.
 */
function checkDuplicateUrls(index: DocIndex): void {
  const diverged: string[] = [];
  let identical = 0;
  for (const [url, files] of index.urlIndex) {
    if (files.length < 2) continue;
    const bodies = files.map((f) => fs.readFileSync(f.filePath, "utf8"));
    if (bodies.every((b) => b === bodies[0])) identical++;
    else diverged.push(`${url}: ${files.map((f) => f.relPath).join(" vs ")}`);
  }
  report(
    "5  duplicate urls are identical",
    diverged.length === 0,
    `${identical} mirrored urls, ${diverged.length} diverged`,
    diverged,
  );
}

/**
 * The version of an entry that Production actually serves.
 *
 * The bulk list endpoint returns the latest draft, which is not what the files
 * were built from. nav-apply.ts renders the production-published version, so a
 * verifier comparing against the draft reports a diff for every page edited
 * since its last publish. That was 165 false failures on the first run, mostly
 * CLI v2 pages sitting at draft 2 against production 1.
 */
const versionCache = new Map<string, any>();
async function productionVersionOf(entry: any): Promise<any> {
  const details = Array.isArray(entry.publish_details) ? entry.publish_details : [];
  const prod = details.find((d: any) => d?.environment === PRODUCTION_ENV_UID);
  if (!prod || typeof prod.version !== "number" || prod.version === entry._version) return entry;
  const key = `${entry.uid}:${prod.version}`;
  const hit = versionCache.get(key);
  if (hit) return hit;
  const data = await request(
    `/content_types/docs_article/entries/${entry.uid}?locale=en-us&version=${prod.version}`,
  );
  versionCache.set(key, data.entry);
  return data.entry;
}

/** 6. Each file equals a fresh render of its CMS entry, at its production version. */
async function checkByteEquality(tree: NavTree, articles: Map<string, any>): Promise<void> {
  const diffs: string[] = [];
  let compared = 0;
  let noEntry = 0;
  for (const leaf of tree.leaves) {
    if (!ownsOneFile(leaf) || !leaf.entryUid) continue;
    const rel = expectedPathFor(leaf);
    if (!rel) continue;
    const abs = path.join(repoRoot, rel);
    if (!fs.existsSync(abs)) continue;

    const entry = articles.get(leaf.entryUid);
    if (!entry) {
      noEntry++;
      continue;
    }
    // sample_apps_demo_page uses a different builder, so only docs_article
    // leaves are comparable here.
    if (leaf.contentType !== "docs_article" && leaf.kind !== "article_via_url") continue;

    let rendered: string | null;
    try {
      const source = await productionVersionOf(entry);
      rendered = entryToMarkdown(source as DocsArticleLike, { urlOverride: leaf.url });
    } catch (err) {
      diffs.push(`${rel}: render threw (${(err as Error).message.split("\n")[0]})`);
      continue;
    }
    if (rendered === null) continue;
    compared++;
    if (fs.readFileSync(abs, "utf8") !== rendered) diffs.push(rel);
  }
  report(
    "6  file equals fresh CMS render",
    diffs.length === 0,
    `${compared} compared, ${noEntry} entries absent from the stack`,
    diffs,
  );
}

// ── main ────────────────────────────────────────────────────────────────────

/**
 * Refuse a snapshot that cannot be trusted, same contract as nav-apply.ts.
 *
 * A verifier reading a snapshot crawled under different filters would certify a
 * tree built from a nav that no longer exists.
 */
function assertTreeIsUsable(tree: NavTree, maxAgeHours: number): void {
  const ageHours = (Date.now() - Date.parse(tree.generatedAt)) / 3_600_000;
  if (!Number.isFinite(ageHours)) {
    console.error(`Nav tree has an unreadable generatedAt (${tree.generatedAt}).`);
    process.exit(1);
  }
  if (ageHours > maxAgeHours) {
    console.error(
      `\nNav tree is ${ageHours.toFixed(1)}h old (limit ${maxAgeHours}h). Run: npm run nav-tree`,
    );
    process.exit(1);
  }
  if (!tree.provenance) {
    console.error(`\nNav tree has no provenance stamp. Re-crawl: npm run nav-tree`);
    process.exit(1);
  }
  const want = [...EXCLUDED_CHAINS].sort();
  const got = [...tree.provenance.excludedChains].sort();
  if (JSON.stringify(want) !== JSON.stringify(got)) {
    console.error(
      `\nNav tree was crawled under a different EXCLUDED_CHAINS than this code uses.\n` +
        `  snapshot: ${got.length ? got.join(", ") : "(none)"}\n` +
        `  code    : ${want.length ? want.join(", ") : "(none)"}\n` +
        `  Re-crawl: npm run nav-tree`,
    );
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  const skipCms = argv.includes("--skip-cms");
  const wantCsv = argv.includes("--csv");
  const maxAgeHours = Number.parseInt(process.env.NAV_VERIFY_MAX_TREE_AGE_HOURS || "6", 10);

  let treePath = path.join(scriptDir, "..", ".nav-tree.json");
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--tree" && argv[i + 1]) treePath = path.resolve(argv[++i]!);
  }
  if (!fs.existsSync(treePath)) {
    console.error(`No nav tree at ${treePath}. Run: npm run nav-tree`);
    process.exit(1);
  }

  const tree: NavTree = JSON.parse(fs.readFileSync(treePath, "utf8"));
  assertTreeIsUsable(tree, maxAgeHours);

  console.log(`nav-verify  snapshot ${tree.generatedAt}  rev ${tree.provenance?.gitRevision ?? "?"}`);
  console.log(`  ${tree.leaves.length} leaves, ${tree.products.length} products\n`);

  const index = buildDocIndex(repoRoot, DOCS_ROOT);

  const expected = checkPathSets(tree, index);
  checkPerProduct(tree, expected);
  checkResolve(tree, index);
  checkFrontmatter(index);
  checkDuplicateUrls(index);

  if (skipCms) {
    console.log("\n  (skipped check 6, byte equality, because --skip-cms was passed)");
  } else {
    const articles = await fetchAllArticles();
    await checkByteEquality(tree, articles);
  }

  if (wantCsv) {
    const outDir = path.join(scriptDir, "..", "nav-verify");
    fs.mkdirSync(outDir, { recursive: true });
    console.log("");
    writeCsv(
      path.join(outDir, "failures.csv"),
      ["check", "detail"],
      failures.map((f) => [f.check, f.detail]),
    );
  }

  console.log("");
  if (failures.length === 0) {
    console.log(`All ${checksRun} checks passed. cs-docs mirrors the left navigation.`);
    console.log("Nothing under cs-docs/ was modified.");
    return;
  }
  console.error(`${failures.length} of ${checksRun} checks FAILED:`);
  for (const f of failures) console.error(`  - ${f.check}: ${f.detail}`);
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
