import fs from "node:fs";
import path from "node:path";
import { canonicalizeUrl, type DocIndex } from "../doc-index.js";
import { parseDocContent, parseDocFile } from "../parser.js";
import { readFileAtCommit, type DocChange } from "../diff.js";
import { resolveProductConfig } from "./content-type-mappings/docs-article.js";
import { formatMirrorMessage, labelMembers } from "./mirror-groups.js";

// ─────────────────────────────────────────────────────────────────────────────
// One CMS entry, one write.
//
// The writeback resolves a file to an entry with findEntryByUrl, and a page the
// nav lists at several positions is several files sharing that url. Processing
// them one at a time therefore aimed two to four concurrent writes at a single
// entry. That is not merely wasteful: buildEntryPayload derives `title` and
// `breadcrumb` from the file's path, so the copies produce different payloads
// and the entry's nav placement flapped by whichever request landed last.
//
// Grouping is keyed on url because that is what the writeback resolves on.
// Membership is every file on disk carrying the url, not just the changed ones,
// which is what makes deletes and renames of a single copy safe.
// ─────────────────────────────────────────────────────────────────────────────

export interface EntryGroup {
  /** Canonical url. Grouping key only. */
  key: string;
  /**
   * The url exactly as frontmatter spells it. findEntryByUrl does an exact
   * string match, and canonicalizeUrl lowercases, so the canonical key cannot
   * be used to query the CMS.
   */
  rawUrl: string;
  changes: DocChange[];
  /** Files still on disk carrying this url, repo-relative, sorted. */
  survivingPaths: string[];
  /** Set to refuse the whole group without touching the CMS. */
  error?: string;
}

function docPathUnderRoot(relativePath: string, docsRoot: string): string {
  const prefix = `${docsRoot}/`;
  return relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : relativePath;
}

/**
 * The url a change resolves to. Deleted files are gone from disk, so their url
 * comes from the parent commit, which is the same source unpublishDeleted uses.
 */
function urlForChange(
  change: DocChange,
  repoRoot: string,
  docsRoot: string,
  beforeSha: string,
): { key: string; rawUrl: string } | null {
  try {
    const raw =
      change.type === "deleted"
        ? (() => {
            const content = readFileAtCommit(repoRoot, beforeSha, change.relativePath);
            if (!content) return null;
            return parseDocContent(repoRoot, docsRoot, change.relativePath, content)?.frontMatter
              .url ?? null;
          })()
        : parseDocFile(repoRoot, docsRoot, change.relativePath)?.frontMatter.url ?? null;
    const key = canonicalizeUrl(raw);
    return key && raw ? { key, rawUrl: raw } : null;
  } catch {
    return null;
  }
}

/** The url a changed file had before this run, for in-place url changes. */
function previousUrlForChange(
  change: DocChange,
  repoRoot: string,
  docsRoot: string,
  beforeSha: string,
): string | null {
  const from = change.oldRelativePath ?? change.relativePath;
  try {
    const content = readFileAtCommit(repoRoot, beforeSha, from);
    if (!content) return null;
    const doc = parseDocContent(repoRoot, docsRoot, from, content);
    return canonicalizeUrl(doc?.frontMatter.url ?? null);
  } catch {
    return null;
  }
}

export function groupChangesByEntry(
  changes: DocChange[],
  repoRoot: string,
  docsRoot: string,
  beforeSha: string,
  index: DocIndex,
): EntryGroup[] {
  const byKey = new Map<string, { rawUrl: string; changes: DocChange[] }>();
  const ungrouped: EntryGroup[] = [];

  for (const change of changes) {
    const resolved = urlForChange(change, repoRoot, docsRoot, beforeSha);
    if (!resolved) {
      // No readable url means nothing to group on. Pass it through alone so the
      // existing per-change handling still reports its own error.
      ungrouped.push({
        key: change.relativePath,
        rawUrl: "",
        changes: [change],
        survivingPaths: [],
      });
      continue;
    }
    const bucket = byKey.get(resolved.key) ?? { rawUrl: resolved.rawUrl, changes: [] };
    bucket.changes.push(change);
    byKey.set(resolved.key, bucket);
  }

  const groups: EntryGroup[] = [];
  for (const [key, bucket] of byKey) {
    const survivingPaths = (index.urlIndex.get(key) ?? [])
      .map((f) => f.relPath)
      .sort();
    groups.push({
      key,
      rawUrl: bucket.rawUrl,
      changes: bucket.changes,
      survivingPaths,
      error: groupError(key, bucket.changes, survivingPaths, repoRoot, docsRoot, beforeSha),
    });
  }

  return [...groups, ...ungrouped].sort((a, b) =>
    a.changes[0]!.relativePath.localeCompare(b.changes[0]!.relativePath),
  );
}

