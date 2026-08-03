#!/usr/bin/env node

/**
 * Migrate Settings & Extensions: Production CS Docs → Sandbox CS Docs
 * - Webhooks, Extensions, Variables, Workflows
 * - Production remains READ-ONLY
 *
 * Usage: node migrate-csdocs-settings_25July26.js
 */

import https from 'https';

const PROD_CSDOCS_STACK = process.env.PROD_CSDOCS_STACK_API_KEY || 'blt2d43f51baca745a8';
const PROD_CSDOCS_TOKEN = process.env.PROD_CSDOCS_STACK_DELIVERY_TOKEN || 'cs80888179b9220bd7cea067ff';
const SANDBOX_CSDOCS_STACK = process.env.CSDOCS_SANDBOX_STACK_API_KEY || 'blt1a9af0bcb3816d6e';
const SANDBOX_CSDOCS_TOKEN = process.env.CSDOCS_SANDBOX_MANAGEMENT_TOKEN || 'csf59f3418fcc349a9c7f20d7e';

class SettingsMigration {
  constructor() {
    this.stats = {
      extensions: { fetched: 0, created: 0, failed: 0 },
      webhooks: { fetched: 0, created: 0, failed: 0 },
      variables: { fetched: 0, created: 0, failed: 0 },
      workflows: { fetched: 0, created: 0, failed: 0 },
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

  // ==================== EXTENSIONS ====================
  async getExtensions() {
    const path = `/v3/extensions`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch extensions: ${res.status}`);
    }

    return res.data.extensions || [];
  }

  async createExtension(extensionData) {
    const path = `/v3/extensions`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { extension: extensionData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Failed'}`);
    }

    return res.data.extension;
  }

