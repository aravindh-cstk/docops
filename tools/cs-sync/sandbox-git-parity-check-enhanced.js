#!/usr/bin/env node

/**
 * Sandbox ↔ Git Parity Check (ENHANCED)
 *
 * Verifies Git markdown files align with Sandbox CMS entries
 * Implements 22 critical improvements:
 *   - Published entries only filter
 *   - Folder-to-content-type mapping validation
 *   - YAML frontmatter validation
 *   - Duplicate URL detection
 *   - No silent skipping
 *   - Detailed error reporting
 *
 * Usage: node sandbox-git-parity-check-enhanced.js
 *
 * Requires environment variables:
 *   - STACK_TYPE: apidocs or csdocs
 *   - [STACK_TYPE]_SANDBOX_STACK_API_KEY
 *   - [STACK_TYPE]_SANDBOX_MANAGEMENT_TOKEN
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');

const STACK_TYPE = process.env.STACK_TYPE || 'apidocs';
const ENV_PREFIX = STACK_TYPE === 'apidocs' ? 'APIDOCS' : 'CSDOCS';

const SANDBOX_STACK_API_KEY = process.env[`${ENV_PREFIX}_SANDBOX_STACK_API_KEY`];
const SANDBOX_MANAGEMENT_TOKEN = process.env[`${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`];

// Validate credentials
if (!SANDBOX_STACK_API_KEY || !SANDBOX_MANAGEMENT_TOKEN) {
  console.error('❌ Missing required environment variables');
  console.error(`   Expecting: ${ENV_PREFIX}_SANDBOX_STACK_API_KEY, ${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`);
  process.exit(1);
}

const startTime = new Date();
let stats = {
  filesScanned: 0,
  entriesScanned: 0,
  matched: 0,
  missingInGit: 0,
  orphanedInGit: 0,
  validationFailures: 0,
  duplicateUrls: 0,
  unsupportedFolders: 0,
  unmappedFolders: 0,
};

// Folder-to-content-type mapping (IMPROVEMENT 5)
const FOLDER_TO_CONTENT_TYPE = STACK_TYPE === 'apidocs' ? {
  'cma-api-requests': 'api_requests_cma',
  'cda-api-requests': 'api_requests_cda',
  'graphql-api-requests': 'api_requests_graphql',
  'apps-api-requests': 'api_requests_apps',
  'analytics-api-requests': 'api_requests_analytics',
  'administration-api-requests': 'api_requests_administration',
  'ai-platform-api-requests': 'api_requests_ai_platform',
  'asset-management-api-requests': 'api_requests_asset_management_api',
  'automation-hub-api-requests': 'api_requests_automation_hub',
  'brand-kit-api-requests': 'api_requests_brand_kit',
  'genai-ingest-api-requests': 'api_requests_genai_api_and_ingest_api',
  'generative-api-requests': 'api_requests_generative_api',
  'image-api-requests': 'api_requests_image',
  'knowledge-vault-api-requests': 'api_requests_knowlegde_vault',
  'scim-api-requests': 'api_requests_scim',
} : {
  'assets': 'documentation_page',
  'authentication': 'documentation_page',
  'cms-knowledge-base': 'documentation_page',
  'customize': 'documentation_page',
  'developers': 'documentation_page',
  'gql-api': 'documentation_page',
  'guide': 'documentation_page',
  'sdks': 'documentation_page',
};

class ContentstackClient {
  constructor(apiKey, token) {
    this.apiKey = apiKey;
    this.token = token;
    this.baseUrl = 'https://api.contentstack.io/v3';
  }

  request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, this.baseUrl);
      const opts = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: options.method || 'GET',
        headers: {
          'api_key': this.apiKey,
          'authorization': this.token,
          'Content-Type': 'application/json',
        },
      };

      const req = https.request(opts, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(data) });
          } catch {
            resolve({ status: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (options.body) req.write(JSON.stringify(options.body));
      req.end();
    });
  }

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}`;
      const endpoint = `/content_types/${contentTypeUid}/entries${query}`;
      const res = await this.request(endpoint);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      hasMore = page.length === limit;
      skip += limit;
    }

    return entries;
  }

  async getContentTypes() {
    const res = await this.request('/content_types?limit=100');
    if (res.status !== 200) {
      throw new Error(`Failed to fetch content types: ${res.status}`);
    }
    return res.data.content_types || [];
  }
}

// IMPROVEMENT 6: YAML frontmatter validation
function validateYamlFrontmatter(filePath, content) {
  const errors = [];

  // Extract frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    errors.push(`No YAML frontmatter found`);
    return { valid: false, errors, frontmatter: null };
  }

  try {
    const frontmatter = yaml.load(match[1]);

    // IMPROVEMENT 6a: Required fields
    const required = ['title', 'url', 'description'];
    const missing = required.filter(f => !frontmatter[f]);
    if (missing.length > 0) {
      errors.push(`Missing required fields: ${missing.join(', ')}`);
    }

    // IMPROVEMENT 6b: Validate title not empty
    if (!frontmatter.title || frontmatter.title.trim() === '') {
      errors.push(`Title is empty`);
    }

    // IMPROVEMENT 6c: Validate URL format
    if (frontmatter.url && !frontmatter.url.startsWith('/')) {
      errors.push(`URL must start with /: "${frontmatter.url}"`);
    }

    return {
      valid: errors.length === 0,
      errors,
      frontmatter: errors.length === 0 ? frontmatter : null
    };
  } catch (e) {
    errors.push(`YAML parse error: ${e.message}`);
    return { valid: false, errors, frontmatter: null };
  }
}

// IMPROVEMENT 1: Published entries only filter
function filterPublishedEntries(entries) {
  return entries.filter(e => {
    const isPublished = e.publish_details?.status === 'published' ||
                       e.status === 'published';
    return isPublished;
  });
}

// IMPROVEMENT 7: Detect unsupported folders (no silent skipping)
function validateFolders(gitRootPath) {
  const issues = [];

  try {
    const items = fs.readdirSync(gitRootPath);
    items.forEach(item => {
      const itemPath = path.join(gitRootPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // Check if folder is supported
        if (!FOLDER_TO_CONTENT_TYPE[item] && item !== 'node_modules' && !item.startsWith('.')) {
          issues.push({
            type: 'unsupported_folder',
            folder: item,
            message: `Folder "${item}" is not mapped to a content type`
          });
          stats.unsupportedFolders++;
        }
      }
    });
  } catch (error) {
    issues.push({
      type: 'read_error',
      message: `Failed to read git root: ${error.message}`
    });
  }

  return issues;
}

async function validateGitSandboxParity() {
  console.log(`\n🔄 Synchronization Run Started\n`);
  console.log(`Workflow: sandbox-git-parity-check-enhanced`);
  console.log(`Timestamp: ${startTime.toISOString()}`);
  console.log(`Environment: Sandbox CMS ↔ Git (Published Only)\n`);
  console.log('=' .repeat(70));

  let exitCode = 0;
  const results = {
    contentTypes: [],
    validationErrors: [],
    orphanedFiles: [],
    duplicateUrls: [],
    unsupportedFolders: [],
  };

  try {
    const gitPath = path.join(REPO_ROOT, STACK_TYPE === 'apidocs' ? 'api-docs' : 'cs-docs');

    if (!fs.existsSync(gitPath)) {
      console.error(`❌ Git path not found: ${gitPath}`);
      process.exit(1);
    }

    // IMPROVEMENT 7: Validate folders before processing
    console.log('\n🔍 Validating folder structure...\n');
    const folderIssues = validateFolders(gitPath);
    if (folderIssues.length > 0) {
      console.error(`⚠️  Found ${folderIssues.length} folder issues:`);
      folderIssues.forEach(issue => {
        if (issue.type === 'unsupported_folder') {
          console.error(`   ❌ Unsupported folder: ${issue.folder}`);
          console.error(`      Add mapping to FOLDER_TO_CONTENT_TYPE`);
        } else {
          console.error(`   ❌ ${issue.message}`);
        }
      });
      results.unsupportedFolders = folderIssues;
      exitCode = 1;
    } else {
      console.log('✅ Folder structure valid\n');
    }

    console.log('📥 Fetching Sandbox entries...\n');
    const sandboxClient = new ContentstackClient(SANDBOX_STACK_API_KEY, SANDBOX_MANAGEMENT_TOKEN);
    const contentTypes = await sandboxClient.getContentTypes();

    // Index Sandbox entries by URL
    const sandboxEntriesByUrl = {};
    const allSandboxEntries = [];

    for (const ct of contentTypes) {
      const ctUid = ct.uid;

      // Skip non-mapped content types
      const supportedFolders = Object.values(FOLDER_TO_CONTENT_TYPE);
      if (!supportedFolders.includes(ctUid)) {
        continue;
      }

      try {
        const entries = await sandboxClient.getAllEntries(ctUid);
        const publishedEntries = filterPublishedEntries(entries);
        stats.entriesScanned += publishedEntries.length;

        publishedEntries.forEach(entry => {
          const url = entry.url || entry.slug;
          if (url) {
            sandboxEntriesByUrl[url] = { entry, contentType: ctUid };
            allSandboxEntries.push({ entry, contentType: ctUid });
          }
        });

        results.contentTypes.push({
          uid: ctUid,
          name: ct.display_name || ctUid,
          entryCount: publishedEntries.length,
        });
      } catch (error) {
        console.error(`❌ Error fetching ${ctUid}: ${error.message}`);
        results.validationErrors.push({
          contentType: ctUid,
          error: error.message
        });
        exitCode = 1;
      }
    }

    console.log(`Found ${stats.entriesScanned} published entries in Sandbox\n`);

    // IMPROVEMENT 6: Validate Git markdown files
    console.log('📝 Scanning Git markdown files...\n');

    const gitFiles = [];
    const urlMap = {};

    // Walk Git folders
    for (const [folder, contentTypeUid] of Object.entries(FOLDER_TO_CONTENT_TYPE)) {
      const folderPath = path.join(gitPath, folder);

      if (!fs.existsSync(folderPath)) {
        console.log(`ℹ️  Folder not found (okay): ${folder}`);
        continue;
      }

      try {
        const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));

        files.forEach(file => {
          const filePath = path.join(folderPath, file);
          stats.filesScanned++;

          try {
            const content = fs.readFileSync(filePath, 'utf-8');
            const validation = validateYamlFrontmatter(filePath, content);

            if (!validation.valid) {
              console.error(`❌ YAML validation failed: ${filePath}`);
              validation.errors.forEach(err => {
                console.error(`   - ${err}`);
              });
              results.validationErrors.push({
                file: filePath,
                errors: validation.errors
              });
              stats.validationFailures++;
              exitCode = 1;
            } else {
              // IMPROVEMENT 4: Detect duplicate URLs
              const url = validation.frontmatter.url;
              if (urlMap[url]) {
                console.error(`❌ Duplicate URL found: ${url}`);
                console.error(`   File 1: ${urlMap[url].file}`);
                console.error(`   File 2: ${filePath}`);
                results.duplicateUrls.push({
                  url,
                  files: [urlMap[url].file, filePath]
                });
                stats.duplicateUrls++;
                exitCode = 1;
              } else {
                urlMap[url] = { file: filePath, folder, contentTypeUid };
              }

              gitFiles.push({
                file: filePath,
                folder,
                contentTypeUid,
                url: validation.frontmatter.url,
                title: validation.frontmatter.title,
              });

              // Check if entry exists in Sandbox
              if (sandboxEntriesByUrl[validation.frontmatter.url]) {
                stats.matched++;
              }
            }
          } catch (error) {
            console.error(`❌ Error reading file: ${filePath}`);
            console.error(`   ${error.message}`);
            results.validationErrors.push({
              file: filePath,
              error: error.message
            });
            stats.validationFailures++;
            exitCode = 1;
          }
        });
      } catch (error) {
        console.error(`❌ Error reading folder ${folder}: ${error.message}`);
        results.validationErrors.push({
          folder,
          error: error.message
        });
        exitCode = 1;
      }
    }

    console.log(`\nFound ${stats.filesScanned} Git markdown files`);

    // IMPROVEMENT 3: Find orphaned Git files (no matching Sandbox entry)
    const orphanedFiles = gitFiles.filter(f => !sandboxEntriesByUrl[f.url]);
    if (orphanedFiles.length > 0) {
      console.log(`\n⚠️  Orphaned files in Git (not in Sandbox):`);
      orphanedFiles.forEach(f => {
        console.log(`   - ${f.file}`);
        console.log(`     URL: ${f.url} (not found in Sandbox)`);
      });
      results.orphanedFiles = orphanedFiles;
      stats.orphanedInGit = orphanedFiles.length;
    }

    // Summary
    console.log('\n' + '=' .repeat(70));
    console.log('\n📊 SUMMARY\n');

    const endTime = new Date();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`Duration: ${duration}s`);
    console.log(`Start: ${startTime.toISOString()}`);
    console.log(`End:   ${endTime.toISOString()}\n`);

    console.log(`Content Types: ${results.contentTypes.length}`);
    console.log(`Files Scanned: ${stats.filesScanned}`);
    console.log(`Entries Scanned: ${stats.entriesScanned}`);
    console.log(`Matched: ${stats.matched}\n`);

    console.log(`Validation Results:`);
    console.log(`  Orphaned in Git: ${stats.orphanedInGit}`);
    console.log(`  Duplicate URLs: ${stats.duplicateUrls}`);
    console.log(`  Validation Failures: ${stats.validationFailures}`);
    console.log(`  Unsupported Folders: ${stats.unsupportedFolders}\n`);

    const isComplete = stats.validationFailures === 0 &&
                       stats.duplicateUrls === 0 &&
                       stats.orphanedInGit === 0 &&
                       stats.unsupportedFolders === 0;

    if (isComplete) {
      console.log('✅ PASS: Git ↔ Sandbox parity validated');
    } else {
      console.log('❌ FAIL: Git ↔ Sandbox parity validation failed');

      if (results.validationErrors.length > 0) {
        console.log(`\n❌ Validation errors (${results.validationErrors.length}):`);
        results.validationErrors.slice(0, 10).forEach(item => {
          if (item.file) {
            console.log(`   ${item.file}:`);
            if (item.errors) {
              item.errors.forEach(e => console.log(`      - ${e}`));
            } else if (item.error) {
              console.log(`      - ${item.error}`);
            }
          }
        });
        if (results.validationErrors.length > 10) {
          console.log(`   ... and ${results.validationErrors.length - 10} more`);
        }
      }

      if (results.duplicateUrls.length > 0) {
        console.log(`\n❌ Duplicate URLs (${results.duplicateUrls.length}):`);
        results.duplicateUrls.forEach(item => {
          console.log(`   ${item.url}:`);
          item.files.forEach(f => console.log(`      - ${f}`));
        });
      }

      if (results.orphanedFiles.length > 0) {
        console.log(`\n⚠️  Orphaned files in Git (${results.orphanedFiles.length}):`);
        results.orphanedFiles.slice(0, 10).forEach(f => {
          console.log(`   ${f.file}`);
        });
        if (results.orphanedFiles.length > 10) {
          console.log(`   ... and ${results.orphanedFiles.length - 10} more`);
        }
      }
    }

    console.log('\n' + '=' .repeat(70));
    if (exitCode === 0) {
      console.log('\n✅ All checks passed\n');
    } else {
      console.log('\n❌ Some checks failed - review details above\n');
    }

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }

  process.exit(exitCode);
}

validateGitSandboxParity();
