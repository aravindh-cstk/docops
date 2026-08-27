/**
 * Tests for the Prod → GitHub sync.
 *
 * The first four cases are one per original defect, and each asserts the thing
 * the defect actually broke rather than the code path that broke it. That way a
 * future rewrite of the converter still has to satisfy the same contract.
 *
 * Run: npm run test:prod-sync
 */

import { isPublishedTo } from "./lib/environment-index.js";
import {
  authoredTags,
  diffMarkdownFields,
  entryToMarkdown,
  type DocsArticleLike,
} from "./lib/entry-to-markdown.js";
import { crossCheckProduct, findNavPosition, type NavMembership } from "./lib/nav-membership.js";
import { buildSummary, type ChangedFile } from "./cms-pull-prod.js";
import {
  branchFor,
  buildPrBody,
  buildPrTitle,
  isRemovalBundle,
  MAX_BODY_CHARS,
} from "./prod-sync-open-prs.js";
import { articleFileName } from "./lib/nav-shared.js";
import { lintStyle } from "./style-lint.js";
import {
  diffFingerprint,
  extractSrcHashFromTags,
  withSrcHashTag,
} from "./lib/entry-content.js";
import type { PublishedProdEntry } from "./lib/prod-promote-client.js";

interface TestResult {
  id: string;
  scenario: string;
  status: "PASS" | "FAIL";
  notes: string;
}
const results: TestResult[] = [];

function test(id: string, scenario: string, fn: () => string | void): void {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 300) });
    console.log(`FAIL\n     ${msg.slice(0, 300)}`);
  }
}

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

/**
 * Column count for one markdown table row, counting only the pipes that
 * actually divide cells. A `\|` inside a cell is escaped content, not a divider.
 */
function columnCount(row: string): number {
  return row.replace(/\\\|/g, "").split("|").length;
}

/** A docs_article shaped the way the live CMA returns one. */
function sampleEntry(overrides: Partial<DocsArticleLike> = {}): DocsArticleLike {
  return {
    uid: "blt1111111111111111",
    title: "[Assets] - Auto-Populate Tags at Upload",
    url: "/assets/auto-populate-tags-at-upload",
    tags: ["assets", "ai", "product-assets", "pr-482", "sandbox-uid-blt99", "nav-subsection-a/b", "nav-toplevel"],
    seo: {
      title: "Auto-Populate Tags at Upload | Contentstack",
      description:
        "Configure a space so AI writes suggested tags into every new asset as it is uploaded, on the first version, with no review step.",
    },
    article_content: [
      {
        article_section: {
          heading: "Prerequisites",
          content:
            '<p>You need an <strong>Owner</strong> role.</p><p class="note"><strong>Note:</strong> This applies to new uploads only.</p><pre>npm install contentstack</pre>',
          _metadata: { uid: "cs123" },
        },
      },
      {
        article_section: {
          heading: "Steps",
          content: "<ol><li>Open Settings.</li><li>Enable the toggle.</li></ol>",
          _metadata: { uid: "cs456" },
        },
      },
    ],
    ...overrides,
  };
}

// ── Defect 2: the body and description were silently dropped ─────────────────

test("p1", "body comes from article_content, not the non-existent entry.body", () => {
  const md = entryToMarkdown(sampleEntry());
  ok(md !== null, "converter returned null for an entry that has content");

  // The old script read entry.body, which does not exist on docs_article, so
  // every file it wrote had a title and nothing else.
  ok(md!.includes("## Prerequisites"), "first section heading missing");
  ok(md!.includes("## Steps"), "second section heading missing");
  ok(md!.includes("**Owner**"), "inline formatting lost");
  ok(md!.includes("**Note:** This applies to new uploads only."), "callout not round-tripped");
  ok(md!.includes("```"), "code block not fenced");
  // Two spaces after the marker is turndown's output and also this repo's
  // dominant convention (2900 files vs 15), so it is the correct form here.
  ok(md!.includes("1.  Open Settings."), "ordered list lost");

  const bodyLength = md!.split("---")[2]!.trim().length;
  ok(bodyLength > 100, `body suspiciously short (${bodyLength} chars)`);
  return `${bodyLength} chars of body`;
});

