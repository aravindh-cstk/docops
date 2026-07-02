require('dotenv').config();
const fs = require('fs');
const path = require('path');

const logger = require('./utils/logger');
const ContentstackAPI = require('./utils/contentstack-api');
const { parseFrontmatter } = require('./utils/parse-markdown');
const { htmlToMarkdown } = require('./utils/html-to-md');

const SDK_DOCS_DIR = path.resolve(__dirname, '../../sdk-docs');

// ── Args ──────────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2);
const argMap = {};
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) { argMap[argv[i]] = argv[i + 1] || ''; i++; }
}
const LOOKBACK_MINUTES = parseInt(argMap['--lookback'] || '20', 10);

// Content types to pull from (sdk_landing_pages is assembled, not edited directly)
const PULL_CONTENT_TYPES = ['method_details', 'classes_reference', 'sdk_usage_guides'];

// ── Helpers ───────────────────────────────────────────────────────────────────

// Strip HTML tags and decode common entities — used for plain-text frontmatter fields
function htmlToText(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Build a mapping of { urlSlug → absoluteFilePath } by scanning all sdk-docs/ .md files
function buildUrlIndex() {
  const index = {};
  const sdkFolders = fs.readdirSync(SDK_DOCS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const sdkFolder of sdkFolders) {
    const sdkPath = path.join(SDK_DOCS_DIR, sdkFolder);
    walkMd(sdkPath, (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = parseFrontmatter(content);
        if (data.url) {
          const slug = data.url.replace(/^https?:\/\/(www\.)?contentstack\.com/, '');
          if (slug) index[slug] = filePath;
        }
      } catch { /* skip unparseable files */ }
    });
  }
  return index;
}

function walkMd(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMd(full, cb);
    else if (entry.name.endsWith('.md')) cb(full);
  }
}

// Reconstruct a .md file from a CMS entry, preserving non-CMS frontmatter fields
// from the existing file (product, audience, version, last_updated).
function buildMarkdownFile(entry, ctUid, existingContent) {
  const { data: existing } = existingContent
    ? parseFrontmatter(existingContent)
    : { data: {} };

  const today = new Date().toISOString().split('T')[0];

  let title, description, url, docType;

  if (ctUid === 'method_details') {
    title = entry.method_name || existing.title || '';
    description = htmlToText(entry.description || '');
    url = entry.url ? `https://www.contentstack.com${entry.url}` : (existing.url || '');
    docType = 'method_details';
  } else if (ctUid === 'classes_reference') {
    title = entry.class_name || existing.title || '';
    description = htmlToText(entry.description || '');
    url = entry.url ? `https://www.contentstack.com${entry.url}` : (existing.url || '');
    docType = 'class_intro';
  } else if (ctUid === 'sdk_usage_guides') {
    title = entry.title || existing.title || ''; // CMS is the source of truth for title
    description = existing.description || '';
    url = '';
    docType = 'usage_guide';
  }

  // Build frontmatter — preserve extra fields from the existing file
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `url: ${JSON.stringify(url)}`,
    `product: ${JSON.stringify(existing.product || 'Contentstack')}`,
    `doc_type: ${JSON.stringify(docType)}`,
  ];

  if (existing.audience) {
    lines.push('audience:');
    const aud = Array.isArray(existing.audience) ? existing.audience : [existing.audience];
    for (const a of aud) lines.push(`  - ${a}`);
  }

  lines.push(`version: ${JSON.stringify(existing.version || 'current')}`);
  lines.push(`last_updated: ${JSON.stringify(today)}`);

  if (ctUid === 'sdk_usage_guides') {
    lines.push(`cms_uid: ${JSON.stringify(entry.uid)}`);
  }

  lines.push('---');

  // Sections is the authoritative structured source for the body once populated;
  // md_content is a rendered mirror kept for CMS preview / backward compatibility.
  // Entries not yet migrated (empty sections) fall back to the raw md_content blob.
  const sections = Array.isArray(entry.sections) ? entry.sections : [];
  const body = ctUid === 'sdk_usage_guides' && sections.length > 0
    ? buildBodyFromSections(title, sections)
    : (entry.md_content || '').trim();

  return `${lines.join('\n')}\n\n${body}\n`;
}

