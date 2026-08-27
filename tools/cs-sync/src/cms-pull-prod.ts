#!/usr/bin/env node

/**
 * Prod → Git Sync
 *
 * A writer who edits a page directly in the Production CMS should see that edit
 * come back as a reviewable PR rather than diverging silently from the repo.
 * This script detects those edits and stages them; prod-sync-open-prs.ts turns
 * the staged result into one PR per editor.
 *
 * A change qualifies when all four hold:
 *
 *   1. The entry is published to the Production environment.
 *   2. The entry is reachable from the Production left navigation. Publishing
 *      alone is not enough — 58 entries in this stack are published and
 *      unreachable, and mirroring those would add pages to the repo that no
 *      reader can find.
 *   3. It is not an echo of the Sandbox → Prod promotion. Content the promotion
 *      copied over already has its own PR from the Sandbox pull, and without
 *      this check one writer action produced two identical PRs. The test is the
 *      `src-hash-<hash>` tag promotion stamps on every entry it writes: if
 *      re-fingerprinting the live Prod entry reproduces that tag, Prod is still
 *      exactly what promotion wrote, so there is no human edit here. See
 *      lib/promotion-guard.ts, which uses the same fingerprint from the other
 *      direction.
 *   4. The rendered markdown actually differs from what is on disk.
 *
 * Rather than writing into cs-docs/ directly, this stages files under
 * .prod-sync-staging/ with a manifest grouping them by editor. That is what lets
 * the PR script build one branch per editor: it applies a single bundle onto a
 * clean checkout of main, so a PR contains exactly one person's changes.
 *
 * Triggered by: sandbox-auto-promote-csdocs.yml, on a 5-minute cron. That
 * workflow shares a concurrency group with the manual promote workflow so this
 * never reads Prod mid-write.
 *
 * Environment: PROD (read-only), plus SANDBOX (read-only) if credentials are
 * supplied. Writes to neither stack. Sandbox is optional because the src-hash
 * tag makes echo detection self-contained on the Prod entry.
 *
 * Usage:
 *   npm run cms-pull-prod
 *   PROD_SYNC_DRY_RUN=1 npm run cms-pull-prod    # report only, stage nothing
 */

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { buildDocIndex, resolveEntry } from "./doc-index.js";
import { ProdPromoteClient, type PublishedProdEntry } from "./lib/prod-promote-client.js";
import { SandboxClient } from "./lib/sandbox-client.js";
import {
  contentsEqual,
  diffFingerprint,
  extractSrcHashFromTags,
  type ContentstackEntry,
} from "./lib/entry-content.js";
import { getUserName } from "./lib/user-index.js";
import { resolveEnvironment, type ResolvedEnvironment } from "./lib/environment-index.js";
import {
  MIN_EXPECTED_NAV_NODES,
  buildNavMembership,
  crossCheckProduct,
  findNavPosition,
  type NavMembership,
  type NavPosition,
} from "./lib/nav-membership.js";
import {
  diffMarkdownFields,
  entryToMarkdown,
  type DocsArticleLike,
  type MarkdownField,
} from "./lib/entry-to-markdown.js";
import {
  resolveProductSlugFromBreadcrumb,
  resolveProductSlugFromTitle,
} from "./lib/content-type-mappings/docs-article.js";
// Not imported from nav-apply.ts: that module runs main() and demands
// CONTENTSTACK_DOCS_STACK_* credentials at import time.
import { articleFileName, slugify } from "./lib/nav-shared.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "../../..");
const DOCS_ROOT = "cs-docs";
const STAGING_DIR = path.join(__dirname, "..", ".prod-sync-staging");
const SUMMARY_PATH = path.join(__dirname, "..", ".cms-pull-prod-summary.json");

/**
 * Above this many file removals in one run, the delete pass refuses to act.
 *
 * A run that wants to delete dozens of files is far more likely to be looking
 * at a partial nav walk or a token that lost read scope than at a genuine
 * cleanup, and a wrong bulk delete is the most expensive mistake this pipeline
 * can make. Raise deliberately via PROD_SYNC_MAX_DELETIONS when a real cleanup
 * is expected.
 */
