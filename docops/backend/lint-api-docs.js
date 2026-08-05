'use strict';

/**
 * Lint script for cs-docs/api-docs/ files.
 * Validates frontmatter and applies the style rules from LINTING.md.
 */

const fs = require('fs');
const path = require('path');

const API_DOCS_ROOT = path.resolve(__dirname, 'api-docs');

// ---------------------------------------------------------------------------
// Config (mirrors tools/cs-sync/src/style-lint.config.json and restricted/)
// ---------------------------------------------------------------------------

const BANNED_PHRASES = [
  'effortlessly streamline','effortlessly','robust platform','powerful capabilities',
  'next-level','seamlessly','out of the box','move the needle','boil the ocean',
  'cutting-edge','cutting edge','best-in-class','best in class','industry-leading',
  'industry leading','world-class','world class','leverage','utilize','synergy',
  'synergize','holistic approach','thought leader','innovative solution','double down',
  'at the end of the day','it goes without saying','needless to say','in order to',
  'empower your team','unlock the potential','delve into','dive deep','dive into',
  'transformative','revolutionize','disruptive','paradigm shift','deep dive',
  'game changer','game-changer',
];

const VAGUE_ADVERBS = [
  'quickly','easily','simply','very','soon','really','basically','actually','quite',
  'somewhat','fairly','rather','pretty','nearly','almost','generally','usually','often',
  'sometimes','occasionally','apparently','obviously','certainly','definitely',
  'absolutely','totally','completely','extremely','incredibly','surprisingly',
  'unfortunately','hopefully','essentially','virtually','smoothly','effortlessly',
  'straightforwardly','readily','rapidly','swiftly','instantly','conveniently',
  'intuitively','natively','robustly','powerfully','significantly','dramatically',
  'massively','hugely','greatly',
];

const FUTURE_TENSE = [
  'will be','will have','will need to','will allow you','will allow','will enable',
  'will display','will show','will appear','will open','will create','will update',
  'will delete','will redirect','will return','will trigger','will send','will load',
  'will generate','will receive','will prompt','will navigate','will take you',
  'will bring','will launch','will start','will stop','will run','will execute',
  'will fetch','will call','will connect','will disconnect','will sync','will push',
  'will pull','shall be','shall have','is going to','are going to','going to be',
  'will be able to','will no longer','will also','will ',
];

const ALLOWED_ACRONYMS = new Set([
  'API','APIs','CMS','CMSs','JSON','HTML','CSS','JS','URL','URLs','HTTP','HTTPS',
  'SDK','SDKs','CLI','REST','GraphQL','CI','CD','PR','PRs','UI','UX','SEO','IoT',
  'JWT','OAuth','CTA','CTAs','RTE','FAQ','FAQs','PDF','PDFs','PNG','GIF','SVG',
  'CSV','XML','YAML','SQL','MDX','SSO','SAML','MFA','TOTP','AWS','GCP','CDN',
  'SLA','SLO','SLI','UUID','GUID','CORS','CSP','XSS','CSRF','ACL','RBAC','SSR',
  'CSR','SPA','PWA','DOM','AST','IDE','EOF','EOL','TTL','LTS','OS','VM','VPC',
  'IAM','ARN','S3','EC2','RDS','TS','TSX','JSX','ESM','CJS','ESLint','TSC',
  'NPM','PNPM','CI/CD','DevOps','SaaS','PaaS','IaaS','B2B','B2C','DXP','WCM',
  'DAM','PIM','GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS','NA','EU','AU',
  'GCP','NA','ID','OK','CDA','CMA','SCIM','OAuth','OpenAPI','WebSocket','WebSockets',
  'GenAI','AI','LLM','LLMs','OCR','NLP','RAG','ML','GQL','RQL','SQL','UUID','UID',
  'URI','URIs','ARN','ARNs','TTL','CORS','SHA','SHA256','MD5','RSA','AES',
  'JPEG','WEBP','BMP','TIFF','GIF','PDF','ZIP','CSV','TSV','OGG','MP4','MP3',
  'WAV','SVG','WOFF','WOFF2','EOT','OTF','TTF','NAN','NaN','IE','iOS','macOS',
  'WCM','DXP','CDP','CRM','ERP','GRC','BPM','RPA','CX','UX',
  'SCIM','SAML','SSO','MFA','TOTP','OTP','KV','CDN','DNS','TLS','SSL','SMTP',
  'IMAP','POP','FTP','SFTP','SSH','VPN','LAN','WAN','ISP','QR','2FA',
  'SDKs','APIs','CLIs','CRMs','ERPs','CMSs',
]);

