#!/usr/bin/env node
/**
 * One-off script: hard-deletes specific docs_article entries from the
 * Sandbox stack by uid. contentstack.ts only exposes unpublishEntry (no
 * deleteEntry), so this hits the CMA delete endpoint directly.
 *
 * Read this file's UIDS list before running — it is meant to be edited per
 * use, not a general-purpose deletion tool. Sandbox only, never Prod.
 *
 * Usage: npx tsx src/delete-sandbox-entries.ts
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
config({ path: path.join(repoRoot, ".env") });

const API_KEY = process.env.SANDBOX_CONTENTSTACK_DOCS_STACK_API_KEY;
const TOKEN = process.env.SANDBOX_CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!API_KEY || !TOKEN) {
  throw new Error(
    "SANDBOX_CONTENTSTACK_DOCS_STACK_API_KEY / SANDBOX_CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN must be set (repo-root .env)",
  );
}

const HOST = "https://api.contentstack.io/v3";

// Round-1 test entries created by PR #206 (docops-sync-test.md files, one per
// product plus the agent-os/marketplace sub-variants), from the sync run log.
const UIDS: Array<{ product: string; uid: string }> = [
  { product: "administration", uid: "blt609e746ba91e78d4" },
  { product: "agent-os (Automate Connectors)", uid: "blta8587ab2e55cf190" },
  { product: "agent-os (Automate Guides)", uid: "bltaeb57c3e0d95db3c" },
  { product: "analytics", uid: "blt093c1b4606779ce1" },
  { product: "assets", uid: "blt097c0b7c0e0f4442" },
  { product: "brand-kit", uid: "blt4bbf3326df4c3261" },
  { product: "developer-hub", uid: "blt09495336af1644be" },
  { product: "developer-resources", uid: "bltf8ebe2594bfbe467" },
  { product: "headless-cms", uid: "bltb8c4acc9750aaae8" },
  { product: "launch", uid: "bltf2915f2dcb7ba2ff" },
  { product: "lytics-cdp", uid: "blt17d2ef48570223d3" },
  { product: "marketplace (Platform Guides)", uid: "blt8102413c3ceeed09" },
  { product: "marketplace (Apps)", uid: "blt76c503da9b1fa0d5" },
  { product: "personalize", uid: "bltc65ca307c54fe86c" },
  { product: "studio", uid: "blt3c0a765f84698450" },
];

async function deleteEntry(uid: string): Promise<{ ok: boolean; status: number; body: string }> {
  const res = await fetch(`${HOST}/content_types/docs_article/entries/${uid}?locale=en-us`, {
    method: "DELETE",
    headers: { api_key: API_KEY!, authorization: TOKEN! },
  });
  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

async function main() {
  let failures = 0;
  for (const { product, uid } of UIDS) {
    const result = await deleteEntry(uid);
    if (result.ok) {
      console.log(`[OK] ${product}: deleted ${uid}`);
    } else {
      failures++;
      console.error(`[FAIL] ${product}: ${uid} -> ${result.status} ${result.body}`);
    }
  }
  console.log(`\n${UIDS.length - failures}/${UIDS.length} deleted successfully.`);
  if (failures > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
