#!/usr/bin/env node

/**
 * Git → CMS Import: API Docs
 * - Reads markdown files from api-docs/ folder (MAIN BRANCH ONLY)
 * - Parses YAML frontmatter into CMS fields
 * - Creates/updates entries in Production CMS as DRAFT
 * - Writer manually publishes when ready
 *
 * Triggered on:
 *   1. PR merge to main (immediate) - import-git-to-cms-apidocs_25July26.js
 *   2. 2 AM UTC safety check (main branch) - sync-prod-to-sandbox.yml
 *
 * Usage: node import-git-to-cms-apidocs_25July26.js
 * Note: Only reads from checked-out git branch (main in production)
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');
const API_DOCS_PATH = path.join(REPO_ROOT, 'api-docs');

const PROD_APIDOCS_STACK = process.env.PROD_APIDOCS_STACK_API_KEY || 'blt8fb40ae1e60d06b9';
const PROD_APIDOCS_TOKEN = process.env.PROD_APIDOCS_STACK_DELIVERY_TOKEN || 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_APIDOCS_STACK = process.env.APIDOCS_SANDBOX_STACK_API_KEY || 'bltf92796d1cef4d3d4';
const SANDBOX_APIDOCS_TOKEN = process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN || 'cs6829cf3da41d62cdad480661';

const FOLDER_TO_CONTENT_TYPE = {
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
};

class GitToCmsImporter {
  constructor() {
    this.stats = {
      filesProcessed: 0,
      created: 0,
      updated: 0,
      failed: 0,
      errors: [],
    };
  }

  request(method, host, path, headers = {}, body = null) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: host,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
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
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { frontmatter: {}, body: content };

    const frontmatterText = match[1];
    const body = match[2];
    const frontmatter = {};

    frontmatterText.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        frontmatter[key.trim()] = value;
      }
    });

    return { frontmatter, body };
  }

  buildEntryData(frontmatter, body) {
    return {
      title: frontmatter.title || 'Untitled',
      url: frontmatter.url || frontmatter.title?.toLowerCase().replace(/\s+/g, '-'),
      description: frontmatter.description || frontmatter.summary || '',
      body: body.trim(),
      api_endpoint: frontmatter.api_endpoint || '',
      method: frontmatter.method ? { select: frontmatter.method } : undefined,
      request_body: frontmatter.request_body || '',
      response_body: frontmatter.response_body || '',
    };
  }

  async getExistingEntry(contentTypeUid, url) {
    const path = `/v3/content_types/${contentTypeUid}/entries?query={"url":"${url}"}`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_APIDOCS_STACK,
      'authorization': PROD_APIDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to check existing entry: ${res.status}`);
    }

    return res.data.entries?.[0];
  }

  async createEntry(contentTypeUid, entryData) {
    const path = `/v3/content_types/${contentTypeUid}/entries`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': PROD_APIDOCS_STACK,
      'authorization': PROD_APIDOCS_TOKEN,
    }, { entry: entryData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Creation failed'}`);
    }

    return res.data.entry;
  }

  async updateEntry(contentTypeUid, entryUid, entryData) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
    const res = await this.request('PUT', 'api.contentstack.io', path, {
      'api_key': PROD_APIDOCS_STACK,
      'authorization': PROD_APIDOCS_TOKEN,
    }, { entry: entryData });

    if (res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Update failed'}`);
    }

    return res.data.entry;
  }

  async publishEntry(contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': PROD_APIDOCS_STACK,
      'authorization': PROD_APIDOCS_TOKEN,
    }, { entry: {}, _publish_details: {} });

    if (res.status !== 200) {
      throw new Error(`Publish failed: ${res.status}`);
    }
  }

  getMarkdownFiles() {
    const files = [];
    const walk = (dir, relativePath = '') => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.join(relativePath, entry.name);

        if (entry.isDirectory()) {
          walk(fullPath, relPath);
        } else if (entry.name.endsWith('.md')) {
          files.push({
            filePath: fullPath,
            relativePath: relPath,
            folder: path.dirname(relPath),
            fileName: entry.name,
          });
        }
      });
    };

    walk(API_DOCS_PATH);
    return files;
  }

  async processMarkdownFile(file) {
    try {
      const content = fs.readFileSync(file.filePath, 'utf-8');
      const { frontmatter, body } = this.parseFrontmatter(content);

      // Determine content type from folder name
      const folderName = path.basename(file.folder);
      const contentTypeUid = FOLDER_TO_CONTENT_TYPE[folderName];

      if (!contentTypeUid) {
        console.log(`  ⚠️  Unknown content type for folder: ${folderName}`);
        return;
      }

      const entryData = this.buildEntryData(frontmatter, body);

      // Check if entry exists
      const existing = await this.getExistingEntry(contentTypeUid, entryData.url);

      if (existing) {
        // Update existing entry
        const updated = await this.updateEntry(contentTypeUid, existing.uid, entryData);
        this.stats.updated++;
        console.log(`  ✓ Updated (Draft): ${entryData.title}`);
      } else {
        // Create new entry as DRAFT
        const created = await this.createEntry(contentTypeUid, entryData);
        this.stats.created++;
        console.log(`  ✓ Created (Draft): ${entryData.title}`);
      }

      this.stats.filesProcessed++;
    } catch (e) {
      console.log(`  ✗ Error processing ${file.fileName}: ${e.message}`);
      this.stats.failed++;
      this.stats.errors.push({ file: file.fileName, error: e.message });
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ GIT → CMS IMPORT COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`   Processed: ${this.stats.filesProcessed} files`);
    console.log(`   Created:   ${this.stats.created} entries`);
    console.log(`   Updated:   ${this.stats.updated} entries`);
    if (this.stats.failed > 0) {
      console.log(`   Failed:    ${this.stats.failed} entries\n`);
      console.log('⚠️  Errors:');
      this.stats.errors.forEach(e => {
        console.log(`   - ${e.file}: ${e.error}`);
      });
    } else {
      console.log();
    }
    console.log('✨ Markdown entries imported to Production CMS\n');
  }

  async run() {
    console.log('🚀 IMPORTING GIT MARKDOWN → PRODUCTION CMS (API-DOCS)');
    console.log(`📍 Source: ${API_DOCS_PATH}`);
    console.log(`📍 Target: ${PROD_APIDOCS_STACK}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      const files = this.getMarkdownFiles();
      console.log(`\n📝 Found ${files.length} markdown files\n`);

      for (const file of files) {
        await this.processMarkdownFile(file);
      }

      this.printSummary();
    } catch (e) {
      console.error('\n❌ IMPORT FAILED:', e.message);
      process.exit(1);
    }
  }
}

new GitToCmsImporter().run();
