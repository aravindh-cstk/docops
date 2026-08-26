/**
 * Shared entry content semantics for the CS Docs sync pipeline.
 *
 * Two things live here because more than one script needs them to agree
 * exactly:
 *
 * 1. Resolving which *version* of an entry is the published one, so we only
 *    ever promote or compare content a human actually pressed Publish on.
 * 2. Deciding whether two entries hold the same content, ignoring the CMA
 *    bookkeeping fields that differ between stacks by construction.
 *
 * If the promotion script and the Prod→GitHub pull disagree on either of
 * these, the pull re-opens PRs for content the promotion just wrote. Keeping
 * both in one module is what stops that drifting apart.
 */

import { createHash } from "node:crypto";
import { canonicalizeBreadcrumbForDiff } from "./content-type-mappings/docs-article.js";

export interface ContentstackEntry {
  uid: string;
  title?: string;
  url?: string;
  body?: string;
  status?: string;
  [key: string]: unknown;
}

/**
 * Fields stripped from an entry before it is written to Prod.
 *
 * This is the *write* list, and it is deliberately conservative: it controls
 * what the CMA actually receives, so widening it changes what lands in Prod.
 */
export const SANDBOX_METADATA_FIELDS = [
  "uid",
  "created_at",
  "updated_at",
  "created_by",
  "_version",
  "publish_details",
] as const;

/**
 * Fields ignored when asking "is this the same content?".
 *
 * A superset of the write list. These are CMA bookkeeping fields that differ
 * between Sandbox and Prod by construction, not because anyone edited
 * anything:
 *
 * - `updated_by` is the Sandbox writer on one side and the promotion token's
 *   owner on the other. It can never match. Leaving it in the comparison made
 *   every entry look changed on every run, which silently defeated the
 *   skip-unchanged check entirely.
 * - `_metadata` carries per-stack modular-block UIDs that are regenerated on
 *   clone. Note this entry only covers a *top-level* `_metadata`, which
 *   docs_article does not have — the one that actually matters is nested
 *   inside `article_content`, handled by NESTED_DIFF_IGNORE_KEYS below.
 * - The rest are workflow/ACL/publish bookkeeping that never represents
 *   authored content.
 *
 * `locale` and `tags` are deliberately NOT here — they are real authored data
 * and a change to either should promote. The exception is the promotion
 * bookkeeping tags (`sandbox-uid-*`, `src-hash-*`), which only ever exist on
 * the Prod side, so normalizeForDiff strips them out of both sides before
 * comparing rather than adding `tags` here (stripFields only drops whole
 * top-level fields, it can't remove one element out of an array field).
 */
export const DIFF_IGNORE_FIELDS = [
  ...SANDBOX_METADATA_FIELDS,
  "updated_by",
  "published_at",
  "_in_progress",
  "_metadata",
  "_owner",
  "_workflow",
  "_branch",
  "_applied_variants",
  "ACL",
] as const;

/**
 * Keys ignored at *every* depth, not just the top level.
 *
 * `article_content[i].article_section._metadata.uid` is assigned by the CMA
 * when a modular block is created, so a Sandbox entry and its Prod clone never
 * agree on it. Because stripFields only deletes top-level keys, this nested
 * uid used to survive into the comparison and made every promoted entry look
 * changed on every run.
 *
 * Deliberately just `_metadata`. A nested `uid` is load-bearing (breadcrumb
 * refs, file/reference fields) and stripping it would hide real changes.
 */
export const NESTED_DIFF_IGNORE_KEYS = ["_metadata"] as const;

/**
 * Parses the docs_article CMS title format "[marker] - heading" back into its
 * parts (the marker is added by buildEntryPayload in
 * content-type-mappings/docs-article.ts so it survives round trips inside the
 * CMS). Falls back to using the raw title for both fields if the format is
 * unexpected.
 */
export function parseTitle(title: string): { marker: string; heading: string } {
  const match = title.match(/^\[(.+?)\]\s*-\s*(.+)$/);
  if (!match) {
    console.warn(
      `unexpected title format "${title}" — expected "[marker] - heading". ` +
      `Using full title as both marker and heading.`,
    );
    return { marker: title, heading: title };
  }
  return { marker: match[1]!, heading: match[2]! };
}

/** Prefix for the Prod-only tag recording which Sandbox entry a Prod entry came from. */
export const SANDBOX_UID_TAG_PREFIX = "sandbox-uid-";

export function sandboxUidTag(uid: string): string {
  return `${SANDBOX_UID_TAG_PREFIX}${uid}`;
}

