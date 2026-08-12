/**
 * Single source of truth for the `product_navigation` + `product_faqs_2026`
 * backfill of every product other than Headless CMS and Assets, which were
 * already done by hand before this registry existed. See the plan at
 * .claude/plans/logical-mapping-hickey.md for the full rationale.
 *
 * `navUid` and each FAQ container's `uid` were confirmed live via read-only
 * GETs against the Prod docs stack. `urlPrefix` was NOT independently
 * confirmed for every product the same way (it's inferred from the folder
 * slug, matching the pattern every already-done product follows), so
 * `urlPrefixConfirmed` starts false everywhere except where it was
 * separately verified this round. Per the plan, the first thing a
 * per-product backfill run does is sample 2-3 docs_article URLs from that
 * product's nav tree and confirm (or correct) `urlPrefix` here before
 * writing anything, flipping the flag to true.
 */

export interface ProductFaqContainer {
  /** Exact product_faqs_2026 entry title, for logging/lookup. */
  title: string;
  uid: string;
}

export interface ProductEntry {
  /** cs-docs/<slug>/ folder name. */
  slug: string;
  /** product_navigation entry uid. */
  navUid: string;
  /** e.g. "/launch/" -- verify against a live sample before trusting. */
  urlPrefix: string;
  urlPrefixConfirmed: boolean;
  /** Empty if the product has no product_faqs_2026 container wired into its nav. */
  faqContainers: ProductFaqContainer[];
}

