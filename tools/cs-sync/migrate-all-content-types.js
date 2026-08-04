#!/usr/bin/env node

/**
 * Migrate All Published Content Types: Production → Sandbox
 * Dynamically fetches ALL content types and migrates entries from each
 *
 * Usage: node migrate-all-content-types.js --stack csdocs|apidocs
 *
 * Environment variables required:
 *   PROD_STACK_API_KEY, PROD_STACK_MANAGEMENT_TOKEN (read-only)
 *   SANDBOX_STACK_API_KEY, SANDBOX_STACK_MANAGEMENT_TOKEN
 */

import https from 'https';

class ContentstackClient {
  constructor(apiKey, token, region = 'us') {
    this.apiKey = apiKey;
    this.token = token;
    const regionMap = {
      us: 'api.contentstack.io',
      eu: 'eu-api.contentstack.com',
    };
    this.hostname = regionMap[region] || regionMap.us;
  }

  request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: this.hostname,
        path: path,
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

  async getContentTypes() {
    const types = [];
    let skip = 0;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      const res = await this.request(`/v3/content_types?limit=${limit}&skip=${skip}`);
      if (res.status !== 200) {
        throw new Error(`Failed to fetch content types: ${res.status}`);
      }

      const page = res.data.content_types || [];
      types.push(...page);
      hasMore = page.length === limit;
      skip += limit;
    }

    return types;
  }

  async getPublishedEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const res = await this.request(`/v3/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}&include_count=true`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries for ${contentTypeUid}: ${res.status}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r  📥 Fetched ${count} entries...`);
    }

    console.log(`\n  ✅ Total: ${entries.length}`);
    return entries;
  }

  async createEntry(contentTypeUid, payload) {
    const res = await this.request(`/v3/content_types/${contentTypeUid}/entries`, {
      method: 'POST',
      body: { entry: payload },
    });

    if (res.status !== 201) {
      const errMsg = res.data?.errors || res.data?.error_message || JSON.stringify(res.data);
      throw new Error(`Failed to create: ${res.status} - ${errMsg}`);
    }
    return res.data.entry;
  }

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const res = await this.request(`/v3/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}`);
      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r  📥 Fetched ${count} entries...`);
    }

    console.log(`\n  ✅ Total in Sandbox: ${entries.length}`);
    return entries;
  }

  async deleteEntry(contentTypeUid, uid) {
    const res = await this.request(`/v3/content_types/${contentTypeUid}/entries/${uid}`, {
      method: 'DELETE',
    });
    return res.status === 204 || res.status === 200;
  }

  async deleteAllEntries(contentTypeUid) {
    console.log(`  🗑️  Fetching all entries from Sandbox...`);
    const entries = await this.getAllEntries(contentTypeUid, 100);

    let deleted = 0;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      try {
        const success = await this.deleteEntry(contentTypeUid, entry.uid);
        if (success) deleted++;
        process.stdout.write(`\r  🗑️  Deleted ${deleted}/${entries.length}...`);
      } catch (err) {
        console.error(`\n  Failed to delete ${entry.uid}: ${err.message}`);
      }
    }
    console.log(`\n  ✅ Cleanup complete: ${deleted} deleted`);
  }
}

const STACKS = {
  csdocs: {
    name: 'CS-Docs',
    expectedTotal: 7400,
  },
  apidocs: {
    name: 'API Docs',
    expectedTotal: 837,
  },
};

async function migrate() {
  const args = process.argv.slice(2);
  let stackType = process.env.STACK_TYPE || 'csdocs';

  const config = {
    prodKey: process.env.PROD_STACK_API_KEY,
    prodToken: process.env.PROD_STACK_MANAGEMENT_TOKEN,
    sandboxKey: process.env.SANDBOX_STACK_API_KEY,
    sandboxToken: process.env.SANDBOX_STACK_MANAGEMENT_TOKEN,
  };

  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === '--stack') stackType = args[i + 1];
  }

  const stack = STACKS[stackType];
  if (!stack) {
    console.error(`❌ Invalid stack: ${stackType}`);
    process.exit(1);
  }

  if (!config.prodKey || !config.prodToken || !config.sandboxKey || !config.sandboxToken) {
    console.error('❌ Missing credentials');
    process.exit(1);
  }

  try {
    const prodClient = new ContentstackClient(config.prodKey, config.prodToken);
    const sandboxClient = new ContentstackClient(config.sandboxKey, config.sandboxToken);

    console.log(`\n🔄 MIGRATION: ${stack.name} (ALL Content Types) PRODUCTION → SANDBOX\n`);
    console.log('═'.repeat(70));

    // Get all content types from Production
    console.log(`\n📋 Fetching content types from Production...`);
    const contentTypes = await prodClient.getContentTypes();
    console.log(`✅ Found ${contentTypes.length} content types\n`);

    let totalEntries = 0;
    let totalCreated = 0;
    let totalFailed = 0;

    // Migrate each content type
    for (const ct of contentTypes) {
      const ctUid = ct.uid;
      console.log(`\n📚 Content Type: ${ctUid}`);
      console.log(`  Reading from Production...`);

      try {
        const prodEntries = await prodClient.getPublishedEntries(ctUid);

        if (prodEntries.length === 0) {
          console.log(`  ⊘ No published entries`);
          continue;
        }

        totalEntries += prodEntries.length;

        console.log(`  Cleaning Sandbox...`);
        await sandboxClient.deleteAllEntries(ctUid);

        console.log(`  Creating in Sandbox...`);
        let created = 0;
        let failed = 0;

        for (let i = 0; i < prodEntries.length; i++) {
          const entry = prodEntries[i];
          const cleanPayload = { ...entry };

          delete cleanPayload.uid;
          delete cleanPayload.created_at;
          delete cleanPayload.updated_at;
          delete cleanPayload.created_by;
          delete cleanPayload.updated_by;
          delete cleanPayload._version;
          delete cleanPayload.publish_details;
          delete cleanPayload.ACL;

          try {
            await sandboxClient.createEntry(ctUid, cleanPayload);
            created++;
            process.stdout.write(`\r  ✍️  Created ${created}/${prodEntries.length}...`);
          } catch (err) {
            failed++;
          }
        }

        console.log(`\n  ✅ ${created}/${prodEntries.length} created`);
        totalCreated += created;
        totalFailed += failed;

      } catch (err) {
        console.error(`  ❌ Error: ${err.message}`);
      }
    }

    console.log(`\n\n${'═'.repeat(70)}`);
    console.log(`\n📊 MIGRATION SUMMARY\n`);
    console.log(`  Stack: ${stack.name}`);
    console.log(`  Content Types: ${contentTypes.length}`);
    console.log(`  Total Entries Fetched: ${totalEntries}`);
    console.log(`  Expected: ${stack.expectedTotal}`);
    console.log(`  Created: ${totalCreated}`);
    if (totalFailed > 0) console.log(`  Failed: ${totalFailed}`);
    console.log(`\n${'═'.repeat(70)}\n`);

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrate();