/** Reads the sandbox-uid-<uid> tag off an entry's tags array, or null if absent. */
export function extractSandboxUidFromTags(tags: unknown): string | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string" && tag.startsWith(SANDBOX_UID_TAG_PREFIX)) {
      const uid = tag.slice(SANDBOX_UID_TAG_PREFIX.length);
      return uid.length > 0 ? uid : null;
    }
  }
  return null;
}

/**
 * Returns a new tags array with this entry's sandbox-uid tag set, added if
 * absent or replacing a stale one if present. Never mutates the input array.
 */
export function withSandboxUidTag(tags: unknown, sandboxUid: string): string[] {
  const existing = Array.isArray(tags) ? tags.filter((t): t is string => typeof t === "string") : [];
  const withoutStale = existing.filter((t) => !t.startsWith(SANDBOX_UID_TAG_PREFIX));
  return [...withoutStale, sandboxUidTag(sandboxUid)];
}

/**
 * Prefix for the Prod-only tag recording a fingerprint of the content
 * promotion last wrote to this entry.
 *
 * This is what lets promotion tell its own echo apart from a human's direct
 * Prod edit. On the next run, re-fingerprinting the live Prod entry either
 * reproduces this value (nobody touched it since we wrote it, safe to
 * overwrite) or does not (a human edited Prod, stop and report). Timestamps
 * can't answer that: promotion always writes Prod *after* the Sandbox
 * publish, so Prod is always "newer".
 *
 * `src-hash-` + 12 hex = 21 chars, well inside the stack's 50-char-per-tag
 * cap.
 */
export const SRC_HASH_TAG_PREFIX = "src-hash-";

export function srcHashTag(hash: string): string {
  return `${SRC_HASH_TAG_PREFIX}${hash}`;
}

/** Reads the src-hash-<hash> tag off an entry's tags array, or null if absent. */
export function extractSrcHashFromTags(tags: unknown): string | null {
  if (!Array.isArray(tags)) return null;
  for (const tag of tags) {
    if (typeof tag === "string" && tag.startsWith(SRC_HASH_TAG_PREFIX)) {
      const hash = tag.slice(SRC_HASH_TAG_PREFIX.length);
      return hash.length > 0 ? hash : null;
    }
  }
  return null;
}

/**
 * Returns a new tags array with this entry's src-hash tag set, replacing any
 * stale one. Never mutates the input array.
 */
export function withSrcHashTag(tags: unknown, hash: string): string[] {
  const existing = Array.isArray(tags) ? tags.filter((t): t is string => typeof t === "string") : [];
  const withoutStale = existing.filter((t) => !t.startsWith(SRC_HASH_TAG_PREFIX));
  return [...withoutStale, srcHashTag(hash)];
}

/**
 * Sorts object keys recursively so two entries with the same content but
 * different key order (or different-but-equivalent CMA field ordering)
 * compare equal. Array element order is preserved — it is semantically
 * meaningful in modular-block / JSON-RTE content and must not be reordered.
 */
export function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }
  if (value !== null && typeof value === "object") {
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(value as Record<string, unknown>).sort()) {
      sorted[key] = canonicalize((value as Record<string, unknown>)[key]);
    }
    return sorted;
  }
  return value;
}

function stripFields(entry: ContentstackEntry, fields: readonly string[]): Record<string, unknown> {
  const clone: Record<string, unknown> = { ...entry };
  for (const field of fields) {
    delete clone[field];
  }
  return clone;
}

/** Strip the fields that must not be written to Prod. */
export function stripMetadataFields(entry: ContentstackEntry): Record<string, unknown> {
  return stripFields(entry, SANDBOX_METADATA_FIELDS);
}

/** Recursively drops `keys` at every depth. Array order is preserved. */
export function stripNestedKeys(value: unknown, keys: readonly string[]): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => stripNestedKeys(item, keys));
  }
  if (value !== null && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (keys.includes(key)) continue;
      result[key] = stripNestedKeys(child, keys);
    }
    return result;
  }
  return value;
}

const PROMOTION_TAG_PREFIXES = [SANDBOX_UID_TAG_PREFIX, SRC_HASH_TAG_PREFIX] as const;

function withoutPromotionTags(entry: ContentstackEntry): ContentstackEntry {
  if (!Array.isArray(entry.tags)) return entry;
  const filtered = (entry.tags as unknown[]).filter(
    (t) => !(typeof t === "string" && PROMOTION_TAG_PREFIXES.some((p) => t.startsWith(p))),
  );
  return { ...entry, tags: filtered };
}

/**
 * Projects an entry down to just its authored content, in a stack-independent
 * form, so two entries can be compared or fingerprinted.
 *
 * Kept separate from `canonicalize` on purpose: canonicalize is a pure
 * key-sorting utility other callers rely on, while this carries diff policy
 * and content-type knowledge.
 */
