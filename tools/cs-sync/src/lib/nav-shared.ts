/**
 * Pure helpers and types shared by everything that reads the cs-docs left
 * navigation.
 *
 * These all used to live in nav-tree.ts. They were moved here because that
 * module reads CONTENTSTACK_DOCS_STACK_* at import time and throws when they
 * are unset, so importing it just to reuse slugify() forced credentials on
 * scripts that never talk to the CMS. left-nav-linker.ts hand-duplicated
 * slugify for exactly that reason (see its comment above slugifyHeader) and a
 * test now exists solely to assert the two copies agree.
 *
 * nav-tree.ts re-exports everything here, so its existing importers
 * (nav-apply.ts, nav-audit.ts, test-left-nav-linker.ts) are unaffected.
 */

export const LEFT_NAV_UID = "blt92f94484c120f375";
export const DOCS_BASE_URL = "https://www.contentstack.com/docs";

/**
 * Fallback only. resolveEnvironment() in environment-index.ts looks the UID up
 * live by name; this value is what it falls back to when that lookup fails, and
 * it is what the nav snapshot in .nav-tree.json was generated against.
 * Confirmed via GET /v3/environments against the Prod CS Docs stack, name
 * "production".
 */
export const PRODUCTION_ENV_UID = "bltfe8376c13fe85b9c";

/** Every content type that can appear anywhere in the nav tree. */
export const NAV_CONTENT_TYPES = [
  "left_navigation_2026",
  "product_navigation",
  "links_2026",
  "docs_article",
  "product_faqs_2026",
  "sample_apps_demo_page",
  "region_dropdown",
] as const;
export type NavContentType = (typeof NAV_CONTENT_TYPES)[number];

/**
 * The subset of the above that describes nav structure rather than content.
 * The membership walk fetches only these three, which is what keeps it cheap
 * enough to run on a 5-minute cron.
 */
export const NAV_STRUCTURE_CONTENT_TYPES = [
  "left_navigation_2026",
  "product_navigation",
  "links_2026",
] as const;

/** Content types that terminate a branch. Everything else is a folder. */
export const LEAF_CONTENT_TYPES = new Set([
  "docs_article",
  "product_faqs_2026",
  "sample_apps_demo_page",
  "region_dropdown",
]);

/**
 * Nav positions we deliberately do not mirror, as slugified chains.
 *
 * "CLI" and "CLI Test" are sibling links_2026 nodes under Headless CMS >
 * Developer Tools & Delivery holding largely the same articles. Per the
 * product owner, CLI is being retired and CLI Test becomes the new CLI, so we
 * keep cli-test and drop cli. Revisit once that rename lands in the CMS.
 */
export const EXCLUDED_CHAINS = new Set(["headless-cms/developer-tools-delivery/cli"]);

/**
 * Entries excluded even though they are published, because they are the losing
 * half of a url collision and the owner confirmed them deprecated. The nav
 * references the surviving twin.
 */
export const DEPRECATED_UIDS = new Map<string, string>([
  ["blte5eb7e311544d564", "deprecated twin of bltcbcd566f268bd524 on /headless-cms/mark-a-task-as-complete"],
  ["bltc9df9a8a80ba104a", "deprecated twin of blt0d64aac827d54cc3 on /administration/supported-identity-providers"],
]);

export interface Entry {
  uid: string;
  title?: string;
  url?: string;
  publish_details?: Array<{ environment?: string; version?: number }>;
  [key: string]: unknown;
}

export type LeafKind =
  | "article" // a docs_article, reached by reference
  | "article_via_url" // a links_2026 stub whose url resolves to a docs_article
  | "stub" // a links_2026 stub with nowhere to resolve, becomes index.md
  | "faqs" // product_faqs_2026 container
  | "sample_app" // sample_apps_demo_page
  | "other"; // any other leaf content type, flagged for review

export interface NavLeaf {
  kind: LeafKind;
  /** Slugified folder chain below cs-docs/, product slug first. */
  chain: string[];
  /** Untouched titles for the same chain, for reporting. */
  chainTitles: string[];
  /** The nav node's own uid (the links_2026 uid for stub kinds). */
  navUid: string;
  /** The docs_article/faqs uid whose content we write, when there is one. */
  entryUid: string | null;
  contentType: string;
  title: string;
  url: string | null;
  prodPublished: boolean;
  /** For stub kinds, why it did not resolve. */
  stubReason?: "external" | "anchor" | "no_entry" | "empty";
}

export interface NavIssue {
  kind: string;
  detail: string;
  uid?: string;
  chain?: string;
}

export interface NavTree {
  generatedAt: string;
  leftNavUid: string;
  products: Array<{ uid: string; title: string; slug: string }>;
  leaves: NavLeaf[];
  issues: NavIssue[];
  /** uid -> every chain it was written to. Enables later edit propagation. */
  entryPaths: Record<string, string[]>;
  /** Prod-published docs_article the nav reaches neither by reference nor by url. */
  orphans: Array<{ uid: string; title: string; url: string; fullUrl: string }>;
  stats: Record<string, number>;
}

/** Matches slugifyHeader in left-nav-linker.ts. Note "&" is dropped, not
 *  converted to "and": "APIs & SDKs" becomes "apis-sdks". */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Reduce a nav url to something comparable with docs_article.url. Nav authors
 * write these by hand, so they arrive absolute, with a stray /docs/ prefix,
 * with trailing slashes, and with #anchors.
 */
export function normalizeUrl(raw: string | null | undefined): string {
  let url = (raw ?? "").trim();
  if (!url) return "";
  url = url.split("#")[0]!;
  url = url.replace(/^https?:\/\/(www\.)?contentstack\.com\/docs/i, "");
  if (url.startsWith("/docs/")) url = url.slice(5);
  url = url.replace(/\/+$/, "");
  return url;
}

export function isExternal(raw: string | null | undefined): boolean {
  const url = (raw ?? "").trim();
  return /^https?:\/\//i.test(url) && !/^https?:\/\/(www\.)?contentstack\.com\/docs/i.test(url);
}

export function isPublishedToProd(entry: Entry): boolean {
  const details = Array.isArray(entry.publish_details) ? entry.publish_details : [];
  return details.some((d) => d?.environment === PRODUCTION_ENV_UID);
}

/** Strip the "[Marker] - " prefix editors put in titles. */
export function cleanTitle(title: string | undefined): string {
  const value = String(title ?? "").trim();
  const match = value.match(/^\[(.+?)\]\s*-?\s*(.+)$/);
  return match ? match[2]!.trim() : value;
}

/**
 * The filename a nav leaf's url maps to.
 *
 * Drops the url's first segment (the product namespace, which the folder chain
 * already carries) and joins the rest with "-", so
 * /developers/sdks/content-delivery-sdk/php/reference becomes
 * sdks-content-delivery-sdk-php-reference.md rather than colliding on
 * reference.md.
 *
 * Both the bulk nav rebuild (nav-apply.ts) and the Prod → GitHub sync place new
 * files with this, so a page created directly in Prod lands at the same path
 * the rebuild would have chosen for it.
 */
export function articleFileName(url: string | null): string | null {
  const segments = (url ?? "").split("/").filter(Boolean);
  if (segments.length === 0) return null;
  const rest = segments.length > 1 ? segments.slice(1) : segments;
  return `${rest.join("-")}.md`;
}

/** The nested_links field, normalized to an array. */
export function nestedLinks(entry: Entry): Array<{ uid: string; _content_type_uid: string }> {
  const raw = entry.nested_links;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw as never];
}
