import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConfig } from "./config.js";
import { findRepoRoot } from "./diff.js";
import { ContentstackClient, type ContentstackEntry } from "./contentstack.js";

// All content types to poll in APIDocs Sandbox
const API_DOCS_CONTENT_TYPES = [
  // api_requests_* family
  "api_requests_administration",
  "api_requests_analytics",
  "api_requests_apps",
  "api_requests_asset_management_api",
  "api_requests_automation_hub",
  "api_requests_brand_kit",
  "api_requests_cda",
  "api_requests_cma",
  "api_requests_generative_api",
  "api_requests_genai_api_and_ingest_api",
  "api_requests_ai_platform",
  "api_requests_graphql",
  "api_requests_image",
  "api_requests_knowlegde_vault",
  "api_requests_scim",
  // api detail
  "api_detail_page",
  "api_detail_page_new_2026",
  // postman
  "postman",
  "postman_landing_page",
  // openapi / reference sections
  "openapi",
  "cda_api_reference_pages",
  "main_section_usage_instructions",
  "main_section_api_references",
] as const;

type ApiDocsContentType = (typeof API_DOCS_CONTENT_TYPES)[number];

// Maps content type UID → doc_type frontmatter value
const CONTENT_TYPE_TO_DOC_TYPE: Record<ApiDocsContentType, string> = {
  api_requests_administration:              "api-request",
  api_requests_analytics:                   "api-request",
  api_requests_apps:                        "api-request",
  api_requests_asset_management_api:        "api-request",
  api_requests_automation_hub:              "api-request",
  api_requests_brand_kit:                   "api-request",
  api_requests_cda:                         "api-request",
  api_requests_cma:                         "api-request",
  api_requests_generative_api:              "api-request",
  api_requests_genai_api_and_ingest_api:    "genai-ingest-request",
  api_requests_ai_platform:                 "api-request",
  api_requests_graphql:                     "api-request",
  api_requests_image:                       "api-request",
  api_requests_knowlegde_vault:             "api-request",
  api_requests_scim:                        "api-request",
  api_detail_page:                          "api-detail",
  api_detail_page_new_2026:                 "api-detail-2026",
  postman:                                  "postman-collection",
  postman_landing_page:                     "postman-landing",
  openapi:                                  "openapi",
  cda_api_reference_pages:                  "cda-reference",
  main_section_usage_instructions:          "usage-instructions",
  main_section_api_references:              "api-references",
};

// Entries whose URL in the CMS does not include the directory prefix.
// We prepend this prefix so the file lands in the correct Git directory.
const CONTENT_TYPE_URL_PREFIX: Partial<Record<ApiDocsContentType, string>> = {
  api_detail_page:          "api-detail/",
  api_detail_page_new_2026: "api-detail-2026/",
  postman_landing_page:     "postman/",
  cda_api_reference_pages:  "cda-api-reference/",
  main_section_usage_instructions: "main-sections/",
};

// Content types with no `url` field in the CMS — we derive the filename from the entry title.
const NO_URL_CONTENT_TYPES = new Set<ApiDocsContentType>([
  "openapi",
  "main_section_api_references",
]);

// Git directory for no-url types (keyed by content type UID).
const NO_URL_CONTENT_TYPE_DIR: Partial<Record<ApiDocsContentType, string>> = {
  openapi:                    "openapi",
  main_section_api_references: "main-sections",
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseArgs(argv: string[]): { lookbackMinutes: number } {
  let lookbackMinutes = 20;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--lookback" && argv[i + 1]) {
      lookbackMinutes = parseInt(argv[++i]!, 10);
    }
  }
  if (isNaN(lookbackMinutes) || lookbackMinutes < 1) {
    console.error("--lookback must be a positive integer (minutes)");
    process.exit(1);
  }
  return { lookbackMinutes };
}

function entryToFilePath(
  repoRoot: string,
  docsRoot: string,
  entry: ContentstackEntry,
  contentType: ApiDocsContentType,
): string | null {
  if (NO_URL_CONTENT_TYPES.has(contentType)) {
    const title = (entry.title as string | undefined) ?? "";
    if (!title) return null;
    const dir = NO_URL_CONTENT_TYPE_DIR[contentType] ?? contentType;
    return path.join(repoRoot, docsRoot, dir, `${slugify(title)}.md`);
  }

  const url = (entry.url as string | undefined) ?? "";
  if (!url) return null;
  const prefix = CONTENT_TYPE_URL_PREFIX[contentType] ?? "";
  return path.join(repoRoot, docsRoot, `${prefix}${url}.md`);
}