export function normalizeForDiff(entry: ContentstackEntry): unknown {
  const stripped = stripFields(withoutPromotionTags(entry), DIFF_IGNORE_FIELDS);
  if ("breadcrumb" in stripped) {
    stripped.breadcrumb = canonicalizeBreadcrumbForDiff(stripped.breadcrumb);
  }
  return canonicalize(stripNestedKeys(stripped, NESTED_DIFF_IGNORE_KEYS));
}

/** Compare authored content only, ignoring cross-stack CMA bookkeeping. */
export function contentsEqual(a: ContentstackEntry, b: ContentstackEntry): boolean {
  return JSON.stringify(normalizeForDiff(a)) === JSON.stringify(normalizeForDiff(b));
}

/**
 * A short, stable hash of an entry's authored content.
 *
 * Computed over the same projection `contentsEqual` uses, so two entries share
 * a fingerprint exactly when they compare equal. Because promotion tags are
 * stripped first, storing the fingerprint in a tag does not change it, which
 * is what makes stamping it idempotent.
 */
export function diffFingerprint(entry: ContentstackEntry): string {
  return createHash("sha256").update(JSON.stringify(normalizeForDiff(entry))).digest("hex").slice(0, 12);
}

interface PublishRecord {
  version?: unknown;
  time?: unknown;
  environment?: unknown;
}

function toPublishRecords(publishDetails: unknown): PublishRecord[] {
  if (!publishDetails) return [];

  // Shape A — array of publish records, one per environment/locale.
  // This is what the CMA returns with include_publish_details=true.
  if (Array.isArray(publishDetails)) {
    return publishDetails.filter((r): r is PublishRecord => r !== null && typeof r === "object");
  }

  if (typeof publishDetails !== "object") return [];

  const obj = publishDetails as Record<string, unknown>;

  // Shape B — a single publish record inlined as an object.
  if ("version" in obj || "time" in obj) {
    return [obj as PublishRecord];
  }

  // Shape C — keyed by environment name, e.g. { production: { version, time } }.
  // Older scripts in this repo assume this form, so it is handled rather than
  // assumed away.
  const keyed = Object.values(obj).filter((r): r is PublishRecord => r !== null && typeof r === "object");
  if (keyed.length > 0) return keyed;

  // A non-empty object we could not decompose — e.g. `{ status: "published" }`,
  // a fourth shape this repo assumes elsewhere. Return it as one record so the
  // entry still counts as published and surfaces as *unresolved* rather than
  // silently disappearing from the promotion list. A published entry going
  // quietly missing is worse than one that loudly refuses to promote.
  return Object.keys(obj).length > 0 ? [obj as PublishRecord] : [];
}

/**
 * The version number a human last published, or null if it cannot be
 * determined from the payload.
 *
 * Callers must treat null as "do not promote". Returning null rather than
 * falling back to the entry's latest version is the whole point: the latest
 * version may be an unpublished draft, and guessing here is what previously
 * pushed half-finished edits into the Prod stack.
 */
export function getPublishedVersion(entry: ContentstackEntry): number | null {
  const records = toPublishRecords(entry.publish_details);

  let best: { version: number; time: number } | null = null;

  for (const record of records) {
    const version = typeof record.version === "number" ? record.version : Number(record.version);
    if (!Number.isFinite(version) || version <= 0) continue;

    // Undated records still count; they just sort oldest so a dated record
    // wins. A stack that returns no timestamps at all falls back to the
    // highest version number, which is the same answer.
    const parsed = typeof record.time === "string" ? Date.parse(record.time) : NaN;
    const time = Number.isFinite(parsed) ? parsed : 0;

    if (!best || time > best.time || (time === best.time && version > best.version)) {
      best = { version, time };
    }
  }

  return best ? best.version : null;
}

/** True if the entry carries any publish record at all, resolvable or not. */
export function hasPublishRecord(entry: ContentstackEntry): boolean {
  return toPublishRecords(entry.publish_details).length > 0;
}

/**
 * Shown when an entry has been published but no version number could be read
 * out of its publish_details. That means this pipeline's assumption about the
 * payload shape is wrong, and the safe response is to stop rather than fall
 * back to promoting draft content.
 */
export const PUBLISH_SHAPE_HELP =
  "Could not read a published version from publish_details. Run `npm run verify-publish-details` " +
  "against the live stack to dump the real payload shape, then extend toPublishRecords() in " +
  "src/lib/entry-content.ts to cover it. Refusing to promote until then — falling back to the " +
  "latest version would push unpublished drafts to Prod.";