const DEFAULT_MAX_DELETIONS = 10;

interface Config {
  prodApiKey: string;
  prodToken: string;
  /** Optional. Only used as a rollout fallback for entries with no src-hash tag. */
  sandboxApiKey?: string;
  sandboxToken?: string;
  environmentName: string;
  maxDeletions: number;
  dryRun: boolean;
}

export type ChangeKind = "created" | "updated" | "deleted";

export interface ChangedFile {
  /** Repo-relative path, e.g. cs-docs/assets/create-and-manage-assets/foo.md */
  filePath: string;
  entryUid: string;
  url: string;
  /** Nav folder chain, product slug first. Empty for deletions. */
  navChain: string[];
  changeKind: ChangeKind;
  fieldsModified: MarkdownField[];
  updatedAt: string;
  /** Set when the nav and the entry's breadcrumb disagree about the product. */
  warning?: string;
}

export interface EditorBundle {
  editorUid: string;
  editorName: string;
  /** Filename- and branch-safe form of editorName. */
  branchSlug: string;
  files: ChangedFile[];
}

export interface PullSummary {
  generatedAt: string;
  environment: string;
  bundles: EditorBundle[];
  stats: Record<string, number>;
}

/** Editor key for files removed because their entry left Production or the nav. */
const REMOVAL_EDITOR_UID = "__unpublished__";
const REMOVAL_EDITOR_NAME = "(entry unpublished or removed from nav)";

function loadConfig(): Config {
  const stackType = process.env.STACK_TYPE;

  // csdocs only. api_detail_page has never been verified against a real schema,
  // and api-docs has no left navigation, so the nav gate that makes this script
  // safe cannot apply there. Failing loudly beats silently mirroring api-docs
  // through logic that was never designed for it.
  if (stackType && stackType !== "csdocs") {
    throw new Error(
      `STACK_TYPE=${stackType} is not supported by the Prod → GitHub sync. This path is csdocs ` +
        `only: the nav-membership gate has no equivalent in api-docs.`,
    );
  }

  const prodApiKey = process.env.PROD_CSDOCS_STACK_API_KEY;
  const prodToken = process.env.PROD_CSDOCS_STACK_MANAGEMENT_TOKEN;
  if (!prodApiKey || !prodToken) {
    throw new Error("Missing PROD_CSDOCS_STACK_API_KEY / PROD_CSDOCS_STACK_MANAGEMENT_TOKEN");
  }

  // Sandbox is optional. Echo suppression is primarily the src-hash tag on the
  // Prod entry itself, which needs no second stack. Sandbox read access only
  // sharpens the answer for entries promoted before that tag existed, so a
  // missing credential degrades accuracy during the rollout rather than
  // breaking the run.
  const sandboxApiKey = process.env.CSDOCS_SANDBOX_STACK_API_KEY;
  const sandboxToken = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN;

  const maxDeletions = Number.parseInt(
    process.env.PROD_SYNC_MAX_DELETIONS || String(DEFAULT_MAX_DELETIONS),
    10,
  );

  return {
    prodApiKey,
    prodToken,
    ...(sandboxApiKey && sandboxToken ? { sandboxApiKey, sandboxToken } : {}),
    // A name, not a UID. resolveEnvironment turns it into the UID that publish
    // records actually carry.
    environmentName: process.env.PROD_ENVIRONMENT || "production",
    maxDeletions: Number.isFinite(maxDeletions) ? maxDeletions : DEFAULT_MAX_DELETIONS,
    dryRun: process.env.PROD_SYNC_DRY_RUN === "1",
  };
}

/**
 * An editor's branch name fragment, stable across runs.
 *
 * The uid fragment is not decoration: prod-sync-open-prs.ts reuses an editor's
 * already-open PR by looking it up by branch name, so the same editor has to
 * resolve to the same slug on every run or every run opens a duplicate PR.
 * Display names alone cannot carry that — two editors can slugify identically,
 * and the collision suffix that used to disambiguate them was assigned by
 * encounter order *within a run*, so it moved when the set of editors changed.
 */
