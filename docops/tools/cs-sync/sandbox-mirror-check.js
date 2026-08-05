#!/usr/bin/env node

/**
 * Sandbox Mirror Check
 *
 * Verifies that Sandbox mirrors Production data
 * Compares entry counts and identifies mismatches
 *
 * SAFE MODE: Read-only comparison of Sandbox vs Production
 * No modifications to either stack
 *
 * Usage: node sandbox-mirror-check.js
 *
 * Requires environment variables:
 *   - PROD_APIDOCS_STACK_API_KEY (or PROD_CSDOCS_STACK_API_KEY for cs-docs)
 *   - PROD_APIDOCS_STACK_DELIVERY_TOKEN (or PROD_CSDOCS_STACK_DELIVERY_TOKEN)
 *   - APIDOCS_SANDBOX_STACK_API_KEY (or CSDOCS_SANDBOX_STACK_API_KEY)
 *   - APIDOCS_SANDBOX_MANAGEMENT_TOKEN (or CSDOCS_SANDBOX_MANAGEMENT_TOKEN)
 */

import https from 'https';
import { URL } from 'url';

const STACK_TYPE = process.env.STACK_TYPE || 'apidocs'; // apidocs or csdocs

// Environment variable mapping based on stack type
const ENV_PREFIX = STACK_TYPE === 'apidocs' ? 'APIDOCS' : 'CSDOCS';
const PROD_STACK_API_KEY = process.env[`PROD_${ENV_PREFIX}_STACK_API_KEY`];
const PROD_DELIVERY_TOKEN = process.env[`PROD_${ENV_PREFIX}_STACK_DELIVERY_TOKEN`];
const SANDBOX_STACK_API_KEY = process.env[`${ENV_PREFIX}_SANDBOX_STACK_API_KEY`];
const SANDBOX_MANAGEMENT_TOKEN = process.env[`${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`];

// Validate credentials
if (!PROD_STACK_API_KEY || !PROD_DELIVERY_TOKEN || !SANDBOX_STACK_API_KEY || !SANDBOX_MANAGEMENT_TOKEN) {
  console.error('❌ Missing required environment variables');
  console.error(`   Expecting: PROD_${ENV_PREFIX}_STACK_API_KEY, PROD_${ENV_PREFIX}_STACK_DELIVERY_TOKEN`);
  console.error(`   Expecting: ${ENV_PREFIX}_SANDBOX_STACK_API_KEY, ${ENV_PREFIX}_SANDBOX_MANAGEMENT_TOKEN`);
  process.exit(1);
}

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

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      const query = `?limit=${limit}&skip=${skip}`;
      const endpoint = `/content_types/${contentTypeUid}/entries${query}`;
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

  async getContentTypes() {
    const res = await this.request('/content_types?limit=100');
    if (res.status !== 200) {
      throw new Error(`Failed to fetch content types: ${res.status}`);
    }
    return res.data.content_types || [];
  }
}

