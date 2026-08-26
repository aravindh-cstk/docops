#!/usr/bin/env node

/**
 * Sandbox → Git Sync Script
 *
 * Pulls changes FROM Sandbox CMS back to Git repository.
 * Creates PR with Sandbox edits so writers get credit for CMS changes.
 *
 * Triggered by: cms-to-github-apidocs.yml (every 15 minutes)
 * Environment: SANDBOX only (no Prod access)
 *
 * This ensures Sandbox remains the testing ground and Git remains source of truth.
 */

import fs from "node:fs";
import path from "node:path";
import { buildDocIndex, canonicalizeUrl } from "./doc-index.js";
import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import { getUserName } from "./lib/user-index.js";
import { extractSections } from "./cda-fetch.js";
import { htmlToMarkdown } from "./html-to-md.js";
import { parseTitle } from "./lib/entry-content.js";
// Shared with the Prod → GitHub pull and nav-apply. Previously a local copy
// here, which is how the Prod pull came to be missing the tag filter entirely.
import { AUTOMATION_TAG_PREFIXES } from "./lib/entry-to-markdown.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface Config {
  sandboxApiKey: string;
  sandboxToken: string;
  stackType: "apidocs" | "csdocs";
  lookbackMinutes: number;
}

async function loadConfig(): Promise<Config> {
  const stackType = process.env.STACK_TYPE as "apidocs" | "csdocs";

  if (!stackType) {
    throw new Error("STACK_TYPE environment variable not set (apidocs|csdocs)");
  }

  const sandboxApiKey = process.env[`${stackType.toUpperCase()}_SANDBOX_STACK_API_KEY`];
  const sandboxToken = process.env[`${stackType.toUpperCase()}_SANDBOX_MANAGEMENT_TOKEN`];

  if (!sandboxApiKey || !sandboxToken) {
    throw new Error(`Missing Sandbox credentials for stack type: ${stackType}`);
  }

  const lookbackMinutes = parseInt(process.env.LOOKBACK_MINUTES || "20", 10);

  return {
    sandboxApiKey,
    sandboxToken,
    stackType,
    lookbackMinutes,
  };
}

