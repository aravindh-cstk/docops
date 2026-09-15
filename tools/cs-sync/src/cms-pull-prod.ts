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
import { credentialNamesFor, prodCredentials, sandboxCredentials } from "./lib/credentials.js";

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

/**
 * The delete pass is off, deliberately, and must stay off until Build 3.
 *
 * It was dormant rather than disabled for its whole life: it only ever considers
 * files carrying the `uid` frontmatter marker, and no file carried one, so
 * `if (!doc.uid) continue` skipped every file on every run. Stamping uid arms it
 * across roughly 2,000 files at once, and it is not ready for that.
 *
 * The reason is what `liveEntryUids` actually means. It is populated only after
 * an entry is fully evaluated, so it reads "entry I processed this run", not
 * "entry that is alive". Six routine paths leave a live, published entry out of
 * it: promotionEcho (the common case, firing for every entry promotion last
 * wrote that nobody has touched since), notInNav, noContent, unresolved, an
 * entry missing a title or url, and any thrown error. Every one of their files
 * would become a deletion candidate.
 *
 * The cap would catch the first wave, so the realistic failure is not mass
 * deletion but a permanent 🛑 every five minutes, followed by someone raising
 * PROD_SYNC_MAX_DELETIONS to clear it and deleting live documentation.
 *
 * Re-enabling belongs with Build 3 and needs `liveEntryUids` populated from the
 * published list rather than from successful evaluation. Flip this to true only
 * alongside that change.
 */
const DELETE_PASS_ENABLED = false;

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

  // Accepts CONTENTSTACK_DOCS_STACK_* first and the older PROD_CSDOCS_STACK_*
  // pair as a fallback. See lib/credentials.ts for why both are read.
  const prod = prodCredentials("csdocs");
  if (!prod) {
    throw new Error(
      `Missing Prod csdocs credentials. Set one of: ${credentialNamesFor("csdocs", "prod").join(", ")}`,
    );
  }
  const prodApiKey = prod.apiKey;
  const prodToken = prod.managementToken;

  // Sandbox is optional. Echo suppression is primarily the src-hash tag on the
  // Prod entry itself, which needs no second stack. Sandbox read access only
  // sharpens the answer for entries promoted before that tag existed, so a
  // missing credential degrades accuracy during the rollout rather than
  // breaking the run.
  const sandbox = sandboxCredentials("csdocs");
  const sandboxApiKey = sandbox?.apiKey;
  const sandboxToken = sandbox?.managementToken;

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
 * An editor's branch name fragment.
 *
 * Deliberately just the display name, slugified. An earlier version appended
 * a hash of the editor's uid so the slug would resolve identically across
 * runs, which is what prod-sync-open-prs.ts used to reuse an editor's
 * already-open PR (look up by exact branch name). That put an ID-derived
 * value in every branch name, visible in the PR's URL to anyone with repo
 * access, which is not acceptable here. PR reuse now matches on the editor's
 * uid via an invisible marker in the PR description instead (see
 * editorMarker in prod-sync-open-prs.ts), so this slug no longer needs to be
 * stable across runs for correctness — only branch-safe and readable. The
 * collision suffix added below still has to hold within one run (two editors
 * whose names slugify identically), but a same-editor slug moving between
 * runs is now harmless.
 */
