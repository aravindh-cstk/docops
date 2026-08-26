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
 * Triggered by: sandbox-to-prod-promote-csdocs.yml (manual workflow_dispatch)
 * only. There is deliberately no schedule: in practice content is edited
 * directly in Prod, and a background job that re-pushes Sandbox over Prod every
 * few minutes can overwrite those edits within one cron interval. Promotion is
 * something a human asks for right after publishing in Sandbox.
 *
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
 * ✅ Refuses to overwrite a Prod entry a human edited directly, detected via
 *    the src-hash-<hash> tag promotion stamps on every write (see
 *    lib/promotion-guard.ts)
 */

import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient, PromotionResult, ContentstackEntry, PROMOTION_ENVIRONMENTS } from "./lib/prod-promote-client.js";
import { diffFingerprint, PUBLISH_SHAPE_HELP, sandboxUidTag, withSandboxUidTag, withSrcHashTag } from "./lib/entry-content.js";
import { evaluatePromotionGuard, type ConflictMode } from "./lib/promotion-guard.js";
import { linkNewEntryIntoNav } from "./lib/left-nav-linker.js";
import { createReleaseForPromotion, extractPrNumberFromTags } from "./lib/release-manager.js";
import { remapBreadcrumbForProd, unmappedBreadcrumbUids } from "./lib/content-type-mappings/docs-article.js";
import { getUserName } from "./lib/user-index.js";
import * as core from "@actions/core";
import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Links a newly created Prod entry into the nav and bundles it, plus every nav
 * entry the linking touched, into a PR-named Release. csdocs only, docs_article
 * only. Never throws, a linking or release failure should not fail the whole
 * promotion run, it's logged and the promotion itself still counts as
 * successful.
 *
 * Every touched entry goes into the Release, not just the article and its
 * product_navigation entry: each links_2026 node along the chain carries its
 * own publish state, so a Release missing one deploys a nav that doesn't
 * actually reach the new article.
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
    const linkResult = await linkNewEntryIntoNav(prodClient, sandboxEntry, prodEntry);
    if (linkResult.linked) {
      items.push(...linkResult.touched);
      console.log(`     ✓ Linked into left nav under "${linkResult.productSlug}"`);
      if (linkResult.createdNodes.length > 0) {
        // Structural changes deserve a louder line than content changes: whoever
        // deploys this Release is adding nav entries that never existed before,
        // which is usually right but is worth eyeballing before it ships.
        console.log(`     ⚠️  This Release changes nav STRUCTURE, ${linkResult.createdNodes.length} new node(s) created:`);
        for (const node of linkResult.createdNodes) {
          console.log(`          + ${node.title} (${node.uid})`);
        }
      }
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

/**
 * Makes sure the src-hash tag on the entry Prod actually stored matches Prod's
 * own content, not just the content we sent.
 *
 * If the CMA normalizes anything inside the diff projection on write, the
 * stamped fingerprint would no longer describe the live entry, and the next run
 * would read that as "a human edited Prod" and refuse to promote forever. One
 * corrective write closes that gap.
 *
 * Deliberately one attempt, not a retry loop: a fingerprint that still doesn't
 * settle means the diff projection is missing a nested ignore key, which needs
 * a code fix rather than more writes. Returns the number of corrections made
 * so the run summary can surface it.
 */
async function reconcileFingerprint(
  prodClient: ProdPromoteClient,
  writtenEntry: ContentstackEntry,
  expectedHash: string,
): Promise<number> {
  const actualHash = diffFingerprint(writtenEntry);
  if (actualHash === expectedHash) return 0;

  console.log(`     ⚠️  Fingerprint drifted on write (${expectedHash} → ${actualHash}), restamping`);
  try {
    await prodClient.updateEntry(writtenEntry.uid, {
      ...writtenEntry,
      tags: withSrcHashTag(writtenEntry.tags, actualHash),
    });
    return 1;
  } catch (error) {
    // A missing baseline is a conflict next run, which is loud and safe. Do
    // not fail the promotion that already succeeded over it.
    console.log(`     ⚠️  Could not restamp fingerprint: ${error instanceof Error ? error.message : error}`);
    return 1;
  }
}

/**
 * Writes conflicts where a human will actually see them: the GitHub run
 * summary, and a JSON file the workflow can render. A conflict means someone's
 * Sandbox change is sitting unpromoted, so it must not be discoverable only by
 * scrolling the log.
 */
function reportConflicts(conflicts: PromotionResult[]): void {
  const summaryPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", ".sandbox-promote-summary.json");
  try {
    fs.writeFileSync(summaryPath, JSON.stringify(conflicts, null, 2), "utf-8");
  } catch (error) {
    console.log(`⚠️  Could not write promotion summary: ${error instanceof Error ? error.message : error}`);
  }

  if (conflicts.length === 0) return;

  const stepSummary = process.env.GITHUB_STEP_SUMMARY;
  if (!stepSummary) return;

  const rows = conflicts.map(
    (c) => `| ${c.title} | \`${c.conflict?.prodUid}\` | ${c.conflict?.reason} | ${c.conflict?.prodUpdatedBy ?? "—"} | ${c.conflict?.prodUpdatedAt ?? "—"} |`,
  );

  const table = [
    "",
    "### Promotion conflicts",
    "",
    "These Prod entries were **not** overwritten because they no longer match what promotion last wrote. The Sandbox version of each is still unpromoted.",
    "",
    "| Entry | Prod UID | Reason | Last edited by | Last edited at |",
    "|---|---|---|---|---|",
    ...rows,
    "",
  ].join("\n");

  try {
    fs.appendFileSync(stepSummary, table, "utf-8");
  } catch (error) {
    console.log(`⚠️  Could not append to step summary: ${error instanceof Error ? error.message : error}`);
  }
}

export interface Config {
  sandboxApiKey: string;
  sandboxToken: string;
  prodApiKey: string;
  prodToken: string;
  stackType: "apidocs" | "csdocs";
  entryUids?: string[];
  /** Overwrite Prod even when the fingerprint says a human edited it. */
  forceOverwrite: boolean;
  /** `report` logs conflicts but still writes, for sizing a rollout. */
  conflictMode: ConflictMode;
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
    forceOverwrite: process.env.PROMOTE_FORCE_OVERWRITE === "true",
    conflictMode: process.env.PROMOTE_CONFLICT_MODE === "report" ? "report" : "enforce",
  };
}