test("p2", "description comes from seo.description, not entry.description", () => {
  const md = entryToMarkdown(sampleEntry())!;
  ok(
    md.includes('description: "Configure a space so AI writes suggested tags'),
    "seo.description not used",
  );

  // A top-level entry.description must not win: on this content type it does not
  // exist, and honouring it would reintroduce the original bug.
  const withDecoy = entryToMarkdown(
    sampleEntry({ description: "WRONG top-level description" } as Partial<DocsArticleLike>),
  )!;
  ok(!withDecoy.includes("WRONG top-level"), "a top-level description field leaked into frontmatter");

  // Empty seo.description falls back to the heading rather than writing
  // `description: ""`, which fails the frontmatter schema outright.
  const empty = entryToMarkdown(sampleEntry({ seo: { description: "  " } }))!;
  ok(
    empty.includes('description: "Auto-Populate Tags at Upload"'),
    "empty description did not fall back to the heading",
  );
  return "seo.description + fallback";
});

// ── Defect 3: the "[Marker] - " prefix was never stripped ────────────────────

test("p3", "the [Marker] - prefix is stripped from title and H1, and they match", () => {
  const md = entryToMarkdown(sampleEntry())!;
  ok(!md.includes("[Assets]"), "marker prefix survived into the file");
  ok(md.includes('title: "Auto-Populate Tags at Upload"'), "frontmatter title still prefixed");
  ok(md.includes("\n# Auto-Populate Tags at Upload\n"), "H1 missing or prefixed");

  // lint.ts requires the H1 to be byte-identical to frontmatter title. That is
  // two of the three ways the old output failed lint.
  const title = /^title: "(.+)"$/m.exec(md)![1]!;
  const h1 = /^# (.+)$/m.exec(md)![1]!;
  ok(title === h1, `title "${title}" !== H1 "${h1}"`);
  return `title === H1 === "${h1}"`;
});

// ── Defect 4: tags were never written, so tag-only edits opened no PR ────────

test("p4", "authored tags are written, automation tags are filtered out", () => {
  const md = entryToMarkdown(sampleEntry())!;
  ok(md.includes("tags: "), "no tags line written at all");
  ok(md.includes('"assets"') && md.includes('"ai"'), "authored tags missing");

  for (const noise of ["product-assets", "pr-482", "sandbox-uid-blt99", "nav-subsection-a/b", "nav-toplevel"]) {
    ok(!md.includes(noise), `automation tag "${noise}" leaked into the file`);
  }

  ok(authoredTags(["b", "a", "pr-1"]).length === 2, "authoredTags filter wrong");
  ok(authoredTags(undefined).length === 0, "authoredTags should tolerate a missing field");

  // Sorted, so reordering tags in the CMS does not read as an edit.
  const tagLine = /^tags: \[(.+)\]$/m.exec(md)![1]!;
  ok(tagLine.indexOf('"ai"') < tagLine.indexOf('"assets"'), `tags not sorted: ${tagLine}`);
  return tagLine;
});

test("p5", "an entry with no article content yields null rather than a title-only file", () => {
  ok(entryToMarkdown(sampleEntry({ article_content: [] })) === null, "empty blocks should give null");
  ok(entryToMarkdown(sampleEntry({ article_content: undefined })) === null, "missing field should give null");
  ok(
    entryToMarkdown(sampleEntry({ article_content: [{ article_section: { heading: "", content: "" } }] })) ===
      null,
    "blank section should give null",
  );
  return "null on no content";
});

// ── Defect 1: the environment filter compared a UID to a name ───────────────

