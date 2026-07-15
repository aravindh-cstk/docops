import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

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
  url: z
    .string({ required_error: "Missing required frontmatter field 'url' — add: url: /personalize/your-article-slug" })
    .min(1, { message: "Missing required frontmatter field 'url' — add: url: /personalize/your-article-slug" })
    .refine((u) => !u.startsWith("http://") && !u.startsWith("https://"), {
      message: "Invalid 'url' — must be a relative path, not a full URL (e.g. /personalize/about-personalize)",
    })
    .refine((u) => u.startsWith("/"), {
      message: "Invalid 'url' — must start with / (e.g. /personalize/about-personalize)",
    })
    .refine((u) => hasValidUrlPrefix(u), {
      message: `Invalid 'url' — first segment must be a known product name (e.g. /personalize/about-personalize) or one of: ${COMPOUND_URL_PREFIXES.join(", ")}. Valid products: ${VALID_PRODUCTS}`,
    })
    .refine((u) => !u.endsWith("/"), {
      message: "Invalid 'url' — must not end with a trailing slash (remove the trailing /)",
    }),
  marker: z
    .string({ required_error: "Missing required frontmatter field 'marker' — add: marker: Your Product Name" })
    .min(1, { message: "Missing required frontmatter field 'marker' — add: marker: Your Product Name" }),
  heading: z
    .string({ required_error: "Missing required frontmatter field 'heading' — add: heading: Your Article Title" })
    .min(1, { message: "Missing required frontmatter field 'heading' — add: heading: Your Article Title" }),
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

export function buildTitle(marker: string, heading: string): string {
  return `[${marker}] - ${heading}`;
}
