/**
 * Decides what promotion is allowed to do to a Prod entry.
 *
 * The problem this exists to solve: when a Prod entry no longer matches its
 * Sandbox source, promotion cannot tell *which side moved*. Either Sandbox was
 * edited and republished (promote it) or a human edited Prod directly (leave it
 * alone). It used to assume the former and issue a full PUT, so a Prod edit
 * made between runs was silently overwritten.
 *
 * The tie is broken by the `src-hash-*` tag promotion stamps on every write. If
 * re-fingerprinting the live Prod entry reproduces that tag, Prod is still
 * exactly what promotion last wrote, so overwriting it loses nothing. If it
 * doesn't, someone changed Prod since then and promotion stops.
 *
 * This module is pure. It makes the decision, the caller performs the writes
 * and the reporting.
 */

import {
  contentsEqual,
  diffFingerprint,
  extractSrcHashFromTags,
  type ContentstackEntry,
} from "./entry-content.js";

export type GuardAction = "create" | "skip" | "update" | "conflict";

/**
 * - `prod-edited`: a src-hash tag is present but no longer matches Prod's
 *   content, so a human edited Prod after promotion last wrote it.
 * - `no-baseline`: no src-hash tag at all, so this entry predates the
 *   fingerprint and there is nothing to compare against. Fails closed.
 */
export type ConflictReason = "prod-edited" | "no-baseline";

/** `report` still writes, so a rollout can size the conflict set before blocking on it. */
export type ConflictMode = "enforce" | "report";

export interface GuardDecision {
  action: GuardAction;
  conflictReason?: ConflictReason;
  /** The fingerprint promotion recorded on the Prod entry, if any. */
  expectedHash?: string | null;
  /** The fingerprint of Prod's content right now. */
  actualHash?: string;
  /** True when a conflict was overridden and the write proceeded anyway. */
  forced?: boolean;
}

export function evaluatePromotionGuard(
  sandboxEntry: ContentstackEntry,
  prodEntry: ContentstackEntry | null,
  opts: { mode: ConflictMode; force: boolean },
): GuardDecision {
  if (!prodEntry) return { action: "create" };

  // Equal wins outright. Forcing is about overriding a conflict, never about
  // manufacturing a pointless write.
  if (contentsEqual(sandboxEntry, prodEntry)) return { action: "skip" };

  const expectedHash = extractSrcHashFromTags(prodEntry.tags);
  const actualHash = diffFingerprint(prodEntry);

  if (expectedHash === actualHash) return { action: "update", expectedHash, actualHash };

  const conflictReason: ConflictReason = expectedHash === null ? "no-baseline" : "prod-edited";

  if (opts.force || opts.mode === "report") {
    return { action: "update", conflictReason, expectedHash, actualHash, forced: true };
  }

  return { action: "conflict", conflictReason, expectedHash, actualHash };
}
