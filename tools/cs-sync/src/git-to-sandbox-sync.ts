#!/usr/bin/env node

/**
 * Git → Sandbox Sync Script
 *
 * Pushes changes FROM Git repository to Sandbox CMS.
 * Creates/updates DRAFT entries in Sandbox for writers to review.
 *
 * Triggered by: gh-to-sandbox-sync-apidocs.yml / gh-to-sandbox-sync-csdocs.yml
 * Environment: SANDBOX only (no Prod access)
 *
 * STACK_TYPE=csdocs delegates to lib/sandbox-sync-engine.ts, the corrected
 * docs_article-aware sync (title/article_content/breadcrumb/seo mapping,
 * image upload, git-diff based change detection). Only "assets" has a
 * verified product mapping so far, other cs-docs folders are skipped, not
 * guessed at (see lib/content-type-mappings/docs-article.ts).
 *
 * STACK_TYPE=apidocs is untouched this round, its content types were never
 * part of the reported bug and have not been verified against a real schema
 * the way docs_article has, so it keeps the original flat-field behavior
 * exactly as before.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SandboxClient, ContentstackEntry } from "./lib/sandbox-client.js";
import { ContentstackClient } from "./contentstack.js";
import { loadSandboxConfig } from "./config.js";
import { runSync } from "./lib/sandbox-sync-engine.js";
import { findRepoRoot } from "./diff.js";
import { findPullRequestsForCommit } from "./lib/github-api.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * "cs-docs/assets/overview/foo.md" with docsRoot "cs-docs" -> ["overview"].
 * "cs-docs/headless-cms/introduction/overview/foo.md" -> ["introduction", "overview"].
 * Every intermediate folder between the product folder and the file itself,
 * in order, this is the chain left-nav-linker.ts walks through nav_section
 * and (for deeper products) nested links_2026 entries to find where the
 * entry belongs. Null for anything not nested at least two levels deep
 * (product/subsection/file), left-nav-linker.ts treats a missing tag as
 * "don't guess, don't link".
 */
function subsectionChainFromPath(relativePath: string, docsRoot: string): string[] | null {
  const prefix = `${docsRoot}/`;
  const stripped = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
  const segments = stripped.split("/");
  // segments[0] is the product folder, the last segment is the filename,
  // everything between is the subsection chain.
  const chain = segments.slice(1, -1);
  return chain.length > 0 ? chain : null;
}

async function runCsDocsSync(repoRoot: string): Promise<void> {
  const config = loadSandboxConfig(repoRoot, "csdocs");
  const client = new ContentstackClient(config);

  const beforeSha = process.env.SYNC_BEFORE_SHA;
  const afterSha = process.env.SYNC_AFTER_SHA;
  if (!beforeSha || !afterSha) {
    throw new Error(
      "SYNC_BEFORE_SHA and SYNC_AFTER_SHA must be set for the csdocs sync " +
      "(the workflow passes github.event.before / github.sha).",
    );
  }

  const results = await runSync(config, client, beforeSha, afterSha);

  // Tag newly created entries with their subsection folder (so promotion can
  // link them into the right nav_section block without any repo access) and
  // with the originating PR number (so promotion can name its Release after
  // it). Both are best-effort: a push with no associated PR, or a file
  // structure this can't parse, is not an error, just skips that tag.
  const created = results.filter((r) => r.action === "created" && r.uid);

  for (const r of created) {
    const chain = subsectionChainFromPath(r.path, config.CS_DOCS_ROOT);
    if (chain) {
      await client.addTag(r.uid!, `nav-subsection-${chain.join("/")}`).catch((error) => {
        console.warn(`Could not tag ${r.path} with its nav subsection: ${error instanceof Error ? error.message : error}`);
      });
    }
  }

  if (created.length > 0) {
    try {
      const prs = await findPullRequestsForCommit(afterSha);
      const prNumber = prs[0]?.number;
      if (prNumber) {
        for (const r of created) {
          await client.addTag(r.uid!, `pr-${prNumber}`);
        }
        console.log(`Tagged ${created.length} new entr${created.length === 1 ? "y" : "ies"} with pr-${prNumber}`);
      } else {
        console.log("No pull request found for this commit, skipping PR tagging.");
      }
    } catch (error) {
      console.warn(`Could not tag new entries with a PR number: ${error instanceof Error ? error.message : error}`);
    }
  }
}

interface Config {
  sandboxApiKey: string;
  sandboxToken: string;
  stackType: "apidocs" | "csdocs";
  docsPath: string;
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

  const docsPath = stackType === "apidocs" ? "api-docs" : "cs-docs";

  return {
    sandboxApiKey,
    sandboxToken,
    stackType,
    docsPath,
  };
}

