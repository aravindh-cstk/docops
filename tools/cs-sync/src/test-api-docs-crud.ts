/**
 * test-api-docs-crud.ts
 *
 * CRUD integration tests for the APIDocs Sandbox stack.
 * Covers all api-docs content types:
 *
 *   Original (Tests 1–10):
 *     api_requests_apps, api_detail_page, postman
 *
 *   New api_requests_* (Tests 11–19):
 *     api_requests_ai_platform, api_requests_genai_api_and_ingest_api,
 *     api_detail_page_new_2026
 *
 *   New structured types (Tests 20–31):
 *     postman_landing_page, cda_api_reference_pages,
 *     main_section_usage_instructions
 *
 *   No-url types — title-based lookup (Tests 32–37):
 *     main_section_api_references, openapi
 *
 *   Cleanup (Test 38)
 *
 * Usage:
 *   npm run test:api-docs-crud
 *   npm run test:api-docs-crud -- --skip-cleanup   (leave test entries in CMS)
 */

import "./loadEnv.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConfig } from "./config.js";
import { findRepoRoot } from "./diff.js";
import { ContentstackClient } from "./contentstack.js";

const SKIP_CLEANUP = process.argv.includes("--skip-cleanup");

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
const config = loadConfig(repoRoot);
const client = new ContentstackClient(config);

interface TestResult {
  id: number;
  scenario: string;
  status: "PASS" | "FAIL";
  detail: string;
}

const results: TestResult[] = [];

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

async function test(id: number, scenario: string, fn: () => Promise<string>): Promise<void> {
  process.stdout.write(`[${String(id).padStart(2)}] ${scenario}... `);
  try {
    const detail = await fn();
    results.push({ id, scenario, status: "PASS", detail });
    console.log(`PASS (${detail})`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", detail: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 120)}`);
  }
}

// ── api_requests_apps ────────────────────────────────────────────────────────

const TEST_API_REQUEST_URL = `test-crud-api-request-${Date.now()}`;
let apiRequestUid = "";

async function t01_createApiRequest(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: "[TEST] Create an App",
      url: TEST_API_REQUEST_URL,
      summary: "POST /apps",
      api_endpoint: "/apps",
    },
    "api_requests_apps",
  );
  ok(!!entry.uid, "entry uid missing");
  apiRequestUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t02_readApiRequest(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_API_REQUEST_URL, "api_requests_apps");
  ok(!!entry, "entry not found by url");
  ok(entry!.title === "[TEST] Create an App", `title mismatch: ${entry!.title}`);
  return `found uid: ${entry!.uid}`;
}

async function t03_updateApiRequest(): Promise<string> {
  ok(!!apiRequestUid, "no uid from create step");
  const updated = await client.updateEntry(
    apiRequestUid,
    {
      title: "[TEST] Create an App (Updated)",
      url: TEST_API_REQUEST_URL,
      summary: "POST /apps — creates a new Contentstack app",
      api_endpoint: "/apps",
    },
    "api_requests_apps",
  );
  ok(updated.title === "[TEST] Create an App (Updated)", `title not updated: ${updated.title}`);
  return `title updated`;
}

// ── api_detail_page ───────────────────────────────────────────────────────────

const TEST_API_DETAIL_URL = `test-crud-api-detail-${Date.now()}`;
let apiDetailUid = "";

async function t04_createApiDetail(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: "[TEST] Analytics API",
      url: TEST_API_DETAIL_URL,
      api_version: "2.0.0",
      seo: {
        title: "[TEST] Analytics API",
        description: "Test SEO description for Analytics API",
      },
    },
    "api_detail_page",
  );
  ok(!!entry.uid, "entry uid missing");
  apiDetailUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t05_readApiDetail(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_API_DETAIL_URL, "api_detail_page");
  ok(!!entry, "entry not found by url");
  ok(entry!.title === "[TEST] Analytics API", `title mismatch: ${entry!.title}`);
  return `found uid: ${entry!.uid}`;
}

async function t06_updateApiDetail(): Promise<string> {
  ok(!!apiDetailUid, "no uid from create step");
  const updated = await client.updateEntry(
    apiDetailUid,
    {
      title: "[TEST] Analytics API v2",
      url: TEST_API_DETAIL_URL,
      api_version: "2.1.0",
      seo: {
        title: "[TEST] Analytics API v2",
        description: "Updated SEO description",
      },
    },
    "api_detail_page",
  );
  ok(updated.title === "[TEST] Analytics API v2", `title not updated: ${updated.title}`);
  return `title + api_version updated`;
}