export function branchSlugFor(name: string, editorUid: string): string {
  const base = slugify(name) || "unknown-editor";
  const fragment = createHash("sha256").update(editorUid).digest("hex").slice(0, 8);
  return `${base}-${fragment}`;
}

/**
 * Where a page that has no file yet should be written: the nav folder chain,
 * plus the filename nav-apply.ts would have given it.
 *
 * articleFileName drops the url's first segment and joins the rest with "-",
 * so /assets/create-a-folder becomes create-a-folder.md. Reused rather than
 * reimplemented so a page created in Prod lands exactly where the bulk nav
 * rebuild would have put it.
 */
function newFilePathFor(position: NavPosition, url: string): string | null {
  const name = articleFileName(url);
  if (!name) return null;
  const dir = position.chain.join("/");
  return dir ? `${DOCS_ROOT}/${dir}/${name}` : `${DOCS_ROOT}/${name}`;
}

/** The product slug the entry's own fields claim, for cross-checking the nav. */
function claimedProductSlug(entry: ContentstackEntry): string | null {
  return (
    resolveProductSlugFromBreadcrumb(entry.breadcrumb as never) ??
    resolveProductSlugFromTitle((entry.title as string) ?? "")
  );
}

async function main(): Promise<void> {
  console.log("🔄 Prod → Git Sync\n");

  const config = loadConfig();

  const client = new ProdPromoteClient({
    apiKey: config.prodApiKey,
    managementToken: config.prodToken,
    contentTypeUid: "docs_article",
    locale: "en-us",
  });

  const sandboxClient =
    config.sandboxApiKey && config.sandboxToken
      ? new SandboxClient({
          apiKey: config.sandboxApiKey,
          managementToken: config.sandboxToken,
          contentTypeUid: "docs_article",
          locale: "en-us",
        })
      : null;

  // ── Step 1: what is the Production environment's UID? ──────────────────────
  const environment = await resolveEnvironment(config.prodApiKey, config.prodToken, config.environmentName);
  console.log(`📍 Source: Prod (csdocs)`);
  console.log(`📊 Environment: ${environment.name} → ${environment.uid}${environment.confirmed ? "" : " (unconfirmed)"}`);
  if (config.dryRun) console.log("🧪 DRY RUN: nothing will be staged");

  // ── Step 2: where does the left nav reach? ─────────────────────────────────
  const membership = await buildNavMembership(config.prodApiKey, config.prodToken);
  console.log(
    `🧭 Nav: ${membership.navNodeCount} nodes, ${membership.byEntryUid.size} entries by reference, ` +
      `${membership.byUrl.size} by url`,
  );
  for (const warning of membership.warnings.slice(0, 10)) console.log(`   ⚠️  ${warning}`);
  if (membership.warnings.length > 10) {
    console.log(`   ⚠️  …and ${membership.warnings.length - 10} more nav warnings`);
  }

  // A truncated nav walk looks identical to "the nav is nearly empty", and the
  // delete pass would read that as every file on disk having been removed from
  // the nav. Stop instead.
  const navTrusted = membership.navNodeCount >= MIN_EXPECTED_NAV_NODES;
  if (!navTrusted) {
    throw new Error(
      `Nav walk returned only ${membership.navNodeCount} nodes (expected at least ` +
        `${MIN_EXPECTED_NAV_NODES}). Treating this as a failed fetch rather than an empty nav, ` +
        `because continuing would let the delete pass remove live docs.`,
    );
  }

  // ── Step 3: published Prod entries, at their published version ─────────────
  const published = await client.getPublishedEntries(environment);
  console.log(`📋 ${published.length} entries published to ${environment.name}\n`);

  const stats = {
    published: published.length,
    unresolved: 0,
    notInNav: 0,
    promotionEcho: 0,
    unchanged: 0,
    ambiguous: 0,
    noContent: 0,
    created: 0,
    updated: 0,
    deleted: 0,
    navMismatch: 0,
  };

  const docIndex = buildDocIndex(REPO_ROOT, DOCS_ROOT);
  const changes: ChangedFile[] = [];
  const staged = new Map<string, string>(); // repo-relative path -> file content
  const liveEntryUids = new Set<string>();

  for (const item of published) {
    const outcome = await evaluate(item, {
      sandboxClient,
      membership,
      docIndex,
      stats,
    });

    if (outcome.kind === "skip") continue;

    liveEntryUids.add(item.uid);
    if (outcome.kind === "in-nav-unchanged") continue;

    staged.set(outcome.change.filePath, outcome.content);
    changes.push(outcome.change);
    if (outcome.change.changeKind === "created") stats.created++;
    else stats.updated++;

    console.log(`  ✓ ${outcome.change.changeKind} ${outcome.change.filePath}`);
    console.log(`    ${outcome.change.fieldsModified.join(", ") || "no field diff"}`);
  }

  // ── Step 5: removals ──────────────────────────────────────────────────────
  //
  // A file is a removal candidate only when it carries the `uid` frontmatter
  // marker this sync stamps. A hand-authored file that happens to share a url
  // has no marker and is never at risk.
  const removals: ChangedFile[] = [];
  for (const doc of docIndex.files) {
    if (!doc.uid) continue;
    if (liveEntryUids.has(doc.uid)) continue;
    removals.push({
      filePath: doc.relPath,
      entryUid: doc.uid,
      url: doc.url ?? "",
      navChain: [],
      changeKind: "deleted",
      fieldsModified: [],
      updatedAt: new Date().toISOString(),
    });
  }

  // Guard 2: a run where nothing synced is far more likely to be a broken token
  // than a stack where every page was simultaneously unpublished.
  const anythingSynced = liveEntryUids.size > 0;
  let deletionsApplied: ChangedFile[] = [];

  if (removals.length === 0) {
    // nothing to do
  } else if (!anythingSynced) {
    console.log(
      `\n🛑 ${removals.length} file(s) look de-navved but not a single entry resolved this run. ` +
        `Treating that as an API failure and skipping the delete pass.`,
    );
  } else if (removals.length > config.maxDeletions) {
    console.log(
      `\n🛑 ${removals.length} file(s) would be deleted, over the limit of ${config.maxDeletions}. ` +
        `Skipping the delete pass. Review the list below, then re-run with ` +
        `PROD_SYNC_MAX_DELETIONS set higher if this is a genuine cleanup.`,
    );
    for (const removal of removals.slice(0, 25)) console.log(`     - ${removal.filePath}`);
    if (removals.length > 25) console.log(`     …and ${removals.length - 25} more`);
  } else {
    deletionsApplied = removals;
    stats.deleted = removals.length;
    for (const removal of removals) console.log(`  ✗ deleted ${removal.filePath}`);
  }

  // ── Step 6+7: stage, and write the per-editor manifest ────────────────────
  const summary = buildSummary(
    [...changes, ...deletionsApplied],
    published,
    environment.name,
    stats,
  );

  if (!config.dryRun) {
    writeStaging(staged);
    fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2), "utf-8");
  }

  report(summary, stats, config.dryRun);
}

