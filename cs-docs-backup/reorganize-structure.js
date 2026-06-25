'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const CS_DOCS_ROOT = path.join(ROOT, 'cs-docs', 'cs-docs');
const NEW_CS_DOCS = path.join(ROOT, 'cs-docs-reorganized');
const API_DOCS = path.join(ROOT, 'api-docs');

// Track all changes for cross-reference updates
const changes = {
  movedFolders: [],   // {from, to}
  renamedFiles: [],   // {from, to}
  deletedFiles: [],   // file path
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dst) {
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
}

function moveDir(src, dst) {
  if (!fs.existsSync(src)) return;
  ensureDir(path.dirname(dst));
  fs.renameSync(src, dst);
  changes.movedFolders.push({ from: src, to: dst });
}

// Task 1: Move scripts to backend folder
console.log('\n1. Moving scripts to backend folder...');
const backendDir = path.join(ROOT, 'backend');
const scripts = [
  'export-api-docs.js',
  'export-contentstack.js',
  'export-docs-sections.js',
  'rewrite-links.js',
  'lint-api-docs.js',
  'clean-frontmatter.js',
  'generate-lint-csv.js',
];

ensureDir(backendDir);
for (const script of scripts) {
  const src = path.join(ROOT, script);
  const dst = path.join(backendDir, script);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dst);
    console.log(`  Moved: ${script}`);
  }
}

// Task 2: Flatten cs-docs/cs-docs structure
console.log('\n2. Flattening cs-docs structure...');
const flattenedCS = path.join(ROOT, 'cs-docs-flat');
ensureDir(flattenedCS);

if (fs.existsSync(CS_DOCS_ROOT)) {
  for (const item of fs.readdirSync(CS_DOCS_ROOT)) {
    const src = path.join(CS_DOCS_ROOT, item);
    const dst = path.join(flattenedCS, item);
    if (fs.statSync(src).isDirectory()) {
      // Copy directory
      function copyDirRecursive(s, d) {
        ensureDir(d);
        for (const f of fs.readdirSync(s)) {
          const fSrc = path.join(s, f);
          const fDst = path.join(d, f);
          if (fs.statSync(fSrc).isDirectory()) {
            copyDirRecursive(fSrc, fDst);
          } else {
            fs.copyFileSync(fSrc, fDst);
          }
        }
      }
      copyDirRecursive(src, dst);
      console.log(`  Copied folder: ${item}`);
    } else {
      fs.copyFileSync(src, dst);
    }
  }
}

// Task 3: Organize orphan API files
console.log('\n3. Organizing orphan API docs files...');
const orphanMap = {
  'administration-': 'administration',
  'asset-management-': 'asset-management',
  'postman-': 'postman',
};

const apiRoot = path.join(ROOT, 'api-docs-reorganized');
ensureDir(apiRoot);

// Copy api-docs structure first
function copyDirRecursive(s, d) {
  if (!fs.existsSync(s)) return;
  ensureDir(d);
  for (const f of fs.readdirSync(s)) {
    if (f === '.DS_Store') continue;
    const fSrc = path.join(s, f);
    const fDst = path.join(d, f);
    if (fs.statSync(fSrc).isDirectory()) {
      copyDirRecursive(fSrc, fDst);
    } else {
      fs.copyFileSync(fSrc, fDst);
    }
  }
}

copyDirRecursive(API_DOCS, apiRoot);

// Organize orphan files
for (const file of fs.readdirSync(apiRoot)) {
  if (!file.endsWith('.md')) continue;

  let destFolder = null;
  for (const [prefix, folder] of Object.entries(orphanMap)) {
    if (file.startsWith(prefix)) {
      destFolder = folder;
      break;
    }
  }

  if (destFolder) {
    const srcFile = path.join(apiRoot, file);
    const destDir = path.join(apiRoot, destFolder);
    ensureDir(destDir);

    // Rename file: remove prefix
    const newName = file.replace(/^[a-z-]+-/, '');
    const destFile = path.join(destDir, newName);

    fs.renameSync(srcFile, destFile);
    console.log(`  Moved: ${file} → ${destFolder}/${newName}`);
    changes.renamedFiles.push({ from: file, to: `${destFolder}/${newName}` });
  }
}

// Task 4: Rename requests folders to {api-name}-requests
console.log('\n4. Renaming requests folders...');
const apisDir = path.join(apiRoot, 'developers', 'apis');
if (fs.existsSync(apisDir)) {
  for (const api of fs.readdirSync(apisDir)) {
    const apiPath = path.join(apisDir, api);
    if (!fs.statSync(apiPath).isDirectory()) continue;

    const requestsPath = path.join(apiPath, 'requests');
    if (fs.existsSync(requestsPath)) {
      const newName = `${api}-requests`;
      const newPath = path.join(apiPath, newName);
      fs.renameSync(requestsPath, newPath);
      console.log(`  Renamed: ${api}/requests → ${api}/${newName}`);
      changes.movedFolders.push({ from: `${api}/requests`, to: `${api}/${newName}` });
    }
  }
}

// Task 5: Remove explorer.md files (second-level navigation)
console.log('\n5. Removing second-level navigation files (explorer.md)...');
function removeExplorerFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      removeExplorerFiles(itemPath);
    } else if (item === 'explorer.md') {
      fs.unlinkSync(itemPath);
      console.log(`  Deleted: ${path.relative(apiRoot, itemPath)}`);
      changes.deletedFiles.push(itemPath);
    }
  }
}

removeExplorerFiles(apiRoot);

console.log('\n✅ Reorganization complete!');
console.log('\nChanges summary:');
console.log(`  Folders moved: ${changes.movedFolders.length}`);
console.log(`  Files renamed: ${changes.renamedFiles.length}`);
console.log(`  Files deleted: ${changes.deletedFiles.length}`);

// Output changes for link rewriting
console.log('\n📝 Changes for link updates:');
console.log(JSON.stringify(changes, null, 2));

// Write changes to file for reference
fs.writeFileSync(path.join(ROOT, 'reorganization-changes.json'), JSON.stringify(changes, null, 2));
console.log('\nChanges saved to: reorganization-changes.json');
