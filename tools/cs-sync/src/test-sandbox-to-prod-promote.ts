/**
 * Integration tests for the Sandbox → Prod promotion flow.
 *
 * Requires real Contentstack credentials in tools/cs-sync/.env:
 *   CSDOCS_SANDBOX_STACK_API_KEY=...
 *   CSDOCS_SANDBOX_MANAGEMENT_TOKEN=...
 *   PROD_CSDOCS_STACK_API_KEY=...
 *   PROD_CSDOCS_STACK_MANAGEMENT_TOKEN=...
 *
 * Optional:
 *   TEST_SANDBOX_ENVIRONMENT=<name>  — an environment that actually exists on
 *     the Sandbox stack to publish test entries to (defaults to "development";
 *     override this if that name doesn't exist on the real stack).
 *
 * Run: npm run test:sandbox-promote
 *
 * This hits real Sandbox and Prod stacks and cleans up after itself. It's an
 * integration test, not a unit test — there's no mocking here, deliberately,
 * since the bug this is guarding against (duplicate entries in Prod) can only
 * be seen by actually calling the real CMA create/update/query endpoints.
 */
import "./loadEnv.js";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import { ProdPromoteClient } from "./lib/prod-promote-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csSyncDir = path.join(__dirname, "..");

interface TestConfig {
  sandboxApiKey: string;
  sandboxToken: string;
  prodApiKey: string;
  prodToken: string;
  testEnvironment: string;
}

function requireCredentials(): TestConfig | null {
  const sandboxApiKey = process.env.CSDOCS_SANDBOX_STACK_API_KEY ?? "";
  const sandboxToken = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN ?? "";
  const prodApiKey = process.env.PROD_CSDOCS_STACK_API_KEY ?? "";
  const prodToken = process.env.PROD_CSDOCS_STACK_MANAGEMENT_TOKEN ?? "";

  if (!sandboxApiKey || !sandboxToken || !prodApiKey || !prodToken) {
    console.warn(
      "\n[SKIP] Sandbox/Prod credentials not found. Create tools/cs-sync/.env with:\n" +
      "  CSDOCS_SANDBOX_STACK_API_KEY=...\n  CSDOCS_SANDBOX_MANAGEMENT_TOKEN=...\n" +
      "  PROD_CSDOCS_STACK_API_KEY=...\n  PROD_CSDOCS_STACK_MANAGEMENT_TOKEN=...\n",
    );
    return null;
  }

  return {
    sandboxApiKey,
    sandboxToken,
    prodApiKey,
    prodToken,
    testEnvironment: process.env.TEST_SANDBOX_ENVIRONMENT ?? "development",
  };
}

const RUN_ID = String(Date.now());
const TEST_URL = `/test/promote-fixture-${RUN_ID}`;
const CONTENT_TYPE = "docs_article";
const LOCALE = "en-us";

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL" | "SKIP"; notes: string; }
const results: TestResult[] = [];

async function test(id: string, scenario: string, fn: () => Promise<string | void>): Promise<void> {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = await fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 300) });
    console.log(`FAIL\n     ${msg.slice(0, 300)}`);
  }
}

// Raw fetch helpers for operations the promotion clients intentionally don't
// expose (publish-in-sandbox, delete) — kept local to this test file rather
// than added to the production clients.

