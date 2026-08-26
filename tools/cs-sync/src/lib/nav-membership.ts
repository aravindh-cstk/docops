/**
 * "Is this entry in the left navigation, and where?"
 *
 * The Prod → GitHub sync only opens PRs for pages a reader can actually reach.
 * An entry can be published to Production and still be invisible: 58 such
 * orphans exist in the current stack. Publishing alone is therefore not
 * evidence that a page is real content, so this module supplies the second half
 * of the test, and the folder chain that answers "where should the file live?"
 * for a page created directly in Prod.
 *
 * Only the three structural content types are fetched, not docs_article, which
 * is what keeps this affordable on a 5-minute cron. nav-tree.ts does the same
 * walk but also resolves and reports on every leaf's content, so it stays a
 * separate (slower, richer) script for offline auditing. Both share the chain
 * and slug semantics in nav-shared.ts, so a path derived here is byte-identical
 * to one nav-apply.ts would have written.
 *
 * Detection is layered, strongest signal first:
 *
 *   1. Entry reference — the uid appears in product_navigation.nav_section[].links[]
 *      or links_2026.nested_links[]. The normal case.
 *   2. Url slug — a childless links_2026 node carrying a url. Not an edge case:
 *      all 54 Marketplace app guides and ~60 other leaves are linked only this
 *      way, and a walk that ignored urls would silently exclude every one.
 *
 * Breadcrumbs and title markers are deliberately NOT admission signals. They
 * say which product owns an entry, not whether it is in the nav, so they are
 * used only to cross-check the product (see crossCheckProduct below).
 */

import https from "node:https";
import {
  DEPRECATED_UIDS,
  EXCLUDED_CHAINS,
  LEAF_CONTENT_TYPES,
  LEFT_NAV_UID,
  NAV_STRUCTURE_CONTENT_TYPES,
  isExternal,
  nestedLinks,
  normalizeUrl,
  slugify,
  type Entry,
} from "./nav-shared.js";

export interface NavPosition {
  /** Slugified folder chain below cs-docs/, product slug first. */
  chain: string[];
  /** How the nav reaches this entry. */
  via: "reference" | "url";
}

export interface NavMembership {
  /** entry uid -> its nav position. First position wins when an entry is listed twice. */
  byEntryUid: Map<string, NavPosition>;
  /** normalized nav url -> position, for nodes that link by url instead of by reference. */
  byUrl: Map<string, NavPosition>;
  /** Total structural nodes walked. The delete guard's sanity signal. */
  navNodeCount: number;
  /** Problems worth logging but not worth failing the run over. */
  warnings: string[];
}

/**
 * Below this many structural nodes, a walk is treated as failed rather than as
 * "the nav is nearly empty". The live nav has ~1700 leaves across 13 products,
 * so anything this low means a truncated fetch or a token that lost read scope.
 * Without this floor, one bad response would make every file on disk look
 * de-navved and the delete pass would try to remove the entire docs tree.
 */
export const MIN_EXPECTED_NAV_NODES = 200;

const HOST = "api.contentstack.io";

function get(apiKey: string, token: string, path: string, retriesLeft = 4): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: HOST,
        port: 443,
        path,
        method: "GET",
        headers: { "Content-Type": "application/json", api_key: apiKey, authorization: token },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const status = res.statusCode ?? 0;
          if ((status === 429 || status >= 500) && retriesLeft > 0) {
            setTimeout(
              () => get(apiKey, token, path, retriesLeft - 1).then(resolve, reject),
              1500 * (5 - retriesLeft),
            );
            return;
          }
          if (status >= 400) {
            reject(new Error(`GET ${path} failed (${status}): ${data}`));
            return;
          }
          resolve(data);
        });
      },
    );
    req.on("error", (err) => {
      if (retriesLeft > 0) {
        setTimeout(() => get(apiKey, token, path, retriesLeft - 1).then(resolve, reject), 1500);
        return;
      }
      reject(err);
    });
    req.end();
  });
}

async function fetchAll(apiKey: string, token: string, contentType: string): Promise<Map<string, Entry>> {
  const out = new Map<string, Entry>();
  let skip = 0;
  for (;;) {
    const query = new URLSearchParams({
      locale: "en-us",
      limit: "100",
      skip: String(skip),
      include_count: "true",
    });
    const body = await get(apiKey, token, `/v3/content_types/${contentType}/entries?${query}`);
    const data = JSON.parse(body) as { entries?: Entry[]; count?: number };
    const entries = Array.isArray(data.entries) ? data.entries : [];
    for (const entry of entries) out.set(entry.uid, entry);
    const total = typeof data.count === "number" ? data.count : out.size;
    skip += entries.length;
    if (entries.length === 0 || out.size >= total) break;
  }
  return out;
}

/**
 * Walk the Production left navigation and record where each entry sits.
 *
 * Mirrors nav-tree.ts's walk() exactly on the parts that decide a chain:
 * blank nav_section headers put their links directly under the product folder,
 * a links_2026 node with both a url and children is a folder rather than a
 * leaf, EXCLUDED_CHAINS are skipped, DEPRECATED_UIDS are skipped, and cycles
 * stop at the repeated node.
 */
