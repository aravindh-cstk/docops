#!/usr/bin/env node
/**
 * Phase 1 of the cs-docs nav rebuild: crawl the production left navigation and
 * emit the authoritative folder tree as .nav-tree.json. Read-only, never
 * touches cs-docs/.
 *
 * The tree hangs off a single entry, left_navigation_2026/blt92f94484c120f375.
 * Anything reachable from it is production nav, anything else is staging,
 * draft, or dead. See the plan at
 * .claude/plans/now-i-want-you-unified-eclipse.md for the full rationale.
 *
 * Two things here differ from backfill-product-docs.ts and are the reason this
 * exists as a separate walker:
 *
 *   1. Its walk() does `if (child.url) continue`, dropping any links_2026 that
 *      carries a url along with everything beneath it. That single line hides
 *      all 54 Marketplace app installation guides, because the Marketplace nav
 *      links its apps by url rather than by entry reference.
 *   2. Reachability here is reference OR url match. An article the nav points
 *      at by url is nav content and gets written normally.
 *
 * Usage: npx tsx src/nav-tree.ts [--out <path>]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");

// The backfill scripts read CONTENTSTACK_DOCS_STACK_* from the repo-root .env
// rather than tools/cs-sync/.env (which holds the delivery-token pair). Load
// both so this runs the same way whether or not the shell already exported them.
config({ path: path.join(repoRoot, ".env") });
config({ path: path.join(scriptDir, "..", ".env") });

const API_KEY = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
const TOKEN = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!API_KEY || !TOKEN) {
  throw new Error(
    "CONTENTSTACK_DOCS_STACK_API_KEY / CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN must be set (repo-root .env)",
  );
}

const HOST = "https://api.contentstack.io/v3";
/** Confirmed live via GET /v3/environments against this stack, name "production". */
export const PRODUCTION_ENV_UID = "bltfe8376c13fe85b9c";
export const LEFT_NAV_UID = "blt92f94484c120f375";
export const DOCS_BASE_URL = "https://www.contentstack.com/docs";

/** Every content type that can appear anywhere in the nav tree. */
const NAV_CONTENT_TYPES = [
  "left_navigation_2026",
  "product_navigation",
  "links_2026",
  "docs_article",
  "product_faqs_2026",
  "sample_apps_demo_page",
  "region_dropdown",
] as const;
type NavContentType = (typeof NAV_CONTENT_TYPES)[number];

