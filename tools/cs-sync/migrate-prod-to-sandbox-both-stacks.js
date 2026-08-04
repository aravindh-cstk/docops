#!/usr/bin/env node

/**
 * Migrate Published Content: Production → Sandbox (Both Stacks)
 * READ: Production via Delivery Token (published entries only) — READ-ONLY
 * WRITE: Sandbox via Management Token
 *
 * Supports: CS-Docs (docs_article) and API Docs (api_detail_page)
 *
 * Usage: node migrate-prod-to-sandbox-both-stacks.js \
 *   --stack csdocs|apidocs \
 *   --prod-key <api-key> --prod-delivery <delivery-token> \
 *   --sandbox-key <api-key> --sandbox-token <mgmt-token>
 */

import https from 'https';
import { URL } from 'url';

class ContentstackClient {
  constructor(apiKey, token, isCDA = false, region = 'us') {
    this.apiKey = apiKey;
    this.token = token;
    this.isCDA = isCDA;

    let baseUrl;
    if (isCDA) {
      const regionMap = {
        us: 'https://cdn.contentstack.io/v3',
        eu: 'https://eu-cdn.contentstack.com/v3',
      };
      baseUrl = regionMap[region] || regionMap.us;
    } else {
      const regionMap = {
        us: 'https://api.contentstack.io/v3',
        eu: 'https://eu-api.contentstack.com/v3',
      };
      baseUrl = regionMap[region] || regionMap.us;
    }
    this.baseUrl = baseUrl;
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
          ...(this.isCDA ? {} : { 'authorization': this.token }),
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

  async getPublishedEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}&include_count=true`;
      const res = await this.request(`/content_types/${contentTypeUid}/entries${query}`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status} - ${JSON.stringify(res.data)}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r📥 Fetched ${count} published entries...`);
    }

    console.log(`\n✅ Total published entries: ${entries.length}`);
    return entries;
  }

  async createEntry(contentTypeUid, payload) {
    const res = await this.request(`/content_types/${contentTypeUid}/entries`, {
      method: 'POST',
      body: { entry: payload },
    });

    if (res.status !== 201) {
      const errMsg = res.data?.errors || res.data?.error_message || JSON.stringify(res.data);
      throw new Error(`Failed to create entry: ${res.status} - ${errMsg}`);
    }
    return res.data.entry;
  }

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}`;
      const res = await this.request(`/content_types/${contentTypeUid}/entries${query}`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r📥 Fetched ${count} entries from Sandbox...`);
    }

    console.log(`\n✅ Total entries in Sandbox: ${entries.length}`);
    return entries;
  }

  async deleteEntry(contentTypeUid, uid) {
    const res = await this.request(`/content_types/${contentTypeUid}/entries/${uid}`, {
      method: 'DELETE',
    });
    return res.status === 204 || res.status === 200;
  }

  async deleteAllEntries(contentTypeUid) {
    console.log('\n🗑️  Fetching all entries from Sandbox for deletion...');
    const entries = await this.getAllEntries(contentTypeUid, 100);

    let deleted = 0;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      try {
        const success = await this.deleteEntry(contentTypeUid, entry.uid);
        if (success) {
          deleted++;
        }
        process.stdout.write(`\r🗑️  Deleted ${deleted}/${entries.length} entries...`);
      } catch (err) {
        console.error(`\nFailed to delete ${entry.uid}: ${err.message}`);
      }
    }
    console.log(`\n✅ Cleanup complete: deleted ${deleted} entries`);
  }
}

const STACKS = {
  csdocs: {
    name: 'CS-Docs',
    contentTypeUid: 'docs_article',
    expectedCount: 7401,
  },
  apidocs: {
    name: 'API Docs',
    contentTypeUid: 'api_detail_page',
    expectedCount: 837,
  },
};

async function migrate() {
  const args = process.argv.slice(2);

  let stackType = process.env.STACK_TYPE || 'csdocs';
  const config = {
    prodKey: process.env.PROD_STACK_API_KEY,
    prodDelivery: process.env.PROD_STACK_DELIVERY_TOKEN,
    sandboxKey: process.env.SANDBOX_STACK_API_KEY,
    sandboxToken: process.env.SANDBOX_STACK_MANAGEMENT_TOKEN,
  };

  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === '--stack') stackType = args[i + 1];
    if (args[i] === '--prod-key') config.prodKey = args[i + 1];
    if (args[i] === '--prod-delivery') config.prodDelivery = args[i + 1];
    if (args[i] === '--sandbox-key') config.sandboxKey = args[i + 1];
    if (args[i] === '--sandbox-token') config.sandboxToken = args[i + 1];
  }

  const stack = STACKS[stackType];
  if (!stack) {
    console.error(`❌ Invalid stack type: ${stackType}. Use: csdocs or apidocs`);
    process.exit(1);
  }

  if (!config.prodKey || !config.prodDelivery || !config.sandboxKey || !config.sandboxToken) {
    console.error('❌ Missing credentials');
    process.exit(1);
  }

  try {
    const prodClient = new ContentstackClient(config.prodKey, config.prodDelivery, true);
    const sandboxClient = new ContentstackClient(config.sandboxKey, config.sandboxToken, false);

    console.log(`\n🔄 MIGRATION: ${stack.name} PRODUCTION → SANDBOX\n`);
    console.log('═'.repeat(70));

    console.log(`\n📖 Reading published entries from Production (Delivery Token)...`);
    const prodEntries = await prodClient.getPublishedEntries(stack.contentTypeUid);

    console.log(`\n✅ Production data loaded (${prodEntries.length} entries)`);
    console.log('\n📝 Clearing old entries from Sandbox...\n');
    await sandboxClient.deleteAllEntries(stack.contentTypeUid);

    console.log('\n📝 Creating published entries in Sandbox...\n');

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
        await sandboxClient.createEntry(stack.contentTypeUid, cleanPayload);
        created++;
        process.stdout.write(`\r✍️  Created ${created}/${prodEntries.length}...`);
      } catch (err) {
        failed++;
      }
    }

    console.log(`\n\n✅ MIGRATION COMPLETE!\n`);
    console.log('═'.repeat(70));
    console.log(`\n📊 Stack: ${stack.name}`);
    console.log(`📄 Created: ${created}/${prodEntries.length}`);
    if (failed > 0) console.log(`❌ Failed: ${failed}`);
    console.log('\n' + '═'.repeat(70) + '\n');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrate();
