#!/usr/bin/env node

/**
 * Sandbox → Prod Promotion Script
 *
 * CRITICAL: This is the ONLY way to create entries on Production CMS.
 *
 * Clones published entries from Sandbox to Prod and publishes to Staging only.
 * Production environment is NEVER touched by this script.
 *
 * Triggered by: sandbox-to-prod-promote-apidocs.yml (manual workflow_dispatch)
 * Environment: SANDBOX (read) + PROD (write, promotion only)
 *
 * Safety guarantees:
 * ✅ Only clones published entries
 * ✅ Only publishes to Staging environment
 * ✅ Production environment remains untouched
 * ✅ No direct Prod editing
 * ✅ Creates NEW entries, doesn't modify existing
 */

import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient, PromotionResult } from "./lib/prod-promote-client.js";

interface Config {
  sandboxApiKey: string;
  sandboxToken: string;
  prodApiKey: string;
  prodToken: string;
  stackType: "apidocs" | "csdocs";
  entryUids?: string[];
}

async function loadConfig(): Promise<Config> {
  const stackType = process.env.STACK_TYPE as "apidocs" | "csdocs";

  if (!stackType) {
    throw new Error("STACK_TYPE environment variable not set (apidocs|csdocs)");
  }

  const sandboxApiKey = process.env[`${stackType.toUpperCase()}_SANDBOX_STACK_API_KEY`];
  const sandboxToken = process.env[`${stackType.toUpperCase()}_SANDBOX_MANAGEMENT_TOKEN`];
  const prodApiKey = process.env[`PROD_${stackType.toUpperCase()}_STACK_API_KEY`];
  const prodToken = process.env[`PROD_${stackType.toUpperCase()}_STACK_MANAGEMENT_TOKEN`];

  if (!sandboxApiKey || !sandboxToken || !prodApiKey || !prodToken) {
    throw new Error(`Missing required credentials for stack type: ${stackType}`);
  }

  const entryUidsStr = process.env.ENTRY_UIDS;
  const entryUids = entryUidsStr ? entryUidsStr.split(",").map((s) => s.trim()) : undefined;

  return {
    sandboxApiKey,
    sandboxToken,
    prodApiKey,
    prodToken,
    stackType,
    entryUids,
  };
}

async function main() {
  console.log("🚀 Sandbox → Prod Promotion\n");
  console.log("⚠️  PROMOTION MODE: Creating entries in Prod and publishing to Staging ONLY\n");

  const config = await loadConfig();

  const sandboxClient = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    environment: "development",
    contentTypeUid: config.stackType === "apidocs" ? "api_detail_page" : "docs_article",
    locale: "en-us",
  });

  const prodClient = new ProdPromoteClient({
    apiKey: config.prodApiKey,
    managementToken: config.prodToken,
    contentTypeUid: config.stackType === "apidocs" ? "api_detail_page" : "docs_article",
    locale: "en-us",
  });

  console.log(`📍 Source: Sandbox`);
  console.log(`📍 Target: Prod (Staging environment only)`);
  console.log(`📊 Stack: ${config.stackType}\n`);

  try {
    let entriesToPromote = await sandboxClient.getPublishedEntries();

    // Filter to specific entries if requested
    if (config.entryUids && config.entryUids.length > 0) {
      console.log(`🎯 Filtering to specific entries: ${config.entryUids.join(", ")}\n`);
      entriesToPromote = entriesToPromote.filter((e) => config.entryUids!.includes(e.uid));
    }

    if (entriesToPromote.length === 0) {
      console.log("✅ No published entries to promote");
      return;
    }

    console.log(`📋 Found ${entriesToPromote.length} published entries to promote\n`);

    const results: PromotionResult[] = [];

    for (const sandboxEntry of entriesToPromote) {
      const title = sandboxEntry.title || "Untitled";
      const uid = sandboxEntry.uid;

      console.log(`  🔹 ${title} (${uid})`);

      try {
        // Clone to Prod
        const prodEntry = await prodClient.cloneEntryToProd(sandboxEntry);
        console.log(`     ✓ Cloned to Prod (new UID: ${prodEntry.uid})`);

        // Publish to Staging
        const publishSuccess = await prodClient.publishToStaging(prodEntry.uid);

        results.push({
          entryUid: uid,
          title,
          cloned: true,
          published: publishSuccess,
        });

        if (publishSuccess) {
          console.log(`     ✓ Published to Staging environment`);
        } else {
          console.log(`     ⚠️  Created but failed to publish to Staging`);
        }
      } catch (error) {
        console.log(`     ❌ Error: ${error instanceof Error ? error.message : error}`);
        results.push({
          entryUid: uid,
          title,
          cloned: false,
          published: false,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    // Summary
    const successful = results.filter((r) => r.published).length;
    const partial = results.filter((r) => r.cloned && !r.published).length;
    const failed = results.filter((r) => !r.cloned).length;

    console.log(`\n📊 Promotion Summary:`);
    console.log(`   ✅ Successful: ${successful}`);
    if (partial > 0) {
      console.log(`   ⚠️  Cloned but not published: ${partial}`);
    }
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n✨ Promoted ${entriesToPromote.length} entries from Sandbox to Prod (Staging)\n`);

    console.log("📌 Next Steps:");
    console.log("   1. Review in Staging environment on docsite");
    console.log("   2. When ready, manually publish to Production environment");
    console.log("   3. If Prod entries are edited, changes will auto-sync back to Sandbox and GitHub\n");

    if (failed > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Error during promotion:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
