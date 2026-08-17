/**
 * Field mapping for the docs_article content type, confirmed field by field
 * against the real schema (see fixtures/docs_article.entry.template.json) and
 * against the product owner's explicit spec, not guessed from old code.
 *
 * Every product folder listed in PRODUCT_CONFIG has a verified marker and
 * breadcrumb navigation entry. Any folder not listed is a deliberate
 * unknown, not an oversight: resolveProductConfig returns null for it so
 * callers can skip that file rather than writing an unverified mapping.
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

interface ProductVariant extends ProductConfig {
  // Matched as a prefix against the path immediately after the top-level
  // product folder, e.g. "automations/connectors/" for
  // cs-docs/agent-os/automations/connectors/vercel.md. Checked longest-prefix
  // first, so a product with sub-routing lists its specific variant(s) before
  // the "" catch-all. Every product has exactly one "" variant as its
  // default/fallback.
  pathPrefix: string;
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
const PRODUCT_CONFIG: Record<string, ProductVariant[]> = {
  assets: [
    { pathPrefix: "", marker: "Assets", sandboxBreadcrumbUid: "bltc6c549bf342fa12b", prodBreadcrumbUid: "blt4e390ab8adbc5b66" },
  ],
  // Confirmed live against both stacks: at url "/headless-cms" both stacks
  // have two navigation entries (also titled "How-to Guides"), only the one
  // titled "Headless CMS" is the right breadcrumb target, url alone is not
  // unique here (also true for other products below, disambiguated by exact
  // title match against the left nav's product dropdown title instead).
  "headless-cms": [
    { pathPrefix: "", marker: "Headless CMS", sandboxBreadcrumbUid: "blt5e26f58d8f4f63ed", prodBreadcrumbUid: "blt106cf6f243420c40" },
  ],
  // Confirmed live against both stacks (2026-08-11): both entries exist, share
  // the same title/url ("Studio" / "/studio"), only their uids differ.
  studio: [
    { pathPrefix: "", marker: "Studio", sandboxBreadcrumbUid: "blt411e490e123c493a", prodBreadcrumbUid: "blt434e2688ea83a9d8" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match
  // ("Brand Kit"). Its navigation entry sits at /content-managers/brand-kit/,
  // not /brand-kit, url alone would not have found it.
  "brand-kit": [
    { pathPrefix: "", marker: "Brand Kit", sandboxBreadcrumbUid: "bltd7f613722fe3db33", prodBreadcrumbUid: "bltda3caa33c84bc7b3" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match.
  personalize: [
    { pathPrefix: "", marker: "Personalize", sandboxBreadcrumbUid: "blt3ab82918618897b1", prodBreadcrumbUid: "blt1196cce20c4ee74c" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match.
  launch: [
    { pathPrefix: "", marker: "Launch", sandboxBreadcrumbUid: "blt9750d6f5d59249cc", prodBreadcrumbUid: "blt5ce84ffd221a2e3b" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match. Its
  // navigation entry sits at /lytics, not /lytics-cdp.
  "lytics-cdp": [
    { pathPrefix: "", marker: "Lytics CDP", sandboxBreadcrumbUid: "bltdc71d36d83447b62", prodBreadcrumbUid: "blt42935045253b7882" },
  ],
  // Confirmed live against both stacks (2026-08-13): 7 entries share url
  // "/administration", disambiguated by exact title match ("Administration").
  administration: [
    { pathPrefix: "", marker: "Administration", sandboxBreadcrumbUid: "blt987d00e56379801b", prodBreadcrumbUid: "blt6cd92ec74de2c7b5" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match.
  "developer-hub": [
    { pathPrefix: "", marker: "Developer Hub", sandboxBreadcrumbUid: "blt9692b65f8e171ce4", prodBreadcrumbUid: "bltc39adf459fb6e634" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match. Its
  // navigation entry sits at /developers, not /developer-resources.
  "developer-resources": [
    { pathPrefix: "", marker: "Developer Resources", sandboxBreadcrumbUid: "blt3966cb2e3a3ae996", prodBreadcrumbUid: "blt1a635e66ddfdd93f" },
  ],
  // Confirmed live against both stacks (2026-08-13) by exact title match.
  analytics: [
    { pathPrefix: "", marker: "Analytics", sandboxBreadcrumbUid: "bltbdbfd785d7388b70", prodBreadcrumbUid: "bltc4eaaabe45bbee69" },
  ],
  // No navigation entry is titled exactly "Agent OS" in either stack. Checked
  // live usage instead (2026-08-13): "Automate Connectors" and "Automate
  // Guides" are both heavily used, both prod-published, and map to genuinely
  // different subsections (connector pages vs everything else), confirmed
  // with the product owner rather than picking one and guessing.
  "agent-os": [
    { pathPrefix: "automations/connectors/", marker: "Automate Connectors", sandboxBreadcrumbUid: "blt0fad368d864fb908", prodBreadcrumbUid: "bltfe478b96e6881fe2" },
    { pathPrefix: "", marker: "Automate Guides", sandboxBreadcrumbUid: "blt039d518bf90064cf", prodBreadcrumbUid: "blt3e991e57bcba1351" },
  ],
  // No navigation entry is titled exactly "Marketplace" in either stack. A
  // third candidate, "Integrations", was checked and rejected (2026-08-13):
  // 0% prod-published and every entry using it lives under
  // /developers/integrations/, unrelated to the marketplace folder. Between
  // the remaining two, "Marketplace Apps" is the individual app-install
  // guides (marketplace/marketplace-apps/*), "Marketplace Platform Guides"
  // is everything else under marketplace/, confirmed with the product owner.
  marketplace: [
    { pathPrefix: "marketplace-apps/", marker: "Marketplace Apps", sandboxBreadcrumbUid: "bltf9440c5e765fc662", prodBreadcrumbUid: "bltc7e9e0bf17bf4838" },
    { pathPrefix: "", marker: "Marketplace Platform Guides", sandboxBreadcrumbUid: "blt727e9447e70dee41", prodBreadcrumbUid: "blt16f9611c727c5a2e" },
  ],
};

/**
 * Null means "not verified yet", callers must skip, not guess. Accepts
 * either just the top-level folder name or the full path under the docs
 * root (e.g. "agent-os/automations/connectors/vercel.md") — passing only the
 * folder name always resolves to that product's "" catch-all variant.
 */