// ── postman ───────────────────────────────────────────────────────────────────

const TEST_POSTMAN_URL = `postman/test-crud-${Date.now()}`;
let postmanUid = "";

async function t07_createPostman(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: "[TEST] Analytics API Postman Collection",
      url: TEST_POSTMAN_URL,
      description: "Test Postman collection for Analytics API",
      summary: "Test Postman collection for Analytics API",
      latest_version: "0.0.1",
    },
    "postman",
  );
  ok(!!entry.uid, "entry uid missing");
  postmanUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t08_readPostman(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_POSTMAN_URL, "postman");
  ok(!!entry, "entry not found by url");
  ok(entry!.title === "[TEST] Analytics API Postman Collection", `title mismatch: ${entry!.title}`);
  return `found uid: ${entry!.uid}`;
}

async function t09_updatePostman(): Promise<string> {
  ok(!!postmanUid, "no uid from create step");
  const updated = await client.updateEntry(
    postmanUid,
    {
      title: "[TEST] Analytics API Postman Collection (Updated)",
      url: TEST_POSTMAN_URL,
      description: "Updated description",
      summary: "Updated summary",
      latest_version: "0.0.2",
    },
    "postman",
  );
  ok(updated.title === "[TEST] Analytics API Postman Collection (Updated)", `title not updated: ${updated.title}`);
  return `title + version updated`;
}

// ── api_requests_ai_platform ──────────────────────────────────────────────────

const TEST_AI_PLATFORM_URL = `ai-platform-api-requests/test-crud-${Date.now()}`;
let aiPlatformUid = "";

async function t11_createAiPlatform(): Promise<string> {
  const entry = await client.createEntry(
    { title: "[TEST] AI Platform Create App", url: TEST_AI_PLATFORM_URL, summary: "POST /ai-platform/apps", api_endpoint: "/ai-platform/apps" },
    "api_requests_ai_platform",
  );
  ok(!!entry.uid, "entry uid missing");
  aiPlatformUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t12_readAiPlatform(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_AI_PLATFORM_URL, "api_requests_ai_platform");
  ok(!!entry, "entry not found");
  ok(entry!.title === "[TEST] AI Platform Create App", `title mismatch: ${entry!.title}`);
  return `found uid: ${entry!.uid}`;
}

async function t13_updateAiPlatform(): Promise<string> {
  ok(!!aiPlatformUid, "no uid from create step");
  const updated = await client.updateEntry(
    aiPlatformUid,
    { title: "[TEST] AI Platform Create App (Updated)", url: TEST_AI_PLATFORM_URL, summary: "POST /ai-platform/apps — updated", api_endpoint: "/ai-platform/apps" },
    "api_requests_ai_platform",
  );
  ok(updated.title === "[TEST] AI Platform Create App (Updated)", `title not updated: ${updated.title}`);
  return "title updated";
}

// ── api_requests_genai_api_and_ingest_api ─────────────────────────────────────

const TEST_GENAI_INGEST_URL = `generative-ai-api-requests/test-genai-ingest-${Date.now()}`;
let genaiIngestUid = "";

async function t14_createGenaiIngest(): Promise<string> {
  const entry = await client.createEntry(
    { title: "[TEST] GenAI Ingest Request", url: TEST_GENAI_INGEST_URL, summary: "POST /genai/ingest", api_endpoint: "/genai/ingest" },
    "api_requests_genai_api_and_ingest_api",
  );
  ok(!!entry.uid, "entry uid missing");
  genaiIngestUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t15_readGenaiIngest(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_GENAI_INGEST_URL, "api_requests_genai_api_and_ingest_api");
  ok(!!entry, "entry not found");
  return `found uid: ${entry!.uid}`;
}

async function t16_updateGenaiIngest(): Promise<string> {
  ok(!!genaiIngestUid, "no uid from create step");
  const updated = await client.updateEntry(
    genaiIngestUid,
    { title: "[TEST] GenAI Ingest Request (Updated)", url: TEST_GENAI_INGEST_URL, summary: "POST /genai/ingest — updated" },
    "api_requests_genai_api_and_ingest_api",
  );
  ok(updated.title === "[TEST] GenAI Ingest Request (Updated)", `title not updated: ${updated.title}`);
  return "title updated";
}

// ── api_detail_page_new_2026 ──────────────────────────────────────────────────

const TEST_DETAIL_2026_URL = `test-crud-api-detail-2026-${Date.now()}`;
let detail2026Uid = "";

