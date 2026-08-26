#!/usr/bin/env node
/**
 * Phase 1 reporting for the cs-docs nav rebuild. Reads .nav-tree.json (from
 * nav-tree.ts) plus the current cs-docs/ tree, and writes a reviewable set of
 * CSVs describing exactly what Phase 2 would do. Read-only, never touches
 * cs-docs/.
 *
 * Nothing here decides anything on its own. Every judgement call it encodes is
 * recorded in .claude/plans/now-i-want-you-unified-eclipse.md.
 *
 * Usage: npx tsx src/nav-audit.ts [--tree <path>] [--out <dir>]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocIndex, canonicalizeUrl, type DocFile } from "./doc-index.js";
// Imported from lib/nav-shared.ts rather than nav-tree.ts: this script only
// reads the generated .nav-tree.json, and nav-tree.ts demands CMS credentials at
// import time.
import { slugify, DOCS_BASE_URL, articleFileName } from "./lib/nav-shared.js";
import type { NavLeaf, NavTree } from "./lib/nav-shared.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
const DOCS_ROOT = "cs-docs";

/** Where the FAQ backfill put its output before the nav headers were honoured. */
const LEGACY_FAQ_SEGMENT = "troubleshooting-and-faqs";

/**
 * Products whose cs-docs/ folder was created under a different slug than the
 * one the nav title now produces. Only needed for finding existing FAQ
 * directories, since article moves are matched by url via doc-index and do not
 * care what folder a file currently sits in.
 *
 * cs-docs/data-and-insights-lytics/ is deliberately NOT an alias for
 * lytics-cdp: its FAQ directory holds the "Data & Insights (Lytics) FAQs"
 * container, which is an orphan the nav does not reference at all.
 */
const LEGACY_PRODUCT_SLUGS: Record<string, string[]> = {
  "lytics-cdp": ["lytics"],
  "developer-resources": ["developers"],
};

/** Top-level cs-docs folders that no product in the nav claims. */
const STALE_TOP_LEVEL: Record<string, string> = {
  developers: "stale audience-split export, superseded by developer-resources",
  "content-managers": "not in nav",
  "data-and-insights-lytics": "fold into lytics-cdp",
  lytics: "fold into lytics-cdp",
  "data-and-insights": "fold into lytics-cdp",
  "get-started": "not in nav",
  overview: "not in nav",
};

/** Non-markdown folders under cs-docs that Phase 2 removes. */
const DELETE_DIRS = ["assets/screenshots", "assets/svg"];

/** Root-level markdown kept regardless of nav membership. */
const KEEP_ROOT_FILES = new Set(["README.md"]);

type Action = "keep" | "create" | "move" | "delete" | "quarantine";

interface ManifestRow {
  action: Action;
  kind: string;
  uid: string;
  contentType: string;
  targetPath: string;
  sourcePath: string;
  reason: string;
}

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function writeCsv(file: string, header: string[], rows: unknown[][]): void {
  const lines = [header.join(","), ...rows.map((r) => r.map(csvEscape).join(","))];
  fs.writeFileSync(file, `${lines.join("\n")}\n`);
  console.log(`  ${path.basename(file).padEnd(20)} ${rows.length} rows`);
}

/**
 * Filename for an article leaf. Matches the existing backfill convention: drop
 * the leading product-ish segment of the url and dash-join whatever remains, so
 * /developers/sdks/content-delivery-sdk/php/reference becomes
 * sdks-content-delivery-sdk-php-reference.md rather than colliding on
 * reference.md.
 */
export { articleFileName };

export function targetPathForLeaf(leaf: NavLeaf): string | null {
  const dir = leaf.chain.join("/");
  if (leaf.kind === "stub") {
    const slug = slugify(leaf.title) || "untitled";
    return `${DOCS_ROOT}/${dir}/${slug}/index.md`;
  }
  if (leaf.kind === "faqs") {
    // A container, not a file. Handled separately as a directory move.
    return null;
  }
  const name = articleFileName(leaf.url);
  if (!name) return null;
  return `${DOCS_ROOT}/${dir}/${name}`;
}

function listMarkdown(absDir: string, out: string[]): void {
  if (!fs.existsSync(absDir)) return;
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(absDir, entry.name);
    if (entry.isDirectory()) listMarkdown(full, out);
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
}

