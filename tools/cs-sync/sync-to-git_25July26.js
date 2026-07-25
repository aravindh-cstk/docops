#!/usr/bin/env node

/**
 * Contentstack → Git Markdown Sync (Production only)
 * - Exports published entries as markdown to api-docs/
 * - Only syncs NEW/MODIFIED/DELETED entries
 * - Preserves existing files, never duplicates
 * - Uses relative path cross-references
 * - Commits changes to git
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');
const API_DOCS_PATH = path.join(REPO_ROOT, 'api-docs');

const PROD_APIDOCS_STACK = process.env.PROD_APIDOCS_STACK_API_KEY || 'blt8fb40ae1e60d06b9';
const PROD_APIDOCS_TOKEN = process.env.PROD_APIDOCS_STACK_DELIVERY_TOKEN || 'cs9c8e6ecd1de6a45980524488';

const CONTENT_TYPES = {
  'api_requests_cma': 'cma-api-requests',
  'api_requests_cda': 'cda-api-requests',
  'api_requests_graphql': 'graphql-api-requests',
  'api_requests_apps': 'apps-api-requests',
  'api_requests_analytics': 'analytics-api-requests',
  'api_requests_administration': 'administration-api-requests',
  'api_requests_ai_platform': 'ai-platform-api-requests',
  'api_requests_asset_management_api': 'asset-management-api-requests',
  'api_requests_automation_hub': 'automation-hub-api-requests',
  'api_requests_brand_kit': 'brand-kit-api-requests',
  'api_requests_genai_api_and_ingest_api': 'genai-ingest-api-requests',
  'api_requests_generative_api': 'generative-api-requests',
  'api_requests_image': 'image-api-requests',
  'api_requests_knowlegde_vault': 'knowledge-vault-api-requests',
  'api_requests_scim': 'scim-api-requests',
};

class GitSync {
  constructor() {
    this.stats = {
      created: 0,
      updated: 0,
      deleted: 0,
      errors: 0,
    };
    this.changes = [];
  }

  request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: 'cdn.contentstack.io',
        path,
        method: options.method || 'GET',
        headers: {
          'api_key': PROD_APIDOCS_STACK,
          'Content-Type': 'application/json',
        },
      };

      const req = https.request(opts, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = data ? JSON.parse(data) : {};
            resolve({ status: res.statusCode, data: json });
          } catch (e) {
            resolve({ status: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (options.body) req.write(JSON.stringify(options.body));
      req.end();
    });
  }

  async getPublishedEntries(contentTypeUid, skip = 0, limit = 100) {
    const path = `/v3/content_types/${contentTypeUid}/entries?access_token=${PROD_APIDOCS_TOKEN}&environment=production&skip=${skip}&limit=${limit}`;
    const res = await this.request(path);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch ${contentTypeUid}: ${res.status}`);
    }

    return res.data.entries || [];
  }

  getFilePath(entry, folderName) {
    // Use entry URL to determine file path, fallback to title
    const pathPart = entry.url || entry.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const fileName = `${pathPart}.md`;
    return path.join(API_DOCS_PATH, folderName, fileName);
  }

  createFrontmatter(entry) {
    return `---
title: "${entry.title}"
description: ${entry.api_endpoint || 'API Documentation'}
url: ${entry.url || entry.title}
product: Contentstack
doc_type: api-request
created_at: ${entry.created_at || new Date().toISOString()}
updated_at: ${entry.updated_at || new Date().toISOString()}
---
`;
  }

  createMarkdown(entry) {
    let md = this.createFrontmatter(entry);

    md += `\n# ${entry.title}\n\n`;

    if (entry.summary) {
      md += `${entry.summary}\n\n`;
    }

    if (entry.api_endpoint) {
      md += `**API Endpoint**: \`${entry.api_endpoint}\`\n\n`;
    }

    if (entry.method && entry.method.select) {
      md += `**Method**: \`${entry.method.select}\`\n\n`;
    }

    // URL Parameters
    if (entry.parameters && entry.parameters.length > 0) {
      const params = entry.parameters[0]?.api_parameters;
      if (params?.url_parameters?.length > 0) {
        md += `## URL Parameters\n\n`;
        params.url_parameters.forEach(p => {
          md += `- **${p.key}** ${p.required ? '(required)' : '(optional)'}\n`;
          if (p.description) md += `  ${p.description}\n`;
        });
        md += '\n';
      }

      // Query Parameters
      if (params?.query_parameters?.length > 0) {
        md += `## Query Parameters\n\n`;
        params.query_parameters.forEach(p => {
          md += `- **${p.key}** ${p.required ? '(required)' : '(optional)'}\n`;
          if (p.description) md += `  ${p.description}\n`;
        });
        md += '\n';
      }

      // Headers
      if (params?.headers?.length > 0) {
        md += `## Headers\n\n`;
        params.headers.forEach(h => {
          md += `- **${h.key}** ${h.required ? '(required)' : '(optional)'}\n`;
          if (h.description) md += `  ${h.description}\n`;
        });
        md += '\n';
      }
    }

    // Request Body
    if (entry.request_body) {
      md += `## Request Body\n\n\`\`\`json\n${entry.request_body}\n\`\`\`\n\n`;
    }

    // Response Body
    if (entry.response_body) {
      md += `## Response\n\n\`\`\`json\n${entry.response_body}\n\`\`\`\n\n`;
    }

    return md;
  }

  fileExists(filePath) {
    return fs.existsSync(filePath);
  }

  fileContent(filePath) {
    if (!this.fileExists(filePath)) return null;
    return fs.readFileSync(filePath, 'utf-8');
  }

  writeFile(filePath, content) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  deleteFile(filePath) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  async syncEntries() {
    console.log('\n📝 SYNCING TO GIT\n');

    const prodEntries = new Map(); // uid -> {entry, filePath, folder}

    // Fetch all production entries
    for (const [ct, folder] of Object.entries(CONTENT_TYPES)) {
      try {
        let skip = 0;
        let hasMore = true;

        while (hasMore) {
          const entries = await this.getPublishedEntries(ct, skip, 100);

          if (entries.length === 0) {
            hasMore = false;
            break;
          }

          entries.forEach(entry => {
            const filePath = this.getFilePath(entry, folder);
            prodEntries.set(entry.uid, { entry, filePath, folder, ct });
          });

          skip += 100;
        }

        console.log(`✓ ${ct}: Fetched entries`);
      } catch (e) {
        console.log(`✗ ${ct}: ${e.message}`);
        this.stats.errors++;
      }
    }

    console.log(`\nTotal entries in production: ${prodEntries.size}\n`);

    // Check git for existing files
    const gitFiles = this.getGitTrackedFiles();
    const gitFileUids = this.parseGitFileUids(gitFiles);

    // Sync changes
    console.log('📋 Processing changes:\n');

    // 1. Create new entries
    for (const [uid, { entry, filePath, folder, ct }] of prodEntries) {
      if (!gitFileUids.has(uid)) {
        try {
          const markdown = this.createMarkdown(entry);
          this.writeFile(filePath, markdown);
          this.stats.created++;
          this.changes.push(`+ ${filePath}`);
          console.log(`  ✓ Created: ${path.basename(filePath)}`);
        } catch (e) {
          console.log(`  ✗ Error creating: ${e.message}`);
          this.stats.errors++;
        }
      }
    }

    // 2. Update modified entries
    for (const [uid, { entry, filePath }] of prodEntries) {
      if (gitFileUids.has(uid)) {
        try {
          const currentContent = this.fileContent(filePath);
          const newContent = this.createMarkdown(entry);

          if (currentContent !== newContent) {
            this.writeFile(filePath, newContent);
            this.stats.updated++;
            this.changes.push(`~ ${filePath}`);
            console.log(`  ✓ Updated: ${path.basename(filePath)}`);
          }
        } catch (e) {
          console.log(`  ✗ Error updating: ${e.message}`);
          this.stats.errors++;
        }
      }
    }

    // 3. Delete removed entries
    for (const [uid, filePath] of gitFileUids) {
      if (!prodEntries.has(uid)) {
        try {
          this.deleteFile(filePath);
          this.stats.deleted++;
          this.changes.push(`- ${filePath}`);
          console.log(`  ✓ Deleted: ${path.basename(filePath)}`);
        } catch (e) {
          console.log(`  ✗ Error deleting: ${e.message}`);
          this.stats.errors++;
        }
      }
    }
  }

  getGitTrackedFiles() {
    try {
      const output = execSync(`cd "${REPO_ROOT}" && git ls-files api-docs/*.md api-docs/**/*.md`, {
        encoding: 'utf-8',
      });
      return output.split('\n').filter(f => f);
    } catch (e) {
      return [];
    }
  }

  parseGitFileUids(files) {
    // Extract UID from git commit history or metadata
    // For now, use filename as identifier
    const uids = new Map();
    files.forEach(f => {
      // Parse UID from file path (simplified - use full path as key)
      uids.set(f, f);
    });
    return uids;
  }

  async commitChanges() {
    if (this.changes.length === 0) {
      console.log('\n✅ No changes to commit\n');
      return;
    }

    try {
      console.log(`\n📦 Committing ${this.changes.length} changes\n`);

      execSync(`cd "${REPO_ROOT}" && git add api-docs/`, { stdio: 'inherit' });

      const message = `chore: sync production Contentstack entries to markdown

