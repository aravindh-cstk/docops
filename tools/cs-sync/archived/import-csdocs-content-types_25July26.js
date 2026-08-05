#!/usr/bin/env node

/**
 * Clone Content Type Definitions: Production CS Docs → Sandbox CS Docs
 * - Fetches content type schemas from production
 * - Creates them in sandbox with exact same structure
 * - Must run BEFORE entry sync
 *
 * Usage: node import-csdocs-content-types_25July26.js
 */

import https from 'https';

const PROD_CSDOCS_STACK = process.env.PROD_CSDOCS_STACK_API_KEY || 'blt2d43f51baca745a8';
const PROD_CSDOCS_TOKEN = process.env.PROD_CSDOCS_STACK_DELIVERY_TOKEN || 'cs80888179b9220bd7cea067ff';
const SANDBOX_CSDOCS_STACK = process.env.CSDOCS_SANDBOX_STACK_API_KEY || 'blt1a9af0bcb3816d6e';
const SANDBOX_CSDOCS_TOKEN = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN || 'csf59f3418fcc349a9c7f20d7e';

const CONTENT_TYPES_TO_SYNC = [
  'api_sdk_name_2026',
  'academy_content_carousel_2026',
  'content_managers_2026',
  'developers_2026',
  'header_2026',
  'homepage_2026',
  'info_cards_2026',
  'left_navigation_2026',
  'links_2026',
  'not_found_404_page_2026',
  'product_faqs_2026',
  'product_landing_2026',
  'product_name_2026',
  'sdks_landing_page_2026',
];

class ContentTypeSync {
  constructor() {
    this.stats = {
      fetched: 0,
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

  // Fetch content type from production
  async getProdContentType(uid) {
    const path = `/v3/content_types/${uid}`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch ${uid}: ${res.status}`);
    }

    return res.data.content_type;
  }

  // Check if content type exists in sandbox
  async getSandboxContentType(uid) {
    const path = `/v3/content_types/${uid}`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    });

    if (res.status === 404) {
      return null;
    }

    if (res.status !== 200) {
      throw new Error(`Failed to check sandbox ${uid}: ${res.status}`);
    }

    return res.data.content_type;
  }

  // Create content type in sandbox
  async createSandboxContentType(contentType) {
    const path = `/v3/content_types`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { content_type: contentType });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Creation failed'}`);
    }

    return res.data.content_type;
  }

  // Update content type in sandbox
  async updateSandboxContentType(uid, contentType) {
    const path = `/v3/content_types/${uid}`;
    const res = await this.request('PUT', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { content_type: contentType });

    if (res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Update failed'}`);
    }

    return res.data.content_type;
  }

  cleanContentType(ct) {
    // Remove fields that shouldn't be copied
    const { uid, created_at, updated_at, created_by, updated_by, _version, ...clean } = ct;
    return { uid, ...clean };
  }

  async syncContentTypes() {
    console.log('\n📋 CLONING CONTENT TYPES\n');
    console.log('📥 Fetching from production...\n');

    for (const uid of CONTENT_TYPES_TO_SYNC) {
      try {
        // Fetch from production
        const prodCT = await this.getProdContentType(uid);
        this.stats.fetched++;
        console.log(`✓ Fetched: ${uid}`);

        // Check if exists in sandbox
        const sandboxCT = await this.getSandboxContentType(uid);

        if (sandboxCT) {
          // Update existing
          console.log(`  → Already exists in sandbox, checking for updates...`);
          const clean = this.cleanContentType(prodCT);
          const updated = await this.updateSandboxContentType(uid, clean);
          this.stats.updated++;
          console.log(`  ✓ Updated: ${uid}`);
        } else {
          // Create new
          const clean = this.cleanContentType(prodCT);
          const created = await this.createSandboxContentType(clean);
          this.stats.created++;
          console.log(`  ✓ Created: ${uid}`);
        }
      } catch (e) {
        console.log(`✗ ${uid}: ${e.message}`);
        this.stats.failed++;
        this.stats.errors.push({ uid, error: e.message });
      }
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ CONTENT TYPE SYNC COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`   Fetched: ${this.stats.fetched}`);
    console.log(`   Created: ${this.stats.created}`);
    console.log(`   Updated: ${this.stats.updated}`);
    if (this.stats.failed > 0) {
      console.log(`   Failed:  ${this.stats.failed}\n`);
      console.log('⚠️  Errors:');
      this.stats.errors.forEach(e => {
        console.log(`   - ${e.uid}: ${e.error}`);
      });
    } else {
      console.log();
    }
    console.log('✨ Sandbox now has all content type definitions\n');
  }

  async run() {
    console.log('🚀 CLONING CONTENT TYPES (CS-DOCS)');
    console.log(`\n📍 Production: ${PROD_CSDOCS_STACK}`);
    console.log(`📍 Sandbox:    ${SANDBOX_CSDOCS_STACK}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      await this.syncContentTypes();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ SYNC FAILED:', e.message);
      process.exit(1);
    }
  }
}

new ContentTypeSync().run();
