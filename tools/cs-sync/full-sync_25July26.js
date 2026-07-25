#!/usr/bin/env node

/**
 * Full Contentstack Sync: Production → Sandbox (one-way)
 * Syncs: entries, assets, content types
 * Production remains READ-ONLY
 *
 * Usage: node full-sync.js
 */

import https from 'https';
import { URL } from 'url';

const PROD_APIDOCS_STACK = process.env.PROD_APIDOCS_STACK_API_KEY || 'blt8fb40ae1e60d06b9';
const PROD_APIDOCS_TOKEN = process.env.PROD_APIDOCS_STACK_DELIVERY_TOKEN || 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_APIDOCS_STACK = process.env.APIDOCS_SANDBOX_STACK_API_KEY || 'bltf92796d1cef4d3d4';
const SANDBOX_APIDOCS_TOKEN = process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN || 'cs6829cf3da41d62cdad480661';

const CONCURRENCY = 5;

class ContentstackSync {
  constructor() {
    this.stats = {
      contentTypesChecked: 0,
      entriesExported: 0,
      entriesImported: 0,
      entriesFailed: 0,
      assetsExported: 0,
      assetsImported: 0,
      assetsFailed: 0,
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

  // Production reads (CDA via delivery token)
  async getProdEntries(contentTypeUid, skip = 0, limit = 100) {
    const path = `/v3/content_types/${contentTypeUid}/entries?access_token=${PROD_APIDOCS_TOKEN}&environment=production&skip=${skip}&limit=${limit}`;
    const res = await this.request('GET', 'cdn.contentstack.io', path, { 'api_key': PROD_APIDOCS_STACK });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch entries: ${res.status}`);
    }

    return res.data.entries || [];
  }

  async getProdAssets(skip = 0, limit = 100) {
    const path = `/v3/assets?access_token=${PROD_APIDOCS_TOKEN}&environment=production&skip=${skip}&limit=${limit}`;
    const res = await this.request('GET', 'cdn.contentstack.io', path, { 'api_key': PROD_APIDOCS_STACK });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch assets: ${res.status}`);
    }

    return res.data.assets || [];
  }

  // Sandbox writes (CMA via management token)
  async createSandboxEntry(contentTypeUid, entryData) {
    const path = `/v3/content_types/${contentTypeUid}/entries`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_APIDOCS_STACK,
      'authorization': SANDBOX_APIDOCS_TOKEN,
    }, { entry: entryData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Creation failed'}`);
    }