test("p6", "isPublishedTo matches a publish record by UID and by name", () => {
  const env = { uid: "bltfe8376c13fe85b9c", name: "production" };

  // The shape the CMA actually returns: environment is a UID. This is the exact
  // comparison that failed, making every scheduled run find zero entries.
  ok(
    isPublishedTo({ publish_details: [{ environment: "bltfe8376c13fe85b9c", version: 4 }] }, env),
    "UID form not matched",
  );
  ok(isPublishedTo({ publish_details: [{ environment: "production" }] }, env), "name form not matched");
  ok(isPublishedTo({ publish_details: { production: { version: 2 } } }, env), "env-keyed form not matched");
  ok(isPublishedTo({ publish_details: { environment: "production" } }, env), "inlined form not matched");

  ok(!isPublishedTo({ publish_details: [{ environment: "blt0000staging" }] }, env), "matched wrong env");
  ok(!isPublishedTo({ publish_details: [] }, env), "matched an empty array");
  ok(!isPublishedTo({}, env), "matched an entry with no publish details");
  return "4 shapes matched, 3 rejected";
});

// ── Echo suppression: telling a promotion write apart from a human edit ─────

test("p21", "a src-hash tag reproduces on untouched content and breaks on an edit", () => {
  // The fingerprint must be taken over the entry as it will exist in Prod,
  // authored tags included: normalizeForDiff strips only the promotion tags, so
  // an authored tag added after fingerprinting would change the answer.
  const promoted = {
    uid: "blt1",
    title: "T",
    url: "/assets/t",
    tags: ["assets"],
    article_content: [{ article_section: { heading: "H", content: "<p>one</p>" } }],
  };

  // What promotion stamps: a fingerprint of the content it just wrote.
  const tagged = { ...promoted, tags: withSrcHashTag(promoted.tags, diffFingerprint(promoted)) };

  // Re-fingerprinting reproduces it, so nobody touched Prod since. This is the
  // echo case, and it must be skipped or one writer action opens two PRs.
  ok(
    extractSrcHashFromTags(tagged.tags) === diffFingerprint(tagged),
    "fingerprint did not survive being stored in a tag on the same entry",
  );

  // A human edit breaks it, which is what makes the edit detectable.
  const edited = { ...tagged, article_content: [{ article_section: { heading: "H", content: "<p>two</p>" } }] };
  ok(
    extractSrcHashFromTags(edited.tags) !== diffFingerprint(edited),
    "an edited entry still matched its promotion fingerprint",
  );

  // No tag at all means no baseline. The caller must fall through rather than
  // treat it as an echo, or a page created directly in Prod would never sync.
  ok(extractSrcHashFromTags(["assets"]) === null, "a tagless entry should report no baseline");
  return "reproduces, breaks on edit, null without a baseline";
});

test("p22", "the src-hash tag is never written into a generated file", () => {
  // It is a hash of the entry's own content, so it changes on every edit.
  // Writing it out would make every edit look like a tag change too, and
  // round-tripping it back would corrupt promotion's conflict baseline.
  const hash = diffFingerprint({ uid: "blt1", title: "T" });
  const md = entryToMarkdown(
    sampleEntry({ tags: ["assets", `src-hash-${hash}`] }),
  )!;
  ok(!md.includes("src-hash-"), "the src-hash tag leaked into the file");
  ok(md.includes('"assets"'), "filtering the hash also dropped the authored tag");
  return "filtered";
});

// ── The nav gate ────────────────────────────────────────────────────────────

function sampleMembership(): NavMembership {
  return {
    byEntryUid: new Map([
      ["blt_by_ref", { chain: ["assets", "create-and-manage-assets"], via: "reference" as const }],
    ]),
    byUrl: new Map([
      ["/marketplace/algolia-app", { chain: ["marketplace", "marketplace-apps"], via: "url" as const }],
    ]),
    navNodeCount: 900,
    warnings: [],
  };
}