const GENERIC_LINK_TEXT = ['click here','learn more','read this','read more','here'];

const REQUIRED_FRONTMATTER = ['title','description','url','product','doc_type','audience','version','last_updated'];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return { fm: null, body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { fm: null, body: content };
  const yamlBlock = content.slice(4, end);
  const body = content.slice(end + 4).trimStart();
  const fm = {};
  let currentKey = null;
  for (const line of yamlBlock.split('\n')) {
    // List item under a key (e.g., "  - developers")
    if (/^\s+-\s/.test(line) && currentKey) {
      const item = line.replace(/^\s+-\s*/, '').trim();
      if (!fm[currentKey]) fm[currentKey] = [];
      if (Array.isArray(fm[currentKey])) fm[currentKey].push(item);
      continue;
    }
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    if (key && !key.startsWith('#')) {
      fm[key] = value || null;
      currentKey = key;
    }
  }
  return { fm, body };
}

function stripMarkdown(text) {
  // Line-by-line fence parsing:
  //   ```lang  → always an OPENING (never a closing)
  //   ```       → OPENING if currently outside a fence, CLOSING if inside
  const lines = text.split('\n');
  const kept = [];
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) {
      const hasLang = /^```\S/.test(line); // ```json, ```bash etc.
      if (!inFence) {
        inFence = true; // open
      } else if (!hasLang) {
        inFence = false; // close (bare ``` only)
      }
      // ```lang while already inFence: unclosed previous fence — treat as new opening (still inFence)
      continue;
    }
    if (inFence) continue;
    kept.push(line);
  }
  return kept.join('\n')
    .replace(/`[^`]*`/g, '')
    .replace(/^\s*#+\s.*$/gm, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_~]{1,3}([^*_~]+)[*_~]{1,3}/g, '$1')
    .replace(/^\s*[-*+]\s/gm, '')
    .replace(/^\s*\d+\.\s/gm, '')
    .replace(/^\|.*\|$/gm, '');
}

function linesOf(text) {
  return text.split('\n');
}

// ---------------------------------------------------------------------------
// Lint a single file
// ---------------------------------------------------------------------------

function lintFile(filePath) {
  const errors = [];
  const rel = path.relative(API_DOCS_ROOT, filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { fm, body } = parseFrontmatter(raw);

  // --- Frontmatter checks ---
  if (!fm) {
    errors.push(`${rel}: Missing frontmatter block`);
    return errors;
  }

  for (const field of REQUIRED_FRONTMATTER) {
    const val = fm[field];
    const empty = val === null || val === undefined || (typeof val === 'string' && val.trim() === '') || (Array.isArray(val) && val.length === 0);
    if (empty) {
      errors.push(`${rel}: Missing required frontmatter field '${field}'`);
    }
  }

  if (fm.url) {
    const urlVal = String(fm.url);
    if (!urlVal.startsWith('http') && !urlVal.startsWith('/')) {
      errors.push(`${rel}: frontmatter 'url' "${urlVal}" should start with https:// or /`);
    }
    if (urlVal.endsWith('/')) {
      errors.push(`${rel}: frontmatter 'url' must not end with a trailing slash`);
    }
  }

  if (!body || body.trim() === '') {
    errors.push(`${rel}: File has no body content`);
    return errors;
  }

  // Only run style checks on the body (strip code blocks and inline code)
  const prose = stripMarkdown(body);
  const lines = linesOf(prose);

  // --- Punctuation ---
  lines.forEach((line, i) => {
    const ln = i + 1;
    if (/—/.test(line))  errors.push(`${rel}:${ln}: Em dash (—) not permitted — use a comma or rewrite`);
    if (/–/.test(line))  errors.push(`${rel}:${ln}: En dash (–) not permitted — use a hyphen for ranges`);
    if (/;/.test(line))  errors.push(`${rel}:${ln}: Semicolon (;) not permitted — split into two sentences`);
    // Double space — exclude trailing two-space markdown soft-break (  at line end)
    if (/  /.test(line) && !/  $/.test(line)) errors.push(`${rel}:${ln}: Double space found`);
    if (/\bi\.e\.[^,]/.test(line)) errors.push(`${rel}:${ln}: "i.e." must be followed by a comma — use "i.e.,"`);
    if (/\be\.g\.[^,]/.test(line)) errors.push(`${rel}:${ln}: "e.g." must be followed by a comma — use "e.g.,"`);
  });

  // --- Style checks on full prose ---
  const lowerProse = prose.toLowerCase();

  BANNED_PHRASES.forEach(phrase => {
    const idx = lowerProse.indexOf(phrase.toLowerCase());
    if (idx !== -1) {
      const lineNum = prose.slice(0, idx).split('\n').length;
      errors.push(`${rel}:${lineNum}: Banned phrase "${phrase}" — remove or rewrite`);
    }
  });

  VAGUE_ADVERBS.forEach(adverb => {
    const re = new RegExp(`\\b${adverb}\\b`, 'i');
    const match = re.exec(prose);
    if (match) {
      const lineNum = prose.slice(0, match.index).split('\n').length;
      errors.push(`${rel}:${lineNum}: Vague adverb "${adverb}" — replace with specific language`);
    }
  });

  FUTURE_TENSE.forEach(phrase => {
    const idx = lowerProse.indexOf(phrase.toLowerCase());
    if (idx !== -1) {
      const lineNum = prose.slice(0, idx).split('\n').length;
      errors.push(`${rel}:${lineNum}: Future tense "${phrase.trim()}" — rewrite in present tense`);
    }
  });

  // --- Voice/tone ---
  linesOf(prose).forEach((line, i) => {
    const ln = i + 1;
    if (/\bplease\b/i.test(line)) errors.push(`${rel}:${ln}: "please" in instructions — remove it`);
    if (/\b(his|her|he|she)\b/.test(line) && !/ContentStack|Contentstack|he said|she said/.test(line)) {
      errors.push(`${rel}:${ln}: Gendered pronoun — use "they/their/them"`);
    }
    if (/on the (left|right) navigation panel/i.test(line)) {
      errors.push(`${rel}:${ln}: Use "in the navigation panel" not "on the"`);
    }
  });

  // --- ALL CAPS (excluding known acronyms and code) ---
  const allCapsRe = /\b([A-Z]{2,})\b/g;
  let allCapsMatch;
  const bodyLines = linesOf(body);
  bodyLines.forEach((line, i) => {
    if (line.startsWith('```') || line.startsWith('|') || line.startsWith('    ')) return;
    const ln = i + 1;
    const clean = line.replace(/`[^`]+`/g, '');
    allCapsRe.lastIndex = 0;
    while ((allCapsMatch = allCapsRe.exec(clean)) !== null) {
      const word = allCapsMatch[1];
      if (!ALLOWED_ACRONYMS.has(word) && word.length >= 3) {
        errors.push(`${rel}:${ln}: ALL CAPS word "${word}" — use bold or a known acronym`);
      }
    }
  });

  // --- Heading case ---
  bodyLines.forEach((line, i) => {
    const ln = i + 1;
    const h1h2 = line.match(/^#{1,2} (.+)$/);
    if (h1h2) {
      const heading = h1h2[1];
      // Check for obviously lowercase first word (after #)
      if (/^[a-z]/.test(heading)) {
        errors.push(`${rel}:${ln}: H1/H2 heading should start with a capital letter: "${heading}"`);
      }
      // Check vague heading openers
      if (/^(Understanding|Guide to|Overview of|Introduction to) /i.test(heading)) {
        errors.push(`${rel}:${ln}: Heading starts with vague opener — rewrite: "${heading}"`);
      }
      // Heading length
      if (heading.length > 60) {
        errors.push(`${rel}:${ln}: Heading exceeds 60 characters (${heading.length}): "${heading.slice(0,60)}..."`);
      }
    }
    const h3plus = line.match(/^#{3,} (.+)$/);
    if (h3plus) {
      const heading = h3plus[1];
      if (heading.length > 60) {
        errors.push(`${rel}:${ln}: Heading exceeds 60 characters (${heading.length}): "${heading.slice(0,60)}..."`);
      }
    }
  });

  // --- Links ---
  const linkRe = /\[([^\]]*)\]\(([^)]+)\)/g;
  let linkMatch;
  bodyLines.forEach((line, i) => {
    const ln = i + 1;
    linkRe.lastIndex = 0;
    while ((linkMatch = linkRe.exec(line)) !== null) {
      const text = linkMatch[1].toLowerCase().trim();
      const href = linkMatch[2];
      if (GENERIC_LINK_TEXT.includes(text)) {
        errors.push(`${rel}:${ln}: Generic link text "${linkMatch[1]}" — use descriptive text`);
      }
      // Naked URL in link text
      if (/^https?:\/\//.test(text)) {
        errors.push(`${rel}:${ln}: Link text is a raw URL — use descriptive text`);
      }
      // Local .md link that doesn't exist
      if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/docs') && href.endsWith('.md')) {
        const target = path.resolve(path.dirname(filePath), href.split('#')[0]);
        if (!fs.existsSync(target)) {
          errors.push(`${rel}:${ln}: Broken local link "${href}"`);
        }
      }
    }
  });

  // Naked URLs in prose (not inside markdown link syntax)
  linesOf(body).forEach((line, i) => {
    const ln = i + 1;
    if (line.startsWith('```') || line.startsWith('|') || line.startsWith('    ')) return;
    // Strip already-linked URLs to avoid double-reporting
    const stripped = line.replace(/\[[^\]]*\]\([^)]+\)/g, '');
    if (/https?:\/\/[^\s)>]+/.test(stripped)) {
      errors.push(`${rel}:${ln}: Naked URL in prose — wrap it in a markdown link with descriptive text`);
    }
  });

  return errors;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function collectMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...collectMdFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