  // ==================== WEBHOOKS ====================
  async getWebhooks() {
    const path = `/v3/webhooks`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch webhooks: ${res.status}`);
    }

    return res.data.webhooks || [];
  }

  async createWebhook(webhookData) {
    const path = `/v3/webhooks`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { webhook: webhookData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Failed'}`);
    }

    return res.data.webhook;
  }

  // ==================== VARIABLES ====================
  async getVariables() {
    const path = `/v3/variables`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch variables: ${res.status}`);
    }

    return res.data.variables || [];
  }

  async createVariable(variableData) {
    const path = `/v3/variables`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { variable: variableData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Failed'}`);
    }

    return res.data.variable;
  }

  // ==================== WORKFLOWS ====================
  async getWorkflows() {
    const path = `/v3/workflows`;
    const res = await this.request('GET', 'api.contentstack.io', path, {
      'api_key': PROD_CSDOCS_STACK,
      'authorization': PROD_CSDOCS_TOKEN,
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch workflows: ${res.status}`);
    }

    return res.data.workflows || [];
  }

  async createWorkflow(workflowData) {
    const path = `/v3/workflows`;
    const res = await this.request('POST', 'api.contentstack.io', path, {
      'api_key': SANDBOX_CSDOCS_STACK,
      'authorization': SANDBOX_CSDOCS_TOKEN,
    }, { workflow: workflowData });

    if (res.status !== 201 && res.status !== 200) {
      throw new Error(`${res.status}: ${res.data.error_message || 'Failed'}`);
    }

    return res.data.workflow;
  }

  // ==================== SYNC METHODS ====================
  async syncExtensions() {
    console.log('\n🔧 SYNCING EXTENSIONS\n');
    try {
      const extensions = await this.getExtensions();
      this.stats.extensions.fetched = extensions.length;
      console.log(`✓ Fetched ${extensions.length} extensions`);

      if (extensions.length === 0) {
        console.log('  No extensions to sync');
        return;
      }

      for (const ext of extensions) {
        try {
          const { uid, created_at, updated_at, created_by, updated_by, ...clean } = ext;
          const created = await this.createExtension(clean);
          this.stats.extensions.created++;
          console.log(`  ✓ Created: ${ext.title}`);
        } catch (e) {
          console.log(`  ✗ Failed to create ${ext.title}: ${e.message}`);
          this.stats.extensions.failed++;
          this.stats.errors.push({ type: 'extension', name: ext.title, error: e.message });
        }
      }
    } catch (e) {
      console.log(`❌ Error: ${e.message}`);
      this.stats.errors.push({ type: 'extensions_fetch', error: e.message });
    }
  }

  async syncWebhooks() {
    console.log('\n📡 SYNCING WEBHOOKS\n');
    try {
      const webhooks = await this.getWebhooks();
      this.stats.webhooks.fetched = webhooks.length;
      console.log(`✓ Fetched ${webhooks.length} webhooks`);

      if (webhooks.length === 0) {
        console.log('  No webhooks to sync');
        return;
      }

      for (const webhook of webhooks) {
        try {
          const { uid, created_at, updated_at, created_by, updated_by, ...clean } = webhook;
          const created = await this.createWebhook(clean);
          this.stats.webhooks.created++;
          console.log(`  ✓ Created: ${webhook.name}`);
        } catch (e) {
          console.log(`  ✗ Failed to create ${webhook.name}: ${e.message}`);
          this.stats.webhooks.failed++;
          this.stats.errors.push({ type: 'webhook', name: webhook.name, error: e.message });
        }
      }
    } catch (e) {
      console.log(`❌ Error: ${e.message}`);
      this.stats.errors.push({ type: 'webhooks_fetch', error: e.message });
    }
  }

  async syncVariables() {
    console.log('\n🔑 SYNCING VARIABLES\n');
    try {
      const variables = await this.getVariables();
      this.stats.variables.fetched = variables.length;
      console.log(`✓ Fetched ${variables.length} variables`);

      if (variables.length === 0) {
        console.log('  No variables to sync');
        return;
      }

      for (const variable of variables) {
        try {
          const { uid, created_at, updated_at, created_by, updated_by, ...clean } = variable;
          const created = await this.createVariable(clean);
          this.stats.variables.created++;
          console.log(`  ✓ Created: ${variable.key}`);
        } catch (e) {
          console.log(`  ✗ Failed to create ${variable.key}: ${e.message}`);
          this.stats.variables.failed++;
          this.stats.errors.push({ type: 'variable', name: variable.key, error: e.message });
        }
      }
    } catch (e) {
      console.log(`❌ Error: ${e.message}`);
      this.stats.errors.push({ type: 'variables_fetch', error: e.message });
    }
  }

  async syncWorkflows() {
    console.log('\n⚙️  SYNCING WORKFLOWS\n');
    try {
      const workflows = await this.getWorkflows();
      this.stats.workflows.fetched = workflows.length;
      console.log(`✓ Fetched ${workflows.length} workflows`);

      if (workflows.length === 0) {
        console.log('  No workflows to sync');
        return;
      }

      for (const workflow of workflows) {
        try {
          const { uid, created_at, updated_at, created_by, updated_by, ...clean } = workflow;
          const created = await this.createWorkflow(clean);
          this.stats.workflows.created++;
          console.log(`  ✓ Created: ${workflow.name}`);
        } catch (e) {
          console.log(`  ✗ Failed to create ${workflow.name}: ${e.message}`);
          this.stats.workflows.failed++;
          this.stats.errors.push({ type: 'workflow', name: workflow.name, error: e.message });
        }
      }
    } catch (e) {
      console.log(`❌ Error: ${e.message}`);
      this.stats.errors.push({ type: 'workflows_fetch', error: e.message });
    }
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('✅ SETTINGS MIGRATION COMPLETE\n');
    console.log('📊 SUMMARY:');
    console.log(`\n  🔧 Extensions:`);
    console.log(`     Fetched: ${this.stats.extensions.fetched}`);
    console.log(`     Created: ${this.stats.extensions.created}`);
    if (this.stats.extensions.failed > 0) {
      console.log(`     Failed:  ${this.stats.extensions.failed}`);
    }

    console.log(`\n  📡 Webhooks:`);
    console.log(`     Fetched: ${this.stats.webhooks.fetched}`);
    console.log(`     Created: ${this.stats.webhooks.created}`);
    if (this.stats.webhooks.failed > 0) {
      console.log(`     Failed:  ${this.stats.webhooks.failed}`);
    }

    console.log(`\n  🔑 Variables:`);
    console.log(`     Fetched: ${this.stats.variables.fetched}`);
    console.log(`     Created: ${this.stats.variables.created}`);
    if (this.stats.variables.failed > 0) {
      console.log(`     Failed:  ${this.stats.variables.failed}`);
    }

    console.log(`\n  ⚙️  Workflows:`);
    console.log(`     Fetched: ${this.stats.workflows.fetched}`);
    console.log(`     Created: ${this.stats.workflows.created}`);
    if (this.stats.workflows.failed > 0) {
      console.log(`     Failed:  ${this.stats.workflows.failed}`);
    }

    if (this.stats.errors.length > 0) {
      console.log(`\n⚠️  Errors (${this.stats.errors.length}):`);
      this.stats.errors.forEach(e => {
        if (e.name) {
          console.log(`   - ${e.type}: ${e.name} → ${e.error}`);
        } else {
          console.log(`   - ${e.type}: ${e.error}`);
        }
      });
    }

    console.log('\n✨ Settings & Extensions migrated to Sandbox\n');
  }

  async run() {
    console.log('🚀 MIGRATING SETTINGS & EXTENSIONS (CS-DOCS)');
    console.log(`\n📍 Production: ${PROD_CSDOCS_STACK}`);
    console.log(`📍 Sandbox:    ${SANDBOX_CSDOCS_STACK}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      await this.syncExtensions();
      await this.syncWebhooks();
      await this.syncVariables();
      await this.syncWorkflows();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ MIGRATION FAILED:', e.message);
      process.exit(1);
    }
  }
}

new SettingsMigration().run();
