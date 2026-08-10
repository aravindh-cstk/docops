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
 *   clone.
 * - The rest are workflow/ACL/publish bookkeeping that never represents
 *   authored content.
 *
 * `locale` and `tags` are deliberately NOT here — they are real authored data
 * and a change to either should promote.
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

/** Compare authored content only, ignoring cross-stack CMA bookkeeping. */
export function contentsEqual(a: ContentstackEntry, b: ContentstackEntry): boolean {
  const left = JSON.stringify(canonicalize(stripFields(a, DIFF_IGNORE_FIELDS)));
  const right = JSON.stringify(canonicalize(stripFields(b, DIFF_IGNORE_FIELDS)));
  return left === right;
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
