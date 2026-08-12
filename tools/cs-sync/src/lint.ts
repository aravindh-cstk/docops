import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import matter from "gray-matter";
import { findRepoRoot, listChangedDocs, parseArgs } from "./diff.js";
import { parseDocFile, resolveDocPaths, frontMatterSchema, sdkFrontMatterSchema, extractH1 } from "./parser.js";
import { collectLocalImageRefs, checkImagePath } from "./assets.js";
import { lintStyle } from "./style-lint.js";
import { docTypeMapsToDocsArticle } from "./lib/content-type-mappings/docs-article.js";

const SEO_DESCRIPTION_MIN = 120;
const SEO_DESCRIPTION_MAX = 165;

// Rules specific to docs_article-bound content (title/H1 consistency, SEO
// description length). Scoped to doc_type, not to product folder, so they
// apply the same way once products beyond "assets" get a verified mapping.
function lintDocsArticleRules(
  repoRelativePath: string,
  frontMatter: { title?: unknown; description?: unknown; doc_type?: unknown },
  body: string,
): string[] {
  if (!docTypeMapsToDocsArticle(frontMatter.doc_type as string | undefined)) {
    return [];
  }

  const errors: string[] = [];

  const split = extractH1(body);
  if (!split) {
    errors.push(`${repoRelativePath}: missing a top-level H1 heading (# Your Title) — required for docs_article`);
  } else if (typeof frontMatter.title === "string" && split.h1 !== frontMatter.title) {
    errors.push(
      `${repoRelativePath}: frontmatter 'title' ("${frontMatter.title}") does not match the H1 heading ("${split.h1}") — they must be identical`,
    );
  }

  if (typeof frontMatter.description === "string") {
    const len = frontMatter.description.length;
    if (len < SEO_DESCRIPTION_MIN || len > SEO_DESCRIPTION_MAX) {
      errors.push(
        `${repoRelativePath}: 'description' is ${len} characters, must be between ${SEO_DESCRIPTION_MIN} and ${SEO_DESCRIPTION_MAX} (it becomes the SEO description)`,
      );
    }
  }

  return errors;
}

const MD_LINK_RE = /\[([^\]]*)]\(([^)]+)\)/g;

// Generic fallback schema for docs roots with no product-specific rules (e.g. api-docs).
const genericFrontMatterSchema = z.object({
  title: z
    .string({ required_error: "Missing required frontmatter field 'title'" })
    .min(1, { message: "Missing required frontmatter field 'title'" }),
});

// Per-root configuration: the seam between "common" lint behavior (everything not
// listed here) and "product-specific" behavior (frontmatter shape, duplicate-URL
// enforcement, internal link resolution). Add an entry here for each new docs root.
interface RootConfig {
  frontmatter: z.ZodTypeAny;
  checkDuplicateUrls: boolean;
  urlPrefix: string | null;
}

const ROOT_CONFIG: Record<string, RootConfig> = {
  "cs-docs": {
    frontmatter: frontMatterSchema,
    checkDuplicateUrls: true,
    urlPrefix: "/developers/",
  },
  "sdk-docs": {
    frontmatter: sdkFrontMatterSchema,
    checkDuplicateUrls: false,
    urlPrefix: null,
  },
};

function getRootConfig(docsRoot: string): RootConfig {
  return (
    ROOT_CONFIG[docsRoot] ?? {
      frontmatter: genericFrontMatterSchema,
      checkDuplicateUrls: false,
      urlPrefix: null,
    }
  );
}

// Returns the URL prefix used for internal link resolution, or null if not applicable.
function getDocsUrlPrefix(docsRoot: string): string | null {
  return getRootConfig(docsRoot).urlPrefix;
}

// Returns the Zod schema to validate frontmatter for the given docs root.
function getFrontmatterValidator(docsRoot: string): z.ZodTypeAny {
  return getRootConfig(docsRoot).frontmatter;
}

function formatZodErrors(file: string, err: z.ZodError): string[] {
  return err.issues.map((issue) => {
    const field = issue.path[0] as string | undefined;
    if (!field) return `${file}: Invalid frontmatter: ${issue.message}`;
    // required_error and min(1) messages already contain the full guidance
    if (
      issue.code === "invalid_type" ||
      (issue.code === "too_small" && issue.minimum === 1)
    ) {
      return `${file}: ${issue.message}`;
    }
    return `${file}: ${issue.message}`;
  });
}

function resolveUrlToFile(
  repoRoot: string,
  docsRoot: string,
  url: string,
  urlPrefix: string,
): string | null {
  if (!url.startsWith(urlPrefix)) return null;
  const suffix = url.slice(urlPrefix.length);
  return path.join(repoRoot, docsRoot, `${suffix}.md`);
}

