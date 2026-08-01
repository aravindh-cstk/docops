#!/usr/bin/env node

/**
 * Sandbox ↔ Git Parity Check
 *
 * Verifies that Sandbox CMS entries match Git markdown files
 * Maps Git folders to Sandbox content types and compares counts
 *
 * SAFE MODE: Read-only comparison
 * No modifications to Sandbox or Git
 *
 * Usage: node sandbox-git-parity-check.js
 *
 * Requires environment variables:
 *   - APIDOCS_SANDBOX_STACK_API_KEY (or CSDOCS_SANDBOX_STACK_API_KEY)
 *   - APIDOCS_SANDBOX_MANAGEMENT_TOKEN (or CSDOCS_SANDBOX_MANAGEMENT_TOKEN)
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');

const STACK_TYPE = process.env.STACK_TYPE || 'apidocs'; // apidocs or csdocs
const ENV_PREFIX = STACK_TYPE === 'apidocs' ? 'APIDOCS' : 'CSDOCS';
const DIR_PREFIX = STACK_TYPE === 'apidocs' ? 'api-docs' : 'cs-docs';
const GIT_FOLDER = path.join(REPO_ROOT, DIR_PREFIX);

// Environment variables
const SANDBOX_STACK_API_KEY = process.env[`${ENV_PREFIX}_SANDBOX_STACK_API_KEY`];
const SANDBOX_MANAGEMENT_TOKEN = process.env[`${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`];

// Validate credentials
if (!SANDBOX_STACK_API_KEY || !SANDBOX_MANAGEMENT_TOKEN) {
  console.error('❌ Missing required environment variables');
  console.error(`   Expecting: ${ENV_PREFIX}_SANDBOX_STACK_API_KEY, ${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`);
  process.exit(1);
}

// Folder to Content Type Mapping
const FOLDER_TO_CONTENT_TYPE = {
  // api-docs
  'content-management-api-requests': 'api_requests_cma',
  'content-delivery-api-requests': 'api_requests_cda',

  // cs-docs (adjust as needed based on your structure)
  'studio': 'docs_article',
  'personalize': 'docs_article',
  'overview': 'docs_article',
  'developers': 'docs_article',
  'get-started': 'docs_article',
  // Add more as discovered
};

class ContentstackClient {
  constructor(apiKey, token, region = 'us') {
    this.apiKey = apiKey;
    this.token = token;

    const regionMap = {
      us: 'https://api.contentstack.io/v3',
      eu: 'https://eu-api.contentstack.com/v3',
    };
    this.baseUrl = regionMap[region] || regionMap.us;
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

  async getEntryCount(contentTypeUid) {
    const res = await this.request(`/content_types/${contentTypeUid}/entries?limit=1`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch entries: ${res.status} - ${JSON.stringify(res.data)}`);
    }
    return res.data.entries ? res.data.entries.length : 0;
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

function countMarkdownFilesInFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return 0;
  }

  const files = fs.readdirSync(folderPath);
  return files.filter(f => f.endsWith('.md')).length;
}

async function checkParityAndReport() {
  console.log(`\n🔍 Sandbox ↔ Git Parity Check (${STACK_TYPE.toUpperCase()}) - Read-Only Comparison\n`);
  console.log('=' .repeat(80));

  let exitCode = 0;
  const results = {
    mappings: [],
    totalSandboxEntries: 0,
    totalGitFiles: 0,
    mismatches: [],
    unmappedFolders: [],
    issues: [],
  };

  try {
    console.log('\n📥 Analyzing Git folders and Sandbox content types...\n');

    // Get Sandbox client
    const sandboxClient = new ContentstackClient(SANDBOX_STACK_API_KEY, SANDBOX_MANAGEMENT_TOKEN);

    // Get all content types
    const contentTypes = await sandboxClient.getContentTypes();
    const contentTypeMap = new Map(contentTypes.map(ct => [ct.uid, ct]));

    // Get git folders
    if (!fs.existsSync(GIT_FOLDER)) {
      console.error(`❌ Git folder not found: ${GIT_FOLDER}`);
      process.exit(1);
    }

    const gitFolders = fs.readdirSync(GIT_FOLDER).filter(f => {
      const fullPath = path.join(GIT_FOLDER, f);
      return fs.statSync(fullPath).isDirectory();
    });

    console.log(`📁 Git Folders: ${gitFolders.length}`);
    console.log(`📊 Sandbox Content Types: ${contentTypes.length}\n`);

    // Compare each Git folder
    for (const folder of gitFolders) {
      const contentTypeUid = FOLDER_TO_CONTENT_TYPE[folder];

      if (!contentTypeUid) {
        results.unmappedFolders.push(folder);
        console.log(`⚠️  ${folder}: NOT MAPPED to content type`);
        continue;
      }

      if (!contentTypeMap.has(contentTypeUid)) {
        console.log(`⚠️  ${folder}: Content type '${contentTypeUid}' not found in sandbox`);
        results.issues.push({ folder, issue: `Content type '${contentTypeUid}' not found` });
        continue;
      }

      console.log(`📊 ${folder}`);
      console.log(`   Content Type: ${contentTypeUid}`);

      try {
        const folderPath = path.join(GIT_FOLDER, folder);
        const gitFileCount = countMarkdownFilesInFolder(folderPath);
        console.log(`   Git Files: ${gitFileCount} markdown files`);

        const sandboxEntries = await sandboxClient.getAllEntries(contentTypeUid);
        const sandboxCount = sandboxEntries.length;
        console.log(`   Sandbox: ${sandboxCount} entries`);

        results.totalGitFiles += gitFileCount;
        results.totalSandboxEntries += sandboxCount;

        // Check for mismatch
        if (gitFileCount !== sandboxCount) {
          const diff = sandboxCount - gitFileCount;
          console.log(`   ⚠️  MISMATCH: Difference of ${Math.abs(diff)} (${diff > 0 ? 'more in Sandbox' : 'more in Git'})`);
          results.mismatches.push({
            folder,
            contentType: contentTypeUid,
            gitCount: gitFileCount,
            sandboxCount,
            difference: diff,
          });
          exitCode = 1;
        } else {
          console.log(`   ✅ MATCH: Git and Sandbox are in sync`);
        }

        results.mappings.push({
          folder,
          contentType: contentTypeUid,
          gitCount: gitFileCount,
          sandboxCount,
          match: gitFileCount === sandboxCount,
        });

        console.log('');
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
        results.issues.push({ folder, issue: error.message });
        exitCode = 1;
      }
    }

    // Summary
    console.log('=' .repeat(80));
    console.log('\n📋 SUMMARY\n');
    console.log(`Git Total:     ${results.totalGitFiles} markdown files`);
    console.log(`Sandbox Total: ${results.totalSandboxEntries} entries`);

    const isParityOk = results.totalGitFiles === results.totalSandboxEntries &&
                       results.mismatches.length === 0;

    if (isParityOk && results.unmappedFolders.length === 0) {
      console.log('\n✅ PASS: Git and Sandbox are in perfect parity');
    } else {
      console.log('\n❌ FAIL: Git and Sandbox have mismatches');

      if (results.mismatches.length > 0) {
        console.log(`\n⚠️  Content Type Mismatches (${results.mismatches.length}):`);
        results.mismatches.forEach(m => {
          console.log(`   ${m.folder} (${m.contentType}):`);
          console.log(`      Git: ${m.gitCount}, Sandbox: ${m.sandboxCount}`);
          console.log(`      Difference: ${m.difference > 0 ? '+' : ''}${m.difference}`);
        });
      }

      if (results.unmappedFolders.length > 0) {
        console.log(`\n⚠️  Unmapped Git Folders (${results.unmappedFolders.length}):`);
        results.unmappedFolders.forEach(f => {
          console.log(`   ${f}`);
        });
      }
    }

    if (results.issues.length > 0) {
      console.log(`\n⚠️  Errors encountered (${results.issues.length}):`);
      results.issues.forEach(issue => {
        console.log(`   ${issue.folder}: ${issue.issue}`);
      });
    }

    // Mappings table
    console.log('\n📊 Detailed Mappings:');
    console.log('');
    console.log('Folder                                  | Content Type            | Git | Sandbox | Match');
    console.log('-' .repeat(90));
    results.mappings.forEach(m => {
      const match = m.match ? '✅' : '❌';
      const folder = (m.folder + ' ').padEnd(40);
      const ct = (m.contentType + ' ').padEnd(24);
      const gitCount = String(m.gitCount).padStart(3);
      const sbCount = String(m.sandboxCount).padStart(7);
      console.log(`${folder}| ${ct}| ${gitCount} | ${sbCount} | ${match}`);
    });

    console.log('\n' + '=' .repeat(80));
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

checkParityAndReport();
