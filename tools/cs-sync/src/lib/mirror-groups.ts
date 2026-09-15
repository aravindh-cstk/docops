import fs from "node:fs";
import type { DocFile, DocIndex } from "../doc-index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Mirror groups: the set of files that are copies of one CMS entry.
//
// The left navigation lists 144 entries at two to four positions each, and
// cs-docs mirrors the nav exactly, so those entries own 306 files. Every copy
// must stay byte-identical, because only one of them can be written back to the
// single entry behind them.
//
// Keyed on `uid` first, because that is the CMS's own identity for an entry,
// falling back to the canonical url for files the pull has not stamped yet
// (every FAQ and sample-app file today). The writeback resolves by url instead,
// so the two keys must agree: assertPartitionsAgree below proves they do rather
// than assuming it.
// ─────────────────────────────────────────────────────────────────────────────

export interface MirrorGroup {
  /** The uid, the canonical url when unstamped, or the path when neither. */
  key: string;
  keyedBy: "uid" | "url" | "path";
  /** members[0]. Stable, because members is sorted by relPath. */
  representative: DocFile;
  /** Length 1 for the overwhelming majority of files. */
  members: DocFile[];
}

function keyOf(doc: DocFile): { key: string; keyedBy: MirrorGroup["keyedBy"] } {
  if (doc.uid) return { key: doc.uid, keyedBy: "uid" };
  if (doc.canonicalUrl) return { key: doc.canonicalUrl, keyedBy: "url" };
  return { key: doc.relPath, keyedBy: "path" };
}

/**
 * Both keys must carve the corpus the same way, or a write aimed at one entry
 * lands on another. Neither case is reachable today, which is precisely why
 * this is cheap to add now: it fails the moment someone breaks the invariant,
 * rather than corrupting an entry quietly.
 */
function assertPartitionsAgree(index: DocIndex): void {
  for (const [uid, files] of index.uidIndex) {
    const urls = new Set(files.map((f) => f.canonicalUrl).filter((u): u is string => !!u));
    if (urls.size > 1) {
      throw new Error(
        `uid ${uid} is claimed by ${files.length} files carrying ${urls.size} different urls ` +
          `(${[...urls].join(", ")}). The writeback resolves by url, so these copies would be ` +
          `written to different CMS entries. Files: ${files.map((f) => f.relPath).join(", ")}`,
      );
    }
  }
  for (const [url, files] of index.urlIndex) {
    const uids = new Set(files.map((f) => f.uid).filter((u): u is string => !!u));
    if (uids.size > 1) {
      throw new Error(
        `url ${url} is claimed by ${files.length} files carrying ${uids.size} different uids ` +
          `(${[...uids].join(", ")}). Two CMS entries cannot share one url. ` +
          `Files: ${files.map((f) => f.relPath).join(", ")}`,
      );
    }
  }
}

/**
 * Every file in the corpus, grouped. Singletons are included so a caller that
 * wants to walk the whole corpus once (the lint delegator, for example) can do
 * it from this one list instead of grouping and then re-adding the remainder.
 */
export function buildMirrorGroups(index: DocIndex): MirrorGroup[] {
  assertPartitionsAgree(index);

  const buckets = new Map<string, { keyedBy: MirrorGroup["keyedBy"]; members: DocFile[] }>();
  for (const doc of index.files) {
    const { key, keyedBy } = keyOf(doc);
    const bucket = buckets.get(key) ?? { keyedBy, members: [] };
    bucket.members.push(doc);
    buckets.set(key, bucket);
  }

  const groups: MirrorGroup[] = [];
  for (const [key, bucket] of buckets) {
    const members = [...bucket.members].sort((a, b) => a.relPath.localeCompare(b.relPath));
    groups.push({ key, keyedBy: bucket.keyedBy, representative: members[0]!, members });
  }
  return groups.sort((a, b) => a.representative.relPath.localeCompare(b.representative.relPath));
}

/** One file per entry. 3,610 files collapse to roughly 3,448 documents. */
export function representativeFiles(index: DocIndex): DocFile[] {
  return buildMirrorGroups(index).map((g) => g.representative);
}

export function groupForFile(groups: MirrorGroup[], relPath: string): MirrorGroup | undefined {
  return groups.find((g) => g.members.some((m) => m.relPath === relPath));
}

export function mirroredGroups(groups: MirrorGroup[]): MirrorGroup[] {
  return groups.filter((g) => g.members.length > 1);
}

// ── Messages ────────────────────────────────────────────────────────────────

/**
 * One shape for every place divergence surfaces (lint on a PR, `npm run fix`,
 * and the writeback), so an author meets the same explanation wherever they
 * hit it: what the page is, every copy and its status, then the exact command.
 */