test("p7", "nav membership resolves by reference, by url, and rejects orphans", () => {
  const membership = sampleMembership();

  const byRef = findNavPosition(membership, { uid: "blt_by_ref", url: "/assets/anything" });
  ok(byRef?.via === "reference", `reference lookup -> ${byRef?.via}`);
  ok(byRef!.chain.join("/") === "assets/create-and-manage-assets", "wrong chain by reference");

  // Marketplace app guides are only reachable this way. A gate that ignored urls
  // would exclude all 54 of them.
  const byUrl = findNavPosition(membership, { uid: "blt_unknown", url: "/marketplace/algolia-app" });
  ok(byUrl?.via === "url", `url lookup -> ${byUrl?.via}`);

  // Nav urls are authored by hand, so absolute and /docs-prefixed forms must
  // still match an entry's relative url.
  const absolute = findNavPosition(membership, {
    uid: "blt_unknown",
    url: "https://www.contentstack.com/docs/marketplace/algolia-app/",
  });
  ok(absolute?.via === "url", "absolute url form not normalized");

  // Published but unreachable. 58 such entries exist in the live stack, and
  // mirroring them would add pages no reader can navigate to.
  ok(findNavPosition(membership, { uid: "blt_orphan", url: "/assets/orphan" }) === null, "orphan admitted");
  return "reference + url + normalized, orphan rejected";
});

test("p8", "a breadcrumb that disagrees with the nav warns but never rejects", () => {
  const position = { chain: ["assets", "create-and-manage-assets"], via: "reference" as const };
  ok(crossCheckProduct(position, "assets") === null, "agreement should not warn");
  ok(crossCheckProduct(position, null) === null, "no claim should not warn");
  const warning = crossCheckProduct(position, "launch");
  ok(warning !== null && warning.includes("assets") && warning.includes("launch"), "mismatch not reported");
  return "warns on mismatch";
});

// ── Where a page created directly in Prod goes ───────────────────────────────

test("p9", "a new page's filename drops the url's product namespace segment", () => {
  ok(articleFileName("/assets/auto-populate-tags") === "auto-populate-tags.md", "simple url");
  ok(
    articleFileName("/developers/sdks/content-delivery-sdk/php/reference") ===
      "sdks-content-delivery-sdk-php-reference.md",
    "deep urls must not collide on reference.md",
  );
  ok(articleFileName("") === null, "empty url should give null");
  ok(articleFileName(null) === null, "null url should give null");
  return "namespace dropped, deep urls flattened";
});

// ── Field diffing, which drives the PR body ─────────────────────────────────

const BASE_FILE = `---
title: "A Page"
description: "A description that is long enough to be plausible for these tests."
url: /assets/a-page
uid: blt1
tags: ["one", "two"]
---

# A Page

Body text here.
`;

test("p10", "diffMarkdownFields reports only what actually changed", () => {
  ok(diffMarkdownFields(BASE_FILE, BASE_FILE).length === 0, "identical files reported as changed");

  const tagOnly = BASE_FILE.replace('tags: ["one", "two"]', 'tags: ["one", "three"]');
  const tagFields = diffMarkdownFields(BASE_FILE, tagOnly);
  ok(tagFields.length === 1 && tagFields[0] === "tags", `tag-only -> ${tagFields.join(",")}`);

  const bodyOnly = BASE_FILE.replace("Body text here.", "Body text, revised.");
  const bodyFields = diffMarkdownFields(BASE_FILE, bodyOnly);
  ok(bodyFields.length === 1 && bodyFields[0] === "body", `body-only -> ${bodyFields.join(",")}`);

  // Reordered tags are the same tags. Reporting them as an edit would open PRs
  // with no visible diff.
  const reordered = BASE_FILE.replace('tags: ["one", "two"]', 'tags: ["two", "one"]');
  ok(diffMarkdownFields(BASE_FILE, reordered).length === 0, "tag reordering counted as a change");

  const created = diffMarkdownFields(null, BASE_FILE);
  ok(created.includes("body") && created.includes("title"), "new page should report every field");
  return "tags / body / reorder / new";
});

// ── Bundling: one PR per editor ─────────────────────────────────────────────

