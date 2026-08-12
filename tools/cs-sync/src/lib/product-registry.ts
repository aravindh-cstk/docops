/**
 * The 13 products in the production left navigation
 * (left_navigation_2026/blt92f94484c120f375), in nav order.
 *
 * Every value here is derived from that entry rather than from the folder
 * tree, and `npm run nav-tree` regenerates the same data live. If the two ever
 * disagree, the nav entry is right and this file is stale.
 *
 * `slug` is the cs-docs/<slug>/ folder, taken from the product's nav title.
 * `urlPrefix` is only a hint now: cs-docs mirrors the navigation while urls
 * stayed where they were authored, so the two no longer line up. Lytics CDP
 * lives in cs-docs/lytics-cdp/ but keeps /lytics/ urls, and Developer
 * Resources holds articles whose urls span several products. nav-apply.ts
 * derives paths from the nav and filenames from each entry's own url, so it
 * never reads urlPrefix. Only the superseded backfill-product-*.ts scripts do.
 */

export interface ProductFaqContainer {
  /** Exact product_faqs_2026 entry title, for logging/lookup. */
  title: string;
  /** Prod stack uid. The Sandbox counterparts live in content-type-mappings/product-faqs.ts. */
  uid: string;
}

export interface ProductEntry {
  /** cs-docs/<slug>/ folder name. */
  slug: string;
  /** product_navigation entry uid. */
  navUid: string;
  /** Hint only, see the file comment. Not used for path derivation. */
  urlPrefix: string;
  urlPrefixConfirmed: boolean;
  /** Every product_faqs_2026 container the nav actually reaches. */
  faqContainers: ProductFaqContainer[];
}

export const PRODUCTS: Record<string, ProductEntry> = {
  "headless-cms": {
    slug: "headless-cms",
    navUid: "blt61f927e340fc1992",
    urlPrefix: "/headless-cms/",
    urlPrefixConfirmed: true,
    faqContainers: [
      { title: "Headless CMS FAQs", uid: "blteaaca98ec4ee8d14" },
      { title: "Headless CMS Troubleshooting Guides", uid: "blt4e934f5a52701b0b" },
      { title: "SDK Troubleshooting Guides", uid: "blt6566ef1708ebc9f9" },
      { title: "CLI Troubleshooting Guides", uid: "blt4842add3ede9ee02" },
    ],
  },
  personalize: {
    slug: "personalize",
    navUid: "bltce7d1258047de429",
    urlPrefix: "/personalize/",
    urlPrefixConfirmed: true,
    faqContainers: [
      { title: "Personalize FAQs", uid: "blt310383fcfb88592b" },
      { title: "Personalize Troubleshooting Guides", uid: "bltbb3e4ef0c26ae57c" },
      // "Personalize FAQs - Copy(2026-06-29 09:56:22)" (blte6235195229b519b)
      // is a leftover the nav does not reference. Deliberately excluded.
    ],
  },
  "lytics-cdp": {
    slug: "lytics-cdp",
    navUid: "blt13082b098c525bb1",
    // Folder and url namespace differ on purpose: nav title is "Lytics CDP",
    // articles keep their original /lytics/ urls.
    urlPrefix: "/lytics/",
    urlPrefixConfirmed: true,
    faqContainers: [{ title: "Lytics FAQs", uid: "blt2cf52a7d2bfb03b2" }],
  },
  "agent-os": {
    slug: "agent-os",
    navUid: "blt296e6ef9807ed6ac",
    urlPrefix: "/agent-os/",
    urlPrefixConfirmed: true,
    faqContainers: [
      // "Agent OS FAQs" was previously excluded here as an unwired orphan.
      // It is now referenced by the nav, under Introduction > Core Concepts
      // and Capabilities, confirmed live.
      { title: "Agent OS FAQs", uid: "blt69033512a9e3e880" },
      { title: "Agent OS Troubleshooting Guides", uid: "blt3e04a0c01ff75eb2" },
    ],
  },
  assets: {
    slug: "assets",
    navUid: "bltf1afc727b1dd9ea9",
    urlPrefix: "/assets/",
    urlPrefixConfirmed: true,
    faqContainers: [{ title: "Assets FAQs", uid: "bltf0751b6e6100525b" }],
  },
  studio: {
    slug: "studio",
    navUid: "blt0f41a3ad2667293b",
    urlPrefix: "/studio/",
    urlPrefixConfirmed: true,
    faqContainers: [],
  },
  "brand-kit": {
    slug: "brand-kit",
    navUid: "blt0e2eac5e437bb54e",
    urlPrefix: "/brand-kit/",
    urlPrefixConfirmed: true,
    faqContainers: [{ title: "Brand Kit FAQs", uid: "blt8fdb61c67ebc96ff" }],
  },
  launch: {
    slug: "launch",
    navUid: "blt0b3c2e3e0b94c088",
    urlPrefix: "/launch/",
    urlPrefixConfirmed: true,
    faqContainers: [
      { title: "Launch FAQs", uid: "blt22446532cbe543a1" },
      { title: "Launch Troubleshooting Guides", uid: "blt8d81037d677edff9" },
    ],
  },
  "developer-hub": {
    slug: "developer-hub",
    navUid: "blt724a7058f6c36fc1",
    urlPrefix: "/developer-hub/",
    urlPrefixConfirmed: true,
    faqContainers: [
      // The double-space title is the one actually wired into the nav. A
      // single-space "Developer Hub FAQs" (bltbce3f3c351c3206f) also exists
      // but is an unwired duplicate, deliberately excluded.
      { title: "Developer  Hub FAQs", uid: "bltb86de60c3aaf949c" },
    ],
  },
  marketplace: {
    slug: "marketplace",
    navUid: "blt868dc48ec754b3cc",
    urlPrefix: "/marketplace/",
    urlPrefixConfirmed: true,
    faqContainers: [
      { title: "Marketplace FAQs", uid: "bltca54750457cd805a" },
      { title: "Marketplace Troubleshooting Guides", uid: "blt5f22e4d08c85afe5" },
    ],
  },
  analytics: {
    slug: "analytics",
    navUid: "blt1bc786018d797a63",
    urlPrefix: "/analytics/",
    urlPrefixConfirmed: true,
    faqContainers: [{ title: "Analytics FAQs", uid: "blt1da6e8f19bb87739" }],
  },
  administration: {
    slug: "administration",
    navUid: "blt50f121291015fc88",
    urlPrefix: "/administration/",
    urlPrefixConfirmed: true,
    faqContainers: [
      { title: "Administration FAQs", uid: "bltd5a498c8eb980539" },
      { title: "Administration Troubleshooting Guides", uid: "blt6c5d1ecefc0c8a4e" },
    ],
  },
  "developer-resources": {
    slug: "developer-resources",
    // Deliberately has no single url namespace: this product re-lists articles
    // owned by other products (CLI, SSO/SCIM setup, kickstarts), so its pages
    // carry /headless-cms/, /administration/ and /developers/ urls. Any
    // urlPrefix-based filter would drop most of it.
    urlPrefix: "",
    urlPrefixConfirmed: false,
    navUid: "blt20279703e08c5243",
    faqContainers: [],
  },
};

export function resolveProduct(slug: string): ProductEntry | null {
  return PRODUCTS[slug] ?? null;
}
