#!/usr/bin/env node

/**
 * Prod Orphan Report (read-only)
 *
 * Lists Prod entries whose url has no matching currently-published Sandbox
 * entry — candidates for stale duplicates left behind by the pre-tag
 * URL-only matching bug (see sandbox-to-prod-promote.ts), or entries that
 * were unpublished/moved in Sandbox after being promoted. Never writes
 * anything back to Sandbox or Prod — ProdPromoteClient cannot delete or
 * unpublish Prod entries by design, so cleanup here is a human's call.
 *
 * Loops apidocs + csdocs in one run — unlike the promote scripts, a
 * read-only report doesn't need per-stack workflow isolation. A stack type
 * missing credentials is skipped with a warning, not a hard failure.
 *
 * Run: npx tsx src/prod-orphan-report.ts   (or npm run prod-orphan-report)
 * Writes: tools/cs-sync/prod-orphan-report.csv
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient } from "./lib/prod-promote-client.js";
import { resolveEnvironment } from "./lib/environment-index.js";
import { extractSandboxUidFromTags } from "./lib/entry-content.js";
import { loadConfig } from "./sandbox-to-prod-promote.js";

interface OrphanRow {
  stackType: string;
  uid: string;
  title: string;
  url: string;
  updatedAt: string;
  sandboxUidTag: string;
}

async function collectOrphansForStack(stackType: "apidocs" | "csdocs"): Promise<OrphanRow[]> {
  let config;
  try {
    config = await loadConfig(stackType);
  } catch (error) {
    console.warn(`⚠️  Skipping ${stackType}: ${error instanceof Error ? error.message : error}`);
    return [];
  }

  const contentTypeUid = stackType === "apidocs" ? "api_detail_page" : "docs_article";
  const sandboxClient = new SandboxClient({
    apiKey: config.sandboxApiKey,
    managementToken: config.sandboxToken,
    contentTypeUid,
    locale: "en-us",
  });
  const prodClient = new ProdPromoteClient({
    apiKey: config.prodApiKey,
    managementToken: config.prodToken,
    contentTypeUid,
    locale: "en-us",
  });

  const sandboxPublished = await sandboxClient.getPublishedEntries();
  const sandboxUrls = new Set(
    sandboxPublished.map((p) => p.entry.url).filter((u): u is string => typeof u === "string"),
  );

  // getPublishedEntries takes a resolved environment rather than a bare name.
  // It used to take the name and compare it against publish_details[].environment,
  // which the CMA returns as a UID, so this report has also been finding zero
  // entries on every run. Resolving the name to its UID fixes both callers at once.
  const stagingEnv = await resolveEnvironment(config.prodApiKey, config.prodToken, "staging");
  const prodEntries = await prodClient.getPublishedEntries(stagingEnv);

  const orphans: OrphanRow[] = [];
  for (const published of prodEntries) {
    const entry = published.entry;
    const url = typeof entry.url === "string" ? entry.url : undefined;
    if (!url || sandboxUrls.has(url)) continue;

    orphans.push({
      stackType,
      uid: published.uid,
      title: typeof entry.title === "string" ? entry.title : "",
      url,
      updatedAt: typeof entry.updated_at === "string" ? entry.updated_at : "",
      sandboxUidTag: extractSandboxUidFromTags(entry.tags) ?? "",
    });
  }
  return orphans;
}

function csvEscape(val: unknown): string {
  const s = String(val ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

async function main() {
  const allOrphans: OrphanRow[] = [];

  for (const stackType of ["apidocs", "csdocs"] as const) {
    console.log(`🔍 Checking ${stackType}...`);
    const orphans = await collectOrphansForStack(stackType);
    console.log(`   found ${orphans.length} candidate orphan(s)`);
    allOrphans.push(...orphans);
  }

  const rows: string[][] = [
    ["stack_type", "uid", "title", "url", "updated_at", "sandbox_uid_tag"],
    ...allOrphans.map((o) => [o.stackType, o.uid, o.title, o.url, o.updatedAt, o.sandboxUidTag]),
  ];
  const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\n");

  const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "prod-orphan-report.csv");
  fs.writeFileSync(outPath, csv, "utf8");

  console.log(`\n✅ Wrote ${allOrphans.length} candidate orphan row(s) to ${outPath}`);
  console.log("These are candidates only — a human should verify and delete/redirect manually in the CMS.");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}
