#!/usr/bin/env node
/**
 * One-off verification script: finds the "navigation" content-type uid each
 * remaining product folder should use for docs-article.ts's PRODUCT_CONFIG,
 * in both the Prod and Sandbox stacks.
 *
 * Read-only (GET requests only). Not part of the sync pipeline, not wired
 * into package.json, run manually with:
 *   npx tsx src/verify-breadcrumb-uids.ts
 *
 * Matching approach, validated against real data before writing this:
 *  - Matching by url == "/<folder-slug>" alone is not reliable in either
 *    direction. It can be ambiguous (e.g. /headless-cms matches both a
 *    stray "How-to Guides" entry and the real "Headless CMS" entry, both
 *    published to Production, so prod-published alone does not
 *    disambiguate), and some products (brand-kit, lytics-cdp,
 *    developer-resources) have their real breadcrumb entry at a url that
 *    does not match the folder slug at all (e.g. Brand Kit's is at
 *    /content-managers/brand-kit/, Lytics CDP's at /lytics).
 *  - "navigation" entries carry no reference fields back to the left nav,
 *    so there is nothing to trace structurally.
 *  - What actually works: query by exact title match against the product's
 *    official display title (the same titles nav-tree.ts resolves into
 *    .nav-tree.json's `products` list, sourced from the left nav's product
 *    dropdown). A title query returned exactly one hit for every product
 *    that has a real breadcrumb entry. Url-based candidates are kept only
 *    as a secondary hint surfaced to a human when title search comes up
 *    empty (agent-os, marketplace: no entry titled exactly that in either
 *    stack, only sibling section entries like "Automate Guides" or
 *    "Marketplace Apps"), never auto-picked.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../../..");
config({ path: path.join(repoRoot, ".env") });

const HOST = "https://api.contentstack.io/v3";

interface StackAuth {
  label: "sandbox" | "prod";
  apiKey: string;
  token: string;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} must be set in repo-root .env`);
  return value;
}

const STACKS: StackAuth[] = [
  {
    label: "prod",
    apiKey: requireEnv("CONTENTSTACK_DOCS_STACK_API_KEY"),
    token: requireEnv("CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN"),
  },
  {
    label: "sandbox",
    apiKey: requireEnv("SANDBOX_CONTENTSTACK_DOCS_STACK_API_KEY"),
    token: requireEnv("SANDBOX_CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN"),
  },
];

/**
 * Official product display titles, taken from the left nav's product
 * dropdown (left_navigation_2026/blt92f94484c120f375 -> product_navigation),
 * same source nav-tree.ts resolves into .nav-tree.json's `products` list.
 * Confirmed identical title/url across both stacks for every product
 * checked so far (assets, headless-cms, studio), only uids differ per stack.
 */
const PRODUCTS: Array<{ slug: string; title: string }> = [
  { slug: "brand-kit", title: "Brand Kit" },
  { slug: "personalize", title: "Personalize" },
  { slug: "agent-os", title: "Agent OS" },
  { slug: "launch", title: "Launch" },
  { slug: "marketplace", title: "Marketplace" },
  { slug: "lytics-cdp", title: "Lytics CDP" },
  { slug: "administration", title: "Administration" },
  { slug: "developer-hub", title: "Developer Hub" },
  { slug: "developer-resources", title: "Developer Resources" },
  { slug: "analytics", title: "Analytics" },
];

interface NavEntry {
  uid: string;
  title: string;
  url: string;
  publish_details?: Array<{ environment?: string }>;
}

async function request(stack: StackAuth, reqPath: string, retriesLeft = 4): Promise<any> {
  const res = await fetch(`${HOST}${reqPath}`, {
    headers: { api_key: stack.apiKey, authorization: stack.token },
  });
  if ((res.status === 429 || res.status >= 500) && retriesLeft > 0) {
    await new Promise((r) => setTimeout(r, 1500 * (5 - retriesLeft)));
    return request(stack, reqPath, retriesLeft - 1);
  }
  if (!res.ok) throw new Error(`GET ${reqPath} failed (${res.status}): ${await res.text()}`);
  return res.json();
}

