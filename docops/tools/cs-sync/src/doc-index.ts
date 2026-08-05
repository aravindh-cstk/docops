import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// ─────────────────────────────────────────────────────────────────────────────
// Entry → file mapping.
//
// On-disk paths are NOT derivable from a CMS url (e.g. cs-docs/agent-os/algolia.md
// has url .../developers/automation-hub-connectors/algolia), so the index is built
// by scanning every .md file and reading its own frontmatter url/uid. Urls are not
// unique (some collide across two files), so the url index is array-valued and
// collisions are reported, never auto-resolved.
// ─────────────────────────────────────────────────────────────────────────────

export interface DocFile {
  filePath: string; // absolute
  relPath: string; // relative to repo root
  url: string | null; // raw frontmatter url
  canonicalUrl: string | null; // normalized
  uid: string | null;
  hasBody: boolean; // frontmatter has non-empty body (rich) vs empty (stub)
}

export interface DocIndex {
  files: DocFile[];
  urlIndex: Map<string, DocFile[]>; // canonicalUrl -> files (array to expose collisions)
  uidIndex: Map<string, DocFile>; // uid -> file (stub files only)
  collisions: Map<string, DocFile[]>; // canonicalUrl -> files, only where >1
}

/**
 * Normalize a CMS or frontmatter url to a canonical relative path so that an
 * absolute rich url (https://www.contentstack.com/docs/launch/x), a relative
 * stub url (/launch/x), and a CDA url (/launch/x) all reduce to the same key.
 */
export function canonicalizeUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  let u = url.trim();
  if (!u) return null;
  // strip scheme + host
  u = u.replace(/^https?:\/\/[^/]+/i, "");
  // ensure leading slash
  if (!u.startsWith("/")) u = `/${u}`;
  // drop a leading /docs segment (present on absolute rich urls, absent on CDA)
  u = u.replace(/^\/docs(?=\/|$)/i, "");
  // collapse duplicate slashes, drop trailing slash, lowercase
  u = u.replace(/\/{2,}/g, "/").replace(/\/+$/, "").toLowerCase();
  return u || null;
}

function walkMarkdown(dir: string, out: string[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMarkdown(full, out);
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
}

function parseDocFile(filePath: string, repoRoot: string): DocFile {
  const raw = fs.readFileSync(filePath, "utf8");
  let data: Record<string, unknown> = {};
  let body = raw;
  try {
    const parsed = matter(raw);
    data = parsed.data as Record<string, unknown>;
    body = parsed.content;
  } catch {
    // Malformed frontmatter — treat as body-only, no url/uid.
  }
  const url = typeof data.url === "string" ? data.url : null;
  const uid = typeof data.uid === "string" ? data.uid : null;
  return {
    filePath,
    relPath: path.relative(repoRoot, filePath),
    url,
    canonicalUrl: canonicalizeUrl(url),
    uid,
    hasBody: body.trim().length > 0,
  };
}

export function buildDocIndex(repoRoot: string, docsRoot: string): DocIndex {
  const root = path.isAbsolute(docsRoot) ? docsRoot : path.join(repoRoot, docsRoot);
  const paths: string[] = [];
  if (fs.existsSync(root)) walkMarkdown(root, paths);
  paths.sort();

  const files: DocFile[] = [];
  const urlIndex = new Map<string, DocFile[]>();
  const uidIndex = new Map<string, DocFile>();

  for (const p of paths) {
    const doc = parseDocFile(p, repoRoot);
    files.push(doc);
    if (doc.canonicalUrl) {
      const arr = urlIndex.get(doc.canonicalUrl) ?? [];
      arr.push(doc);
      urlIndex.set(doc.canonicalUrl, arr);
    }
    if (doc.uid && !uidIndex.has(doc.uid)) uidIndex.set(doc.uid, doc);
  }

  const collisions = new Map<string, DocFile[]>();
  for (const [k, arr] of urlIndex) if (arr.length > 1) collisions.set(k, arr);

  return { files, urlIndex, uidIndex, collisions };
}

export type ResolveOutcome =
  | { status: "matched-uid" | "matched-url"; file: DocFile }
  | { status: "ambiguous"; candidates: DocFile[] }
  | { status: "unmatched" };

/**
 * Resolve one CMS entry (by uid then canonical url) to a single doc file.
 * A url that maps to more than one file is reported ambiguous, never guessed.
 */
export function resolveEntry(
  index: DocIndex,
  entry: { uid?: string | null; url?: string | null },
): ResolveOutcome {
  if (entry.uid) {
    const byUid = index.uidIndex.get(entry.uid);
    if (byUid) return { status: "matched-uid", file: byUid };
  }
  const canon = canonicalizeUrl(entry.url);
  if (canon) {
    const arr = index.urlIndex.get(canon);
    if (arr && arr.length === 1) return { status: "matched-url", file: arr[0]! };
    if (arr && arr.length > 1) return { status: "ambiguous", candidates: arr };
  }
  return { status: "unmatched" };
}
