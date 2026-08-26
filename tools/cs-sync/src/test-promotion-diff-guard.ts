/**
 * Unit tests for the "is this the same content, and who changed it?" layer:
 * contentsEqual / normalizeForDiff in lib/entry-content.ts, and the conflict
 * guard in lib/promotion-guard.ts.
 *
 * No credentials and no CMS access — everything here is pure functions over
 * hand-built entry shapes.
 *
 * Run: npm run test:promote-guard
 */

import assert from "node:assert/strict";
import {
  contentsEqual,
  diffFingerprint,
  srcHashTag,
  sandboxUidTag,
  withSrcHashTag,
  extractSrcHashFromTags,
  stripMetadataFields,
  stripNestedKeys,
  canonicalize,
  SANDBOX_METADATA_FIELDS,
  type ContentstackEntry,
} from "./lib/entry-content.js";
import { evaluatePromotionGuard } from "./lib/promotion-guard.js";

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

// Real uids out of PRODUCT_CONFIG, so these exercise the actual mapping table
// rather than a fixture that could drift away from it.
const ASSETS_SANDBOX = "bltc6c549bf342fa12b";
const ASSETS_PROD = "blt4e390ab8adbc5b66";
const AGENTOS_GUIDES_SANDBOX = "blt039d518bf90064cf";
const AGENTOS_CONNECTORS_SANDBOX = "blt0fad368d864fb908";

function entry(overrides: Partial<ContentstackEntry> = {}): ContentstackEntry {
  return {
    uid: "blt0000000000000001",
    title: "[Assets] - Asset Localization",
    url: "/assets/asset-localization",
    locale: "en-us",
    tags: ["pr-439"],
    breadcrumb: [{ uid: ASSETS_SANDBOX, _content_type_uid: "navigation" }],
    article_content: [
      {
        article_section: {
          heading: "Overview",
          content: "<p>Localize an asset.</p>",
          _metadata: { uid: "blkaaaaaaaaaaaaaaaa" },
        },
      },
    ],
    ...overrides,
  };
}

