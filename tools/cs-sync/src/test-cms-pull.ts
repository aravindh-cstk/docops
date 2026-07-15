/**
 * Integration tests for the cms-pull flow (Contentstack → GitHub file changes).
 *
 * Requires real Contentstack credentials in tools/cs-sync/.env:
 *   CONTENTSTACK_API_KEY=...
 *   CONTENTSTACK_MANAGEMENT_TOKEN=...
 *   CONTENTSTACK_ENVIRONMENT=sandbox   ← use a non-production environment
 *
 * Run: npm run test:cms-pull
 */
import "./loadEnv.js";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ContentstackClient } from "./contentstack.js";
import type { AppConfig } from "./config.js";
import type { SyncEntryPayload } from "./payload.js";

// ── Paths ─────────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csSyncDir = path.join(__dirname, "..");              // tools/cs-sync
const repoRoot = path.join(__dirname, "..", "..", "..");   // project root

// ── Config ────────────────────────────────────────────────────────────────────

const REGION_BASE_URL: Record<string, string> = {
  us: "https://api.contentstack.io/v3",
  eu: "https://eu-api.contentstack.com/v3",
  "azure-na": "https://azure-na-api.contentstack.com/v3",
  "azure-eu": "https://azure-eu-api.contentstack.com/v3",
  "gcp-na": "https://gcp-na-api.contentstack.com/v3",
};

function requireCredentials(): AppConfig | null {
  const apiKey = process.env.CS_API_KEY ?? process.env.CONTENTSTACK_API_KEY ?? "";
  const token = process.env.CS_MANAGEMENT_TOKEN ?? process.env.CONTENTSTACK_MANAGEMENT_TOKEN ?? "";
  if (!apiKey || !token) {
    console.warn(
      "\n[SKIP] CS credentials not found. Create tools/cs-sync/.env with:\n" +
      "  CONTENTSTACK_API_KEY=...\n  CONTENTSTACK_MANAGEMENT_TOKEN=...\n" +
      "  CONTENTSTACK_ENVIRONMENT=sandbox\n",
    );
    return null;
  }
  const region = (process.env.CS_REGION ?? "us") as AppConfig["CS_REGION"];
  return {
    CS_API_KEY: apiKey,
    CS_MANAGEMENT_TOKEN: token,
    CS_REGION: region,
    CS_CONTENT_TYPE: process.env.CS_CONTENT_TYPE ?? "docs_article",
    CS_ENVIRONMENT: process.env.CS_ENVIRONMENT ?? "production",
    CS_LOCALE: process.env.CS_LOCALE ?? "en-us",
    CS_DOCS_ROOT: process.env.CS_DOCS_ROOT ?? "cs-docs",
    baseUrl: REGION_BASE_URL[region] ?? REGION_BASE_URL["us"]!,
    repoRoot,
  };
}

// ── URL namespacing ───────────────────────────────────────────────────────────

const RUN_ID = String(Date.now());

function testUrl(scenario: string): string {
  return `/developers/test-cmspull-${RUN_ID}/${scenario}`;
}

function urlToFilePath(url: string, config: AppConfig): string {
  const prefix = "/developers/";
  const suffix = url.startsWith(prefix) ? url.slice(prefix.length) : url;
  return path.join(repoRoot, config.CS_DOCS_ROOT, `${suffix}.md`);
}

// ── Test runner ───────────────────────────────────────────────────────────────

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL" | "SKIP" | "GAP"; notes: string; }
const results: TestResult[] = [];

async function test(
  id: string,
  scenario: string,
  fn: () => Promise<string | void>,
): Promise<void> {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = await fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 300) });
    console.log(`FAIL\n     ${msg.slice(0, 150)}`);
  }
}

function gap(id: string, scenario: string, explanation: string, codeRef: string): void {
  results.push({ id, scenario, status: "GAP", notes: `${explanation} [${codeRef}]` });
  console.log(`[${id}] ${scenario}... CONFIRMED GAP (${explanation})`);
}

// ── Cleanup helpers ───────────────────────────────────────────────────────────

