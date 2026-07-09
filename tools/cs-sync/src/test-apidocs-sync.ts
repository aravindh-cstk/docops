/**
 * test-apidocs-sync.ts
 *
 * Integration tests for the api-docs Git↔CMS sync pipeline.
 * Uses a temporary git repo to run the full flow:
 *   - add / modify / delete / rename produce the correct CMS action
 *   - every doc_type routes to the right content type
 *   - composite key routing (shared directories)
 *   - no-url types (openapi, main_section_api_references) use title-based lookup
 *   - CMS→Git roundtrip: entry fetched back and converted to markdown
 *
 * Prerequisites (APIDocs Sandbox write credentials):
 *   export CS_API_KEY=$APIDOCS_SANDBOX_STACK_API_KEY
 *   export CS_MANAGEMENT_TOKEN=$APIDOCS_SANDBOX_MANAGEMENT_TOKEN
 *   export CS_REGION=us
 *   npm run test:apidocs-sync
 */

import "./loadEnv.js";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { ContentstackClient } from "./contentstack.js";
import { runSync, type SyncResult } from "./sync.js";
import { resolveApiDocsContentType, buildApiDocsPayload, resolveApiDocsEntryLookup } from "./api-docs-routing.js";
import type { AppConfig } from "./config.js";

// ── Config ────────────────────────────────────────────────────────────────────

const REGION_BASE_URL: Record<string, string> = {
  us: "https://api.contentstack.io/v3",
  eu: "https://eu-api.contentstack.com/v3",
  "azure-na": "https://azure-na-api.contentstack.com/v3",
  "azure-eu": "https://azure-eu-api.contentstack.com/v3",
  "gcp-na": "https://gcp-na-api.contentstack.com/v3",
};

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env var: ${name}`);
  return val;
}

function makeConfig(repoRoot: string): AppConfig {
  const region = (process.env.CS_REGION ?? "us") as AppConfig["CS_REGION"];
  return {
    CS_API_KEY: requireEnv("CS_API_KEY"),
    CS_MANAGEMENT_TOKEN: requireEnv("CS_MANAGEMENT_TOKEN"),
    CS_REGION: region,
    CS_CONTENT_TYPE: "api_detail_page", // default — overridden per file by resolveContentType
    CS_ENVIRONMENT: process.env.CS_ENVIRONMENT ?? "production",
    CS_LOCALE: process.env.CS_LOCALE ?? "en-us",
    CS_DOCS_ROOT: "api-docs",
    baseUrl: REGION_BASE_URL[region] ?? REGION_BASE_URL["us"]!,
    repoRoot,
  };
}

// ── TempRepo ──────────────────────────────────────────────────────────────────

class TempRepo {
  readonly dir: string;

  constructor() {
    this.dir = fs.mkdtempSync(path.join(os.tmpdir(), "apidocs-sync-test-"));
    this.run("git init");
    this.run('git config user.email "test@apidocs-sync.local"');
    this.run('git config user.name "APIDocs Sync Test"');
    fs.mkdirSync(path.join(this.dir, "api-docs"), { recursive: true });
    this.run("git commit --allow-empty -m init");
  }

  run(cmd: string): string {
    return execSync(cmd, { cwd: this.dir, encoding: "utf8" }).trim();
  }

  addFile(relPath: string, content: string): void {
    const abs = path.join(this.dir, relPath);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content, "utf8");
  }

  deleteFile(relPath: string): void {
    fs.unlinkSync(path.join(this.dir, relPath));
  }

  gitMove(oldRel: string, newRel: string): void {
    const newAbs = path.join(this.dir, newRel);
    fs.mkdirSync(path.dirname(newAbs), { recursive: true });
    this.run(`git mv "${oldRel}" "${newRel}"`);
  }

  commit(msg = "test"): string {
    this.run("git add -A");
    try { this.run(`git commit -m "${msg}"`); } catch { /* nothing staged */ }
    return this.head();
  }

  head(): string {
    return this.run("git rev-parse HEAD");
  }

  cleanup(): void {
    fs.rmSync(this.dir, { recursive: true, force: true });
  }
}

// ── Frontmatter helpers ───────────────────────────────────────────────────────

const RUN_ID = String(Date.now());
let seq = 0;

function uid(): string { return `${RUN_ID}-${++seq}`; }

function apiRequestDoc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] Create an App ${uid()}`}"`,
    `description: POST /apps`,
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: api-request",
    "---",
  ].join("\n") + "\n";
}