interface EvaluateContext {
  /** Null when no Sandbox credentials were supplied. See loadConfig. */
  sandboxClient: SandboxClient | null;
  membership: NavMembership;
  docIndex: ReturnType<typeof buildDocIndex>;
  stats: Record<string, number>;
}

type Outcome =
  | { kind: "skip" }
  | { kind: "in-nav-unchanged" }
  | { kind: "change"; change: ChangedFile; content: string };

/** Run one published entry through the four qualifying conditions. */
async function evaluate(item: PublishedProdEntry, ctx: EvaluateContext): Promise<Outcome> {
  const entry = item.entry;
  const url = (entry.url as string) || "";

  if (item.unresolved) {
    console.log(`  ⚠️  ${item.title}: published version unreadable, skipped`);
    ctx.stats.unresolved++;
    return { kind: "skip" };
  }

  if (!entry.title || !url) {
    console.log(`  ⚠️  ${item.uid}: no title or url, skipped`);
    return { kind: "skip" };
  }

  // Condition 2 — reachable from the left nav.
  const position = findNavPosition(ctx.membership, { uid: item.uid, url });
  if (!position) {
    ctx.stats.notInNav++;
    return { kind: "skip" };
  }

  // Condition 3 — is this a real Prod edit, or content promotion just wrote it?
  //
  // The src-hash tag is a fingerprint of the content promotion last pushed here.
  // Reproducing it means nobody has touched Prod since, so there is no human
  // edit to bring back. Timestamps cannot answer this: promotion always writes
  // Prod after the Sandbox publish, so Prod always looks newer.
  const expectedHash = extractSrcHashFromTags(entry.tags);
  if (expectedHash !== null && expectedHash === diffFingerprint(entry)) {
    ctx.stats.promotionEcho++;
    return { kind: "skip" };
  }

  // No src-hash tag means no baseline: either the entry predates the fingerprint
  // or it was created directly in Prod. Both should fall through, and the
  // disk comparison below is the real backstop. When Sandbox credentials are
  // available we can do better than that during the rollout, so compare against
  // Sandbox's *published* version (not its latest, since an unpublished Sandbox
  // draft would make the two look different and reintroduce the duplicate PR
  // this check exists to stop).
  if (expectedHash === null && ctx.sandboxClient) {
    const sandboxMatch = await ctx.sandboxClient.getPublishedEntryByUrl(url);
    if (sandboxMatch && !sandboxMatch.unresolved && contentsEqual(entry, sandboxMatch.entry)) {
      ctx.stats.promotionEcho++;
      return { kind: "skip" };
    }
  }

  const content = entryToMarkdown(entry as DocsArticleLike, { urlOverride: url });
  if (!content) {
    // No article_content blocks. Writing a title-only file here is what made
    // every previous PR unmergeable, so the entry is reported and skipped.
    console.log(`  ⚠️  ${item.title}: entry has no article content, skipped`);
    ctx.stats.noContent++;
    return { kind: "skip" };
  }

  const resolved = resolveEntry(ctx.docIndex, { uid: item.uid, url });

  if (resolved.status === "ambiguous") {
    console.log(
      `  ! ${resolved.candidates.length} cs-docs files share url ${url}, skipped as ambiguous ` +
        `(${resolved.candidates.map((c) => c.relPath).join(", ")})`,
    );
    ctx.stats.ambiguous++;
    return { kind: "skip" };
  }

  let filePath: string;
  let previous: string | null;
  let changeKind: ChangeKind;

  if (resolved.status === "unmatched") {
    const derived = newFilePathFor(position, url);
    if (!derived) {
      console.log(`  ! ${item.title}: cannot derive a filename from url "${url}", skipped`);
      ctx.stats.ambiguous++;
      return { kind: "skip" };
    }
    filePath = derived;
    previous = null;
    changeKind = "created";
  } else {
    filePath = resolved.file.relPath;
    previous = fs.readFileSync(resolved.file.filePath, "utf-8");
    changeKind = "updated";
  }

  // Condition 4 — does anything actually differ? Without this the script
  // rewrites every published file on every 5-minute run.
  if (previous !== null && previous === content) {
    ctx.stats.unchanged++;
    return { kind: "in-nav-unchanged" };
  }

  const mismatch = crossCheckProduct(position, claimedProductSlug(entry));
  if (mismatch) {
    console.log(`  ⚠️  ${item.title}: ${mismatch}`);
    ctx.stats.navMismatch++;
  }

  return {
    kind: "change",
    content,
    change: {
      filePath,
      entryUid: item.uid,
      url,
      navChain: position.chain,
      changeKind,
      fieldsModified: diffMarkdownFields(previous, content),
      updatedAt: (entry.updated_at as string) || new Date().toISOString(),
      ...(mismatch ? { warning: mismatch } : {}),
    },
  };
}