async function main() {
  console.log("\ncontentsEqual: cross-stack bookkeeping");

  await test("identical entries compare equal", () => {
    assert.equal(contentsEqual(entry(), entry()), true);
  });

  await test("sandbox vs prod breadcrumb uid compares equal with no remap applied", () => {
    // This is the cms-pull-prod regression: it compares a Prod entry straight
    // against a Sandbox entry, with neither side remapped.
    const sandbox = entry();
    const prod = entry({ breadcrumb: [{ uid: ASSETS_PROD, _content_type_uid: "navigation" }] });
    assert.equal(contentsEqual(sandbox, prod), true);
  });

  await test("a move between two variants of the same product is NOT equal", () => {
    const guides = entry({ breadcrumb: [{ uid: AGENTOS_GUIDES_SANDBOX, _content_type_uid: "navigation" }] });
    const connectors = entry({ breadcrumb: [{ uid: AGENTOS_CONNECTORS_SANDBOX, _content_type_uid: "navigation" }] });
    assert.equal(contentsEqual(guides, connectors), false);
  });

  await test("a breadcrumb uid outside PRODUCT_CONFIG stays unequal (deliberate loud failure)", () => {
    const known = entry();
    const unknown = entry({ breadcrumb: [{ uid: "bltnotinproductconfig", _content_type_uid: "navigation" }] });
    assert.equal(contentsEqual(known, unknown), false);
  });

  await test("a differing nested block _metadata.uid compares equal", () => {
    const sandbox = entry();
    const prod = entry({
      article_content: [
        {
          article_section: {
            heading: "Overview",
            content: "<p>Localize an asset.</p>",
            _metadata: { uid: "blkbbbbbbbbbbbbbbbb" },
          },
        },
      ],
    });
    assert.equal(contentsEqual(sandbox, prod), true);
  });

  await test("_metadata differing three levels deep compares equal", () => {
    const a = entry({ seo: { title: "t", nested: { deeper: { _metadata: { uid: "x" } } } } });
    const b = entry({ seo: { title: "t", nested: { deeper: { _metadata: { uid: "y" } } } } });
    assert.equal(contentsEqual(a, b), true);
  });

  await test("differing block content is NOT equal", () => {
    const a = entry();
    const b = entry({
      article_content: [
        { article_section: { heading: "Overview", content: "<p>Something else.</p>", _metadata: { uid: "blkaaaaaaaaaaaaaaaa" } } },
      ],
    });
    assert.equal(contentsEqual(a, b), false);
  });

  await test("swapped modular blocks are NOT equal (array order is meaningful)", () => {
    const first = { article_section: { heading: "A", content: "<p>a</p>" } };
    const second = { article_section: { heading: "B", content: "<p>b</p>" } };
    assert.equal(
      contentsEqual(entry({ article_content: [first, second] }), entry({ article_content: [second, first] })),
      false,
    );
  });

  await test("a Prod-only sandbox-uid tag compares equal", () => {
    const sandbox = entry();
    const prod = entry({ tags: ["pr-439", sandboxUidTag("blt0000000000000001")] });
    assert.equal(contentsEqual(sandbox, prod), true);
  });

  await test("a Prod-only src-hash tag compares equal", () => {
    const sandbox = entry();
    const prod = entry({ tags: ["pr-439", srcHashTag("abc123abc123")] });
    assert.equal(contentsEqual(sandbox, prod), true);
  });

  await test("an authored tag difference is NOT equal", () => {
    assert.equal(contentsEqual(entry({ tags: ["pr-439"] }), entry({ tags: ["pr-440"] })), false);
  });

  await test("a locale difference is NOT equal", () => {
    assert.equal(contentsEqual(entry(), entry({ locale: "de-de" })), false);
  });

  console.log("\nwrite path stays untouched");

  await test("stripMetadataFields still keeps nested _metadata", () => {
    const stripped = stripMetadataFields(entry()) as Record<string, any>;
    assert.equal(stripped.article_content[0].article_section._metadata.uid, "blkaaaaaaaaaaaaaaaa");
  });

  await test("SANDBOX_METADATA_FIELDS is unchanged", () => {
    assert.deepEqual([...SANDBOX_METADATA_FIELDS], [
      "uid",
      "created_at",
      "updated_at",
      "created_by",
      "_version",
      "publish_details",
    ]);
  });

  await test("canonicalize still sorts keys and preserves array order", () => {
    assert.equal(JSON.stringify(canonicalize({ b: 1, a: 2 })), '{"a":2,"b":1}');
    assert.equal(JSON.stringify(canonicalize([3, 1, 2])), "[3,1,2]");
  });

  await test("stripNestedKeys preserves array order", () => {
    assert.deepEqual(stripNestedKeys([{ a: 1, _metadata: {} }, { a: 2 }], ["_metadata"]), [{ a: 1 }, { a: 2 }]);
  });

  console.log("\nfingerprint");

  await test("stable across key reordering", () => {
    const a: ContentstackEntry = { uid: "u", title: "T", url: "/u" };
    const b: ContentstackEntry = { url: "/u", title: "T", uid: "u" };
    assert.equal(diffFingerprint(a), diffFingerprint(b));
  });

  await test("stable whether or not promotion tags are present", () => {
    const bare = entry();
    const tagged = entry({ tags: ["pr-439", sandboxUidTag("x"), srcHashTag("deadbeefdead")] });
    assert.equal(diffFingerprint(bare), diffFingerprint(tagged));
  });

  await test("is 12 lowercase hex characters", () => {
    assert.match(diffFingerprint(entry()), /^[0-9a-f]{12}$/);
  });

  await test("its tag is 21 chars, inside the stack's 50-char cap", () => {
    const tag = srcHashTag(diffFingerprint(entry()));
    assert.equal(tag.length, 21);
    assert.ok(tag.length <= 50, "tag must fit the 50-character per-tag limit");
  });

  await test("differs when authored content differs", () => {
    assert.notEqual(diffFingerprint(entry()), diffFingerprint(entry({ title: "[Assets] - Something else" })));
  });

  await test("withSrcHashTag replaces a stale hash rather than appending", () => {
    const tags = withSrcHashTag(["pr-439", srcHashTag("aaaaaaaaaaaa")], "bbbbbbbbbbbb");
    assert.deepEqual(tags, ["pr-439", srcHashTag("bbbbbbbbbbbb")]);
    assert.equal(extractSrcHashFromTags(tags), "bbbbbbbbbbbb");
  });

  console.log("\nconflict guard");

  const enforce = { mode: "enforce" as const, force: false };

  await test("no Prod entry means create", () => {
    assert.equal(evaluatePromotionGuard(entry(), null, enforce).action, "create");
  });

  await test("equal content means skip", () => {
    assert.equal(evaluatePromotionGuard(entry(), entry(), enforce).action, "skip");
  });

  await test("differs but fingerprint matches Prod means update (promotion echo)", () => {
    const prodContent = entry({ title: "[Assets] - Older title" });
    const prod = entry({
      title: "[Assets] - Older title",
      tags: ["pr-439", srcHashTag(diffFingerprint(prodContent))],
    });
    const decision = evaluatePromotionGuard(entry(), prod, enforce);
    assert.equal(decision.action, "update");
    assert.equal(decision.forced, undefined);
  });

  await test("differs and fingerprint mismatched means conflict: prod-edited", () => {
    const prod = entry({ title: "[Assets] - Edited in Prod", tags: ["pr-439", srcHashTag("aaaaaaaaaaaa")] });
    const decision = evaluatePromotionGuard(entry(), prod, enforce);
    assert.equal(decision.action, "conflict");
    assert.equal(decision.conflictReason, "prod-edited");
  });

  await test("differs with no fingerprint at all means conflict: no-baseline", () => {
    const prod = entry({ title: "[Assets] - Legacy promoted entry" });
    const decision = evaluatePromotionGuard(entry(), prod, enforce);
    assert.equal(decision.action, "conflict");
    assert.equal(decision.conflictReason, "no-baseline");
  });

  await test("force overrides a prod-edited conflict and records it", () => {
    const prod = entry({ title: "[Assets] - Edited in Prod", tags: ["pr-439", srcHashTag("aaaaaaaaaaaa")] });
    const decision = evaluatePromotionGuard(entry(), prod, { mode: "enforce", force: true });
    assert.equal(decision.action, "update");
    assert.equal(decision.forced, true);
    assert.equal(decision.conflictReason, "prod-edited");
  });

  await test("report mode writes but still records the conflict reason", () => {
    const prod = entry({ title: "[Assets] - Legacy promoted entry" });
    const decision = evaluatePromotionGuard(entry(), prod, { mode: "report", force: false });
    assert.equal(decision.action, "update");
    assert.equal(decision.forced, true);
    assert.equal(decision.conflictReason, "no-baseline");
  });

  await test("force never manufactures a write for equal content", () => {
    const decision = evaluatePromotionGuard(entry(), entry(), { mode: "enforce", force: true });
    assert.equal(decision.action, "skip");
  });

  console.log(`\n${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
