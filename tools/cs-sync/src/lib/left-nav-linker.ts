/**
 * Links a brand-new docs_article entry into the left nav after it is
 * promoted to Prod: Left Nav 2026 -> the right product_navigation entry ->
 * the right nav_section block -> (for products with deeper nesting, a chain
 * of links_2026 entries) -> append a reference to the new entry.
 *
 * Two nav shapes are handled:
 *  - Flat (Assets): nav_section.links[] holds docs_article references
 *    directly. Chain length 1.
 *  - Nested (Headless CMS): nav_section.links[] holds links_2026 entries,
 *    each with its own nested_links[] that either holds more links_2026
 *    entries or the docs_article references, arbitrary depth. Chain length
 *    2+, one links_2026 level created/descended per remaining chain segment.
 *
 * Only "assets" and "headless-cms" are verified (see
 * fixtures/product_navigation.entry.template.json and
 * fixtures/left_navigation_2026.entry.template.json for the schema this was
 * built against). Any other product returns linked: false rather than
 * guessing at an entry UID nobody has confirmed.
 */

import { ProdPromoteClient } from "./prod-promote-client.js";
import type { ContentstackEntry } from "./entry-content.js";

const PRODUCT_NAVIGATION_UID: Record<string, string> = {
  assets: "bltf1afc727b1dd9ea9",
  "headless-cms": "blt61f927e340fc1992",
};

interface LinkRef {
  uid: string;
  _content_type_uid: string;
}

interface NavSectionBlock {
  header: string;
  links: LinkRef[];
  _metadata?: { uid: string };
}

export interface LinkResult {
  linked: boolean;
  sectionCreated?: boolean;
  nodesCreated?: number;
  reason?: string;
}

function slugifyHeader(header: string): string {
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

function topLevelFolderFromUrl(url: string | undefined): string | null {
  if (!url) return null;
  const segments = url.split("/").filter(Boolean);
  return segments[0] ?? null;
}

/** Where a links[] array currently lives, and how to persist a change to it. */
interface LinksContainer {
  links: LinkRef[];
  save: (updatedLinks: LinkRef[]) => Promise<void>;
}

/**
 * Descends the remaining chain segments through links_2026 entries,
 * creating any that don't exist yet, then appends newRef into the leaf
 * container's links array. Returns how many new links_2026 nodes were
 * created along the way (0 for the flat, single-segment case).
 */
async function descendAndLink(
  client: ProdPromoteClient,
  container: LinksContainer,
  remainingChain: string[],
  newRef: LinkRef,
): Promise<{ nodesCreated: number }> {
  if (remainingChain.length === 0) {
    const alreadyLinked = container.links.some((l) => l.uid === newRef.uid);
    if (!alreadyLinked) {
      await container.save([...container.links, newRef]);
    }
    return { nodesCreated: 0 };
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

  let nodesCreated = 0;
  let childEntry: ContentstackEntry;
  if (matchUid) {
    const existing = await client.getEntryOfType("links_2026", matchUid);
    if (!existing) throw new Error(`links_2026 entry ${matchUid} disappeared between lookup and fetch`);
    childEntry = existing;
  } else {
    childEntry = await client.createEntryOfType("links_2026", {
      title: titleCaseSlug(slug),
      url: "",
      nested_links: [],
    });
    await container.save([...container.links, { uid: childEntry.uid, _content_type_uid: "links_2026" }]);
    nodesCreated++;
  }

  const childContainer: LinksContainer = {
    links: Array.isArray(childEntry.nested_links) ? (childEntry.nested_links as LinkRef[]) : [],
    save: async (updated) => {
      await client.updateEntryOfType("links_2026", childEntry.uid, { ...childEntry, nested_links: updated });
      // links_2026 entries carry their own publish_details, separate from
      // product_navigation, an update here isn't visible on Staging until
      // this entry itself is republished (confirmed live: creating a brand
      // new node left it unpublished, and editing an existing node's
      // nested_links left its published version stale).
      await client.publishEntryOfTypeToStaging("links_2026", childEntry.uid);
    },
  };

  const result = await descendAndLink(client, childContainer, rest, newRef);
  return { nodesCreated: nodesCreated + result.nodesCreated };
}

/**
 * Links a newly promoted docs_article entry into the nav. No-op (linked:
 * false, with a reason) for anything outside the verified scope, or when
 * the create-time tag is missing, rather than guessing.
 */
export async function linkNewEntryIntoNav(
  client: ProdPromoteClient,
  prodEntry: ContentstackEntry,
): Promise<LinkResult> {
  const topLevelFolder = topLevelFolderFromUrl(prodEntry.url as string | undefined);
  if (!topLevelFolder) {
    return { linked: false, reason: "prod entry has no url field to derive its product from" };
  }

  const navUid = PRODUCT_NAVIGATION_UID[topLevelFolder];
  if (!navUid) {
    return { linked: false, reason: `no verified product_navigation mapping for "${topLevelFolder}"` };
  }

  const chain = extractNavSubsectionChainFromTags(prodEntry.tags);
  if (!chain) {
    return { linked: false, reason: "entry has no nav-subsection-* tag from creation time" };
  }

  const navEntry = await client.getEntryOfType("product_navigation", navUid);
  if (!navEntry) {
    return { linked: false, reason: `product_navigation entry ${navUid} not found` };
  }

  const sections: NavSectionBlock[] = Array.isArray(navEntry.nav_section)
    ? (navEntry.nav_section as NavSectionBlock[])
    : [];

  const [sectionSlug, ...restChain] = chain;
  let section = sections.find((s) => slugifyHeader(s.header) === sectionSlug);
  let sectionCreated = false;
  if (!section) {
    section = { header: titleCaseSlug(sectionSlug!), links: [] };
    sections.push(section);
    sectionCreated = true;
  }

  const newRef: LinkRef = { uid: prodEntry.uid, _content_type_uid: "docs_article" };
  let nodesCreated = 0;

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
  nodesCreated = result.nodesCreated;

  await client.publishEntryOfTypeToStaging("product_navigation", navUid);

  return { linked: true, sectionCreated, nodesCreated };
}

export { PRODUCT_NAVIGATION_UID };
