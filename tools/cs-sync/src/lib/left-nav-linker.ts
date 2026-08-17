/**
 * Links a brand-new docs_article entry into the left nav after it is
 * promoted to Prod: Left Nav 2026 -> the right product_navigation entry ->
 * the right nav_section block -> (for products with deeper nesting, a chain
 * of links_2026 entries) -> append a reference to the new entry.
 *
 * Three nav shapes are handled, all confirmed against the live Prod nav
 * snapshot in .nav-tree.json (1694 leaves across all 13 products):
 *  - Flat (Assets): nav_section.links[] holds docs_article references
 *    directly. Chain length 1.
 *  - Nested (Headless CMS, Agent OS, Marketplace, ...): nav_section.links[]
 *    holds links_2026 entries, each with its own nested_links[] that either
 *    holds more links_2026 entries or the docs_article references, to depth
 *    5 in practice and arbitrary depth here. Chain length 2+, one links_2026
 *    level created/descended per remaining chain segment.
 *  - Top level (Launch, Analytics): the article sits directly under the
 *    product in a nav_section with a blank header. Signalled by the
 *    nav-toplevel tag rather than a nav-subsection-* chain.
 *
 * All 13 products are in scope. The product_navigation uid comes from
 * product-registry.ts, which derives every uid from the live
 * left_navigation_2026 entry, so there is one source of truth rather than a
 * hardcoded subset maintained here.
 */

import { ProdPromoteClient } from "./prod-promote-client.js";
import type { ContentstackEntry } from "./entry-content.js";
import { resolveProduct } from "./product-registry.js";
import {
  resolveProductSlugFromBreadcrumb,
  resolveProductSlugFromTitle,
} from "./content-type-mappings/docs-article.js";

interface LinkRef {
  uid: string;
  _content_type_uid: string;
}

interface NavSectionBlock {
  header: string;
  links: LinkRef[];
  _metadata?: { uid: string };
}

export interface TouchedEntry {
  uid: string;
  contentTypeUid: string;
}

export interface CreatedNode {
  uid: string;
  title: string;
}

export interface LinkResult {
  linked: boolean;
  /** product_navigation uid this entry was linked under, absent when not linked. */
  navUid?: string;
  /** cs-docs folder slug the entry resolved to, absent when resolution failed. */
  productSlug?: string;
  /**
   * Every entry this call created or modified, for the caller to publish and
   * bundle into the Release. Includes the product_navigation entry and each
   * links_2026 node along the chain. Excludes the docs_article itself, which
   * the caller already has. Empty when nothing was linked.
   */
  touched: TouchedEntry[];
  /**
   * The subset of `touched` that did not exist before this call, plus a
   * pseudo-entry for a newly created nav_section block (which lives on
   * product_navigation rather than having its own uid). Non-empty means this
   * promotion changes nav structure, not just nav content.
   */
  createdNodes: CreatedNode[];
  sectionCreated?: boolean;
  reason?: string;
}

function emptyResult(reason: string): LinkResult {
  return { linked: false, touched: [], createdNodes: [], reason };
}

/**
 * Character-for-character the same as slugify() in nav-tree.ts, kept separate
 * so the promotion runtime does not import that script (it runs dotenv at
 * module load). nav-link-audit.ts imports this one rather than nav-tree's, so
 * the audit predicts what the linker will actually do. left-nav-linker.test.ts
 * asserts the two stay in agreement.
 */
export function slugifyHeader(header: string): string {
  return header
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Reads the `nav-subsection-<chain>` tag written at creation time (see
 * git-to-sandbox-sync.ts). Chain segments are folder names joined with "/",
 * e.g. "introduction/overview" for a doc nested two levels under its product
 * folder. A single-segment chain ("overview") matches Assets' flat shape.
 */
export function extractNavSubsectionChainFromTags(tags: unknown): string[] | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string" && tag.startsWith("nav-subsection-")) {
      const chain = tag.slice("nav-subsection-".length).split("/").filter(Boolean);
      return chain.length > 0 ? chain : null;
    }
  }
  return null;
}

/**
 * True when the entry carries the `nav-toplevel` tag, meaning its source file
 * sat directly in the product folder with no subfolder to derive a section
 * from. Such articles belong in the product's blank-header nav_section.
 */
export function hasNavToplevelTag(tags: unknown): boolean {
  return Array.isArray(tags) && tags.some((tag) => tag === "nav-toplevel");
}

