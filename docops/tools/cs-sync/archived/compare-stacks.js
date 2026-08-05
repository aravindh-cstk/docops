#!/usr/bin/env node

/**
 * Compare two Contentstack stacks to verify sandbox has all production data
 * Compares only PUBLISHED/LIVE entries
 * Usage: node compare-stacks.js --prod-key <api-key> --prod-token <delivery-token> --sandbox-key <api-key> --sandbox-token <mgmt-token>
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

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}`;
      const endpoint = this.isDelivery ? `/content_types/docs_article/entries${query}` : `/content_types/docs_article/entries${query}`;
      const res = await this.request(endpoint);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch entries: ${res.status} - ${JSON.stringify(res.data)}`);
      }

      const page = res.data.entries || [];
      entries.push(...page);
      hasMore = page.length === limit;
      skip += limit;
    }

    return entries;
  }

  async getAllAssets(limit = 100) {
    const assets = [];
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      const res = await this.request(`/assets?limit=${limit}&skip=${skip}`);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch assets: ${res.status}`);
      }

      const page = res.data.assets || [];
      assets.push(...page);
      hasMore = page.length === limit;
      skip += limit;
    }

    return assets;
  }
}

async function compareStacks() {
  // Parse arguments
  const args = process.argv.slice(2);
  const config = {
    prodKey: process.env.PROD_STACK_API_KEY,
    prodToken: process.env.PROD_STACK_DELIVERY_TOKEN,
    sandboxKey: process.env.SANDBOX_STACK_API_KEY,
    sandboxToken: process.env.SANDBOX_STACK_MANAGEMENT_TOKEN,
  };

  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === '--prod-key') config.prodKey = args[i + 1];
    if (args[i] === '--prod-token') config.prodToken = args[i + 1];
    if (args[i] === '--sandbox-key') config.sandboxKey = args[i + 1];
    if (args[i] === '--sandbox-token') config.sandboxToken = args[i + 1];
  }

  // Validate
  if (!config.prodKey || !config.prodToken || !config.sandboxKey || !config.sandboxToken) {
    console.error('❌ Missing credentials. Provide via --flag or environment variables:');
    console.error('   PROD_STACK_API_KEY, PROD_STACK_DELIVERY_TOKEN');
    console.error('   SANDBOX_STACK_API_KEY, SANDBOX_STACK_MANAGEMENT_TOKEN');
    process.exit(1);
  }

  console.log('🔍 Comparing Contentstack stacks...\n');

  try {
    const prodClient = new ContentstackClient(config.prodKey, config.prodToken, true); // delivery token
    const sandboxClient = new ContentstackClient(config.sandboxKey, config.sandboxToken, false); // management token

    // Fetch data
    console.log('📥 Fetching production stack data (published entries only)...');
    const prodEntries = await prodClient.getAllEntries();
    const prodAssets = await prodClient.getAllAssets();

    console.log('📥 Fetching sandbox stack data (all entries)...');
    const sandboxEntries = await sandboxClient.getAllEntries();
    const sandboxAssets = await sandboxClient.getAllAssets();

    // Compare entries
    console.log('\n📊 ENTRIES COMPARISON');
    console.log(`  Production (published): ${prodEntries.length} entries`);
    console.log(`  Sandbox (all):          ${sandboxEntries.length} entries`);

    const prodUids = new Set(prodEntries.map(e => e.uid));
    const sandboxUids = new Set(sandboxEntries.map(e => e.uid));

    const missingInSandbox = prodEntries.filter(e => !sandboxUids.has(e.uid));
    const extraInSandbox = sandboxEntries.filter(e => !prodUids.has(e.uid));

    if (missingInSandbox.length > 0) {
      console.log(`\n⚠️  MISSING IN SANDBOX (${missingInSandbox.length}):`);
      missingInSandbox.slice(0, 10).forEach(e => {
        console.log(`   - ${e.uid}: "${e.title}"`);
      });
      if (missingInSandbox.length > 10) {
        console.log(`   ... and ${missingInSandbox.length - 10} more`);
      }
    } else {
      console.log('✅ All production entries exist in sandbox');
    }

    if (extraInSandbox.length > 0) {
      console.log(`\n⚠️  EXTRA IN SANDBOX (${extraInSandbox.length} - not in production):`);
      extraInSandbox.slice(0, 10).forEach(e => {
        console.log(`   - ${e.uid}: "${e.title}"`);
      });
      if (extraInSandbox.length > 10) {
        console.log(`   ... and ${extraInSandbox.length - 10} more`);
      }
    }

    // Compare assets
    console.log('\n📊 ASSETS COMPARISON');
    console.log(`  Production: ${prodAssets.length} assets`);
    console.log(`  Sandbox:    ${sandboxAssets.length} assets`);

    const prodAssetUids = new Set(prodAssets.map(a => a.uid));
    const sandboxAssetUids = new Set(sandboxAssets.map(a => a.uid));

    const missingAssets = prodAssets.filter(a => !sandboxAssetUids.has(a.uid));
    const extraAssets = sandboxAssets.filter(a => !prodAssetUids.has(a.uid));

    if (missingAssets.length > 0) {
      console.log(`\n⚠️  MISSING IN SANDBOX (${missingAssets.length}):`);
      missingAssets.slice(0, 10).forEach(a => {
        console.log(`   - ${a.uid}: "${a.filename}"`);
      });
      if (missingAssets.length > 10) {
        console.log(`   ... and ${missingAssets.length - 10} more`);
      }
    } else {
      console.log('✅ All production assets exist in sandbox');
    }

    // Summary
    console.log('\n📋 SUMMARY');
    const dataComplete = missingInSandbox.length === 0 && missingAssets.length === 0;
    if (dataComplete) {
      console.log('✅ Sandbox has all production data');
    } else {
      console.log(`❌ Sandbox is missing ${missingInSandbox.length} entries and ${missingAssets.length} assets`);
      console.log('\n💡 Next steps: Clone production data to sandbox or use migration script to sync');
    }

    if (extraInSandbox.length > 0 || extraAssets.length > 0) {
      console.log(`\n⚠️  Note: Sandbox has ${extraInSandbox.length} extra entries and ${extraAssets.length} extra assets (outdated/old data)`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

compareStacks();