async function main() {
  console.log("🔄 Sandbox → Git Sync\n");

  const config = await loadConfig();

  const client = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    contentTypeUid: config.stackType === "apidocs" ? "api_detail_page" : "docs_article",
    locale: "en-us",
  });

  console.log(`📍 Source: Sandbox (${config.stackType})`);
  console.log(`📍 Target: Git repository`);
  console.log(`⏱️  Lookback: ${config.lookbackMinutes} minutes\n`);

  try {
    // Get published entries from Sandbox
    const entries = await client.getPublishedEntries();

    console.log(`📋 Found ${entries.length} published entries in Sandbox\n`);

    if (entries.length === 0) {
      console.log("✅ No changes to sync");
      return;
    }

    // For each entry, generate markdown file
    const repoRoot = path.resolve(__dirname, "../../..");
    const docsPath = config.stackType === "apidocs" ? "api-docs" : "cs-docs";
    const basePath = path.join(repoRoot, docsPath);

    const changes: any[] = [];
    let syncCount = 0;

    let unresolvedCount = 0;

    for (const published of entries) {
      // `published.entry` is the content at the entry's published version, so
      // a writer's saved-but-unpublished draft never reaches a PR here — same
      // guarantee the promotion path relies on.
      const entry = published.entry;
      const title = entry.title as string;
      const url = entry.url as string;

      if (published.unresolved) {
        console.log(`  ⚠️  Skipping ${title || published.uid}: could not resolve published version`);
        unresolvedCount++;
        continue;
      }

      if (!title || !url) {
        console.log(`  ⚠️  Skipping entry without title/url`);
        continue;
      }

      // Generate markdown from CMS entry
      const frontmatter = generateFrontmatter(config.stackType, entry);
      const body = buildBody(config.stackType, entry);
      const markdown = `${frontmatter}\n\n${body}`;

      // Determine file path based on stack type and folder
      const filePath = getFilePath(config.stackType, url, entry);
      if (!filePath) continue;
      const fullPath = path.join(basePath, filePath);

      // Skip the write (and the PR-summary entry below) when nothing actually
      // changed, so writers get a real one-line diff instead of every
      // published entry being rewritten on every 15-minute run.
      const existing = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf-8") : null;
      if (existing === markdown) {
        continue;
      }

      // Create directory if it doesn't exist
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write file
      fs.writeFileSync(fullPath, markdown, "utf-8");
      console.log(`  ✓ ${title}`);
      console.log(`    → ${filePath}`);

      changes.push({
        filePath: path.relative(repoRoot, fullPath),
        url: url,
        updatedByName: getUserName(entry.updated_by as string | undefined),
        updatedAt: entry.updated_at || new Date().toISOString(),
      });

      syncCount++;
    }

    // Remove files for entries that used to be published and no longer are.
    // Only ever considers files carrying the `uid` frontmatter marker stamped
    // above, so a hand-authored file that happens to share a url is never at
    // risk — a file without the marker (not yet touched by this sync, or never
    // CMS-owned) is left alone. apidocs entries are never stamped, so this is
    // csdocs-only, matching the create-side folder mapping's own scope.
    let deleteCount = 0;
    if (config.stackType === "csdocs") {
      const publishedUids = new Set(entries.map((p) => p.uid));
      const index = buildDocIndex(repoRoot, "cs-docs");
      for (const doc of index.files) {
        if (doc.uid && !publishedUids.has(doc.uid)) {
          fs.rmSync(doc.filePath);
          console.log(`  ✗ removed ${doc.relPath} (entry ${doc.uid} no longer published)`);
          changes.push({
            filePath: doc.relPath,
            url: doc.url || "",
            updatedByName: "(entry unpublished)",
            updatedAt: new Date().toISOString(),
          });
          deleteCount++;
        }
      }
    }

    // Write summary JSON for the workflow to use. __dirname is tools/cs-sync/src
    // (this script runs via `tsx src/...ts`), but the workflow reads the summary
    // relative to tools/cs-sync/ — write one level up so it's actually found.
    const summaryPath = path.join(__dirname, "..", ".cms-pull-summary.json");
    fs.writeFileSync(summaryPath, JSON.stringify(changes, null, 2), "utf-8");

    console.log(`\n✅ Sync complete: ${syncCount} entries synced, ${deleteCount} files removed`);
    if (unresolvedCount > 0) {
      console.log(`   🛑 ${unresolvedCount} skipped: published version unreadable — run \`npm run verify-publish-details\``);
    }
    console.log("");
  } catch (error) {
    console.error("❌ Error during sync:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

/**
 * csdocs (docs_article) entries hold their content in `article_content`
 * modular blocks, not a `body` field — that field does not exist on this content
 * type, and reading it is what left the Prod pull writing title-only files.
 * apidocs (api_detail_page) has never been verified against a real schema this
 * way, so it keeps reading the flat `body` field as before.
 */
function buildBody(stackType: string, entry: any): string {
  if (stackType !== "csdocs") {
    return (entry.body as string) || "";
  }
  const sections = extractSections(entry);
  const parts: string[] = [];
  for (const sec of sections) {
    if (sec.heading.trim()) parts.push(`## ${sec.heading.trim()}`);
    if (sec.content.trim()) parts.push(htmlToMarkdown(sec.content));
  }
  return parts.join("\n\n");
}

function generateFrontmatter(stackType: string, entry: any): string {
  const lines: string[] = ["---"];

  // csdocs titles carry the "[Marker] - Heading" format the GitHub-to-Sandbox
  // writer adds (docs-article.ts) so the marker survives round trips inside
  // the CMS. Strip it back off here — apidocs titles were never prefixed.
  const title =
    stackType === "csdocs" && entry.title ? parseTitle(entry.title as string).heading : entry.title;
  if (title) lines.push(`title: "${title}"`);
  if (entry.url) lines.push(`url: ${entry.url}`);

  // Stamps this file as CMS-owned so the delete pass below (and doc-index's
  // uidIndex) can tell it apart from a hand-authored file that just happens to
  // share a url — never written before, so pre-existing synced files won't
  // carry this until the sync next touches them.
  if (stackType === "csdocs" && entry.uid) lines.push(`uid: ${entry.uid}`);

  // docs_article's SEO description lives at entry.seo.description, not a
  // top-level entry.description (same field this pipeline already reads in
  // backfill-headless-cms.ts, backfill-product-docs.ts, and nav-apply.ts).
  const description =
    stackType === "csdocs"
      ? (entry.seo as { description?: string } | undefined)?.description
      : entry.description;
  if (description) lines.push(`description: ${description}`);

  if (stackType === "csdocs" && Array.isArray(entry.tags)) {
    const authoredTags = (entry.tags as unknown[]).filter(
      (t): t is string =>
        typeof t === "string" && !AUTOMATION_TAG_PREFIXES.some((prefix) => t.startsWith(prefix)),
    );
    if (authoredTags.length > 0) {
      lines.push(`tags: [${authoredTags.map((t) => JSON.stringify(t)).join(", ")}]`);
    }
  }

  // Add content-type specific fields
  if (entry.api_version) lines.push(`api_version: "${entry.api_version}"`);
  if (entry.superscript) lines.push(`superscript: ${entry.superscript}`);
  if (entry.enable_openapi !== undefined) lines.push(`enable_openapi: ${entry.enable_openapi}`);

  lines.push("---");
  return lines.join("\n");
}

function getFilePath(stackType: string, url: string, entry: any): string | null {
  let folder = "docs";

  if (stackType === "apidocs") {
    const contentType = entry.content_type?.uid;
    if (contentType === "api_detail_page") {
      folder = "api-detail";
    } else if (contentType === "api_requests_cma") {
      folder = "cma-api-requests";
    } else if (contentType === "api_requests_cda") {
      folder = "cda-api-requests";
    } else if (contentType === "api_requests_graphql") {
      folder = "graphql-api-requests";
    }
    return `${folder}/${url}.md`;
  }

  // csdocs: cs-docs/ mirrors the left navigation, so a file's location is not
  // derivable from its url. This used to return `docs/<url>.md`, a folder that
  // has never existed, so every run quietly built a phantom tree beside the
  // real one. Look the file up by its own frontmatter url instead, and skip
  // rather than guess when there is no single match.
  const index = buildDocIndex(path.resolve(__dirname, "../../.."), "cs-docs");
  const canonical = canonicalizeUrl(url);
  const matches = canonical ? (index.urlIndex.get(canonical) ?? []) : [];
  if (matches.length === 1) return path.relative("cs-docs", matches[0]!.relPath);
  console.log(
    matches.length === 0
      ? `  ! no cs-docs file has url ${url}, skipped (run nav-apply to create it)`
      : `  ! ${matches.length} cs-docs files share url ${url}, skipped as ambiguous`,
  );
  return null;
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