function resolveLinkTarget(
  repoRoot: string,
  docsRoot: string,
  docRepoPath: string,
  href: string,
): string | null {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return null;
  }
  if (href.startsWith("#")) return null;
  // /docs/ paths reference the live Contentstack site, not files in this repo
  if (href.startsWith("/docs/")) return null;

  const urlPrefix = getDocsUrlPrefix(docsRoot);
  if (urlPrefix && href.startsWith(urlPrefix)) {
    return resolveUrlToFile(repoRoot, docsRoot, href.split("#")[0] ?? href, urlPrefix);
  }

  const docDir = path.dirname(docRepoPath);
  const target = href.startsWith("/")
    ? path.join(repoRoot, href.replace(/^\//, ""))
    : path.resolve(repoRoot, docDir, href.split("#")[0] ?? href);

  if (!target.endsWith(".md")) {
    const withMd = `${target}.md`;
    if (fs.existsSync(withMd)) return withMd;
  }
  return target;
}

function buildAllDocs(repoRoot: string, docsRoot: string): Set<string> {
  return new Set(
    execSync(`git ls-files '${docsRoot}/**/*.md'`, {
      cwd: repoRoot,
      encoding: "utf8",
    })
      .trim()
      .split("\n")
      .filter(Boolean),
  );
}

/**
 * Two files may legitimately share a url: the left navigation places a single
 * docs_article at more than one position (e.g. the SSO setup guides appear
 * under both Administration and Developer Resources), and cs-docs mirrors the
 * nav, so each position gets a copy of that one entry.
 *
 * Identical copies are therefore expected and not an error. Copies whose bodies
 * have diverged are a real problem, because only one of them can be synced back
 * to the single CMS entry, so those are still reported.
 */
function checkDuplicateUrls(
  repoRoot: string,
  docsRoot: string,
  allDocs: Set<string>,
): string[] {
  const errors: string[] = [];
  const seen = new Map<string, { path: string; body: string }>();
  for (const p of allDocs) {
    try {
      const d = parseDocFile(repoRoot, docsRoot, p);
      const body = fs.readFileSync(path.join(repoRoot, p), "utf8");
      const prior = seen.get(d.frontMatter.url);
      if (!prior) {
        seen.set(d.frontMatter.url, { path: p, body });
      } else if (prior.body !== body) {
        errors.push(
          `Diverged copies of url "${d.frontMatter.url}": ${prior.path} and ${p} share one CMS entry but their content differs, so only one can sync back`,
        );
      }
    } catch {
      /* skip files with invalid frontmatter — reported separately in lintDoc */
    }
  }
  return errors;
}

function lintDoc(
  repoRoot: string,
  docsRoot: string,
  repoRelativePath: string,
  allDocs: Set<string>,
): string[] {
  const errors: string[] = [];

  try {
    const { absolute } = resolveDocPaths(repoRoot, docsRoot, repoRelativePath);
    if (!fs.existsSync(absolute)) {
      errors.push(`${repoRelativePath}: file not found`);
      return errors;
    }

    const raw = fs.readFileSync(absolute, "utf8");
    const { data, content: body } = matter(raw);

    // Validate frontmatter with the schema for this docs root
    getFrontmatterValidator(docsRoot).parse(data);

    const trimmedBody = body.trim();

    if (docsRoot === "cs-docs") {
      errors.push(...lintDocsArticleRules(repoRelativePath, data, trimmedBody));
    }

    // lintStyle reports line numbers relative to trimmedBody. Shift them back to
    // the raw file's line numbers (as seen in a GitHub diff) by counting how many
    // lines precede trimmedBody's first line — the frontmatter block plus any
    // blank lines trimmed off the body's start.
    const trimmedBodyStart = raw.indexOf(trimmedBody);
    const lineOffset =
      trimmedBodyStart >= 0
        ? raw.slice(0, trimmedBodyStart).split("\n").length - 1
        : 0;

    for (const match of trimmedBody.matchAll(MD_LINK_RE)) {
      const href = match[2]?.trim() ?? "";
      const target = resolveLinkTarget(repoRoot, docsRoot, repoRelativePath, href);
      if (target === null) continue;
      const repoRel = path.relative(repoRoot, target).replace(/\\/g, "/");
      if (!fs.existsSync(target) && !allDocs.has(repoRel)) {
        errors.push(`${repoRelativePath}: broken link \`${href}\` → ${repoRel}`);
      }
    }

    const absoluteDocPath = path.join(repoRoot, repoRelativePath);
    for (const { ref, resolved } of collectLocalImageRefs(trimmedBody, absoluteDocPath)) {
      const err = checkImagePath(repoRoot, repoRelativePath, ref, resolved);
      if (err) errors.push(err);
    }

    // Pad with blank lines so every line number lintStyle computes — including
    // ones embedded inside a check's own message text — lines up with the raw
    // file (as seen in a GitHub diff), not the frontmatter-stripped body.
    const paddedBody = "\n".repeat(lineOffset) + trimmedBody;
    errors.push(...lintStyle(paddedBody, repoRelativePath, docsRoot));
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.push(...formatZodErrors(repoRelativePath, err));
    } else {
      errors.push(
        `${repoRelativePath}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return errors;
}

async function main(): Promise<void> {
  const { base } = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const docsRoot = process.env.CS_DOCS_ROOT ?? "cs-docs";

  const { mdFiles, nonMdFiles } = listChangedDocs(repoRoot, docsRoot, base);

  const allErrors: string[] = [];

  for (const file of nonMdFiles) {
    // orphan-docs/ holds pages the left nav cannot reach, quarantined for
    // author review rather than published. Its manifest is deliberately a CSV
    // and is not meant to be synced to the CMS.
    if (file.endsWith("orphan-docs/orphan-docs.csv")) continue;
    allErrors.push(
      `${file}: File is missing the .md extension — rename it to ${path.basename(file)}.md so it is picked up by the CMS sync`,
    );
  }

  if (mdFiles.length === 0 && nonMdFiles.length === 0) {
    console.log("No doc files to lint.");
    return;
  }

  const allDocs = buildAllDocs(repoRoot, docsRoot);
  // Duplicate-URL check only applies to roots that use unique URL slugs (see ROOT_CONFIG).
  if (getRootConfig(docsRoot).checkDuplicateUrls) {
    allErrors.push(...checkDuplicateUrls(repoRoot, docsRoot, allDocs));
  }

  for (const file of mdFiles) {
    allErrors.push(...lintDoc(repoRoot, docsRoot, file, allDocs));
  }

  if (allErrors.length > 0) {
    console.error("Docs lint failed:\n");
    for (const e of allErrors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(`Lint passed for ${mdFiles.length} file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
