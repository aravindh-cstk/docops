#!/usr/bin/env node

/**
 * Dump the real shape of publish_details from a live stack.
 *
 * The promotion pipeline decides what to push to Prod based on which version
 * of an entry was published, and it reads that version out of
 * `publish_details`. This repo currently handles that field three mutually
 * incompatible ways — as an array, as an object with `.status`, and as an
 * object keyed by environment name — which means nobody has confirmed which
 * one the CMA actually returns.
 *
 * Run this against a stack with real credentials to settle it. It only reads.
 *
 *   STACK_TYPE=csdocs \
 *   CSDOCS_SANDBOX_STACK_API_KEY=... \
 *   CSDOCS_SANDBOX_MANAGEMENT_TOKEN=... \
 *   npm run verify-publish-details
 *
 * Add PROD_CSDOCS_STACK_API_KEY / PROD_CSDOCS_STACK_MANAGEMENT_TOKEN to check
 * the Prod stack in the same run.
 */

import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient } from "./lib/prod-promote-client.js";
import { getPublishedVersion, hasPublishRecord, ContentstackEntry } from "./lib/entry-content.js";

const SAMPLE_SIZE = 5;

function describeShape(publishDetails: unknown): string {
  if (publishDetails === undefined) return "absent";
  if (publishDetails === null) return "null";
  if (Array.isArray(publishDetails)) {
    return `array[${publishDetails.length}]`;
  }
  if (typeof publishDetails !== "object") return typeof publishDetails;

  const keys = Object.keys(publishDetails as Record<string, unknown>);
  const looksLikeRecord = keys.includes("version") || keys.includes("time");
  return `object{${keys.join(", ")}} — ${looksLikeRecord ? "single record" : "keyed by environment?"}`;
}

function report(label: string, entries: ContentstackEntry[]): boolean {
  console.log(`\n${"=".repeat(70)}`);
  console.log(`${label} — ${entries.length} entries fetched`);
  console.log("=".repeat(70));

  const withRecords = entries.filter(hasPublishRecord);
  console.log(`Entries carrying a publish record: ${withRecords.length}/${entries.length}`);

  if (withRecords.length === 0) {
    console.log("\n⚠️  No entry carried a publish record. Either nothing is published on this");
    console.log("    stack, or publish_details is not being returned by the list endpoint.");
    return false;
  }

  let resolved = 0;
  let unresolved = 0;

  for (const entry of withRecords.slice(0, SAMPLE_SIZE)) {
    const version = getPublishedVersion(entry);
    const latest = entry._version;

    console.log(`\n  ${entry.title ?? "Untitled"} (${entry.uid})`);
    console.log(`    shape             : ${describeShape(entry.publish_details)}`);
    console.log(`    published version : ${version ?? "COULD NOT RESOLVE"}`);
    console.log(`    latest version    : ${latest ?? "unknown"}`);
    if (version !== null && typeof latest === "number" && latest !== version) {
      console.log(`    → has ${latest - version} unpublished draft version(s) that must NOT promote`);
    }
    console.log(`    raw               : ${JSON.stringify(entry.publish_details)}`);
  }

  for (const entry of withRecords) {
    if (getPublishedVersion(entry) === null) unresolved++;
    else resolved++;
  }

  console.log(`\n  Resolvable: ${resolved}   Unresolvable: ${unresolved}`);

  if (unresolved > 0) {
    console.log(`\n  ❌ ${unresolved} published entries have an unreadable version.`);
    console.log("     Promotion will refuse to touch these until toPublishRecords() in");
    console.log("     src/lib/entry-content.ts is extended to cover the shape above.");
    return false;
  }

  console.log("\n  ✅ Every published entry resolved to a version. Promotion is safe to run.");
  return true;
}

/**
 * Fetch raw entries without going through getPublishedEntries(), which
 * already applies the resolution logic under test here.
 */
async function fetchRaw(client: SandboxClient | ProdPromoteClient): Promise<ContentstackEntry[]> {
  const anyClient = client as unknown as {
    entriesPath(): string;
    config: { locale: string };
    request(method: string, path: string): Promise<string | null>;
  };

  const path =
    `${anyClient.entriesPath()}?locale=${anyClient.config.locale}` + `&limit=100&include_publish_details=true`;

  const response = await anyClient.request("GET", path);
  if (!response) return [];

  const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
  return data.entries ?? [];
}

async function main() {
  const stackType = (process.env.STACK_TYPE as "apidocs" | "csdocs") || "csdocs";
  const upper = stackType.toUpperCase();
  const contentTypeUid = stackType === "apidocs" ? "api_detail_page" : "docs_article";

  console.log(`🔍 publish_details shape check — stack type: ${stackType}`);

  let allGood = true;
  let checkedAnything = false;

  const sandboxApiKey = process.env[`${upper}_SANDBOX_STACK_API_KEY`];
  const sandboxToken = process.env[`${upper}_SANDBOX_MANAGEMENT_TOKEN`];

  if (sandboxApiKey && sandboxToken) {
    checkedAnything = true;
    const client = new SandboxClient({
      apiKey: sandboxApiKey,
      managementToken: sandboxToken,
      contentTypeUid,
      locale: "en-us",
    });
    allGood = report("SANDBOX", await fetchRaw(client)) && allGood;
  } else {
    console.log("\n(skipping Sandbox — credentials not set)");
  }

  const prodApiKey = process.env[`PROD_${upper}_STACK_API_KEY`];
  const prodToken = process.env[`PROD_${upper}_STACK_MANAGEMENT_TOKEN`];

  if (prodApiKey && prodToken) {
    checkedAnything = true;
    const client = new ProdPromoteClient({
      apiKey: prodApiKey,
      managementToken: prodToken,
      contentTypeUid,
      locale: "en-us",
    });
    allGood = report("PROD", await fetchRaw(client)) && allGood;
  } else {
    console.log("\n(skipping Prod — credentials not set)");
  }

  if (!checkedAnything) {
    console.error("\n❌ No credentials provided. Set at least one stack's API key and management token.");
    process.exit(1);
  }

  console.log("\nAlso worth capturing while you have credentials in hand:");
  console.log("  - the real Sandbox environment name(s) in the `environment` field above");
  console.log("  - the real Prod environment name, for PROD_ENVIRONMENT");
  console.log("  (both are still guesses in this codebase — see open item 9)\n");

  process.exit(allGood ? 0 : 1);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
