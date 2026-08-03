#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROD_STACK_UID = 'blt8fb40ae1e60d06b9';
const PROD_DELIVERY_TOKEN = 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_STACK_UID = 'bltf92796d1cef4d3d4';
const SANDBOX_MGMT_TOKEN = 'cs6829cf3da41d62cdad480661';

const CONCURRENCY = 5;

class StackMigration {
  constructor() {
    this.prodHost = 'cdn.contentstack.io';
    this.sandboxHost = 'api.contentstack.io';
    this.contentTypeDir = path.join(process.env.HOME, 'Downloads');
    this.stats = {
      contentTypesCreated: 0,
      contentTypesFailed: 0,
      entriesExported: 0,
      entriesImported: 0,
      entriesFailed: 0,
    };
  }

  request(method, host, path, headers = {}, body = null) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: host,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            const json = data ? JSON.parse(data) : {};
            if (res.statusCode >= 400) {
              reject(new Error(`${res.statusCode}: ${data}`));
            } else {
              resolve(json);
            }
          } catch (e) {
            reject(e);
          }
        });
      });

      req.on('error', reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  fetchProdEntries(contentTypeUid, skip = 0, limit = 100) {
    const query = `/v3/content_types/${contentTypeUid}/entries?access_token=${PROD_DELIVERY_TOKEN}&environment=production&skip=${skip}&limit=${limit}`;
    console.log(`  Fetching ${contentTypeUid} (skip: ${skip})...`);

    return this.request('GET', this.prodHost, query, {});
  }

  async importContentType(contentTypeJson) {
    const uid = contentTypeJson.uid;
    console.log(`Creating content type: ${uid}`);

    try {
      const response = await this.request(
        'POST',
        this.sandboxHost,
        `/v3/content_types`,
        {
          'authorization': SANDBOX_MGMT_TOKEN,
          'x-stack-api-key': SANDBOX_STACK_UID,
        },
        { content_type: contentTypeJson }
      );
      this.stats.contentTypesCreated++;
      console.log(`✓ ${uid}`);
    } catch (e) {
      console.log(`✗ ${uid}: ${e.message}`);
      this.stats.contentTypesFailed++;
    }
  }

  async createEntry(contentTypeUid, entryData) {
    return this.request(
      'POST',
      this.sandboxHost,
      `/v3/content_types/${contentTypeUid}/entries`,
      {
        'authorization': SANDBOX_MGMT_TOKEN,
        'x-stack-api-key': SANDBOX_STACK_UID,
      },
      { entry: entryData }
    );
  }

  async publishEntry(contentTypeUid, entryUid) {
    return this.request(
      'POST',
      this.sandboxHost,
      `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`,
      {
        'authorization': SANDBOX_MGMT_TOKEN,
        'x-stack-api-key': SANDBOX_STACK_UID,
      },
      { entry: {}, _publish_details: {} }
    );
  }

  async processConcurrently(items, fn, concurrency = CONCURRENCY) {
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

  async importContentTypes() {
    console.log('\n=== IMPORTING CONTENT TYPES ===\n');

    const contentTypeFiles = fs.readdirSync(this.contentTypeDir)
      .filter(f => f.endsWith('.json') && (
        f.includes('api_') ||
        f.includes('main_section_') ||
        f.includes('cda_') ||
        f.includes('openapi') ||
        f.includes('postman')
      ))
      .map(f => path.join(this.contentTypeDir, f));

    console.log(`Found ${contentTypeFiles.length} content type files\n`);

    for (const file of contentTypeFiles) {
      try {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        await this.importContentType(data);
      } catch (e) {
        console.log(`Error reading ${path.basename(file)}: ${e.message}`);
      }
    }

    console.log(`\nContent Types: ${this.stats.contentTypesCreated} created, ${this.stats.contentTypesFailed} failed`);
  }

  async exportAndImportEntries() {
    console.log('\n=== EXPORTING PUBLISHED ENTRIES ===\n');

    const contentTypes = [
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

    for (const contentTypeUid of contentTypes) {
      console.log(`\n${contentTypeUid}:`);
      let skip = 0;
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await this.fetchProdEntries(contentTypeUid, skip, 100);
          const entries = response.entries || [];

          if (entries.length === 0) {
            hasMore = false;
            console.log(`  Total: ${this.stats.entriesExported} entries exported\n`);
            break;
          }

          this.stats.entriesExported += entries.length;
          console.log(`  Found ${entries.length} entries (total so far: ${this.stats.entriesExported})`);

          // Import entries
          await this.processConcurrently(entries, async (entry) => {
            try {
              const created = await this.createEntry(contentTypeUid, entry);
              const entryUid = created.entry.uid;

              // Publish if it was published in production
              if (entry.publish_details && entry.publish_details.length > 0) {
                await this.publishEntry(contentTypeUid, entryUid);
              }

              this.stats.entriesImported++;
            } catch (e) {
              console.log(`    Error importing entry: ${e.message}`);
              this.stats.entriesFailed++;
            }
          });

          skip += 100;
        } catch (e) {
          console.log(`  Error: ${e.message}`);
          hasMore = false;
        }
      }
    }

    console.log(`\nEntries: ${this.stats.entriesImported} imported, ${this.stats.entriesFailed} failed`);
  }

  async run() {
    console.log('🚀 Starting full stack migration\n');
    console.log(`Production: ${PROD_STACK_UID}`);
    console.log(`Sandbox: ${SANDBOX_STACK_UID}\n`);

    await this.importContentTypes();
    await this.exportAndImportEntries();

    console.log('\n=== MIGRATION COMPLETE ===\n');
    console.log(JSON.stringify(this.stats, null, 2));
  }
}

const migration = new StackMigration();
migration.run().catch(e => {
  console.error('Migration failed:', e.message);
  process.exit(1);
});
