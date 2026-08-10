/**
 * Links a brand-new docs_article entry into the left nav after it is
 * promoted to Prod: Left Nav 2026 -> the right product_navigation entry ->
 * the right nav_section block -> append a reference to the new entry.
 *
 * Only "assets" is verified this round (see fixtures/product_navigation.entry.template.json
 * and fixtures/left_navigation_2026.entry.template.json for the real schema this
 * was built against). Any other product returns linked: false rather than
 * guessing at an entry UID nobody has confirmed.
 */

import { ProdPromoteClient } from "./prod-promote-client.js";
import type { ContentstackEntry } from "./entry-content.js";

const PRODUCT_NAVIGATION_UID: Record<string, string> = {
  assets: "bltf1afc727b1dd9ea9",
};

interface NavSectionBlock {
  header: string;
  links: Array<{ uid: string; _content_type_uid: string }>;
  _metadata?: { uid: string };
}

export interface LinkResult {
  linked: boolean;
  sectionCreated?: boolean;
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

/** Reads the `nav-subsection-<slug>` tag written at creation time (see git-to-sandbox-sync.ts). */
export function extractNavSubsectionFromTags(tags: unknown): string | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string" && tag.startsWith("nav-subsection-")) {
      return tag.slice("nav-subsection-".length);
    }
  }
  return null;
}

function topLevelFolderFromUrl(url: string | undefined): string | null {
  if (!url) return null;
  const segments = url.split("/").filter(Boolean);
  return segments[0] ?? null;
}

/**
 * Links a newly promoted docs_article entry into the nav. No-op (linked:
 * false, with a reason) for anything outside the verified "assets" scope,
 * or when the create-time tag is missing, rather than guessing.
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

  const subsectionSlug = extractNavSubsectionFromTags(prodEntry.tags);
  if (!subsectionSlug) {
    return { linked: false, reason: "entry has no nav-subsection-* tag from creation time" };
  }

  const navEntry = await client.getEntryOfType("product_navigation", navUid);
  if (!navEntry) {
    return { linked: false, reason: `product_navigation entry ${navUid} not found` };
  }

  const sections: NavSectionBlock[] = Array.isArray(navEntry.nav_section)
    ? (navEntry.nav_section as NavSectionBlock[])
    : [];

  let section = sections.find((s) => slugifyHeader(s.header) === subsectionSlug);
  let sectionCreated = false;
  if (!section) {
    section = { header: titleCaseSlug(subsectionSlug), links: [] };
    sections.push(section);
    sectionCreated = true;
  }

  const alreadyLinked = section.links.some((link) => link.uid === prodEntry.uid);
  if (!alreadyLinked) {
    section.links = [...section.links, { uid: prodEntry.uid, _content_type_uid: "docs_article" }];
  }

  await client.updateEntryOfType("product_navigation", navUid, { ...navEntry, nav_section: sections });
  await client.publishEntryOfTypeToStaging("product_navigation", navUid);

  return { linked: true, sectionCreated };
}

export { PRODUCT_NAVIGATION_UID };