function apiDetailDoc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] Analytics API ${uid()}`}"`,
    "description: Analytics API documentation",
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: api-detail",
    `version: "[API VERSION : 2.0.0]"`,
    "---",
  ].join("\n") + "\n";
}

function postmanDoc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] Analytics Postman ${uid()}`}"`,
    "description: Contentstack Analytics Postman Collection",
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: postman-collection",
    `version: "0.0.1"`,
    "---",
  ].join("\n") + "\n";
}

function genaiIngestDoc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] GenAI Ingest ${uid()}`}"`,
    "description: POST /genai/ingest",
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: genai-ingest-request",
    "---",
  ].join("\n") + "\n";
}

function apiDetail2026Doc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] Analytics API 2026 ${uid()}`}"`,
    "description: Analytics API 2026 documentation",
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: api-detail-2026",
    `version: "[API VERSION : 3.0.0]"`,
    "---",
  ].join("\n") + "\n";
}

function postmanLandingDoc(url: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] Postman Landing ${uid()}`}"`,
    "description: All Contentstack Postman collections",
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: postman-landing",
    "---",
  ].join("\n") + "\n";
}

function openapiDoc(urlSlug: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] OpenAPI Spec ${uid()}`}"`,
    "description: Test OpenAPI specification",
    `url: ${urlSlug}`,
    "product: Contentstack",
    "doc_type: openapi",
    `version: "1.0.0"`,
    "---",
  ].join("\n") + "\n";
}

function mainSectionApiRefDoc(urlSlug: string, title?: string): string {
  return [
    "---",
    `title: "${title ?? `[TEST] API References ${uid()}`}"`,
    `url: ${urlSlug}`,
    "product: Contentstack",
    "doc_type: api-references",
    "---",
  ].join("\n") + "\n";
}

// ── Sync runner ───────────────────────────────────────────────────────────────

async function syncApiDocs(
  config: AppConfig,
  client: ContentstackClient,
  before: string,
  after: string,
): Promise<SyncResult[]> {
  return runSync(config, client, before, after, {
    resolveContentType: (doc) => resolveApiDocsContentType(doc.relativePath, doc.frontMatter.doc_type),
    buildPayload: (doc, html) => buildApiDocsPayload(doc.frontMatter, html),
    resolveEntryLookup: (doc) => resolveApiDocsEntryLookup(doc),
  });
}

// ── Cleanup helpers ───────────────────────────────────────────────────────────

async function deleteEntry(config: AppConfig, uid: string, contentType: string): Promise<void> {
  const res = await fetch(
    `${config.baseUrl}/content_types/${contentType}/entries/${uid}`,
    { method: "DELETE", headers: { api_key: config.CS_API_KEY, authorization: config.CS_MANAGEMENT_TOKEN } },
  );
  if (!res.ok && res.status !== 404) {
    console.warn(`  [cleanup] DELETE ${contentType}/${uid} → ${res.status}`);
  }
}

// ── Test runner ───────────────────────────────────────────────────────────────

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

