/**
 * test-validate-docs.ts
 *
 * Unit tests for frontmatter validation, routing, and payload building.
 * No CMS connection required — runs entirely offline.
 *
 * Covers:
 *   - frontMatterSchema: valid and invalid frontmatter
 *   - resolveApiDocsContentType: all directories + composite keys
 *   - buildApiDocsPayload: correct fields per doc_type
 *   - resolveApiDocsEntryLookup: url-based vs title-based per type
 *   - CMS→Git markdown builders: output parses cleanly as frontmatter
 *
 * Usage:
 *   npm run test:validate-docs
 */

import matter from "gray-matter";
import { frontMatterSchema, sdkFrontMatterSchema } from "./parser.js";
import {
  resolveApiDocsContentType,
  buildApiDocsPayload,
  resolveApiDocsEntryLookup,
} from "./api-docs-routing.js";
import type { ParsedDoc } from "./parser.js";

// ── Test runner ───────────────────────────────────────────────────────────────

interface TestResult { id: number | string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

async function test(id: number | string, scenario: string, fn: () => string | void): Promise<void> {
  process.stdout.write(`[${String(id).padStart(2)}] ${scenario}... `);
  try {
    const notes = fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 120)}`);
  }
}

// ── Helper ────────────────────────────────────────────────────────────────────

function parsedDoc(relativePath: string, fm: Record<string, unknown>): ParsedDoc {
  return {
    filePath: `/repo/api-docs/${relativePath}`,
    relativePath,
    frontMatter: frontMatterSchema.parse(fm),
    body: "",
  };
}

// ── Section 1: frontMatterSchema ──────────────────────────────────────────────

function v01() {
  const result = frontMatterSchema.safeParse({
    title: "[Studio] - Settings",
    url: "https://www.contentstack.com/docs/studio/settings",
    description: "Configure how your stack behaves.",
    product: "Contentstack",
    doc_type: "api-request",
    audience: ["developers"],
  });
  ok(result.success, `parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  return "cs-docs frontmatter is valid";
}

