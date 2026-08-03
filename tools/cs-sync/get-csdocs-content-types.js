#!/usr/bin/env node

/**
 * Fetch all content types from CS Docs production stack
 * Helps identify what content types need to be synced
 */

import https from 'https';

const PROD_CSDOCS_STACK = 'blt2d43f51baca745a8';
const PROD_CSDOCS_TOKEN = 'cs80888179b9220bd7cea067ff';

function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.contentstack.io',
      path,
      method: options.method || 'GET',
      headers: {
        'api_key': PROD_CSDOCS_STACK,
        'authorization': options.auth || PROD_CSDOCS_TOKEN,
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

async function getContentTypes() {
  console.log('📋 Fetching content types from Prod CS Docs stack...\n');
  console.log(`Stack ID: ${PROD_CSDOCS_STACK}\n`);

  try {
    const path = `/v3/content_types?limit=100`;
    const res = await request(path);

    if (res.status !== 200) {
      console.error(`❌ Error: ${res.status}`);
      console.error(res.data);
      process.exit(1);
    }

    const contentTypes = res.data.content_types || [];

    console.log(`✅ Found ${contentTypes.length} content types:\n`);

    contentTypes.forEach(ct => {
      console.log(`  - ${ct.uid}`);
    });

    console.log('\n\n📝 Format for scripts:\n');
    console.log('const CONTENT_TYPES = [');
    contentTypes.forEach(ct => {
      console.log(`  '${ct.uid}',`);
    });
    console.log('];');

  } catch (e) {
    console.error('❌ Failed:', e.message);
    process.exit(1);
  }
}

getContentTypes();
