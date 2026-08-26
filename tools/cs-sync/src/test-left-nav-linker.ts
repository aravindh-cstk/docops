/**
 * Unit tests for left-nav-linker.ts, the code that splices a newly promoted
 * docs_article into the Prod left nav.
 *
 * Unlike test-sandbox-to-prod-promote.ts these need no credentials and touch
 * no CMS: the Contentstack client is faked in-memory, so the placement logic
 * can be exercised for all 13 products without writing to a live stack.
 *
 * Run: npm run test:nav-linker
 */

import assert from "node:assert/strict";
import {
  linkNewEntryIntoNav,
  resolveProductSlug,
  slugifyHeader,
  extractNavSubsectionChainFromTags,
  hasNavToplevelTag,
  extractProductSlugFromTags,
} from "./lib/left-nav-linker.js";
import type { ProdPromoteClient } from "./lib/prod-promote-client.js";
import { PROMOTION_ENVIRONMENTS } from "./lib/prod-promote-client.js";
import { PRODUCTS, resolveProduct } from "./lib/product-registry.js";
import { resolveProductConfig } from "./lib/content-type-mappings/docs-article.js";
// From lib/nav-shared.ts, not nav-tree.ts: the latter demands CMS credentials at
// import time, which made this credential-free unit test unrunnable without a .env.
import { slugify } from "./lib/nav-shared.js";
import { subsectionChainFromPath, productSlugFromPath } from "./lib/nav-placement.js";
import type { ContentstackEntry } from "./lib/entry-content.js";

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void | Promise<void>): Promise<void> {
  return Promise.resolve()
    .then(fn)
    .then(() => {
      passed++;
      console.log(`  ✓ ${name}`);
    })
    .catch((error) => {
      failed++;
      console.log(`  ✗ ${name}`);
      console.log(`      ${error instanceof Error ? error.message : error}`);
    });
}

interface FakeEntry extends Record<string, unknown> {
  uid: string;
}

/**
 * In-memory stand-in for ProdPromoteClient, covering only the four methods the
 * linker calls. Records publishes so tests can assert that every entry the
 * linker touched was also republished, which is the failure mode that leaves a
 * stale nav node pointing nowhere.
 */
class FakeStack {
  entries = new Map<string, FakeEntry>();
  published: Array<{ contentTypeUid: string; uid: string }> = [];
  private nextUid = 1;

  seed(contentTypeUid: string, entry: FakeEntry): void {
    this.entries.set(`${contentTypeUid}:${entry.uid}`, entry);
  }

  asClient(): ProdPromoteClient {
    return this as unknown as ProdPromoteClient;
  }

  async getEntryOfType(contentTypeUid: string, uid: string): Promise<ContentstackEntry | null> {
    const found = this.entries.get(`${contentTypeUid}:${uid}`);
    // Return a copy so the linker cannot mutate stored state except by calling
    // updateEntryOfType, matching how the real HTTP client behaves.
    return found ? (JSON.parse(JSON.stringify(found)) as ContentstackEntry) : null;
  }

  async createEntryOfType(contentTypeUid: string, entry: Record<string, unknown>): Promise<ContentstackEntry> {
    const uid = `fake${this.nextUid++}`;
    const created = { ...entry, uid } as FakeEntry;
    this.seed(contentTypeUid, created);
    return created as unknown as ContentstackEntry;
  }

  async updateEntryOfType(contentTypeUid: string, uid: string, entry: ContentstackEntry): Promise<ContentstackEntry> {
    const stored = { ...(entry as unknown as FakeEntry), uid };
    this.seed(contentTypeUid, stored);
    return stored as unknown as ContentstackEntry;
  }

  async publishEntryOfType(contentTypeUid: string, uid: string): Promise<boolean> {
    this.published.push({ contentTypeUid, uid });
    return true;
  }
}

/** A product_navigation entry with the given sections. */
function navEntry(uid: string, sections: Array<{ header: string; links: unknown[] }>): FakeEntry {
  return { uid, title: "Product Nav", nav_section: sections };
}

function articleEntry(overrides: Record<string, unknown> = {}): ContentstackEntry {
  return { uid: "article1", title: "An Article", url: "/some/url", tags: [], ...overrides } as ContentstackEntry;
}