async function publishInSandbox(config: TestConfig, uid: string): Promise<void> {
  const res = await fetch(
    `https://api.contentstack.io/v3/content_types/${CONTENT_TYPE}/entries/${uid}/publish`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: config.sandboxApiKey,
        authorization: config.sandboxToken,
      },
      body: JSON.stringify({
        entry: {},
        locales: [LOCALE],
        environments: [config.testEnvironment],
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Failed to publish Sandbox entry ${uid} to "${config.testEnvironment}": HTTP ${res.status} ${await res.text()}`);
  }
}

async function deleteEntry(apiKey: string, token: string, uid: string): Promise<void> {
  const res = await fetch(
    `https://api.contentstack.io/v3/content_types/${CONTENT_TYPE}/entries/${uid}`,
    { method: "DELETE", headers: { api_key: apiKey, authorization: token } },
  );
  if (!res.ok && res.status !== 404) {
    console.warn(`  [cleanup] DELETE entry ${uid} → ${res.status}`);
  }
}

function runPromotion(entryUid: string): string {
  return execSync("npx tsx src/sandbox-to-prod-promote.ts", {
    cwd: csSyncDir,
    encoding: "utf8",
    env: {
      ...process.env,
      STACK_TYPE: "csdocs",
      ENTRY_UIDS: entryUid,
    },
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

const config = requireCredentials();

if (!config) {
  console.log("Skipping all sandbox-to-prod-promote integration tests — credentials required.");
  process.exit(0);
}

const sandboxClient = new SandboxClient({
  apiKey: config.sandboxApiKey,
  managementToken: config.sandboxToken,
  contentTypeUid: CONTENT_TYPE,
  locale: LOCALE,
});

const prodClient = new ProdPromoteClient({
  apiKey: config.prodApiKey,
  managementToken: config.prodToken,
  contentTypeUid: CONTENT_TYPE,
  locale: LOCALE,
});

let sandboxUid: string | undefined;
let prodUid: string | undefined;

try {
  // ── p1: first promotion of a newly-published Sandbox entry creates a Prod entry ──

  await test("p1", "published Sandbox entry with no Prod match → created in Prod", async () => {
    const entry = await sandboxClient.createEntry({
      title: "[Test] Promotion fixture",
      url: TEST_URL,
    });
    sandboxUid = entry.uid;
    await publishInSandbox(config, sandboxUid);

    runPromotion(sandboxUid);

    const prodEntry = await prodClient.findEntryByUrl(TEST_URL);
    if (!prodEntry) throw new Error("Expected a Prod entry to exist after promotion, found none");
    prodUid = prodEntry.uid;

    return `created Prod entry ${prodUid}`;
  });

  // ── p2: re-running promotion for the same, unchanged entry does not duplicate ──

  await test("p2", "re-running promotion with no content change → skips, no duplicate", async () => {
    if (!sandboxUid) throw new Error("p1 must pass first — no sandbox entry to re-promote");

    const beforeVersion = (await prodClient.findEntryByUrl(TEST_URL))?._version;

    const output = runPromotion(sandboxUid);
    if (!/no changes detected/i.test(output)) {
      throw new Error(`Expected a "no changes detected" skip log, got:\n${output}`);
    }

    // findEntryByUrl itself throws "Ambiguous url match" if more than one Prod
    // entry now exists at this url — that failure IS the duplicate-detection.
    const prodEntry = await prodClient.findEntryByUrl(TEST_URL);
    if (!prodEntry) throw new Error("Prod entry disappeared between runs");
    if (prodEntry._version !== beforeVersion) {
      throw new Error(`Expected _version to stay at ${beforeVersion}, got ${prodEntry._version} — an update happened despite no content change`);
    }

    return "no duplicate, version unchanged";
  });

  // ── p3: editing the Sandbox entry and re-promoting updates the same Prod entry ──

  await test("p3", "Sandbox entry edited and republished → updates existing Prod entry in place", async () => {
    if (!sandboxUid) throw new Error("p1 must pass first — no sandbox entry to update");

    const beforeVersion = (await prodClient.findEntryByUrl(TEST_URL))?._version;

    await sandboxClient.updateEntry(sandboxUid, {
      title: "[Test] Promotion fixture (edited)",
      url: TEST_URL,
    });
    await publishInSandbox(config, sandboxUid);

    const output = runPromotion(sandboxUid);
    if (!/Updated in Prod/i.test(output)) {
      throw new Error(`Expected an "Updated in Prod" log, got:\n${output}`);
    }

    const prodEntry = await prodClient.findEntryByUrl(TEST_URL);
    if (!prodEntry) throw new Error("Prod entry disappeared after update");
    if (prodEntry.title !== "[Test] Promotion fixture (edited)") {
      throw new Error(`Expected updated title in Prod, got "${prodEntry.title}"`);
    }
    if (prodEntry._version === beforeVersion) {
      throw new Error(`Expected _version to increment past ${beforeVersion}, still at ${prodEntry._version}`);
    }

    return `updated in place, version ${beforeVersion} → ${prodEntry._version}, still exactly one Prod entry`;
  });
} finally {
  if (sandboxUid) await deleteEntry(config.sandboxApiKey, config.sandboxToken, sandboxUid);
  if (prodUid) await deleteEntry(config.prodApiKey, config.prodToken, prodUid);
}

// ── Summary ───────────────────────────────────────────────────────────────────

const pass = results.filter((r) => r.status === "PASS").length;
const fail = results.filter((r) => r.status === "FAIL").length;

console.log(`\n${results.length} scenarios | ${pass} passed | ${fail} failed`);
if (fail > 0) process.exit(1);