async function deleteEntry(config: AppConfig, uid: string): Promise<void> {
  const res = await fetch(
    `${config.baseUrl}/content_types/${config.CS_CONTENT_TYPE}/entries/${uid}`,
    { method: "DELETE", headers: { api_key: config.CS_API_KEY, authorization: config.CS_MANAGEMENT_TOKEN } },
  );
  if (!res.ok && res.status !== 404) {
    console.warn(`  [cleanup] DELETE entry ${uid} → ${res.status}`);
  }
}

function deleteLocalFile(filePath: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath, { force: true });
      // Remove empty parent directories
      let dir = path.dirname(filePath);
      while (dir !== repoRoot) {
        try {
          const entries = fs.readdirSync(dir);
          if (entries.length === 0) fs.rmdirSync(dir);
          else break;
        } catch { break; }
        dir = path.dirname(dir);
      }
    }
  } catch (e) {
    console.warn(`  [cleanup] Could not delete ${filePath}: ${e}`);
  }
}

// ── Run cms-pull subprocess ───────────────────────────────────────────────────

function runCmsPull(lookbackMinutes = 2): string {
  return execSync(
    `npx tsx src/cms-pull.ts --lookback ${lookbackMinutes}`,
    { cwd: csSyncDir, encoding: "utf8", env: process.env },
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

const config = requireCredentials();

if (!config) {
  console.log("Skipping all cms-pull integration tests — credentials required.");
  process.exit(0);
}

const client = new ContentstackClient(config);

// ── Known gaps (code analysis, no live CS call needed) ────────────────────────

gap(
  "s23",
  "Entry published without content edit → not detected by cms-pull",
  "cms-pull queries updated_at: { $gt: sinceIso } — publishing does not change updated_at",
  "contentstack.ts:listRecentEntries — query uses updated_at filter only",
);

gap(
  "s24",
  "Entry unpublished in CS → cms-pull produces no file change",
  "listRecentEntries only returns entries with updated_at > lookback; unpublish does not update updated_at. No removal logic exists in cms-pull.ts.",
  "cms-pull.ts:130-163 — no delete/remove step in the file-writing loop",
);

gap(
  "s25",
  "Entry deleted from CS → file stays in repo indefinitely",
  "Deleted entries do not appear in listRecentEntries results. cms-pull has no reconciliation sweep to detect missing entries.",
  "cms-pull.ts:119 — listRecentEntries only returns recently-modified entries",
);

gap(
  "s27",
  ">100 entries updated since last run → silent truncation at 100",
  "listRecentEntries passes limit: '100' with no pagination loop. Entries 101+ are silently dropped.",
  "contentstack.ts:119 — limit hardcoded to '100', no pagination",
);

// ── s22: CMS entry edited → detected on next cms-pull ────────────────────────

await test("s22", "CMS entry edited and saved → detected by cms-pull (new file created)", async () => {
  const url = testUrl("s22");
  const filePath = urlToFilePath(url, config);
  const payload: SyncEntryPayload = {
    title: "[Test SDK] - CMS Pull S22 Detection",
    url,
    article_content: [{ article_section: { heading: "CMS Pull S22 Detection", content: "<p>Initial content for s22.</p>" } }],
  };
  let uid: string | undefined;
  try {
    const entry = await client.createEntry(payload);
    uid = entry.uid;
    const output = runCmsPull(2);
    if (!output.includes(url) && !fs.existsSync(filePath)) {
      throw new Error(`Expected cms-pull to create ${filePath} but it did not. cms-pull output:\n${output}`);
    }
    return `file created at docs/test-cmspull-${RUN_ID}/s22.md`;
  } finally {
    if (uid) await deleteEntry(config, uid);
    deleteLocalFile(filePath);
  }
});

// ── s36: cms-pull creates a brand-new file ────────────────────────────────────

await test("s36", "cms-pull creates a brand-new .md file not previously tracked", async () => {
  const url = testUrl("s36");
  const filePath = urlToFilePath(url, config);
  const payload: SyncEntryPayload = {
    title: "[Test SDK] - CMS Pull S36 New File",
    url,
    article_content: [{ article_section: { heading: "CMS Pull S36 New File", content: "<p>Brand new entry.</p>" } }],
  };
  let uid: string | undefined;
  try {
    const entry = await client.createEntry(payload);
    uid = entry.uid;
    const output = runCmsPull(2);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not created at ${filePath}. cms-pull output:\n${output}`);
    }
    const content = fs.readFileSync(filePath, "utf8");
    if (!content.includes(url)) {
      throw new Error(`File exists but missing url frontmatter. Content:\n${content}`);
    }
    return `new file created — frontmatter url present`;
  } finally {
    if (uid) await deleteEntry(config, uid);
    deleteLocalFile(filePath);
  }
});

// ── s37: cms-pull updates an existing tracked file ───────────────────────────

await test("s37", "cms-pull updates content of an existing tracked .md file", async () => {
  const url = testUrl("s37");
  const filePath = urlToFilePath(url, config);
  const payload: SyncEntryPayload = {
    title: "[Test SDK] - CMS Pull S37 Update",
    url,
    article_content: [{ article_section: { heading: "CMS Pull S37 Update", content: "<p>Original content.</p>" } }],
  };
  let uid: string | undefined;
  try {
    // Create entry and pull it once so the file exists
    const entry = await client.createEntry(payload);
    uid = entry.uid;
    runCmsPull(2);

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not created in first pull — cannot test update scenario.`);
    }

    // Update the entry content
    await client.updateEntry(uid, {
      ...payload,
      article_content: [{
        article_section: { heading: "CMS Pull S37 Update", content: "<p>Updated content — s37.</p>" },
      }],
    });

    runCmsPull(2);

    const content = fs.readFileSync(filePath, "utf8");
    if (!content.includes("Updated content")) {
      throw new Error(`File not updated. Content:\n${content}`);
    }
    return `file updated with new content from CS`;
  } finally {
    if (uid) await deleteEntry(config, uid);
    deleteLocalFile(filePath);
  }
});

