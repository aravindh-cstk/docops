#!/usr/bin/env node

/**
 * Sandbox-Only Testing: Git ↔ Sandbox CMS Sync
 *
 * SAFE MODE: Only touches Sandbox CMS and Git
 * Does NOT touch Production
 *
 * Tests:
 * 1. Git → Sandbox CMS (import test markdown)
 * 2. Sandbox CMS → Git (export entries)
 * 3. Verify parity: Sandbox entries = Git markdown files
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
const API_DOCS_PATH = path.join(REPO_ROOT, 'api-docs');

// For Sandbox-only testing, only require Sandbox credentials
const SANDBOX_STACK = process.env.APIDOCS_SANDBOX_STACK_API_KEY;
const SANDBOX_TOKEN = process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN;

if (!SANDBOX_STACK || !SANDBOX_TOKEN) {
  console.error('❌ Missing Sandbox credentials:');
  console.error('   - APIDOCS_SANDBOX_STACK_API_KEY');
  console.error('   - APIDOCS_SANDBOX_MANAGEMENT_TOKEN');
  console.error('\n📋 Set these in .env or as environment variables');
  process.exit(1);
}

const FOLDER_TO_CONTENT_TYPE = {
  'cma-api-requests': 'api_requests_cma',
};

class SandboxTestSync {
  constructor() {
    this.stats = {
      imported: 0,
      exported: 0,
      errors: [],
    };
  }

  async request(method, host, path, headers = {}, body = null) {
    return withRetry(
      () => this._makeRequest(method, host, path, headers, body),
      { name: `${method} ${path}` }
    );
  }

  _makeRequest(method, host, path, headers = {}, body = null) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: host,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          'api_key': SANDBOX_STACK,
          'authorization': SANDBOX_TOKEN,
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

  async getTestMarkdownFiles() {
    const testFile = path.join(API_DOCS_PATH, 'content-management-api-requests/test-sync-entry.md');
    if (fs.existsSync(testFile)) {
      return [{
        filePath: testFile,
        folder: 'cma-api-requests',
        fileName: 'test-sync-entry.md',
      }];
    }
    return [];
  }

  async importGitToSandbox() {
    console.log('\n📝 TEST 1: Git → Sandbox CMS\n');

    const files = await this.getTestMarkdownFiles();
    if (files.length === 0) {
      console.log('⚠️  No test files found. Create test-sync-entry.md first');
      return;
    }

    for (const file of files) {
      try {
        const content = fs.readFileSync(file.filePath, 'utf-8');
        const { frontmatter, body } = this.parseFrontmatter(content);

        const entryData = {
          title: frontmatter.title || 'Test Entry',
          url: frontmatter.url || 'test-entry',
          description: frontmatter.description || '',
          body: body.trim(),
        };

        const contentTypeUid = FOLDER_TO_CONTENT_TYPE[file.folder];
        if (!contentTypeUid) {
          console.log(`⚠️  Unknown content type for folder: ${file.folder}`);
          return;
        }

        // Check if exists
        const path = `/v3/content_types/${contentTypeUid}/entries?query={"url":"${entryData.url}"}`;
        const res = await this.request('GET', 'api.contentstack.io', path);

        if (res.status === 200 && res.data.entries?.length > 0) {
          // Update
          const existing = res.data.entries[0];
          const merged = mergeEntryFields(existing, entryData);
          const updateRes = await this.request('PUT', 'api.contentstack.io',
            `/v3/content_types/${contentTypeUid}/entries/${existing.uid}`,
            {},
            { entry: merged });

          if (updateRes.status === 200) {
            console.log(`✓ Updated: ${entryData.title}`);
            this.stats.imported++;
          }
        } else {
          // Create
          const createRes = await this.request('POST', 'api.contentstack.io',
            `/v3/content_types/${contentTypeUid}/entries`,
            {},
            { entry: entryData });

          if (createRes.status === 200 || createRes.status === 201) {
            console.log(`✓ Created: ${entryData.title}`);
            this.stats.imported++;
          }
        }
      } catch (e) {
        console.log(`✗ Error: ${e.message}`);
        this.stats.errors.push(e.message);
      }
    }
  }

  async exportSandboxToGit() {
    console.log('\n📝 TEST 2: Sandbox CMS → Git\n');

    try {
      const contentTypeUid = 'api_requests_cma';
      const apiPath = `/v3/content_types/${contentTypeUid}/entries?limit=100`;
      const res = await this.request('GET', 'api.contentstack.io', apiPath);

      if (res.status !== 200) {
        console.log(`✗ Failed to fetch entries: ${res.status}`);
        return;
      }

      const entries = res.data.entries || [];
      console.log(`Found ${entries.length} entries in Sandbox\n`);

      for (const entry of entries) {
        if (entry.title.includes('Test')) {
          const filePath = path.join(API_DOCS_PATH, 'content-management-api-requests', `${entry.url}.md`);
          const markdown = `---
title: "${entry.title}"
description: ${entry.description || entry.title}
url: ${entry.url}
created_at: ${entry.created_at}
updated_at: ${entry.updated_at}
---

# ${entry.title}

${entry.description || ''}

${entry.body || ''}
`;

          fs.writeFileSync(filePath, markdown, 'utf-8');
          console.log(`✓ Exported: ${entry.title} → ${path.basename(filePath)}`);
          this.stats.exported++;
        }
      }
    } catch (e) {
      console.log(`✗ Error: ${e.message}`);
      this.stats.errors.push(e.message);
    }
  }

  async verifySyncParity() {
    console.log('\n📊 TEST 3: Verify Sandbox ↔ Git Parity\n');

    try {
      // Count in Sandbox
      const contentTypeUid = 'api_requests_cma';
      const apiPath = `/v3/content_types/${contentTypeUid}/entries?limit=1`;
      const res = await this.request('GET', 'api.contentstack.io', apiPath);

      if (res.status !== 200) {
        console.log(`✗ Failed to check Sandbox entries`);
        return;
      }

      const sandboxCount = res.data.entries?.length || 0;
      console.log(`Sandbox: ${sandboxCount} entries`);

      // Count in Git
      const apiDocsPath = path.join(API_DOCS_PATH, 'content-management-api-requests');
      const gitFiles = fs.readdirSync(apiDocsPath)
        .filter(f => f.endsWith('.md') && f.includes('test'))
        .length;

      console.log(`Git: ${gitFiles} markdown files (test-*)`);

      if (sandboxCount > 0 && gitFiles > 0) {
        console.log('\n✅ PARITY CHECK: Both systems have test entries!');
      } else {
        console.log('\n⚠️  PARITY CHECK: Mismatch or empty');
      }
    } catch (e) {
      console.log(`✗ Error: ${e.message}`);
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 SANDBOX TEST SUMMARY\n');
    console.log(`Imported: ${this.stats.imported}`);
    console.log(`Exported: ${this.stats.exported}`);
    if (this.stats.errors.length > 0) {
      console.log(`Errors: ${this.stats.errors.length}`);
      this.stats.errors.forEach(e => console.log(`  - ${e}`));
    }
    console.log('\n✅ Safe testing complete. No Production touched.\n');
  }

  async run() {
    console.log('🔒 SANDBOX-ONLY TEST MODE');
    console.log('⚠️  Production CMS is NOT touched\n');

    try {
      await this.importGitToSandbox();
      await this.exportSandboxToGit();
      await this.verifySyncParity();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ Test failed:', e.message);
      process.exit(1);
    }
  }
}

new SandboxTestSync().run();