/** Reads the `product-<slug>` tag written at creation time (see git-to-sandbox-sync.ts). */
export function extractProductSlugFromTags(tags: unknown): string | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string" && tag.startsWith("product-")) {
      const slug = tag.slice("product-".length);
      if (slug) return slug;
    }
  }
  return null;
}

export interface ProductResolution {
  slug: string;
  /** Which signal resolved it, for run logs and the audit script. */
  via: "breadcrumb" | "tag" | "title";
}

/**
 * Resolves the cs-docs product folder a promoted entry belongs to, in
 * descending order of reliability. Deliberately never falls back to the
 * entry's url: lytics-cdp articles carry /lytics/ urls and
 * developer-resources articles carry other products' url prefixes, so a
 * url-derived product is wrong for those two by construction.
 */
export function resolveProductSlug(
  sandboxEntry: ContentstackEntry | undefined,
  prodEntry: ContentstackEntry,
): ProductResolution | null {
  const breadcrumbSlug =
    resolveProductSlugFromBreadcrumb(sandboxEntry?.breadcrumb) ??
    resolveProductSlugFromBreadcrumb(prodEntry.breadcrumb);
  if (breadcrumbSlug) return { slug: breadcrumbSlug, via: "breadcrumb" };

  const tagSlug =
    extractProductSlugFromTags(sandboxEntry?.tags) ?? extractProductSlugFromTags(prodEntry.tags);
  if (tagSlug && resolveProduct(tagSlug)) return { slug: tagSlug, via: "tag" };

  const titleSlug =
    resolveProductSlugFromTitle(sandboxEntry?.title) ?? resolveProductSlugFromTitle(prodEntry.title);
  if (titleSlug) return { slug: titleSlug, via: "title" };

  return null;
}

/** Where a links[] array currently lives, and how to persist a change to it. */
interface LinksContainer {
  links: LinkRef[];
  save: (updatedLinks: LinkRef[]) => Promise<void>;
}

interface DescendResult {
  touched: TouchedEntry[];
  createdNodes: CreatedNode[];
}

/**
 * Descends the remaining chain segments through links_2026 entries,
 * creating any that don't exist yet, then appends newRef into the leaf
 * container's links array. Reports every links_2026 entry it created or
 * modified so the caller can publish and release them, a node left
 * unpublished breaks the nav path to the new article even though the
 * article itself is live.
 */
async function descendAndLink(
  client: ProdPromoteClient,
  container: LinksContainer,
  remainingChain: string[],
  newRef: LinkRef,
): Promise<DescendResult> {
  if (remainingChain.length === 0) {
    const alreadyLinked = container.links.some((l) => l.uid === newRef.uid);
    if (!alreadyLinked) {
      await container.save([...container.links, newRef]);
    }
    return { touched: [], createdNodes: [] };
  }

  const [slug, ...rest] = remainingChain;

  let matchUid: string | null = null;
  for (const link of container.links) {
    if (link._content_type_uid !== "links_2026") continue;
    const child = await client.getEntryOfType("links_2026", link.uid);
    if (child && slugifyHeader(String(child.title ?? "")) === slug) {
      matchUid = link.uid;
      break;
    }
  }

  const createdNodes: CreatedNode[] = [];
  let childEntry: ContentstackEntry;
  if (matchUid) {
    const existing = await client.getEntryOfType("links_2026", matchUid);
    if (!existing) throw new Error(`links_2026 entry ${matchUid} disappeared between lookup and fetch`);
    childEntry = existing;
  } else {
    const title = titleCaseSlug(slug!);
    childEntry = await client.createEntryOfType("links_2026", {
      title,
      url: "",
      nested_links: [],
    });
    await container.save([...container.links, { uid: childEntry.uid, _content_type_uid: "links_2026" }]);
    createdNodes.push({ uid: childEntry.uid, title });
  }

  // Touched whether created or descended: descending still rewrites this
  // node's nested_links below, and its published version goes stale until it
  // is republished.
  const touched: TouchedEntry[] = [{ uid: childEntry.uid, contentTypeUid: "links_2026" }];

  const childContainer: LinksContainer = {
    links: Array.isArray(childEntry.nested_links) ? (childEntry.nested_links as LinkRef[]) : [],
    save: async (updated) => {
      await client.updateEntryOfType("links_2026", childEntry.uid, { ...childEntry, nested_links: updated });
      // links_2026 entries carry their own publish_details, separate from
      // product_navigation, an update here isn't visible on Staging until
      // this entry itself is republished (confirmed live: creating a brand
      // new node left it unpublished, and editing an existing node's
      // nested_links left its published version stale).
      await client.publishEntryOfType("links_2026", childEntry.uid);
    },
  };

  const result = await descendAndLink(client, childContainer, rest, newRef);
  return {
    touched: [...touched, ...result.touched],
    createdNodes: [...createdNodes, ...result.createdNodes],
  };
}

