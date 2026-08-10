/**
 * Field mapping for product_faqs_2026, a fundamentally different shape from
 * docs_article: one CMS entry holds many nested FAQs spread across many
 * local files, not a 1:1 file-to-entry mapping. A single question edit
 * still means rebuilding and writing the entry's whole faqs_section array
 * fresh from everything currently on disk under that container's folder,
 * there's no meaningful way to patch one nested array element in isolation
 * without risking drift between what's on disk and what's live.
 *
 * Only the 4 containers linked from Headless CMS's Support & Troubleshooting
 * section are verified this round (their Sandbox uids confirmed live,
 * "Headless CMS FAQs" and "Headless CMS Troubleshooting Guides" cloned from
 * Prod into Sandbox since they didn't exist there yet). Any other folder
 * under troubleshooting-and-faqs/ returns null, callers must skip rather
 * than guess, same pattern as docs-article.ts's resolveProductConfig.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { markdownToHtml } from "../../transform.js";
import { htmlToJsonRte, type RteOutNode } from "../html-to-json-rte.js";

export interface FaqContainerConfig {
  sandboxUid: string;
}

const FAQ_CONTAINERS: Record<string, FaqContainerConfig> = {
  "headless-cms-faqs": { sandboxUid: "blt4baa29a18cdc5a2c" },
  "headless-cms-troubleshooting-guides": { sandboxUid: "blt76353d77c4e8910e" },
  "sdk-troubleshooting-guides": { sandboxUid: "bltb7912d2b60ba974f" },
  "cli-troubleshooting-guides": { sandboxUid: "bltc15edadfe9458903" },
};

/** Null means "not a verified container", callers must skip, not guess. */
export function resolveFaqContainer(containerSlug: string): FaqContainerConfig | null {
  return FAQ_CONTAINERS[containerSlug] ?? null;
}

const FAQS_SUBTREE = "troubleshooting-and-faqs";

/**
 * Extracts the container slug from a path under
 * <docsRoot>/headless-cms/troubleshooting-and-faqs/<container-slug>/..., or
 * null if the path isn't under that subtree at all (the common case, this
 * runs against every changed file, not just FAQ ones).
 */
export function faqContainerSlugFromPath(relativePath: string, docsRoot: string): string | null {
  const prefix = `${docsRoot}/`;
  const stripped = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
  const segments = stripped.split("/");
  const subtreeIdx = segments.indexOf(FAQS_SUBTREE);
  if (subtreeIdx === -1) return null;
  return segments[subtreeIdx + 1] ?? null;
}

interface ParsedFaqFile {
  sectionSlug: string;
  order: number;
  question: string;
  answerHtml: string;
  cmsSectionUid: string | null;
  cmsFaqUid: string | null;
}

const ORDER_PREFIX_RE = /^(\d+)-/;

function parseOrderPrefix(name: string): number {
  const match = name.match(ORDER_PREFIX_RE);
  return match ? parseInt(match[1]!, 10) : Number.MAX_SAFE_INTEGER;
}