async function main(): Promise<void> {
  console.log("\nleft-nav-linker\n");

  // ---------------------------------------------------------------- helpers

  console.log("tag and path helpers");

  await test("slugifyHeader agrees with nav-tree's slugify", () => {
    // These two must stay identical: nav-link-audit.ts predicts linker
    // behaviour using slugifyHeader, while the nav tree it compares against
    // was built with slugify. Drift makes the audit silently wrong.
    for (const sample of ["Introduction", "APIs & SDKs", "  Getting Started  ", "Live Preview / Visual Builder", "01-general-faqs", "Über Cache"]) {
      assert.equal(slugifyHeader(sample), slugify(sample), `mismatch for "${sample}"`);
    }
  });

  await test("subsectionChainFromPath drops the product folder and filename", () => {
    assert.deepEqual(subsectionChainFromPath("cs-docs/assets/overview/foo.md", "cs-docs"), ["overview"]);
    assert.deepEqual(
      subsectionChainFromPath("cs-docs/headless-cms/introduction/overview/foo.md", "cs-docs"),
      ["introduction", "overview"],
    );
    assert.equal(subsectionChainFromPath("cs-docs/analytics/about-analytics.md", "cs-docs"), null);
  });

  await test("productSlugFromPath returns the product folder, null at the docs root", () => {
    assert.equal(productSlugFromPath("cs-docs/lytics-cdp/support/foo.md", "cs-docs"), "lytics-cdp");
    assert.equal(productSlugFromPath("cs-docs/analytics/about-analytics.md", "cs-docs"), "analytics");
    assert.equal(productSlugFromPath("cs-docs/README.md", "cs-docs"), null);
  });

  await test("tag extractors read the placement tags", () => {
    assert.deepEqual(extractNavSubsectionChainFromTags(["pr-1", "nav-subsection-a/b"]), ["a", "b"]);
    assert.equal(extractNavSubsectionChainFromTags(["pr-1"]), null);
    assert.equal(hasNavToplevelTag(["nav-toplevel"]), true);
    assert.equal(hasNavToplevelTag(["nav-subsection-a"]), false);
    assert.equal(extractProductSlugFromTags(["product-lytics-cdp"]), "lytics-cdp");
    assert.equal(extractProductSlugFromTags([]), null);
  });

  // ------------------------------------------------------ product resolution

  console.log("\nproduct resolution");

  await test("resolves all 13 products from their Sandbox breadcrumb uid", () => {
    for (const slug of Object.keys(PRODUCTS)) {
      const config = resolveProductConfig(slug);
      assert.ok(config, `no PRODUCT_CONFIG for ${slug}`);
      const sandboxEntry = articleEntry({
        breadcrumb: [{ uid: config!.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
      });
      const result = resolveProductSlug(sandboxEntry, articleEntry());
      assert.deepEqual(result, { slug, via: "breadcrumb" }, `wrong resolution for ${slug}`);
    }
  });

  await test("resolves all 13 products from their Prod breadcrumb uid", () => {
    for (const slug of Object.keys(PRODUCTS)) {
      const config = resolveProductConfig(slug)!;
      const prodEntry = articleEntry({
        breadcrumb: [{ uid: config.prodBreadcrumbUid, _content_type_uid: "navigation" }],
      });
      assert.deepEqual(resolveProductSlug(undefined, prodEntry), { slug, via: "breadcrumb" });
    }
  });

  await test("lytics-cdp resolves to its folder, not its /lytics/ url", () => {
    // The regression a url-based fix would introduce: this article's url says
    // "lytics" but it belongs under the Lytics CDP product nav.
    const config = resolveProductConfig("lytics-cdp")!;
    const entry = articleEntry({
      url: "/lytics/some-article",
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });
    assert.equal(resolveProductSlug(entry, entry)?.slug, "lytics-cdp");
  });

  await test("developer-resources resolves despite carrying another product's url", () => {
    const config = resolveProductConfig("developer-resources")!;
    for (const url of ["/headless-cms/cli", "/administration/sso", "/developers/kickstart"]) {
      const entry = articleEntry({
        url,
        breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
      });
      assert.equal(resolveProductSlug(entry, entry)?.slug, "developer-resources", `wrong for ${url}`);
    }
  });

  await test("both variants of multi-variant products resolve to one slug", () => {
    const cases: Array<[string, string]> = [
      ["agent-os/automations/connectors/vercel.md", "agent-os"],
      ["agent-os/anything-else.md", "agent-os"],
      ["marketplace/marketplace-apps/some-app.md", "marketplace"],
      ["marketplace/platform-guide.md", "marketplace"],
    ];
    for (const [docPath, expected] of cases) {
      const config = resolveProductConfig(docPath)!;
      const entry = articleEntry({
        breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
      });
      assert.equal(resolveProductSlug(entry, entry)?.slug, expected, `wrong for ${docPath}`);
    }
  });

  await test("falls back to the product tag, then the title marker", () => {
    const byTag = articleEntry({ tags: ["product-studio"] });
    assert.deepEqual(resolveProductSlug(byTag, byTag), { slug: "studio", via: "tag" });

    const byTitle = articleEntry({ title: "[Lytics CDP] - Something" });
    assert.deepEqual(resolveProductSlug(byTitle, byTitle), { slug: "lytics-cdp", via: "title" });
  });

  await test("returns null rather than guessing from the url", () => {
    const entry = articleEntry({ url: "/assets/some-article", title: "No marker here", tags: [] });
    assert.equal(resolveProductSlug(entry, entry), null);
  });

  // ------------------------------------------------------------- linking

  console.log("\nlinking");

  await test("flat product appends into an existing section", async () => {
    const navUid = resolveProduct("assets")!.navUid;
    const stack = new FakeStack();
    stack.seed("product_navigation", navEntry(navUid, [{ header: "Overview", links: [] }]));

    const config = resolveProductConfig("assets")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-subsection-overview"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, true);
    assert.equal(result.navUid, navUid);
    assert.equal(result.productSlug, "assets");
    assert.equal(result.sectionCreated, false);
    assert.deepEqual(result.createdNodes, []);
    assert.deepEqual(result.touched, [{ uid: navUid, contentTypeUid: "product_navigation" }]);

    const stored = stack.entries.get(`product_navigation:${navUid}`)!;
    const links = (stored.nav_section as Array<{ links: unknown[] }>)[0]!.links;
    assert.deepEqual(links, [{ uid: "newArticle", _content_type_uid: "docs_article" }]);
  });

  await test("nested product creates the chain and reports every node", async () => {
    const navUid = resolveProduct("headless-cms")!.navUid;
    const stack = new FakeStack();
    stack.seed("product_navigation", navEntry(navUid, [{ header: "Introduction", links: [] }]));

    const config = resolveProductConfig("headless-cms")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-subsection-introduction/core-concepts/basics"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, true);
    // Two links_2026 levels below the section: core-concepts, basics.
    assert.equal(result.createdNodes.length, 2);
    assert.deepEqual(
      result.createdNodes.map((n) => n.title),
      ["Core Concepts", "Basics"],
    );
    // touched must carry the product nav plus BOTH new nodes, otherwise the
    // Release deploys a chain that does not reach the article.
    assert.equal(result.touched.length, 3);
    assert.equal(result.touched[0]!.contentTypeUid, "product_navigation");
    assert.deepEqual(
      result.touched.slice(1).map((t) => t.contentTypeUid),
      ["links_2026", "links_2026"],
    );

    // Every touched entry must also have been republished.
    for (const item of result.touched) {
      assert.ok(
        stack.published.some((p) => p.uid === item.uid && p.contentTypeUid === item.contentTypeUid),
        `${item.contentTypeUid} ${item.uid} was touched but never published`,
      );
    }
  });

  await test("descends an existing chain without recreating it", async () => {
    const navUid = resolveProduct("personalize")!.navUid;
    const stack = new FakeStack();
    stack.seed("links_2026", { uid: "existingNode", title: "Core Concepts", nested_links: [] });
    stack.seed(
      "product_navigation",
      navEntry(navUid, [
        { header: "Introduction", links: [{ uid: "existingNode", _content_type_uid: "links_2026" }] },
      ]),
    );

    const config = resolveProductConfig("personalize")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-subsection-introduction/core-concepts"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, true);
    assert.deepEqual(result.createdNodes, [], "should not create an already-present node");
    // Still touched: its nested_links were rewritten, so it needs republishing.
    assert.deepEqual(result.touched, [
      { uid: navUid, contentTypeUid: "product_navigation" },
      { uid: "existingNode", contentTypeUid: "links_2026" },
    ]);

    const node = stack.entries.get("links_2026:existingNode")!;
    assert.deepEqual(node.nested_links, [{ uid: "newArticle", _content_type_uid: "docs_article" }]);
  });

  await test("top-level doc lands in the existing blank-header section", async () => {
    const navUid = resolveProduct("analytics")!.navUid;
    const stack = new FakeStack();
    stack.seed("product_navigation", navEntry(navUid, [
      { header: "", links: [{ uid: "preexisting", _content_type_uid: "docs_article" }] },
      { header: "Guides", links: [] },
    ]));

    const config = resolveProductConfig("analytics")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-toplevel"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, true);
    assert.equal(result.sectionCreated, false, "analytics already has a blank-header section");

    const stored = stack.entries.get(`product_navigation:${navUid}`)!;
    const sections = stored.nav_section as Array<{ header: string; links: unknown[] }>;
    assert.equal(sections[0]!.links.length, 2, "should append into the blank section, not a new one");
    assert.equal(sections[1]!.links.length, 0, "must not touch the named section");
  });

  await test("top-level doc creates a blank-header section when none exists", async () => {
    const navUid = resolveProduct("studio")!.navUid;
    const stack = new FakeStack();
    stack.seed("product_navigation", navEntry(navUid, [{ header: "Guides", links: [] }]));

    const config = resolveProductConfig("studio")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-toplevel"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, true);
    assert.equal(result.sectionCreated, true);
    assert.equal(result.createdNodes.length, 1);

    const sections = stack.entries.get(`product_navigation:${navUid}`)!.nav_section as Array<{ header: string; links: unknown[] }>;
    assert.equal(sections.length, 2);
    assert.equal(sections[1]!.header, "");
  });

  await test("re-linking the same entry is idempotent", async () => {
    const navUid = resolveProduct("assets")!.navUid;
    const stack = new FakeStack();
    stack.seed("product_navigation", navEntry(navUid, [{ header: "Overview", links: [] }]));

    const config = resolveProductConfig("assets")!;
    const entry = articleEntry({
      uid: "newArticle",
      tags: ["nav-subsection-overview"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    await linkNewEntryIntoNav(stack.asClient(), entry, entry);
    await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    const sections = stack.entries.get(`product_navigation:${navUid}`)!.nav_section as Array<{ links: unknown[] }>;
    assert.equal(sections[0]!.links.length, 1, "duplicate reference added on the second run");
  });

  // ------------------------------------------------------------- failures

  console.log("\nfailure handling");

  await test("unresolvable product returns a reason instead of throwing", async () => {
    const stack = new FakeStack();
    const entry = articleEntry({ title: "No marker", tags: ["nav-subsection-overview"] });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, false);
    assert.match(result.reason ?? "", /could not resolve the product/);
    assert.deepEqual(result.touched, []);
  });

  await test("missing placement tag returns a reason instead of throwing", async () => {
    const stack = new FakeStack();
    const config = resolveProductConfig("assets")!;
    const entry = articleEntry({
      tags: [],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, false);
    assert.match(result.reason ?? "", /nav-subsection-\* or nav-toplevel/);
  });

  await test("missing product_navigation entry returns a reason instead of throwing", async () => {
    const stack = new FakeStack(); // nothing seeded
    const config = resolveProductConfig("assets")!;
    const entry = articleEntry({
      tags: ["nav-subsection-overview"],
      breadcrumb: [{ uid: config.sandboxBreadcrumbUid, _content_type_uid: "navigation" }],
    });

    const result = await linkNewEntryIntoNav(stack.asClient(), entry, entry);

    assert.equal(result.linked, false);
    assert.match(result.reason ?? "", /not found/);
  });

  // ------------------------------------------------------- environments

  console.log("\npublish environments");

  await test("publishes to staging and development, never production", () => {
    assert.deepEqual([...PROMOTION_ENVIRONMENTS], ["staging", "development"]);
    assert.ok(
      !PROMOTION_ENVIRONMENTS.some((env) => /prod/i.test(env)),
      "production must never be a promotion target",
    );
  });

  console.log(`\n${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