interface TestResult { id: number | string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

async function test(id: number | string, scenario: string, fn: () => Promise<string | void>): Promise<void> {
  process.stdout.write(`[${String(id).padStart(2)}] ${scenario}... `);
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

// ── Scenarios ─────────────────────────────────────────────────────────────────

// s01 — Add api-request file → entry created in api_requests_apps
async function s01() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `apps-api-requests/test-add-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/apps-api-requests/test.md", apiRequestDoc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "api_requests_apps" });
    const entry = await client.findEntryByUrl(url, "api_requests_apps");
    ok(!!entry, "entry not found in CMS by url");
    ok(entry!.url === url, `url mismatch: ${entry!.url}`);
    return `uid: ${r!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s02 — Modify api-request → entry updated
async function s02() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `apps-api-requests/test-modify-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/apps-api-requests/test.md", apiRequestDoc(url, "[TEST] Original Title"));
    const sha1 = repo.commit();
    const r1 = await syncApiDocs(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push({ uid: created!.uid!, ct: "api_requests_apps" });

    repo.addFile("api-docs/apps-api-requests/test.md", apiRequestDoc(url, "[TEST] Updated Title"));
    const sha2 = repo.commit();
    const r2 = await syncApiDocs(config, client, sha1, sha2);
    ok(!!r2.find((x) => x.action === "updated"), `expected 'updated', got: ${r2.map((x) => x.action).join(",")}`);
    const entry = await client.findEntryByUrl(url, "api_requests_apps");
    ok(entry?.title?.includes("Updated") === true, `title not updated: ${entry?.title}`);
    return `uid: ${created!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s03 — Delete api-request → entry unpublished
async function s03() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `apps-api-requests/test-delete-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/apps-api-requests/test.md", apiRequestDoc(url));
    const sha1 = repo.commit();
    const r1 = await syncApiDocs(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push({ uid: created!.uid!, ct: "api_requests_apps" });

    repo.deleteFile("api-docs/apps-api-requests/test.md");
    const sha2 = repo.commit();
    const r2 = await syncApiDocs(config, client, sha1, sha2);
    ok(!!r2.find((x) => x.action === "unpublished"), `expected 'unpublished', got: ${r2.map((x) => x.action).join(",")}`);
    const entry = await client.findEntryByUrl(url, "api_requests_apps");
    ok(!!entry, "entry should still exist in CMS after unpublish");
    return `uid: ${created!.uid} — unpublished`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s04 — Rename api-request → old url updated to new url
async function s04() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const oldUrl = `apps-api-requests/test-rename-old-${RUN_ID}`;
  const newUrl = `apps-api-requests/test-rename-new-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/apps-api-requests/old.md", apiRequestDoc(oldUrl));
    const sha1 = repo.commit();
    const r1 = await syncApiDocs(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push({ uid: created!.uid!, ct: "api_requests_apps" });

    repo.gitMove("api-docs/apps-api-requests/old.md", "api-docs/apps-api-requests/new.md");
    repo.addFile("api-docs/apps-api-requests/new.md", apiRequestDoc(newUrl, "[TEST] Renamed"));
    const sha2 = repo.commit();
    const r2 = await syncApiDocs(config, client, sha1, sha2);
    const result = r2.find((x) => x.action === "renamed" || x.action === "updated");
    ok(!!result, `expected renamed/updated, got: ${r2.map((x) => x.action).join(",")}`);
    const entry = await client.findEntryByUrl(newUrl, "api_requests_apps");
    ok(!!entry, "entry not found at new url");
    return `renamed to ${newUrl}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s05 — Add api-detail file → routes to api_detail_page, seo + api_version set
async function s05() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `test-api-detail-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/api-detail/test.md", apiDetailDoc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "api_detail_page" });
    const entry = await client.findEntryByUrl(url, "api_detail_page");
    ok(!!entry, "entry not found in CMS");
    ok(!!(entry as Record<string, unknown>)["api_version"], "api_version missing from entry");
    return `uid: ${r!.uid}, api_version set`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s06 — Add postman-collection → routes to postman, latest_version set
async function s06() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `postman/test-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/postman/test.md", postmanDoc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "postman" });
    const entry = await client.findEntryByUrl(url, "postman");
    ok(!!entry, "entry not found in CMS");
    ok(!!(entry as Record<string, unknown>)["latest_version"], "latest_version missing");
    return `uid: ${r!.uid}, latest_version set`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s07 — Composite key: genai-ingest-request in generative-ai-api-requests/ → api_requests_genai_api_and_ingest_api
async function s07() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `generative-ai-api-requests/test-genai-ingest-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/generative-ai-api-requests/ingest.md", genaiIngestDoc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "api_requests_genai_api_and_ingest_api" });
    const entry = await client.findEntryByUrl(url, "api_requests_genai_api_and_ingest_api");
    ok(!!entry, "entry not found — composite routing may have failed");
    return `uid: ${r!.uid} — routed to api_requests_genai_api_and_ingest_api`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s08 — Composite key: api-detail-2026 in api-detail/ → api_detail_page_new_2026
async function s08() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `test-detail-2026-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/api-detail-2026/test.md", apiDetail2026Doc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "api_detail_page_new_2026" });
    const entry = await client.findEntryByUrl(url, "api_detail_page_new_2026");
    ok(!!entry, "entry not found — api_detail_page_new_2026 routing failed");
    return `uid: ${r!.uid} — routed to api_detail_page_new_2026`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s09 — Composite key: postman-landing in postman/ → postman_landing_page
async function s09() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = `test-postman-landing-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/postman/landing.md", postmanLandingDoc(url));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "postman_landing_page" });
    const entry = await client.findEntryByUrl(url, "postman_landing_page");
    ok(!!entry, "entry not found — postman_landing_page routing failed");
    return `uid: ${r!.uid} — routed to postman_landing_page`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s10 — No-url type: openapi → entry created, found by title
async function s10() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const title = `[TEST] OpenAPI Spec ${RUN_ID}`;
  const urlSlug = `openapi/test-spec-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/openapi/test-spec.md", openapiDoc(urlSlug, title));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "openapi" });
    // No url field in CMS — look up by title
    const entry = await client.findEntryByQuery({ title }, "openapi");
    ok(!!entry, "entry not found by title — no-url routing failed");
    ok(entry!.title === title, `title mismatch: ${entry!.title}`);
    return `uid: ${r!.uid} — created and found by title (no url in CMS)`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s11 — No-url type: main_section_api_references → entry created, found by title
async function s11() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const title = `[TEST] API References Section ${RUN_ID}`;
  const urlSlug = `main-sections/test-api-ref-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/main-sections/test-api-ref.md", mainSectionApiRefDoc(urlSlug, title));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, `expected 'created', got: ${res.map((x) => x.action).join(",")}`);
    uids.push({ uid: r!.uid!, ct: "main_section_api_references" });
    const entry = await client.findEntryByQuery({ title }, "main_section_api_references");
    ok(!!entry, "entry not found by title");
    return `uid: ${r!.uid} — created and found by title`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// s12 — Multiple doc_types in one commit → each routes correctly
async function s12() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const reqUrl    = `apps-api-requests/test-multi-${RUN_ID}`;
  const detailUrl = `test-detail-multi-${RUN_ID}`;
  const postUrl   = `postman/test-multi-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    const base = repo.head();
    repo.addFile("api-docs/apps-api-requests/req.md", apiRequestDoc(reqUrl));
    repo.addFile("api-docs/api-detail/detail.md", apiDetailDoc(detailUrl));
    repo.addFile("api-docs/postman/post.md", postmanDoc(postUrl));
    const after = repo.commit();
    const res = await syncApiDocs(config, client, base, after);
    const created = res.filter((x) => x.action === "created");
    ok(created.length === 3, `expected 3 created, got ${created.length}: ${res.map((x) => x.action).join(",")}`);
    for (const r of created) if (r.uid) uids.push({ uid: r.uid, ct: resolveApiDocsContentType(r.path, undefined) });
    const req    = await client.findEntryByUrl(reqUrl, "api_requests_apps");
    const detail = await client.findEntryByUrl(detailUrl, "api_detail_page");
    const post   = await client.findEntryByUrl(postUrl, "postman");
    ok(!!req,    "api-request entry missing");
    ok(!!detail, "api-detail entry missing");
    ok(!!post,   "postman entry missing");
    return "3 entries created — api_requests_apps + api_detail_page + postman";
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    const c = makeConfig(repo.dir);
    for (const [url, ct] of [[reqUrl, "api_requests_apps"], [detailUrl, "api_detail_page"], [postUrl, "postman"]] as const) {
      const e = await new ContentstackClient(c).findEntryByUrl(url, ct);
      if (e?.uid) await deleteEntry(c, e.uid, ct);
    }
    repo.cleanup();
  }
}

// s13 — Missing title → runSync throws
async function s13() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  try {
    const base = repo.head();
    repo.addFile(
      "api-docs/apps-api-requests/bad.md",
      "---\nurl: apps-api-requests/no-title\ndoc_type: api-request\n---\n",
    );
    const after = repo.commit();
    let threw = false;
    try { await syncApiDocs(config, client, base, after); }
    catch { threw = true; }
    ok(threw, "runSync should throw on missing title");
    return "threw as expected (missing title)";
  } finally {
    repo.cleanup();
  }
}

// s14 — Wrong credentials → HTTP 401
async function s14() {
  const repo = new TempRepo();
  const bad: AppConfig = {
    ...makeConfig(repo.dir),
    CS_API_KEY: "INVALID_KEY",
    CS_MANAGEMENT_TOKEN: "INVALID_TOKEN",
  };
  const client = new ContentstackClient(bad);
  try {
    const base = repo.head();
    repo.addFile(
      "api-docs/apps-api-requests/test.md",
      apiRequestDoc(`apps-api-requests/bad-creds-${RUN_ID}`),
    );
    const after = repo.commit();
    let threw = false;
    let msg = "";
    try { await syncApiDocs(bad, client, base, after); }
    catch (err) { threw = true; msg = err instanceof Error ? err.message : String(err); }
    ok(threw, "should throw on invalid credentials");
    ok(
      msg.toLowerCase().includes("401") || msg.toLowerCase().includes("sync failed") || msg.toLowerCase().includes("unauthorized"),
      `expected auth error, got: ${msg.slice(0, 80)}`,
    );
    return `threw: ${msg.slice(0, 60)}`;
  } finally {
    repo.cleanup();
  }
}

// s15 — CMS→Git roundtrip: create entry in CMS, fetch back, verify key fields intact
async function s15() {
  const config = makeConfig(process.cwd());
  const client = new ContentstackClient(config);
  const url = `apps-api-requests/test-roundtrip-${RUN_ID}`;
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    // Push entry directly to CMS
    const entry = await client.createEntry(
      {
        title: "[TEST] Roundtrip App",
        url,
        summary: "POST /apps",
        api_endpoint: "/apps",
      },
      "api_requests_apps",
    );
    ok(!!entry.uid, "create failed");
    uids.push({ uid: entry.uid, ct: "api_requests_apps" });

    // Fetch it back and verify
    const fetched = await client.findEntryByUrl(url, "api_requests_apps");
    ok(!!fetched, "entry not found after create");
    ok(fetched!.title === "[TEST] Roundtrip App", `title mismatch: ${fetched!.title}`);
    ok(fetched!.url === url, `url mismatch: ${fetched!.url}`);
    ok((fetched as Record<string, unknown>)["summary"] === "POST /apps", "summary missing/wrong");
    return `roundtrip confirmed for uid: ${entry.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
  }
}

// s16 — First push (zero SHA) syncs all api-docs files
async function s16() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const urls = [
    `apps-api-requests/test-zero-sha-1-${RUN_ID}`,
    `apps-api-requests/test-zero-sha-2-${RUN_ID}`,
  ];
  const uids: Array<{ uid: string; ct: string }> = [];
  try {
    repo.addFile("api-docs/apps-api-requests/doc1.md", apiRequestDoc(urls[0]!));
    repo.addFile("api-docs/apps-api-requests/doc2.md", apiRequestDoc(urls[1]!));
    const after = repo.commit();
    const ZERO = "0000000000000000000000000000000000000000";
    const res = await syncApiDocs(config, client, ZERO, after);
    const created = res.filter((x) => x.action === "created");
    ok(created.length === 2, `expected 2 created, got ${created.length}`);
    for (const r of created) if (r.uid) uids.push({ uid: r.uid, ct: "api_requests_apps" });
    for (const u of urls) {
      const e = await client.findEntryByUrl(u, "api_requests_apps");
      ok(!!e, `entry missing for ${u}`);
    }
    return `${created.length} entries created from zero SHA`;
  } finally {
    for (const u of uids) await deleteEntry(config, u.uid, u.ct);
    repo.cleanup();
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  requireEnv("CS_API_KEY");
  requireEnv("CS_MANAGEMENT_TOKEN");

  const probeConfig = makeConfig(process.cwd());
  const probeClient = new ContentstackClient(probeConfig);

  process.stdout.write(`\nPre-flight: checking APIDocs Sandbox connection... `);
  try {
    await probeClient.findEntryByUrl(`nonexistent-probe-${RUN_ID}`, "api_requests_apps");
    console.log("OK\n");
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\nPre-flight failed: ${msg}`);
    console.error("Ensure CS_API_KEY and CS_MANAGEMENT_TOKEN are set to APIDocs Sandbox credentials.");
    process.exit(1);
  }

  console.log("=== APIDocs Sync Integration Tests ===");
  console.log(`Run ID : ${RUN_ID}`);
  console.log(`Stack  : ${probeConfig.CS_API_KEY.slice(0, 8)}...\n`);

  await test(1,  "Add api-request file → created in api_requests_apps",             s01);
  await test(2,  "Modify api-request → updated",                                     s02);
  await test(3,  "Delete api-request → unpublished",                                 s03);
  await test(4,  "Rename api-request → renamed/updated at new url",                  s04);
  await test(5,  "Add api-detail → routes to api_detail_page, api_version set",      s05);
  await test(6,  "Add postman-collection → routes to postman, version set",          s06);
  await test(7,  "Composite: genai-ingest-request → api_requests_genai_api_…",       s07);
  await test(8,  "Composite: api-detail-2026 → api_detail_page_new_2026",            s08);
  await test(9,  "Composite: postman-landing → postman_landing_page",                s09);
  await test(10, "No-url: openapi → created, found by title",                        s10);
  await test(11, "No-url: main_section_api_references → created, found by title",    s11);
  await test(12, "Multi-type commit → 3 content types all route correctly",          s12);
  await test(13, "Missing title field → throws",                                     s13);
  await test(14, "Wrong credentials → HTTP 401",                                     s14);
  await test(15, "CMS roundtrip: create → fetch → verify fields",                   s15);
  await test(16, "First push (zero SHA) → all files synced",                         s16);

  const W = { id: 4, scenario: 54, status: 5, notes: 55 };
  const header = `${"ID".padEnd(W.id)} | ${"Scenario".padEnd(W.scenario)} | ${"Pass?".padEnd(W.status)} | Notes`;
  const sep = "─".repeat(header.length);
  console.log("\n" + sep);
  console.log(header);
  console.log(sep);
  for (const r of results) {
    console.log(
      `${String(r.id).padEnd(W.id)} | ${r.scenario.slice(0, W.scenario).padEnd(W.scenario)} | ${r.status.padEnd(W.status)} | ${r.notes.slice(0, W.notes)}`,
    );
  }
  console.log(sep);
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error("\nFatal:", err);
  process.exit(1);
});
