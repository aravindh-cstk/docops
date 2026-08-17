#!/usr/bin/env node
/**
 * Dry run for left-nav-linker.ts across the whole cs-docs tree. Answers one
 * question before any of this is switched on for all 13 products: for every
 * doc in the repo, which product_navigation entry and which nav section would
 * the linker put it in, and does that section already exist?
 *
 * The risk it exists to surface: the linker matches nav nodes by comparing
 * slugifyHeader(navNodeTitle) against the folder name. Where a folder name and
 * its nav section title disagree, the linker does not fail, it silently
 * CREATES a new section on Prod. One spurious section per mismatch. This
 * script lists every one of those on paper first.
 *
 * Read-only. Touches no CMS and no files under cs-docs/.
 *
 * Usage: npx tsx src/nav-link-audit.ts [--tree <path>] [--csv <path>]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import type { NavTree } from "./nav-tree.js";
import { slugifyHeader } from "./lib/left-nav-linker.js";
import { resolveProduct, PRODUCTS } from "./lib/product-registry.js";
import { subsectionChainFromPath, productSlugFromPath } from "./lib/nav-placement.js";
import { docTypeMapsToDocsArticle } from "./lib/content-type-mappings/docs-article.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
const DOCS_ROOT = "cs-docs";

type Verdict =
  | "ok"
  | "section-would-be-created"
  | "toplevel-no-blank-section"
  | "not-a-product"
  | "not-a-docs-article";

interface Row {
  file: string;
  productSlug: string;
  navUid: string;
  chain: string;
  verdict: Verdict;
  detail: string;
}

function listMarkdown(absDir: string, out: string[]): void {
  if (!fs.existsSync(absDir)) return;
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(absDir, entry.name);
    if (entry.isDirectory()) listMarkdown(full, out);
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
}

/**
 * Every chain that exists in the live nav, as "product/section/sub/..." keys.
 * Built from leaf chains plus every prefix of them, since an intermediate node
 * is a valid link target even when no leaf sits directly under it.
 */
function buildExistingChains(tree: NavTree): Set<string> {
  const chains = new Set<string>();
  for (const leaf of tree.leaves) {
    for (let i = 1; i <= leaf.chain.length; i++) {
      chains.add(leaf.chain.slice(0, i).join("/"));
    }
  }
  return chains;
}

/**
 * Products with a blank-header nav_section, the placement target for docs that
 * sit directly in a product folder. A blank header slugifies to "", so those
 * leaves carry a chain of just [productSlug].
 */
function buildBlankSectionProducts(tree: NavTree): Set<string> {
  const products = new Set<string>();
  for (const leaf of tree.leaves) {
    if (leaf.chain.length === 1) products.add(leaf.chain[0]!);
  }
  return products;
}

function csvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

