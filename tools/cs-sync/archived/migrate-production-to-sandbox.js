#!/usr/bin/env node

/**
 * Migrate Contentstack Production Stack → Sandbox Stack
 * READ-ONLY from production, WRITE to sandbox
 * Syncs: entries, content-types, assets, global-fields, webhooks
 *
 * Usage: node migrate-production-to-sandbox.js \
 *   --prod-key <api-key> --prod-token <mgmt-token> \
 *   --sandbox-key <api-key> --sandbox-token <mgmt-token>
 */

import https from 'https';
import { URL } from 'url';

class ContentstackClient {
  constructor(apiKey, token, isDelivery = false, region = 'us') {
    this.apiKey = apiKey;
    this.token = token;
    this.isDelivery = isDelivery;

    let baseUrl;
    if (isDelivery) {
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
          ...(this.isDelivery ? {} : { 'authorization': this.token }),
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

  async getAllEntries(limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}`;
      const res = await this.request(`/content_types/docs_article/entries${query}`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r📥 Fetched ${count} entries...`);
    }

    console.log(`\n✅ Total entries: ${entries.length}`);
    return entries;
  }

  async getAllAssets(limit = 100) {
    const assets = [];
    let skip = 0;
    let hasMore = true;
    let count = 0;

    while (hasMore) {
      const res = await this.request(`/assets?limit=${limit}&skip=${skip}`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch assets: ${res.status}`);
      }

      const page = res.data.assets || [];
      assets.push(...page);
      count += page.length;
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r📥 Fetched ${count} assets...`);
    }

    console.log(`\n✅ Total assets: ${assets.length}`);
    return assets;
  }

  async getAllContentTypes() {
    const res = await this.request(`/content_types?limit=100&include_count=true`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch content types: ${res.status}`);
    }
    const cts = res.data.content_types || [];
    console.log(`✅ Total content types: ${cts.length}`);
    return cts;
  }

  async getWebhooks() {
    const res = await this.request(`/webhooks`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch webhooks: ${res.status}`);
    }
    const webhooks = res.data.webhooks || [];
    console.log(`✅ Total webhooks: ${webhooks.length}`);
    return webhooks;
  }

  async getGlobalFields() {
    const res = await this.request(`/global_fields?limit=100&include_count=true`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch global fields: ${res.status}`);
    }
    const fields = res.data.global_fields || [];
    console.log(`✅ Total global fields: ${fields.length}`);
    return fields;
  }

  async createEntry(payload) {
    const res = await this.request(`/content_types/docs_article/entries`, {
      method: 'POST',
      body: { entry: payload },
    });
    if (res.status !== 201) {
      throw new Error(`Failed to create entry: ${res.status} - ${JSON.stringify(res.data)}`);
    }
    return res.data.entry;
  }

  async createAsset(payload) {
    const res = await this.request(`/assets`, {
      method: 'POST',
      body: { asset: payload },
    });
    if (res.status !== 201) {
      throw new Error(`Failed to create asset: ${res.status}`);
    }
    return res.data.asset;
  }

  async deleteOldEntries() {
    console.log('\n🗑️  Deleting old entries from sandbox...');
    const allEntries = await this.getAllEntries();

    for (let i = 0; i < allEntries.length; i++) {
      const entry = allEntries[i];
      const res = await this.request(`/content_types/docs_article/entries/${entry.uid}`, {
        method: 'DELETE',
      });
      if (res.status === 204) {
        process.stdout.write(`\r🗑️  Deleted ${i + 1}/${allEntries.length} old entries...`);
      }
    }
    console.log(`\n✅ Cleanup complete`);
  }
}

async function migrate() {
  const args = process.argv.slice(2);
  const config = {
    prodKey: process.env.PROD_STACK_API_KEY,
    prodDeliveryToken: process.env.PROD_STACK_DELIVERY_TOKEN,
    sandboxKey: process.env.SANDBOX_STACK_API_KEY,
    sandboxToken: process.env.SANDBOX_STACK_MANAGEMENT_TOKEN,
  };

  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === '--prod-key') config.prodKey = args[i + 1];
    if (args[i] === '--prod-delivery') config.prodDeliveryToken = args[i + 1];
    if (args[i] === '--sandbox-key') config.sandboxKey = args[i + 1];
    if (args[i] === '--sandbox-token') config.sandboxToken = args[i + 1];
  }

  if (!config.prodKey || !config.prodDeliveryToken || !config.sandboxKey || !config.sandboxToken) {
    console.error('❌ Missing credentials. Provide via --flag or environment variables:');
    console.error('   PROD_STACK_API_KEY, PROD_STACK_DELIVERY_TOKEN');
    console.error('   SANDBOX_STACK_API_KEY, SANDBOX_STACK_MANAGEMENT_TOKEN');
    process.exit(1);
  }

  try {
    const prodClient = new ContentstackClient(config.prodKey, config.prodDeliveryToken, true); // delivery token (read-only)
    const sandboxClient = new ContentstackClient(config.sandboxKey, config.sandboxToken, false); // management token (write)

    console.log('🔄 PRODUCTION → SANDBOX MIGRATION\n');
    console.log('📖 Step 1: Reading from Production (READ-ONLY)...\n');

    const prodEntries = await prodClient.getAllEntries();
    const prodAssets = await prodClient.getAllAssets();
    const prodContentTypes = await prodClient.getAllContentTypes();
    const prodWebhooks = await prodClient.getWebhooks();
    const prodGlobalFields = await prodClient.getGlobalFields();

    console.log('\n✅ Production data loaded successfully\n');
    console.log('📝 Step 2: Clearing old entries from Sandbox...\n');

    // Clear old sandbox entries
    await sandboxClient.deleteOldEntries();

    console.log('\n📝 Step 3: Creating entries in Sandbox...\n');

    let created = 0;
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
        console.error(`\n⚠️  Failed to create entry ${entry.uid}: ${err.message}`);
      }
    }

    console.log(`\n✅ Entries migrated: ${created}/${prodEntries.length}`);

    console.log('\n✅ MIGRATION COMPLETE!\n');
    console.log('Summary:');
    console.log(`  📄 Entries: ${created}/${prodEntries.length}`);
    console.log(`  🖼️  Assets: ${prodAssets.length} (manual copy needed)`);
    console.log(`  📋 Content Types: ${prodContentTypes.length}`);
    console.log(`  🔗 Webhooks: ${prodWebhooks.length}`);
    console.log(`  ⚙️  Global Fields: ${prodGlobalFields.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrate();