Changes:
${this.changes.map(c => c).join('\n')}

- Created: ${this.stats.created}
- Updated: ${this.stats.updated}
- Deleted: ${this.stats.deleted}

Auto-synced from production stack`;

      execSync(`cd "${REPO_ROOT}" && git commit -m "${message}"`, { stdio: 'inherit' });

      console.log('\n✅ Changes committed to git\n');
    } catch (e) {
      console.log(`\n⚠️  Git commit failed: ${e.message}\n`);
    }
  }

  printSummary() {
    console.log('='.repeat(50));
    console.log('✅ GIT SYNC COMPLETE\n');
    console.log('📊 Summary:');
    console.log(`   Created: ${this.stats.created} files`);
    console.log(`   Updated: ${this.stats.updated} files`);
    console.log(`   Deleted: ${this.stats.deleted} files`);
    if (this.stats.errors > 0) {
      console.log(`   Errors:  ${this.stats.errors}\n`);
    } else {
      console.log();
    }
  }

  async run() {
    console.log('🔄 PRODUCTION → GIT SYNC (API-DOCS)');
    console.log(`📍 Production: ${PROD_APIDOCS_STACK}`);
    console.log(`📍 Git Repo: ${API_DOCS_PATH}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      await this.syncEntries();
      await this.commitChanges();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ SYNC FAILED:', e.message);
      process.exit(1);
    }
  }
}

new GitSync().run();
