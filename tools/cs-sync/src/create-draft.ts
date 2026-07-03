/**
 * create-draft.ts
 *
 * Reads a list of newly added .md files (from the NEW_FILES env var),
 * parses each one, and creates a DRAFT entry in Contentstack.
 * Entries are never published — they land in the CMS as drafts for review.
 *
 * Usage (CI):
 *   NEW_FILES="cs-docs/product/article.md\ncs-docs/product/other.md" npm run create-draft
 *
 * Usage (local test):
 *   NEW_FILES="cs-docs/headless-cms/my-article.md" npm run create-draft
 */

import * as core from "@actions/core";
import path from "node:path";
import { loadConfig } from "./config.js";
import { ContentstackClient } from "./contentstack.js";
import { parseDocFile } from "./parser.js";
import { buildEntryPayload } from "./payload.js";
import { markdownToHtml } from "./transform.js";
import { processImagesInHtml } from "./assets.js";

interface DraftResult {
  file: string;
  status: "created" | "skipped" | "error";
  uid?: string;
  url?: string;
  reason?: string;
}

async function run(): Promise<void> {
  const repoRoot = process.env.GITHUB_WORKSPACE ?? process.cwd();
  const config = loadConfig(repoRoot);
  const client = new ContentstackClient(config);

  // NEW_FILES is a newline-separated list of repo-relative file paths
  const rawFiles = process.env.NEW_FILES ?? "";
  const files = rawFiles
    .split("\n")
    .map((f) => f.trim())
    .filter((f) => f.endsWith(".md") && f.length > 0);

  if (files.length === 0) {
    console.log("No new .md files detected — nothing to do.");
    return;
  }

  console.log(`Processing ${files.length} new file(s):\n${files.map((f) => `  ${f}`).join("\n")}`);

  const results: DraftResult[] = [];

  for (const relPath of files) {
    console.log(`\n── ${relPath}`);

    try {
      // Parse frontmatter + markdown body
      const doc = parseDocFile(repoRoot, config.CS_DOCS_ROOT, relPath);

      // Check if an entry with this URL already exists (idempotency guard)
      const existing = await client.findEntryByUrl(doc.frontMatter.url);
      if (existing) {
        console.log(`  SKIP — entry already exists (uid: ${existing.uid}, url: ${doc.frontMatter.url})`);
        results.push({ file: relPath, status: "skipped", uid: existing.uid, url: doc.frontMatter.url, reason: "already exists" });
        continue;
      }

      // Convert markdown body to sanitised HTML
      const rawHtml = markdownToHtml(doc.body);

      // Upload any local images referenced in the content
      const html = await processImagesInHtml(rawHtml, doc.filePath, client);

      // Build the entry payload (title, url, article_content blocks)
      const payload = buildEntryPayload(doc.frontMatter, html);

      // Create entry — no publish call = saved as draft automatically
      const entry = await client.createEntry(payload);

      console.log(`  CREATED draft — uid: ${entry.uid}, title: "${payload.title}"`);
      results.push({ file: relPath, status: "created", uid: entry.uid, url: payload.url });

    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ERROR — ${message}`);
      results.push({ file: relPath, status: "error", reason: message });
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────────

  const created = results.filter((r) => r.status === "created");
  const skipped = results.filter((r) => r.status === "skipped");
  const errors  = results.filter((r) => r.status === "error");

  console.log("\n── Summary ──────────────────────────────────────");
  console.log(`  Created : ${created.length}`);
  console.log(`  Skipped : ${skipped.length} (already exist)`);
  console.log(`  Errors  : ${errors.length}`);

  // Write GitHub Actions step summary if running in CI
  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = [
      "## GitHub → CMS: New draft entries",
      "",
      `| File | Status | CMS Entry |`,
      `|------|--------|-----------|`,
    ];
    for (const r of results) {
      const badge = r.status === "created" ? "✅ Created" : r.status === "skipped" ? "⏭ Skipped" : "❌ Error";
      const detail = r.uid ? `uid: \`${r.uid}\`` : r.reason ?? "";
      lines.push(`| \`${r.file}\` | ${badge} | ${detail} |`);
    }
    const fs = await import("node:fs");
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
  }

  if (errors.length > 0) {
    const msg = `${errors.length} file(s) failed to create draft entries`;
    core.setFailed(msg);
    process.exit(1);
  }
}

run().catch((err) => {
  core.setFailed(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
