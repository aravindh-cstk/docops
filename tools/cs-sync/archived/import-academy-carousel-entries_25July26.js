#!/usr/bin/env node

/**
 * Import academy_content_carousal entries from exported JSON
 * - Batch creates entries in sandbox
 * - Auto-publishes published entries
 */

import https from 'https';
import fs from 'fs';

const SANDBOX_CSDOCS_STACK = process.env.CSDOCS_SANDBOX_STACK_API_KEY || 'blt1a9af0bcb3816d6e';
const SANDBOX_CSDOCS_TOKEN = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN || 'csf59f3418fcc349a9c7f20d7e';

class AcademyCarouselImporter {
  constructor(jsonFile) {
    this.jsonFile = jsonFile;
    this.stats = {
      imported: 0,
      published: 0,
      failed: 0,
      errors: [],
    };
  }

  request(method, host, path, headers = {}, body = null) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: host,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
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
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  async createEntry(contentTypeUid, entryData) {
    const path = `/v3/content_types/${contentTypeUid}/entries`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { entry: entryData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Creation failed'}`);
    }

    return res.data.entry;
  }

  async publishEntry(contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { entry: {}, _publish_details: {} });

    if (res.status !== 200) {
      throw new Error(`Publish failed: ${res.status}`);
    }
  }

  cleanEntry(entry) {
    // Remove system fields that shouldn't be imported
    const {
      _version,
      _content_type_uid,
      locale,
      ACL,
      _in_progress,
      _validations,
      created_at,
      created_by,
      updated_at,
      updated_by,
      publish_details,
      branch,
      _locales,
      ...clean
    } = entry;

    return clean;
  }

  async importEntries() {
    console.log('\n📦 IMPORTING ACADEMY CAROUSEL ENTRIES\n');

    // Read JSON file
    let data;
    try {
      const content = fs.readFileSync(this.jsonFile, 'utf-8');
      data = JSON.parse(content);
    } catch (e) {
      console.error('❌ Failed to read JSON file:', e.message);
      process.exit(1);
    }

    const entries = data.entries || [];
    console.log(`Found ${entries.length} entries to import\n`);

    for (const entry of entries) {
      try {
        const clean = this.cleanEntry(entry);
        const contentTypeUid = 'academy_content_carousal'; // Use correct UID

        console.log(`Creating: ${entry.title}`);
        const created = await this.createEntry(contentTypeUid, clean);
        this.stats.imported++;

        // Publish if it was published in production
        if (entry.publish_details && entry.publish_details.length > 0) {
          try {
            await this.publishEntry(contentTypeUid, created.uid);
            this.stats.published++;
            console.log(`  ✓ Published`);
          } catch (e) {
            console.log(`  ⚠️  Publish failed: ${e.message}`);
          }
        }
      } catch (e) {
        console.log(`✗ Failed: ${e.message}`);
        this.stats.failed++;
        this.stats.errors.push({ entry: entry.title, error: e.message });
      }
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ IMPORT COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`   Imported:  ${this.stats.imported} entries`);
    console.log(`   Published: ${this.stats.published} entries`);
    if (this.stats.failed > 0) {
      console.log(`   Failed:    ${this.stats.failed} entries\n`);
      console.log('⚠️  Errors:');
      this.stats.errors.forEach(e => {
        console.log(`   - ${e.entry}: ${e.error}`);
      });
    } else {
      console.log();
    }
    console.log('✨ Academy Carousel entries imported to Sandbox\n');
  }

  async run() {
    console.log('🚀 IMPORTING ACADEMY CAROUSEL ENTRIES');
    console.log(`📄 File: ${this.jsonFile}`);
    console.log(`📍 Sandbox: ${SANDBOX_CSDOCS_STACK}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      await this.importEntries();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ IMPORT FAILED:', e.message);
      process.exit(1);
    }
  }
}

// Get JSON file path from command line or use default
const jsonFile = process.argv[2] || '/Users/gladys.daniel/Downloads/entries 2/entries_000000_to_000018.json';

new AcademyCarouselImporter(jsonFile).run();
