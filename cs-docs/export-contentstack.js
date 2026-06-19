'use strict';

const fs = require('fs').promises;
const path = require('path');

const OUTPUT_ROOT = process.env.OUTPUT_ROOT || path.resolve(process.cwd(), 'cs-docs');
const API_KEY = process.env.CONTENTSTACK_API_KEY || process.env.API_KEY;
const DELIVERY_TOKEN = process.env.CONTENTSTACK_DELIVERY_TOKEN || process.env.DELIVERY_TOKEN;
const CONTENTSTACK_ENV = process.env.CONTENTSTACK_ENV || 'production';
const CONTENTSTACK_HOST = process.env.CONTENTSTACK_API_HOST || 'https://cdn.contentstack.io';

if (!API_KEY || !DELIVERY_TOKEN) {
  console.error('Missing Contentstack credentials. Set CONTENTSTACK_API_KEY and CONTENTSTACK_DELIVERY_TOKEN.');
  process.exit(1);
}

async function main() {
  console.log('Starting Contentstack export to:', OUTPUT_ROOT);

  const entries = await fetchAllEntries();
  if (!entries.length) {
    console.log('No docs_article entries found.');
    return;
  }

  for (const entry of entries) {
    try {
      await exportEntry(entry);
    } catch (error) {
      console.error('Failed to export entry:', entry.uid || entry.title || '<unknown>', error.message);
    }
  }

  console.log('Export complete.');
}

async function fetchAllEntries() {
  const pageSize = 100;
  let skip = 0;
  let count = 0;
  let allEntries = [];

  while (true) {
    const url = new URL(`${CONTENTSTACK_HOST}/v3/content_types/docs_article/entries`);
    url.searchParams.set('environment', CONTENTSTACK_ENV);
    url.searchParams.set('include_count', 'true');
    url.searchParams.set('limit', String(pageSize));
    url.searchParams.set('skip', String(skip));

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        api_key: API_KEY,
        access_token: DELIVERY_TOKEN,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Contentstack request failed: ${response.status} ${response.statusText} ${body}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.entries)) {
      throw new Error('Unexpected Contentstack response: entries array missing.');
    }

    allEntries = allEntries.concat(data.entries);
    count = data.count || data.entries.length;

    skip += pageSize;
    if (skip >= count) {
      break;
    }
  }

  console.log(`Fetched ${allEntries.length} docs_article entries from Contentstack.`);
  return allEntries;
}

function findUrlField(entry) {
  if (!entry || typeof entry !== 'object') return null;
  if (typeof entry.url === 'string' && entry.url.trim()) return entry.url;
  if (typeof entry.URL === 'string' && entry.URL.trim()) return entry.URL;
  return null;
}

