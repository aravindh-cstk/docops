#!/usr/bin/env node

import https from 'https';

const PROD_STACK_UID = 'blt8fb40ae1e60d06b9';
const PROD_DELIVERY_TOKEN = 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_STACK_UID = 'bltf92796d1cef4d3d4';
const SANDBOX_MGMT_TOKEN = 'cs6829cf3da41d62cdad480661';

function request(method, host, path, headers = {}, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: host,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = data ? JSON.parse(data) : {};
          resolve({ status: res.statusCode, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, data, error: e.message });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function test() {
  console.log('🧪 Testing Contentstack API Connectivity\n');

  // Test 1: Production CDA
  console.log('1️⃣  Testing Production CDA...');
  console.log(`   Stack API Key: ${PROD_STACK_UID}`);
  console.log(`   Delivery Token: ${PROD_DELIVERY_TOKEN.substring(0, 10)}...`);
  try {
    // Try with stack_api_key parameter
    const cdaQuery = `/v3/content_types/api_requests_cma/entries?access_token=${PROD_DELIVERY_TOKEN}&environment=production&skip=0&limit=1`;
    const cdaRes = await request('GET', 'cdn.contentstack.io', cdaQuery, {});
    console.log(`   Status: ${cdaRes.status}`);
    console.log(`   Response:`, JSON.stringify(cdaRes.data).substring(0, 200));
    if (cdaRes.status === 200) {
      console.log(`   ✅ CDA authentication works`);
      if (cdaRes.data.entries) {
        console.log(`   📊 Found ${cdaRes.data.entries.length} published entries`);
      }
    } else {
      console.log(`   ❌ Error: ${cdaRes.data.error_message || 'See response above'}`);
    }
  } catch (e) {
    console.log(`   ❌ Connection failed: ${e.message}`);
  }

  // Test 2: Sandbox CMA
  console.log('\n2️⃣  Testing Sandbox CMA (management token)...');
  try {
    const cmaRes = await request(
      'GET',
      'api.contentstack.io',
      `/v3/content_types`,
      {
        'authorization': SANDBOX_MGMT_TOKEN,
        'x-stack-api-key': SANDBOX_STACK_UID,
      }
    );
    console.log(`   Status: ${cmaRes.status}`);
    if (cmaRes.status === 200) {
      console.log(`   ✅ CMA authentication works`);
      if (cmaRes.data.content_types) {
        console.log(`   📊 Found ${cmaRes.data.content_types.length} content types in sandbox`);
      }
    } else {
      console.log(`   ❌ Error: ${cmaRes.data.error_message || 'Unknown error'}`);
    }
  } catch (e) {
    console.log(`   ❌ Connection failed: ${e.message}`);
  }

  console.log('\n✨ Tests complete\n');
}

test().catch(e => {
  console.error('Test failed:', e.message);
  process.exit(1);
});
