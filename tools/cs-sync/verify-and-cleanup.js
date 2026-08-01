#!/usr/bin/env node

/**
 * Verify production entries exist in sandbox, identify extras, suggest cleanup
 * Usage: node verify-and-cleanup.js
 */

import https from 'https';
import { URL } from 'url';

const PROD_STACK = 'blt8fb40ae1e60d06b9';
const PROD_TOKEN = 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_STACK = 'bltf92796d1cef4d3d4';
const SANDBOX_TOKEN = 'cs6829cf3da41d62cdad480661';

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
    this.isProduction = isProduction;
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
          ...(this.isProduction ? {} : { 'authorization': this.token }),
          'Content-Type': 'application/json',
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
      if (options.body) req.write(JSON.stringify(options.body));
      req.end();
    });
  }

  async getAllEntries(contentTypeUid, limit = 100) {
    const entries = [];
    let skip = 0;

    while (true) {
      let path;
      if (this.isProduction) {
        // CDA: token in query param
        path = `/content_types/${contentTypeUid}/entries?access_token=${this.token}&environment=production&limit=${limit}&skip=${skip}`;
      } else {
        // CMA: token in header
        path = `/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}`;
      }

      const res = await this.request(path);

      if (res.status !== 200) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const page = res.data.entries || [];
      if (page.length === 0) break;

      entries.push(...page);
      skip += limit;
    }

    return entries;
  }

  async deleteEntry(contentTypeUid, entryUid) {
    const res = await this.request(
      `/content_types/${contentTypeUid}/entries/${entryUid}`,
      { method: 'DELETE' }
    );

    return res.status === 204 || res.status === 200;
  }
}

async function compareStacks() {
  console.log('🔍 Verifying Production → Sandbox Sync\n');
  console.log(`Production: ${PROD_STACK} (834 entries expected)`);
  console.log(`Sandbox:    ${SANDBOX_STACK} (906 entries)\n`);

  const prodClient = new StackClient(PROD_STACK, PROD_TOKEN, true);
  const sandboxClient = new StackClient(SANDBOX_STACK, SANDBOX_TOKEN, false);

  const prodEntries = new Map(); // uid -> {title, ct}
  const sandboxEntries = new Map();
  const extras = []; // entries in sandbox but not in prod

  // Fetch all production entries
  console.log('📥 Fetching production entries...');
  let prodCount = 0;
  for (const ct of CONTENT_TYPES) {
    try {
      const entries = await prodClient.getAllEntries(ct);
      entries.forEach(e => {
        prodEntries.set(e.uid, { title: e.title, ct });
        prodCount++;
      });
      console.log(`   ${ct}: ${entries.length}`);
    } catch (e) {
      console.log(`   ${ct}: ERROR - ${e.message}`);
    }
  }

  console.log(`\n   Total production: ${prodCount} entries\n`);

  // Fetch all sandbox entries
  console.log('📥 Fetching sandbox entries...');
  let sandboxCount = 0;
  for (const ct of CONTENT_TYPES) {
    try {
      const entries = await sandboxClient.getAllEntries(ct);
      entries.forEach(e => {
        sandboxEntries.set(e.uid, { title: e.title, ct });
        sandboxCount++;
      });
      console.log(`   ${ct}: ${entries.length}`);
    } catch (e) {
      console.log(`   ${ct}: ERROR - ${e.message}`);
    }
  }

  console.log(`\n   Total sandbox: ${sandboxCount} entries\n`);

  // Compare
  console.log('📊 COMPARISON RESULTS\n');

  // Missing entries
  const missing = [];
  prodEntries.forEach((value, uid) => {
    if (!sandboxEntries.has(uid)) {
      missing.push({ uid, ...value });
    }
  });

  if (missing.length > 0) {
    console.log(`⚠️  MISSING IN SANDBOX (${missing.length}):`);
    missing.forEach(e => {
      console.log(`   - ${e.uid} (${e.ct}): "${e.title}"`);
    });
    console.log();
  } else {
    console.log('✅ All production entries exist in sandbox\n');
  }

  // Extra entries
  sandboxEntries.forEach((value, uid) => {
    if (!prodEntries.has(uid)) {
      extras.push({ uid, ...value });
    }
  });

  if (extras.length > 0) {
    console.log(`⚠️  EXTRA IN SANDBOX (${extras.length} - need cleanup):`);
    extras.slice(0, 20).forEach(e => {
      console.log(`   - ${e.uid} (${e.ct}): "${e.title}"`);
    });
    if (extras.length > 20) {
      console.log(`   ... and ${extras.length - 20} more`);
    }
    console.log();
  }

  // Summary
  console.log('📈 SUMMARY\n');
  console.log(`Production:      ${prodCount} entries`);
  console.log(`Sandbox:         ${sandboxCount} entries`);
  console.log(`Missing:         ${missing.length} entries (need to create)`);
  console.log(`Extra:           ${extras.length} entries (need to delete)`);
  console.log(`Match:           ${prodCount - missing.length}/${prodCount} (${Math.round((prodCount - missing.length) / prodCount * 100)}%)\n`);

  // Suggest cleanup
  if (extras.length > 0) {
    console.log('🧹 CLEANUP SUGGESTION\n');
    console.log(`To delete the ${extras.length} extra entries, run:\n`);
    console.log('```bash');
    extras.forEach(e => {
      console.log(`curl -X DELETE "https://api.contentstack.io/v3/content_types/${e.ct}/entries/${e.uid}" \\`);
      console.log(`  -H "api_key: ${SANDBOX_STACK}" \\`);
      console.log(`  -H "authorization: ${SANDBOX_TOKEN}"`);
      console.log();
    });
    console.log('```\n');
  }

  // Suggest creation
  if (missing.length > 0) {
    console.log('📦 MISSING ENTRIES\n');
    console.log(`${missing.length} entries need to be created from production.\n`);
    console.log('Create them by:\n');
    console.log('1. Export from production (Settings → Export)');
    console.log('2. Import to sandbox (Settings → Import)\n');
    console.log('Or use migrate-entries.js script\n');
  }
}

compareStacks().catch(e => {
  console.error('❌ Comparison failed:', e.message);
  process.exit(1);
});