function buildBodyFromSections(title, sections) {
  const parts = [`# ${title}`];
  for (const block of sections) {
    const sub = block.sub_section || {};
    if (!sub.title) continue;
    parts.push(`## ${sub.title}`, htmlToMarkdown(sub.description || ''));
  }
  return parts.join('\n\n');
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  logger.separator();
  logger.info('SDK CMS → GitHub pull');
  logger.info(`Looking back ${LOOKBACK_MINUTES} minutes`);
  logger.separator();

  const sinceIso = new Date(Date.now() - LOOKBACK_MINUTES * 60 * 1000).toISOString();

  const sandbox = new ContentstackAPI(
    process.env.SANDBOX_STACK_API_KEY,
    { managementToken: process.env.SANDBOX_MANAGEMENT_TOKEN }
  );

  logger.info('Building URL index from sdk-docs/...');
  const urlIndex = buildUrlIndex();
  logger.info(`  Indexed ${Object.keys(urlIndex).length} files`);

  const changes = []; // { filePath, ctUid, entryUid, updatedBy, updatedAt, url }

  for (const ctUid of PULL_CONTENT_TYPES) {
    logger.info(`Fetching recently updated ${ctUid} entries since ${sinceIso}...`);
    const entries = await sandbox.listRecentEntries(ctUid, sinceIso);
    logger.info(`  Found ${entries.length} updated entries`);

    for (const entry of entries) {
      let filePath = null;

      if (ctUid === 'sdk_usage_guides') {
        // Match by cms_uid stamped into the file's frontmatter on a prior sync/pull.
        // Falls back to the legacy derived-title heuristic for files not yet backfilled.
        filePath = findUsageGuideFile(entry);
      } else {
        // Match by URL slug
        const slug = entry.url;
        if (!slug) {
          logger.warn(`  Skipping ${ctUid} uid=${entry.uid} — no url field`);
          continue;
        }
        filePath = urlIndex[slug] || null;
      }

      if (!filePath) {
        logger.warn(`  No matching GitHub file for ${ctUid} uid=${entry.uid} url="${entry.url || ''}" — skipping`);
        continue;
      }

      const existingContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
      const newContent = buildMarkdownFile(entry, ctUid, existingContent);

      if (existingContent === newContent) {
        logger.info(`  No change — ${path.relative(process.cwd(), filePath)}`);
        continue;
      }

      fs.writeFileSync(filePath, newContent, 'utf8');
      const action = existingContent === null ? 'created' : 'updated';
      logger.success(`  ${action} ${path.relative(path.resolve(__dirname, '../..'), filePath)}`);

      changes.push({
        filePath: path.relative(path.resolve(__dirname, '../..'), filePath),
        ctUid,
        entryUid: entry.uid,
        updatedBy: entry.updated_by || 'unknown',
        updatedAt: entry.updated_at || '',
        url: entry.url || entry.title || '',
      });
    }
  }

  logger.separator();
  logger.info(`Done — ${changes.length} file(s) written`);

  if (changes.length > 0) {
    // Resolve updated_by UIDs to display names
    const userCache = {};
    for (const c of changes) {
      if (!userCache[c.updatedBy]) {
        userCache[c.updatedBy] = await sandbox.getUserName(c.updatedBy);
      }
      c.updatedByName = userCache[c.updatedBy];
    }

    // Write a JSON summary consumed by the GitHub Actions step to build the PR body
    const summaryPath = path.join(__dirname, '.cms-pull-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(changes, null, 2), 'utf8');
    logger.info(`Summary written to ${summaryPath}`);
  }
}

function findUsageGuideFile(entry) {
  const SDK_CONFIG = require('./sdk-config');
  const sdkFolders = fs.readdirSync(SDK_DOCS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let fallbackMatch = null;

  for (const sdkFolder of sdkFolders) {
    const sdkPath = path.join(SDK_DOCS_DIR, sdkFolder);
    for (const f of fs.readdirSync(sdkPath)) {
      if (!f.endsWith('.md')) continue;
      const filePath = path.join(sdkPath, f);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = parseFrontmatter(content);
        if (data.doc_type !== 'usage_guide') continue;

        // Strong match: this file was already linked to the entry on a prior sync/pull.
        if (data.cms_uid && data.cms_uid === entry.uid) return filePath;

        // Legacy fallback for files never backfilled with cms_uid yet — match by the
        // old derived title. Once matched, buildMarkdownFile() stamps cms_uid on write,
        // so this path is self-eliminating.
        if (!data.cms_uid) {
          const cfg = SDK_CONFIG[sdkFolder];
          if (cfg && `${cfg.framework} ${cfg.api} Introduction` === (entry.title || '')) {
            fallbackMatch = filePath;
          }
        }
      } catch { /* skip */ }
    }
  }
  return fallbackMatch;
}

main().catch(err => {
  logger.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});
