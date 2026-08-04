#!/usr/bin/env node

/**
 * Cleanup Sandbox: Remove unpublished entries that don't exist in Production
 *
 * Keeps only entries in Sandbox that have a corresponding published entry in Production
 * Usage: node cleanup-sandbox-unpublished.js --stack csdocs|apidocs
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
      if (res.status !== 200) throw new Error(`Failed to fetch content types: ${res.status}`);
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

    while (hasMore) {
      const res = await this.request(`/v3/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}&include_count=true`);
      if (res.status !== 200) throw new Error(`Failed to fetch entries: ${res.status}`);

      const page = res.data.entries || [];
      // Filter for published: check publish_details
      const published = page.filter(e => e.publish_details && Object.keys(e.publish_details).length > 0);
      entries.push(...published);
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r  📥 Fetched ${entries.length} published...`);
    }

    console.log(`\n  ✅ Published: ${entries.length}`);
    return entries;
  }

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      const res = await this.request(`/v3/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}`);
      if (res.status !== 200) throw new Error(`Failed to fetch entries: ${res.status}`);
      const page = res.data.entries || [];
      entries.push(...page);
      hasMore = page.length === limit;
      skip += limit;
      process.stdout.write(`\r  📥 Fetched ${entries.length}...`);
    }

    console.log(`\n  ✅ Total: ${entries.length}`);
    return entries;
  }

  async deleteEntry(contentTypeUid, uid) {
    const res = await this.request(`/v3/content_types/${contentTypeUid}/entries/${uid}`, {
      method: 'DELETE',
    });
    return res.status === 204 || res.status === 200;
  }
}

const STACKS = {
  csdocs: { name: 'CS-Docs' },
  apidocs: { name: 'API Docs' },
};

async function cleanup() {
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

    console.log(`\n🧹 CLEANUP: ${stack.name} Sandbox (Remove unpublished entries)\n`);
    console.log('═'.repeat(70));

    // Get all content types
    console.log(`\n📋 Fetching content types...`);
    const contentTypes = await prodClient.getContentTypes();
    console.log(`✅ Found ${contentTypes.length} content types\n`);

    let totalDeleted = 0;

    // For each content type
    for (const ct of contentTypes) {
      const ctUid = ct.uid;
      console.log(`\n📚 ${ctUid}`);

      try {
        // Get published entries from Production
        console.log(`  Production published:`);
        const prodPublished = await prodClient.getPublishedEntries(ctUid);

        if (prodPublished.length === 0) {
          console.log(`  Sandbox entries:`);
          const sandboxEntries = await sandboxClient.getAllEntries(ctUid);

          if (sandboxEntries.length > 0) {
            console.log(`  ⚠️  Sandbox has ${sandboxEntries.length} entries but Production has 0 published`);
            console.log(`  🗑️  Deleting all ${sandboxEntries.length} from Sandbox...`);

            let deleted = 0;
            for (const entry of sandboxEntries) {
              try {
                if (await sandboxClient.deleteEntry(ctUid, entry.uid)) {
                  deleted++;
                  process.stdout.write(`\r  🗑️  Deleted ${deleted}/${sandboxEntries.length}...`);
                }
              } catch (err) {
                console.error(`\n  Failed to delete ${entry.uid}`);
              }
            }
            console.log(`\n  ✅ Deleted ${deleted}`);
            totalDeleted += deleted;
          }
          continue;
        }

        // Get all entries in Sandbox
        console.log(`  Sandbox entries:`);
        const sandboxEntries = await sandboxClient.getAllEntries(ctUid);

        // Build set of published UIDs from Production
        const publishedUids = new Set(prodPublished.map(e => e.uid));

        // Find unpublished entries in Sandbox (not in published Production list)
        const unpublished = sandboxEntries.filter(e => !publishedUids.has(e.uid));

        if (unpublished.length === 0) {
          console.log(`  ✅ All entries are published`);
        } else {
          console.log(`  ⚠️  Found ${unpublished.length} unpublished entries`);
          console.log(`  🗑️  Deleting ${unpublished.length}...`);

          let deleted = 0;
          for (const entry of unpublished) {
            try {
              if (await sandboxClient.deleteEntry(ctUid, entry.uid)) {
                deleted++;
                process.stdout.write(`\r  🗑️  Deleted ${deleted}/${unpublished.length}...`);
              }
            } catch (err) {
              console.error(`\n  Failed to delete ${entry.uid}: ${err.message}`);
            }
          }
          console.log(`\n  ✅ Deleted ${deleted}`);
          totalDeleted += deleted;
        }

      } catch (err) {
        console.error(`  ❌ Error: ${err.message}`);
      }
    }

    console.log(`\n\n${'═'.repeat(70)}`);
    console.log(`\n📊 CLEANUP SUMMARY\n`);
    console.log(`  Stack: ${stack.name}`);
    console.log(`  Total Deleted: ${totalDeleted}`);
    console.log(`  ✅ Sandbox now contains only published entries\n`);
    console.log(`${'═'.repeat(70)}\n`);

  } catch (error) {
    console.error('❌ Cleanup failed:', error.message);
    process.exit(1);
  }
}

cleanup();
