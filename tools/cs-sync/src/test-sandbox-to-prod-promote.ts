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
      // Environments/locales must be nested inside `entry`, not sibling keys —
      // see the identical fix (and its rationale) in
      // ProdPromoteClient.publishToStaging in prod-promote-client.ts. The
      // sibling-key shape 422s against the live CMA every time.
      body: JSON.stringify({
        entry: { locales: [LOCALE], environments: [config.testEnvironment] },
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

// Simulates an entry promoted before the sandbox-uid tag existed — created
// straight in Prod, bypassing cloneEntryToProd (which would tag it
// automatically), so it has no tags at all.
async function createEntryDirectlyInProd(config: TestConfig, entry: { title: string; url: string }): Promise<string> {
  const res = await fetch(
    `https://api.contentstack.io/v3/content_types/${CONTENT_TYPE}/entries?locale=${LOCALE}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: config.prodApiKey,
        authorization: config.prodToken,
      },
      body: JSON.stringify({ entry }),
    },
  );
  if (!res.ok) {
    throw new Error(`Failed to create entry directly in Prod: HTTP ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { entry: { uid: string } };
  return data.entry.uid;
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
let sandboxUid2: string | undefined;
let prodUid2: string | undefined;

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

  // ── p4: moving the Sandbox entry to a new url updates the SAME Prod entry, no duplicate ──

  const MOVED_URL = `${TEST_URL}-moved`;

  await test("p4", "Sandbox entry moved (new url, same uid) → same Prod entry updated, no duplicate", async () => {
    if (!sandboxUid || !prodUid) throw new Error("p1 must pass first — no sandbox/prod entry to move");

    await sandboxClient.updateEntry(sandboxUid, {
      title: "[Test] Promotion fixture (moved)",
      url: MOVED_URL,
    });
    await publishInSandbox(config, sandboxUid);

    const output = runPromotion(sandboxUid);
    if (!/Updated in Prod/i.test(output)) {
      throw new Error(`Expected an "Updated in Prod" log, got:\n${output}`);
    }

    const oldUrlEntry = await prodClient.findEntryByUrl(TEST_URL);
    if (oldUrlEntry) throw new Error(`Expected no Prod entry left at the old url ${TEST_URL}, found uid ${oldUrlEntry.uid}`);

    const movedEntry = await prodClient.findEntryByUrl(MOVED_URL);
    if (!movedEntry) throw new Error(`Expected exactly one Prod entry at ${MOVED_URL}, found none`);
    if (movedEntry.uid !== prodUid) {
      throw new Error(`Expected the SAME Prod uid ${prodUid} to be reused, got a different uid ${movedEntry.uid} (this is the bug this fix targets)`);
    }
    const tags = Array.isArray(movedEntry.tags) ? (movedEntry.tags as string[]) : [];
    if (!tags.includes(`sandbox-uid-${sandboxUid}`)) {
      throw new Error(`Expected Prod entry to carry tag "sandbox-uid-${sandboxUid}", got tags: ${JSON.stringify(tags)}`);
    }

    return `moved to ${MOVED_URL}, same Prod uid ${prodUid} reused, tagged correctly`;
  });

  // ── p5: re-running promotion after the move, with no further change, still skips ──

  await test("p5", "re-running promotion after a move with no further change → still skips, tag doesn't defeat the diff", async () => {
    if (!sandboxUid) throw new Error("p4 must pass first — no moved entry to re-promote");

    const beforeVersion = (await prodClient.findEntryByUrl(MOVED_URL))?._version;

    const output = runPromotion(sandboxUid);
    if (!/no changes detected/i.test(output)) {
      throw new Error(`Expected a "no changes detected" skip log despite the tag asymmetry, got:\n${output}`);
    }

    const prodEntry = await prodClient.findEntryByUrl(MOVED_URL);
    if (!prodEntry) throw new Error("Prod entry disappeared after the no-op run");
    if (prodEntry._version !== beforeVersion) {
      throw new Error(`Expected _version to stay at ${beforeVersion}, got ${prodEntry._version} — contentsEqual is not correctly ignoring the sandbox-uid tag`);
    }

    return "no duplicate, version unchanged despite the Prod-only tag";
  });

  // ── p6: a legacy (pre-tag) Prod entry gets adopted via the url fallback ──

  const LEGACY_URL = `/test/promote-fixture-legacy-${RUN_ID}`;

  await test("p6", "legacy Prod entry with no tag yet → adopted via url fallback, not duplicated", async () => {
    prodUid2 = await createEntryDirectlyInProd(config, {
      title: "[Test] Legacy fixture (pre-tag)",
      url: LEGACY_URL,
    });

    const entry = await sandboxClient.createEntry({
      title: "[Test] Legacy fixture (from sandbox)",
      url: LEGACY_URL,
    });
    sandboxUid2 = entry.uid;
    await publishInSandbox(config, sandboxUid2);

    const output = runPromotion(sandboxUid2);
    if (!/Matched by url \(legacy/i.test(output)) {
      throw new Error(`Expected a "Matched by url (legacy...)" adoption log, got:\n${output}`);
    }
    if (!/Updated in Prod/i.test(output)) {
      throw new Error(`Expected the adoption to go through updateEntry (not a create), got:\n${output}`);
    }

    const prodEntry = await prodClient.findEntryByUrl(LEGACY_URL);
    if (!prodEntry) throw new Error(`Expected exactly one Prod entry at ${LEGACY_URL}, found none`);
    if (prodEntry.uid !== prodUid2) {
      throw new Error(`Expected the legacy entry ${prodUid2} to be adopted in place, got a different uid ${prodEntry.uid} (a duplicate was created instead)`);
    }
    const tags = Array.isArray(prodEntry.tags) ? (prodEntry.tags as string[]) : [];
    if (!tags.includes(`sandbox-uid-${sandboxUid2}`)) {
      throw new Error(`Expected the adopted entry to now carry tag "sandbox-uid-${sandboxUid2}", got tags: ${JSON.stringify(tags)}`);
    }

    return `adopted legacy Prod entry ${prodUid2}, now tagged, no duplicate`;
  });
} finally {
  if (sandboxUid) await deleteEntry(config.sandboxApiKey, config.sandboxToken, sandboxUid);
  if (prodUid) await deleteEntry(config.prodApiKey, config.prodToken, prodUid);
  if (sandboxUid2) await deleteEntry(config.sandboxApiKey, config.sandboxToken, sandboxUid2);
  if (prodUid2) await deleteEntry(config.prodApiKey, config.prodToken, prodUid2);
}

// ── Summary ───────────────────────────────────────────────────────────────────

const pass = results.filter((r) => r.status === "PASS").length;
const fail = results.filter((r) => r.status === "FAIL").length;

console.log(`\n${results.length} scenarios | ${pass} passed | ${fail} failed`);
if (fail > 0) process.exit(1);