async function runApiDocsSync(config: Config): Promise<void> {
  console.log("🔄 Git → Sandbox Sync\n");

  // Note: We create a default client, but will determine content type per entry based on doc_type
  const client = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    contentTypeUid: "", // Will be set per entry
    locale: "en-us",
  });

  console.log(`📍 Source: Git (${config.docsPath})`);
  console.log(`📍 Target: Sandbox CMS`);
  console.log(`📊 Mode: Create/Update as DRAFT\n`);

  const repoRoot = path.resolve(__dirname, "../../..");
  const docsPath = path.join(repoRoot, config.docsPath);

  if (!fs.existsSync(docsPath)) {
    console.log(`⚠️  Docs path not found: ${docsPath}`);
    return;
  }

  try {
    // Find all markdown files
    const files = findMarkdownFiles(docsPath);

    console.log(`📝 Found ${files.length} markdown files\n`);

    let created = 0;
    let updated = 0;
    let failed = 0;

    // Map doc_type to content type UID
    const getContentTypeUid = (docType: string): string => {
      // API Docs type mappings
      const apiDocTypeMap: Record<string, string> = {
        "api-request": "api_requests",
        "api-reference": "api_detail_page",
        "api-detail": "api_detail_page",
        "postman-collection": "postman_collections",
        "api-landing": "api_landing_page",
      };

      // Default based on stack type if doc_type not specified
      if (!docType) {
        return "api_requests";
      }

      return apiDocTypeMap[docType] || "api_requests";
    };

    for (const file of files) {
      try {
        const content = fs.readFileSync(file.path, "utf-8");
        const { frontmatter, body } = parseFrontmatter(content);

        if (!frontmatter.title || !frontmatter.url) {
          console.log(`  ⚠️  Skipping ${file.name}: missing title or url`);
          continue;
        }

        // Determine content type based on doc_type field
        const docType = frontmatter.doc_type || "";
        const contentTypeUid = getContentTypeUid(docType);

        // Create a client with the correct content type for this entry
        const entryClient = new SandboxClient({
          apiKey: config.sandboxApiKey,
          managementToken: config.sandboxToken,
          contentTypeUid: contentTypeUid,
          locale: "en-us",
        });

        const url = frontmatter.url;

        const entryData: Partial<ContentstackEntry> = {
          title: frontmatter.title,
          url: url,
          body: body.trim(),
          // Add other fields from frontmatter, excluding CMS metadata
          ...Object.entries(frontmatter).reduce(
            (acc, [key, value]) => {
              // Skip CMS metadata fields that shouldn't be synced to Sandbox
              if (!["title", "url", "uid", "contentstack"].includes(key) && value) {
                acc[key] = value;
              }
              return acc;
            },
            {} as Record<string, any>,
          ),
        };

        // Check if entry already exists (using normalized URL)
        const existing = await entryClient.findEntryByUrl(url);

        if (existing) {
          // Update existing
          await entryClient.updateEntry(existing.uid, entryData);
          console.log(`  ✓ Updated (Draft): ${frontmatter.title}`);
          updated++;
        } else {
          // Create new
          await entryClient.createEntry(entryData);
          console.log(`  ✓ Created (Draft): ${frontmatter.title}`);
          created++;
        }
      } catch (error) {
        console.log(`  ❌ Error processing ${file.name}: ${error instanceof Error ? error.message : error}`);
        failed++;
      }
    }

    console.log(`\n✅ Sync complete:`);
    console.log(`   Created: ${created}`);
    console.log(`   Updated: ${updated}`);
    if (failed > 0) {
      console.log(`   Failed:  ${failed}`);
    }
    console.log();

    if (failed > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Error during sync:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

interface MarkdownFile {
  name: string;
  path: string;
}

function findMarkdownFiles(startPath: string): MarkdownFile[] {
  const files: MarkdownFile[] = [];

  const walk = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".md")) {
        files.push({
          name: entry.name,
          path: fullPath,
        });
      }
    }
  };

  walk(startPath);
  return files;
}

interface Frontmatter {
  [key: string]: any;
}

function parseFrontmatter(content: string): { frontmatter: Frontmatter; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const [, frontmatterText, body] = match;
  const frontmatter: Frontmatter = {};

  for (const line of frontmatterText.split("\n")) {
    const [key, ...valueParts] = line.split(":");

    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim().replace(/^["']|["']$/g, "");
      frontmatter[key.trim()] = value;
    }
  }

  return { frontmatter, body };
}

async function main() {
  const config = await loadConfig();

  if (config.stackType === "csdocs") {
    const repoRoot = findRepoRoot(path.resolve(__dirname, "../../.."));
    await runCsDocsSync(repoRoot);
    return;
  }

  await runApiDocsSync(config);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
