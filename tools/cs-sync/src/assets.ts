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

export async function processImagesInHtml(
  html: string,
  docFilePath: string,
  client: ContentstackClient,
): Promise<string> {
  const docDir = path.dirname(docFilePath);
  let result = html;

  const uploads = new Map<string, { url: string; uid: string }>();

  async function ensureUploaded(ref: string): Promise<{ url: string; uid: string } | null> {
    if (!isLocalAssetRef(ref)) return null;
    const abs = resolveLocalPath(docDir, ref);
    if (!fs.existsSync(abs)) {
      console.warn(`Image not found, skipping upload: ${abs}`);
      return null;
    }
    const cached = uploads.get(abs);
    if (cached) return cached;

    const existing = await client.findAssetByFilename(path.basename(abs));
    if (existing) {
      uploads.set(abs, existing);
      return existing;
    }

    const uploaded = await client.uploadAsset(abs);
    uploads.set(abs, uploaded);
    return uploaded;
  }

  const mdRefs = [...html.matchAll(MD_IMAGE_RE)].map((m) => m[1]);
  for (const ref of mdRefs) {
    await ensureUploaded(ref);
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
