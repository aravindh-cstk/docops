import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Valid first segments of a docs url. These are CMS url namespaces, not
 * cs-docs folder names, and the two no longer line up one-to-one: the folder
 * tree mirrors the left navigation while urls stayed where they were. Lytics
 * CDP articles live in cs-docs/lytics-cdp/ but keep /lytics/ urls, and
 * Developer Resources articles live in cs-docs/developer-resources/ while their
 * urls are /developers/ or the product they were authored under.
 */
export const PRODUCT_NAMES = new Set([
  "content-managers",
  "headless-cms",
  "personalize",
  "data-and-insights",
  "studio",
  "agent-os",
  "assets",
  "brand-kit",
  "launch",
  "developer-hub",
  "administration",
  "analytics",
  "marketplace",
  "lytics",
  "lytics-cdp",
  "developers",
  "developer-resources",
  "data-and-insights-lytics",
  "introducing-the-new-contentstack",
]);

const VALID_PRODUCTS = [...PRODUCT_NAMES].join(", ");

// Compound prefixes accepted in addition to a single PRODUCT_NAMES segment — for
// content that lives under a namespaced sub-path rather than a top-level product.
const COMPOUND_URL_PREFIXES = ["developers/sdks"];

function hasValidUrlPrefix(u: string): boolean {
  const segments = u.split("/").slice(1);
  if (PRODUCT_NAMES.has(segments[0] ?? "")) return true;
  return COMPOUND_URL_PREFIXES.some((prefix) => u.startsWith(`/${prefix}/`));
}

export const frontMatterSchema = z.object({
  title: z
    .string({ required_error: "Missing required frontmatter field 'title' — add: title: Your Article Title" })
    .min(1, { message: "Missing required frontmatter field 'title' — add: title: Your Article Title" }),
  description: z
    .string({ required_error: "Missing required frontmatter field 'description' — add: description: A one or two sentence summary" })
    .min(1, { message: "Missing required frontmatter field 'description' — add: description: A one or two sentence summary" }),
  url: z
    .string({ required_error: "Missing required frontmatter field 'url' — add: url: /personalize/your-article-slug" })
    .min(1, { message: "Missing required frontmatter field 'url' — add: url: /personalize/your-article-slug" }),
  doc_type: z.string().optional(),
}).superRefine((fm, ctx) => {
  // doc_type: link marks a navigation pointer, written for a links_2026 node
  // that carries a url and no article of its own. It is never synced to the
  // CMS as a docs_article, and it deliberately points wherever the nav points:
  // an external site, a section anchor, or API reference in another stack.
  // Holding it to the article url rules would fail it for doing its job.
  if (fm.doc_type === "link") return;

  const u = fm.url;
  const fail = (message: string) =>
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["url"], message });

  if (u.startsWith("http://") || u.startsWith("https://")) {
    fail("Invalid 'url' — must be a relative path, not a full URL (e.g. /personalize/about-personalize)");
  }
  if (!u.startsWith("/")) {
    fail("Invalid 'url' — must start with / (e.g. /personalize/about-personalize)");
  }
  if (!hasValidUrlPrefix(u)) {
    fail(
      `Invalid 'url' — first segment must be a known product name (e.g. /personalize/about-personalize) or one of: ${COMPOUND_URL_PREFIXES.join(", ")}. Valid products: ${VALID_PRODUCTS}`,
    );
  }
  if (u.endsWith("/")) {
    fail("Invalid 'url' — must not end with a trailing slash (remove the trailing /)");
  }
});

export type DocFrontMatter = z.infer<typeof frontMatterSchema>;

export const sdkFrontMatterSchema = z.object({
  title: z
    .string({ required_error: "Missing required frontmatter field 'title'" })
    .min(1, { message: "Missing required frontmatter field 'title'" }),
  doc_type: z.enum(["usage_guide", "class_intro", "method_details"], {
    required_error:
      "Missing required frontmatter field 'doc_type' — must be usage_guide, class_intro, or method_details",
  }),
  url: z.string().optional(),
});

export interface ParsedDoc {
  filePath: string;
  relativePath: string;
  frontMatter: DocFrontMatter;
  body: string;
}

export function resolveDocPaths(
  repoRoot: string,
  docsRoot: string,
  repoRelativePath: string,
): { absolute: string; relativePath: string } {
  const normalized = repoRelativePath.replace(/\\/g, "/");
  const absolute = path.isAbsolute(normalized)
    ? normalized
    : path.join(repoRoot, normalized);
  const docsPrefix = `${docsRoot}/`;
  const relativePath = normalized.startsWith(docsPrefix)
    ? normalized.slice(docsPrefix.length)
    : path.relative(path.join(repoRoot, docsRoot), absolute);
  return { absolute, relativePath };
}

export function parseDocFile(
  repoRoot: string,
  docsRoot: string,
  repoRelativePath: string,
): ParsedDoc {
  const { absolute, relativePath } = resolveDocPaths(
    repoRoot,
    docsRoot,
    repoRelativePath,
  );
  const raw = fs.readFileSync(absolute, "utf8");
  const { data, content } = matter(raw);
  const frontMatter = frontMatterSchema.parse(data);

  return {
    filePath: absolute,
    relativePath,
    frontMatter,
    body: content.trim(),
  };
}

export function parseDocContent(
  repoRoot: string,
  docsRoot: string,
  repoRelativePath: string,
  content: string,
): ParsedDoc {
  const { absolute, relativePath } = resolveDocPaths(
    repoRoot,
    docsRoot,
    repoRelativePath,
  );
  const { data, content: bodyContent } = matter(content);
  const frontMatter = frontMatterSchema.parse(data);
  return {
    filePath: absolute,
    relativePath,
    frontMatter,
    body: bodyContent.trim(),
  };
}

export interface H1Split {
  h1: string;
  rest: string;
}

const H1_RE = /^#\s+(.+?)\s*$/m;

/**
 * Pulls the first H1 out of a doc body and returns it separately from
 * everything after it. The H1 becomes the CMS article heading, so it must not
 * also appear as literal content, only the text after it is real body content.
 * Returns null when the body has no H1, callers must treat that as a hard
 * error rather than falling back to some other heading source.
 */
export function extractH1(body: string): H1Split | null {
  const match = body.match(H1_RE);
  if (!match) return null;
  const h1 = match[1]!.trim();
  const rest = body.slice((match.index ?? 0) + match[0].length).trim();
  return { h1, rest };
}
