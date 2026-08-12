#!/usr/bin/env node
/**
 * One-time CMS -> Git backfill for cs-docs/<product>/troubleshooting-and-faqs/,
 * generalized from backfill-headless-cms-faqs.ts (which stays in place,
 * already run and verified for Headless CMS). Reads its per-product config
 * (FAQ container uids, output root) from lib/product-registry.ts instead of
 * hardcoding a single product, everything else (the section/faq walk, the
 * JSON-RTE conversion, the write-out) is identical.
 *
 * Not part of the ongoing sync pipeline, not wired into any workflow, a
 * manual run-once-per-container tool. See the plan at
 * .claude/plans/logical-mapping-hickey.md for the full design.
 *
 * Usage: npx tsx src/backfill-product-faqs.ts --product launch --container "Launch FAQs" [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { jsonRteToHtml, type RteNode } from "./lib/json-rte-to-html.js";
import { htmlToMarkdown } from "./html-to-md.js";
import { resolveProduct } from "./lib/product-registry.js";

const PROD_API_KEY = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
const PROD_TOKEN = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!PROD_API_KEY || !PROD_TOKEN) {
  throw new Error("CONTENTSTACK_DOCS_STACK_API_KEY / CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN must be set");
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");

function parseArgs(argv: string[]): { product: string; container: string; dryRun: boolean } {
  let product = "";
  let container = "";
  let dryRun = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--product" && argv[i + 1]) product = argv[++i]!;
    if (argv[i] === "--container" && argv[i + 1]) container = argv[++i]!;
    if (argv[i] === "--dry-run") dryRun = true;
  }
  if (!product || !container) {
    console.error('Usage: backfill-product-faqs.ts --product <slug> --container "<container title>" [--dry-run]');
    process.exit(1);
  }
  return { product, container, dryRun };
}

async function req(reqPath: string): Promise<any> {
  const res = await fetch(`https://api.contentstack.io/v3${reqPath}`, {
    headers: { api_key: PROD_API_KEY!, authorization: PROD_TOKEN! },
  });
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status}): ${await res.text()}`);
  return res.json();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80); // long questions produce unwieldy filenames otherwise
}

function orderPrefix(index: number, total: number): string {
  const width = String(total).length;
  return String(index + 1).padStart(Math.max(width, 2), "0");
}

function escapeForFrontmatter(value: string): string {
  return value.replace(/"/g, '\\"').replace(/\n/g, " ");
}

async function main() {
  const { product, container, dryRun } = parseArgs(process.argv.slice(2));

  const productEntry = resolveProduct(product);
  if (!productEntry) {
    console.error(`Unknown product "${product}". See lib/product-registry.ts for known slugs.`);
    process.exit(1);
  }

  const containerConfig = productEntry.faqContainers.find((c) => c.title === container);
  if (!containerConfig) {
    const known = productEntry.faqContainers.map((c) => c.title).join(", ") || "(none)";
    console.error(`Unknown container "${container}" for product "${product}". Known: ${known}`);
    process.exit(1);
  }
  const containerUid = containerConfig.uid;

  const faqsRoot = path.join(repoRoot, "cs-docs", productEntry.slug, "troubleshooting-and-faqs");

  console.log(`Fetching ${container} (${containerUid})...`);
  const data = await req(`/content_types/product_faqs_2026/entries/${containerUid}?locale=en-us`);
  const entry = data.entry;
  const containerSlug = slugify(entry.title);
  const sections: any[] = Array.isArray(entry.faqs_section) ? entry.faqs_section : [];

  console.log(`${sections.length} sections found.`);

  let written = 0;

  sections.forEach((section, sectionIndex) => {
    // Section ORDER also needs preserving, not just each section's own FAQ
    // order, otherwise rebuilding from disk sorts folders alphabetically
    // (confirmed live for Headless CMS: this silently reordered "Asset
    // Transformations..." ahead of "Installation..." on the very first
    // write-back test).
    const sectionPrefix = orderPrefix(sectionIndex, sections.length);
    const sectionSlug = `${sectionPrefix}-${slugify(section.heading)}`;
    const sectionUid = section._metadata?.uid;
    const faqs: any[] = Array.isArray(section.faqs) ? section.faqs : [];
    const targetDir = path.join(faqsRoot, containerSlug, sectionSlug);

    faqs.forEach((faq, index) => {
      const prefix = orderPrefix(index, faqs.length);
      const questionSlug = slugify(String(faq.question ?? "untitled"));
      const filename = `${prefix}-${questionSlug}.md`;
      const targetPath = path.join(targetDir, filename);

      const html = jsonRteToHtml(faq.answer as RteNode);
      const body = htmlToMarkdown(html);

      const urlSuffix = path
        .join(productEntry.slug, "troubleshooting-and-faqs", containerSlug, sectionSlug, `${prefix}-${questionSlug}`)
        .split(path.sep)
        .join("/");

      const question = String(faq.question ?? "Untitled").trim();
      const faqUid = faq._metadata?.uid ?? "";

      const frontmatter = [
        "---",
        `title: "${escapeForFrontmatter(question)}"`,
        `description: "${escapeForFrontmatter(question)}"`,
        `url: /${urlSuffix}`,
        "doc_type: faq",
        `_cms_section_uid: ${sectionUid ?? ""}`,
        `_cms_faq_uid: ${faqUid}`,
        "---",
      ].join("\n");

      const fileContent = `${frontmatter}\n\n# ${question}\n\n${body}\n`;

      if (dryRun) {
        console.log(`  WOULD WRITE: ${path.relative(repoRoot, targetPath)}`);
      } else {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(targetPath, fileContent);
      }
      written++;
    });
  });

  console.log(`\nDone. ${dryRun ? "would write" : "wrote"} ${written} files across ${sections.length} sections.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
