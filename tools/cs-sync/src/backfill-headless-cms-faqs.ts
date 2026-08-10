#!/usr/bin/env node
/**
 * One-time CMS -> Git backfill for cs-docs/headless-cms/troubleshooting-and-faqs/.
 *
 * Like backfill-headless-cms.ts, this is a manual, run-once-per-container
 * tool, not wired into any workflow. product_faqs_2026 has a fundamentally
 * different shape than docs_article though (one entry holds many nested
 * FAQs across many files, not a 1:1 file-to-entry mapping), see the plan at
 * .claude/plans/logical-mapping-hickey.md for the full design.
 *
 * Usage: npx tsx src/backfill-headless-cms-faqs.ts --container "Headless CMS FAQs" [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { jsonRteToHtml, type RteNode } from "./lib/json-rte-to-html.js";
import { htmlToMarkdown } from "./html-to-md.js";

const PROD_API_KEY = process.env.CONTENTSTACK_DOCS_STACK_API_KEY;
const PROD_TOKEN = process.env.CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN;
if (!PROD_API_KEY || !PROD_TOKEN) {
  throw new Error("CONTENTSTACK_DOCS_STACK_API_KEY / CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN must be set");
}

// The 4 product_faqs_2026 entries linked from Headless CMS's Support &
// Troubleshooting section, confirmed live this session.
const CONTAINER_UIDS: Record<string, string> = {
  "Headless CMS FAQs": "blteaaca98ec4ee8d14",
  "Headless CMS Troubleshooting Guides": "blt4e934f5a52701b0b",
  "SDK Troubleshooting Guides": "blt6566ef1708ebc9f9",
  "CLI Troubleshooting Guides": "blt4842add3ede9ee02",
};

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
const FAQS_ROOT = path.join(repoRoot, "cs-docs", "headless-cms", "troubleshooting-and-faqs");

function parseArgs(argv: string[]): { container: string; dryRun: boolean } {
  let container = "";
  let dryRun = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--container" && argv[i + 1]) container = argv[++i]!;
    if (argv[i] === "--dry-run") dryRun = true;
  }
  if (!container) {
    console.error('Usage: backfill-headless-cms-faqs.ts --container "<container title>" [--dry-run]');
    console.error(`Known containers: ${Object.keys(CONTAINER_UIDS).join(", ")}`);
    process.exit(1);
  }
  return { container, dryRun };
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
  const { container, dryRun } = parseArgs(process.argv.slice(2));
  const containerUid = CONTAINER_UIDS[container];
  if (!containerUid) {
    console.error(`Unknown container "${container}". Known: ${Object.keys(CONTAINER_UIDS).join(", ")}`);
    process.exit(1);
  }

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
    // (confirmed live: this silently reordered "Asset Transformations..."
    // ahead of "Installation..." on the very first write-back test).
    const sectionPrefix = orderPrefix(sectionIndex, sections.length);
    const sectionSlug = `${sectionPrefix}-${slugify(section.heading)}`;
    const sectionUid = section._metadata?.uid;
    const faqs: any[] = Array.isArray(section.faqs) ? section.faqs : [];
    const targetDir = path.join(FAQS_ROOT, containerSlug, sectionSlug);

    faqs.forEach((faq, index) => {
      const prefix = orderPrefix(index, faqs.length);
      const questionSlug = slugify(String(faq.question ?? "untitled"));
      const filename = `${prefix}-${questionSlug}.md`;
      const targetPath = path.join(targetDir, filename);

      const html = jsonRteToHtml(faq.answer as RteNode);
      const body = htmlToMarkdown(html);

      const urlSuffix = path
        .join("headless-cms", "troubleshooting-and-faqs", containerSlug, sectionSlug, `${prefix}-${questionSlug}`)
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
