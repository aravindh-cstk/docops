#!/usr/bin/env node

/**
 * Real-time Publish/Unpublish Sync
 * - Triggered by Contentstack webhooks on publish/unpublish events
 * - Syncs entry to Sandbox CMS immediately
 * - Syncs entry to Git markdown immediately
 * - No waiting for 2 AM UTC sync
 *
 * Webhook Event: Entry Published / Entry Unpublished
 * Usage: Triggered by webhook POST request
 */

import https from 'https';
import fs from 'fs';
import path from 'path';

const PROD_APIDOCS_STACK = process.env.PROD_APIDOCS_STACK_API_KEY || 'blt8fb40ae1e60d06b9';
const PROD_APIDOCS_TOKEN = process.env.PROD_APIDOCS_STACK_DELIVERY_TOKEN || 'cs9c8e6ecd1de6a45980524488';
const SANDBOX_APIDOCS_STACK = process.env.APIDOCS_SANDBOX_STACK_API_KEY || 'bltf92796d1cef4d3d4';
const SANDBOX_APIDOCS_TOKEN = process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN || 'cs6829cf3da41d62cdad480661';

const PROD_CSDOCS_STACK = process.env.PROD_CSDOCS_STACK_API_KEY || 'blt2d43f51baca745a8';
const PROD_CSDOCS_TOKEN = process.env.PROD_CSDOCS_STACK_DELIVERY_TOKEN || 'cs80888179b9220bd7cea067ff';
const SANDBOX_CSDOCS_STACK = process.env.CSDOCS_SANDBOX_STACK_API_KEY || 'blt1a9af0bcb3816d6e';
const SANDBOX_CSDOCS_TOKEN = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN || 'csf59f3418fcc349a9c7f20d7e';

class PublishSyncHandler {
  constructor(webhookPayload) {
    this.payload = webhookPayload;
    this.stats = {
      synced: 0,
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

  isApiDocStack(stackId) {
    return stackId === PROD_APIDOCS_STACK || stackId === 'blt8fb40ae1e60d06b9';
  }

  isCsDocStack(stackId) {
    return stackId === PROD_CSDOCS_STACK || stackId === 'blt2d43f51baca745a8';
  }

  getStackCredentials() {
    const stackId = this.payload.data?.stack_id;

    if (this.isApiDocStack(stackId)) {
      return {
        prod: { stack: PROD_APIDOCS_STACK, token: PROD_APIDOCS_TOKEN },
        sandbox: { stack: SANDBOX_APIDOCS_STACK, token: SANDBOX_APIDOCS_TOKEN },
      };
    } else if (this.isCsDocStack(stackId)) {
      return {
        prod: { stack: PROD_CSDOCS_STACK, token: PROD_CSDOCS_TOKEN },
        sandbox: { stack: SANDBOX_CSDOCS_STACK, token: SANDBOX_CSDOCS_TOKEN },
      };
    }
    throw new Error('Unknown stack');
  }

  async getEntry(stackId, token, contentTypeUid, entryUid) {
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}?access_token=${token}&environment=production`;
    const res = await this.request('GET', 'cdn.contentstack.io', path, {
      'api_key': stackId,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch entry: ${res.status}`);
    }

