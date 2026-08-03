#!/usr/bin/env node

/**
 * Git → CMS Import: CS Docs
 * - Reads markdown files from cs-docs/ folder (MAIN BRANCH ONLY)
 * - Parses YAML frontmatter into CMS fields
 * - Creates/updates entries in Production CMS as DRAFT
 * - Writer manually publishes when ready
 *
 * Triggered on:
 *   1. PR merge to main (immediate) - import-git-to-cms-csdocs_25July26.js
 *   2. 2 AM UTC safety check (main branch) - sync-prod-to-sandbox.yml
 *
 * Usage: node import-git-to-cms-csdocs_25July26.js
 * Note: Only reads from checked-out git branch (main in production)
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getConfig } from './lib/config.js';
import { withRetry } from './lib/retry.js';
import { mergeEntryFields } from './lib/merge-entry.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');
const CS_DOCS_PATH = path.join(REPO_ROOT, 'cs-docs');

const config = getConfig('csdocs');
const PROD_CSDOCS_STACK = config.prod.apiKey;
const PROD_CSDOCS_TOKEN = config.prod.managementToken; // Use managementToken for create/update
const SANDBOX_CSDOCS_STACK = config.sandbox.apiKey;
const SANDBOX_CSDOCS_TOKEN = config.sandbox.managementToken;

// Phase detection for two-phase workflow
const CREATE_DRAFT_ONLY = process.env.CREATE_DRAFT_ONLY === 'true';
const ADD_TO_RELEASE = process.env.ADD_TO_RELEASE === 'true';

// Map title prefixes to folders (extracts [prefix] from title)
const TITLE_PREFIX_TO_FOLDER = {
  'Administration': 'administration',
  'Automations guides and connectors': 'agent-os',
  'Analytics Content': 'analytics',
  'AM2.0': 'assets',
  'Author Content': 'content-managers',
  'Data & Insights': 'data-and-insights',
  'Get Started with CS': 'get-started',
  'Taxonomy': 'headless-cms',
  'Contentstack Launch': 'launch',
  'Marketplace guides and apps': 'marketplace',
  'Introduction to Contentstack - a Headless CMS': 'overview',
  'Personalize': 'personalize',
  'Second level navigation': 'developers',
  'Studio': 'studio',
};

// All docs_article entries go to their folder based on title prefix
const CONTENT_TYPE_UID = 'docs_article';

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

  async requestWithRetry(method, host, path, headers = {}, body = null) {
    return withRetry(
      () => this.request(method, host, path, headers, body),
      { name: `${method} ${path}` }
    );
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
            const err = new Error(`HTTP ${res.statusCode}`);
            err.status = res.statusCode;
            err.statusCode = res.statusCode;
            err.data = json;
            resolve({ status: res.statusCode, data: json, error: err });
          } catch (e) {
            const err = new Error(`HTTP ${res.statusCode}`);
            err.status = res.statusCode;
            err.statusCode = res.statusCode;
            resolve({ status: res.statusCode, data, error: err });
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
    };
  }

  async getExistingEntry(contentTypeUid, url) {
    const path = `/v3/content_types/${contentTypeUid}/entries?query={"url":"${url}"}`;
    const res = await this.requestWithRetry('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw res.error || new Error(`Failed to check existing entry: ${res.status}`);
    }

    return res.data.entries?.[0];
  }

  async createEntry(contentTypeUid, entryData) {
    const path = `/v3/content_types/${contentTypeUid}/entries`;
    const res = await this.requestWithRetry('POST', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    }, { entry: entryData });

    if (res.status !== 201 && res.status !== 200) {
      throw res.error || new Error(`${res.status}: ${res.data.error_message || 'Creation failed'}`);
    }

    return res.data.entry;
  }

  async updateEntry(contentTypeUid, entryUid, existingEntry, entryData) {
    const mergedData = mergeEntryFields(existingEntry, entryData);
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
    const res = await this.requestWithRetry('PUT', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    }, { entry: mergedData });

    if (res.status !== 200) {
      throw res.error || new Error(`${res.status}: ${res.data.error_message || 'Update failed'}`);
    }

    return res.data.entry;
  }

  async publishEntry(contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
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
        } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
          files.push({
            filePath: fullPath,
            relativePath: relPath,
            folder: path.dirname(relPath),
            fileName: entry.name,
          });
        }
      });
    };

    walk(CS_DOCS_PATH);
    return files;
  }

  extractTitlePrefix(title) {
    const match = title.match(/^\[([^\]]+)\]/);
    return match ? match[1] : null;
  }

  async processMarkdownFile(file) {
    try {
      const content = fs.readFileSync(file.filePath, 'utf-8');
      const { frontmatter, body } = this.parseFrontmatter(content);

      // Extract title prefix from frontmatter
      const titlePrefix = this.extractTitlePrefix(frontmatter.title || '');

      if (!titlePrefix) {
        console.log(`  ⚠️  No title prefix found in ${file.fileName}. Expected format: [Prefix] - Title`);
        return;
      }

      // Map prefix to folder (for logging only, content type is always docs_article)
      const folder = TITLE_PREFIX_TO_FOLDER[titlePrefix];
      if (!folder) {
        console.log(`  ⚠️  Unknown title prefix "${titlePrefix}" in ${file.fileName}`);
        return;
      }

      const entryData = this.buildEntryData(frontmatter, body);

      // Check if entry exists
      const existing = await this.getExistingEntry(CONTENT_TYPE_UID, entryData.url);

      if (existing) {
        // Update existing entry (merge fields to prevent data loss)
        const updated = await this.updateEntry(CONTENT_TYPE_UID, existing.uid, existing, entryData);
        this.stats.updated++;
        console.log(`  ✓ Updated (Draft): [${folder}] ${entryData.title}`);
      } else {
        // Create new entry as DRAFT
        const created = await this.createEntry(CONTENT_TYPE_UID, entryData);
        this.stats.created++;
        console.log(`  ✓ Created (Draft): [${folder}] ${entryData.title}`);
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
    console.log('🚀 IMPORTING GIT MARKDOWN → PRODUCTION CMS (CS-DOCS)');
    console.log(`📍 Source: ${CS_DOCS_PATH}`);
    console.log(`📍 Target: ${PROD_CSDOCS_STACK}`);
    console.log(`📊 Mode: ${CREATE_DRAFT_ONLY ? 'PHASE 1 (Create [DRAFT] only)' : ADD_TO_RELEASE ? 'PHASE 2 (Add to Release)' : 'DEFAULT (Create [DRAFT])'}`);
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
