#!/usr/bin/env node
/**
 * One-time CMS -> Git backfill for cs-docs/<product>/, generalized from
 * backfill-headless-cms.ts (which stays in place, already run and verified
 * for Headless CMS). Reads its per-product config (nav uid, url prefix,
 * output root) from lib/product-registry.ts instead of hardcoding a single
 * product, everything else (the recursive nav walk, the docs_article
 * resolution and write-out) is identical.
 *
 * Not part of the ongoing sync pipeline, not wired into any workflow, a
 * manual run-once-per-nav_section tool. See the plan at
 * .claude/plans/logical-mapping-hickey.md for the full rationale.
 *
 * Usage: npx tsx src/backfill-product-docs.ts --product launch --section "Getting Started" [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { htmlToMarkdown } from "./html-to-md.js";
import { extractSections } from "./cda-fetch.js";
import { resolveProduct } from "./lib/product-registry.js";

const PROD_API_KEY = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
const PROD_TOKEN = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!PROD_API_KEY || !PROD_TOKEN) {
  throw new Error("CONTENTSTACK_DOCS_STACK_API_KEY / CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN must be set");
}

// Confirmed live via GET /v3/environments against this stack, name "production".
const PRODUCTION_ENV_UID = "bltfe8376c13fe85b9c";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");

function parseArgs(argv: string[]): { product: string; section: string; dryRun: boolean } {
  let product = "";
  let section = "";
  let dryRun = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--product" && argv[i + 1]) product = argv[++i]!;
    if (argv[i] === "--section" && argv[i + 1]) section = argv[++i]!;
    if (argv[i] === "--dry-run") dryRun = true;
  }
  if (!product || !section) {
    console.error('Usage: backfill-product-docs.ts --product <slug> --section "<nav_section header>" [--dry-run]');
    process.exit(1);
  }
  return { product, section, dryRun };
}

async function req(reqPath: string): Promise<any> {
  const res = await fetch(`https://api.contentstack.io/v3${reqPath}`, {
    headers: { api_key: PROD_API_KEY!, authorization: PROD_TOKEN! },
  });
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status}): ${await res.text()}`);
  return res.json();
}

const entryCache = new Map<string, any>();
async function getEntryCached(contentType: string, uid: string, retriesLeft = 4): Promise<any | null> {
  const key = `${contentType}:${uid}`;
  if (entryCache.has(key)) return entryCache.get(key);
  const res = await fetch(
    `https://api.contentstack.io/v3/content_types/${contentType}/entries/${uid}?locale=en-us&include_publish_details=true`,
    { headers: { api_key: PROD_API_KEY!, authorization: PROD_TOKEN! } },
  );
  if (res.status === 429 && retriesLeft > 0) {
    await new Promise((r) => setTimeout(r, 1500));
    return getEntryCached(contentType, uid, retriesLeft - 1);
  }
  if (!res.ok) {
    if (retriesLeft > 0) {
      await new Promise((r) => setTimeout(r, 500));
      return getEntryCached(contentType, uid, retriesLeft - 1);
    }
    console.error(`FAILED to fetch ${contentType}/${uid}: HTTP ${res.status}`);
    entryCache.set(key, null);
    return null;
  }
  const data = await res.json();
  entryCache.set(key, data.entry);
  return data.entry;
}

function slugifyHeader(header: string): string {
  return header
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface ResolvedDoc {
  chain: string[];
  uid: string;
}

/**
 * Recursively walks nav_section.links / links_2026.nested_links to arbitrary
 * depth. A links_2026 node with its own url filled in points at content
 * owned by a different part of the repo (or a different stack entirely,
 * confirmed live for Headless CMS's "APIs & SDKs" branch), skip it and
 * everything under it rather than guessing at ownership.
 */
async function walk(
  links: Array<{ uid: string; _content_type_uid: string }>,
  chain: string[],
  out: ResolvedDoc[],
): Promise<void> {
  for (const link of links) {
    if (link._content_type_uid === "docs_article") {
      out.push({ chain, uid: link.uid });
    } else if (link._content_type_uid === "links_2026") {
      const child = await getEntryCached("links_2026", link.uid);
      if (!child) continue;
      if (child.url) continue;
      const nested = Array.isArray(child.nested_links) ? child.nested_links : [];
      await walk(nested, [...chain, slugifyHeader(String(child.title ?? "untitled"))], out);
    }
    // product_faqs_2026 and anything else: handled by backfill-product-faqs.ts.
  }
}

function parseTitle(title: string): { heading: string } {
  const match = title.match(/^\[(.+?)\]\s*-\s*(.+)$/);
  return { heading: match ? match[2]!.trim() : title.trim() };
}