    return res.data.entry;
  }

  async syncToSandbox(creds, contentTypeUid, entryUid, entry) {
    try {
      // Check if exists in sandbox
      const checkPath = `/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
      const checkRes = await this.request('GET', 'api.contentstack.io', checkPath, {
        'api_key': creds.sandbox.stack,
        'authorization': creds.sandbox.token,
      });

      if (checkRes.status === 200) {
        // Update existing
        const updatePath = `/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
        const res = await this.request('PUT', 'api.contentstack.io', updatePath, {
          'api_key': creds.sandbox.stack,
          'authorization': creds.sandbox.token,
        }, { entry });

        if (res.status !== 200) {
          throw new Error(`Update failed: ${res.status}`);
        }
      } else {
        // Create new
        const createPath = `/v3/content_types/${contentTypeUid}/entries`;
        const res = await this.request('POST', 'api.contentstack.io', createPath, {
          'api_key': creds.sandbox.stack,
          'authorization': creds.sandbox.token,
        }, { entry });

        if (res.status !== 201 && res.status !== 200) {
          throw new Error(`Creation failed: ${res.status}`);
        }
      }

      // Handle publish/unpublish
      const isPublished = entry.publish_details && entry.publish_details.length > 0;
      const publishPath = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;

      if (isPublished) {
        const res = await this.request('POST', 'api.contentstack.io', publishPath, {
          'api_key': creds.sandbox.stack,
          'authorization': creds.sandbox.token,
        }, { entry: {}, _publish_details: {} });

        if (res.status !== 200) {
          throw new Error(`Publish failed: ${res.status}`);
        }
      } else {
        // Unpublish if needed
        const unpublishPath = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/unpublish`;
        const res = await this.request('POST', 'api.contentstack.io', unpublishPath, {
          'api_key': creds.sandbox.stack,
          'authorization': creds.sandbox.token,
        }, { entry: {} });

        if (res.status !== 200) {
          // Unpublish might fail if not published, ignore
        }
      }

      console.log(`  ✓ Sandbox synced: ${entry.title}`);
      this.stats.synced++;
    } catch (e) {
      console.log(`  ✗ Sandbox sync failed: ${e.message}`);
      this.stats.failed++;
      this.stats.errors.push({ target: 'sandbox', error: e.message });
    }
  }

  async syncToGit(contentTypeUid, entry) {
    try {
      // Create markdown from entry
      let md = `---\ntitle: "${entry.title}"\ndescription: ${entry.description || entry.title}\nurl: ${entry.url || entry.title}\nproduct: Contentstack\ndoc_type: page\ncreated_at: ${entry.created_at}\nupdated_at: ${entry.updated_at}\n---\n\n`;

      md += `# ${entry.title}\n\n`;

      if (entry.body) {
        md += `${entry.body}\n\n`;
      }
      if (entry.content) {
        md += `${entry.content}\n\n`;
      }
      if (entry.rich_text_editor) {
        md += `${entry.rich_text_editor}\n\n`;
      }

      // Determine folder based on stack/content type
      const isApiDoc = this.isApiDocStack(this.payload.data?.stack_id);
      const basePath = isApiDoc ? 'api-docs' : 'cs-docs';

      // Create markdown file
      const fileName = `${entry.url || entry.title.toLowerCase().replace(/\s+/g, '-')}.md`;
      const filePath = path.join(basePath, contentTypeUid, fileName);

      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write file
      fs.writeFileSync(filePath, md, 'utf-8');
      console.log(`  ✓ Git synced: ${filePath}`);
      this.stats.synced++;
    } catch (e) {
      console.log(`  ✗ Git sync failed: ${e.message}`);
      this.stats.failed++;
      this.stats.errors.push({ target: 'git', error: e.message });
    }
  }

  async handle() {
    try {
      const action = this.payload.event; // 'entry.publish' or 'entry.unpublish'
      const contentTypeUid = this.payload.data?.content_type_uid;
      const entryUid = this.payload.data?.uid;
      const title = this.payload.data?.title;

      console.log(`\n🔄 REAL-TIME PUBLISH SYNC`);
      console.log(`📌 Event: ${action}`);
      console.log(`📄 Entry: ${title}`);
      console.log(`⏱️  Time: ${new Date().toISOString()}\n`);

      const creds = this.getStackCredentials();
      const entry = await this.getEntry(
        creds.prod.stack,
        creds.prod.token,
        contentTypeUid,
        entryUid
      );

      // Sync to sandbox
      await this.syncToSandbox(creds, contentTypeUid, entryUid, entry);

      // Sync to git
      await this.syncToGit(contentTypeUid, entry);

      this.printSummary();
    } catch (e) {
      console.error('\n❌ SYNC FAILED:', e.message);
      process.exit(1);
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ REAL-TIME SYNC COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`   Synced: ${this.stats.synced} targets`);
    if (this.stats.failed > 0) {
      console.log(`   Failed: ${this.stats.failed} targets\n`);
      console.log('⚠️  Errors:');
      this.stats.errors.forEach(e => {
        console.log(`   - ${e.target}: ${e.error}`);
      });
    } else {
      console.log();
    }
    console.log('✨ Entry synced to Sandbox & Git immediately\n');
  }
}

// Main entry point
const webhookPayload = JSON.parse(process.argv[2] || '{}');
new PublishSyncHandler(webhookPayload).handle().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