/** Content types that terminate a branch. Everything else is a folder. */
const LEAF_CONTENT_TYPES = new Set([
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
const EXCLUDED_CHAINS = new Set(["headless-cms/developer-tools-delivery/cli"]);

/**
 * Entries excluded even though they are published, because they are the losing
 * half of a url collision and the owner confirmed them deprecated. The nav
 * references the surviving twin. Recorded in cms-issues.csv rather than
 * dropped silently.
 */
const DEPRECATED_UIDS = new Map<string, string>([
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

/** Matches slugifyHeader in backfill-product-docs.ts. Note "&" is dropped, not
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

async function fetchAll(contentType: NavContentType): Promise<Map<string, Entry>> {
  const out = new Map<string, Entry>();
  let skip = 0;
  for (;;) {
    const query = new URLSearchParams({
      locale: "en-us",
      limit: "100",
      skip: String(skip),
      include_count: "true",
      include_publish_details: "true",
    });
    const data = await request(`/content_types/${contentType}/entries?${query}`);
    const entries: Entry[] = Array.isArray(data.entries) ? data.entries : [];
    for (const entry of entries) out.set(entry.uid, entry);
    const total = typeof data.count === "number" ? data.count : out.size;
    skip += entries.length;
    process.stderr.write(`  ${contentType}: ${out.size}/${total}\n`);
    if (entries.length === 0 || out.size >= total) break;
  }
  return out;
}

async function request(reqPath: string, retriesLeft = 4): Promise<any> {
  const res = await fetch(`${HOST}${reqPath}`, {
    headers: { api_key: API_KEY!, authorization: TOKEN! },
  });
  if ((res.status === 429 || res.status >= 500) && retriesLeft > 0) {
    await new Promise((r) => setTimeout(r, 1500 * (5 - retriesLeft)));
    return request(reqPath, retriesLeft - 1);
  }
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status}): ${await res.text()}`);
  return res.json();
}

function nestedLinks(entry: Entry): Array<{ uid: string; _content_type_uid: string }> {
  const raw = entry.nested_links;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw as any];
}

export async function buildNavTree(): Promise<NavTree> {
  process.stderr.write("Fetching nav content types...\n");
  const store = new Map<NavContentType, Map<string, Entry>>();
  for (const contentType of NAV_CONTENT_TYPES) {
    store.set(contentType, await fetchAll(contentType));
  }

  const articles = store.get("docs_article")!;

  // url -> docs_article uids. Built once so a nav stub can be resolved to the
  // article it points at. Collisions are real and reported by nav-audit.
  const byUrl = new Map<string, string[]>();
  for (const [uid, entry] of articles) {
    const key = normalizeUrl(entry.url);
    if (!key) continue;
    const bucket = byUrl.get(key);
    if (bucket) bucket.push(uid);
    else byUrl.set(key, [uid]);
  }

  const leaves: NavLeaf[] = [];
  const issues: NavIssue[] = [];
  const referenced = new Set<string>();

  const root = store.get("left_navigation_2026")!.get(LEFT_NAV_UID);
  if (!root) throw new Error(`left_navigation_2026/${LEFT_NAV_UID} not found`);

  const navigation: Array<{ uid: string; _content_type_uid: string }> =
    (root.product_dropdown as any)?.navigation ?? [];
  const products: NavTree["products"] = [];

  function lookup(contentType: string, uid: string): Entry | undefined {
    return store.get(contentType as NavContentType)?.get(uid);
  }

  /**
   * Resolve a links_2026 node that has a url and no children. It is only a
   * "stub" in the sense that the nav did not reference an entry, the article
   * usually still lives in this stack under that url.
   */
  function resolveStub(node: Entry, chain: string[], chainTitles: string[]): NavLeaf {
    const rawUrl = String(node.url ?? "");
    const title = cleanTitle(node.title);
    const base: Omit<NavLeaf, "kind" | "entryUid" | "prodPublished"> = {
      chain,
      chainTitles,
      navUid: node.uid,
      contentType: "links_2026",
      title,
      url: rawUrl || null,
    };

    if (!rawUrl.trim()) {
      return { ...base, kind: "stub", entryUid: null, prodPublished: false, stubReason: "empty" };
    }
    if (isExternal(rawUrl)) {
      return { ...base, kind: "stub", entryUid: null, prodPublished: false, stubReason: "external" };
    }

    const key = normalizeUrl(rawUrl);
    const matches = (byUrl.get(key) ?? []).filter((uid) => !DEPRECATED_UIDS.has(uid));

    // An #anchor targets a section of a page, not the page. The page itself is
    // written wherever the nav references it properly, so keep this a pointer
    // and do not duplicate the whole article under a section's name.
    if (rawUrl.includes("#")) {
      return { ...base, kind: "stub", entryUid: matches[0] ?? null, prodPublished: false, stubReason: "anchor" };
    }
    if (matches.length === 0) {
      return { ...base, kind: "stub", entryUid: null, prodPublished: false, stubReason: "no_entry" };
    }

    // Prefer a prod-published match when the url is ambiguous.
    const chosen = matches.find((uid) => isPublishedToProd(articles.get(uid)!)) ?? matches[0]!;
    if (matches.length > 1) {
      issues.push({
        kind: "STUB_URL_AMBIGUOUS",
        uid: node.uid,
        chain: chain.join("/"),
        detail: `${key} matches ${matches.length} docs_article entries (${matches.join(", ")}), chose ${chosen}`,
      });
    }
    const entry = articles.get(chosen)!;
    referenced.add(chosen);
    return {
      ...base,
      kind: "article_via_url",
      entryUid: chosen,
      title: cleanTitle(entry.title) || title,
      url: entry.url ?? rawUrl,
      prodPublished: isPublishedToProd(entry),
    };
  }

  function walk(
    contentType: string,
    uid: string,
    chain: string[],
    chainTitles: string[],
    seen: ReadonlySet<string>,
  ): void {
    const entry = lookup(contentType, uid);
    if (!entry) {
      issues.push({
        kind: "MISSING_ENTRY",
        uid,
        chain: chain.join("/"),
        detail: `${contentType}/${uid} referenced by the nav but not present in the stack`,
      });
      return;
    }

    if (DEPRECATED_UIDS.has(uid)) {
      issues.push({
        kind: "DEPRECATED_EXCLUDED",
        uid,
        chain: chain.join("/"),
        detail: DEPRECATED_UIDS.get(uid)!,
      });
      return;
    }

    if (LEAF_CONTENT_TYPES.has(contentType)) {
      const kind: LeafKind =
        contentType === "docs_article"
          ? "article"
          : contentType === "product_faqs_2026"
            ? "faqs"
            : contentType === "sample_apps_demo_page"
              ? "sample_app"
              : "other";
      if (kind === "other") {
        issues.push({
          kind: "UNEXPECTED_LEAF_TYPE",
          uid,
          chain: chain.join("/"),
          detail: `${contentType} appears as a nav leaf and has no writer`,
        });
      }
      referenced.add(uid);
      leaves.push({
        kind,
        chain,
        chainTitles,
        navUid: uid,
        entryUid: uid,
        contentType,
        title: cleanTitle(entry.title),
        url: (entry.url as string) ?? null,
        prodPublished: isPublishedToProd(entry),
      });
      return;
    }

    if (seen.has(uid)) {
      issues.push({
        kind: "CYCLE",
        uid,
        chain: chain.join("/"),
        detail: `${contentType}/${uid} already on this branch, stopped to avoid infinite recursion`,
      });
      return;
    }
    const nextSeen = new Set(seen).add(uid);

    if (contentType === "links_2026") {
      const children = nestedLinks(entry);
      if (children.length === 0) {
        leaves.push(resolveStub(entry, chain, chainTitles));
        return;
      }
      // A node with both a url and children is a section landing page. Recurse
      // rather than skipping it, which is what the old backfill walk got wrong.
      if (String(entry.url ?? "").trim()) {
        issues.push({
          kind: "LINK_HAS_URL_AND_CHILDREN",
          uid,
          chain: chain.join("/"),
          detail: `"${entry.title}" carries url ${entry.url} and ${children.length} children, treated as a folder`,
        });
      }
      const title = String(entry.title ?? "untitled");
      const nextChain = [...chain, slugify(title) || "untitled"];
      if (EXCLUDED_CHAINS.has(nextChain.join("/"))) {
        issues.push({
          kind: "EXCLUDED_CHAIN",
          uid,
          chain: nextChain.join("/"),
          detail: `"${title}" deliberately not mirrored`,
        });
        return;
      }
      for (const child of children) {
        walk(child._content_type_uid, child.uid, nextChain, [...chainTitles, title], nextSeen);
      }
      return;
    }

    issues.push({
      kind: "UNEXPECTED_NODE_TYPE",
      uid,
      chain: chain.join("/"),
      detail: `${contentType} appeared mid-tree and was not traversed`,
    });
  }

  for (const ref of navigation) {
    const product = lookup(ref._content_type_uid, ref.uid);
    if (!product) {
      issues.push({ kind: "MISSING_ENTRY", uid: ref.uid, detail: `product_navigation/${ref.uid} missing` });
      continue;
    }
    const title = String(product.title ?? "untitled");
    const slug = slugify(title) || "untitled";
    products.push({ uid: ref.uid, title, slug });

    const sections: any[] = Array.isArray(product.nav_section) ? product.nav_section : [];
    for (const section of sections) {
      const header = String(section?.header ?? "").trim();
      const links: Array<{ uid: string; _content_type_uid: string }> = section?.links ?? [];

      // A blank header gives us no folder name. Per the plan its items go
      // directly under the product folder, and the gap is reported so it can
      // be filled in the CMS.
      if (!header) {
        issues.push({
          kind: "EMPTY_HEADER",
          uid: ref.uid,
          chain: slug,
          detail: `${title} has a nav_section with a blank header holding ${links.length} link(s)`,
        });
      }
      if (links.length === 0) {
        issues.push({
          kind: "EMPTY_SECTION",
          uid: ref.uid,
          chain: slug,
          detail: `${title} > "${header}" has no links`,
        });
        continue;
      }

      const chain = header ? [slug, slugify(header) || "untitled"] : [slug];
      const chainTitles = header ? [title, header] : [title];
      if (EXCLUDED_CHAINS.has(chain.join("/"))) {
        issues.push({ kind: "EXCLUDED_CHAIN", uid: ref.uid, chain: chain.join("/"), detail: `"${header}" not mirrored` });
        continue;
      }
      for (const link of links) {
        walk(link._content_type_uid, link.uid, chain, chainTitles, new Set([ref.uid]));
      }
    }
  }

  // Orphans are judged against reference AND url reachability, so an article
  // the nav points at by url is not an orphan.
  const orphans: NavTree["orphans"] = [];
  for (const [uid, entry] of articles) {
    if (referenced.has(uid)) continue;
    if (DEPRECATED_UIDS.has(uid)) continue;
    if (!isPublishedToProd(entry)) continue;
    const url = String(entry.url ?? "");
    orphans.push({
      uid,
      title: cleanTitle(entry.title),
      url,
      fullUrl: url.startsWith("/") ? `${DOCS_BASE_URL}${url}` : url,
    });
  }
  orphans.sort((a, b) => a.url.localeCompare(b.url));

  const entryPaths: Record<string, string[]> = {};
  for (const leaf of leaves) {
    if (!leaf.entryUid) continue;
    (entryPaths[leaf.entryUid] ??= []).push(leaf.chain.join("/"));
  }

  const byKind = new Map<LeafKind, number>();
  for (const leaf of leaves) byKind.set(leaf.kind, (byKind.get(leaf.kind) ?? 0) + 1);

  const stats: Record<string, number> = {
    products: products.length,
    leaves: leaves.length,
    uniqueEntries: Object.keys(entryPaths).length,
    duplicatedEntries: Object.values(entryPaths).filter((p) => p.length > 1).length,
    orphanPublished: orphans.length,
    issues: issues.length,
    maxDepth: leaves.reduce((max, l) => Math.max(max, l.chain.length), 0),
  };
  for (const [kind, count] of byKind) stats[`leaf_${kind}`] = count;

  return {
    generatedAt: new Date().toISOString(),
    leftNavUid: LEFT_NAV_UID,
    products,
    leaves,
    issues,
    entryPaths,
    orphans,
    stats,
  };
}

async function main() {
  const argv = process.argv.slice(2);
  let outPath = path.join(scriptDir, "..", ".nav-tree.json");
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) outPath = path.resolve(argv[++i]!);
  }

  const tree = await buildNavTree();
  fs.writeFileSync(outPath, JSON.stringify(tree, null, 1));

  console.log(`\nWrote ${path.relative(repoRoot, outPath)}`);
  console.log("\nStats:");
  for (const [key, value] of Object.entries(tree.stats)) console.log(`  ${key.padEnd(20)} ${value}`);

  const issueCounts = new Map<string, number>();
  for (const issue of tree.issues) issueCounts.set(issue.kind, (issueCounts.get(issue.kind) ?? 0) + 1);
  if (issueCounts.size) {
    console.log("\nIssues:");
    for (const [kind, count] of [...issueCounts].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${kind.padEnd(28)} ${count}`);
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
