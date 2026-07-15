import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadDeliveryConfig } from "./config.js";
import { findRepoRoot } from "./diff.js";
import { buildDocIndex, canonicalizeUrl, type DocFile } from "./doc-index.js";
import { loadOrFetchEntries, extractEntryHtml, type CdaEntry } from "./cda-fetch.js";
import { injectImagesIntoDoc, type ImageReport } from "./inject-images.js";

// ─────────────────────────────────────────────────────────────────────────────
// Workstream A CLI: backfill missing image references (and un-flatten callouts)
// into the rich cs-docs markdown files, driven by the CMS HTML.
//
//   npm run image-inject                 # dry-run over all rich files
//   npm run image-inject -- --apply      # write changes
//   npm run image-inject -- --file cs-docs/launch/x.md
//   npm run image-inject -- --dir cs-docs/agent-os --apply
//   npm run image-inject -- --refresh    # re-fetch the CDA cache first
// ─────────────────────────────────────────────────────────────────────────────

interface Args {
  apply: boolean;
  refresh: boolean;
  file?: string;
  dir?: string;
}

function parseArgs(argv: string[]): Args {
  const args: Args = { apply: false, refresh: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--apply") args.apply = true;
    else if (a === "--refresh") args.refresh = true;
    else if (a === "--file") args.file = argv[++i];
    else if (a === "--dir") args.dir = argv[++i];
  }
  return args;
}

interface FileOutcome {
  relPath: string;
  matchedBy: "uid" | "url" | "path";
  entryUid: string;
  imagesInHtml: number;
  imagesInjected: number;
  reports: ImageReport[];
  changed: boolean;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const config = loadDeliveryConfig(repoRoot);

  const index = buildDocIndex(repoRoot, config.CS_DOCS_ROOT);
  const entries = await loadOrFetchEntries(config, { refresh: args.refresh });

  // Reverse indexes: entry lookup by uid / canonical url.
  const entryByUid = new Map<string, CdaEntry>();
  const entryByUrl = new Map<string, CdaEntry[]>();
  for (const e of entries) {
    if (e.uid) entryByUid.set(e.uid, e);
    const canon = canonicalizeUrl(e.url);
    if (canon) {
      const arr = entryByUrl.get(canon) ?? [];
      arr.push(e);
      entryByUrl.set(canon, arr);
    }
  }

  // Which files to process. --file/--dir may be given relative to the repo root
  // or the current working directory, or as an absolute path.
  const resolveCandidates = (p: string): string[] =>
    path.isAbsolute(p) ? [p] : [path.resolve(process.cwd(), p), path.resolve(repoRoot, p)];

  let targets: DocFile[] = index.files.filter((f) => f.hasBody);
  if (args.file) {
    const cands = new Set(resolveCandidates(args.file));
    targets = targets.filter((f) => cands.has(f.filePath));
    if (targets.length === 0) {
      console.error(`image-inject: --file ${args.file} not found among rich docs (must have a body).`);
      process.exit(1);
    }
  } else if (args.dir) {
    const prefixes = resolveCandidates(args.dir).map((d) => d.replace(/\/+$/, "") + path.sep);
    targets = targets.filter((f) => prefixes.some((p) => f.filePath.startsWith(p)));
  }

  const docsRootAbs = path.isAbsolute(config.CS_DOCS_ROOT)
    ? config.CS_DOCS_ROOT
    : path.join(repoRoot, config.CS_DOCS_ROOT);

  // The file's on-disk path is a candidate url too: some files declare a
  // frontmatter url that points at a different entry than the one that generated
  // their body (a data-quality issue), but the path slug usually matches the
  // correct entry. We try every candidate and keep the one whose HTML actually
  // aligns with the file, which also prevents injecting images from a wrong doc.
  const pathCanonical = (doc: DocFile): string | null => {
    const rel = path.relative(docsRootAbs, doc.filePath).replace(/\.md$/i, "");
    return canonicalizeUrl(`/${rel}`);
  };

  // Minimum fraction of the entry's text blocks that must align to accept it.
  const MIN_ALIGN_RATIO = 0.5;

  const outcomes: FileOutcome[] = [];
  const unmatched: string[] = [];
  const lowConfidence: string[] = [];
  let filesChanged = 0;
  let totalInjected = 0;

