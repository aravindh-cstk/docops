import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export const frontMatterSchema = z.object({
  url: z
    .string()
    .min(1)
    .refine((u) => u.startsWith("/developers/"), {
      message: "url must start with /developers/",
    }),
  marker: z.string().min(1),
  heading: z.string().min(1),
});

export type DocFrontMatter = z.infer<typeof frontMatterSchema>;

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
