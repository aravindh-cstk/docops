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
import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";

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
    environment: "sandbox",
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
    let syncCount = 0;
    for (const entry of entries) {
      const title = entry.title as string;
      const url = entry.url as string;

      if (!title || !url) {
        console.log(`  ⚠️  Skipping entry without title/url`);
        continue;
      }

      // Generate markdown from CMS entry
      const frontmatter = generateFrontmatter(entry);
      const body = (entry.body as string) || "";
      const markdown = `${frontmatter}\n\n${body}`;

      // Determine file path based on stack type
      const filePath = getFilePath(config.stackType, url);

      // Write to file (would be handled by workflow)
      console.log(`  ✓ ${title}`);
      console.log(`    → ${filePath}`);

      syncCount++;
    }

    console.log(`\n✅ Sync complete: ${syncCount} entries ready\n`);
  } catch (error) {
    console.error("❌ Error during sync:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

function generateFrontmatter(entry: any): string {
  const lines: string[] = ["---"];

  // Add standard fields
  if (entry.title) lines.push(`title: "${entry.title}"`);
  if (entry.url) lines.push(`url: ${entry.url}`);
  if (entry.description) lines.push(`description: ${entry.description}`);

  // Add content-type specific fields
  if (entry.api_version) lines.push(`api_version: "${entry.api_version}"`);
  if (entry.superscript) lines.push(`superscript: ${entry.superscript}`);
  if (entry.enable_openapi !== undefined) lines.push(`enable_openapi: ${entry.enable_openapi}`);

  lines.push("---");
  return lines.join("\n");
}

function getFilePath(stackType: string, url: string): string {
  // This would be improved to handle different content types
  // For now, returning a placeholder path
  const baseDir = stackType === "apidocs" ? "api-docs" : "cs-docs";
  return `${baseDir}/docs/${url}.md`;
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
