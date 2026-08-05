#!/usr/bin/env node

/**
 * Git → Sandbox Sync Script
 *
 * Pushes changes FROM Git repository to Sandbox CMS.
 * Creates/updates DRAFT entries in Sandbox for writers to review.
 *
 * Triggered by: gh-to-sandbox-sync-apidocs.yml (on main branch merge)
 * Environment: SANDBOX only (no Prod access)
 *
 * This keeps Sandbox in sync with Git, allowing writers to review and edit.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { SandboxClient, ContentstackEntry } from "./lib/sandbox-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

async function main() {
  console.log("🔄 Git → Sandbox Sync\n");

  const config = await loadConfig();

  // Note: We create a default client, but will determine content type per entry based on doc_type
  const client = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    environment: "sandbox",
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

      // CS Docs type mappings - consolidate many doc_types to primary content types
      const csDocTypeMap: Record<string, string> = {
        // Guide-like content
        "guide": "docs_article",
        "sdk-guide": "docs_article",
        "developer-guide": "docs_article",
        "marketplace-guide": "docs_article",
        "connector-guide": "docs_article",
        "cli-guide": "docs_article",
        "integration-guide": "docs_article",
        "solution-guide": "docs_article",
        "feature-guide": "docs_article",
        "how-to-guide": "docs_article",
        "setup-guide": "docs_article",
        "getting-started": "docs_article",
        "quick-start": "docs_article",
        "get-started": "docs_article",

        // Reference content
        "reference": "docs_reference",
        "api-guide": "docs_reference",
        "sdk-reference": "docs_reference",
        "field-reference": "docs_reference",
        "configuration-reference": "docs_reference",
        "sdk-listing": "docs_reference",

        // Concept/overview content
        "concept": "docs_article",
        "overview": "docs_article",
        "concept-guide": "docs_article",
        "architecture-guide": "docs_article",
        "architecture-diagram": "docs_article",
        "feature-overview": "docs_article",
        "sdk-overview": "docs_article",

        // How-to content
        "how-to": "docs_article",

        // Navigation and structure
        "navigation": "docs_navigation",
        "navigation-listing": "docs_navigation",
        "navigation-page": "docs_navigation",
        "navigation-landing": "docs_navigation",
        "navigation-hub": "docs_navigation",

        // Fallback for variations
        "page": "docs_article",
        "documentation": "docs_article",
        "article": "docs_article",
        "developer-hub-guide": "docs_article",
      };

      // Default based on stack type if doc_type not specified
      if (!docType) {
        return config.stackType === "apidocs" ? "api_requests" : "docs_article";
      }

      // Use appropriate map based on stack type
      const typeMap = config.stackType === "apidocs" ? apiDocTypeMap : csDocTypeMap;
      return typeMap[docType] || (config.stackType === "apidocs" ? "api_requests" : "docs_article");
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
          environment: "sandbox",
          contentTypeUid: contentTypeUid,
          locale: "en-us",
        });

        // Normalize URL: strip domain and /docs/ prefix for cs-docs
        let url = frontmatter.url;
        if (config.stackType === "csdocs" && url.includes("http")) {
          // Convert https://www.contentstack.com/docs/studio/about-studio → /studio/about-studio
          url = url.replace(/^https?:\/\/[^/]+\/docs/, "");
          if (!url.startsWith("/")) {
            url = "/" + url;
          }
        }

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
      const relPath = path.relative(startPath, fullPath);

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

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