/**
 * Group changes into one bundle per editor, which becomes one PR each.
 *
 * The editor is the entry's `updated_by`. Grouping by it is what makes a Release
 * that bulk-publishes five Assets pages produce one PR with five files rather
 * than five PRs: one person pressed publish once, so it reads as one change.
 *
 * Removals have no meaningful editor (nobody edited the entry, it stopped being
 * published) so they collect in their own bundle.
 */
export function buildSummary(
  changes: ChangedFile[],
  published: PublishedProdEntry[],
  environmentName: string,
  stats: Record<string, number>,
): PullSummary {
  const editorByEntry = new Map<string, string>();
  for (const item of published) {
    const updatedBy = item.entry.updated_by;
    if (typeof updatedBy === "string") editorByEntry.set(item.uid, updatedBy);
  }

  const bundles = new Map<string, EditorBundle>();

  for (const change of changes) {
    const editorUid =
      change.changeKind === "deleted"
        ? REMOVAL_EDITOR_UID
        : editorByEntry.get(change.entryUid) ?? "unknown";
    const editorName =
      editorUid === REMOVAL_EDITOR_UID ? REMOVAL_EDITOR_NAME : getUserName(editorUid);

    let bundle = bundles.get(editorUid);
    if (!bundle) {
      bundle = { editorUid, editorName, branchSlug: branchSlugFor(editorName, editorUid), files: [] };
      bundles.set(editorUid, bundle);
    }
    bundle.files.push(change);
  }

  // Defensive only, now that branchSlugFor carries a per-uid fragment: two
  // editors would have to collide on that hash to reach this. Kept because the
  // cost of a collision here is one PR silently overwriting another.
  const usedSlugs = new Set<string>();
  for (const bundle of bundles.values()) {
    let slug = bundle.branchSlug;
    let n = 2;
    while (usedSlugs.has(slug)) slug = `${bundle.branchSlug}-${n++}`;
    usedSlugs.add(slug);
    bundle.branchSlug = slug;
  }

  for (const bundle of bundles.values()) {
    bundle.files.sort((a, b) => a.filePath.localeCompare(b.filePath));
  }

  return {
    generatedAt: new Date().toISOString(),
    environment: environmentName,
    bundles: [...bundles.values()].sort((a, b) => a.branchSlug.localeCompare(b.branchSlug)),
    stats: { ...stats },
  };
}