function change(filePath: string, entryUid: string, kind: ChangedFile["changeKind"] = "updated"): ChangedFile {
  return {
    filePath,
    entryUid,
    url: `/assets/${entryUid}`,
    navChain: ["assets"],
    changeKind: kind,
    fieldsModified: ["body"],
    updatedAt: "2026-08-26T10:00:00.000Z",
  };
}

function pub(uid: string, updatedBy: string): PublishedProdEntry {
  return {
    uid,
    title: uid,
    publishedVersion: 1,
    entry: { uid, updated_by: updatedBy },
    unresolved: false,
  };
}

test("p11", "five entries from one editor bundle into a single PR", () => {
  const changes = [1, 2, 3, 4, 5].map((n) => change(`cs-docs/assets/page-${n}.md`, `blt${n}`));
  const published = changes.map((c) => pub(c.entryUid, "editor_a"));

  const summary = buildSummary(changes, published, "production", {});
  ok(summary.bundles.length === 1, `expected 1 bundle, got ${summary.bundles.length}`);
  ok(summary.bundles[0]!.files.length === 5, `expected 5 files, got ${summary.bundles[0]!.files.length}`);
  return "1 PR, 5 files";
});

test("p12", "two editors get one bundle each, with distinct branch slugs", () => {
  const changes = [change("cs-docs/assets/a.md", "blt1"), change("cs-docs/launch/b.md", "blt2")];
  const published = [pub("blt1", "editor_a"), pub("blt2", "editor_b")];

  const summary = buildSummary(changes, published, "production", {});
  ok(summary.bundles.length === 2, `expected 2 bundles, got ${summary.bundles.length}`);

  const slugs = new Set(summary.bundles.map((b) => b.branchSlug));
  ok(slugs.size === 2, `branch slugs collided: ${[...slugs].join(", ")}`);
  for (const slug of slugs) ok(/^[a-z0-9-]+$/.test(slug), `slug "${slug}" is not branch-safe`);
  return [...slugs].join(", ");
});

test("p13", "one editor's changes across products stay in one bundle", () => {
  const changes = [
    change("cs-docs/assets/a.md", "blt1"),
    change("cs-docs/launch/b.md", "blt2"),
    change("cs-docs/administration/c.md", "blt3"),
  ];
  const published = changes.map((c) => pub(c.entryUid, "editor_a"));
  const summary = buildSummary(changes, published, "production", {});
  ok(summary.bundles.length === 1, `expected 1 bundle across 3 products, got ${summary.bundles.length}`);
  return "3 products, 1 PR";
});

test("p14", "removals go in their own bundle, never attributed to an editor", () => {
  const changes = [
    change("cs-docs/assets/a.md", "blt1"),
    change("cs-docs/assets/gone.md", "blt9", "deleted"),
  ];
  const summary = buildSummary(changes, [pub("blt1", "editor_a")], "production", {});
  ok(summary.bundles.length === 2, `expected 2 bundles, got ${summary.bundles.length}`);

  const removal = summary.bundles.find((b) => b.files.some((f) => f.changeKind === "deleted"))!;
  ok(removal.files.length === 1, "removal bundle should hold only the removal");
  ok(!removal.editorName.includes("editor_a"), "removal attributed to an editor");
  return removal.editorName;
});

// ── Reusing an editor's open PR ─────────────────────────────────────────────

test("p23", "an editor's branch slug is identical across runs, whoever else edited", () => {
  // Two display names that slugify the same way. The old collision suffix was
  // assigned by encounter order within a run, so editor_a's slug moved when a
  // colliding editor appeared, and the next run could not find their open PR.
  const alone = buildSummary(
    [change("cs-docs/assets/a.md", "blt1")],
    [pub("blt1", "editor_a")],
    "production",
    {},
  );
  // The colliding editor is listed first on purpose: that is what pushed
  // editor_a onto the "-2" suffix under the old encounter-order scheme.
  const crowded = buildSummary(
    [change("cs-docs/launch/b.md", "blt2"), change("cs-docs/assets/a.md", "blt1")],
    [pub("blt2", "editor_a "), pub("blt1", "editor_a")],
    "production",
    {},
  );

  const first = alone.bundles.find((b) => b.editorUid === "editor_a")!;
  const second = crowded.bundles.find((b) => b.editorUid === "editor_a")!;
  ok(
    first.branchSlug === second.branchSlug,
    `slug moved between runs: "${first.branchSlug}" then "${second.branchSlug}"`,
  );
  for (const bundle of crowded.bundles) {
    ok(/^[a-z0-9-]+$/.test(bundle.branchSlug), `slug "${bundle.branchSlug}" is not branch-safe`);
  }
  return first.branchSlug;
});