// ── Markdown builders per content type ───────────────────────────────────────

function buildApiRequestMarkdown(entry: ContentstackEntry, docType: string): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";
  const summary = (entry.summary as string | undefined) ?? "";
  const apiEndpoint = (entry.api_endpoint as string | undefined) ?? "";
  const description = summary || apiEndpoint;

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(description ? [`description: "${description.replace(/"/g, '\\"')}"`] : []),
    `url: ${url}`,
    "product: Contentstack",
    `doc_type: ${docType}`,
    "audience:",
    "  - developers",
    "---",
  ];

  const requestBody = (entry.request_body as string | undefined)?.trim();
  const responseBody = (entry.response_body as string | undefined)?.trim();
  let body = "";
  if (requestBody) body += `## Request\n\n${requestBody}\n`;
  if (responseBody) body += `\n## Response\n\n${responseBody}\n`;
  return body ? `${lines.join("\n")}\n\n${body}` : `${lines.join("\n")}\n`;
}

function buildApiDetailMarkdown(entry: ContentstackEntry, docType: string): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";
  const apiVersion = (entry.api_version as string | undefined) ?? "";
  const seo = entry.seo as Record<string, string> | undefined;
  const seoDescription = seo?.description ?? "";

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(seoDescription ? [`description: "${seoDescription.replace(/"/g, '\\"')}"`] : []),
    `url: ${url}`,
    "product: Contentstack",
    `doc_type: ${docType}`,
    "audience:",
    "  - developers",
    ...(apiVersion ? [`version: "[API VERSION : ${apiVersion}]"`] : []),
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildPostmanMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";
  const description = (entry.description as string | undefined) ?? "";
  const latestVersion = (entry.latest_version as string | undefined) ?? "";

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(description ? [`description: "${description.replace(/"/g, '\\"')}"`] : []),
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: postman-collection",
    "audience:",
    "  - developers",
    ...(latestVersion ? [`version: "${latestVersion}"`] : []),
    "---",
  ];
  const summary = (entry.summary as string | undefined)?.trim();
  return summary ? `${lines.join("\n")}\n\n${summary}\n` : `${lines.join("\n")}\n`;
}

function buildPostmanLandingMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";
  const description = (entry.description as string | undefined) ?? "";
  const seo = entry.seo as Record<string, string> | undefined;
  const seoDescription = seo?.description ?? description;

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(seoDescription ? [`description: "${seoDescription.replace(/"/g, '\\"')}"`] : []),
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: postman-landing",
    "audience:",
    "  - developers",
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildCdaApiReferenceMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";
  const description = (entry.description as string | undefined) ?? "";
  const seo = entry.seo as Record<string, string> | undefined;
  const seoDescription = seo?.description ?? description;

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(seoDescription ? [`description: "${seoDescription.replace(/"/g, '\\"')}"`] : []),
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: cda-reference",
    "audience:",
    "  - developers",
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildMainSectionUsageMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";
  const url = (entry.url as string | undefined) ?? "";

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `url: ${url}`,
    "product: Contentstack",
    "doc_type: usage-instructions",
    "audience:",
    "  - developers",
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildMainSectionApiRefMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `url: main-sections/${slugify(title)}`,
    "product: Contentstack",
    "doc_type: api-references",
    "audience:",
    "  - developers",
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildOpenapiMarkdown(entry: ContentstackEntry): string {
  const title = (entry.title as string | undefined) ?? "";
  const description = (entry.description as string | undefined) ?? "";
  const latestVersion = (entry.latest_version as string | undefined) ?? "";
  const hashKey = (entry.hash_key as string | undefined) ?? "";

  const lines = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    ...(description ? [`description: "${description.replace(/"/g, '\\"')}"`] : []),
    `url: openapi/${hashKey || slugify(title)}`,
    "product: Contentstack",
    "doc_type: openapi",
    "audience:",
    "  - developers",
    ...(latestVersion ? [`version: "${latestVersion}"`] : []),
    ...(hashKey ? [`hash_key: "${hashKey}"`] : []),
    "---",
  ];
  return `${lines.join("\n")}\n`;
}