/**
 * Refuse rather than pick arbitrarily. Both cases mean the repo is asking for
 * two different things to happen to one entry, and lint should have caught the
 * first before the push.
 */
function groupError(
  key: string,
  changes: DocChange[],
  survivingPaths: string[],
  repoRoot: string,
  docsRoot: string,
  beforeSha: string,
): string | undefined {
  if (changes.length < 2) return undefined;

  const onDisk = changes.filter((c) => c.type !== "deleted");
  const read: Array<{ relPath: string; content: string }> = [];
  for (const change of onDisk) {
    try {
      read.push({
        relPath: change.relativePath,
        content: fs.readFileSync(path.join(repoRoot, change.relativePath), "utf8"),
      });
    } catch {
      /* unreadable copies surface through the per-change path instead */
    }
  }

  if (new Set(read.map((r) => r.content)).size > 1) {
    return formatMirrorMessage({
      title: `Refusing to sync diverged copies of "${key}"`,
      pageUrl: key,
      memberCount: survivingPaths.length || read.length,
      lines: labelMembers(read, new Set(read.map((r) => r.relPath))),
      fixCommand: "npm run fix",
      fixExplanation:
        "These are copies of one CMS entry, so only one version can be saved.\n" +
        "Run the command above to make them identical, then push again.",
      docsRoot,
    });
  }

  const previousUrls = new Set(
    changes
      .map((c) => previousUrlForChange(c, repoRoot, docsRoot, beforeSha))
      .filter((u): u is string => !!u),
  );
  if (previousUrls.size > 1) {
    return (
      `Refusing to sync "${key}": its copies disagree about which url they had before ` +
      `this change (${[...previousUrls].join(", ")}), so there is no single CMS entry to ` +
      `update. Copies: ${changes.map((c) => c.relativePath).join(", ")}`
    );
  }

  return undefined;
}

/**
 * Which copy's path decides the entry's payload.
 *
 * Prefers the copy whose product folder already matches the entry's breadcrumb,
 * so repeated runs are idempotent and the entry's nav placement stops moving.
 * Falls back to the lexicographically first copy that resolves to a product
 * config, which is deterministic rather than merely arbitrary.
 */
export function selectPrimary(
  group: EntryGroup,
  docsRoot: string,
  existingBreadcrumbUid?: string,
): DocChange | null {
  const candidates = group.changes
    .filter((c) => c.type !== "deleted")
    .filter((c) => resolveProductConfig(docPathUnderRoot(c.relativePath, docsRoot)))
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  if (candidates.length === 0) return null;

  if (existingBreadcrumbUid) {
    const matching = candidates.find(
      (c) =>
        resolveProductConfig(docPathUnderRoot(c.relativePath, docsRoot))
          ?.sandboxBreadcrumbUid === existingBreadcrumbUid,
    );
    if (matching) return matching;
  }
  return candidates[0]!;
}

/**
 * A delete that leaves copies behind is not a delete of the entry.
 *
 * unpublishDeleted resolves by url with no knowledge of surviving twins, so
 * deleting one of four copies used to unpublish the entry and remove the page
 * from every nav position at once. When copies survive, the entry is instead
 * updated from the first surviving copy. Note this can move the entry's
 * breadcrumb, because the payload is derived from the primary's path, so
 * callers log that rather than applying it silently.
 */
export function deleteBecomesUpdate(
  group: EntryGroup,
  docsRoot: string,
): { change: DocChange; note: string } | null {
  const deletes = group.changes.filter((c) => c.type === "deleted");
  if (deletes.length === 0) return null;

  const stillChanged = group.changes.some((c) => c.type !== "deleted");
  if (stillChanged) return null;

  const remaining = group.survivingPaths.filter(
    (p) => !deletes.some((d) => d.relativePath === p),
  );
  if (remaining.length === 0) return null;

  const source = remaining.find((p) => resolveProductConfig(docPathUnderRoot(p, docsRoot)));
  if (!source) return null;

  return {
    change: { type: "modified", relativePath: source },
    note: `copy removed, ${remaining.length} copy(ies) remain`,
  };
}

export function breadcrumbMoveNote(
  fromPath: string,
  toPath: string,
  docsRoot: string,
): string | null {
  const from = resolveProductConfig(docPathUnderRoot(fromPath, docsRoot));
  const to = resolveProductConfig(docPathUnderRoot(toPath, docsRoot));
  if (!from || !to || from.sandboxBreadcrumbUid === to.sandboxBreadcrumbUid) return null;
  return `breadcrumb moved: ${from.marker} -> ${to.marker} (primary ${fromPath} no longer drives this entry)`;
}
