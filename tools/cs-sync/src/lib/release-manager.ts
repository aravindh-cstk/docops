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
 * Creates a Release titled "PR #<number>" with a description naming the PR,
 * and adds every item to it marked for the publish action. Returns null
 * without creating anything if there is nothing to bundle, an empty Release
 * is not useful to anyone reviewing the promotion.
 */
export async function createReleaseForPromotion(
  client: ProdPromoteClient,
  prNumber: number,
  items: ReleaseItem[],
): Promise<{ uid: string; name: string } | null> {
  if (items.length === 0) return null;

  const prTitle = await getPullRequestTitle(prNumber).catch(() => null);
  const description = `Docs update from PR #${prNumber}${prTitle ? `: ${prTitle}` : ""}`;

  const release = await client.createRelease(`PR #${prNumber}`, description);

  const versionedItems = [];
  for (const item of items) {
    const entry = await client.getEntryOfType(item.contentTypeUid, item.uid);
    const version = typeof entry?._version === "number" ? entry._version : 1;
    versionedItems.push({ uid: item.uid, contentTypeUid: item.contentTypeUid, version });
  }

  await client.addItemsToRelease(release.uid, versionedItems);
  return release;
}