async function compareSandboxToProduction() {
  console.log(`\n🔍 Sandbox Mirror Check (${STACK_TYPE.toUpperCase()}) - Read-Only Comparison\n`);
  console.log('=' .repeat(70));

  let exitCode = 0;
  const results = {
    contentTypes: [],
    totalEntries: { prod: 0, sandbox: 0 },
    missingInSandbox: [],
    extraInSandbox: [],
    issues: [],
  };

  try {
    console.log('\n📥 Fetching content types from both stacks...\n');

    const prodClient = new ContentstackClient(PROD_STACK_API_KEY, PROD_DELIVERY_TOKEN, true);
    const sandboxClient = new ContentstackClient(SANDBOX_STACK_API_KEY, SANDBOX_MANAGEMENT_TOKEN, false);

    // Get content types (from sandbox since it has management API access)
    const contentTypes = await sandboxClient.getContentTypes();
    console.log(`Found ${contentTypes.length} content types\n`);

    // Compare each content type
    for (const ct of contentTypes) {
      const ctUid = ct.uid;
      console.log(`📊 ${ct.display_name || ctUid}`);

      try {
        console.log('   Fetching production entries...');
        const prodEntries = await prodClient.getAllEntries(ctUid);
        console.log(`   ✓ Production: ${prodEntries.length} entries`);

        console.log('   Fetching sandbox entries...');
        const sandboxEntries = await sandboxClient.getAllEntries(ctUid);
        console.log(`   ✓ Sandbox: ${sandboxEntries.length} entries`);

        results.totalEntries.prod += prodEntries.length;
        results.totalEntries.sandbox += sandboxEntries.length;

        // Compare UIDs
        const prodUids = new Set(prodEntries.map(e => e.uid));
        const sandboxUids = new Set(sandboxEntries.map(e => e.uid));

        const missing = prodEntries.filter(e => !sandboxUids.has(e.uid));
        const extra = sandboxEntries.filter(e => !prodUids.has(e.uid));

        if (missing.length > 0) {
          console.log(`   ⚠️  Missing in Sandbox: ${missing.length} entries`);
          results.missingInSandbox.push({ contentType: ctUid, count: missing.length, entries: missing.slice(0, 5) });
          exitCode = 1;
        } else {
          console.log('   ✅ All production entries in sandbox');
        }

        if (extra.length > 0) {
          console.log(`   ℹ️  Extra in Sandbox: ${extra.length} entries (not in production)`);
          results.extraInSandbox.push({ contentType: ctUid, count: extra.length, entries: extra.slice(0, 5) });
        }

        results.contentTypes.push({
          uid: ctUid,
          name: ct.display_name || ctUid,
          prodCount: prodEntries.length,
          sandboxCount: sandboxEntries.length,
          missing: missing.length,
          extra: extra.length,
        });

        console.log('');
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
        results.issues.push({ contentType: ctUid, error: error.message });
        exitCode = 1;
      }
    }

    // Summary
    console.log('=' .repeat(70));
    console.log('\n📋 SUMMARY\n');
    console.log(`Total Entries:`);
    console.log(`  Production: ${results.totalEntries.prod}`);
    console.log(`  Sandbox:    ${results.totalEntries.sandbox}`);

    const isComplete = results.totalEntries.prod === results.totalEntries.sandbox &&
                       results.missingInSandbox.length === 0;

    if (isComplete) {
      console.log('\n✅ PASS: Sandbox mirrors Production perfectly');
    } else {
      console.log('\n❌ FAIL: Sandbox does NOT mirror Production');
      if (results.missingInSandbox.length > 0) {
        console.log(`\n⚠️  Missing in Sandbox (${results.missingInSandbox.length} content types):`);
        results.missingInSandbox.forEach(item => {
          console.log(`   ${item.contentType}: ${item.count} entries`);
          if (item.entries.length > 0) {
            item.entries.slice(0, 3).forEach(e => {
              console.log(`      - ${e.uid}: ${e.title || '(untitled)'}`);
            });
            if (item.entries.length > 3) {
              console.log(`      ... and ${item.entries.length - 3} more`);
            }
          }
        });
      }
    }

    if (results.extraInSandbox.length > 0) {
      console.log(`\nℹ️  Extra in Sandbox (not in production - ${results.extraInSandbox.length} content types):`);
      results.extraInSandbox.forEach(item => {
        console.log(`   ${item.contentType}: ${item.count} entries`);
        if (item.entries.length > 0) {
          item.entries.slice(0, 3).forEach(e => {
            console.log(`      - ${e.uid}: ${e.title || '(untitled)'}`);
          });
          if (item.entries.length > 3) {
            console.log(`      ... and ${item.entries.length - 3} more`);
          }
        }
      });
    }

    if (results.issues.length > 0) {
      console.log(`\n⚠️  Errors encountered (${results.issues.length}):`);
      results.issues.forEach(item => {
        console.log(`   ${item.contentType}: ${item.error}`);
      });
    }

    console.log('\n' + '=' .repeat(70));
    if (exitCode === 0) {
      console.log('\n✅ All checks passed\n');
    } else {
      console.log('\n❌ Some checks failed - review details above\n');
    }

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }

  process.exit(exitCode);
}

compareSandboxToProduction();
