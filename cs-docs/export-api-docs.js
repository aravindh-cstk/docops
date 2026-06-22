'use strict';

const fs = require('fs').promises;
const path = require('path');

const OUTPUT_ROOT = process.env.OUTPUT_ROOT || path.resolve(process.cwd(), 'api-docs');
const API_KEY = process.env.CONTENTSTACK_API_KEY || process.env.API_KEY;
const DELIVERY_TOKEN = process.env.CONTENTSTACK_DELIVERY_TOKEN || process.env.DELIVERY_TOKEN;
const CONTENTSTACK_ENV = process.env.CONTENTSTACK_ENV || 'production';
const CONTENTSTACK_HOST = process.env.CONTENTSTACK_API_HOST || 'https://cdn.contentstack.io';

if (!API_KEY || !DELIVERY_TOKEN) {
  console.error('Missing Contentstack credentials. Set CONTENTSTACK_API_KEY and CONTENTSTACK_DELIVERY_TOKEN.');
  process.exit(1);
}

// In-memory cache to avoid duplicate API calls for referenced entries
const entryCache = new Map();

// ---------------------------------------------------------------------------
// HTML → Markdown (no external dependencies)
// ---------------------------------------------------------------------------
function htmlToMarkdown(html) {
  if (!html || typeof html !== 'string') return '';

  let md = html;

  // Pre-blocks: preserve newlines inside, emit fenced code block
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
    md = md.replace(new RegExp(`<h${i}[^>]*>([\\s\\S]*?)<\/h${i}>`, 'gi'), (_, inner) =>
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

  // Unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map(li => `- ${stripTags(li.replace(/<li[^>]*>/i, '').replace(/<\/li>/i, '')).trim()}`).join('\n') + '\n\n';
  });

  // Ordered lists
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

  // Divs / spans / other wrappers
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, (_, inner) => `\n${inner}\n`);
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, (_, inner) => inner);

  // Strip any remaining tags
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
// Contentstack API helpers
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

async function fetchAllEntries(contentTypeUid) {
  const pageSize = 100;
  let skip = 0;
  let all = [];

  while (true) {
    const data = await csRequest(
      `/v3/content_types/${contentTypeUid}/entries?environment=${CONTENTSTACK_ENV}&include_count=true&limit=${pageSize}&skip=${skip}`
    );
    if (!Array.isArray(data.entries)) throw new Error(`No entries array for ${contentTypeUid}`);
    all = all.concat(data.entries);
    const total = data.count || data.entries.length;
    skip += pageSize;
    if (skip >= total) break;
  }

  console.log(`  Fetched ${all.length} entries from ${contentTypeUid}`);
  return all;
}

async function fetchEntry(contentTypeUid, entryUid) {
  const cacheKey = `${contentTypeUid}/${entryUid}`;
  if (entryCache.has(cacheKey)) return entryCache.get(cacheKey);

  const data = await csRequest(
    `/v3/content_types/${contentTypeUid}/entries/${entryUid}?environment=${CONTENTSTACK_ENV}`
  );
  const entry = data.entry || null;
  entryCache.set(cacheKey, entry);
  return entry;
}

