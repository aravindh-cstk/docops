import fs from "node:fs";
import path from "node:path";
import * as core from "@actions/core";
import matter from "gray-matter";
import {
  buildEntryPayload,
  resolveProductConfig,
  docTypeMapsToDocsArticle,
} from "./content-type-mappings/docs-article.js";
import { parseDocContent, parseDocFile, extractH1, type ParsedDoc } from "../parser.js";
import { markdownToHtml } from "../transform.js";
import { processImagesInHtml, rewriteMarkdownImages } from "../assets.js";
import type { ContentstackClient } from "../contentstack.js";
import type { AppConfig } from "../config.js";
import {
  getDocChanges,
  readFileAtCommit,
  type DocChange,
} from "../diff.js";

/**
 * First path segment after docsRoot, e.g. "cs-docs/assets/overview/foo.md"
 * with docsRoot "cs-docs" returns "assets". This is a pure path computation,
 * deliberately done before any frontmatter parsing so an out-of-scope
 * product's files never have to satisfy docs_article's frontmatter schema.
 */
function topLevelFolderOf(relativePath: string, docsRoot: string): string {
  const prefix = `${docsRoot}/`;
  const stripped = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
  return stripped.split("/")[0] ?? "";
}

// Shared state for the local-image → asset upload + URL rewrite pass. Populated
// as docs are processed, then acted on (file deletions) at the end of the run.
interface RewriteCtx {
  dryRun: boolean;
  rewritten: string[]; // repo-relative paths of docs whose image URLs changed
  imagesToDelete: Set<string>; // absolute paths of local images now on the CDN
  uploadedLog: Array<{ file: string; ref: string; url: string }>;
}

export interface SyncResult {
  path: string;
  action: "created" | "updated" | "unpublished" | "renamed" | "skipped";
  url?: string;
  uid?: string;
  error?: string;
}

export async function runSync(
  config: AppConfig,
  client: ContentstackClient,
  beforeSha: string,
  afterSha: string,
  opts: { dryRun?: boolean } = {},
): Promise<SyncResult[]> {
  const changes = getDocChanges(
    config.repoRoot,
    config.CS_DOCS_ROOT,
    beforeSha,
    afterSha,
  );

  const ctx: RewriteCtx = {
    dryRun: !!opts.dryRun,
    rewritten: [],
    imagesToDelete: new Set(),
    uploadedLog: [],
  };

  const results: SyncResult[] = [];
  const CONCURRENCY = 5;

  for (let i = 0; i < changes.length; i += CONCURRENCY) {
    const batch = changes.slice(i, i + CONCURRENCY);
    const settled = await Promise.allSettled(
      batch.map((change) => processChange(config, client, change, beforeSha, ctx)),
    );
    for (let j = 0; j < settled.length; j++) {
      const s = settled[j];
      const result: SyncResult =
        s.status === "fulfilled"
          ? s.value
          : {
              path: batch[j].relativePath,
              action: "skipped",
              error: s.reason instanceof Error ? s.reason.message : String(s.reason),
            };
      results.push(result);
      logResult(result);
    }
  }

  // Delete local image files now uploaded to the CDN (once, after every doc that
  // referenced them has been rewritten). Guarded to the repo for safety.
  if (!ctx.dryRun) {
    for (const img of ctx.imagesToDelete) {
      if (img.startsWith(config.repoRoot + path.sep) && fs.existsSync(img)) {
        fs.unlinkSync(img);
      }
    }
  }

  writeSummary(results, ctx);
  const failures = results.filter((r) => r.error);
  if (failures.length > 0) {
    throw new Error(`Sync failed for ${failures.length} file(s)`);
  }

  return results;
}

/**
 * Upload any LOCAL images referenced by a doc to Contentstack Assets, rewrite the
 * doc's image URLs to the CDN URLs (in the repo file, preserving frontmatter),
 * and record the now-unused local files for deletion. Returns the body to use for
 * the CMS payload (with CDN URLs). In dry-run mode nothing is uploaded/written.
 */
async function rewriteDocImages(
  doc: ParsedDoc,
  relPath: string,
  client: ContentstackClient,
  ctx: RewriteCtx,
): Promise<string> {
  const rawBefore = fs.readFileSync(doc.filePath, "utf8");
  const { markdown: rawAfter, uploaded } = await rewriteMarkdownImages(
    rawBefore,
    doc.filePath,
    client,
    { dryRun: ctx.dryRun },
  );
  if (uploaded.length === 0) return doc.body;

  for (const u of uploaded) ctx.uploadedLog.push({ file: relPath, ref: u.ref, url: u.url });

  if (ctx.dryRun || rawAfter === rawBefore) return doc.body;

  fs.writeFileSync(doc.filePath, rawAfter, "utf8");
  ctx.rewritten.push(relPath);
  for (const u of uploaded) ctx.imagesToDelete.add(u.resolved);
  return matter(rawAfter).content.trim();
}

