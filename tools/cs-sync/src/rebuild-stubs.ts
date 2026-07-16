import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadDeliveryConfig } from "./config.js";
import { findRepoRoot } from "./diff.js";
import { buildDocIndex, type DocFile } from "./doc-index.js";
import { loadOrFetchEntries, extractSections, type CdaEntry } from "./cda-fetch.js";
import { htmlToMarkdown } from "./html-to-md.js";

// ─────────────────────────────────────────────────────────────────────────────
// Workstream B CLI: rebuild the frontmatter-only "stub" files (empty body) into
// full documents by converting the entry's HTML, using the shared hardened
// html-to-md converter (images + callouts preserved).
//
// Field mapping (per the plan / user guidance):
//   frontmatter title <- entry.title
//   frontmatter url   <- entry.url (relative)
//   body heading      <- article_section.heading (NOT the regex-split title)
//   body content      <- htmlToMarkdown(article_section.content), per section
// The existing stub frontmatter (uid, content_type, contentstack) is preserved
// byte-for-byte; title/url are added only if missing.
//
//   npm run rebuild-stubs                # dry-run
//   npm run rebuild-stubs -- --apply
//   npm run rebuild-stubs -- --refresh
// ─────────────────────────────────────────────────────────────────────────────

interface Args { apply: boolean; refresh: boolean; }

function parseArgs(argv: string[]): Args {
  const args: Args = { apply: false, refresh: false };
  for (const a of argv) {
    if (a === "--apply") args.apply = true;
    else if (a === "--refresh") args.refresh = true;
  }
  return args;
}

const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---\r?\n?)([\s\S]*)$/;

function splitFrontmatter(content: string): { fm: string; body: string } {
  const m = content.match(FRONTMATTER_RE);
  if (!m) return { fm: "", body: content };
  return { fm: m[1]!, body: m[2]! };
}

function escapeYamlScalar(value: string): string {
  if (/^[A-Za-z0-9_./:-]+$/.test(value)) return value;
  return `"${value.replace(/"/g, '\\"')}"`;
}

// Add `title:` / `url:` to a frontmatter block if absent, right after the ---.
function ensureFrontmatterFields(fm: string, title: string, url: string): string {
  let out = fm;
  const inserts: string[] = [];
  if (title && !/^title:/m.test(out)) inserts.push(`title: ${escapeYamlScalar(title)}`);
  if (url && !/^url:/m.test(out)) inserts.push(`url: ${escapeYamlScalar(url)}`);
  if (inserts.length === 0) return out;
  // insert after the opening --- line
  out = out.replace(/^(---\r?\n)/, (m0) => `${m0}${inserts.join("\n")}\n`);
  return out;
}

function buildBody(entry: CdaEntry): { body: string; imgCount: number } {
  const sections = extractSections(entry);
  const parts: string[] = [];
  let imgCount = 0;
  for (const sec of sections) {
    if (sec.heading.trim()) parts.push(`## ${sec.heading.trim()}`);
    if (sec.content.trim()) {
      const md = htmlToMarkdown(sec.content);
      imgCount += (md.match(/!\[[^\]]*]\(/g) ?? []).length;
      parts.push(md);
    }
  }
  return { body: parts.join("\n\n"), imgCount };
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const config = loadDeliveryConfig(repoRoot);

  const index = buildDocIndex(repoRoot, config.CS_DOCS_ROOT);
  const stubs: DocFile[] = index.files.filter((f) => !f.hasBody && f.uid);
  const entries = await loadOrFetchEntries(config, { refresh: args.refresh });
  const entryByUid = new Map<string, CdaEntry>();
  for (const e of entries) if (e.uid) entryByUid.set(e.uid, e);

  let rebuilt = 0;
  let skippedEmpty = 0;
  let unmatched = 0;
  const skipped: string[] = [];

  for (const stub of stubs) {
    const entry = stub.uid ? entryByUid.get(stub.uid) : undefined;
    if (!entry) {
      unmatched++;
      skipped.push(`${stub.relPath}  — no entry for uid ${stub.uid}`);
      continue;
    }
    const { body, imgCount } = buildBody(entry);
    if (!body.trim()) {
      skippedEmpty++;
      skipped.push(`${stub.relPath}  — entry has no article_content body (nav/listing page)`);
      continue;
    }

    const original = fs.readFileSync(stub.filePath, "utf8");
    const { fm } = splitFrontmatter(original);
    const title = typeof entry.title === "string" ? entry.title : "";
    const url = typeof entry.url === "string" ? entry.url : "";
    const newFm = ensureFrontmatterFields(fm, title, url);
    const newContent = `${newFm.replace(/\s*$/, "")}\n\n${body}\n`;

    if (args.apply) fs.writeFileSync(stub.filePath, newContent, "utf8");
    rebuilt++;
    console.log(`${args.apply ? "rebuilt" : "would rebuild"}: ${stub.relPath} (${imgCount} image(s))`);
  }

  console.log("\n─── rebuild-stubs summary ──────────────────────────────");
  console.log(`mode:            ${args.apply ? "APPLY (files written)" : "DRY-RUN (no files written)"}`);
  console.log(`stub files:      ${stubs.length}`);
  console.log(`rebuilt:         ${rebuilt}`);
  console.log(`skipped (empty): ${skippedEmpty}`);
  console.log(`unmatched uid:   ${unmatched}`);
  if (skipped.length > 0) {
    console.log("\nSkipped:");
    for (const s of skipped.slice(0, 40)) console.log(`  ${s}`);
    if (skipped.length > 40) console.log(`  ... and ${skipped.length - 40} more`);
  }
  if (!args.apply && rebuilt > 0) console.log("\nRe-run with --apply to write these files, then review with `git diff`.");
}

main().catch((err) => {
  console.error("rebuild-stubs: fatal error —", err);
  process.exit(1);
});