test("p24", "the branch name carries no per-run timestamp", () => {
  const summary = buildSummary(
    [change("cs-docs/assets/a.md", "blt1")],
    [pub("blt1", "editor_a")],
    "production",
    {},
  );
  const bundle = summary.bundles[0]!;
  const branch = branchFor(bundle);

  ok(
    branch === `cms-sync/prod-csdocs/${bundle.branchSlug}`,
    `unexpected branch name "${branch}"`,
  );
  // A stamp looked like 20260826-100000. Any run of 8+ digits would reintroduce
  // a per-run branch, which silently disables PR reuse.
  ok(!/\d{8,}/.test(branch), `branch "${branch}" looks like it carries a timestamp`);
  return branch;
});

test("p25", "an oversized backlog still produces a PR body inside GitHub's limit", () => {
  // GitHub rejects a body over 65536 chars outright, so this editor used to get
  // no PR at all rather than a truncated one.
  const changes = Array.from({ length: 800 }, (_, n) =>
    change(`cs-docs/assets/a-very-long-directory-name/another-nested-folder/page-${n}.md`, `blt${n}`),
  );
  const published = changes.map((c) => pub(c.entryUid, "editor_a"));
  const summary = buildSummary(changes, published, "production", {});
  const body = buildPrBody(summary.bundles[0]!, summary);

  ok(body.length <= MAX_BODY_CHARS, `body is ${body.length} chars, over the ${MAX_BODY_CHARS} cap`);
  ok(body.includes("more files"), "no notice that files were omitted");
  ok(body.includes("Files changed"), "omission notice does not point at the diff");
  return `${body.length} chars for 800 files`;
});

// ── The PR body ────────────────────────────────────────────────────────────

test("p15", "the PR body reports entry, change, fields modified and time", () => {
  const changes = [change("cs-docs/assets/a.md", "blt1"), change("cs-docs/assets/new.md", "blt2", "created")];
  changes[1]!.warning = "nav places this entry under \"assets\" but its breadcrumb claims \"launch\"";
  const summary = buildSummary(changes, [pub("blt1", "editor_a"), pub("blt2", "editor_a")], "production", {});
  const body = buildPrBody(summary.bundles[0]!, summary);

  ok(body.includes("cs-docs/assets/a.md"), "file path missing");
  ok(body.includes("/assets/blt1"), "CMS entry url missing");
  ok(body.includes("body"), "fields modified missing");
  ok(body.includes("new page"), "a created page should be labelled, not diffed");
  ok(body.includes("2026"), "modified-at missing");
  ok(body.includes("### Warnings"), "breadcrumb warning not surfaced");

  // Every table row must have the same column count as the header.
  const rows = body.split("\n").filter((line) => line.startsWith("|"));
  const widths = new Set(rows.map(columnCount));
  ok(widths.size === 1, `ragged table columns: ${[...widths].join(", ")}`);
  return `${rows.length} table rows`;
});

test("p16", "a pipe in a value cannot break the table layout", () => {
  const changes = [change("cs-docs/assets/a|b.md", "blt1")];
  const summary = buildSummary(changes, [pub("blt1", "editor_a")], "production", {});
  const body = buildPrBody(summary.bundles[0]!, summary);
  ok(body.includes("a\\|b.md"), "the pipe was not escaped");
  const rows = body.split("\n").filter((line) => line.startsWith("|"));
  const widths = new Set(rows.map(columnCount));
  ok(widths.size === 1, `a pipe in a path broke the table: ${[...widths].join(", ")}`);
  return "escaped";
});

