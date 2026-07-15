import fs from "node:fs";
import path from "node:path";
import type { ContentstackClient } from "./contentstack.js";

export const IMG_SRC_RE = /<img([^>]*)\ssrc=["']([^"']+)["']([^>]*)>/gi;
export const MD_IMAGE_RE = /!\[[^\]]*]\(([^)]+)\)/g;

// Contentstack serves assets from two CDN URL shapes depending on the stack /
// region:
//   images.contentstack.io/v3/assets/{apiKey}/{assetUid}/{hash}/{file}
//   assets.contentstack.io/spaces/{spaceId}/assets/{assetUid}/{hash}/{file}
// In the first, the asset UID is the segment after the api key; in the second it
// is the segment right after "/assets/". Either way group 1 or group 2 captures
// the asset UID (stable across version-hash changes — the correct dedupe key).
export const CS_CDN_RE =
  /(?:images\.contentstack\.io\/v3\/assets\/[^/]+\/([^/?#]+)|assets\.contentstack\.io\/spaces\/[^/]+\/assets\/([^/?#]+))/i;
const CS_CDN_RE_G = new RegExp(CS_CDN_RE.source, "gi");
// Raw <img asset_uid="..."> / markdown carrying an explicit attribute.
const ASSET_UID_ATTR_RE = /asset_uid\s*=\s*["']([^"']+)["']/gi;

export function isLocalAssetRef(ref: string): boolean {
  if (!ref || ref.startsWith("http://") || ref.startsWith("https://")) {
    return false;
  }
  if (ref.startsWith("data:") || ref.startsWith("#")) {
    return false;
  }
  return true;
}

export function extractCsAssetUid(url: string): string | null {
  const m = url.match(CS_CDN_RE);
  if (!m) return null;
  return m[1] ?? m[2] ?? null;
}

/**
 * Collect every Contentstack asset UID referenced anywhere in a blob of text
 * (markdown or raw HTML): from CDN URLs (either host shape) and from explicit
 * `asset_uid="..."` attributes on leftover raw <img> tags. Used to make image
 * injection idempotent — an asset already present (by UID, not full URL) is
 * never inserted again.
 */
export function collectAssetUids(text: string): Set<string> {
  const uids = new Set<string>();
  for (const m of text.matchAll(CS_CDN_RE_G)) {
    const uid = m[1] ?? m[2];
    if (uid) uids.add(uid);
  }
  for (const m of text.matchAll(ASSET_UID_ATTR_RE)) {
    if (m[1]) uids.add(m[1]);
  }
  return uids;
}

function resolveLocalPath(docDir: string, ref: string): string {
  const decoded = decodeURIComponent(ref.split("#")[0] ?? ref);
  return path.normalize(path.resolve(docDir, decoded));
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type UploadCache = Map<string, { url: string; uid: string }>;

/**
 * Ensure a local image reference is present in Contentstack Assets and return its
 * CDN url + uid. Dedupes by filename (so an image referenced by several docs is
 * uploaded once) and, if the local file is already gone (a shared image deleted
 * earlier in the same run), falls back to the existing asset so the reference can
 * still be rewritten. Returns null for non-local refs or when nothing matches.
 */
export async function uploadLocalImage(
  ref: string,
  docDir: string,
  client: ContentstackClient,
  cache: UploadCache = new Map(),
): Promise<{ url: string; uid: string } | null> {
  if (!isLocalAssetRef(ref)) return null;
  const abs = resolveLocalPath(docDir, ref);
  const cached = cache.get(abs);
  if (cached) return cached;

  const filename = path.basename(abs);
  if (fs.existsSync(abs)) {
    const existing = await client.findAssetByFilename(filename);
    const result = existing ?? (await client.uploadAsset(abs));
    cache.set(abs, result);
    return result;
  }

  const existing = await client.findAssetByFilename(filename);
  if (existing) {
    cache.set(abs, existing);
    return existing;
  }
  console.warn(`Image not found and no matching asset, skipping: ${abs}`);
  return null;
}

export async function processImagesInHtml(
  html: string,
  docFilePath: string,
  client: ContentstackClient,
): Promise<string> {
  const docDir = path.dirname(docFilePath);
  let result = html;

  const uploads: UploadCache = new Map();
  const ensureUploaded = (ref: string) => uploadLocalImage(ref, docDir, client, uploads);

  const mdRefs = [...html.matchAll(MD_IMAGE_RE)].map((m) => m[1]);
  for (const ref of mdRefs) {
    await ensureUploaded(ref ?? "");
  }

  const matches = [...result.matchAll(IMG_SRC_RE)];
  for (const match of matches) {
    const full = match[0];
    const before = match[1] ?? "";
    const src = match[2] ?? "";
    const after = match[3] ?? "";

    const uploaded = await ensureUploaded(src);
    if (uploaded) {
      result = result.replace(full, `<img${before} src="${uploaded.url}" asset_uid="${uploaded.uid}"${after}>`);
      continue;
    }

    const csUid = extractCsAssetUid(src);
    if (csUid && !full.includes("asset_uid=")) {
      result = result.replace(full, `<img${before} src="${src}" asset_uid="${csUid}"${after}>`);
    }
  }

  return result;
}

export function collectLocalImageRefs(
  markdown: string,
  docFilePath: string,
): { ref: string; resolved: string }[] {
  const docDir = path.dirname(docFilePath);
  const results: { ref: string; resolved: string }[] = [];

  for (const match of markdown.matchAll(MD_IMAGE_RE)) {
    const ref = match[1] ?? "";
    if (isLocalAssetRef(ref)) results.push({ ref, resolved: resolveLocalPath(docDir, ref) });
  }

  for (const match of markdown.matchAll(IMG_SRC_RE)) {
    const ref = match[2] ?? "";
    if (isLocalAssetRef(ref)) results.push({ ref, resolved: resolveLocalPath(docDir, ref) });
  }

  return results;
}

/**
 * Validate a single local image reference for lint. Returns an error string or
 * null, ordered most-specific-first so the message tells the author exactly what
 * to fix:
 *   1. absolute path (works on the author's machine, breaks in CI and after merge)
 *   2. resolves outside the repo (the image would never be committed)
 *   3. missing file (relative, in-repo, but not present)
 * `resolved` is the normalized absolute path from collectLocalImageRefs.
 */
export function checkImagePath(
  repoRoot: string,
  docRelPath: string,
  ref: string,
  resolved: string,
): string | null {
  const refPath = decodeURIComponent((ref.split("#")[0] ?? ref).trim());

  if (path.isAbsolute(refPath)) {
    return `${docRelPath}: image \`${ref}\` uses an absolute path. Reference it relative to the doc instead, for example ![Alt text](./images/name.png).`;
  }

  if (resolved !== repoRoot && !resolved.startsWith(repoRoot + path.sep)) {
    return `${docRelPath}: image \`${ref}\` points outside the project directory. Move the image into the repo (for example an images/ folder next to the doc) and reference it with a relative path.`;
  }

  if (!fs.existsSync(resolved)) {
    const repoRel = path.relative(repoRoot, resolved).replace(/\\/g, "/");
    return `${docRelPath}: missing image \`${ref}\` → ${repoRel}`;
  }

  return null;
}

// Replace only the ref inside markdown image syntax ![alt](ref), preserving alt.
function replaceMarkdownImageRef(markdown: string, ref: string, url: string): string {
  const re = new RegExp(`(!\\[[^\\]]*\\]\\()${escapeRegExp(ref)}(\\))`, "g");
  return markdown.replace(re, `$1${url}$2`);
}

export interface UploadedImage {
  ref: string;
  resolved: string;
  url: string;
  uid: string;
}

/**
 * Upload each LOCAL image referenced in a markdown body to Contentstack Assets and
 * rewrite `![alt](localref)` to `![alt](cdnUrl)`, preserving alt text. Non-local
 * refs (already-CDN, data:, #) are left untouched. Returns the rewritten markdown
 * and the list of uploaded assets (with each ref's resolved local path, so the
 * caller can delete the now-unused file). In dry-run mode nothing is uploaded,
 * written, or rewritten — it only reports which local refs would be uploaded.
 */
export async function rewriteMarkdownImages(
  markdown: string,
  docFilePath: string,
  client: ContentstackClient,
  opts: { dryRun?: boolean } = {},
): Promise<{ markdown: string; uploaded: UploadedImage[] }> {
  const docDir = path.dirname(docFilePath);
  const cache: UploadCache = new Map();
  const uploaded: UploadedImage[] = [];

  // Collect distinct local refs first (don't mutate while iterating matchAll).
  const refs = new Set<string>();
  for (const m of markdown.matchAll(MD_IMAGE_RE)) {
    const ref = m[1] ?? "";
    if (isLocalAssetRef(ref)) refs.add(ref);
  }

  let result = markdown;
  for (const ref of refs) {
    const resolved = resolveLocalPath(docDir, ref);
    if (opts.dryRun) {
      uploaded.push({ ref, resolved, url: `(dry-run) would upload ${path.basename(resolved)}`, uid: "(dry-run)" });
      continue;
    }
    const asset = await uploadLocalImage(ref, docDir, client, cache);
    if (!asset) continue;
    uploaded.push({ ref, resolved, url: asset.url, uid: asset.uid });
    result = replaceMarkdownImageRef(result, ref, asset.url);
  }

  return { markdown: result, uploaded };
}
