#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SANDBOX_STACK_UID = 'bltf92796d1cef4d3d4';
const SANDBOX_MGMT_TOKEN = 'cs6829cf3da41d62cdad480661';

const contentTypeDir = path.join(process.env.HOME, 'Downloads');
let stats = { created: 0, failed: 0 };

function request(method, path, headers = {}, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.contentstack.io',
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        'api_key': SANDBOX_STACK_UID,
        'authorization': SANDBOX_MGMT_TOKEN,
        ...headers,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = data ? JSON.parse(data) : {};
          if (res.statusCode >= 400) {
            reject(new Error(`${res.statusCode}: ${data}`));
          } else {
            resolve(json);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function importContentType(contentTypeJson) {
  const uid = contentTypeJson.uid;
  try {
    await request('POST', '/v3/content_types', {}, { content_type: contentTypeJson });
    console.log(`✓ ${uid}`);
    stats.created++;
  } catch (e) {
    console.log(`✗ ${uid}: ${e.message}`);
    stats.failed++;
  }
}

async function run() {
  console.log('📦 Importing Content Types to Sandbox\n');
  console.log(`Stack: ${SANDBOX_STACK_UID}\n`);

  const contentTypeFiles = fs.readdirSync(contentTypeDir)
    .filter(f => f.endsWith('.json') && (
      f.includes('api_') ||
      f.includes('main_section_') ||
      f.includes('cda_') ||
      f.includes('openapi') ||
      f.includes('postman')
    ))
    .map(f => path.join(contentTypeDir, f));

  console.log(`Found ${contentTypeFiles.length} content type files\n`);

  for (const file of contentTypeFiles) {
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      await importContentType(data);
    } catch (e) {
      console.log(`✗ ${path.basename(file)}: ${e.message}`);
      stats.failed++;
    }
  }

  console.log(`\n✅ Complete: ${stats.created} created, ${stats.failed} failed\n`);
}

run().catch(e => {
  console.error('Import failed:', e.message);
  process.exit(1);
});
