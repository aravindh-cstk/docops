#!/usr/bin/env node

import https from 'https';
import { URL } from 'url';

const PROD_STACK = 'blt8fb40ae1e60d06b9';
const PROD_TOKEN = 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_STACK = 'bltf92796d1cef4d3d4';
const SANDBOX_TOKEN = 'cs6829cf3da41d62cdad480661';

const CONCURRENCY = 5;
const CONTENT_TYPES = [
  'cda_api_reference_pages',
  'api_detail_page_new_2026',
  'api_requests_ai_platform',
  'api_requests_administration',
  'api_requests_analytics',
  'api_requests_apps',
  'api_requests_asset_management_api',
  'api_requests_automation_hub',
  'api_requests_brand_kit',
  'api_requests_cda',
  'api_requests_cma',
  'api_requests_genai_api_and_ingest_api',
  'api_requests_generative_api',
  'api_requests_graphql',
  'api_requests_image',
  'api_requests_knowlegde_vault',
  'api_requests_scim',
  'main_section_api_references',
  'main_section_usage_instructions',
  'openapi',
  'postman',
  'postman_landing_page',
];

class StackClient {
  constructor(stackId, token, isProduction = false) {
    this.stackId = stackId;
    this.token = token;
    this.baseUrl = isProduction
      ? 'https://cdn.contentstack.io/v3'
      : 'https://api.contentstack.io/v3';
  }

  request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, this.baseUrl);
      const opts = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: options.method || 'GET',
        headers: {
          'api_key': this.stackId,
          'Content-Type': 'application/json',
        },
      };

      if (options.isProduction) {
        opts.headers.authorization = this.token;
      } else {
        opts.headers.authorization = this.token;
      }

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

  async getPublishedEntries(contentTypeUid, limit = 100, skip = 0) {
    const query = `/content_types/${contentTypeUid}/entries?access_token=${this.token}&environment=production&limit=${limit}&skip=${skip}`;
    const res = await this.request(query, { isProduction: true });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch ${contentTypeUid}: ${res.status} - ${JSON.stringify(res.data)}`);
    }

    return res.data.entries || [];
  }

  async createEntry(contentTypeUid, entryData) {
    const res = await this.request(
      `/content_types/${contentTypeUid}/entries`,
      {
        method: 'POST',
        body: { entry: entryData },
        isProduction: false,
      }
    );

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`Failed to create entry: ${res.status} - ${JSON.stringify(res.data)}`);
    }

    return res.data.entry;
  }

  async publishEntry(contentTypeUid, entryUid) {
    const res = await this.request(
      `/content_types/${contentTypeUid}/entries/${entryUid}/publish`,
      {
        method: 'POST',
        body: { entry: {}, _publish_details: { environments: ['blt157f8550a9090797'] } },
        isProduction: false,
      }
    );

    if (res.status !== 200) {
      throw new Error(`Failed to publish: ${res.status}`);
    }

    return res.data;
  }
}

async function processConcurrently(items, fn, concurrency = CONCURRENCY) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(
      batch.map((item, idx) => fn(item, i + idx))
    );
    results.push(...batchResults);
  }
  return results;
}

async function migrateEntries() {
  console.log('🚀 Migrating Published Entries\n');
  console.log(`Production: ${PROD_STACK}`);
  console.log(`Sandbox:    ${SANDBOX_STACK}\n`);

  const prodClient = new StackClient(PROD_STACK, PROD_TOKEN, true);
  const sandboxClient = new StackClient(SANDBOX_STACK, SANDBOX_TOKEN, false);

  let totalExported = 0;
  let totalImported = 0;
  let totalFailed = 0;

  for (const contentTypeUid of CONTENT_TYPES) {
    console.log(`\n📦 ${contentTypeUid}`);
    let skip = 0;
    let hasMore = true;
    let typeImported = 0;

    while (hasMore) {
      try {
        const entries = await prodClient.getPublishedEntries(contentTypeUid, 100, skip);

        if (entries.length === 0) {
          hasMore = false;
          break;
        }

        totalExported += entries.length;
        console.log(`   Fetched ${entries.length} entries (skip: ${skip})`);

        // Import entries concurrently
        const results = await processConcurrently(
          entries,
          async (entry) => {
            try {
              const created = await sandboxClient.createEntry(contentTypeUid, entry);
              // Publish if it was published in production
              if (entry.publish_details && entry.publish_details.length > 0) {
                await sandboxClient.publishEntry(contentTypeUid, created.uid);
              }
              totalImported++;
              typeImported++;
            } catch (e) {
              if (!e.message.includes('is not unique') && !e.message.includes('already exists')) {
                console.log(`     ⚠ Error: ${e.message}`);
              }
              totalFailed++;
            }
          }
        );

        skip += 100;
      } catch (e) {
        console.log(`   ❌ Error: ${e.message}`);
        hasMore = false;
      }
    }

    if (typeImported > 0) console.log(`   ✅ Imported ${typeImported}`);
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 MIGRATION COMPLETE\n`);
  console.log(`   Exported: ${totalExported} entries`);
  console.log(`   Imported: ${totalImported} entries`);
  console.log(`   Failed:   ${totalFailed} entries\n`);
}

migrateEntries().catch(e => {
  console.error('❌ Migration failed:', e.message);
  process.exit(1);
});