export function formatMirrorMessage(args: {
  title: string;
  pageUrl: string | null;
  memberCount: number;
  lines: Array<{ label: string; relPath: string }>;
  fixCommand: string;
  fixExplanation: string;
  docsRoot: string;
}): string {
  const width = Math.max(...args.lines.map((l) => l.label.length));
  const list = args.lines
    .map((l) => `  ${l.label.padEnd(width)}  ${stripDocsRoot(l.relPath, args.docsRoot)}`)
    .join("\n");

  return [
    args.title,
    "",
    `The page "${args.pageUrl ?? "(no url)"}" appears at ${args.memberCount} positions in the`,
    `left navigation, so ${args.docsRoot} keeps ${args.memberCount} copies of it. All ${args.memberCount} must stay`,
    "identical, because they are copies of a single CMS entry and only one",
    "version of it can be saved back to the CMS.",
    "",
    "These copies no longer match:",
    "",
    list,
    "",
    `To fix, run:  ${args.fixCommand}`,
    "",
    args.fixExplanation,
  ].join("\n");
}

export function stripDocsRoot(relPath: string, docsRoot: string): string {
  const prefix = `${docsRoot}/`;
  return relPath.startsWith(prefix) ? relPath.slice(prefix.length) : relPath;
}

// ── Propagation planning ────────────────────────────────────────────────────

export type PropagationPlan =
  | { kind: "noop"; key: string }
  | { kind: "propagate"; key: string; source: string; targets: string[]; content: string }
  | { kind: "refuse"; key: string; message: string };

/**
 * Decide how to make one group's copies identical again.
 *
 * `changedPaths` is the set git reports as touched, which is what tells intent
 * apart from accident. mtime deliberately plays no part: worktree checkouts,
 * the CMS pull, and format-on-save all rewrite it, and in `--base` mode
 * "changed" is a commit range where mtime means nothing at all.
 */
export function planPropagation(
  group: MirrorGroup,
  changedPaths: ReadonlySet<string>,
  docsRoot: string,
  sourceOverride?: string,
): PropagationPlan {
  if (group.members.length < 2) return { kind: "noop", key: group.key };

  const read: Array<{ doc: DocFile; content: string }> = [];
  for (const doc of group.members) {
    try {
      read.push({ doc, content: fs.readFileSync(doc.filePath, "utf8") });
    } catch {
      return {
        kind: "refuse",
        key: group.key,
        message:
          `Could not read ${doc.relPath}, which is one of ${group.members.length} copies of ` +
          `"${group.representative.url ?? group.key}". Refusing to propagate a partial group.`,
      };
    }
  }

  // Ordered first so two copies edited to the same content is a no-op rather
  // than an error, and so a second run over an already-propagated group does
  // nothing.
  const distinct = new Set(read.map((r) => r.content));
  if (distinct.size === 1) return { kind: "noop", key: group.key };

  if (sourceOverride) {
    const chosen = read.find((r) => r.doc.relPath === sourceOverride);
    if (!chosen) {
      return {
        kind: "refuse",
        key: group.key,
        message:
          `--source ${sourceOverride} is not one of the copies of ` +
          `"${group.representative.url ?? group.key}". Copies are: ` +
          group.members.map((m) => m.relPath).join(", "),
      };
    }
    return propagateFrom(group, read, chosen.content, chosen.doc.relPath);
  }

  const changed = read.filter((r) => changedPaths.has(r.doc.relPath));
  const changedContents = new Set(changed.map((r) => r.content));

  if (changedContents.size === 1) {
    const content = [...changedContents][0]!;
    const source = changed
      .filter((r) => r.content === content)
      .map((r) => r.doc.relPath)
      .sort()[0]!;
    return propagateFrom(group, read, content, source);
  }

  const lines = read.map((r) => ({
    label: changedPaths.has(r.doc.relPath) ? "YOU CHANGED" : "unchanged",
    relPath: r.doc.relPath,
  }));

  if (changedContents.size > 1) {
    return {
      kind: "refuse",
      key: group.key,
      message: formatMirrorMessage({
        title: "One CMS page was edited two different ways",
        pageUrl: group.representative.url,
        memberCount: group.members.length,
        lines,
        fixCommand: `npm run fix -- --source <path>`,
        fixExplanation:
          "Two copies were changed to different content, so there is no single\n" +
          "winner to copy from. Make them identical, or name the one to keep\n" +
          "with --source.",
        docsRoot,
      }),
    };
  }

  return {
    kind: "refuse",
    key: group.key,
    message: formatMirrorMessage({
      title: "Copies of one CMS page already differ on disk",
      pageUrl: group.representative.url,
      memberCount: group.members.length,
      lines,
      fixCommand: `npm run fix -- --source <path>`,
      fixExplanation:
        "None of these copies is in this change set, so there is nothing to\n" +
        "identify which version you meant. Name the one to keep with --source.",
      docsRoot,
    }),
  };
}

function propagateFrom(
  group: MirrorGroup,
  read: Array<{ doc: DocFile; content: string }>,
  content: string,
  source: string,
): PropagationPlan {
  const targets = read
    .filter((r) => r.content !== content)
    .map((r) => r.doc.relPath)
    .sort();
  if (targets.length === 0) return { kind: "noop", key: group.key };
  return { kind: "propagate", key: group.key, source, targets, content };
}