function v02() {
  const result = frontMatterSchema.safeParse({
    title: "Create an app",
    url: "apps-api-requests/app",
    description: "POST /apps",
    product: "Contentstack",
    doc_type: "api-request",
  });
  ok(result.success, `parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  return "api-request frontmatter is valid";
}

function v03() {
  const result = frontMatterSchema.safeParse({
    title: "Analytics API",
    url: "analytics-api",
    description: "Boost business insights",
    product: "Contentstack",
    doc_type: "api-detail",
    version: "[API VERSION : 2.0.0]",
  });
  ok(result.success, `parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  return "api-detail frontmatter is valid";
}

function v04() {
  const result = frontMatterSchema.safeParse({
    title: "Analytics API",
    url: "postman/Analytics-API",
    description: "The Contentstack Analytics Postman Collection",
    product: "Contentstack",
    doc_type: "postman-collection",
    version: "0.0.1",
  });
  ok(result.success, `parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  return "postman-collection frontmatter is valid";
}

function v05() {
  const result = frontMatterSchema.safeParse({
    title: "OpenAPI Spec",
    url: "openapi/my-spec",
    doc_type: "openapi",
    version: "1.0.0",
    hash_key: "abc123",
  });
  ok(result.success, `parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  return "openapi frontmatter (with hash_key) is valid";
}

function v06() {
  const result = frontMatterSchema.safeParse({
    url: "some/url",
    doc_type: "api-request",
  });
  ok(!result.success, "should fail on missing title");
  const issues = (result as { error: { issues: Array<{ message: string }> } }).error.issues;
  ok(issues.some((i) => i.message.toLowerCase().includes("title")), `expected title error, got: ${JSON.stringify(issues)}`);
  return "missing title caught correctly";
}

function v07() {
  const result = frontMatterSchema.safeParse({
    title: "My Doc",
    doc_type: "api-request",
  });
  ok(!result.success, "should fail on missing url");
  const issues = (result as { error: { issues: Array<{ message: string }> } }).error.issues;
  ok(issues.some((i) => i.message.toLowerCase().includes("url")), `expected url error, got: ${JSON.stringify(issues)}`);
  return "missing url caught correctly";
}

function v08() {
  const result = sdkFrontMatterSchema.safeParse({
    title: "ContentstackClient",
    doc_type: "class_intro",
  });
  ok(result.success, `sdk parse failed: ${JSON.stringify((result as { error: unknown }).error)}`);
  const result2 = sdkFrontMatterSchema.safeParse({
    title: "ContentstackClient",
    doc_type: "invalid_type",
  });
  ok(!result2.success, "sdk should reject invalid doc_type");
  return "sdkFrontMatterSchema validates doc_type enum";
}

// ── Section 2: resolveApiDocsContentType ──────────────────────────────────────

const DIR_EXPECTATIONS: Array<[string, string | undefined, string]> = [
  ["apps-api-requests/app.md",                        undefined,              "api_requests_apps"],
  ["administration-api-requests/test.md",             undefined,              "api_requests_administration"],
  ["analytics-api-requests/test.md",                  undefined,              "api_requests_analytics"],
  ["asset-management-api-requests/test.md",           undefined,              "api_requests_asset_management_api"],
  ["automations-management-api-requests/test.md",     undefined,              "api_requests_automation_hub"],
  ["brand-kit-management-api-requests/test.md",       undefined,              "api_requests_brand_kit"],
  ["content-delivery-api-requests/test.md",           undefined,              "api_requests_cda"],
  ["content-management-api-requests/test.md",         undefined,              "api_requests_cma"],
  ["generative-ai-api-requests/test.md",              "api-request",          "api_requests_generative_api"],
  ["generative-ai-api-requests/ingest.md",            "genai-ingest-request", "api_requests_genai_api_and_ingest_api"],
  ["ai-platform-api-requests/test.md",                undefined,              "api_requests_ai_platform"],
  ["graphql-content-delivery-api-requests/test.md",   undefined,              "api_requests_graphql"],
  ["image-delivery-api-requests/test.md",             undefined,              "api_requests_image"],
  ["knowledge-vault-api-requests/test.md",            undefined,              "api_requests_knowlegde_vault"],
  ["scim-api-requests/test.md",                       undefined,              "api_requests_scim"],
  ["api-detail/test.md",                              "api-detail",           "api_detail_page"],
  ["api-detail-2026/test.md",                         undefined,              "api_detail_page_new_2026"],
  ["postman/collection.md",                           "postman-collection",   "postman"],
  ["postman/landing.md",                              "postman-landing",      "postman_landing_page"],
  ["openapi/spec.md",                                 undefined,              "openapi"],
  ["cda-api-reference/test.md",                       undefined,              "cda_api_reference_pages"],
  ["main-sections/usage.md",                          "usage-instructions",   "main_section_usage_instructions"],
  ["main-sections/api-ref.md",                        "api-references",       "main_section_api_references"],
];

function v09() {
  const failures: string[] = [];
  for (const [path, docType, expected] of DIR_EXPECTATIONS) {
    const actual = resolveApiDocsContentType(path, docType);
    if (actual !== expected) {
      failures.push(`${path} + doc_type=${docType ?? "(none)"} → expected ${expected}, got ${actual}`);
    }
  }
  ok(failures.length === 0, failures.join("\n  "));
  return `${DIR_EXPECTATIONS.length} directory/doc_type combinations all route correctly`;
}

// ── Section 3: buildApiDocsPayload ────────────────────────────────────────────

function v10() {
  const fm = frontMatterSchema.parse({
    title: "Create an App",
    url: "apps-api-requests/app",
    description: "POST /apps",
    doc_type: "api-request",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.title === "Create an App", `title wrong: ${payload.title}`);
  ok(payload.url === "apps-api-requests/app", `url wrong: ${payload.url}`);
  ok((payload as Record<string, unknown>)["summary"] === "POST /apps", "summary missing");
  ok((payload as Record<string, unknown>)["api_endpoint"] === "/apps", "api_endpoint wrong");
  return "api-request payload has title, url, summary, api_endpoint";
}

function v11() {
  const fm = frontMatterSchema.parse({
    title: "Analytics API",
    url: "analytics-api",
    description: "Boost insights",
    doc_type: "api-detail",
    version: "[API VERSION : 2.0.0]",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.title === "Analytics API", `title wrong: ${payload.title}`);
  ok((payload as Record<string, unknown>)["api_version"] === "2.0.0", `api_version wrong: ${(payload as Record<string, unknown>)["api_version"]}`);
  const seo = (payload as Record<string, unknown>)["seo"] as Record<string, string> | undefined;
  ok(!!seo?.description, "seo.description missing");
  return "api-detail payload has api_version and seo";
}

function v12() {
  const fm = frontMatterSchema.parse({
    title: "Analytics Postman",
    url: "postman/Analytics-API",
    description: "Postman collection",
    doc_type: "postman-collection",
    version: "0.0.1",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.url === "postman/Analytics-API", `url wrong: ${payload.url}`);
  ok((payload as Record<string, unknown>)["latest_version"] === "0.0.1", `latest_version wrong`);
  ok((payload as Record<string, unknown>)["description"] === "Postman collection", "description missing");
  return "postman-collection payload has url, description, latest_version";
}

function v13() {
  const fm = frontMatterSchema.parse({
    title: "OpenAPI Spec",
    url: "openapi/my-spec", // internal slug, not sent to CMS
    description: "An OpenAPI spec",
    doc_type: "openapi",
    version: "1.0.0",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.url === undefined, `openapi payload must NOT have url, but got: ${payload.url}`);
  ok(payload.title === "OpenAPI Spec", `title wrong: ${payload.title}`);
  ok((payload as Record<string, unknown>)["latest_version"] === "1.0.0", "latest_version missing");
  return "openapi payload has no url (CMS type has no url field)";
}

function v14() {
  const fm = frontMatterSchema.parse({
    title: "API References",
    url: "main-sections/api-ref", // internal slug
    doc_type: "api-references",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.url === undefined, `api-references payload must NOT have url, got: ${payload.url}`);
  ok(payload.title === "API References", `title wrong: ${payload.title}`);
  return "api-references payload has no url (CMS type has no url field)";
}

function v15() {
  const fm = frontMatterSchema.parse({
    title: "CDA Reference",
    url: "cda-api-reference/overview",
    description: "CDA API docs",
    doc_type: "cda-reference",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.url === "cda-api-reference/overview", `url wrong: ${payload.url}`);
  const seo = (payload as Record<string, unknown>)["seo"] as Record<string, string> | undefined;
  ok(!!seo?.description, "seo.description missing for cda-reference");
  return "cda-reference payload has url and seo";
}

function v16() {
  const fm = frontMatterSchema.parse({
    title: "Postman Landing",
    url: "test-postman-landing",
    description: "All collections",
    doc_type: "postman-landing",
  });
  const payload = buildApiDocsPayload(fm, "");
  ok(payload.url === "test-postman-landing", `url wrong: ${payload.url}`);
  ok((payload as Record<string, unknown>)["description"] === "All collections", "description missing");
  const seo = (payload as Record<string, unknown>)["seo"] as Record<string, string> | undefined;
  ok(!!seo, "seo missing for postman-landing");
  return "postman-landing payload has url, description, seo";
}

// ── Section 4: resolveApiDocsEntryLookup ──────────────────────────────────────

function v17() {
  // URL-based types should return undefined (fall back to default url lookup)
  const urlBasedTypes: Array<[string, string]> = [
    ["apps-api-requests/app.md", "api-request"],
    ["api-detail/test.md", "api-detail"],
    ["postman/test.md", "postman-collection"],
    ["generative-ai-api-requests/test.md", "genai-ingest-request"],
  ];
  for (const [rel, dt] of urlBasedTypes) {
    const doc = parsedDoc(rel, { title: "Test", url: "test/url", doc_type: dt });
    const lookup = resolveApiDocsEntryLookup(doc);
    ok(lookup === undefined, `expected undefined for ${rel} (${dt}), got: ${JSON.stringify(lookup)}`);
  }
  return `${urlBasedTypes.length} url-based types return undefined (default url lookup)`;
}

function v18() {
  // No-url types should return { title } lookup
  const noUrlTypes: Array<[string, string]> = [
    ["openapi/spec.md", "openapi"],
    ["main-sections/api-ref.md", "api-references"],
  ];
  for (const [rel, dt] of noUrlTypes) {
    const doc = parsedDoc(rel, { title: "My Title", url: `${rel.split("/")[0]}/slug`, doc_type: dt });
    const lookup = resolveApiDocsEntryLookup(doc);
    ok(!!lookup, `expected lookup object for ${rel}, got undefined`);
    ok(typeof lookup === "object" && "title" in lookup!, `expected {title}, got: ${JSON.stringify(lookup)}`);
    ok((lookup as Record<string, unknown>)["title"] === "My Title", `title wrong in lookup: ${JSON.stringify(lookup)}`);
  }
  return `${noUrlTypes.length} no-url types return {title} lookup query`;
}

// ── Section 5: CMS→Git markdown roundtrip ────────────────────────────────────

function buildApiRequestMarkdownInline(entry: Record<string, unknown>): string {
  const lines = [
    "---",
    `title: "${String(entry.title ?? "").replace(/"/g, '\\"')}"`,
    ...(entry.description ? [`description: "${String(entry.description).replace(/"/g, '\\"')}"`] : []),
    `url: ${entry.url}`,
    "product: Contentstack",
    "doc_type: api-request",
    "---",
  ];
  return lines.join("\n") + "\n";
}

function v19() {
  const entry = {
    uid: "test123",
    title: `[TEST] Create an App`,
    url: "apps-api-requests/app",
    description: "POST /apps",
    summary: "POST /apps",
    api_endpoint: "/apps",
  };
  const md = buildApiRequestMarkdownInline(entry);
  const parsed = matter(md);
  ok(!!parsed.data["title"], "title missing from parsed frontmatter");
  ok(parsed.data["url"] === "apps-api-requests/app", `url mismatch: ${parsed.data["url"]}`);
  ok(parsed.data["doc_type"] === "api-request", `doc_type missing`);
  // Now validate with schema
  const schema = frontMatterSchema.safeParse(parsed.data);
  ok(schema.success, `schema validation failed: ${JSON.stringify((schema as { error: unknown }).error)}`);
  return "api-request markdown parses correctly and passes schema";
}

function buildApiDetailMarkdownInline(entry: Record<string, unknown>): string {
  const seo = entry.seo as Record<string, string> | undefined;
  const lines = [
    "---",
    `title: "${String(entry.title ?? "").replace(/"/g, '\\"')}"`,
    ...(seo?.description ? [`description: "${seo.description.replace(/"/g, '\\"')}"`] : []),
    `url: ${entry.url}`,
    "product: Contentstack",
    "doc_type: api-detail",
    ...(entry.api_version ? [`version: "[API VERSION : ${entry.api_version}]"`] : []),
    "---",
  ];
  return lines.join("\n") + "\n";
}

function v20() {
  const entry = {
    uid: "test456",
    title: "Analytics API",
    url: "analytics-api",
    api_version: "2.0.0",
    seo: { title: "Analytics API", description: "Boost insights" },
  };
  const md = buildApiDetailMarkdownInline(entry);
  const parsed = matter(md);
  ok(parsed.data["doc_type"] === "api-detail", "doc_type missing");
  ok(String(parsed.data["version"] ?? "").includes("2.0.0"), `version missing or wrong: ${parsed.data["version"]}`);
  const schema = frontMatterSchema.safeParse(parsed.data);
  ok(schema.success, `schema failed: ${JSON.stringify((schema as { error: unknown }).error)}`);
  return "api-detail markdown parses correctly and passes schema";
}

function buildOpenapiMarkdownInline(entry: Record<string, unknown>): string {
  const slug = String(entry.title ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const lines = [
    "---",
    `title: "${String(entry.title ?? "").replace(/"/g, '\\"')}"`,
    ...(entry.description ? [`description: "${String(entry.description).replace(/"/g, '\\"')}"`] : []),
    `url: openapi/${slug}`,
    "product: Contentstack",
    "doc_type: openapi",
    ...(entry.latest_version ? [`version: "${entry.latest_version}"`] : []),
    ...(entry.hash_key ? [`hash_key: "${entry.hash_key}"`] : []),
    "---",
  ];
  return lines.join("\n") + "\n";
}

function v21() {
  const entry = {
    uid: "openapi789",
    title: "Content Delivery API",
    description: "OpenAPI spec for CDA",
    latest_version: "3.0.0",
    hash_key: "abc123def456",
  };
  const md = buildOpenapiMarkdownInline(entry);
  const parsed = matter(md);
  ok(parsed.data["doc_type"] === "openapi", "doc_type missing");
  ok(parsed.data["hash_key"] === "abc123def456", "hash_key missing");
  ok(!!parsed.data["url"], "url (slug) missing");
  const schema = frontMatterSchema.safeParse(parsed.data);
  ok(schema.success, `schema failed: ${JSON.stringify((schema as { error: unknown }).error)}`);
  return "openapi markdown roundtrip: hash_key preserved, url slug generated, schema valid";
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n=== Docs Validation Tests (offline) ===\n");

  // Section 1: frontMatterSchema
  await test( 1, "frontMatterSchema: valid cs-docs frontmatter",           v01);
  await test( 2, "frontMatterSchema: valid api-request frontmatter",       v02);
  await test( 3, "frontMatterSchema: valid api-detail frontmatter",        v03);
  await test( 4, "frontMatterSchema: valid postman-collection frontmatter",v04);
  await test( 5, "frontMatterSchema: valid openapi frontmatter + hash_key",v05);
  await test( 6, "frontMatterSchema: missing title → error",               v06);
  await test( 7, "frontMatterSchema: missing url → error",                 v07);
  await test( 8, "sdkFrontMatterSchema: validates doc_type enum",          v08);

  // Section 2: routing
  await test( 9, "resolveApiDocsContentType: all 23 directory mappings",   v09);

  // Section 3: payload building
  await test(10, "buildApiDocsPayload: api-request fields",                v10);
  await test(11, "buildApiDocsPayload: api-detail fields + seo",           v11);
  await test(12, "buildApiDocsPayload: postman-collection fields",         v12);
  await test(13, "buildApiDocsPayload: openapi has no url in payload",     v13);
  await test(14, "buildApiDocsPayload: api-references has no url",         v14);
  await test(15, "buildApiDocsPayload: cda-reference has seo",             v15);
  await test(16, "buildApiDocsPayload: postman-landing has seo",           v16);

  // Section 4: entry lookup resolution
  await test(17, "resolveApiDocsEntryLookup: url-based types → undefined", v17);
  await test(18, "resolveApiDocsEntryLookup: no-url types → {title}",      v18);

  // Section 5: CMS→Git markdown roundtrip
  await test(19, "Markdown roundtrip: api-request builds parseable output",v19);
  await test(20, "Markdown roundtrip: api-detail builds parseable output", v20);
  await test(21, "Markdown roundtrip: openapi builds parseable output",    v21);

  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  console.log(`\n${"─".repeat(60)}`);
  console.log(`${results.length} tests | ${passed} passed | ${failed} failed`);
  if (failed > 0) {
    console.log(`\nFailed tests:`);
    results.filter((r) => r.status === "FAIL").forEach((r) => {
      console.log(`  [${r.id}] ${r.scenario}`);
      console.log(`       ${r.notes.slice(0, 120)}`);
    });
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("\nFatal:", err);
  process.exit(1);
});