async function processChange(
  config: AppConfig,
  client: ContentstackClient,
  change: DocChange,
  beforeSha: string,
  ctx: RewriteCtx,
): Promise<SyncResult> {
  if (change.type === "deleted") {
    return unpublishDeleted(config, client, change, beforeSha);
  }
  if (change.type === "renamed") {
    return handleRename(config, client, change, beforeSha, ctx);
  }

  // Path-only check, before any frontmatter parsing, so a product with no
  // verified docs_article mapping never has to satisfy that schema at all.
  const topLevelFolder = topLevelFolderOf(change.relativePath, config.CS_DOCS_ROOT);
  if (!resolveProductConfig(topLevelFolder)) {
    return { path: change.relativePath, action: "skipped" };
  }

  const doc =
    change.type === "added" || change.type === "modified"
      ? parseDocFile(
          config.repoRoot,
          config.CS_DOCS_ROOT,
          change.relativePath,
        )
      : null;

  if (!doc) {
    return { path: change.relativePath, action: "skipped", error: "Could not parse doc" };
  }

  if (!docTypeMapsToDocsArticle(doc.frontMatter.doc_type)) {
    return { path: change.relativePath, action: "skipped" };
  }

  const body = await rewriteDocImages(doc, change.relativePath, client, ctx);

  const split = extractH1(body);
  if (!split) {
    return { path: change.relativePath, action: "skipped", error: "missing a top-level H1 heading" };
  }
  if (split.h1 !== doc.frontMatter.title) {
    return {
      path: change.relativePath,
      action: "skipped",
      error: `frontmatter 'title' ("${doc.frontMatter.title}") does not match the H1 heading ("${split.h1}")`,
    };
  }

  let html = markdownToHtml(body);
  html = await processImagesInHtml(html, doc.filePath, client);

  let existing = await client.findEntryByUrl(doc.frontMatter.url);

  // The doc's url may have changed in place (same file, no rename) — fall back to
  // the url it had before this change so we update that entry instead of creating
  // a duplicate that collides on title.
  if (!existing && change.type === "modified") {
    const oldContent = readFileAtCommit(config.repoRoot, beforeSha, change.relativePath);
    const oldDoc = oldContent
      ? parseDocContent(config.repoRoot, config.CS_DOCS_ROOT, change.relativePath, oldContent)
      : null;
    if (oldDoc && oldDoc.frontMatter.url !== doc.frontMatter.url) {
      existing = await client.findEntryByUrl(oldDoc.frontMatter.url);
    }
  }

  const payload = buildEntryPayload({
    topLevelFolder,
    h1: split.h1,
    htmlContent: html,
    url: doc.frontMatter.url,
    description: doc.frontMatter.description,
    existingArticleContent: existing?.article_content,
  });

  if (existing) {
    const updated = await client.updateEntry(existing.uid, payload);
    return {
      path: change.relativePath,
      action: "updated",
      url: doc.frontMatter.url,
      uid: updated.uid,
    };
  }

  const created = await client.createEntry(payload);
  return {
    path: change.relativePath,
    action: "created",
    url: doc.frontMatter.url,
    uid: created.uid,
  };
}

async function unpublishDeleted(
  config: AppConfig,
  client: ContentstackClient,
  change: DocChange,
  beforeSha: string,
): Promise<SyncResult> {
  const topLevelFolder = topLevelFolderOf(change.relativePath, config.CS_DOCS_ROOT);
  if (!resolveProductConfig(topLevelFolder)) {
    return { path: change.relativePath, action: "skipped" };
  }

  const content = readFileAtCommit(
    config.repoRoot,
    beforeSha,
    change.relativePath,
  );

  if (!content) {
    return {
      path: change.relativePath,
      action: "skipped",
      error: "Could not read deleted file at parent commit",
    };
  }

  const doc = parseDocContent(
    config.repoRoot,
    config.CS_DOCS_ROOT,
    change.relativePath,
    content,
  );

  if (!docTypeMapsToDocsArticle(doc.frontMatter.doc_type)) {
    return { path: change.relativePath, action: "skipped" };
  }

  const existing = await client.findEntryByUrl(doc.frontMatter.url);
  if (!existing) {
    return {
      path: change.relativePath,
      action: "skipped",
      url: doc.frontMatter.url,
      error: "No entry found for deleted doc URL",
    };
  }

  await client.unpublishEntry(existing.uid);
  return {
    path: change.relativePath,
    action: "unpublished",
    url: doc.frontMatter.url,
    uid: existing.uid,
  };
}