const files = collectMdFiles(API_DOCS_ROOT);
console.log(`Linting ${files.length} files in api-docs/...\n`);

const errorsByType = {};
let totalErrors = 0;
let filesWithErrors = 0;

for (const file of files) {
  const errors = lintFile(file);
  if (errors.length > 0) {
    filesWithErrors++;
    totalErrors += errors.length;
    for (const e of errors) {
      // Categorize by error type
      const type = e.replace(/^[^:]+:\d*:?\s*/, '').replace(/["'].*/,'').trim().slice(0, 60);
      errorsByType[type] = (errorsByType[type] || 0) + 1;
    }
  }
}

console.log('=== Summary by error type ===');
const sorted = Object.entries(errorsByType).sort((a, b) => b[1] - a[1]);
for (const [type, count] of sorted) {
  console.log(`  ${count.toString().padStart(5)}  ${type}`);
}

console.log(`\nTotal: ${totalErrors} errors across ${filesWithErrors} of ${files.length} files`);

// Also write detailed errors to a file for review
const detailPath = path.join(__dirname, 'lint-api-docs-report.txt');
const allErrors = [];
for (const file of files) {
  const errors = lintFile(file);
  allErrors.push(...errors);
}
fs.writeFileSync(detailPath, allErrors.join('\n') + '\n', 'utf8');
console.log(`\nFull report written to: lint-api-docs-report.txt`);
console.log(`\nTo view specific error types:`);
console.log(`  grep "future tense" cs-docs/lint-api-docs-report.txt | head -20`);
console.log(`  grep "Naked URL" cs-docs/lint-api-docs-report.txt | wc -l`);
