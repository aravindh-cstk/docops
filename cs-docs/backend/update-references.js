'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Map of old paths to new paths
const pathMappings = [
  // Requests folder renames
  { old: /\/requests\//g, api: true, replacement: (match, apiName) => `/${apiName}-requests/` },

  // Orphan file moves in api-docs
  { old: /administration-organizations\.md/g, new: 'administration/organizations.md' },
  { old: /administration-teams\.md/g, new: 'administration/teams.md' },
  { old: /administration-user-session\.md/g, new: 'administration/session.md' },
  { old: /administration-users\.md/g, new: 'administration/users.md' },
  { old: /asset-management-organizations\.md/g, new: 'asset-management/organizations.md' },
  { old: /asset-management-roles\.md/g, new: 'asset-management/roles.md' },
  { old: /asset-management-spaces\.md/g, new: 'asset-management/spaces.md' },
  { old: /asset-management-users\.md/g, new: 'asset-management/users.md' },
  { old: /postman-collections\.md/g, new: 'postman/collections.md' },
];

// Nested cs-docs removal: cs-docs/cs-docs/* → cs-docs/*
const csDocsPatterns = [
  { old: /cs-docs\/cs-docs\//g, new: 'cs-docs/' },
  { old: /\/cs-docs\/cs-docs\//g, new: '/cs-docs/' },
];

let filesModified = 0;
let linksUpdated = 0;

function processFile(filePath) {
  if (!filePath.endsWith('.md')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Update cs-docs nesting
  for (const { old, new: newPath } of csDocsPatterns) {
    if (old.test(content)) {
      content = content.replace(old, newPath);
      linksUpdated += (content.match(old) || []).length;
    }
  }

  // Update orphan file paths
  const orphanMappings = [
    { old: /administration-organizations\.md/g, new: 'administration/organizations.md' },
    { old: /administration-teams\.md/g, new: 'administration/teams.md' },
    { old: /administration-user-session\.md/g, new: 'administration/session.md' },
    { old: /administration-users\.md/g, new: 'administration/users.md' },
    { old: /asset-management-organizations\.md/g, new: 'asset-management/organizations.md' },
    { old: /asset-management-roles\.md/g, new: 'asset-management/roles.md' },
    { old: /asset-management-spaces\.md/g, new: 'asset-management/spaces.md' },
    { old: /asset-management-users\.md/g, new: 'asset-management/users.md' },
    { old: /postman-collections\.md/g, new: 'postman/collections.md' },
  ];

  for (const { old, new: newPath } of orphanMappings) {
    if (old.test(content)) {
      const matches = content.match(old);
      if (matches) linksUpdated += matches.length;
      content = content.replace(old, newPath);
    }
  }

  // Update requests folder renames (api-docs/developers/apis/{api-name}/requests → {api-name}-requests)
  // Pattern: (developers/apis/analytics-api)/requests/ → (developers/apis/analytics-api)/analytics-api-requests/
  content = content.replace(/\/developers\/apis\/([a-z-]+)\/requests\//g, (match, apiName) => {
    linksUpdated++;
    return `/developers/apis/${apiName}/${apiName}-requests/`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    return true;
  }
  return false;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith('.md')) {
      processFile(full);
    }
  }
}

console.log('Updating cross-references...\n');

walkDir(path.join(ROOT, 'api-docs'));
walkDir(path.join(ROOT, 'administration'));
walkDir(path.join(ROOT, 'agent-os'));
walkDir(path.join(ROOT, 'analytics'));
walkDir(path.join(ROOT, 'assets'));
walkDir(path.join(ROOT, 'content-managers'));
walkDir(path.join(ROOT, 'data-and-insights'));
walkDir(path.join(ROOT, 'developers'));
walkDir(path.join(ROOT, 'headless-cms'));
walkDir(path.join(ROOT, 'launch'));
walkDir(path.join(ROOT, 'marketplace'));
walkDir(path.join(ROOT, 'personalize'));

console.log('Done.');
console.log(`  Files modified : ${filesModified}`);
console.log(`  Links updated  : ${linksUpdated}`);
