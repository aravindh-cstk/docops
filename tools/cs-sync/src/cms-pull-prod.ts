#!/usr/bin/env node

/**
 * Prod → Git Sync Script
 *
 * Pulls changes FROM the Prod CMS back to the Git repository, so a direct
 * edit made in Contentstack surfaces as a reviewable PR instead of being
 * silently invisible to GitHub.
 *
 * Only *direct* Prod edits should reach GitHub through this path. Content the
 * promotion script just copied from Sandbox already has its own PR opened by
 * cms-pull-sandbox, so this script compares each Prod entry against the
 * published Sandbox entry at the same url and skips the ones that match.
 * Without that guard, one writer action produced two identical PRs.
 *
 * Triggered by: sandbox-auto-promote-csdocs.yml, as the step *after*
 * promotion. The ordering matters and is why the two run in one job rather
 * than on two independent crons — see that workflow for the reasoning.
 * Environment: PROD (read-only) + SANDBOX (read-only). No writes either side.
 *
 * Mirrors cms-pull-sandbox.ts's structure. Kept as a separate script (rather
 * than parameterizing one shared script) to match this repo's existing
 * convention of one script per stack/direction pair.
 */

import fs from "node:fs";
import path from "node:path";
import { buildDocIndex, canonicalizeUrl } from "./doc-index.js";
import { fileURLToPath } from "node:url";
import { ProdPromoteClient } from "./lib/prod-promote-client.js";
import { SandboxClient } from "./lib/sandbox-client.js";
import { contentsEqual } from "./lib/entry-content.js";
import { getUserName } from "./lib/user-index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface Config {
  prodApiKey: string;
  prodToken: string;
  sandboxApiKey: string;
  sandboxToken: string;
  stackType: "apidocs" | "csdocs";
  environment: string;
}

async function loadConfig(): Promise<Config> {
  const stackType = process.env.STACK_TYPE as "apidocs" | "csdocs";

  if (!stackType) {
    throw new Error("STACK_TYPE environment variable not set (apidocs|csdocs)");
  }

  const prodApiKey = process.env[`PROD_${stackType.toUpperCase()}_STACK_API_KEY`];
  const prodToken = process.env[`PROD_${stackType.toUpperCase()}_STACK_MANAGEMENT_TOKEN`];

  if (!prodApiKey || !prodToken) {
    throw new Error(`Missing Prod credentials for stack type: ${stackType}`);
  }

  // Sandbox is read here only to tell a real Prod edit apart from a promotion
  // echo. Required, not optional: without it every promoted entry would open a
  // duplicate PR, which is the failure this script was changed to avoid.
  const sandboxApiKey = process.env[`${stackType.toUpperCase()}_SANDBOX_STACK_API_KEY`];
  const sandboxToken = process.env[`${stackType.toUpperCase()}_SANDBOX_MANAGEMENT_TOKEN`];

  if (!sandboxApiKey || !sandboxToken) {
    throw new Error(
      `Missing Sandbox credentials for stack type: ${stackType}. This script needs read access ` +
        `to Sandbox to distinguish direct Prod edits from promoted content.`,
    );
  }

  // NOTE: confirm this literal name against the real stack before relying on
  // it — same caution that applies to the Sandbox environment names this
  // pipeline used to hardcode incorrectly. Override via PROD_ENVIRONMENT if
  // the live environment is named differently.
  const environment = process.env.PROD_ENVIRONMENT || "production";

  return {
    prodApiKey,
    prodToken,
    sandboxApiKey,
    sandboxToken,
    stackType,
    environment,
  };
}

async function main() {
  console.log("🔄 Prod → Git Sync\n");

  const config = await loadConfig();

  const contentTypeUid = config.stackType === "apidocs" ? "api_detail_page" : "docs_article";

  const client = new ProdPromoteClient({
    apiKey: config.prodApiKey,
    managementToken: config.prodToken,
    contentTypeUid,
    locale: "en-us",
  });

  const sandboxClient = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    contentTypeUid,
    locale: "en-us",
  });

  console.log(`📍 Source: Prod (${config.stackType})`);
  console.log(`📍 Target: Git repository`);
  console.log(`📊 Environment: ${config.environment}\n`);

  try {
    const entries = await client.getPublishedEntries(config.environment);

    console.log(`📋 Found ${entries.length} published entries in Prod\n`);

    if (entries.length === 0) {
      console.log("✅ No changes to sync");
      return;
    }

    const repoRoot = path.resolve(__dirname, "../../..");
    const docsPath = config.stackType === "apidocs" ? "api-docs" : "cs-docs";
    const basePath = path.join(repoRoot, docsPath);

    const changes: any[] = [];
    let syncCount = 0;
    let echoCount = 0;

    for (const entry of entries) {
      const title = entry.title as string;
      const url = entry.url as string;

      if (!title || !url) {
        console.log(`  ⚠️  Skipping entry without title/url`);
        continue;
      }

      // Is this a real Prod-side edit, or just content promotion copied over
      // from Sandbox a moment ago?
      //
      // Compared against Sandbox's *published* version, not its latest: an
      // unpublished draft sitting in Sandbox would otherwise make the two look
      // different and reintroduce the duplicate PR this check exists to stop.
      //
      // No Sandbox counterpart means someone created the page directly in
      // Prod, which is precisely what this script is for — so that case falls
      // through and syncs.
      const sandboxMatch = await sandboxClient.getPublishedEntryByUrl(url);

      if (sandboxMatch && !sandboxMatch.unresolved && contentsEqual(entry, sandboxMatch.entry)) {
        echoCount++;
        continue;
      }

      const frontmatter = generateFrontmatter(entry);
      const body = (entry.body as string) || "";
      const markdown = `${frontmatter}\n\n${body}`;

      const filePath = getFilePath(config.stackType, url, entry);
      if (!filePath) continue;
      const fullPath = path.join(basePath, filePath);

      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

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

    // Write summary JSON for the workflow to use. __dirname is tools/cs-sync/src
    // (this script runs via `tsx src/...ts`); the workflow reads the summary
    // relative to tools/cs-sync/, so write one level up.
    const summaryPath = path.join(__dirname, "..", ".cms-pull-prod-summary.json");
    fs.writeFileSync(summaryPath, JSON.stringify(changes, null, 2), "utf-8");

    console.log(`\n✅ Sync complete: ${syncCount} entries synced`);
    console.log(`   ⏭️  Skipped ${echoCount} entries already matching Sandbox (promoted, not directly edited)\n`);
  } catch (error) {
    console.error("❌ Error during sync:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

function generateFrontmatter(entry: any): string {
  const lines: string[] = ["---"];

  if (entry.title) lines.push(`title: "${entry.title}"`);
  if (entry.url) lines.push(`url: ${entry.url}`);
  if (entry.description) lines.push(`description: ${entry.description}`);

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
