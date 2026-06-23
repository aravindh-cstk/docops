'use strict';

const fs = require('fs');
const path = require('path');

const CS_DOCS_ROOT = path.join(__dirname, 'cs-docs');
const MAX_CONCURRENT = 5;
const DOCSITE_BASE = 'https://www.contentstack.com';

function extractUrl(content) {
  const m = content.match(/^url:\s*(.+)$/m);
  if (!m) return null;
  let u = m[1].trim();
  if (!u.startsWith('http')) {
    u = DOCSITE_BASE + (u.startsWith('/') ? u : '/' + u);
  }
  return u;
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return response.status < 400;
  } catch (err) {
    return false;
  }
}

function collectFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, results);
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      const url = extractUrl(content);
      if (url) {
        results.push({ file: full, relPath: path.relative(CS_DOCS_ROOT, full), url });
      }
    }
  }
  return results;
}

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
  console.log('Collecting files...');
  const files = collectFiles(CS_DOCS_ROOT);
  console.log(`Found ${files.length} files\n`);

  console.log('Checking which files exist on docsite...');
  const notFound = await checkFiles(files);

  console.log(`Found ${notFound.length} files that don't exist on docsite`);
  console.log('\nDeleting orphaned files...');

  let deleted = 0;
  for (const f of notFound) {
    try {
      fs.unlinkSync(f.file);
      deleted++;
      if (deleted % 10 === 0) {
        console.log(`  Deleted ${deleted}/${notFound.length}...`);
      }
    } catch (err) {
      console.error(`Failed to delete ${f.relPath}:`, err.message);
    }
  }

  console.log(`\n✅ Deleted ${deleted} orphaned files`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
