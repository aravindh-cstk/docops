'use strict';

// Rewrites absolute Contentstack doc links in api-docs/ to relative .md paths
// by building a URL index from:
//   cs-docs/api-docs/   (url frontmatter field)
//   cs-docs/cs-docs/    (url frontmatter field)
//
// Links that don't resolve to a known file are left unchanged.

const fs   = require('fs');
const path = require('path');

const ROOT      = path.resolve(__dirname, '..');               // docops/
const API_DOCS  = path.join(__dirname, 'api-docs');
const CS_DOCS   = path.join(__dirname, 'cs-docs');

// ---------------------------------------------------------------------------
// Build URL → absolute file path index
// Key = https://www.contentstack.com/docs/{path-relative-to-root-dir-without-.md}
// This matches the link URLs used in api-docs content, which mirror the
// docsite URL structure (= folder structure under each root dir).
// ---------------------------------------------------------------------------
const BASE = 'https://www.contentstack.com/docs';

function collectFiles(rootDir, map) {
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        // Derive URL from file path relative to rootDir, strip .md
        const rel  = path.relative(rootDir, full).replace(/\\/g, '/');
        const url  = `${BASE}/${rel.replace(/\.md$/, '')}`;
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

// api-detail files live at api-docs/api-detail/{slug}.md but the links in
// content use the canonical URL /developers/apis/{slug}. Add a second key.
const API_DETAIL_DIR = path.join(API_DOCS, 'api-detail');
if (fs.existsSync(API_DETAIL_DIR)) {
  for (const entry of fs.readdirSync(API_DETAIL_DIR, { withFileTypes: true })) {
    if (!entry.name.endsWith('.md')) continue;
    const slug    = entry.name.replace(/\.md$/, '');
    const altUrl  = `${BASE}/developers/apis/${slug}`;
    const altUrl2 = `${BASE}/developers/apis/${slug}/`; // trailing-slash variant
    const filePath = path.join(API_DETAIL_DIR, entry.name);
    urlIndex.set(altUrl,  filePath);
    urlIndex.set(altUrl2, filePath);
  }
}

console.log(`  Indexed ${urlIndex.size} files (including api-detail alt URLs)`);

// ---------------------------------------------------------------------------
// Rewrite links in every api-docs .md file
// ---------------------------------------------------------------------------
function relativeLink(fromFile, toFile) {
  const rel = path.relative(path.dirname(fromFile), toFile);
  // Ensure forward slashes (Windows safety) and starts with ./
  return rel.replace(/\\/g, '/').replace(/^([^.])/, './$1');
}

// Matches markdown links on a single line — [^)\n] prevents spanning newlines
const LINK_RE = /\[([^\]]*)\]\((https:\/\/www\.contentstack\.com\/docs[^)\n]*)\)/g;

let filesModified = 0;
let linksReplaced = 0;
let linksUnresolved = 0;

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let modified = original;
  let changed = false;

  modified = modified.replace(LINK_RE, (match, text, url) => {
    // Strip fragment (#anchor) before lookup; preserve it in the output
    const hashIdx = url.indexOf('#');
    const base    = hashIdx === -1 ? url : url.slice(0, hashIdx);
    const hash    = hashIdx === -1 ? ''  : url.slice(hashIdx);

    // Normalise trailing slash
    const normalised = base.replace(/\/+$/, '');
    const target = urlIndex.get(normalised);

    if (!target) {
      linksUnresolved++;
      return match; // leave unchanged
    }

    const rel = relativeLink(filePath, target) + hash;
    linksReplaced++;
    changed = true;
    return `[${text}](${rel})`;
  });

  if (changed) {
    fs.writeFileSync(filePath, modified, 'utf8');
    filesModified++;
  }
}

function walkApiDocs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkApiDocs(full);
    else if (entry.name.endsWith('.md')) processFile(full);
  }
}

console.log('\nRewriting links in api-docs/...');
walkApiDocs(API_DOCS);

console.log(`\nDone.`);
console.log(`  Files modified : ${filesModified}`);
console.log(`  Links replaced : ${linksReplaced}`);
console.log(`  Links unresolved (kept absolute): ${linksUnresolved}`);
