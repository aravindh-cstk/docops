/**
 * The one place a CMS docs_article entry becomes a markdown file.
 *
 * Three of the four Prod → GitHub sync defects were the same defect: this
 * conversion was written three times (cms-pull.ts, cms-pull-sandbox.ts,
 * nav-apply.ts) and only the nav-apply.ts copy was ever correct. cms-pull-prod.ts
 * read `entry.body` (a field docs_article does not have) and
 * `entry.description` (the content lives at seo.description), never called
 * parseTitle to strip the "[Marker] - " prefix, and never wrote tags. The result
 * passed no lint rule and every PR it produced was unmergeable.
 *
 * So this module is the shared converter, and the other three import it. There
 * is nowhere left for the copies to drift apart.
 *
 * What the CMS holds, and where it goes:
 *
 *   entry.title                                 -> frontmatter title + the H1
 *   entry.seo.description                       -> frontmatter description
 *   entry.url                                   -> frontmatter url
 *   entry.uid                                   -> frontmatter uid (ownership marker)
 *   entry.tags                                  -> frontmatter tags (authored ones only)
 *   entry.article_content[].article_section     -> "## heading" + converted HTML
 *
 * The HTML conversion itself is html-to-md.ts and needs no changes: it already
 * round-trips the callout classes transform.ts emits, handles Contentstack's
 * bare <pre> code blocks and its lazy-loaded data-src/srcset images, and
 * unescapes brackets in headings and dashes in table cells.
 */

import matter from "gray-matter";
import { extractSections } from "../cda-fetch.js";
import { htmlToMarkdown } from "../html-to-md.js";
import { cleanTitle } from "./nav-shared.js";

/**
 * Tag prefixes this pipeline's own automation writes. They are bookkeeping, not
 * authored content, so they never reach a file: round-tripping them would make
 * every promotion look like a writer edit.
 *
 *   sandbox-uid-*    written by the Sandbox → Prod promotion (entry-content.ts)
 *   src-hash-*       written by the same promotion as its conflict fingerprint
 *   pr-*             written by the GitHub → Sandbox push (git-to-sandbox-sync.ts)
 *   nav-subsection-* written by the same push to carry nav placement
 *   product-*        written by the same push to carry the product slug
 *   nav-toplevel     written by the same push for product-root pages
 *
 * src-hash-* matters most here. It is a hash of the entry's own content, so it
 * changes on every edit. Writing it into a file would make every single edit
 * look like a tag change as well, and round-tripping it back to the CMS would
 * corrupt the baseline that promotion's conflict guard depends on.
 */
export const AUTOMATION_TAG_PREFIXES = [
  "sandbox-uid-",
  "src-hash-",
  "pr-",
  "nav-subsection-",
  "product-",
];
export const AUTOMATION_TAGS = new Set(["nav-toplevel"]);

/** The fields a reader of a generated file can meaningfully see change. */
export type MarkdownField = "title" | "description" | "url" | "tags" | "body";

export interface DocsArticleLike {
  uid: string;
  title?: unknown;
  url?: unknown;
  tags?: unknown;
  seo?: unknown;
  article_content?: unknown;
  [key: string]: unknown;
}

export interface EntryMarkdownOptions {
  /**
   * The entry's CURRENT url, when it can differ from the url on the version
   * being rendered. A rename that is drafted but not yet published leaves the
   * published version holding the old url, and the reverse sync resolves a file
   * back to its entry by querying that url, so the live one has to win. Seven
   * CLI pages were written with mismatched url/filename before this existed.
   */
  urlOverride?: string | null;
  /**
   * Write the `uid:` frontmatter marker. On by default: the delete pass only
   * ever touches files carrying it, so a hand-authored file that happens to
   * share a url is never at risk.
   */
  stampUid?: boolean;
  /**
   * Write authored `tags:`. On by default, because a tag-only edit has to
   * produce a visible file change or no PR opens for it.
   *
   * nav-apply.ts turns both this and stampUid off: it rewrites the entire
   * 1500-file tree in one pass, and adding two new frontmatter keys to every
   * file at once is a change of its own that belongs in its own commit.
   */
  includeTags?: boolean;
}

function escapeForFrontmatter(value: string): string {
  return value.replace(/"/g, '\\"');
}

/** The authored tags on an entry, with this pipeline's bookkeeping removed. */
export function authoredTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) return [];
  return tags.filter(
    (tag): tag is string =>
      typeof tag === "string" &&
      tag.length > 0 &&
      !AUTOMATION_TAGS.has(tag) &&
      !AUTOMATION_TAG_PREFIXES.some((prefix) => tag.startsWith(prefix)),
  );
}