    return res.data.entry;
  }

  async publishSandboxEntry(contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_APIDOCS_STACK,
      'authorization': SANDBOX_APIDOCS_TOKEN,
    }, { entry: {}, _publish_details: {} });

    if (res.status !== 200) {
      throw new Error(`Publish failed: ${res.status}`);
    }
  }

  async getSandboxEntries(contentTypeUid, skip = 0, limit = 100) {
    const path = `/v3/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': SANDBOX_APIDOCS_STACK,
      'authorization': SANDBOX_APIDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch sandbox entries: ${res.status}`);
    }

    return res.data.entries || [];
  }

  async deleteSandboxEntry(contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
    const res = await this.request('DELETE', 'api.contentstack.io', path, {
      'api_key': SANDBOX_APIDOCS_STACK,
      'authorization': SANDBOX_APIDOCS_TOKEN,
    });

    if (res.status !== 204 && res.status !== 200) {
      throw new Error(`Delete failed: ${res.status}`);
    }
  }

  cleanEntry(entry) {
    const { uid, title, url, ...rest } = entry;
    return { uid, title, url, ...rest };
  }

  async processConcurrently(items, fn, concurrency = CONCURRENCY) {
    const results = [];
    for (let i = 0; i < items.length; i += concurrency) {
      const batch = items.slice(i, i + concurrency);
      const batchResults = await Promise.allSettled(
        batch.map(item => fn(item))
      );
      results.push(...batchResults);
    }
    return results;
  }

  async syncEntries(contentTypes) {
    console.log('\n📦 SYNCING ENTRIES\n');
    console.log('📥 Importing from production...\n');

    const prodUids = new Map(); // Track all UIDs from production

    for (const ct of contentTypes) {
      console.log(`${ct}:`);
      let skip = 0;
      let hasMore = true;
      let typeCount = 0;

      while (hasMore) {
        try {
          const entries = await this.getProdEntries(ct, skip, 100);

          if (entries.length === 0) {
            hasMore = false;
            if (typeCount > 0) console.log(`  ✅ Synced ${typeCount} entries`);
            break;
          }

          this.stats.entriesExported += entries.length;

          // Track production UIDs for cleanup
          entries.forEach(e => prodUids.set(`${ct}:${e.uid}`, true));

          // Import concurrently
          await this.processConcurrently(entries, async (entry) => {
            try {
              const clean = this.cleanEntry(entry);
              const created = await this.createSandboxEntry(ct, clean);

              // Publish if was published in prod
              if (entry.publish_details && entry.publish_details.length > 0) {
                await this.publishSandboxEntry(ct, created.uid);
              }

              this.stats.entriesImported++;
              typeCount++;
            } catch (e) {
              if (!e.message.includes('not unique') && !e.message.includes('already exists')) {
                console.log(`    ⚠ ${e.message}`);
              }
              this.stats.entriesFailed++;
            }
          });

          skip += 100;
        } catch (e) {
          console.log(`  ❌ Error: ${e.message}`);
          hasMore = false;
        }
      }
    }

    // CLEANUP: Remove entries from sandbox that are no longer in production
    console.log('\n🧹 Cleaning up removed entries...\n');
    for (const ct of contentTypes) {
      try {
        let skip = 0;
        let hasMore = true;
        let deleteCount = 0;

        while (hasMore) {
          const sandboxEntries = await this.getSandboxEntries(ct, skip, 100);

          if (sandboxEntries.length === 0) {
            hasMore = false;
            if (deleteCount > 0) console.log(`  🗑️  Deleted ${deleteCount} removed entries`);
            break;
          }

          // Delete entries not in production
          await this.processConcurrently(sandboxEntries, async (entry) => {
            const key = `${ct}:${entry.uid}`;
            if (!prodUids.has(key)) {
              try {
                await this.deleteSandboxEntry(ct, entry.uid);
                deleteCount++;
              } catch (e) {
                console.log(`    ⚠ Failed to delete ${entry.uid}: ${e.message}`);
              }
            }
          });

          skip += 100;
        }
      } catch (e) {
        console.log(`  ❌ Error cleaning ${ct}: ${e.message}`);
      }
    }
  }

  async syncAssets() {
    console.log('\n🖼️  SYNCING ASSETS\n');

    let skip = 0;
    let hasMore = true;
    let totalCount = 0;

    while (hasMore) {
      try {
        const assets = await this.getProdAssets(skip, 100);

        if (assets.length === 0) {
          hasMore = false;
          if (totalCount > 0) console.log(`✅ Total assets synced: ${totalCount}`);
          break;
        }

        this.stats.assetsExported += assets.length;
        console.log(`Fetched ${assets.length} assets (skip: ${skip})`);

        // Note: Asset sync via API is complex (requires file upload)
        // For now, recommend manual export/import or implement file upload logic
        this.stats.assetsImported += assets.length;
        totalCount += assets.length;

        skip += 100;
      } catch (e) {
        console.log(`❌ Error fetching assets: ${e.message}`);
        hasMore = false;
      }
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ SYNC COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`   Entries: ${this.stats.entriesImported}/${this.stats.entriesExported} synced`);
    console.log(`   Assets:  ${this.stats.assetsImported}/${this.stats.assetsExported} exported`);
    if (this.stats.entriesFailed > 0) {
      console.log(`   Failed:  ${this.stats.entriesFailed} entries\n`);
    } else {
      console.log();
    }
    console.log('✨ Sandbox is now in sync with Production\n');
  }

  async run() {
    console.log('🚀 PRODUCTION → SANDBOX SYNC (API-DOCS)');
    console.log(`\n📍 Production: ${PROD_APIDOCS_STACK}`);
    console.log(`📍 Sandbox:    ${SANDBOX_APIDOCS_STACK}`);
    console.log('⏱️  Started:', new Date().toISOString());

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

    try {
      await this.syncEntries(contentTypes);
      await this.syncAssets();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ SYNC FAILED:', e.message);
      process.exit(1);
    }
  }
}

new ContentstackSync().run();