async function t17_createDetail2026(): Promise<string> {
  const entry = await client.createEntry(
    { title: "[TEST] Analytics API 2026", url: TEST_DETAIL_2026_URL, api_version: "3.0.0", seo: { title: "[TEST] Analytics API 2026", description: "New 2026 API" } },
    "api_detail_page_new_2026",
  );
  ok(!!entry.uid, "entry uid missing");
  detail2026Uid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t18_readDetail2026(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_DETAIL_2026_URL, "api_detail_page_new_2026");
  ok(!!entry, "entry not found");
  return `found uid: ${entry!.uid}`;
}

async function t19_updateDetail2026(): Promise<string> {
  ok(!!detail2026Uid, "no uid from create step");
  const updated = await client.updateEntry(
    detail2026Uid,
    { title: "[TEST] Analytics API 2026 (Updated)", url: TEST_DETAIL_2026_URL, api_version: "3.1.0" },
    "api_detail_page_new_2026",
  );
  ok(updated.title === "[TEST] Analytics API 2026 (Updated)", `title not updated: ${updated.title}`);
  return "title + version updated";
}

// ── postman_landing_page ──────────────────────────────────────────────────────

const TEST_POSTMAN_LANDING_URL = `test-postman-landing-${Date.now()}`;
let postmanLandingUid = "";

async function t20_createPostmanLanding(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: "[TEST] Postman Collections Landing",
      url: TEST_POSTMAN_LANDING_URL,
      description: "Browse all Contentstack Postman collections",
      seo: { title: "[TEST] Postman Collections Landing", description: "Browse all Contentstack Postman collections" },
    },
    "postman_landing_page",
  );
  ok(!!entry.uid, "entry uid missing");
  postmanLandingUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t21_readPostmanLanding(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_POSTMAN_LANDING_URL, "postman_landing_page");
  ok(!!entry, "entry not found");
  return `found uid: ${entry!.uid}`;
}

async function t22_updatePostmanLanding(): Promise<string> {
  ok(!!postmanLandingUid, "no uid from create step");
  const updated = await client.updateEntry(
    postmanLandingUid,
    { title: "[TEST] Postman Collections Landing (Updated)", url: TEST_POSTMAN_LANDING_URL, description: "Updated description" },
    "postman_landing_page",
  );
  ok(updated.title === "[TEST] Postman Collections Landing (Updated)", `title not updated: ${updated.title}`);
  return "title updated";
}

// ── cda_api_reference_pages ───────────────────────────────────────────────────

const TEST_CDA_REF_URL = `test-cda-reference-${Date.now()}`;
let cdaRefUid = "";

async function t23_createCdaReference(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: "[TEST] CDA API Reference",
      url: TEST_CDA_REF_URL,
      description: "Content Delivery API reference documentation",
      seo: { title: "[TEST] CDA API Reference", description: "Content Delivery API reference" },
    },
    "cda_api_reference_pages",
  );
  ok(!!entry.uid, "entry uid missing");
  cdaRefUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t24_readCdaReference(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_CDA_REF_URL, "cda_api_reference_pages");
  ok(!!entry, "entry not found");
  return `found uid: ${entry!.uid}`;
}

async function t25_updateCdaReference(): Promise<string> {
  ok(!!cdaRefUid, "no uid from create step");
  const updated = await client.updateEntry(
    cdaRefUid,
    { title: "[TEST] CDA API Reference (Updated)", url: TEST_CDA_REF_URL, description: "Updated description" },
    "cda_api_reference_pages",
  );
  ok(updated.title === "[TEST] CDA API Reference (Updated)", `title not updated: ${updated.title}`);
  return "title updated";
}

// ── main_section_usage_instructions ──────────────────────────────────────────

const TEST_USAGE_URL = `test-usage-instructions-${Date.now()}`;
let usageUid = "";

