'use strict';

const fs = require('fs').promises;
const path = require('path');

const API_KEY = 'blt2d43f51baca745a8';
const DELIVERY_TOKEN = 'cs80888179b9220bd7cea067ff';
const CONTENTSTACK_ENV = 'production';
const CONTENTSTACK_HOST = 'https://cdn.contentstack.io';
const OUTPUT_ROOT = path.join(__dirname, 'cs-docs');

// ---------------------------------------------------------------------------
// HTML → Markdown (simplified, matches export-contentstack.js)
// ---------------------------------------------------------------------------
function htmlToMarkdown(html) {
  if (!html || typeof html !== 'string') return '';
  let md = html;

  // Pre-blocks
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, inner) => {
    const code = inner
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"')
      .trim();
    return `\n\n\`\`\`\n${code}\n\`\`\`\n\n`;
  });

  // Headings
  for (let i = 6; i >= 1; i--) {
    const hashes = '#'.repeat(i);
    md = md.replace(new RegExp(`<h${i}[^>]*>([\\s\\S]*?)<\\/h${i}>`, 'gi'), (_, inner) =>
      `\n\n${hashes} ${stripTags(inner).trim()}\n\n`
    );
  }

  // Tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, tableBody) => {
    const rows = [];
    const rowMatches = tableBody.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
    for (const row of rowMatches) {
      const cells = [];
      const cellMatches = row.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [];
      for (const cell of cellMatches) {
        const content = stripTags(cell.replace(/<t[dh][^>]*>/i, '').replace(/<\/t[dh]>/i, '')).trim().replace(/\|/g, '\\|');
        cells.push(content);
      }
      rows.push(cells);
    }
    if (!rows.length) return '';
    const header = rows[0];
    const separator = header.map(() => '---');
    const lines = [`| ${header.join(' | ')} |`, `| ${separator.join(' | ')} |`];
    for (let i = 1; i < rows.length; i++) {
      lines.push(`| ${rows[i].join(' | ')} |`);
    }
    return `\n\n${lines.join('\n')}\n\n`;
  });

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map(li => `- ${stripTags(li.replace(/<li[^>]*>/i, '').replace(/<\/li>/i, '')).trim()}`).join('\n') + '\n\n';
  });

  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map((li, idx) => `${idx + 1}. ${stripTags(li.replace(/<li[^>]*>/i, '').replace(/<\/li>/i, '')).trim()}`).join('\n') + '\n\n';
  });

  // Inline formatting
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, t) => `**${stripTags(t).trim()}**`);
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, t) => `**${stripTags(t).trim()}**`);
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, t) => `_${stripTags(t).trim()}_`);
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, t) => `_${stripTags(t).trim()}_`);
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, t) => `\`${stripTags(t)}\``);

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) =>
    `[${stripTags(text).trim()}](${href})`
  );

  // Paragraphs and line breaks
  md = md.replace(/<br\s*\/?>/gi, '  \n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `\n\n${stripTags(inner).trim()}\n\n`);

  // Divs / spans
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, (_, inner) => `\n${inner}\n`);
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, (_, inner) => inner);

  // Strip remaining tags
  md = stripTags(md);

  // Decode HTML entities
  md = md
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

  // Collapse excessive blank lines
  md = md.replace(/\n{3,}/g, '\n\n').trim();

  return md;
}

function stripTags(html) {
  return (html || '').replace(/<[^>]+>/g, '');
}

