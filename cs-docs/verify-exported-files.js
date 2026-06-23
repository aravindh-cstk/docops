'use strict';

const fs = require('fs');
const path = require('path');

const CS_DOCS_ROOT = path.join(__dirname, 'cs-docs');
const MAX_CONCURRENT = 5; // Limit concurrent requests to avoid overwhelming the server
const DOCSITE_BASE = 'https://www.contentstack.com';

// Extract URL from frontmatter
function extractUrl(content) {
  const m = content.match(/^url:\s*(.+)$/m);
  if (!m) return null;
  let u = m[1].trim();
  if (!u.startsWith('http')) {
    u = DOCSITE_BASE + (u.startsWith('/') ? u : '/' + u);
  }
  return u;
}

// Check if URL exists on docsite
async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return response.status < 400; // 200-399 = exists, 404+ = not found
  } catch (err) {
    return false;
  }
}

// Walk directory and collect all .md files with their URLs
function collectFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, results);
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      const url = extractUrl(content);
      if (url) {
        results.push({ file: path.relative(CS_DOCS_ROOT, full), url });
      }
    }
  }
  return results;
}

// Process files with concurrency limit
async function checkFiles(files) {
  const notFound = [];
  let checked = 0;

  for (let i = 0; i < files.length; i += MAX_CONCURRENT) {
    const batch = files.slice(i, i + MAX_CONCURRENT);
    const results = await Promise.all(batch.map(f => checkUrl(f.url)));

    for (let j = 0; j < batch.length; j++) {
      checked++;
      if (!results[j]) {
        notFound.push(batch[j]);
      }
      if (checked % 50 === 0) {
        process.stdout.write(`\rChecked ${checked}/${files.length}...`);
      }
    }
  }

  console.log(`\n`);
  return notFound;
}

async function main() {
  console.log('Collecting exported files...');
  const files = collectFiles(CS_DOCS_ROOT);
  console.log(`Found ${files.length} files with URLs\n`);

  console.log('Verifying files exist on docsite (this may take a few minutes)...');
  const notFound = await checkFiles(files);

  console.log(`\n=== Results ===`);
  console.log(`Total files:      ${files.length}`);
  console.log(`Found on docsite: ${files.length - notFound.length}`);
  console.log(`NOT on docsite:   ${notFound.length}`);

  if (notFound.length > 0) {
    console.log(`\n=== Files exported but NOT on docsite ===\n`);
    notFound.slice(0, 50).forEach(f => {
      console.log(`${f.file}`);
      console.log(`  URL: ${f.url}`);
    });
    if (notFound.length > 50) {
      console.log(`\n... and ${notFound.length - 50} more`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
