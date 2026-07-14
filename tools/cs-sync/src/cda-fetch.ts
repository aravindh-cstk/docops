import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { DeliveryConfig } from "./config.js";

// ─────────────────────────────────────────────────────────────────────────────
// Content Delivery API fetch (delivery token, read-only).
//
// Replicates backend/export-contentstack.js's proven paginated CDA pattern so we
// pull the exact content the docs were generated from. Entries are cached to a
// gitignored JSON so the image-inject / stub-rebuild passes run fully offline and
// the read-only CDA is hit only once.
// ─────────────────────────────────────────────────────────────────────────────

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const CACHE_PATH = path.join(scriptDir, "..", ".image-source-cache.json");

export interface CdaEntry {
  uid: string;
  url?: string;
  title?: string;
  md_content?: string;
  article_content?: unknown;
  [key: string]: unknown;
}

export interface ArticleSection {
  heading: string;
  content: string;
}

interface CacheShape {
  fetchedAt: string;
  contentType: string;
  environment: string;
  count: number;
  entries: CdaEntry[];
}

async function fetchWithRetry(url: string, headers: Record<string, string>, retries = 3): Promise<Response> {
  const res = await fetch(url, { headers });
  if (res.status >= 500 && retries > 0) {
    await new Promise((r) => setTimeout(r, 1000));
    return fetchWithRetry(url, headers, retries - 1);
  }
  return res;
}

export async function fetchAllEntries(config: DeliveryConfig): Promise<CdaEntry[]> {
  const headers = {
    api_key: config.CS_API_KEY,
    access_token: config.CS_DELIVERY_TOKEN,
    "Content-Type": "application/json",
  };
  const PAGE_SIZE = 100;
  const all: CdaEntry[] = [];
  let skip = 0;

  for (;;) {
    const params = new URLSearchParams({
      environment: config.CS_ENVIRONMENT,
      locale: config.CS_LOCALE,
      include_count: "true",
      limit: String(PAGE_SIZE),
      skip: String(skip),
    });
    const url = `${config.cdaBaseUrl}/content_types/${config.CS_CONTENT_TYPE}/entries?${params}`;
    const res = await fetchWithRetry(url, headers);
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`CDA fetch failed (HTTP ${res.status} ${res.statusText}) for ${url}\n${body}`);
    }
    const data = (await res.json()) as { entries?: CdaEntry[]; count?: number };
    const page = data.entries ?? [];
    all.push(...page);
    const total = data.count ?? all.length;
    if (skip === 0) console.log(`cda-fetch: ${total} ${config.CS_CONTENT_TYPE} entries in ${config.CS_ENVIRONMENT}`);
    if (all.length >= total || page.length < PAGE_SIZE) break;
    skip += PAGE_SIZE;
    console.log(`cda-fetch: fetched ${all.length}/${total} — next page (skip=${skip})`);
  }
  console.log(`cda-fetch: done — ${all.length} entries`);
  return all;
}

export async function loadOrFetchEntries(
  config: DeliveryConfig,
  opts: { refresh?: boolean } = {},
): Promise<CdaEntry[]> {
  if (!opts.refresh && fs.existsSync(CACHE_PATH)) {
    try {
      const cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) as CacheShape;
      if (Array.isArray(cache.entries) && cache.entries.length > 0) {
        console.log(`cda-fetch: using cache (${cache.entries.length} entries from ${cache.fetchedAt}). Use --refresh to re-fetch.`);
        return cache.entries;
      }
    } catch {
      console.warn("cda-fetch: cache unreadable, re-fetching");
    }
  }
  const entries = await fetchAllEntries(config);
  const cache: CacheShape = {
    fetchedAt: new Date().toISOString(),
    contentType: config.CS_CONTENT_TYPE,
    environment: config.CS_ENVIRONMENT,
    count: entries.length,
    entries,
  };
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), "utf8");
  console.log(`cda-fetch: cached ${entries.length} entries to ${path.relative(process.cwd(), CACHE_PATH)}`);
  return entries;
}

/**
 * Ordered [{heading, content}] from the article_content modular blocks.
 * This is the authoritative source for both body text and images.
 */
export function extractSections(entry: { article_content?: unknown }): ArticleSection[] {
  const blocks = entry.article_content;
  if (!Array.isArray(blocks)) return [];
  const sections: ArticleSection[] = [];
  for (const b of blocks) {
    const sec = (b as { article_section?: { heading?: unknown; content?: unknown } })?.article_section;
    if (!sec) continue;
    sections.push({
      heading: typeof sec.heading === "string" ? sec.heading : "",
      content: typeof sec.content === "string" ? sec.content : "",
    });
  }
  return sections;
}

// Recursively find the first string value containing an <img tag — a fallback
// for entries whose HTML lives outside article_content.
function findHtmlWithImg(value: unknown): string | null {
  if (typeof value === "string") return /<img[\s>]/i.test(value) ? value : null;
  if (Array.isArray(value)) {
    for (const v of value) {
      const found = findHtmlWithImg(v);
      if (found) return found;
    }
    return null;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value)) {
      const found = findHtmlWithImg(v);
      if (found) return found;
    }
  }
  return null;
}

export interface EntryHtml {
  html: string;
  fieldPath: "article_content" | "fallback" | "none";
  imgCount: number;
}

const IMG_COUNT_RE = /<img[\s>]/gi;

/**
 * The HTML used to drive image injection: the concatenated article_section
 * content, in order. Falls back to a deep search for any <img>-bearing string
 * if article_content has no images.
 */
export function extractEntryHtml(entry: CdaEntry): EntryHtml {
  const sections = extractSections(entry);
  const joined = sections.map((s) => s.content).join("\n");
  const imgCount = (joined.match(IMG_COUNT_RE) ?? []).length;
  if (imgCount > 0) return { html: joined, fieldPath: "article_content", imgCount };

  const fallback = findHtmlWithImg(entry);
  if (fallback) return { html: fallback, fieldPath: "fallback", imgCount: (fallback.match(IMG_COUNT_RE) ?? []).length };

  // No images anywhere; still return article_content html (may be empty).
  return { html: joined, fieldPath: joined ? "article_content" : "none", imgCount: 0 };
}