/**
 * Write the staged files under .prod-sync-staging/, mirroring their repo paths.
 *
 * The directory is emptied first so a file that stopped qualifying between runs
 * cannot linger and end up in someone's PR.
 */
function writeStaging(staged: Map<string, string>): void {
  fs.rmSync(STAGING_DIR, { recursive: true, force: true });
  fs.mkdirSync(STAGING_DIR, { recursive: true });
  for (const [relPath, content] of staged) {
    const target = path.join(STAGING_DIR, relPath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content, "utf-8");
  }
}

function report(summary: PullSummary, stats: Record<string, number>, dryRun: boolean): void {
  console.log("");
  console.log(`✅ ${stats.created} created, ${stats.updated} updated, ${stats.deleted} deleted`);
  console.log(
    `   skipped: ${stats.notInNav} not in nav, ${stats.promotionEcho} promotion echoes, ` +
      `${stats.unchanged} unchanged, ${stats.ambiguous} ambiguous, ${stats.noContent} without content`,
  );
  if (stats.unresolved > 0) {
    console.log(
      `   🛑 ${stats.unresolved} skipped: published version unreadable — run ` +
        `\`npm run verify-publish-details\``,
    );
  }
  if (stats.navMismatch > 0) {
    console.log(`   ⚠️  ${stats.navMismatch} entries whose breadcrumb disagrees with the nav`);
  }

  console.log("");
  for (const bundle of summary.bundles) {
    console.log(`   📦 ${bundle.editorName}: ${bundle.files.length} file(s) → PR`);
  }
  if (summary.bundles.length === 0) console.log("   nothing to PR");
  if (dryRun) console.log("\n🧪 DRY RUN: nothing was staged and no summary was written");
  console.log("");
}

// Guard so the test suite can import buildSummary without running the sync.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  main().catch((error) => {
    console.error("❌ Prod → Git sync failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