export async function buildNavMembership(apiKey: string, token: string): Promise<NavMembership> {
  const store = new Map<string, Map<string, Entry>>();
  for (const contentType of NAV_STRUCTURE_CONTENT_TYPES) {
    store.set(contentType, await fetchAll(apiKey, token, contentType));
  }

  const byEntryUid = new Map<string, NavPosition>();
  const byUrl = new Map<string, NavPosition>();
  const warnings: string[] = [];
  let navNodeCount = 0;

  const root = store.get("left_navigation_2026")!.get(LEFT_NAV_UID);
  if (!root) {
    throw new Error(
      `left_navigation_2026/${LEFT_NAV_UID} not found. Without the nav root there is no way to ` +
        `tell a real page from an orphan, so refusing to continue.`,
    );
  }

  function lookup(contentType: string, uid: string): Entry | undefined {
    return store.get(contentType)?.get(uid);
  }

  /** Record a position, keeping the first one seen. 100 entries sit in two places. */
  function record(map: Map<string, NavPosition>, key: string, position: NavPosition): void {
    if (!map.has(key)) map.set(key, position);
  }

  function walk(contentType: string, uid: string, chain: string[], seen: ReadonlySet<string>): void {
    navNodeCount++;

    if (DEPRECATED_UIDS.has(uid)) return;

    // A leaf content type is reached by reference. Its own uid is the answer,
    // and links_2026 is never a leaf content type so this cannot be a stub.
    if (LEAF_CONTENT_TYPES.has(contentType)) {
      record(byEntryUid, uid, { chain, via: "reference" });
      return;
    }

    const entry = lookup(contentType, uid);
    if (!entry) {
      // Structural node the nav points at but the stack does not hold. Reported
      // rather than thrown: one broken nav reference must not block every other
      // page's PR.
      warnings.push(`${contentType}/${uid} referenced by the nav at ${chain.join("/") || "(root)"} but missing`);
      return;
    }

    if (seen.has(uid)) return;
    const nextSeen = new Set(seen).add(uid);

    if (contentType !== "links_2026") {
      warnings.push(`${contentType}/${uid} appeared mid-tree at ${chain.join("/")} and was not traversed`);
      return;
    }

    const children = nestedLinks(entry);

    // Childless node carrying a url: this is detection signal 2. The article
    // itself lives in the stack under that url, the nav just did not reference
    // it. An #anchor points at a section of a page rather than the page, so it
    // is not treated as that page's position.
    if (children.length === 0) {
      const rawUrl = String(entry.url ?? "").trim();
      if (!rawUrl || isExternal(rawUrl) || rawUrl.includes("#")) return;
      const key = normalizeUrl(rawUrl);
      if (key) record(byUrl, key, { chain, via: "url" });
      return;
    }

    const title = String(entry.title ?? "untitled");
    const nextChain = [...chain, slugify(title) || "untitled"];
    if (EXCLUDED_CHAINS.has(nextChain.join("/"))) return;

    for (const child of children) {
      walk(child._content_type_uid, child.uid, nextChain, nextSeen);
    }
  }

  const navigation: Array<{ uid: string; _content_type_uid: string }> =
    (root.product_dropdown as { navigation?: Array<{ uid: string; _content_type_uid: string }> })
      ?.navigation ?? [];

  for (const ref of navigation) {
    const product = lookup(ref._content_type_uid, ref.uid);
    if (!product) {
      warnings.push(`product_navigation/${ref.uid} missing from the stack`);
      continue;
    }
    navNodeCount++;

    const productTitle = String(product.title ?? "untitled");
    const productSlug = slugify(productTitle) || "untitled";

    const sections = Array.isArray(product.nav_section)
      ? (product.nav_section as Array<{ header?: unknown; links?: Array<{ uid: string; _content_type_uid: string }> }>)
      : [];

    for (const section of sections) {
      const header = String(section?.header ?? "").trim();
      const links = Array.isArray(section?.links) ? section.links : [];
      if (links.length === 0) continue;

      // A blank header gives no folder name, so its items sit directly under
      // the product folder. Same rule nav-apply.ts writes them by.
      const chain = header ? [productSlug, slugify(header) || "untitled"] : [productSlug];
      if (EXCLUDED_CHAINS.has(chain.join("/"))) continue;

      for (const link of links) {
        walk(link._content_type_uid, link.uid, chain, new Set([ref.uid]));
      }
    }
  }

  return { byEntryUid, byUrl, navNodeCount, warnings };
}

/**
 * The entry's nav position, or null when the nav does not reach it.
 *
 * Reference match first, url match second, matching the priority in this
 * module's header. `normalizeUrl` is used on both sides so a nav url written
 * absolutely with a /docs prefix still matches an entry's relative url.
 */
export function findNavPosition(
  membership: NavMembership,
  entry: { uid: string; url?: string | null },
): NavPosition | null {
  const byRef = membership.byEntryUid.get(entry.uid);
  if (byRef) return byRef;

  const key = normalizeUrl(entry.url);
  if (!key) return null;
  return membership.byUrl.get(key) ?? null;
}

/**
 * Compare the product the nav puts an entry under against the product its
 * breadcrumb or title marker claims, and return a warning when they disagree.
 *
 * Never rejects the entry. The nav is what readers navigate, so it wins. A
 * mismatch usually means a page was moved in the nav without its breadcrumb
 * being updated, which is worth surfacing on the PR but not worth blocking.
 */
export function crossCheckProduct(
  position: NavPosition,
  claimedProductSlug: string | null,
): string | null {
  if (!claimedProductSlug) return null;
  const navProduct = position.chain[0];
  if (!navProduct || navProduct === claimedProductSlug) return null;
  return `nav places this entry under "${navProduct}" but its breadcrumb/title claims "${claimedProductSlug}"`;
}
