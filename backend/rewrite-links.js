'use strict';

// Rewrites absolute Contentstack doc links to relative .md paths in both:
//   cs-docs/api-docs/  — links of the form https://www.contentstack.com/docs/...
//   cs-docs/cs-docs/   — links of the form /docs/... (site-root-relative)
//
// Builds a URL→filepath index from both folders using file path structure
// (not frontmatter url, since that can differ from the URL used in links).
// Links that don't resolve to a known file are left unchanged.

const fs   = require('fs');
const path = require('path');

const API_DOCS = path.join(__dirname, 'api-docs');
const CS_DOCS  = path.join(__dirname, 'cs-docs');

// ---------------------------------------------------------------------------
// Build URL → absolute file path index
// Key = https://www.contentstack.com/docs/{path-relative-to-rootDir-without-.md}
// ---------------------------------------------------------------------------
const BASE = 'https://www.contentstack.com/docs';

function collectFiles(rootDir, map) {
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        const rel = path.relative(rootDir, full).replace(/\\/g, '/');
        const url = `${BASE}/${rel.replace(/\.md$/, '')}`;
        map.set(url, full);
      }
    }
  }
  walk(rootDir);
}

console.log('Building URL index...');
const urlIndex = new Map();
collectFiles(API_DOCS, urlIndex);
collectFiles(CS_DOCS,  urlIndex);

// api-detail files live at api-docs/api-detail/{slug}.md but links use
// the canonical URL /developers/apis/{slug} — register both keys.
const API_DETAIL_DIR = path.join(API_DOCS, 'api-detail');
if (fs.existsSync(API_DETAIL_DIR)) {
  for (const entry of fs.readdirSync(API_DETAIL_DIR, { withFileTypes: true })) {
    if (!entry.name.endsWith('.md')) continue;
    const slug = entry.name.replace(/\.md$/, '');
    const filePath = path.join(API_DETAIL_DIR, entry.name);
    urlIndex.set(`${BASE}/developers/apis/${slug}`,  filePath);
  }
}

console.log(`  Indexed ${urlIndex.size} files`);

// ---------------------------------------------------------------------------
// Slug fallback index: last path segment → [filepath]
// Used when the full URL path doesn't match (page was reorganized).
// Only used when there is exactly one file with that slug (no ambiguity).
// ---------------------------------------------------------------------------
const slugIndex = new Map(); // slug → [filepath, ...]
for (const filePath of urlIndex.values()) {
  const slug = path.basename(filePath, '.md');
  if (!slugIndex.has(slug)) slugIndex.set(slug, []);
  slugIndex.get(slug).push(filePath);
}

function lookupUrl(normalised) {
  // 1. Exact full-path match
  let target = urlIndex.get(normalised);
  if (target) return target;
  // 2. Slug-only fallback — last segment of the URL path
  const slug = normalised.split('/').pop();
  const candidates = slugIndex.get(slug);
  if (candidates && candidates.length === 1) return candidates[0];
  return null; // ambiguous or not in export
}

// ---------------------------------------------------------------------------
// Core helpers
// ---------------------------------------------------------------------------
function relativeLink(fromFile, toFile) {
  const rel = path.relative(path.dirname(fromFile), toFile);
  return rel.replace(/\\/g, '/').replace(/^([^.])/, './$1');
}

function resolveUrl(rawUrl) {
  // Normalise both link forms to a full URL for index lookup:
  //   https://www.contentstack.com/docs/foo  → as-is
  //   /docs/foo                              → prepend base origin
  let full = rawUrl;
  if (rawUrl.startsWith('/docs/')) {
    full = `${BASE}${rawUrl.slice('/docs'.length)}`; // /docs/foo → BASE/foo
  }
  // Strip trailing slash and fragment before lookup; return { full, hash }
  const hashIdx = full.indexOf('#');
  const base    = (hashIdx === -1 ? full : full.slice(0, hashIdx)).replace(/\/+$/, '');
  const hash    = hashIdx === -1 ? '' : full.slice(hashIdx);
  return { base, hash };
}

// ---------------------------------------------------------------------------
// Rewrite links in a single file
// Handles both https://... and /docs/... link forms.
// [^)\n] prevents the regex from spanning newlines (avoids broken mid-URL truncations).
// ---------------------------------------------------------------------------
const HTTPS_RE = /\[([^\]\n]*)\]\((https:\/\/www\.contentstack\.com\/docs[^)\n]*)\)/g;
const SLASH_RE = /\[([^\]\n]*)\]\((\/docs\/[^)\n]*)\)/g;

let filesModified  = 0;
let linksReplaced  = 0;
let linksUnresolved = 0;

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let modified = original;
  let changed  = false;

  function replacer(match, text, rawUrl) {
    const { base, hash } = resolveUrl(rawUrl);
    const target = lookupUrl(base);
    if (!target) {
      linksUnresolved++;
      return match;
    }
    linksReplaced++;
    changed = true;
    return `[${text}](${relativeLink(filePath, target)}${hash})`;
  }

  modified = modified.replace(HTTPS_RE, replacer);
  modified = modified.replace(SLASH_RE, replacer);

  if (changed) {
    fs.writeFileSync(filePath, modified, 'utf8');
    filesModified++;
  }
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith('.md')) processFile(full);
  }
}

console.log('\nRewriting links in api-docs/ and cs-docs/...');
walkDir(API_DOCS);
walkDir(CS_DOCS);

console.log('\nDone.');
console.log(`  Files modified            : ${filesModified}`);
console.log(`  Links replaced            : ${linksReplaced}`);
console.log(`  Links unresolved (kept)   : ${linksUnresolved}`);
