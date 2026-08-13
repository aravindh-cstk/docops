#!/usr/bin/env node

/**
 * Sandbox → Prod Promotion Script
 *
 * CRITICAL: This is the ONLY way to create or update entries on Production CMS.
 *
 * Matches published Sandbox entries to Prod by a sandbox-uid-<uid> tag
 * stamped on the Prod entry, falling back to url matching only for entries
 * promoted before this tag existed. Creates a new Prod entry if none exists
 * yet; updates the existing one in place otherwise. Either way, publishes to
 * Staging only. Production environment is NEVER touched.
 *
 * Triggered by: sandbox-auto-promote-csdocs.yml (cron) and
 * sandbox-to-prod-promote-csdocs.yml (manual workflow_dispatch)
 * Environment: SANDBOX (read) + PROD (create-or-update by url, promotion only)
 *
 * Safety guarantees:
 * ✅ Only promotes the *published version* of an entry, never an unpublished draft
 * ✅ Only publishes to Staging environment
 * ✅ Production environment remains untouched
 * ✅ Matches by sandbox-uid tag (url as legacy fallback) — creates if new,
 *    updates in place if already promoted, even if the entry moved folders
 * ✅ Skips entries whose content hasn't changed since the last promotion
 * ✅ Refuses to promote (rather than guessing) when the published version
 *    cannot be read out of publish_details
 */

import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient, PromotionResult, ContentstackEntry } from "./lib/prod-promote-client.js";
import { contentsEqual, PUBLISH_SHAPE_HELP, sandboxUidTag, withSandboxUidTag } from "./lib/entry-content.js";
import { linkNewEntryIntoNav, PRODUCT_NAVIGATION_UID } from "./lib/left-nav-linker.js";
import { createReleaseForPromotion, extractPrNumberFromTags } from "./lib/release-manager.js";
import { remapBreadcrumbForProd } from "./lib/content-type-mappings/docs-article.js";

/**
 * Links a newly created Prod entry into the nav and bundles it (plus the nav
 * entry, if linking succeeded) into a PR-named Release. csdocs only, this
 * round's nav mapping (PRODUCT_NAVIGATION_UID) only covers docs_article. Never
 * throws, a linking or release failure should not fail the whole promotion
 * run, it's logged and the promotion itself still counts as successful.
 */
async function afterCreate(
  prodClient: ProdPromoteClient,
  stackType: "apidocs" | "csdocs",
  sandboxEntry: ContentstackEntry,
  prodEntry: ContentstackEntry,
): Promise<void> {
  if (stackType !== "csdocs") return;

  const items = [{ uid: prodEntry.uid, contentTypeUid: "docs_article" }];

  try {
    const linkResult = await linkNewEntryIntoNav(prodClient, prodEntry);
    if (linkResult.linked) {
      const topLevelFolder = String(prodEntry.url ?? "").split("/").filter(Boolean)[0] ?? "";
      const navUid = PRODUCT_NAVIGATION_UID[topLevelFolder];
      if (navUid) items.push({ uid: navUid, contentTypeUid: "product_navigation" });
      console.log(`     ✓ Linked into left nav${linkResult.sectionCreated ? " (new section created)" : ""}`);
    } else {
      console.log(`     ⚠️  Not linked into left nav: ${linkResult.reason}`);
    }
  } catch (error) {
    console.log(`     ⚠️  Left nav linking failed: ${error instanceof Error ? error.message : error}`);
  }

  const prNumber = extractPrNumberFromTags(sandboxEntry.tags);
  if (!prNumber) {
    console.log(`     ⚠️  No pr-<number> tag on this entry, skipping Release creation`);
    return;
  }

  try {
    const release = await createReleaseForPromotion(prodClient, prNumber, items);
    if (release) console.log(`     ✓ Added to Release "${release.name}"`);
  } catch (error) {
    console.log(`     ⚠️  Release creation failed: ${error instanceof Error ? error.message : error}`);
  }
}

export interface Config {
  sandboxApiKey: string;
  sandboxToken: string;
  prodApiKey: string;
  prodToken: string;
  stackType: "apidocs" | "csdocs";
  entryUids?: string[];
}