function buildMarkdownFile(entry: ContentstackEntry, contentType: ApiDocsContentType): string {
  const docType = CONTENT_TYPE_TO_DOC_TYPE[contentType];
  switch (contentType) {
    case "api_detail_page":
    case "api_detail_page_new_2026":
      return buildApiDetailMarkdown(entry, docType);
    case "postman":
      return buildPostmanMarkdown(entry);
    case "postman_landing_page":
      return buildPostmanLandingMarkdown(entry);
    case "openapi":
      return buildOpenapiMarkdown(entry);
    case "cda_api_reference_pages":
      return buildCdaApiReferenceMarkdown(entry);
    case "main_section_usage_instructions":
      return buildMainSectionUsageMarkdown(entry);
    case "main_section_api_references":
      return buildMainSectionApiRefMarkdown(entry);
    default:
      return buildApiRequestMarkdown(entry, docType);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

interface ChangeSummaryEntry {
  filePath: string;
  url: string;
  contentType: string;
  entryUid: string;
  updatedBy: string;
  updatedByName: string;
  updatedAt: string;
}

async function main(): Promise<void> {
  const { lookbackMinutes } = parseArgs(process.argv.slice(2));
  const since = new Date(Date.now() - lookbackMinutes * 60 * 1000).toISOString();

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const config = loadConfig(repoRoot);
  const client = new ContentstackClient(config);

  console.log(
    `cms-pull-api-docs: polling ${API_DOCS_CONTENT_TYPES.length} content types for entries updated since ${since} ` +
    `(lookback: ${lookbackMinutes} min)`,
  );

  let totalChanged = 0;
  let totalSkipped = 0;
  const changes: ChangeSummaryEntry[] = [];

  for (const contentType of API_DOCS_CONTENT_TYPES) {
    let entries: ContentstackEntry[];
    try {
      entries = await client.listRecentEntries(since, contentType);
    } catch (err) {
      console.warn(`  [${contentType}] Failed to fetch entries: ${err}`);
      continue;
    }

    if (entries.length === 0) continue;

    console.log(`  [${contentType}] ${entries.length} entry(ies) updated`);

    for (const entry of entries) {
      const filePath = entryToFilePath(repoRoot, config.CS_DOCS_ROOT, entry, contentType);
      if (!filePath) {
        console.warn(`    SKIP uid=${entry.uid} — could not derive file path`);
        totalSkipped++;
        continue;
      }

      const newContent = buildMarkdownFile(entry, contentType);
      const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;

      if (existing === newContent) {
        console.log(`    no change — ${path.relative(repoRoot, filePath)}`);
        continue;
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, newContent, "utf8");

      const action = existing === null ? "created" : "updated";
      console.log(`    ${action} ${path.relative(repoRoot, filePath)} (uid=${entry.uid})`);
      totalChanged++;

      changes.push({
        filePath: path.relative(repoRoot, filePath),
        url: (entry.url as string | undefined) ?? (entry.title as string | undefined) ?? entry.uid,
        contentType,
        entryUid: entry.uid,
        updatedBy: (entry.updated_by as string | undefined) ?? "unknown",
        updatedByName: "",
        updatedAt: (entry.updated_at as string | undefined) ?? "",
      });
    }
  }

  console.log(
    `cms-pull-api-docs: done — ${totalChanged} file(s) written, ${totalSkipped} skipped.`,
  );

  if (changes.length > 0) {
    const userCache: Record<string, string> = {};
    for (const c of changes) {
      if (!userCache[c.updatedBy]) {
        userCache[c.updatedBy] = await client.getUserName(c.updatedBy);
      }
      c.updatedByName = userCache[c.updatedBy]!;
    }

    const summaryPath = path.join(scriptDir, "../.cms-pull-apidocs-summary.json");
    fs.writeFileSync(summaryPath, JSON.stringify(changes, null, 2), "utf8");
    console.log(`cms-pull-api-docs: summary written to ${summaryPath}`);
  }
}

main().catch((err) => {
  console.error("cms-pull-api-docs: fatal error —", err);
  process.exit(1);
});