async function fetchAllNavigation(stack: StackAuth): Promise<NavEntry[]> {
  const out: NavEntry[] = [];
  let skip = 0;
  for (;;) {
    const query = new URLSearchParams({
      locale: "en-us",
      limit: "100",
      skip: String(skip),
      include_count: "true",
      include_publish_details: "true",
    });
    const data = await request(stack, `/content_types/navigation/entries?${query}`);
    const entries: NavEntry[] = Array.isArray(data.entries) ? data.entries : [];
    out.push(...entries);
    const total = typeof data.count === "number" ? data.count : out.length;
    skip += entries.length;
    process.stderr.write(`  [${stack.label}] navigation: ${out.length}/${total}\n`);
    if (entries.length === 0 || out.length >= total) break;
  }
  return out;
}

function normalizeUrl(raw: string | undefined): string {
  return (raw ?? "").trim().replace(/\/+$/, "");
}

interface Resolution {
  slug: string;
  stack: "prod" | "sandbox";
  chosen: NavEntry | null;
  candidates: NavEntry[];
  note: string;
}

function resolve(slug: string, title: string, stack: "prod" | "sandbox", entries: NavEntry[]): Resolution {
  const titleMatches = entries.filter((e) => e.title === title);
  if (titleMatches.length === 1) {
    return { slug, stack, chosen: titleMatches[0]!, candidates: titleMatches, note: `single entry titled "${title}"` };
  }
  if (titleMatches.length > 1) {
    return {
      slug,
      stack,
      chosen: null,
      candidates: titleMatches,
      note: `${titleMatches.length} entries titled exactly "${title}", ambiguous, needs manual pick`,
    };
  }

  // No exact title hit. Surface url-based candidates as a hint only, never auto-pick.
  const key = `/${slug}`;
  const urlCandidates = entries.filter((e) => normalizeUrl(e.url) === key);
  return {
    slug,
    stack,
    chosen: null,
    candidates: urlCandidates,
    note:
      urlCandidates.length > 0
        ? `no entry titled exactly "${title}"; ${urlCandidates.length} entries at ${key} to consider instead`
        : `no entry titled exactly "${title}" and none at ${key} either`,
  };
}

async function main() {
  const byStack = new Map<string, NavEntry[]>();
  for (const stack of STACKS) {
    byStack.set(stack.label, await fetchAllNavigation(stack));
  }

  const resolutions: Resolution[] = [];
  for (const product of PRODUCTS) {
    for (const stack of STACKS) {
      resolutions.push(resolve(product.slug, product.title, stack.label, byStack.get(stack.label)!));
    }
  }

  console.log("\n=== Resolutions ===");
  for (const product of PRODUCTS) {
    const prod = resolutions.find((r) => r.slug === product.slug && r.stack === "prod")!;
    const sandbox = resolutions.find((r) => r.slug === product.slug && r.stack === "sandbox")!;
    console.log(`\n${product.slug} (${product.title})`);
    console.log(`  prod:    ${prod.chosen ? `${prod.chosen.uid} (${prod.note})` : `UNRESOLVED - ${prod.note}`}`);
    console.log(`  sandbox: ${sandbox.chosen ? `${sandbox.chosen.uid} (${sandbox.note})` : `UNRESOLVED - ${sandbox.note}`}`);
    if (prod.candidates.length > 1 || sandbox.candidates.length > 1) {
      for (const r of [prod, sandbox]) {
        if (r.candidates.length > 1) {
          console.log(`    ${r.stack} candidates: ${r.candidates.map((c) => `${c.uid} "${c.title}"`).join(", ")}`);
        }
      }
    }
  }

  const gaps = resolutions.filter((r) => !r.chosen);
  if (gaps.length > 0) {
    const csvPath = path.join(repoRoot, "breadcrumb-uid-gaps.csv");
    const rows = ["product,stack,reason", ...gaps.map((g) => `${g.slug},${g.stack},"${g.note}"`)];
    (await import("node:fs")).writeFileSync(csvPath, rows.join("\n") + "\n");
    console.log(`\nWrote ${gaps.length} gap(s) to ${path.relative(repoRoot, csvPath)}`);
  } else {
    console.log("\nAll products resolved in both stacks.");
  }

  console.log("\n=== PRODUCT_CONFIG entries (confirmed only) ===");
  for (const product of PRODUCTS) {
    const prod = resolutions.find((r) => r.slug === product.slug && r.stack === "prod")!;
    const sandbox = resolutions.find((r) => r.slug === product.slug && r.stack === "sandbox")!;
    if (prod.chosen && sandbox.chosen) {
      console.log(`"${product.slug}": {
  marker: "${product.title}",
  sandboxBreadcrumbUid: "${sandbox.chosen.uid}",
  prodBreadcrumbUid: "${prod.chosen.uid}",
},`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