function main() {
  const argv = process.argv.slice(2);
  let treePath = path.join(scriptDir, "..", ".nav-tree.json");
  let outDir = path.join(scriptDir, "..", "nav-audit");
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--tree" && argv[i + 1]) treePath = path.resolve(argv[++i]!);
    if (argv[i] === "--out" && argv[i + 1]) outDir = path.resolve(argv[++i]!);
  }
  if (!fs.existsSync(treePath)) {
    console.error(`No nav tree at ${treePath}. Run: npx tsx src/nav-tree.ts`);
    process.exit(1);
  }

  const tree: NavTree = JSON.parse(fs.readFileSync(treePath, "utf8"));
  const index = buildDocIndex(repoRoot, DOCS_ROOT);
  fs.mkdirSync(outDir, { recursive: true });

  const productSlugs = new Set(tree.products.map((p) => p.slug));
  const manifest: ManifestRow[] = [];
  const expected = new Set<string>();
  /** Files consumed as the source of a move, so they are not also deleted. */
  const consumed = new Set<string>();

  // ── Article-shaped leaves ────────────────────────────────────────────────
  // Two passes. Every target path has to be known before any action is chosen,
  // otherwise a duplicated entry whose first slot needs a copy can "move" the
  // file away from a second slot where it already sits correctly. Order would
  // silently decide which of those happened.
  const leafTargets = new Map<NavLeaf, string | null>();
  for (const leaf of tree.leaves) {
    if (leaf.kind === "faqs") continue;
    const target = targetPathForLeaf(leaf);
    leafTargets.set(leaf, target);
    if (target) expected.add(target);
  }

  for (const leaf of tree.leaves) {
    if (leaf.kind === "faqs") continue;
    const target = leafTargets.get(leaf) ?? null;
    if (!target) {
      manifest.push({
        action: "create",
        kind: leaf.kind,
        uid: leaf.entryUid ?? leaf.navUid,
        contentType: leaf.contentType,
        targetPath: "",
        sourcePath: "",
        reason: `cannot derive a filename, url is ${JSON.stringify(leaf.url)}`,
      });
      continue;
    }

    const abs = path.join(repoRoot, target);
    if (fs.existsSync(abs)) {
      manifest.push({
        action: "keep",
        kind: leaf.kind,
        uid: leaf.entryUid ?? leaf.navUid,
        contentType: leaf.contentType,
        targetPath: target,
        sourcePath: target,
        reason: "already at the nav-derived path",
      });
      continue;
    }

    // Prefer moving an existing file with the same url so git history survives.
    const canonical = canonicalizeUrl(leaf.url);
    const candidates = (canonical ? index.urlIndex.get(canonical) : undefined) ?? [];
    // A file already sitting at some other nav-required path stays put. Only a
    // file the new tree has no place for is eligible to be moved here.
    const source = candidates.find((f) => !consumed.has(f.relPath) && !expected.has(f.relPath));
    if (source) {
      consumed.add(source.relPath);
      manifest.push({
        action: "move",
        kind: leaf.kind,
        uid: leaf.entryUid ?? leaf.navUid,
        contentType: leaf.contentType,
        targetPath: target,
        sourcePath: source.relPath,
        reason: candidates.length > 1 ? `url matched ${candidates.length} files, took the first unused` : "url match",
      });
      continue;
    }

    const duplicated = (tree.entryPaths[leaf.entryUid ?? ""] ?? []).length > 1;
    manifest.push({
      action: "create",
      kind: leaf.kind,
      uid: leaf.entryUid ?? leaf.navUid,
      contentType: leaf.contentType,
      targetPath: target,
      sourcePath: "",
      reason: leaf.kind === "stub"
        ? "new link stub"
        : duplicated
          ? "additional copy, this entry sits at more than one nav position"
          : "no existing file with this url",
    });
  }

  // ── FAQ containers, moved as whole directories ───────────────────────────
  const faqRows: unknown[][] = [];
  for (const leaf of tree.leaves) {
    if (leaf.kind !== "faqs") continue;
    const containerSlug = slugify(leaf.title) || "untitled";
    const product = leaf.chain[0]!;
    const targetDir = `${DOCS_ROOT}/${leaf.chain.join("/")}/${containerSlug}`;

    // The nav-derived location wins once the container has already moved there,
    // otherwise fall back to the pre-migration troubleshooting-and-faqs/ path
    // under this product's current or former slug. Without checking the target
    // first, a converged tree reports every FAQ file as a deletion.
    const candidateDirs = [
      targetDir,
      ...[product, ...(LEGACY_PRODUCT_SLUGS[product] ?? [])].map(
        (slug) => `${DOCS_ROOT}/${slug}/${LEGACY_FAQ_SEGMENT}/${containerSlug}`,
      ),
    ];
    const legacyDir = candidateDirs.find((dir) => fs.existsSync(path.join(repoRoot, dir))) ?? candidateDirs[1]!;

    const files: string[] = [];
    listMarkdown(path.join(repoRoot, legacyDir), files);
    const same = targetDir === legacyDir;

    for (const abs of files) {
      const rel = path.relative(repoRoot, abs);
      const target = same ? rel : path.join(targetDir, path.relative(path.join(repoRoot, legacyDir), abs));
      expected.add(target);
      consumed.add(rel);
      if (!same) {
        manifest.push({
          action: "move",
          kind: "faq_file",
          uid: leaf.entryUid ?? leaf.navUid,
          contentType: leaf.contentType,
          targetPath: target,
          sourcePath: rel,
          reason: `FAQ container relocated under the nav header "${leaf.chainTitles.at(-1) ?? ""}"`,
        });
      }
    }

    faqRows.push([
      leaf.title,
      leaf.entryUid ?? leaf.navUid,
      legacyDir,
      targetDir,
      files.length,
      files.length === 0 ? "NOT ON DISK, Phase 2 must generate it from the CMS" : same ? "already correct" : "directory move",
    ]);
  }

  // ── Everything on disk that the nav does not claim ───────────────────────
  const orphanByUrl = new Map<string, (typeof tree.orphans)[number]>();
  for (const o of tree.orphans) {
    const key = canonicalizeUrl(o.url);
    if (key) orphanByUrl.set(key, o);
  }

  const allMarkdown: string[] = [];
  listMarkdown(path.join(repoRoot, DOCS_ROOT), allMarkdown);
  const deletions: unknown[][] = [];

  for (const abs of allMarkdown) {
    const rel = path.relative(repoRoot, abs);
    if (expected.has(rel) || consumed.has(rel)) continue;
    // orphan-docs/ is managed by nav-apply --orphans. Its files match orphan
    // urls by definition, so leaving them in scope re-quarantines all 58 on
    // every run and the audit never converges.
    if (rel.startsWith(`${DOCS_ROOT}/orphan-docs/`)) continue;

    const relInDocs = path.relative(DOCS_ROOT, rel);
    const top = relInDocs.split(path.sep)[0]!;
    if (!relInDocs.includes(path.sep) && KEEP_ROOT_FILES.has(relInDocs)) continue;

    const doc: DocFile | undefined = index.files.find((f) => f.relPath === rel);
    const canonical = doc?.canonicalUrl ?? null;
    const orphan = canonical ? orphanByUrl.get(canonical) : undefined;

    if (orphan) {
      const target = `${DOCS_ROOT}/orphan-docs/${articleFileName(orphan.url) ?? path.basename(rel)}`;
      manifest.push({
        action: "quarantine",
        kind: "orphan",
        uid: orphan.uid,
        contentType: "docs_article",
        targetPath: target,
        sourcePath: rel,
        reason: "published to production but unreachable from the left nav",
      });
      continue;
    }

    // The FAQ containers are written as exploded NN-section/NN-question trees.
    // A single <product>/faqs.md is the pre-explosion dump of that same
    // content, superseded rather than lost.
    const supersededFaqDump = /^\/[^/]+\/faqs$/.test(canonical ?? "");

    const reason = supersededFaqDump
      ? "legacy single-file FAQ dump, superseded by the exploded FAQ directory"
      : !relInDocs.includes(path.sep)
        ? "root-level file, not reachable from the nav"
        : (STALE_TOP_LEVEL[top] ?? (productSlugs.has(top) ? "inside a nav product but at no nav position" : "top-level folder not in the nav"));
    manifest.push({
      action: "delete",
      kind: "stale",
      uid: doc?.uid ?? "",
      contentType: "",
      targetPath: "",
      sourcePath: rel,
      reason,
    });
    deletions.push([rel, top, doc?.url ?? "", reason]);
  }

  // Orphans with no file on disk still need writing into orphan-docs/.
  const quarantined = new Set(manifest.filter((m) => m.action === "quarantine").map((m) => m.uid));
  for (const o of tree.orphans) {
    if (quarantined.has(o.uid)) continue;
    const settled = `${DOCS_ROOT}/orphan-docs/${articleFileName(o.url) ?? `${o.uid}.md`}`;
    if (fs.existsSync(path.join(repoRoot, settled))) continue;
    manifest.push({
      action: "create",
      kind: "orphan",
      uid: o.uid,
      contentType: "docs_article",
      targetPath: `${DOCS_ROOT}/orphan-docs/${articleFileName(o.url) ?? `${o.uid}.md`}`,
      sourcePath: "",
      reason: "orphan with no file on disk, written fresh from the CMS",
    });
  }

  for (const dir of DELETE_DIRS) {
    const abs = path.join(repoRoot, DOCS_ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    manifest.push({
      action: "delete",
      kind: "asset_dir",
      uid: "",
      contentType: "",
      targetPath: "",
      sourcePath: `${DOCS_ROOT}/${dir}`,
      reason: "image folder, not nav content",
    });
    deletions.push([`${DOCS_ROOT}/${dir}`, "assets", "", "image folder, not nav content"]);
  }

  // ── Reports ──────────────────────────────────────────────────────────────
  console.log(`\nWriting ${path.relative(repoRoot, outDir)}/`);

  writeCsv(
    path.join(outDir, "manifest.csv"),
    ["action", "kind", "uid", "content_type", "target_path", "source_path", "reason"],
    manifest.map((m) => [m.action, m.kind, m.uid, m.contentType, m.targetPath, m.sourcePath, m.reason]),
  );

  const dupRows = Object.entries(tree.entryPaths)
    .filter(([, paths]) => paths.length > 1)
    .map(([uid, paths]) => {
      const leaf = tree.leaves.find((l) => l.entryUid === uid)!;
      const folders = [...new Set(paths.map((p) => p.split("/")[0]!))].sort();
      return [leaf.title, uid, folders.join(" | "), paths.length, leaf.url ?? "", paths.join(" ; ")];
    })
    .sort((a, b) => String(a[2]).localeCompare(String(b[2])) || String(a[0]).localeCompare(String(b[0])));
  writeCsv(
    path.join(outDir, "duplicates.csv"),
    ["Doc name", "UID", "Product folder", "Nav slots", "URL", "Paths"],
    dupRows,
  );

  writeCsv(
    path.join(outDir, "orphans.csv"),
    ["Doc name", "UID", "Full URL"],
    tree.orphans.map((o) => [o.title, o.uid, o.fullUrl]),
  );

  writeCsv(
    path.join(outDir, "link-stubs.csv"),
    ["Nav path", "Link title", "URL", "Resolution", "Resolved UID"],
    tree.leaves
      .filter((l) => l.kind === "stub" || l.kind === "article_via_url")
      .map((l) => [
        l.chain.join("/"),
        l.title,
        l.url ?? "",
        l.kind === "article_via_url" ? "resolved to docs_article" : `stub: ${l.stubReason}`,
        l.entryUid ?? "",
      ]),
  );

  writeCsv(
    path.join(outDir, "unpublished.csv"),
    ["Nav path", "Doc name", "UID", "URL"],
    tree.leaves
      .filter((l) => (l.kind === "article" || l.kind === "article_via_url") && !l.prodPublished)
      .map((l) => [l.chain.join("/"), l.title, l.entryUid ?? "", l.url ?? ""]),
  );

  writeCsv(path.join(outDir, "deletions.csv"), ["path", "top_level", "url", "reason"], deletions);

  writeCsv(
    path.join(outDir, "faq-moves.csv"),
    ["Container", "UID", "Current dir", "Target dir", "Files", "Note"],
    faqRows,
  );

  writeCsv(
    path.join(outDir, "cms-issues.csv"),
    ["kind", "uid", "chain", "detail"],
    tree.issues.map((i) => [i.kind, i.uid ?? "", i.chain ?? "", i.detail]),
  );

  // ── Summary ──────────────────────────────────────────────────────────────
  const byAction = new Map<Action, number>();
  for (const m of manifest) byAction.set(m.action, (byAction.get(m.action) ?? 0) + 1);
  console.log("\nPlanned actions:");
  for (const action of ["keep", "move", "create", "quarantine", "delete"] as Action[]) {
    console.log(`  ${action.padEnd(12)} ${byAction.get(action) ?? 0}`);
  }
  console.log(`\n  markdown on disk now   ${allMarkdown.length}`);
  console.log(`  expected after Phase 2 ${expected.size + (byAction.get("create") ?? 0)}`);
  console.log(`  orphans                ${tree.orphans.length}`);
  console.log(`\nNothing under ${DOCS_ROOT}/ was modified.`);
}

main();