function main(): void {
  const argv = process.argv.slice(2);
  let treePath = path.join(scriptDir, "..", ".nav-tree.json");
  let csvPath: string | null = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--tree" && argv[i + 1]) treePath = path.resolve(argv[++i]!);
    if (argv[i] === "--csv" && argv[i + 1]) csvPath = path.resolve(argv[++i]!);
  }

  if (!fs.existsSync(treePath)) {
    console.error(`No nav tree at ${treePath}. Run: npm run nav-tree`);
    process.exit(1);
  }

  const tree: NavTree = JSON.parse(fs.readFileSync(treePath, "utf8"));
  const existingChains = buildExistingChains(tree);
  const blankSectionProducts = buildBlankSectionProducts(tree);

  console.log(`Nav tree generated ${tree.generatedAt}, ${tree.leaves.length} leaves`);
  console.log(`Products in registry: ${Object.keys(PRODUCTS).length}\n`);

  // Cross-check the registry's navUids against the live nav before trusting
  // anything below, since every placement decision resolves through them.
  const treeProductUids = new Map(tree.products.map((p) => [p.slug, p.uid]));
  const uidMismatches: string[] = [];
  for (const [slug, product] of Object.entries(PRODUCTS)) {
    const liveUid = treeProductUids.get(slug);
    if (!liveUid) uidMismatches.push(`${slug}: not present in the nav tree`);
    else if (liveUid !== product.navUid) {
      uidMismatches.push(`${slug}: registry ${product.navUid} vs nav ${liveUid}`);
    }
  }
  if (uidMismatches.length > 0) {
    console.log("navUid mismatches between product-registry.ts and the live nav:");
    for (const line of uidMismatches) console.log(`  ${line}`);
    console.log("");
  } else {
    console.log("All 13 registry navUids match the live nav tree.\n");
  }

  const files: string[] = [];
  listMarkdown(path.join(repoRoot, DOCS_ROOT), files);

  const rows: Row[] = [];
  for (const abs of files) {
    const rel = path.relative(repoRoot, abs);
    const productSlug = productSlugFromPath(rel, DOCS_ROOT);

    if (!productSlug) {
      rows.push({ file: rel, productSlug: "", navUid: "", chain: "", verdict: "not-a-product", detail: "file sits at the docs root, no product folder" });
      continue;
    }

    const product = resolveProduct(productSlug);
    if (!product) {
      rows.push({ file: rel, productSlug, navUid: "", chain: "", verdict: "not-a-product", detail: `"${productSlug}" is not in product-registry.ts, the linker will skip it` });
      continue;
    }

    // Only docs_article entries are linked into nav_section chains. FAQ and
    // troubleshooting markdown (doc_type: faq) becomes product_faqs_2026
    // content held inside a FAQ container entry, so the nav has no per-file
    // node for it and the linker never sees these at all. Counting them would
    // report thousands of phantom "missing nav node" mismatches.
    let docType: string | undefined;
    try {
      docType = matter(fs.readFileSync(abs, "utf8")).data?.doc_type as string | undefined;
    } catch {
      docType = undefined;
    }
    if (!docTypeMapsToDocsArticle(docType)) {
      rows.push({ file: rel, productSlug, navUid: product.navUid, chain: "", verdict: "not-a-docs-article", detail: `doc_type "${docType}" does not map to docs_article` });
      continue;
    }

    const chain = subsectionChainFromPath(rel, DOCS_ROOT);

    if (!chain) {
      // Top-level doc: targets the product's blank-header section.
      const hasBlank = blankSectionProducts.has(productSlug);
      rows.push({
        file: rel,
        productSlug,
        navUid: product.navUid,
        chain: "(top level)",
        verdict: hasBlank ? "ok" : "toplevel-no-blank-section",
        detail: hasBlank
          ? "lands in the existing blank-header section"
          : "no blank-header section exists, the linker would create one",
      });
      continue;
    }

    // The linker slugifies each folder name and matches it against nav node
    // titles, so compare on the slugified chain the same way.
    const slugChain = chain.map((segment) => slugifyHeader(segment));
    const fullChain = [productSlug, ...slugChain].join("/");
    const exists = existingChains.has(fullChain);

    rows.push({
      file: rel,
      productSlug,
      navUid: product.navUid,
      chain: fullChain,
      verdict: exists ? "ok" : "section-would-be-created",
      detail: exists ? "target nav node already exists" : "no matching nav node, the linker would create it",
    });
  }

  const byVerdict = new Map<Verdict, Row[]>();
  for (const row of rows) {
    const list = byVerdict.get(row.verdict) ?? [];
    list.push(row);
    byVerdict.set(row.verdict, list);
  }

  console.log(`Audited ${rows.length} markdown files under ${DOCS_ROOT}/\n`);
  console.log("Summary by verdict:");
  for (const verdict of ["ok", "section-would-be-created", "toplevel-no-blank-section", "not-a-product", "not-a-docs-article"] as Verdict[]) {
    console.log(`  ${verdict.padEnd(28)} ${byVerdict.get(verdict)?.length ?? 0}`);
  }

  const perProduct = new Map<string, number>();
  for (const row of rows) {
    if (row.verdict === "ok") perProduct.set(row.productSlug, (perProduct.get(row.productSlug) ?? 0) + 1);
  }
  console.log("\nLinkable files per product:");
  for (const slug of Object.keys(PRODUCTS)) {
    console.log(`  ${slug.padEnd(22)} ${perProduct.get(slug) ?? 0}`);
  }

  const wouldCreate = byVerdict.get("section-would-be-created") ?? [];
  if (wouldCreate.length > 0) {
    // Group by chain: many files usually share one missing node, so the count
    // of distinct new nav nodes is what matters, not the file count.
    const chains = new Map<string, number>();
    for (const row of wouldCreate) chains.set(row.chain, (chains.get(row.chain) ?? 0) + 1);
    console.log(`\n${chains.size} distinct nav node(s) would be created, affecting ${wouldCreate.length} file(s):`);
    for (const [chain, count] of [...chains].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(count).padStart(4)} file(s)  ${chain}`);
    }
  }

  const notProduct = byVerdict.get("not-a-product") ?? [];
  if (notProduct.length > 0) {
    const folders = new Map<string, number>();
    for (const row of notProduct) folders.set(row.productSlug || "(docs root)", (folders.get(row.productSlug || "(docs root)") ?? 0) + 1);
    console.log(`\nFolders the linker will skip entirely (not in product-registry.ts):`);
    for (const [folder, count] of [...folders].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(count).padStart(4)} file(s)  ${folder}`);
    }
  }

  if (csvPath) {
    const header = "file,product_slug,nav_uid,chain,verdict,detail";
    const lines = rows.map((r) =>
      [r.file, r.productSlug, r.navUid, r.chain, r.verdict, r.detail].map(csvCell).join(","),
    );
    fs.writeFileSync(csvPath, [header, ...lines].join("\n") + "\n", "utf8");
    console.log(`\nWrote ${path.relative(repoRoot, csvPath)}`);
  }
}

main();