function escapeForFrontmatter(value: string): string {
  return value.replace(/"/g, '\\"');
}

async function main() {
  const { product, section, dryRun } = parseArgs(process.argv.slice(2));

  const productEntry = resolveProduct(product);
  if (!productEntry) {
    console.error(`Unknown product "${product}". See lib/product-registry.ts for known slugs.`);
    process.exit(1);
  }
  if (!productEntry.urlPrefixConfirmed) {
    console.error(
      `Product "${product}" has urlPrefix "${productEntry.urlPrefix}" but urlPrefixConfirmed is false. ` +
      `Sample 2-3 docs_article URLs from its nav tree first and confirm/correct this in product-registry.ts ` +
      `before running the backfill.`,
    );
    process.exit(1);
  }

  const { navUid, urlPrefix, slug } = productEntry;
  const docsRoot = path.join(repoRoot, "cs-docs", slug);

  console.log(`Fetching ${product} product_navigation entry (${navUid})...`);
  const nav = await req(`/content_types/product_navigation/entries/${navUid}?locale=en-us`);
  const navSection = nav.entry.nav_section.find((s: any) => s.header === section);
  if (!navSection) {
    const available = nav.entry.nav_section.map((s: any) => s.header).join(", ");
    console.error(`No nav_section with header "${section}" found. Available: ${available}`);
    process.exit(1);
  }

  console.log(`Walking "${section}"...`);
  const resolved: ResolvedDoc[] = [];
  await walk(navSection.links, [slugifyHeader(section)], resolved);
  console.log(`Found ${resolved.length} docs_article references (before scope filtering and dedup).`);

  const seen = new Set<string>();
  let written = 0;
  let skippedOutOfScope = 0;
  let skippedUnpublished = 0;
  let skippedNoContent = 0;
  let skippedDuplicate = 0;

  for (const { chain, uid } of resolved) {
    if (seen.has(uid)) {
      skippedDuplicate++;
      continue;
    }
    seen.add(uid);

    const entry = await getEntryCached("docs_article", uid);
    if (!entry) continue;

    if (!entry.url || !entry.url.startsWith(urlPrefix)) {
      skippedOutOfScope++;
      continue;
    }

    const publishDetails: any[] = Array.isArray(entry.publish_details) ? entry.publish_details : [];
    const prodRecord = publishDetails.find((p) => p.environment === PRODUCTION_ENV_UID);
    if (!prodRecord) {
      skippedUnpublished++;
      console.log(`  SKIP (not published to production): ${entry.url}`);
      continue;
    }

    let sourceEntry = entry;
    if (typeof prodRecord.version === "number" && prodRecord.version !== entry._version) {
      const versioned = await req(`/content_types/docs_article/entries/${uid}?locale=en-us&version=${prodRecord.version}`);
      sourceEntry = versioned.entry;
    }

    const sections = extractSections(sourceEntry);
    if (sections.length === 0) {
      skippedNoContent++;
      console.log(`  SKIP (no article_section content, uses a different block type): ${entry.url}`);
      continue;
    }

    const { heading } = parseTitle(String(sourceEntry.title ?? ""));
    const description = sourceEntry.seo?.description ?? "";
    const body = sections
      .map((s) => (s.heading.trim() ? `## ${s.heading.trim()}\n\n${htmlToMarkdown(s.content)}` : htmlToMarkdown(s.content)))
      .join("\n\n");

    const frontmatter = [
      "---",
      `title: "${escapeForFrontmatter(heading)}"`,
      `description: "${escapeForFrontmatter(description)}"`,
      `url: ${entry.url}`,
      "---",
    ].join("\n");

    const fileContent = `${frontmatter}\n\n# ${heading}\n\n${body}\n`;

    // The full url suffix, not just its last segment: some products (e.g.
    // Headless CMS's CLI docs) have entries sharing a generic trailing
    // segment where only the segments before it actually distinguish one
    // page from another. Confirmed live for Headless CMS, this was silently
    // collapsing ~36 distinct pages down to 2 files before that fix, apply
    // the same defensive approach here.
    const urlSuffix = entry.url.slice(urlPrefix.length).split("/").filter(Boolean).join("-");
    const targetDir = path.join(docsRoot, ...chain);
    const targetPath = path.join(targetDir, `${urlSuffix}.md`);

    if (dryRun) {
      console.log(`  WOULD WRITE: ${path.relative(repoRoot, targetPath)}`);
    } else {
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(targetPath, fileContent);
      console.log(`  wrote ${path.relative(repoRoot, targetPath)}`);
    }
    written++;
  }

  console.log(
    `\nDone. written=${written} skippedOutOfScope=${skippedOutOfScope} ` +
    `skippedUnpublished=${skippedUnpublished} skippedNoContent=${skippedNoContent} ` +
    `skippedDuplicate=${skippedDuplicate}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