/** The body markdown for an entry: "## heading" per section, converted HTML under it. */
export function buildBody(entry: DocsArticleLike): string {
  const sections = extractSections(entry as { article_content?: unknown });
  const parts: string[] = [];
  for (const section of sections) {
    if (section.heading.trim()) parts.push(`## ${section.heading.trim()}`);
    const converted = htmlToMarkdown(section.content).trim();
    if (converted) parts.push(converted);
  }
  return parts.join("\n\n");
}

/**
 * Render a docs_article entry as a complete markdown file, or null when the
 * entry holds no content.
 *
 * Returning null rather than an empty file is deliberate. An entry with no
 * article_content blocks is either a nav placeholder or an entry whose content
 * failed to fetch, and writing a title-only file for it is exactly the bug that
 * made the old PRs unmergeable: it looks like real content and lints as a
 * missing body.
 *
 * Everything the lint rules require is emitted here, so a generated file passes
 * `npm run lint` unedited:
 *   - `description` is present and non-empty (parser.ts frontMatterSchema)
 *   - an H1 exists (lint.ts lintDocsArticleRules)
 *   - that H1 is byte-identical to frontmatter `title` (same rule)
 */
export function entryToMarkdown(
  entry: DocsArticleLike,
  options: EntryMarkdownOptions = {},
): string | null {
  const sections = extractSections(entry as { article_content?: unknown });
  if (sections.length === 0) return null;

  const body = buildBody(entry);
  if (!body.trim()) return null;

  // cleanTitle strips the "[Assets] - " prefix the GitHub → Sandbox push adds so
  // the marker survives round trips inside the CMS. Leaving it in produced
  // `title: "[Assets] - My Page"`, which then failed the title/H1 match rule
  // against the H1 that a human would write.
  const heading = cleanTitle(entry.title as string | undefined);

  // docs_article's description is at seo.description. An empty one writes
  // `description: ""`, which fails the frontmatter schema outright, so fall back
  // to the heading: a weaker summary, but a valid one that keeps the file
  // syncable until an author fills the field in.
  const seo = entry.seo as { description?: unknown } | undefined;
  const description = String(seo?.description ?? "").trim() || heading;

  const url = options.urlOverride ?? (entry.url as string | undefined) ?? "";

  const lines = ["---", `title: "${escapeForFrontmatter(heading)}"`];
  lines.push(`description: "${escapeForFrontmatter(description)}"`);
  lines.push(`url: ${url}`);
  if (options.stampUid !== false && entry.uid) lines.push(`uid: ${entry.uid}`);

  // A tag-only edit has to produce a visible file change, otherwise no PR opens
  // for it and the change is lost. Emitted sorted so tag reordering in the CMS
  // does not read as an edit.
  const tags = options.includeTags === false ? [] : authoredTags(entry.tags).slice().sort();
  if (tags.length > 0) {
    lines.push(`tags: [${tags.map((tag) => JSON.stringify(tag)).join(", ")}]`);
  }

  lines.push("---");

  return `${lines.join("\n")}\n\n# ${heading}\n\n${body}\n`;
}

function normalizeTagsForDiff(value: unknown): string {
  if (!Array.isArray(value)) return "";
  return value
    .filter((tag): tag is string => typeof tag === "string")
    .slice()
    .sort()
    .join(" ");
}

/**
 * Which fields differ between two markdown files.
 *
 * Drives the "fields modified" column in the PR body. Derived from the actual
 * before/after text rather than from a stored snapshot of CMS state, so there is
 * no side file to keep in sync and no way for the reported fields to disagree
 * with the diff a reviewer is looking at.
 *
 * An absent `previous` means the page is new, reported as every field present.
 */
export function diffMarkdownFields(previous: string | null, next: string): MarkdownField[] {
  const after = matter(next);

  if (previous === null) {
    const fields: MarkdownField[] = ["title", "description", "url"];
    if (normalizeTagsForDiff(after.data.tags)) fields.push("tags");
    fields.push("body");
    return fields;
  }

  let before: matter.GrayMatterFile<string>;
  try {
    before = matter(previous);
  } catch {
    // Malformed frontmatter on disk. Everything is reportable as changed, which
    // is honest: we cannot say which parts were already correct.
    return ["title", "description", "url", "tags", "body"];
  }

  const changed: MarkdownField[] = [];
  const scalar: Array<[MarkdownField, keyof typeof before.data]> = [
    ["title", "title"],
    ["description", "description"],
    ["url", "url"],
  ];

  for (const [field, key] of scalar) {
    if (String(before.data[key] ?? "") !== String(after.data[key] ?? "")) changed.push(field);
  }

  if (normalizeTagsForDiff(before.data.tags) !== normalizeTagsForDiff(after.data.tags)) {
    changed.push("tags");
  }

  if (before.content.trim() !== after.content.trim()) changed.push("body");

  return changed;
}