export const PRODUCTS: Record<string, ProductEntry> = {
  launch: {
    slug: "launch",
    navUid: "blt0b3c2e3e0b94c088",
    urlPrefix: "/launch/",
    urlPrefixConfirmed: true, // confirmed live: /launch/about-launch, /launch/quick-start-remix, etc.
    faqContainers: [
      { title: "Launch FAQs", uid: "blt22446532cbe543a1" },
      { title: "Launch Troubleshooting Guides", uid: "blt8d81037d677edff9" },
    ],
  },
  administration: {
    slug: "administration",
    navUid: "blt50f121291015fc88",
    urlPrefix: "/administration/",
    urlPrefixConfirmed: true, // confirmed live: /administration/about-organizations, /administration/about-teams, /administration/multi-factor-authentication
    faqContainers: [
      { title: "Administration FAQs", uid: "bltd5a498c8eb980539" },
      { title: "Administration Troubleshooting Guides", uid: "blt6c5d1ecefc0c8a4e" },
    ],
  },
  "agent-os": {
    slug: "agent-os",
    navUid: "blt296e6ef9807ed6ac",
    urlPrefix: "/agent-os/",
    urlPrefixConfirmed: true, // confirmed live: /agent-os/what-is-contentstack-agent-os, /agent-os/what-is-an-agent, /agent-os/what-is-polaris, /agent-os/what-is-an-automation
    faqContainers: [
      // "Agent OS FAQs" (blt69033512a9e3e880) is an orphan, not wired into
      // this nav entry. Deliberately excluded, do not add it back without
      // re-confirming it's actually linked somewhere.
      { title: "Agent OS Troubleshooting Guides", uid: "blt3e04a0c01ff75eb2" },
    ],
  },
  analytics: {
    slug: "analytics",
    navUid: "blt1bc786018d797a63",
    urlPrefix: "/analytics/",
    urlPrefixConfirmed: true, // confirmed live: "About Analytics" (/analytics/about-analytics) and "Limitations for Analytics" (/analytics/limitations-for-analytics) both docs_article entries in this nav
    faqContainers: [{ title: "Analytics FAQs", uid: "blt1da6e8f19bb87739" }],
  },
  "brand-kit": {
    slug: "brand-kit",
    navUid: "blt0e2eac5e437bb54e",
    urlPrefix: "/brand-kit/",
    urlPrefixConfirmed: true, // confirmed live in an earlier round this session
    faqContainers: [{ title: "Brand Kit FAQs", uid: "blt8fdb61c67ebc96ff" }],
  },
  "developer-hub": {
    slug: "developer-hub",
    navUid: "blt724a7058f6c36fc1",
    urlPrefix: "/developer-hub/",
    urlPrefixConfirmed: true, // confirmed live in an earlier round this session
    faqContainers: [
      // The double-space title below is the one actually wired into this
      // nav entry. A single-space "Developer Hub FAQs" (bltbce3f3c351c3206f)
      // also exists but is an unwired duplicate, deliberately excluded.
      { title: "Developer  Hub FAQs", uid: "bltb86de60c3aaf949c" },
    ],
  },
  lytics: {
    slug: "lytics",
    navUid: "blt13082b098c525bb1",
    urlPrefix: "/lytics/",
    urlPrefixConfirmed: true, // confirmed live in an earlier round this session (Lytics CDP landing page)
    faqContainers: [{ title: "Lytics FAQs", uid: "blt2cf52a7d2bfb03b2" }],
  },
  marketplace: {
    slug: "marketplace",
    navUid: "blt868dc48ec754b3cc",
    urlPrefix: "/marketplace/",
    urlPrefixConfirmed: true, // confirmed live in an earlier round this session
    faqContainers: [
      { title: "Marketplace FAQs", uid: "bltca54750457cd805a" },
      { title: "Marketplace Troubleshooting Guides", uid: "blt5f22e4d08c85afe5" },
    ],
  },
  personalize: {
    slug: "personalize",
    navUid: "bltce7d1258047de429",
    urlPrefix: "/personalize/",
    urlPrefixConfirmed: true, // confirmed live: /personalize/about-personalize, /personalize/delivering-personalized-experiences-overview, /personalize/about-cdp-integration, /personalize/location-based-personalization-use-case. One "Personalize Edge SDK" section entry resolves to /developers/sdks/personalize-edge-sdk/... instead (separate SDK reference architecture); backfill-product-docs.ts's urlPrefix filter already skips those as out-of-scope.
    faqContainers: [
      { title: "Personalize FAQs", uid: "blt310383fcfb88592b" },
      { title: "Personalize Troubleshooting Guides", uid: "bltbb3e4ef0c26ae57c" },
      // "Personalize FAQs - Copy(2026-06-29 09:56:22)" (blte6235195229b519b)
      // is a leftover orphan, deliberately excluded.
    ],
  },
  "data-and-insights-lytics": {
    slug: "data-and-insights-lytics",
    navUid: "bltbbc86b9d5904934b",
    urlPrefix: "/data-and-insights/", // corrected: sampled 14 docs_article entries across all 4 nav sections, 11 use /data-and-insights/... (e.g. /data-and-insights/behavioral-scores, /data-and-insights/consent-and-privacy); 2 are cross-product refs correctly out of scope (/launch/..., /marketplace/...); 1 outlier ("Limitations", bltc2e0a4e52eb868fb) uses the legacy /data-and-insights-lytics/limitations slug, is real and published-to-production content but does not match this prefix and will be skippedOutOfScope by design -- left in place, see backfill notes.
    urlPrefixConfirmed: true,
    faqContainers: [{ title: "Data & Insights (Lytics) FAQs", uid: "blt22ae4938dad38485" }],
  },
  studio: {
    slug: "studio",
    navUid: "blt0f41a3ad2667293b",
    urlPrefix: "/studio/",
    urlPrefixConfirmed: true, // confirmed live: /studio/about-studio, /studio/contentstack-studio-overview, /studio/the-composability-ladder, /studio/setup-overview, /studio/url-variables-reference (sampled across Overview, Setup, Reference nav_section groups)
    faqContainers: [], // no product_faqs_2026 container exists for Studio
  },
  // Developer Resources is a special case: cs-docs/developers/ is the
  // deferred, messy, 1175-file stale-duplicate folder from the old
  // audience-split export, NOT this product's real home. Do not run the
  // backfill for this product until urlPrefix is confirmed to NOT collide
  // with that folder's cleanup. See the plan's "Special case" section.
  "developer-resources": {
    slug: "developers", // PLACEHOLDER, likely wrong, verify before use
    navUid: "blt20279703e08c5243",
    urlPrefix: "/developers/", // UNCONFIRMED, this is a guess, do not trust
    urlPrefixConfirmed: false,
    faqContainers: [], // no product_faqs_2026 container exists for Developer Resources
  },
};

export function resolveProduct(slug: string): ProductEntry | null {
  return PRODUCTS[slug] ?? null;
}