/**
 * Links a newly promoted docs_article entry into the nav. Returns linked:
 * false with a reason (never throws) when the product cannot be resolved or
 * the entry has no placement tag from creation time, so an unlinkable entry
 * degrades to a logged warning rather than failing the promotion.
 */
export async function linkNewEntryIntoNav(
  client: ProdPromoteClient,
  sandboxEntry: ContentstackEntry | undefined,
  prodEntry: ContentstackEntry,
): Promise<LinkResult> {
  const resolution = resolveProductSlug(sandboxEntry, prodEntry);
  if (!resolution) {
    return emptyResult(
      "could not resolve the product from breadcrumb, product-* tag, or title marker",
    );
  }

  const product = resolveProduct(resolution.slug);
  if (!product) {
    return emptyResult(
      `"${resolution.slug}" (via ${resolution.via}) is not in product-registry.ts`,
    );
  }
  const navUid = product.navUid;

  // Top-level articles have no subsection chain, they belong in the product's
  // blank-header section. Everything else places by its nav-subsection-* chain.
  const isToplevel = hasNavToplevelTag(sandboxEntry?.tags) || hasNavToplevelTag(prodEntry.tags);
  const chain = extractNavSubsectionChainFromTags(sandboxEntry?.tags)
    ?? extractNavSubsectionChainFromTags(prodEntry.tags);
  if (!chain && !isToplevel) {
    return emptyResult("entry has no nav-subsection-* or nav-toplevel tag from creation time");
  }

  const navEntry = await client.getEntryOfType("product_navigation", navUid);
  if (!navEntry) {
    return emptyResult(`product_navigation entry ${navUid} not found`);
  }

  const sections: NavSectionBlock[] = Array.isArray(navEntry.nav_section)
    ? (navEntry.nav_section as NavSectionBlock[])
    : [];

  // A top-level article targets the blank-header section (Launch and Analytics
  // both have one live). Otherwise the first chain segment names the section.
  const sectionSlug = isToplevel ? "" : chain![0]!;
  const restChain = isToplevel ? [] : chain!.slice(1);

  let section = sections.find((s) => slugifyHeader(s.header ?? "") === sectionSlug);
  const createdNodes: CreatedNode[] = [];
  let sectionCreated = false;
  if (!section) {
    const header = isToplevel ? "" : titleCaseSlug(sectionSlug);
    section = { header, links: [] };
    sections.push(section);
    sectionCreated = true;
    createdNodes.push({ uid: navUid, title: `nav_section "${header}"` });
  }

  const newRef: LinkRef = { uid: prodEntry.uid, _content_type_uid: "docs_article" };

  // nav_section is a field on product_navigation itself, not a separate
  // entry, so persisting the top-level container means re-saving the whole
  // product_navigation entry with its updated nav_section array.
  const sectionContainer: LinksContainer = {
    links: section.links,
    save: async (updated) => {
      section!.links = updated;
      await client.updateEntryOfType("product_navigation", navUid, { ...navEntry, nav_section: sections });
    },
  };

  if (sectionCreated) {
    // Persist the new section block itself even if restChain is empty and
    // descendAndLink's own save call below will also fire, an extra no-op
    // write here is harmless and guarantees the block exists before we try
    // to append a links_2026 child under it.
    await client.updateEntryOfType("product_navigation", navUid, { ...navEntry, nav_section: sections });
  }

  const result = await descendAndLink(client, sectionContainer, restChain, newRef);

  await client.publishEntryOfType("product_navigation", navUid);

  return {
    linked: true,
    navUid,
    productSlug: resolution.slug,
    touched: [{ uid: navUid, contentTypeUid: "product_navigation" }, ...result.touched],
    createdNodes: [...createdNodes, ...result.createdNodes],
    sectionCreated,
  };
}