async function main() {
  const envList = PROMOTION_ENVIRONMENTS.join(" and ");
  console.log("🚀 Sandbox → Prod Promotion\n");
  console.log(`⚠️  PROMOTION MODE: Creating/updating entries in Prod and publishing to ${envList} ONLY\n`);

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
  console.log(`📍 Target: Prod (${envList} environments only)`);
  console.log(`📊 Stack: ${config.stackType}\n`);

  // Fail before touching anything if a target environment doesn't exist,
  // rather than creating entries and then failing to publish each one.
  await prodClient.verifyPromotionEnvironments();

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
    let fingerprintCorrections = 0;

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
        // A uid outside PRODUCT_CONFIG can't be remapped, so it stays a
        // Sandbox uid in Prod and makes this entry compare unequal forever.
        // Say so rather than quietly re-promoting it on every run.
        const unmapped = unmappedBreadcrumbUids(sandboxEntry.breadcrumb);
        if (unmapped.length > 0) {
          console.log(
            `     ⚠️  Breadcrumb uid(s) not in PRODUCT_CONFIG: ${unmapped.join(", ")} — ` +
            `cannot remap to Prod, this entry will keep comparing as changed. ` +
            `Add the product to PRODUCT_CONFIG in lib/content-type-mappings/docs-article.ts.`,
          );
        }
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

      const decision = evaluatePromotionGuard(sandboxEntry, existingProdEntry, {
        mode: config.conflictMode,
        force: config.forceOverwrite,
      });

      if (decision.action === "skip") {
        console.log(`     ⏭️  No changes detected — skipping (Prod uid: ${existingProdEntry!.uid})`);
        results.push({ entryUid: uid, title, written: false, published: false, action: "skipped" });
        continue;
      }

      if (decision.action === "conflict") {
        const prodUid = existingProdEntry!.uid;
        const editor = getUserName(existingProdEntry!.updated_by as string | undefined);
        const editedAt = existingProdEntry!.updated_at as string | undefined;
        const detail =
          decision.conflictReason === "prod-edited"
            ? `this Prod entry was edited directly (last touched by ${editor}${editedAt ? ` at ${editedAt}` : ""})`
            : `this Prod entry has no promotion baseline yet, so it cannot be proven safe to overwrite`;

        console.log(`     ⛔ CONFLICT — NOT overwritten (Prod uid: ${prodUid}): ${detail}`);
        console.log(`        Sandbox's version stays unpromoted. Resolve by merging the Prod edit back through GitHub, or re-run with force_overwrite scoped to this entry.`);
        core.warning(`Promotion conflict on "${title}" (Prod uid ${prodUid}, ${decision.conflictReason}): ${detail}`);

        results.push({
          entryUid: uid,
          title,
          written: false,
          published: false,
          action: "conflict",
          conflict: {
            prodUid,
            reason: decision.conflictReason!,
            prodUpdatedAt: editedAt,
            prodUpdatedBy: editor,
          },
        });
        continue;
      }

      if (decision.forced) {
        console.log(`     ⚠️  Overwriting Prod despite a ${decision.conflictReason} conflict (${config.forceOverwrite ? "force_overwrite" : "report mode"})`);
      }

      // Record what promotion is about to write, so the next run can tell its
      // own echo apart from a human's Prod edit.
      const expectedHash = diffFingerprint(sandboxEntry);
      sandboxEntry.tags = withSrcHashTag(sandboxEntry.tags, expectedHash);

      try {
        if (decision.action === "create") {
          const prodEntry = await prodClient.cloneEntryToProd(sandboxEntry);
          console.log(`     ✓ Created in Prod (new UID: ${prodEntry.uid})`);

          fingerprintCorrections += await reconcileFingerprint(prodClient, prodEntry, expectedHash);

          const publishSuccess = await prodClient.publishPromotedEntry(prodEntry.uid);
          results.push({ entryUid: uid, title, written: true, published: publishSuccess, action: "created" });

          console.log(publishSuccess ? `     ✓ Published to ${PROMOTION_ENVIRONMENTS.join(" and ")}` : `     ⚠️  Created but failed to publish`);

          await afterCreate(prodClient, config.stackType, sandboxEntry, prodEntry);

          continue;
        }

        const updated = await prodClient.updateEntry(existingProdEntry!.uid, sandboxEntry);
        console.log(`     ✓ Updated in Prod (uid: ${updated.uid})`);

        fingerprintCorrections += await reconcileFingerprint(prodClient, updated, expectedHash);

        const publishSuccess = await prodClient.publishPromotedEntry(updated.uid);
        results.push({ entryUid: uid, title, written: true, published: publishSuccess, action: "updated" });

        console.log(publishSuccess ? `     ✓ Published to ${PROMOTION_ENVIRONMENTS.join(" and ")}` : `     ⚠️  Updated but failed to publish`);
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
    const conflicts = results.filter((r) => r.action === "conflict");
    const successful = results.filter((r) => r.published).length;
    const partial = results.filter((r) => r.written && !r.published).length;
    // A conflict is a deliberate refusal to write, not a failure. Counting it
    // as one would turn every unresolved Prod edit into a red run.
    const failed = results.filter((r) => !r.written && r.action !== "skipped" && r.action !== "conflict").length;
    const unresolved = results.filter((r) => r.error === "unresolved published version").length;

    reportConflicts(conflicts);

    console.log(`\n📊 Promotion Summary:`);
    console.log(`   ✨ Created: ${created}`);
    console.log(`   🔁 Updated: ${updated}`);
    console.log(`   ⏭️  Skipped (no changes): ${skipped}`);
    console.log(`   ✅ Published to Staging: ${successful}`);
    if (conflicts.length > 0) {
      console.log(`   ⛔ Conflicts (Prod edited, NOT overwritten): ${conflicts.length}`);
    }
    if (fingerprintCorrections > 0) {
      console.log(`   🔧 Fingerprint corrections: ${fingerprintCorrections}`);
    }
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
