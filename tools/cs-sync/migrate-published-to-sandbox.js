#!/usr/bin/env node

/**
 * Migrate Published Content: Production → Sandbox
 * READ: Production via Delivery Token (published entries only)
 * WRITE: Sandbox via Management Token
 *
 * Usage: node migrate-published-to-sandbox.js \
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

  // Production: Read published entries via CDA
  async getPublishedEntries(limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}&include_count=true`;
      const res = await this.request(`/content_types/docs_article/entries${query}`);

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

  // Sandbox: Create entries via Management API
  async createEntry(payload) {
    const res = await this.request(`/content_types/docs_article/entries`, {
      method: 'POST',
      body: { entry: payload },
    });

    if (res.status !== 201) {
      const errMsg = res.data?.errors || res.data?.error_message || JSON.stringify(res.data);
      throw new Error(`Failed to create entry: ${res.status} - ${errMsg}`);
    }
    return res.data.entry;
  }

  // Sandbox: Delete old entries
  async deleteAllEntries() {
    console.log('\n🗑️  Fetching all entries from sandbox for deletion...');
    const entries = await this.getPublishedEntries(100);

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const res = await this.request(`/content_types/docs_article/entries/${entry.uid}`, {
        method: 'DELETE',
      });
      if (res.status === 204 || res.status === 200) {
        process.stdout.write(`\r🗑️  Deleted ${i + 1}/${entries.length} entries...`);
      }
    }
    console.log(`\n✅ Cleanup complete`);
  }
}

async function migrate() {
  const args = process.argv.slice(2);
  const config = {
    prodKey: process.env.PROD_STACK_API_KEY,
    prodDelivery: process.env.PROD_STACK_DELIVERY_TOKEN,
    sandboxKey: process.env.SANDBOX_STACK_API_KEY,
    sandboxToken: process.env.SANDBOX_STACK_MANAGEMENT_TOKEN,
  };

  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === '--prod-key') config.prodKey = args[i + 1];
    if (args[i] === '--prod-delivery') config.prodDelivery = args[i + 1];
    if (args[i] === '--sandbox-key') config.sandboxKey = args[i + 1];
    if (args[i] === '--sandbox-token') config.sandboxToken = args[i + 1];
  }

  if (!config.prodKey || !config.prodDelivery || !config.sandboxKey || !config.sandboxToken) {
    console.error('❌ Missing credentials. Provide via --flag or environment variables:');
    console.error('   PROD_STACK_API_KEY, PROD_STACK_DELIVERY_TOKEN');
    console.error('   SANDBOX_STACK_API_KEY, SANDBOX_STACK_MANAGEMENT_TOKEN');
    process.exit(1);
  }

  try {
    const prodClient = new ContentstackClient(config.prodKey, config.prodDelivery, true); // CDA (published only)
    const sandboxClient = new ContentstackClient(config.sandboxKey, config.sandboxToken, false); // Management API

    console.log('🔄 PRODUCTION (Published) → SANDBOX MIGRATION\n');
    console.log('📖 Step 1: Reading published entries from Production (Delivery Token)...\n');

    const prodEntries = await prodClient.getPublishedEntries();

    console.log('\n✅ Production data loaded successfully\n');
    console.log('📝 Step 2: Clearing old entries from Sandbox...\n');

    // Clear sandbox
    await sandboxClient.deleteAllEntries();

    console.log('\n📝 Step 3: Creating published entries in Sandbox...\n');

    let created = 0;
    let failed = 0;

    for (let i = 0; i < prodEntries.length; i++) {
      const entry = prodEntries[i];
      const cleanPayload = {
        title: entry.title,
        url: entry.url,
        article_content: entry.article_content,
      };

      try {
        await sandboxClient.createEntry(cleanPayload);
        created++;
        process.stdout.write(`\r✍️  Created ${created}/${prodEntries.length} entries...`);
      } catch (err) {
        failed++;
        if (failed <= 5) {
          console.error(`\n⚠️  Failed to create entry ${entry.uid} ("${entry.title}"): ${err.message}`);
        }
      }
    }

    console.log(`\n\n✅ MIGRATION COMPLETE!\n`);
    console.log('Summary:');
    console.log(`  📄 Published entries created: ${created}/${prodEntries.length}`);
    if (failed > 0) {
      console.log(`  ❌ Failed: ${failed}`);
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrate();
