import type { DocFrontMatter, ParsedDoc } from "./parser.js";
import type { SyncEntryPayload } from "./payload.js";

// Composite key `${dir}:${docType}` → content type UID.
// Used when multiple content types share the same Git directory.
const COMPOSITE_TO_CONTENT_TYPE: Record<string, string> = {
  "generative-ai-api-requests:genai-ingest-request": "api_requests_genai_api_and_ingest_api",
  "postman:postman-landing":                          "postman_landing_page",
  "main-sections:usage-instructions":                 "main_section_usage_instructions",
  "main-sections:api-references":                     "main_section_api_references",
};

// Directory → content type UID (fallback when no composite key matches).
const DIR_TO_CONTENT_TYPE: Record<string, string> = {
  "administration-api-requests":            "api_requests_administration",
  "analytics-api-requests":                 "api_requests_analytics",
  "apps-api-requests":                      "api_requests_apps",
  "asset-management-api-requests":          "api_requests_asset_management_api",
  "automations-management-api-requests":    "api_requests_automation_hub",
  "brand-kit-management-api-requests":      "api_requests_brand_kit",
  "content-delivery-api-requests":          "api_requests_cda",
  "content-management-api-requests":        "api_requests_cma",
  "generative-ai-api-requests":             "api_requests_generative_api",
  "ai-platform-api-requests":               "api_requests_ai_platform",
  "graphql-content-delivery-api-requests":  "api_requests_graphql",
  "image-delivery-api-requests":            "api_requests_image",
  "knowledge-vault-api-requests":           "api_requests_knowlegde_vault",
  "scim-api-requests":                      "api_requests_scim",
  "api-detail":                             "api_detail_page",
  "api-detail-2026":                        "api_detail_page_new_2026",
  "developer-apis":                         "api_detail_page",
  "postman":                                "postman",
  "openapi":                                "openapi",
  "cda-api-reference":                      "cda_api_reference_pages",
  "main-sections":                          "main_section_usage_instructions",
};

// Content types with no `url` field in the CMS — entry lookup uses title instead of url.
const NO_URL_CONTENT_TYPES = new Set(["openapi", "main_section_api_references"]);

/**
 * Resolves the Contentstack content type UID for an api-docs file.
 * Checks composite key (dir + docType) first; falls back to directory-only mapping.
 */
export function resolveApiDocsContentType(relativePath: string, docType?: string): string {
  const dir = relativePath.split("/")[0] ?? "";
  if (docType) {
    const ct = COMPOSITE_TO_CONTENT_TYPE[`${dir}:${docType}`];
    if (ct) return ct;
  }
  const ct = DIR_TO_CONTENT_TYPE[dir];
  if (!ct) {
    console.warn(`api-docs-routing: unknown directory "${dir}" — falling back to api_detail_page`);
  }
  return ct ?? "api_detail_page";
}

/**
 * Returns the CMS entry lookup query for a parsed doc.
 * No-url types use `{ title }` lookup; all others return undefined
 * so the sync falls back to default url-based lookup.
 */
export function resolveApiDocsEntryLookup(
  doc: ParsedDoc,
): Record<string, unknown> | null | undefined {
  const ct = resolveApiDocsContentType(doc.relativePath, doc.frontMatter.doc_type);
  if (NO_URL_CONTENT_TYPES.has(ct)) {
    return { title: doc.frontMatter.title };
  }
  return undefined;
}

// ── Private helpers ───────────────────────────────────────────────────────────

function extractApiVersion(version: string | undefined): string | undefined {
  if (!version) return undefined;
  const match = version.match(/(\d+\.\d+(?:\.\d+)?)/);
  return match ? match[1] : version;
}

function parseEndpoint(description: string): { endpoint: string | undefined } {
  const match = description.trim().match(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(.+)$/i);
  return match ? { endpoint: match[2]!.trim() } : { endpoint: undefined };
}

// ── Payload builders ──────────────────────────────────────────────────────────

function buildApiRequestPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const { endpoint } = parseEndpoint(frontMatter.description ?? "");
  return {
    title: frontMatter.title,
    url: frontMatter.url,
    summary: frontMatter.description,
    ...(endpoint ? { api_endpoint: endpoint } : {}),
  };
}

function buildApiDetailPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const payload: SyncEntryPayload = {
    title: frontMatter.title,
    url: frontMatter.url,
  };
  const apiVersion = extractApiVersion(frontMatter.version);
  if (apiVersion) payload.api_version = apiVersion;
  if (frontMatter.title || frontMatter.description) {
    payload.seo = {
      ...(frontMatter.title ? { title: frontMatter.title } : {}),
      ...(frontMatter.description ? { description: frontMatter.description } : {}),
    };
  }
  return payload;
}

function buildPostmanPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const payload: SyncEntryPayload = { title: frontMatter.title, url: frontMatter.url };
  if (frontMatter.description) {
    payload.description = frontMatter.description;
    payload.summary = frontMatter.description;
  }
  const ver = extractApiVersion(frontMatter.version);
  if (ver) payload.latest_version = ver;
  return payload;
}

function buildPostmanLandingPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const payload: SyncEntryPayload = { title: frontMatter.title, url: frontMatter.url };
  if (frontMatter.description) {
    payload.description = frontMatter.description;
    payload.seo = {
      ...(frontMatter.title ? { title: frontMatter.title } : {}),
      description: frontMatter.description,
    };
  }
  return payload;
}

function buildCdaApiReferencePayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const payload: SyncEntryPayload = { title: frontMatter.title, url: frontMatter.url };
  if (frontMatter.description) {
    payload.description = frontMatter.description;
    payload.seo = {
      ...(frontMatter.title ? { title: frontMatter.title } : {}),
      description: frontMatter.description,
    };
  }
  return payload;
}

function buildMainSectionUsagePayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  return { title: frontMatter.title, url: frontMatter.url };
}

// No `url` field in CMS for this type — url is intentionally omitted from payload.
function buildMainSectionApiRefPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  return { title: frontMatter.title };
}

// No `url` field in CMS for this type — url is intentionally omitted from payload.
function buildOpenapiPayload(frontMatter: DocFrontMatter): SyncEntryPayload {
  const payload: SyncEntryPayload = { title: frontMatter.title };
  if (frontMatter.description) {
    payload.description = frontMatter.description;
    payload.summary = frontMatter.description;
  }
  const ver = extractApiVersion(frontMatter.version);
  if (ver) payload.latest_version = ver;
  return payload;
}

// ── Public dispatcher ─────────────────────────────────────────────────────────

/**
 * Builds the correct CMS entry payload for an api-docs file based on its doc_type.
 * htmlBody is currently unused for api-docs types (structured fields only).
 */
export function buildApiDocsPayload(
  frontMatter: DocFrontMatter,
  _htmlBody: string,
): SyncEntryPayload {
  const dt = frontMatter.doc_type;
  if (dt === "api-detail" || dt === "api-detail-2026") return buildApiDetailPayload(frontMatter);
  if (dt === "postman-collection") return buildPostmanPayload(frontMatter);
  if (dt === "postman-landing") return buildPostmanLandingPayload(frontMatter);
  if (dt === "cda-reference") return buildCdaApiReferencePayload(frontMatter);
  if (dt === "usage-instructions") return buildMainSectionUsagePayload(frontMatter);
  if (dt === "api-references") return buildMainSectionApiRefPayload(frontMatter);
  if (dt === "openapi") return buildOpenapiPayload(frontMatter);
  // Default covers api-request, genai-ingest-request, and any unknown api-request variant.
  return buildApiRequestPayload(frontMatter);
}
