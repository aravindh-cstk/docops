/**
 * Bundles a promoted docs_article entry and (if linked) its product_navigation
 * entry into a Contentstack Release named after the originating PR, so the
 * still-manual staging -> production step can deploy one Release instead of
 * hunting down entries individually.
 */

import { ProdPromoteClient } from "./prod-promote-client.js";
import { getPullRequestTitle } from "./github-api.js";

export interface ReleaseItem {
  uid: string;
  contentTypeUid: string;
}

/** Reads the `pr-<number>` tag written at creation time (see git-to-sandbox-sync.ts). */
export function extractPrNumberFromTags(tags: unknown): number | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string") {
      const match = tag.match(/^pr-(\d+)$/);
      if (match) return Number(match[1]);
    }
  }
  return null;
}

/**
 * Finds or creates a Release titled "PR #<number>" and adds every item to it
 * marked for the publish action. Multiple entries from the same PR can be
 * promoted in the same run (e.g. two docs changed in one PR); reusing the
 * existing Release instead of always creating one is what lets every entry
 * land in the same bundle instead of only the first entry processed winning
 * the name and every later one silently failing to create its own. Returns
 * null without creating anything if there is nothing to bundle, an empty
 * Release is not useful to anyone reviewing the promotion.
 */
export async function createReleaseForPromotion(
  client: ProdPromoteClient,
  prNumber: number,
  items: ReleaseItem[],
): Promise<{ uid: string; name: string } | null> {
  if (items.length === 0) return null;

  const releaseName = `PR #${prNumber}`;
  const existingRelease = await client.findReleaseByName(releaseName);

  let release: { uid: string; name: string };
  if (existingRelease) {
    release = existingRelease;
  } else {
    const prTitle = await getPullRequestTitle(prNumber).catch(() => null);
    const description = `Docs update from PR #${prNumber}${prTitle ? `: ${prTitle}` : ""}`;
    release = await client.createRelease(releaseName, description);
  }

  const versionedItems = [];
  for (const item of items) {
    const entry = await client.getEntryOfType(item.contentTypeUid, item.uid);
    const version = typeof entry?._version === "number" ? entry._version : 1;
    versionedItems.push({ uid: item.uid, contentTypeUid: item.contentTypeUid, version });
  }

  await client.addItemsToRelease(release.uid, versionedItems);
  return release;
}