function sanitizePathSegment(segment) {
  if (typeof segment !== 'string') {
    return '';
  }

  let normalized = segment.trim();
  normalized = normalized.replace(/^[/.]+|[/.]+$/g, '');
  normalized = normalized.replace(/[<>:"|?*\\]+/g, '');
  normalized = normalized.replace(/\s+/g, '-');
  normalized = normalized.replace(/--+/g, '-');
  normalized = normalized.replace(/^[.-]+|[.-]+$/g, '');
  return normalized || '';
}

function buildOutputParts(urlValue) {
  const raw = String(urlValue).trim();
  const clean = raw.replace(/^[\/]+|[\/]+$/g, '');
  const segments = clean.split('/').filter(Boolean).map(sanitizePathSegment).filter(Boolean);
  if (!segments.length) {
    return ['index.md'];
  }

  const fileName = `${segments.pop()}.md`;
  return [...segments, fileName];
}

function buildMarkdown(entry, meta, body) {
  const frontmatter = {
    title: entry.title || null,
    uid: entry.uid || null,
    url: findUrlField(entry) || null,
    content_type: entry._content_type_uid || entry.content_type || null,
    contentstack: {
      environment: CONTENTSTACK_ENV,
      assets: meta.assets,
      references: meta.references
    }
  };

  const yaml = ['---'];
  for (const [key, value] of Object.entries(frontmatter)) {
    if (value === null || value === undefined) continue;
    if (typeof value === 'object') {
      yaml.push(`${key}:`);
      yaml.push(...formatYamlObject(value, 1));
    } else {
      yaml.push(`${key}: ${escapeYamlScalar(String(value))}`);
    }
  }
  yaml.push('---', '');

  return `${yaml.join('\n')}${body || ''}`;
}

function formatYamlObject(value, indentLevel) {
  const indent = '  '.repeat(indentLevel);
  const lines = [];

  if (Array.isArray(value)) {
    if (value.length === 0) {
      lines.push(`${indent}[]`);
      return lines;
    }

    for (const item of value) {
      if (typeof item === 'object' && item !== null) {
        lines.push(`${indent}-`);
        lines.push(...formatYamlObject(item, indentLevel + 1));
      } else {
        lines.push(`${indent}- ${escapeYamlScalar(String(item))}`);
      }
    }
    return lines;
  }

  for (const [key, item] of Object.entries(value)) {
    const prefix = `${indent}${key}:`;
    if (item === null || item === undefined) {
      lines.push(`${prefix} null`);
      continue;
    }
    if (typeof item === 'object') {
      if (Array.isArray(item) && item.length === 0) {
        lines.push(`${prefix} []`);
      } else {
        lines.push(prefix);
        lines.push(...formatYamlObject(item, indentLevel + 1));
      }
      continue;
    }
    lines.push(`${prefix} ${escapeYamlScalar(String(item))}`);
  }

  return lines;
}

function escapeYamlScalar(value) {
  if (/^[A-Za-z0-9_./:-]+$/.test(value)) {
    return value;
  }

  const escaped = value.replace(/"/g, '\\"');
  return `"${escaped}"`;
}

function collectAssetsAndReferences(obj) {
  const assets = [];
  const references = [];
  const seenAssets = new Set();
  const seenReferences = new Set();

  function recurse(value) {
    if (Array.isArray(value)) {
      value.forEach(recurse);
      return;
    }

    if (value && typeof value === 'object') {
      const isAsset = typeof value.url === 'string' && (typeof value.filename === 'string' || typeof value.file_name === 'string' || typeof value.content_type === 'string');
      const isReference = typeof value.uid === 'string' && typeof value._content_type_uid === 'string';

      if (isAsset) {
        const assetKey = `${value.uid || ''}|${value.url}`;
        if (!seenAssets.has(assetKey)) {
          seenAssets.add(assetKey);
          assets.push({
            uid: value.uid || null,
            url: value.url,
            title: value.title || value.filename || value.file_name || null
          });
        }
      }

      if (isReference) {
        const refKey = `${value.uid}|${value._content_type_uid}`;
        if (!seenReferences.has(refKey)) {
          seenReferences.add(refKey);
          references.push({
            uid: value.uid,
            content_type: value._content_type_uid,
            title: value.title || value.name || null,
            url: value.url || null
          });
        }
      }

      for (const nested of Object.values(value)) {
        recurse(nested);
      }
    }
  }

  recurse(obj);
  return { assets, references };
}

async function exportEntry(entry) {
  const urlValue = findUrlField(entry);
  if (!urlValue) {
    console.warn('Skipping entry without URL field:', entry.uid || entry.title || '<unknown>');
    return;
  }

  const outputParts = buildOutputParts(urlValue);
  const fileName = outputParts.pop();
  const folderParts = outputParts;
  const targetDir = path.join(OUTPUT_ROOT, ...folderParts);

  await ensureDirectory(targetDir);

  const targetFile = path.join(targetDir, fileName);
  const fileExists = await exists(targetFile);
  if (fileExists) {
    console.log('Skipped existing file:', path.relative(process.cwd(), targetFile));
    return;
  }

  const mdContent = typeof entry.md_content === 'string' ? entry.md_content : '';
  const meta = collectAssetsAndReferences(entry);
  const markdown = buildMarkdown(entry, meta, mdContent);

  await fs.writeFile(targetFile, markdown, 'utf8');
  console.log('Wrote file:', path.relative(process.cwd(), targetFile));
}

async function ensureDirectory(dirPath) {
  if (!dirPath || dirPath === '.') return;

  const segments = path.relative(process.cwd(), dirPath).split(path.sep).filter(Boolean);
  let current = path.isAbsolute(dirPath) ? path.parse(dirPath).root : '';

  for (const segment of segments) {
    const sanitized = sanitizePathSegment(segment) || 'untitled';
    const candidate = current ? path.join(current, sanitized) : sanitized;
    const candidateExists = await exists(candidate);

    if (candidateExists) {
      const stat = await fs.stat(candidate);
      if (stat.isFile()) {
        const uniqueName = await getUniqueSiblingDirectory(candidate);
        current = uniqueName;
        await fs.mkdir(current, { recursive: false });
        continue;
      }
      current = candidate;
    } else {
      await fs.mkdir(candidate, { recursive: false });
      current = candidate;
    }
  }
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getUniqueSiblingDirectory(conflictPath) {
  const parent = path.dirname(conflictPath);
  const base = path.basename(conflictPath);
  let index = 1;

  while (true) {
    const candidate = path.join(parent, `${base}-${index}`);
    if (!(await exists(candidate))) {
      return candidate;
    }
    index += 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
