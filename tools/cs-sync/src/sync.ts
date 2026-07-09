import * as core from "@actions/core";
import { buildEntryPayload } from "./payload.js";
import { parseDocContent, parseDocFile, type ParsedDoc } from "./parser.js";
import { markdownToHtml } from "./transform.js";
import { processImagesInHtml } from "./assets.js";
import type { ContentstackClient } from "./contentstack.js";
import type { AppConfig } from "./config.js";
import type { SyncEntryPayload } from "./payload.js";
import {
  getDocChanges,
  readFileAtCommit,
  type DocChange,
} from "./diff.js";

export interface SyncOptions {
  /** Override which CMS content type to use per file. Defaults to config.CS_CONTENT_TYPE. */
  resolveContentType?: (doc: ParsedDoc) => string;
  /** Override how the entry payload is built per file. Defaults to buildEntryPayload. */
  buildPayload?: (doc: ParsedDoc, html: string) => SyncEntryPayload;
  /**
   * Custom entry lookup for content types that are not keyed by url.
   * Return a query object → findEntryByQuery with that query.
   * Return null → always create (skip lookup entirely).
   * Return undefined (or omit option) → fall back to url-based lookup.
   */
  resolveEntryLookup?: (doc: ParsedDoc) => Record<string, unknown> | null | undefined;
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
  options?: SyncOptions,
): Promise<SyncResult[]> {
  const changes = getDocChanges(
    config.repoRoot,
    config.CS_DOCS_ROOT,
    beforeSha,
    afterSha,
  );

  const results: SyncResult[] = [];
  const CONCURRENCY = 5;

  for (let i = 0; i < changes.length; i += CONCURRENCY) {
    const batch = changes.slice(i, i + CONCURRENCY);
    const settled = await Promise.allSettled(
      batch.map((change) => processChange(config, client, change, beforeSha, options)),
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

  writeSummary(results);
  const failures = results.filter((r) => r.error);
  if (failures.length > 0) {
    throw new Error(`Sync failed for ${failures.length} file(s)`);
  }

  return results;
}

async function resolveExistingEntry(
  client: ContentstackClient,
  doc: ParsedDoc,
  contentType: string,
  options?: SyncOptions,
): Promise<import("./contentstack.js").ContentstackEntry | null> {
  if (options?.resolveEntryLookup !== undefined) {
    const query = options.resolveEntryLookup(doc);
    if (query === null) return null;
    if (query !== undefined) return client.findEntryByQuery(query, contentType);
  }
  return client.findEntryByUrl(doc.frontMatter.url!, contentType);
}

async function processChange(
  config: AppConfig,
  client: ContentstackClient,
  change: DocChange,
  beforeSha: string,
  options?: SyncOptions,
): Promise<SyncResult> {
  if (change.type === "deleted") {
    return unpublishDeleted(config, client, change, beforeSha, options);
  }
  if (change.type === "renamed") {
    return handleRename(config, client, change, beforeSha, options);
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

  const contentType = options?.resolveContentType?.(doc) ?? config.CS_CONTENT_TYPE;

  let html = markdownToHtml(doc.body);
  html = await processImagesInHtml(html, doc.filePath, client);

  const existing = await resolveExistingEntry(client, doc, contentType, options);
  const payload = options?.buildPayload
    ? options.buildPayload(doc, html)
    : buildEntryPayload(doc.frontMatter, html, existing?.article_content);

  if (existing) {
    const updated = await client.updateEntry(existing.uid, payload, contentType);
    return {
      path: change.relativePath,
      action: "updated",
      url: doc.frontMatter.url,
      uid: updated.uid,
    };
  }

  const created = await client.createEntry(payload, contentType);
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
  options?: SyncOptions,
): Promise<SyncResult> {
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

  const contentType = options?.resolveContentType?.(doc) ?? config.CS_CONTENT_TYPE;
  const existing = await resolveExistingEntry(client, doc, contentType, options);
  if (!existing) {
    return {
      path: change.relativePath,
      action: "skipped",
      url: doc.frontMatter.url,
      error: "No entry found for deleted doc",
    };
  }

  await client.unpublishEntry(existing.uid, contentType);
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
  options?: SyncOptions,
): Promise<SyncResult> {
  const oldContent = change.oldRelativePath
    ? readFileAtCommit(config.repoRoot, beforeSha, change.oldRelativePath)
    : null;

  const oldDoc = oldContent && change.oldRelativePath
    ? parseDocContent(config.repoRoot, config.CS_DOCS_ROOT, change.oldRelativePath, oldContent)
    : null;

  const newDoc = parseDocFile(config.repoRoot, config.CS_DOCS_ROOT, change.relativePath);
  if (!newDoc) {
    return { path: change.relativePath, action: "skipped", error: "Could not parse renamed doc" };
  }

  const contentType = options?.resolveContentType?.(newDoc) ?? config.CS_CONTENT_TYPE;
  const existing = oldDoc
    ? await resolveExistingEntry(client, oldDoc, contentType, options)
    : null;

  let html = markdownToHtml(newDoc.body);
  html = await processImagesInHtml(html, newDoc.filePath, client);
  const payload = options?.buildPayload
    ? options.buildPayload(newDoc, html)
    : buildEntryPayload(newDoc.frontMatter, html, existing?.article_content);

  if (existing) {
    const updated = await client.updateEntry(existing.uid, payload, contentType);
    return {
      path: change.relativePath,
      action: "renamed",
      url: newDoc.frontMatter.url,
      uid: updated.uid,
    };
  }

  // Old entry not found — fall back to create
  const created = await client.createEntry(payload, contentType);
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

function writeSummary(results: SyncResult[]): void {
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

  const summary = lines.join("\n");
  if (typeof core.summary?.addRaw === "function") {
    core.summary.addRaw(summary);
  } else {
    console.log(summary);
  }
}
