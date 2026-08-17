/**
 * Derives, from a cs-docs file path, the two things promotion needs in order
 * to place that file in the left nav: which product folder owns it, and which
 * subsection chain it sits under.
 *
 * These live here rather than in git-to-sandbox-sync.ts so that both the sync
 * (which stamps them as tags at creation time) and nav-link-audit.ts (which
 * replays them read-only over the whole tree) can use the same logic.
 * git-to-sandbox-sync.ts runs main() on import, so it cannot be imported for
 * its helpers.
 */

/**
 * "cs-docs/assets/overview/foo.md" with docsRoot "cs-docs" -> ["overview"].
 * "cs-docs/headless-cms/introduction/overview/foo.md" -> ["introduction", "overview"].
 * Every intermediate folder between the product folder and the file itself,
 * in order, this is the chain left-nav-linker.ts walks through nav_section
 * and (for deeper products) nested links_2026 entries to find where the
 * entry belongs. Null for a file sitting directly in its product folder
 * (product/file), which has no subsection to name, those get the
 * nav-toplevel tag instead and land in the product's blank-header section.
 */
export function subsectionChainFromPath(relativePath: string, docsRoot: string): string[] | null {
  const prefix = `${docsRoot}/`;
  const stripped = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
  const segments = stripped.split("/");
  // segments[0] is the product folder, the last segment is the filename,
  // everything between is the subsection chain.
  const chain = segments.slice(1, -1);
  return chain.length > 0 ? chain : null;
}

/**
 * "cs-docs/assets/overview/foo.md" with docsRoot "cs-docs" -> "assets".
 * The product folder is stripped out of the subsection chain above, so it is
 * tagged separately. left-nav-linker.ts prefers the entry's breadcrumb for
 * product resolution and uses this tag as its fallback, but the tag is the
 * only signal that states the source folder outright rather than inferring
 * it, which matters for lytics-cdp and developer-resources where the folder
 * and the article's url namespace deliberately differ.
 */
export function productSlugFromPath(relativePath: string, docsRoot: string): string | null {
  const prefix = `${docsRoot}/`;
  const stripped = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
  const segments = stripped.split("/").filter(Boolean);
  // Needs at least a folder and a filename, a bare file at the docs root has
  // no product to name.
  return segments.length >= 2 ? segments[0]! : null;
}