export function resolveProductConfig(docPathUnderRoot: string): ProductConfig | null {
  const segments = docPathUnderRoot.split("/").filter(Boolean);
  const topLevelFolder = segments[0];
  if (!topLevelFolder) return null;
  const variants = PRODUCT_CONFIG[topLevelFolder];
  if (!variants) return null;

  const rest = segments.slice(1).join("/");
  const sorted = [...variants].sort((a, b) => b.pathPrefix.length - a.pathPrefix.length);
  const match = sorted.find((v) => rest.startsWith(v.pathPrefix));
  if (!match) return null;

  const { pathPrefix: _pathPrefix, ...config } = match;
  return config;
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
  /** Path under the docs root, e.g. "agent-os/automations/connectors/vercel.md". */
  docPath: string;
  h1: string;
  htmlContent: string;
  url: string;
  description: string;
  existingArticleContent?: unknown;
}

/**
 * Throws if docPath's product folder (and sub-path, for products with
 * sub-routed variants) has no verified ProductConfig. Callers are expected
 * to check resolveProductConfig / docTypeMapsToDocsArticle themselves first
 * and skip rather than call this for out of scope files, this is the
 * last-resort guard, not the primary scope check.
 */
export function buildEntryPayload(input: BuildPayloadInput): DocsArticlePayload {
  const config = resolveProductConfig(input.docPath);
  if (!config) {
    throw new Error(
      `No verified docs_article mapping for "${input.docPath}". ` +
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

// Flat sandboxBreadcrumbUid -> prodBreadcrumbUid lookup across every variant
// of every product. A docs_article's `url` does not encode which variant a
// multi-variant product (agent-os, marketplace) used at creation time (e.g.
// both an "automations/connectors/" and a catch-all agent-os page get a flat
// url like /agent-os/<slug>), so remapping has to key off the uid that is
// actually already present in the breadcrumb, not re-derive it from the url.
const SANDBOX_TO_PROD_BREADCRUMB: Record<string, string> = Object.fromEntries(
  Object.values(PRODUCT_CONFIG)
    .flat()
    .map((variant) => [variant.sandboxBreadcrumbUid, variant.prodBreadcrumbUid]),
);

/**
 * A Sandbox entry's `breadcrumb` references the Sandbox-stack uid of its nav
 * entry. Cloning/updating that entry in Prod as-is would carry a uid over
 * that doesn't exist there, silently dropping the breadcrumb. Rewrites the
 * uid to the Prod-side equivalent for every known Sandbox uid, leaves
 * anything else (no breadcrumb, uid not in PRODUCT_CONFIG) untouched rather
 * than guessing.
 */
export function remapBreadcrumbForProd(
  breadcrumb: unknown,
): Array<{ uid: string; _content_type_uid: string }> | undefined {
  if (!Array.isArray(breadcrumb) || breadcrumb.length === 0) return breadcrumb as undefined;

  return (breadcrumb as Array<{ uid: string; _content_type_uid: string }>).map((ref) => {
    const prodUid = SANDBOX_TO_PROD_BREADCRUMB[ref.uid];
    return prodUid ? { ...ref, uid: prodUid } : ref;
  });
}

// Reverse of PRODUCT_CONFIG: every breadcrumb uid a docs_article can carry,
// in either stack, mapped back to the cs-docs folder slug that produced it.
// Multi-variant products (agent-os, marketplace) contribute two uids each and
// both map to the one folder, so this stays unambiguous.
//
// This is the only reliable product signal on a promoted entry. `url` is not:
// lytics-cdp articles live under /lytics/ and developer-resources articles
// carry other products' url prefixes entirely, so deriving the product from
// the url files those two under the wrong nav.
const BREADCRUMB_UID_TO_PRODUCT_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(PRODUCT_CONFIG).flatMap(([slug, variants]) =>
    variants.flatMap((variant) => [
      [variant.sandboxBreadcrumbUid, slug],
      [variant.prodBreadcrumbUid, slug],
    ]),
  ),
);

/**
 * Resolves a docs_article's cs-docs folder slug from its `breadcrumb` field,
 * accepting either a Sandbox-stack or Prod-stack breadcrumb uid. Null when the
 * breadcrumb is missing, empty, or references a uid outside PRODUCT_CONFIG,
 * callers must skip rather than guess.
 */
export function resolveProductSlugFromBreadcrumb(breadcrumb: unknown): string | null {
  if (!Array.isArray(breadcrumb)) return null;
  for (const ref of breadcrumb) {
    const uid = (ref as { uid?: unknown } | null)?.uid;
    if (typeof uid === "string" && BREADCRUMB_UID_TO_PRODUCT_SLUG[uid]) {
      return BREADCRUMB_UID_TO_PRODUCT_SLUG[uid];
    }
  }
  return null;
}

// Reverse of PRODUCT_CONFIG's markers, for the fallback path when an entry has
// no usable breadcrumb. Keyed by marker exactly as buildEntryPayload writes it
// into the title, e.g. "[Lytics CDP] - How to ..." resolves to "lytics-cdp".
const MARKER_TO_PRODUCT_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(PRODUCT_CONFIG).flatMap(([slug, variants]) =>
    variants.map((variant) => [variant.marker, slug]),
  ),
);

/** Resolves the folder slug from a "[Marker] - Heading" title. Null if the title has no known marker. */
export function resolveProductSlugFromTitle(title: unknown): string | null {
  if (typeof title !== "string") return null;
  const match = title.match(/^\[([^\]]+)\]/);
  if (!match) return null;
  return MARKER_TO_PRODUCT_SLUG[match[1]!] ?? null;
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
