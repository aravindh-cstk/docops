import "./loadEnv.js";
import os from "node:os";
import { ContentstackClient } from "./contentstack.js";
import type { AppConfig } from "./config.js";
import type { SyncEntryPayload } from "./payload.js";

// ── Helpers ───────────────────────────────────────────────────────────────────

const REGION_BASE_URL: Record<string, string> = {
  us: "https://api.contentstack.io/v3",
  eu: "https://eu-api.contentstack.com/v3",
  "azure-na": "https://azure-na-api.contentstack.com/v3",
  "azure-eu": "https://azure-eu-api.contentstack.com/v3",
  "gcp-na": "https://gcp-na-api.contentstack.com/v3",
};

function makeMockConfig(): AppConfig {
  return {
    CS_API_KEY: "mock-api-key",
    CS_MANAGEMENT_TOKEN: "mock-management-token",
    CS_REGION: "us",
    CS_CONTENT_TYPE: "docs_article",
    CS_ENVIRONMENT: "production",
    CS_LOCALE: "en-us",
    CS_DOCS_ROOT: "cs-docs",
    baseUrl: REGION_BASE_URL["us"]!,
    repoRoot: os.tmpdir(),
  };
}

const testPayload: SyncEntryPayload = {
  title: "[Test] - Error Handling Test",
  url: "/test/error-handling",
  article_content: [{ article_section: { heading: "Test", content: "<p>test</p>" } }],
};

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
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
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 120)}`);
  }
}

// ── s45: Rate limit 429 ───────────────────────────────────────────────────────

await test(
  "s45",
  "Rate limit 429 → ContentstackClient throws with status in message",
  async () => {
    const orig = globalThis.fetch;
    let callCount = 0;

    globalThis.fetch = async (_input: RequestInfo | URL, _init?: RequestInit): Promise<Response> => {
      callCount++;
      return new Response(
        JSON.stringify({ error_message: "Rate limit exceeded. Try again later." }),
        {
          status: 429,
          statusText: "Too Many Requests",
          headers: { "Content-Type": "application/json" },
        },
      );
    };

    try {
      const client = new ContentstackClient(makeMockConfig());
      let threw = false;
      try {
        await client.createEntry(testPayload);
      } catch (err) {
        threw = true;
        const msg = err instanceof Error ? err.message : String(err);
        if (!msg.includes("429")) {
          throw new Error(`Expected "429" in error message but got: ${msg}`);
        }
      }
      if (!threw) throw new Error("createEntry did not throw on 429 response");
      if (callCount === 0) throw new Error("fetch was never called");
      return `threw on 429 after ${callCount} fetch call(s) — no retry logic present (sync aborts immediately)`;
    } finally {
      globalThis.fetch = orig;
    }
  },
);

// ── s46: 5xx mid-sync ────────────────────────────────────────────────────────

await test(
  "s46",
  "5xx error from CS API → ContentstackClient throws with status in message",
  async () => {
    const orig = globalThis.fetch;
    let callCount = 0;

    globalThis.fetch = async (_input: RequestInfo | URL, _init?: RequestInit): Promise<Response> => {
      callCount++;
      return new Response(
        JSON.stringify({ error_message: "Internal server error" }),
        {
          status: 500,
          statusText: "Internal Server Error",
          headers: { "Content-Type": "application/json" },
        },
      );
    };

    try {
      const client = new ContentstackClient(makeMockConfig());
      let threw = false;
      try {
        await client.findEntryByUrl("/test/s46");
      } catch (err) {
        threw = true;
        const msg = err instanceof Error ? err.message : String(err);
        if (!msg.includes("500")) {
          throw new Error(`Expected "500" in error message but got: ${msg}`);
        }
      }
      if (!threw) throw new Error("findEntryByUrl did not throw on 500 response");
      if (callCount === 0) throw new Error("fetch was never called");
      return `threw on 500 after ${callCount} call(s) — no retry; partial sync may leave CS in inconsistent state`;
    } finally {
      globalThis.fetch = orig;
    }
  },
);

// ── Summary ──────────────────────────────────────────────────────────────────

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