  for (const doc of targets) {
    // Gather candidate entries: by uid, by frontmatter url, by path slug.
    const candidates = new Map<string, { entry: CdaEntry; via: "uid" | "url" | "path" }>();
    if (doc.uid && entryByUid.has(doc.uid)) {
      candidates.set(doc.uid, { entry: entryByUid.get(doc.uid)!, via: "uid" });
    }
    for (const key of [doc.canonicalUrl, pathCanonical(doc)]) {
      if (!key) continue;
      for (const e of entryByUrl.get(key) ?? []) {
        if (!candidates.has(e.uid)) {
          candidates.set(e.uid, { entry: e, via: key === doc.canonicalUrl ? "url" : "path" });
        }
      }
    }
    if (candidates.size === 0) {
      unmatched.push(doc.relPath);
      continue;
    }

    const content = fs.readFileSync(doc.filePath, "utf8");

    // Score every candidate; keep the best-aligning one above the threshold.
    let best: { entry: CdaEntry; via: "uid" | "url" | "path"; result: ReturnType<typeof injectImagesIntoDoc>; ratio: number } | null = null;
    for (const { entry, via } of candidates.values()) {
      const { html } = extractEntryHtml(entry);
      const result = injectImagesIntoDoc(content, html);
      const ratio = result.htmlBlocksTotal > 0 ? result.htmlBlocksMatched / result.htmlBlocksTotal : 0;
      if (
        !best ||
        ratio > best.ratio ||
        (ratio === best.ratio && result.imagesInjected > best.result.imagesInjected)
      ) {
        best = { entry, via, result, ratio };
      }
    }

    if (!best || best.ratio < MIN_ALIGN_RATIO) {
      // No candidate whose content matches this file — do not guess.
      lowConfidence.push(`${doc.relPath}  (best align ${best ? Math.round(best.ratio * 100) : 0}%)`);
      continue;
    }

    const result = best.result;
    if (!result.changed && result.reports.every((r) => r.action === "skipped-present")) continue;

    if (result.changed && args.apply) {
      fs.writeFileSync(doc.filePath, result.newContent, "utf8");
    }
    if (result.changed) filesChanged++;
    totalInjected += result.imagesInjected;
    outcomes.push({
      relPath: doc.relPath,
      matchedBy: best.via,
      entryUid: best.entry.uid,
      imagesInHtml: result.imagesInHtml,
      imagesInjected: result.imagesInjected,
      reports: result.reports,
      changed: result.changed,
    });
  }

  // Report
  const reportPath = path.join(scriptDir, "..", ".image-inject-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      { mode: args.apply ? "apply" : "dry-run", filesChanged, totalInjected, lowConfidence, unmatchedCount: unmatched.length, outcomes },
      null,
      2,
    ),
    "utf8",
  );

  const review = outcomes.flatMap((o) =>
    o.reports.filter((r) => r.action === "skipped-review").map((r) => ({ file: o.relPath, ...r })),
  );

  console.log("\n─── image-inject summary ───────────────────────────────");
  console.log(`mode:            ${args.apply ? "APPLY (files written)" : "DRY-RUN (no files written)"}`);
  console.log(`files scanned:   ${targets.length}`);
  console.log(`files changed:   ${filesChanged}`);
  console.log(`images injected: ${totalInjected}`);
  console.log(`unmatched files: ${unmatched.length}`);
  console.log(`low-confidence:  ${lowConfidence.length} (no entry aligned >= ${Math.round(MIN_ALIGN_RATIO * 100)}%)`);
  console.log(`skipped-review:  ${review.length}`);
  console.log(`report:          ${path.relative(repoRoot, reportPath)}`);
  if (review.length > 0) {
    console.log("\nManual review needed:");
    for (const r of review.slice(0, 40)) console.log(`  ${r.file}  ${r.filename || r.url}  — ${r.reason}`);
    if (review.length > 40) console.log(`  ... and ${review.length - 40} more (see report)`);
  }
  if (!args.apply && filesChanged > 0) {
    console.log("\nRe-run with --apply to write these changes, then review with `git diff`.");
  }
}

main().catch((err) => {
  console.error("image-inject: fatal error —", err);
  process.exit(1);
});