export async function loadConfig(stackTypeOverride?: "apidocs" | "csdocs"): Promise<Config> {
  const stackType = stackTypeOverride ?? (process.env.STACK_TYPE as "apidocs" | "csdocs");

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
  console.log("⚠️  PROMOTION MODE: Creating/updating entries in Prod and publishing to Staging ONLY\n");

  const config = await loadConfig();

  const sandboxClient = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
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

    for (const published of entriesToPromote) {
      const { uid, title, publishedVersion } = published;
      const sandboxEntry: ContentstackEntry = published.entry;

      console.log(`  🔹 ${title} (${uid}) v${publishedVersion ?? "?"}`);

      // The published version could not be determined, so we do not know which
      // content a human actually approved. Fail closed — promoting the latest
      // version here is exactly the bug this check exists to prevent.
      if (published.unresolved) {
        console.log(`     ❌ ${PUBLISH_SHAPE_HELP}`);
        results.push({
          entryUid: uid,
          title,
          written: false,
          published: false,
          error: "unresolved published version",
        });
        continue;
      }

      if (!sandboxEntry.url) {
        console.log(`     ⚠️  Skipping: no url field, cannot match against Prod`);
        results.push({
          entryUid: uid,
          title,
          written: false,
          published: false,
          error: "missing url field",
        });
        continue;
      }

      // Sandbox and Prod are separate stacks — the same "Assets" navigation
      // entry has a different uid in each, since Contentstack assigns uids
      // on create and there's no way to force a match. Rewrite breadcrumb to
      // the Prod-side uid before comparing or writing, otherwise every run
      // sees the breadcrumb as "changed" and Prod never gets a working one.
      if (config.stackType === "csdocs" && sandboxEntry.breadcrumb) {
        sandboxEntry.breadcrumb = remapBreadcrumbForProd(sandboxEntry.breadcrumb);
      }

      let existingProdEntry: ContentstackEntry | null;
      let matchedByUrlFallback = false;
      try {
        existingProdEntry = await prodClient.findEntryByTag(sandboxUidTag(uid));
        if (!existingProdEntry) {
          existingProdEntry = await prodClient.findEntryByUrl(sandboxEntry.url);
          matchedByUrlFallback = existingProdEntry !== null;
        }
      } catch (error) {
        console.log(`     ❌ Error looking up Prod entry: ${error instanceof Error ? error.message : error}`);
        results.push({
          entryUid: uid,
          title,
          written: false,
          published: false,
          error: error instanceof Error ? error.message : String(error),
        });
        continue;
      }

      if (matchedByUrlFallback) {
        console.log(`     ℹ️  Matched by url (legacy, pre-tag) — Prod uid ${existingProdEntry!.uid} will be tagged`);
      }

      // Stamp/refresh the sandbox-uid tag on whatever gets written to Prod
      // this iteration, whether matched by tag already or just adopted via
      // the url fallback. This is what lets a future run find this same
      // Prod entry even after this Sandbox entry's url changes.
      sandboxEntry.tags = withSandboxUidTag(sandboxEntry.tags, uid);

      try {
        if (!existingProdEntry) {
          // No match — create.
          const prodEntry = await prodClient.cloneEntryToProd(sandboxEntry);
          console.log(`     ✓ Created in Prod (new UID: ${prodEntry.uid})`);

          const publishSuccess = await prodClient.publishToStaging(prodEntry.uid);
          results.push({ entryUid: uid, title, written: true, published: publishSuccess, action: "created" });

          console.log(publishSuccess ? `     ✓ Published to Staging environment` : `     ⚠️  Created but failed to publish to Staging`);

          await afterCreate(prodClient, config.stackType, sandboxEntry, prodEntry);

          continue;
        }

        if (contentsEqual(sandboxEntry, existingProdEntry)) {
          console.log(`     ⏭️  No changes detected — skipping (Prod uid: ${existingProdEntry.uid})`);
          results.push({ entryUid: uid, title, written: false, published: false, action: "skipped" });
          continue;
        }

        // Match found, content differs — update.
        const updated = await prodClient.updateEntry(existingProdEntry.uid, sandboxEntry);
        console.log(`     ✓ Updated in Prod (uid: ${updated.uid})`);

        const publishSuccess = await prodClient.publishToStaging(updated.uid);
        results.push({ entryUid: uid, title, written: true, published: publishSuccess, action: "updated" });

        console.log(publishSuccess ? `     ✓ Published to Staging environment` : `     ⚠️  Updated but failed to publish to Staging`);
      } catch (error) {
        console.log(`     ❌ Error: ${error instanceof Error ? error.message : error}`);
        results.push({
          entryUid: uid,
          title,
          written: false,
          published: false,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    // Summary
    const created = results.filter((r) => r.action === "created").length;
    const updated = results.filter((r) => r.action === "updated").length;
    const skipped = results.filter((r) => r.action === "skipped").length;
    const successful = results.filter((r) => r.published).length;
    const partial = results.filter((r) => r.written && !r.published).length;
    const failed = results.filter((r) => !r.written && r.action !== "skipped").length;
    const unresolved = results.filter((r) => r.error === "unresolved published version").length;

    console.log(`\n📊 Promotion Summary:`);
    console.log(`   ✨ Created: ${created}`);
    console.log(`   🔁 Updated: ${updated}`);
    console.log(`   ⏭️  Skipped (no changes): ${skipped}`);
    console.log(`   ✅ Published to Staging: ${successful}`);
    if (unresolved > 0) {
      console.log(`   🛑 Unresolved published version: ${unresolved} (not promoted — see above)`);
    }
    if (partial > 0) {
      console.log(`   ⚠️  Written but not published: ${partial}`);
    }
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n✨ Processed ${entriesToPromote.length} entries from Sandbox to Prod (Staging)\n`);

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

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}
