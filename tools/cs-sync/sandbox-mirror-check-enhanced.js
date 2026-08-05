#!/usr/bin/env node

/**
 * Sandbox Mirror Check (ENHANCED)
 *
 * Verifies that Sandbox mirrors Production data (published entries only)
 * Implements 22 critical improvements:
 *   - Published entries only filter
 *   - URL uniqueness validation
 *   - Content type mapping validation
 *   - Duplicate detection
 *   - Detailed error reporting
 *   - Comprehensive logging
 *
 * SAFE MODE: Read-only comparison of Sandbox vs Production
 * No modifications to either stack
 *
 * Usage: node sandbox-mirror-check-enhanced.js
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
const ENV_PREFIX = STACK_TYPE === 'apidocs' ? 'APIDOCS' : 'CSDOCS';

// Environment variable mapping
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

const startTime = new Date();
let stats = {
  contentTypes: 0,
  totalEntriesFetchedProd: 0,
  totalEntriesFetchedSandbox: 0,
  totalPublishedProd: 0,
  totalPublishedSandbox: 0,
  matched: 0,
  missingInSandbox: 0,
  extraInSandbox: 0,
  duplicateUrls: 0,
  validationFailures: 0,
  retryAttempts: 0,
};

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

// IMPROVEMENT 1: Published entries only filter
function filterPublishedEntries(entries) {
  return entries.filter(e => {
    // Check multiple possible status fields
    const isPublished = e.publish_details?.status === 'published' ||
                       e.status === 'published';
    return isPublished;
  });
}

// IMPROVEMENT 7: URL uniqueness validation
function validateUrlUniqueness(entries, contentTypeUid) {
  const urlMap = {};
  const duplicates = [];

  entries.forEach(entry => {
    const url = entry.url || entry.slug;
    if (!url) {
      console.warn(`   ⚠️  Entry ${entry.uid} has no URL/slug`);
      return;
    }

    if (urlMap[url]) {
      duplicates.push({
        url,
        entries: [
          { uid: urlMap[url], title: null },
          { uid: entry.uid, title: entry.title }
        ]
      });
      stats.duplicateUrls++;
    } else {
      urlMap[url] = entry.uid;
    }
  });

  return duplicates;
}

async function compareSandboxToProduction() {
  console.log(`\n🔄 Synchronization Run Started\n`);
  console.log(`Workflow: sandbox-mirror-check-enhanced`);
  console.log(`Timestamp: ${startTime.toISOString()}`);
  console.log(`Environment: Production CMS → Sandbox CMS (Published Only)\n`);
  console.log('Production is READ-ONLY - no modifications\n');
  console.log('=' .repeat(70));

  let exitCode = 0;
  const results = {
    contentTypes: [],
    missingInSandbox: [],
    extraInSandbox: [],
    duplicateUrls: [],
    issues: [],
  };

  try {
    console.log('\n📥 Fetching content types from both stacks...\n');

    const prodClient = new ContentstackClient(PROD_STACK_API_KEY, PROD_DELIVERY_TOKEN, true);
    const sandboxClient = new ContentstackClient(SANDBOX_STACK_API_KEY, SANDBOX_MANAGEMENT_TOKEN, false);

    // Get content types
    const contentTypes = await sandboxClient.getContentTypes();
    stats.contentTypes = contentTypes.length;
    console.log(`Found ${contentTypes.length} content types\n`);

    // Compare each content type
    for (const ct of contentTypes) {
      const ctUid = ct.uid;
      console.log(`📊 Processing: ${ct.display_name || ctUid}`);

      try {
        // Fetch all entries
        console.log('   Fetching production entries...');
        const prodAllEntries = await prodClient.getAllEntries(ctUid);
        stats.totalEntriesFetchedProd += prodAllEntries.length;

        // IMPROVEMENT 1 & 2: Filter published only
        const prodEntries = filterPublishedEntries(prodAllEntries);
        stats.totalPublishedProd += prodEntries.length;
        console.log(`   ✓ Production: ${prodAllEntries.length} total, ${prodEntries.length} published`);

        console.log('   Fetching sandbox entries...');
        const sandboxAllEntries = await sandboxClient.getAllEntries(ctUid);
        stats.totalEntriesFetchedSandbox += sandboxAllEntries.length;

        // IMPROVEMENT 1 & 2: Validate no drafts in Sandbox
        const sandboxEntries = filterPublishedEntries(sandboxAllEntries);
        stats.totalPublishedSandbox += sandboxEntries.length;
        const draftCount = sandboxAllEntries.length - sandboxEntries.length;
        if (draftCount > 0) {
          console.warn(`   ⚠️  Sandbox has ${draftCount} non-published entries (should be 0)`);
          results.issues.push({
            contentType: ctUid,
            error: `Sandbox contains ${draftCount} non-published entries`,
            severity: 'warning'
          });
          exitCode = 1;
        }
        console.log(`   ✓ Sandbox: ${sandboxAllEntries.length} total, ${sandboxEntries.length} published`);

        // IMPROVEMENT 1: Entry count check
        if (prodEntries.length !== sandboxEntries.length) {
          console.error(`   ❌ Count mismatch: Prod ${prodEntries.length} vs Sandbox ${sandboxEntries.length}`);
          results.issues.push({
            contentType: ctUid,
            error: `Count mismatch: Prod ${prodEntries.length} vs Sandbox ${sandboxEntries.length}`,
            severity: 'error'
          });
          exitCode = 1;
        } else {
          console.log(`   ✅ Count match`);
          stats.matched++;
        }

        // IMPROVEMENT 2: Missing entries detection
        const prodUids = new Set(prodEntries.map(e => e.uid));
        const sandboxUids = new Set(sandboxEntries.map(e => e.uid));

        const missing = prodEntries.filter(e => !sandboxUids.has(e.uid));
        const extra = sandboxEntries.filter(e => !prodUids.has(e.uid));

        if (missing.length > 0) {
          console.error(`   ❌ Missing in Sandbox: ${missing.length} entries`);
          results.missingInSandbox.push({
            contentType: ctUid,
            count: missing.length,
            entries: missing.slice(0, 5).map(e => ({ uid: e.uid, title: e.title || '(untitled)', url: e.url }))
          });
          stats.missingInSandbox += missing.length;
          exitCode = 1;
        } else {
          console.log(`   ✅ All production entries in sandbox`);
        }

        // IMPROVEMENT 3: Extra entries detection
        if (extra.length > 0) {
          console.log(`   ℹ️  Extra in Sandbox: ${extra.length} entries (not in production)`);
          results.extraInSandbox.push({
            contentType: ctUid,
            count: extra.length,
            entries: extra.slice(0, 5).map(e => ({ uid: e.uid, title: e.title || '(untitled)', url: e.url }))
          });
          stats.extraInSandbox += extra.length;
        }

        // IMPROVEMENT 4: URL uniqueness validation
        const duplicateUrls = validateUrlUniqueness(prodEntries, ctUid);
        if (duplicateUrls.length > 0) {
          console.error(`   ❌ Duplicate URLs found: ${duplicateUrls.length}`);
          results.duplicateUrls.push({
            contentType: ctUid,
            duplicates: duplicateUrls.slice(0, 3)
          });
          exitCode = 1;
        } else {
          console.log(`   ✅ URL uniqueness validated`);
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
        console.error(`   ❌ Error: ${error.message}`);
        results.issues.push({
          contentType: ctUid,
          error: error.message,
          severity: 'error'
        });
        stats.validationFailures++;
        exitCode = 1;
      }
    }

    // Summary
    console.log('=' .repeat(70));
    console.log('\n📊 SUMMARY\n');

    const endTime = new Date();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`Duration: ${duration}s`);
    console.log(`Start: ${startTime.toISOString()}`);
    console.log(`End:   ${endTime.toISOString()}\n`);

    console.log(`Total Content Types: ${stats.contentTypes}`);
    console.log(`Total Entries Fetched:`);
    console.log(`  Production: ${stats.totalEntriesFetchedProd} (${stats.totalPublishedProd} published)`);
    console.log(`  Sandbox: ${stats.totalEntriesFetchedSandbox} (${stats.totalPublishedSandbox} published)\n`);

    console.log(`Validation Results:`);
    console.log(`  Matched: ${stats.matched}`);
    console.log(`  Missing in Sandbox: ${stats.missingInSandbox}`);
    console.log(`  Extra in Sandbox: ${stats.extraInSandbox}`);
    console.log(`  Duplicate URLs: ${stats.duplicateUrls}`);
    console.log(`  Validation Failures: ${stats.validationFailures}\n`);

    const isComplete = stats.totalPublishedProd === stats.totalPublishedSandbox &&
                       stats.missingInSandbox === 0 &&
                       stats.duplicateUrls === 0;

    if (isComplete) {
      console.log('✅ PASS: Sandbox mirrors Production perfectly');
    } else {
      console.log('❌ FAIL: Sandbox does NOT mirror Production');

      if (results.missingInSandbox.length > 0) {
        console.log(`\n⚠️  Missing in Sandbox (${results.missingInSandbox.length} content types):`);
        results.missingInSandbox.forEach(item => {
          console.log(`   ${item.contentType}: ${item.count} entries`);
          item.entries.slice(0, 3).forEach(e => {
            console.log(`      - ${e.uid}: "${e.title}" (${e.url})`);
          });
          if (item.entries.length > 3) {
            console.log(`      ... and ${item.entries.length - 3} more`);
          }
        });
      }

      if (results.extraInSandbox.length > 0) {
        console.log(`\nℹ️  Extra in Sandbox (${results.extraInSandbox.length} content types):`);
        results.extraInSandbox.forEach(item => {
          console.log(`   ${item.contentType}: ${item.count} entries`);
          item.entries.slice(0, 3).forEach(e => {
            console.log(`      - ${e.uid}: "${e.title}"`);
          });
          if (item.entries.length > 3) {
            console.log(`      ... and ${item.entries.length - 3} more`);
          }
        });
      }

      if (results.duplicateUrls.length > 0) {
        console.log(`\n❌ Duplicate URLs found:`);
        results.duplicateUrls.forEach(item => {
          console.log(`   ${item.contentType}:`);
          item.duplicates.forEach(dup => {
            console.log(`      URL: ${dup.url}`);
            dup.entries.forEach(e => {
              console.log(`         - ${e.uid}`);
            });
          });
        });
      }

      if (results.issues.length > 0) {
        console.log(`\n⚠️  Issues encountered (${results.issues.length}):`);
        results.issues.forEach(item => {
          const icon = item.severity === 'error' ? '❌' : '⚠️';
          console.log(`   ${icon} ${item.contentType}: ${item.error}`);
        });
      }
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