export function branchSlugFor(name: string): string {
  return slugify(name) || "unknown-editor";
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
    failed: 0,
    mirrored: 0,
  };

  const docIndex = buildDocIndex(REPO_ROOT, DOCS_ROOT);
  const changes: ChangedFile[] = [];
  const staged = new Map<string, string>(); // repo-relative path -> file content
  const liveEntryUids = new Set<string>();

  for (const item of published) {
    // One entry must never be able to discard the whole run.
    //
    // This loop used to call evaluate() unguarded, so any throw unwound to
    // main().catch and exited 1 before a single file was committed. A Studio
    // page whose description contained a pre-escaped \" serialized to invalid
    // YAML, gray-matter threw on it, and that took the Prod → GitHub sync down
    // for every one of the 13 products for a week (40+ consecutive failed runs,
    // 2026-09-07 to 2026-09-14). Two entries had the same defect, so fixing the
    // serializer alone would only have moved the crash to the next one.
    //
    // The entry is reported, counted, and skipped. Everything else still syncs.
    let outcome: Outcome;
    try {
      outcome = await evaluate(item, {
        sandboxClient,
        membership,
        docIndex,
        stats,
      });
    } catch (error) {
      stats.failed++;
      console.log(
        `  ✗ ${item.uid} (${(item.entry.url as string) || "no url"}): ${(error as Error).message}`,
      );
      continue;
    }

    if (outcome.kind === "skip") continue;

    liveEntryUids.add(item.uid);
    if (outcome.kind === "in-nav-unchanged") continue;

    for (const change of outcome.changes) {
      staged.set(change.filePath, outcome.content);
      changes.push(change);
      if (change.changeKind === "created") stats.created++;
      else stats.updated++;

      console.log(`  ✓ ${change.changeKind} ${change.filePath}`);
      console.log(`    ${change.fieldsModified.join(", ") || "no field diff"}`);
    }
  }

  // ── Step 5: removals ──────────────────────────────────────────────────────
  //
  // A file is a removal candidate only when it carries the `uid` frontmatter
  // marker this sync stamps. A hand-authored file that happens to share a url
  // has no marker and is never at risk.
  const removals: ChangedFile[] = [];
  for (const doc of docIndex.files) {
    if (!DELETE_PASS_ENABLED) break;
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
  /** One entry can land in more than one file when the nav cross-lists it. */
  | { kind: "change"; changes: ChangedFile[]; content: string };

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

  // Where this entry's content belongs. Usually one file, but a page the nav
  // deliberately lists at two positions is mirrored as two files sharing a url,
  // and both have to be written or they drift apart.
  //
  // This used to skip a duplicated url outright as "ambiguous", on the reasoning
  // that guessing between two files is worse than doing nothing. The cost of
  // that turned out to be high: 144 published entries covering 320 files could
  // never receive a CMS edit, silently, on every run. And drifting is exactly
  // what lint.ts's checkDuplicateUrls forbids ("Diverged copies of url ... share
  // one CMS entry but their content differs"), while it accepts byte-identical
  // copies. So the copies are legitimate and the right move is to write all of
  // them, not to pick one and not to skip.
  let targets: Array<{ filePath: string; previous: string | null; changeKind: ChangeKind }>;

  if (resolved.status === "ambiguous") {
    targets = resolved.candidates.map((candidate) => ({
      filePath: candidate.relPath,
      previous: fs.readFileSync(candidate.filePath, "utf-8"),
      changeKind: "updated" as ChangeKind,
    }));
  } else if (resolved.status === "unmatched") {
    const derived = newFilePathFor(position, url);
    if (!derived) {
      console.log(`  ! ${item.title}: cannot derive a filename from url "${url}", skipped`);
      ctx.stats.ambiguous++;
      return { kind: "skip" };
    }
    targets = [{ filePath: derived, previous: null, changeKind: "created" }];
  } else {
    targets = [
      {
        filePath: resolved.file.relPath,
        previous: fs.readFileSync(resolved.file.filePath, "utf-8"),
        changeKind: "updated",
      },
    ];
  }

  // Condition 4 — does anything actually differ? Without this the script
  // rewrites every published file on every 5-minute run. With mirrored copies
  // it is per copy, so a mirror that fell out of step is repaired even when its
  // twin is already correct.
  const stale = targets.filter((t) => t.previous !== content);
  if (stale.length === 0) {
    ctx.stats.unchanged++;
    return { kind: "in-nav-unchanged" };
  }
  if (stale.length > 1) ctx.stats.mirrored += stale.length - 1;

  const mismatch = crossCheckProduct(position, claimedProductSlug(entry));
  if (mismatch) {
    console.log(`  ⚠️  ${item.title}: ${mismatch}`);
    ctx.stats.navMismatch++;
  }

  const updatedAt = (entry.updated_at as string) || new Date().toISOString();

  return {
    kind: "change",
    content,
    changes: stale.map((t) => ({
      filePath: t.filePath,
      entryUid: item.uid,
      url,
      navChain: position.chain,
      changeKind: t.changeKind,
      fieldsModified: diffMarkdownFields(t.previous, content),
      updatedAt,
      ...(mismatch ? { warning: mismatch } : {}),
    })),
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
      bundle = { editorUid, editorName, branchSlug: branchSlugFor(editorName), files: [] };
      bundles.set(editorUid, bundle);
    }
    bundle.files.push(change);
  }

  // Disambiguates two editors whose names slugify identically within this
  // run. This is the only thing branchSlug needs to guarantee now: PR reuse
  // matches on the editor's uid via a marker in the PR body (see
  // prod-sync-open-prs.ts), not on this slug, so a same-editor slug moving
  // between runs is harmless. The cost of a same-run collision going
  // unhandled is one PR silently overwriting another's branch.
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
  // Extra files written because the nav lists their page at more than one
  // position. Not a warning: it counts mirrored copies kept in step.
  if (stats.mirrored > 0) {
    console.log(
      `   ${stats.mirrored} extra file(s) written to keep cross-listed copies identical`,
    );
  }
  if (stats.unresolved > 0) {
    console.log(
      `   🛑 ${stats.unresolved} skipped: published version unreadable — run ` +
        `\`npm run verify-publish-details\``,
    );
  }
  if (stats.navMismatch > 0) {
    console.log(`   ⚠️  ${stats.navMismatch} entries whose breadcrumb disagrees with the nav`);
  }
  // Loud, because the alternative is what happened before: the run reported
  // success while quietly dropping a page every time. A non-zero count here
  // means a specific entry cannot be converted and needs looking at, not that
  // the sync is unhealthy.
  if (stats.failed > 0) {
    console.log(
      `   🛑 ${stats.failed} entries failed to convert and were skipped (see the ✗ lines above)`,
    );
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