// ---------------------------------------------------------------------------
// File utilities
// ---------------------------------------------------------------------------
function sanitizeSegment(seg) {
  return String(seg).trim()
    .replace(/^[/.]+|[/.]+$/g, '')
    .replace(/[<>:"|?*\\]+/g, '')
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

function formatDate(isoString) {
  if (!isoString) return 'unknown';
  return isoString.slice(0, 10);
}

function buildFrontmatter({ title, description, url, docType, version, lastUpdated }) {
  const desc = (description || '').replace(/\n/g, ' ').replace(/"/g, "'").slice(0, 300).trim();
  const lines = [
    '---',
    `title: "${(title || '').replace(/"/g, "'")}"`,
    `description: ${desc || title || ''}`,
    `url: ${url || ''}`,
    'product: Contentstack',
    `doc_type: ${docType || 'api-reference'}`,
    'audience:',
    '  - developers',
    `version: ${version || 'unknown'}`,
    `last_updated: ${lastUpdated || 'unknown'}`,
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
// Export: cda_api_reference_pages (106 entries)
// ---------------------------------------------------------------------------
async function exportCdaApiReferencePages() {
  console.log('\n[1/2] Exporting cda_api_reference_pages...');
  const entries = await fetchAllEntries('cda_api_reference_pages');

  for (const entry of entries) {
    try {
      const urlField = entry.url || '';
      const parts = urlToFilePath(urlField);

      const seoDescription = entry.seo && entry.seo.description
        ? entry.seo.description
        : htmlToMarkdown(entry.description || '').split('\n')[0].slice(0, 200);

      const frontmatter = buildFrontmatter({
        title: entry.title,
        description: seoDescription,
        url: `https://www.contentstack.com/docs${urlField.startsWith('/') ? urlField : '/' + urlField}`,
        docType: 'api-reference',
        version: 'unknown',
        lastUpdated: formatDate(entry.updated_at),
      });

      const bodyMd = htmlToMarkdown(entry.description || '');

      // sub_items (linked reference pages listed under this entry)
      let subItemsMd = '';
      if (Array.isArray(entry.sub_items) && entry.sub_items.length) {
        subItemsMd = '\n\n## Related Pages\n\n' +
          entry.sub_items.map(si => {
            const siUrl = si.url || '';
            return `- [${si.title || siUrl}](https://www.contentstack.com/docs${siUrl})`;
          }).join('\n');
      }

      const content = `${frontmatter}\n\n# ${entry.title}\n\n${bodyMd}${subItemsMd}\n`;
      await writeFile(parts, content);
    } catch (err) {
      console.error('  Failed entry:', entry.uid, err.message);
    }
  }
}

// ---------------------------------------------------------------------------
// Export: api_detail_page (14 entries, deep reference resolution)
// ---------------------------------------------------------------------------

async function resolveMainSectionUsageInstructions(entry) {
  if (!entry) return '';
  const section = entry.section;
  if (!section) return htmlToMarkdown(entry.description || '');

  // section is an array of { sub_section: { title, description, sub_items[] } }
  if (Array.isArray(section)) {
    const parts = [];
    for (const sec of section) {
      const sub = sec.sub_section || sec;
      if (sub.title) parts.push(`### ${sub.title}`);
      if (sub.description) parts.push(htmlToMarkdown(sub.description));
      if (Array.isArray(sub.sub_items)) {
        for (const item of sub.sub_items) {
          if (item.title) parts.push(`#### ${item.title}`);
          if (item.description) parts.push(htmlToMarkdown(item.description));
        }
      }
    }
    return parts.join('\n\n');
  }

  return htmlToMarkdown(String(section));
}

async function resolveApiRequest(contentTypeUid, uid) {
  const req = await fetchEntry(contentTypeUid, uid);
  if (!req) return '';

  const lines = [];
  lines.push(`#### ${req.title || 'API Request'}`);

  const method = req.method && req.method.select ? req.method.select : req.method || '';
  const endpoint = req.api_endpoint || req.url || '';
  if (method || endpoint) {
    lines.push(`\n**Method:** \`${method}\`  \n**Endpoint:** \`${endpoint}\``);
  }

  if (req.summary) {
    lines.push('\n' + htmlToMarkdown(req.summary));
  }

  // Parameters (first region's headers/query params as a table)
  if (Array.isArray(req.parameters) && req.parameters.length) {
    const paramBlock = req.parameters[0];
    const p = paramBlock.api_parameters || paramBlock;
    const allParams = [
      ...(p.headers || []),
      ...(p.url_parameters || []),
      ...(p.query_parameters || []),
    ];
    if (allParams.length) {
      const rows = allParams.map(param => {
        const key = param.key || '';
        const value = param.value || '';
        const desc = htmlToMarkdown(param.description || '').replace(/\n/g, ' ').slice(0, 120);
        return `| ${key} | ${value} | ${desc} |`;
      });
      lines.push('\n**Parameters:**\n\n| Key | Value | Description |\n|-----|-------|-------------|');
      lines.push(...rows);
    }
  }

  if (req.request_body && String(req.request_body).trim()) {
    const body = String(req.request_body).trim();
    lines.push(`\n**Request Body:**\n\n\`\`\`json\n${body}\n\`\`\``);
  }

  if (req.response_body && String(req.response_body).trim()) {
    const body = String(req.response_body).trim();
    const statusCode = req.status_code || '';
    lines.push(`\n**Response${statusCode ? ` (${statusCode})` : ''}:**\n\n\`\`\`json\n${body}\n\`\`\``);
  }

  return lines.join('\n');
}

async function resolveMainSectionApiReferences(entry) {
  if (!entry) return '';
  const sections = Array.isArray(entry.section) ? entry.section : [];
  const parts = [];

  for (const sec of sections) {
    const sub = sec.sub_section || sec;
    if (sub.title) parts.push(`### ${sub.title}`);
    if (sub.description) {
      const descMd = htmlToMarkdown(sub.description).trim();
      if (descMd) parts.push(descMd);
    }

    if (Array.isArray(sub.sub_items)) {
      for (const item of sub.sub_items) {
        if (item.title) parts.push(`\n#### ${item.title}`);
        if (item.description) parts.push(htmlToMarkdown(item.description));

        // Resolve api_details references
        if (Array.isArray(item.api_details)) {
          for (const ref of item.api_details) {
            if (ref.uid && ref._content_type_uid) {
              try {
                const reqMd = await resolveApiRequest(ref._content_type_uid, ref.uid);
                if (reqMd) parts.push(reqMd);
              } catch (err) {
                console.warn(`    Could not resolve ${ref._content_type_uid}/${ref.uid}: ${err.message}`);
              }
            }
          }
        }
      }
    }
  }

  return parts.join('\n\n');
}

async function exportApiDetailPages() {
  console.log('\n[2/2] Exporting api_detail_page...');
  const entries = await fetchAllEntries('api_detail_page');

  for (const entry of entries) {
    try {
      console.log(`  Processing: ${entry.title}`);
      const slug = sanitizeSegment(entry.url || entry.title || entry.uid);
      const parts = ['api-detail', `${slug}.md`];

      const seoDesc = entry.seo && entry.seo.description ? entry.seo.description : entry.title;

      const frontmatter = buildFrontmatter({
        title: entry.title,
        description: seoDesc,
        url: entry.url || slug,
        docType: 'api-detail',
        version: entry.api_version || 'unknown',
        lastUpdated: formatDate(entry.updated_at),
      });

      const bodyParts = [`# ${entry.title}\n`];

      // Resolve each navigation section
      for (const navItem of (entry.navigation || [])) {
        const heading = navItem.section_heading;
        if (heading) bodyParts.push(`## ${heading}`);

        for (const sectionRef of (navItem.sections || [])) {
          if (!sectionRef.uid || !sectionRef._content_type_uid) continue;
          try {
            const sectionEntry = await fetchEntry(sectionRef._content_type_uid, sectionRef.uid);
            let sectionMd = '';
            if (sectionRef._content_type_uid === 'main_section_api_references') {
              sectionMd = await resolveMainSectionApiReferences(sectionEntry);
            } else {
              sectionMd = await resolveMainSectionUsageInstructions(sectionEntry);
            }
            if (sectionMd) bodyParts.push(sectionMd);
          } catch (err) {
            console.warn(`    Could not resolve section ${sectionRef._content_type_uid}/${sectionRef.uid}: ${err.message}`);
          }
        }
      }

      // Regions summary
      if (Array.isArray(entry.regions) && entry.regions.length) {
        bodyParts.push('## Regions\n');
        const regionRows = entry.regions
          .map(r => r.config || r)
          .filter(c => c.region && c.host)
          .map(c => `| ${c.region} | ${c.host} |`);
        if (regionRows.length) {
          bodyParts.push('| Region | Host |\n|--------|------|');
          bodyParts.push(...regionRows);
        }
      }

      const content = `${frontmatter}\n\n${bodyParts.join('\n\n')}\n`;
      await writeFile(parts, content);
    } catch (err) {
      console.error('  Failed entry:', entry.uid, err.message);
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log('Starting API docs export to:', OUTPUT_ROOT);
  await ensureDir(OUTPUT_ROOT);

  await exportCdaApiReferencePages();
  await exportApiDetailPages();

  console.log('\nExport complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