function parseFaqFile(absolutePath: string, sectionSlug: string): ParsedFaqFile | null {
  const raw = fs.readFileSync(absolutePath, "utf8");
  const { data, content } = matter(raw);
  const question = typeof data.title === "string" ? data.title : null;
  if (!question) return null;

  const filename = path.basename(absolutePath, ".md");
  const orderMatch = filename.match(ORDER_PREFIX_RE);
  const order = orderMatch ? parseInt(orderMatch[1]!, 10) : Number.MAX_SAFE_INTEGER;

  // Body is "# Question\n\n<answer markdown>", strip the H1 the same way
  // extractH1's "rest" does for docs_article.
  const rest = content.replace(/^#[^\n]*\n+/, "").trim();

  return {
    sectionSlug,
    order,
    question,
    answerHtml: markdownToHtml(rest),
    cmsSectionUid: typeof data._cms_section_uid === "string" && data._cms_section_uid ? data._cms_section_uid : null,
    cmsFaqUid: typeof data._cms_faq_uid === "string" && data._cms_faq_uid ? data._cms_faq_uid : null,
  };
}

// Mirrors backfill-headless-cms-faqs.ts's slugify, used only to compare an
// existing heading/question against a folder slug for the text-match
// fallback below, never written anywhere.
function normalizeForMatch(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export interface ExistingFaqsSection {
  heading: string;
  _metadata?: { uid: string };
  faqs: Array<{ question: string; answer: unknown; _metadata?: { uid: string } }>;
}

export interface RebuiltFaqsSection {
  heading: string;
  _metadata?: { uid: string };
  faqs: Array<{
    question: string;
    answer: RteOutNode;
    _metadata?: { uid: string };
  }>;
}

/**
 * Walks a container's entire folder tree on disk and rebuilds its
 * faqs_section array from scratch. Section headings and per-item block uids
 * are preserved by matching against the CURRENT live entry's sections
 * (passed in by the caller, fetched fresh right before this call) rather
 * than reconstructed from the folder slug, which would lose real casing and
 * punctuation. A section with no match in the existing entry is treated as
 * brand new, its heading is the best-effort title-cased folder slug.
 */
export function rebuildFaqsSectionFromFolder(
  containerDir: string,
  existingSections: ExistingFaqsSection[],
): RebuiltFaqsSection[] {
  const existingBySectionUid = new Map(
    existingSections.filter((s) => s._metadata?.uid).map((s) => [s._metadata!.uid, s]),
  );
  // Fallback for content whose Sandbox entry wasn't cloned from the same
  // source the local files' _cms_section_uid/_cms_faq_uid were captured
  // from (confirmed live: "SDK Troubleshooting Guides" already existed in
  // Sandbox independently of this backfill, so its real block uids never
  // match the Prod-sourced ones stored in the files, even though the text
  // content is identical). Matching by normalized heading text at least
  // recovers the correct display text instead of falling back to a
  // slug-reconstructed heading that drops real punctuation.
  const existingBySlugifiedHeading = new Map(existingSections.map((s) => [normalizeForMatch(s.heading), s]));

  // Section folder names carry the same numeric order prefix FAQ filenames
  // do (see backfill-headless-cms-faqs.ts), sort by it explicitly rather
  // than relying on readdir's alphabetical order, which silently reordered
  // sections on the first live write-back test (a folder starting with "A"
  // sorted ahead of one starting with "I" regardless of the CMS's real
  // curated order).
  const sectionEntries = fs.existsSync(containerDir)
    ? fs.readdirSync(containerDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
    : [];
  const sectionSlugs = sectionEntries
    .map((slug) => ({ slug, order: parseOrderPrefix(slug) }))
    .sort((a, b) => a.order - b.order)
    .map((s) => s.slug);

  const rebuilt: RebuiltFaqsSection[] = [];

  for (const sectionSlug of sectionSlugs) {
    const sectionDir = path.join(containerDir, sectionSlug);
    const files = fs.readdirSync(sectionDir).filter((f) => f.endsWith(".md"));

    const parsed = files
      .map((f) => parseFaqFile(path.join(sectionDir, f), sectionSlug))
      .filter((p): p is ParsedFaqFile => p !== null)
      .sort((a, b) => a.order - b.order);

    if (parsed.length === 0) continue;

    const sectionUidVotes = parsed.map((p) => p.cmsSectionUid).filter((u): u is string => u !== null);
    const sectionUid = sectionUidVotes[0] ?? null;
    const bareSlug = sectionSlug.replace(ORDER_PREFIX_RE, "");
    const existingByUid = sectionUid ? existingBySectionUid.get(sectionUid) : undefined;
    const existingByText = existingBySlugifiedHeading.get(normalizeForMatch(bareSlug));
    const existing = existingByUid ?? existingByText;

    const heading = existing?.heading ?? titleCaseSlug(bareSlug);
    // The uid is only reused when it genuinely matched, a text-only match
    // means this Sandbox entry's block has a different real uid, writing
    // back the Prod-sourced uid here would be worse than omitting it,
    // Contentstack would silently misattach the new content to whatever
    // unrelated block already holds that uid.
    const resolvedSectionUid = existingByUid ? sectionUid : undefined;
    const existingFaqsByUid = new Map(
      (existing?.faqs ?? []).filter((f) => f._metadata?.uid).map((f) => [f._metadata!.uid, f]),
    );

    rebuilt.push({
      heading,
      ...(resolvedSectionUid ? { _metadata: { uid: resolvedSectionUid } } : {}),
      faqs: parsed.map((p) => {
        const rte = htmlToJsonRte(p.answerHtml);
        const matchedByUid = p.cmsFaqUid ? existingFaqsByUid.get(p.cmsFaqUid) : undefined;
        const matchedFaqUid = matchedByUid?._metadata?.uid;
        // Same reasoning as the section uid above, only reuse a faq's uid
        // when the id itself matched, a question-text match still confirms
        // this is the same logical FAQ (useful for the heading fallback
        // path above), but not proof it's the same numbered block.
        const resolvedFaqUid = matchedByUid && p.cmsFaqUid ? matchedFaqUid : undefined;
        return {
          question: p.question,
          answer: rte,
          ...(resolvedFaqUid ? { _metadata: { uid: resolvedFaqUid } } : {}),
        };
      }),
    });
  }

  return rebuilt;
}