// ---------------------------------------------------------------------------
// API helpers
// ---------------------------------------------------------------------------
async function csRequest(path) {
  const url = `${CONTENTSTACK_HOST}${path}`;
  const response = await fetch(url, {
    headers: {
      api_key: API_KEY,
      access_token: DELIVERY_TOKEN,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`CS request failed ${response.status} ${path}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

async function fetchEntriesByUrl(contentType, urlRegex) {
  const pageSize = 100;
  let skip = 0;
  let all = [];
  let total = null;

  while (true) {
    const data = await csRequest(
      `/v3/content_types/${contentType}/entries?environment=${CONTENTSTACK_ENV}&include_count=true&limit=${pageSize}&skip=${skip}&query=${encodeURIComponent(JSON.stringify({url:{$regex:urlRegex}}))}`
    );
    if (!Array.isArray(data.entries)) throw new Error(`No entries array`);
    all = all.concat(data.entries);

    if (total === null) {
      total = data.count;
    }

    skip += pageSize;
    if (skip >= total) break;
  }

  return all;
}

// ---------------------------------------------------------------------------
// File utilities
// ---------------------------------------------------------------------------
function sanitizeSegment(seg) {
  return String(seg).trim()
    .replace(/^[/.]+|[/.]+$/g, '')
    .replace(/[<>:"|?*\\/]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^[-.]|[-.]$/g, '') || 'untitled';
}

function urlToFilePath(urlValue) {
  const clean = String(urlValue).replace(/^\/+|\/+$/g, '');
  const segments = clean.split('/').filter(Boolean).map(sanitizeSegment).filter(Boolean);
  if (!segments.length) return ['index.md'];
  const fileName = `${segments.pop()}.md`;
  return [...segments, fileName];
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

function buildFrontmatter({ title, description, url }) {
  const desc = (description || '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // strip link syntax before truncating
    .replace(/\n/g, ' ').replace(/"/g, "'").slice(0, 300).trim();
  const lines = [
    '---',
    `title: "${(title || '').replace(/"/g, "'")}"`,
    `description: ${desc || title || ''}`,
    `url: ${url || ''}`,
    'product: Contentstack',
    'doc_type: guide',
    'audience:',
    '  - developers',
    '  - content-managers',
    'version: unknown',
    `last_updated: ${new Date().toISOString().slice(0, 10)}`,
    '---',
  ];
  return lines.join('\n');
}

async function writeFile(parts, content) {
  const fileName = parts[parts.length - 1];
  const dirs = parts.slice(0, -1);
  const targetDir = path.join(OUTPUT_ROOT, ...dirs);
  await ensureDir(targetDir);
  const filePath = path.join(targetDir, fileName);
  await fs.writeFile(filePath, content, 'utf8');
  console.log('  Wrote:', path.relative(process.cwd(), filePath));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function exportSection(sectionName, contentType, urlPattern) {
  console.log(`\nExporting ${sectionName}...`);
  const entries = await fetchEntriesByUrl(contentType, urlPattern);
  console.log(`  Fetched ${entries.length} entries`);

  for (const entry of entries) {
    try {
      const parts = urlToFilePath(entry.url);
      const frontmatter = buildFrontmatter({
        title: entry.title,
        description: entry.seo?.description || entry.description || entry.title,
        url: `https://www.contentstack.com${entry.url || '/'}`,
      });

      const bodyMd = entry.body ? htmlToMarkdown(entry.body) : '';
      const content = `${frontmatter}\n\n# ${entry.title}\n\n${bodyMd}\n`;
      await writeFile(parts, content);
    } catch (err) {
      console.error(`  Failed: ${entry.uid}`, err.message);
    }
  }
}

async function main() {
  const section = process.argv[2] || 'sample-apps';
  const configs = {
    'automation-hub-connectors': { contentType: 'docs_article', pattern: 'automation-hub-connectors' },
    'sample-apps': { contentType: 'sample_apps_demo_page', pattern: 'sample-apps' },
    'visual-builder': { contentType: 'docs_article', pattern: 'visual-builder' },
    'develop-apps-with-datasync': { contentType: 'docs_article', pattern: 'develop-apps-with-datasync' },
    'sdks': { contentType: 'docs_article', pattern: 'sdks' },
  };

  const config = configs[section] || { contentType: 'docs_article', pattern: section };
  console.log('Starting docs sections export...');
  await exportSection(section, config.contentType, config.pattern);
  console.log('\nExport complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