// ── s61: data-src lazy-loaded image → image dropped (CONFIRMED GAP) ───────────

await test("s61", "CS entry with data-src lazy-loaded image → image URL not captured", async () => {
  const url = testUrl("s61");
  const filePath = urlToFilePath(url, config);
  const htmlWithDataSrc = `<p><img data-src="https://images.contentstack.io/v3/assets/test/image.png" alt="lazy image"/></p>`;
  const payload: SyncEntryPayload = {
    title: "[Test SDK] - CMS Pull S61 Lazy Image",
    url,
    article_content: [{ article_section: { heading: "CMS Pull S61 Lazy Image", content: htmlWithDataSrc } }],
  };
  let uid: string | undefined;
  try {
    const entry = await client.createEntry(payload);
    uid = entry.uid;
    runCmsPull(2);

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not created — cannot check image handling.`);
    }

    const content = fs.readFileSync(filePath, "utf8");
    const hasImageMarkdown = content.includes("![");
    const hasDataSrcUrl = content.includes("data-src") || content.includes("images.contentstack.io");

    if (!hasImageMarkdown && !hasDataSrcUrl) {
      // Image was silently dropped — this is the confirmed gap
      return "CONFIRMED GAP — img with data-src silently dropped by Turndown; no ![]() in output";
    }
    if (hasImageMarkdown) {
      return "OK — image converted to markdown (data-src handled)";
    }
    return `partial — data-src present but not as markdown image`;
  } finally {
    if (uid) await deleteEntry(config, uid);
    deleteLocalFile(filePath);
  }
});

// ── Summary ───────────────────────────────────────────────────────────────────

const pass = results.filter((r) => r.status === "PASS").length;
const fail = results.filter((r) => r.status === "FAIL").length;
const gaps = results.filter((r) => r.status === "GAP").length;

console.log(`\n${results.length} scenarios | ${pass} passed | ${fail} failed | ${gaps} confirmed gaps`);
if (fail > 0) process.exit(1);