async function t26_createUsageInstructions(): Promise<string> {
  const entry = await client.createEntry(
    { title: "[TEST] Usage Instructions Section", url: TEST_USAGE_URL },
    "main_section_usage_instructions",
  );
  ok(!!entry.uid, "entry uid missing");
  usageUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t27_readUsageInstructions(): Promise<string> {
  const entry = await client.findEntryByUrl(TEST_USAGE_URL, "main_section_usage_instructions");
  ok(!!entry, "entry not found");
  return `found uid: ${entry!.uid}`;
}

async function t28_updateUsageInstructions(): Promise<string> {
  ok(!!usageUid, "no uid from create step");
  const updated = await client.updateEntry(
    usageUid,
    { title: "[TEST] Usage Instructions Section (Updated)", url: TEST_USAGE_URL },
    "main_section_usage_instructions",
  );
  ok(updated.title === "[TEST] Usage Instructions Section (Updated)", `title not updated: ${updated.title}`);
  return "title updated";
}

// ── main_section_api_references (no url — title-based lookup) ─────────────────

const TEST_API_REF_TITLE = `[TEST] API References Section ${Date.now()}`;
let apiRefUid = "";

async function t29_createApiRefSection(): Promise<string> {
  const entry = await client.createEntry(
    { title: TEST_API_REF_TITLE },
    "main_section_api_references",
  );
  ok(!!entry.uid, "entry uid missing");
  apiRefUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t30_readApiRefSection(): Promise<string> {
  const entry = await client.findEntryByQuery({ title: TEST_API_REF_TITLE }, "main_section_api_references");
  ok(!!entry, "entry not found by title");
  return `found uid: ${entry!.uid}`;
}

async function t31_updateApiRefSection(): Promise<string> {
  ok(!!apiRefUid, "no uid from create step");
  const updated = await client.updateEntry(
    apiRefUid,
    { title: `${TEST_API_REF_TITLE} (Updated)` },
    "main_section_api_references",
  );
  ok(updated.title === `${TEST_API_REF_TITLE} (Updated)`, `title not updated: ${updated.title}`);
  return "title updated";
}

// ── openapi (no url — title-based lookup) ─────────────────────────────────────

const TEST_OPENAPI_TITLE = `[TEST] OpenAPI Spec ${Date.now()}`;
let openapiUid = "";

async function t32_createOpenapi(): Promise<string> {
  const entry = await client.createEntry(
    {
      title: TEST_OPENAPI_TITLE,
      description: "Test OpenAPI spec for CRUD validation",
      summary: "Test OpenAPI spec for CRUD validation",
      latest_version: "1.0.0",
    },
    "openapi",
  );
  ok(!!entry.uid, "entry uid missing");
  openapiUid = entry.uid;
  return `uid: ${entry.uid}`;
}

async function t33_readOpenapi(): Promise<string> {
  const entry = await client.findEntryByQuery({ title: TEST_OPENAPI_TITLE }, "openapi");
  ok(!!entry, "entry not found by title");
  return `found uid: ${entry!.uid}`;
}

async function t34_updateOpenapi(): Promise<string> {
  ok(!!openapiUid, "no uid from create step");
  const updated = await client.updateEntry(
    openapiUid,
    {
      title: `${TEST_OPENAPI_TITLE} (Updated)`,
      description: "Updated description",
      latest_version: "1.1.0",
    },
    "openapi",
  );
  ok(updated.title === `${TEST_OPENAPI_TITLE} (Updated)`, `title not updated: ${updated.title}`);
  return "title + version updated";
}

// ── Cleanup ───────────────────────────────────────────────────────────────────

async function deleteEntry(uid: string, contentType: string): Promise<void> {
  const res = await fetch(
    `${config.baseUrl}/content_types/${contentType}/entries/${uid}`,
    { method: "DELETE", headers: { api_key: config.CS_API_KEY, authorization: config.CS_MANAGEMENT_TOKEN } },
  );
  if (!res.ok && res.status !== 404) {
    console.warn(`  [cleanup] DELETE ${contentType}/${uid} → ${res.status}`);
  }
}

async function t35_cleanup(): Promise<string> {
  if (SKIP_CLEANUP) return "skipped (--skip-cleanup)";
  const tasks = [
    { uid: apiRequestUid,      ct: "api_requests_apps" },
    { uid: apiDetailUid,       ct: "api_detail_page" },
    { uid: postmanUid,         ct: "postman" },
    { uid: aiPlatformUid,      ct: "api_requests_ai_platform" },
    { uid: genaiIngestUid,     ct: "api_requests_genai_api_and_ingest_api" },
    { uid: detail2026Uid,      ct: "api_detail_page_new_2026" },
    { uid: postmanLandingUid,  ct: "postman_landing_page" },
    { uid: cdaRefUid,          ct: "cda_api_reference_pages" },
    { uid: usageUid,           ct: "main_section_usage_instructions" },
    { uid: apiRefUid,          ct: "main_section_api_references" },
    { uid: openapiUid,         ct: "openapi" },
  ].filter((t) => t.uid);
  await Promise.all(tasks.map((t) => deleteEntry(t.uid, t.ct)));
  return `deleted ${tasks.length} test entries`;
}

// ── Runner ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log("\n── APIDocs Sandbox CRUD Tests ──────────────────────────────────\n");

  // Original types
  await test(1,  "api_requests_apps:         create entry",       t01_createApiRequest);
  await test(2,  "api_requests_apps:         read by url",        t02_readApiRequest);
  await test(3,  "api_requests_apps:         update entry",       t03_updateApiRequest);
  await test(4,  "api_detail_page:           create entry",       t04_createApiDetail);
  await test(5,  "api_detail_page:           read by url",        t05_readApiDetail);
  await test(6,  "api_detail_page:           update entry + seo", t06_updateApiDetail);
  await test(7,  "postman:                   create entry",       t07_createPostman);
  await test(8,  "postman:                   read by url",        t08_readPostman);
  await test(9,  "postman:                   update entry",       t09_updatePostman);
  await test(10, "api_requests_apps:         unpublish entry",    async () => {
    if (!apiRequestUid) return "skipped — create step did not produce uid";
    await client.unpublishEntry(apiRequestUid, "api_requests_apps");
    return `unpublished uid: ${apiRequestUid}`;
  });

  // New api_requests_* variants
  await test(11, "api_requests_ai_platform:              create", t11_createAiPlatform);
  await test(12, "api_requests_ai_platform:              read",   t12_readAiPlatform);
  await test(13, "api_requests_ai_platform:              update", t13_updateAiPlatform);
  await test(14, "api_requests_genai_api_and_ingest_api: create", t14_createGenaiIngest);
  await test(15, "api_requests_genai_api_and_ingest_api: read",   t15_readGenaiIngest);
  await test(16, "api_requests_genai_api_and_ingest_api: update", t16_updateGenaiIngest);
  await test(17, "api_detail_page_new_2026:              create", t17_createDetail2026);
  await test(18, "api_detail_page_new_2026:              read",   t18_readDetail2026);
  await test(19, "api_detail_page_new_2026:              update", t19_updateDetail2026);

  // New structured types
  await test(20, "postman_landing_page:               create",    t20_createPostmanLanding);
  await test(21, "postman_landing_page:               read",      t21_readPostmanLanding);
  await test(22, "postman_landing_page:               update",    t22_updatePostmanLanding);
  await test(23, "cda_api_reference_pages:            create",    t23_createCdaReference);
  await test(24, "cda_api_reference_pages:            read",      t24_readCdaReference);
  await test(25, "cda_api_reference_pages:            update",    t25_updateCdaReference);
  await test(26, "main_section_usage_instructions:    create",    t26_createUsageInstructions);
  await test(27, "main_section_usage_instructions:    read",      t27_readUsageInstructions);
  await test(28, "main_section_usage_instructions:    update",    t28_updateUsageInstructions);

  // No-url types (title-based lookup)
  await test(29, "main_section_api_references: create",           t29_createApiRefSection);
  await test(30, "main_section_api_references: read by title",    t30_readApiRefSection);
  await test(31, "main_section_api_references: update",           t31_updateApiRefSection);
  await test(32, "openapi:                     create",           t32_createOpenapi);
  await test(33, "openapi:                     read by title",    t33_readOpenapi);
  await test(34, "openapi:                     update",           t34_updateOpenapi);

  await test(35, "cleanup: delete all test entries",              t35_cleanup);

  console.log("\n── Results ─────────────────────────────────────────────────────");
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  console.log(`  PASS: ${passed}   FAIL: ${failed}   TOTAL: ${results.length}`);

  if (SKIP_CLEANUP) {
    console.log("\nTest entries left in APIDocs Sandbox for inspection:");
    if (apiRequestUid)     console.log(`  api_requests_apps                   uid: ${apiRequestUid}`);
    if (apiDetailUid)      console.log(`  api_detail_page                     uid: ${apiDetailUid}`);
    if (postmanUid)        console.log(`  postman                             uid: ${postmanUid}`);
    if (aiPlatformUid)     console.log(`  api_requests_ai_platform            uid: ${aiPlatformUid}`);
    if (genaiIngestUid)    console.log(`  api_requests_genai_api_and_ingest   uid: ${genaiIngestUid}`);
    if (detail2026Uid)     console.log(`  api_detail_page_new_2026            uid: ${detail2026Uid}`);
    if (postmanLandingUid) console.log(`  postman_landing_page                uid: ${postmanLandingUid}`);
    if (cdaRefUid)         console.log(`  cda_api_reference_pages             uid: ${cdaRefUid}`);
    if (usageUid)          console.log(`  main_section_usage_instructions     uid: ${usageUid}`);
    if (apiRefUid)         console.log(`  main_section_api_references         uid: ${apiRefUid}`);
    if (openapiUid)        console.log(`  openapi                             uid: ${openapiUid}`);
  }

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
