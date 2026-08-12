/**
 * Field mapping for the docs_article content type, confirmed field by field
 * against the real schema (see fixtures/docs_article.entry.template.json) and
 * against the product owner's explicit spec, not guessed from old code.
 *
 * Only the "assets" product folder has a verified marker and breadcrumb
 * navigation entry this round. Any other folder is a deliberate unknown, not
 * an oversight, resolveProductConfig returns null for it so callers can skip
 * that file rather than writing an unverified mapping.
 */

export interface ArticleSectionBlock {
  article_section: {
    heading: string;
    content: string;
    _metadata?: { uid: string };
  };
}

export interface DocsArticlePayload {
  title: string;
  url: string;
  breadcrumb: Array<{ uid: string; _content_type_uid: "navigation" }>;
  article_content: ArticleSectionBlock[];
  enable_skill_level_categories: boolean;
  enable_time_to_read: boolean;
  disable_last_updated_view: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export interface ProductConfig {
  marker: string;
  // Entry UIDs are stack-specific, Contentstack assigns them on create and
  // there is no way to force a chosen uid, so the same "Assets" navigation
  // entry has a different uid in Sandbox than in Prod even though its content
  // (title, url) is identical. Payloads written to Sandbox must use
  // sandboxBreadcrumbUid, anything cloned/updated in Prod must have that uid
  // remapped to prodBreadcrumbUid, see remapBreadcrumbForProd below.
  sandboxBreadcrumbUid: string;
  prodBreadcrumbUid: string;
}

// Confirmed with the product owner: folder "assets" -> marker "Assets" ->
// breadcrumb reference to the "Assets" entry in the navigation content type.
// Confirmed live against both stacks: both entries exist, share the same
// title/url ("Assets" / "/assets"), only their uids differ.
//
// folder "studio" -> marker "Studio" -> breadcrumb reference to the "Studio"
// entry in the navigation content type. Confirmed live against both stacks
// (2026-08-11): both entries exist, share the same title/url
// ("Studio" / "/studio"), only their uids differ.
const PRODUCT_CONFIG: Record<string, ProductConfig> = {
  assets: {
    marker: "Assets",
    sandboxBreadcrumbUid: "bltc6c549bf342fa12b",
    prodBreadcrumbUid: "blt4e390ab8adbc5b66",
  },
  // Confirmed live against both stacks: at url "/headless-cms" both stacks
  // have two navigation entries (also titled "How-to Guides"), only the one
  // titled "Headless CMS" is the right breadcrumb target, url alone is not
  // unique here (also true for Administration and Marketplace).
  "headless-cms": {
    marker: "Headless CMS",
    sandboxBreadcrumbUid: "blt5e26f58d8f4f63ed",
    prodBreadcrumbUid: "blt106cf6f243420c40",
  },
  // Confirmed live against both stacks (2026-08-11): both entries exist, share
  // the same title/url ("Studio" / "/studio"), only their uids differ.
  studio: {
    marker: "Studio",
    sandboxBreadcrumbUid: "blt411e490e123c493a",
    prodBreadcrumbUid: "blt434e2688ea83a9d8",
  },
};

/** Null means "not verified yet", callers must skip, not guess. */
export function resolveProductConfig(topLevelFolder: string): ProductConfig | null {
  return PRODUCT_CONFIG[topLevelFolder] ?? null;
}

// doc_type values that resolve to docs_article. Mirrors the mapping already in
// git-to-sandbox-sync.ts's csDocTypeMap, kept here since it is this content
// type's own mapping to own, not a cross-content-type registry.
const DOCS_ARTICLE_DOC_TYPES = new Set([
  "guide", "sdk-guide", "developer-guide", "marketplace-guide", "connector-guide",
  "cli-guide", "integration-guide", "solution-guide", "feature-guide",
  "how-to-guide", "setup-guide", "getting-started", "quick-start", "get-started",
  "concept", "overview", "concept-guide", "architecture-guide",
  "architecture-diagram", "feature-overview", "sdk-overview", "how-to", "page",
  "documentation", "article", "developer-hub-guide",
]);

export function docTypeMapsToDocsArticle(docType: string | undefined): boolean {
  if (!docType) return true; // no doc_type specified defaults to docs_article
  return DOCS_ARTICLE_DOC_TYPES.has(docType);
}

export interface BuildPayloadInput {
  topLevelFolder: string;
  h1: string;
  htmlContent: string;
  url: string;
  description: string;
  existingArticleContent?: unknown;
}

/**
 * Throws if topLevelFolder has no verified ProductConfig. Callers are
 * expected to check resolveProductConfig / docTypeMapsToDocsArticle
 * themselves first and skip rather than call this for out of scope files,
 * this is the last-resort guard, not the primary scope check.
 */
export function buildEntryPayload(input: BuildPayloadInput): DocsArticlePayload {
  const config = resolveProductConfig(input.topLevelFolder);
  if (!config) {
    throw new Error(
      `No verified docs_article mapping for product folder "${input.topLevelFolder}". ` +
      `Add it to PRODUCT_CONFIG in docs-article.ts once its marker and breadcrumb ` +
      `navigation entry are confirmed.`,
    );
  }

  const section: ArticleSectionBlock["article_section"] = {
    heading: input.h1,
    content: input.htmlContent,
  };

  const preservedUid = extractBlockMetadataUid(input.existingArticleContent);
  if (preservedUid) {
    section._metadata = { uid: preservedUid };
  }

  return {
    title: `[${config.marker}] - ${input.h1}`,
    url: input.url,
    breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    article_content: [{ article_section: section }],
    enable_skill_level_categories: true,
    enable_time_to_read: true,
    disable_last_updated_view: false,
    seo: {
      title: `${input.h1} | Contentstack`,
      description: input.description,
    },
  };
}

function topLevelFolderFromUrl(url: string | undefined): string | null {
  if (!url) return null;
  const segments = url.split("/").filter(Boolean);
  return segments[0] ?? null;
}

/**
 * A Sandbox entry's `breadcrumb` references the Sandbox-stack uid of its nav
 * entry. Cloning/updating that entry in Prod as-is would carry a uid over
 * that doesn't exist there, silently dropping the breadcrumb. Rewrites the
 * uid to the Prod-side equivalent for verified products only, leaves
 * anything else (unverified product, no breadcrumb, uid that doesn't match
 * the known Sandbox uid) untouched rather than guessing.
 */
export function remapBreadcrumbForProd(
  url: string | undefined,
  breadcrumb: unknown,
): Array<{ uid: string; _content_type_uid: string }> | undefined {
  if (!Array.isArray(breadcrumb) || breadcrumb.length === 0) return breadcrumb as undefined;

  const topLevelFolder = topLevelFolderFromUrl(url);
  const config = topLevelFolder ? resolveProductConfig(topLevelFolder) : null;
  if (!config) return breadcrumb as Array<{ uid: string; _content_type_uid: string }>;

  return (breadcrumb as Array<{ uid: string; _content_type_uid: string }>).map((ref) =>
    ref.uid === config.sandboxBreadcrumbUid ? { ...ref, uid: config.prodBreadcrumbUid } : ref,
  );
}

function extractBlockMetadataUid(articleContent: unknown): string | undefined {
  if (!Array.isArray(articleContent) || articleContent.length === 0) {
    return undefined;
  }
  const first = articleContent[0] as Record<string, unknown>;
  const block = first?.article_section as Record<string, unknown> | undefined;
  const meta = block?._metadata as { uid?: string } | undefined;
  return typeof meta?.uid === "string" ? meta.uid : undefined;
}