async function handleRename(
  config: AppConfig,
  client: ContentstackClient,
  change: DocChange,
  beforeSha: string,
  ctx: RewriteCtx,
): Promise<SyncResult> {
  // Where the file ends up decides scope. A rename into or out of an
  // unconfigured product folder is left alone rather than guessed at.
  const topLevelFolder = topLevelFolderOf(change.relativePath, config.CS_DOCS_ROOT);
  if (!resolveProductConfig(topLevelFolder)) {
    return { path: change.relativePath, action: "skipped" };
  }

  const newDoc = parseDocFile(config.repoRoot, config.CS_DOCS_ROOT, change.relativePath);
  if (!newDoc) {
    return { path: change.relativePath, action: "skipped", error: "Could not parse renamed doc" };
  }

  if (!docTypeMapsToDocsArticle(newDoc.frontMatter.doc_type)) {
    return { path: change.relativePath, action: "skipped" };
  }

  // The old path may belong to a product or convention we don't parse
  // successfully (e.g. a rename in from an unconfigured folder). That's not a
  // reason to fail the rename, it just means we can't look up an old entry to
  // update in place and fall back to treating it as a create.
  let oldDoc: ParsedDoc | null = null;
  if (change.oldRelativePath) {
    try {
      const oldContent = readFileAtCommit(config.repoRoot, beforeSha, change.oldRelativePath);
      oldDoc = oldContent
        ? parseDocContent(config.repoRoot, config.CS_DOCS_ROOT, change.oldRelativePath, oldContent)
        : null;
    } catch {
      oldDoc = null;
    }
  }

  const existing = oldDoc
    ? await client.findEntryByUrl(oldDoc.frontMatter.url)
    : null;

  const body = await rewriteDocImages(newDoc, change.relativePath, client, ctx);

  const split = extractH1(body);
  if (!split) {
    return { path: change.relativePath, action: "skipped", error: "missing a top-level H1 heading" };
  }
  if (split.h1 !== newDoc.frontMatter.title) {
    return {
      path: change.relativePath,
      action: "skipped",
      error: `frontmatter 'title' ("${newDoc.frontMatter.title}") does not match the H1 heading ("${split.h1}")`,
    };
  }

  let html = markdownToHtml(body);
  html = await processImagesInHtml(html, newDoc.filePath, client);
  const payload = buildEntryPayload({
    topLevelFolder,
    h1: split.h1,
    htmlContent: html,
    url: newDoc.frontMatter.url,
    description: newDoc.frontMatter.description,
    existingArticleContent: existing?.article_content,
  });

  if (existing) {
    const updated = await client.updateEntry(existing.uid, payload);
    return {
      path: change.relativePath,
      action: "renamed",
      url: newDoc.frontMatter.url,
      uid: updated.uid,
    };
  }

  // Old entry not found — fall back to create
  const created = await client.createEntry(payload);
  return {
    path: change.relativePath,
    action: "created",
    url: newDoc.frontMatter.url,
    uid: created.uid,
  };
}

function logResult(result: SyncResult): void {
  const status = result.error ? "FAIL" : "OK";
  const detail = result.error ?? `${result.action} ${result.url ?? ""} ${result.uid ?? ""}`.trim();
  console.log(`[${status}] ${result.path}: ${detail}`);
}

function writeSummary(results: SyncResult[], ctx: RewriteCtx): void {
  const lines = [
    "## Contentstack docs sync",
    "",
    "| File | Action | URL | UID |",
    "|------|--------|-----|-----|",
  ];

  for (const r of results) {
    lines.push(
      `| ${r.path} | ${r.error ? `ERROR: ${r.error}` : r.action} | ${r.url ?? ""} | ${r.uid ?? ""} |`,
    );
  }

  if (ctx.uploadedLog.length > 0) {
    lines.push(
      "",
      `### Local images ${ctx.dryRun ? "that would be uploaded (dry-run)" : "uploaded to Assets"}`,
      "",
      "| File | Local ref | Asset URL |",
      "|------|-----------|-----------|",
    );
    for (const u of ctx.uploadedLog) lines.push(`| ${u.file} | \`${u.ref}\` | ${u.url} |`);
    if (!ctx.dryRun) {
      lines.push(
        "",
        `Rewrote ${ctx.rewritten.length} doc(s) to CDN URLs and deleted ${ctx.imagesToDelete.size} local image file(s).`,
      );
    }
  }

  const summary = lines.join("\n");
  if (typeof core.summary?.addRaw === "function") {
    core.summary.addRaw(summary);
  } else {
    console.log(summary);
  }
}