test("p20", "the removal bundle's PR is not titled as somebody's edit", () => {
  const changes = [
    change("cs-docs/assets/a.md", "blt1"),
    change("cs-docs/assets/gone.md", "blt9", "deleted"),
  ];
  const summary = buildSummary(changes, [pub("blt1", "editor_a")], "production", {});

  const editBundle = summary.bundles.find((b) => !isRemovalBundle(b))!;
  ok(buildPrTitle(editBundle).startsWith("CMS Edit detected by "), "edit title format changed");

  // Nobody edited anything here, so naming an editor would attribute a deletion
  // to whoever last touched the entry.
  const removalBundle = summary.bundles.find((b) => isRemovalBundle(b))!;
  const title = buildPrTitle(removalBundle);
  ok(!title.includes("Edit detected by"), `removal titled as an edit: ${title}`);
  ok(title.includes("removal"), `removal title unclear: ${title}`);

  const body = buildPrBody(removalBundle, summary);
  ok(body.includes("Files removed"), "removal body should not say 'Entries modified'");
  ok(body.includes("Confirm each removal is intended"), "removal body lacks its safety note");
  return title;
});

// ── The lint contract a generated file has to satisfy ───────────────────────
//
// These live here rather than in a style-lint suite because they exist to serve
// this sync's acceptance bar: a generated file must pass `npm run lint` with no
// manual editing. The double-spaces rule used to flag every run of two or more
// spaces anywhere, which meant every list marker the converter emits (and every
// nested list in the 13871 cs-docs files that use the same convention) failed
// lint. Any doc with a list could not go green, whoever wrote it.

test("p17", "list markers and indentation do not trip the double-spaces rule", () => {
  const layoutOnly = [
    ["wide bullet marker", "# T\n\n-   Alpha\n-   Beta\n"],
    ["wide ordered marker", "# T\n\n1.  Alpha\n2.  Beta\n"],
    ["nested bullets", "# T\n\n-   Outer\n    -   Inner\n        -   Deeper\n"],
    ["nested ordered", "# T\n\n1.  One\n    1.  One A\n"],
    ["indented continuation paragraph", "# T\n\n-   First para\n\n    Second para\n"],
    ["single-space bullet", "# T\n\n- Alpha\n"],
  ] as const;

  for (const [name, body] of layoutOnly) {
    const flagged = lintStyle(body, "x.md", "cs-docs").filter((e) => e.includes("double spaces"));
    ok(flagged.length === 0, `${name} was flagged: ${flagged[0]}`);
  }
  return `${layoutOnly.length} layout forms accepted`;
});

test("p18", "genuine prose double spaces are still caught, including inside list items", () => {
  const shouldFlag = [
    ["after a period", "# T\n\nThis is one.  This is two.\n"],
    ["mid-sentence", "# T\n\nHello  world.\n"],
    ["inside a list item", "# T\n\n-   Alpha  beta\n"],
    ["inside a nested list item", "# T\n\n-   Outer\n    -   Inner  text\n"],
  ] as const;

  for (const [name, body] of shouldFlag) {
    const flagged = lintStyle(body, "x.md", "cs-docs").filter((e) => e.includes("double spaces"));
    ok(flagged.length > 0, `${name} was not caught`);
  }
  return `${shouldFlag.length} prose cases caught`;
});

test("p19", "a full generated file passes every style rule", () => {
  const md = entryToMarkdown(sampleEntry())!;
  // The body only, since lintStyle is given the post-frontmatter content.
  const body = md.split(/^---$/m).slice(2).join("---");
  const errors = lintStyle(body, "cs-docs/assets/x.md", "cs-docs");
  ok(errors.length === 0, `${errors.length} style error(s), first: ${errors[0]}`);
  return "clean";
});

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
