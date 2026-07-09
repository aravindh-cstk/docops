import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export const frontMatterSchema = z.object({
  title: z
    .string({ required_error: "Missing required frontmatter field 'title'" })
    .min(1, { message: "Missing required frontmatter field 'title'" }),
  url: z
    .string({ required_error: "Missing required frontmatter field 'url'" })
    .min(1, { message: "Missing required frontmatter field 'url'" }),
  description: z.string().optional(),
  product: z.string().optional(),
  doc_type: z.string().optional(),
  audience: z.union([z.string(), z.array(z.string())]).optional(),
  version: z.string().optional(),
  last_updated: z.string().optional(),
  exec_test: z.boolean().optional(),
  exec_test_type: z.enum(["procedural", "troubleshooting"]).optional(),
  hash_key: z.string().optional(),
});

export type DocFrontMatter = z.infer<typeof frontMatterSchema>;

/** Extracts the article heading from a title like "[Product] - Heading". Falls back to the full title. */
export function extractHeading(title: string): string {
  const match = title.match(/^\[.+?\]\s*-\s*(.+)$/);
  return match ? match[1]!.trim() : title;
}

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

