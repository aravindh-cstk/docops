require('dotenv').config();
const omit = require('lodash/omit');
const logger = require('./utils/logger');
const ContentstackAPI = require('./utils/contentstack-api');

// Fields added by Contentstack that must be stripped before creating in another stack
const STRIP_FIELDS = [
  'created_at', 'updated_at', 'created_by', 'updated_by',
  '_version', 'DEFAULT_ACL', 'SYS_ACL', 'last_activity',
  'abilities', 'inbuilt_class', 'maintain_revisions',
];

// Creation order for content types respects cross-reference dependencies:
//   method_details has no CT references → classes_reference references method_details
//   sdk_usage_guides references global field `languages` (created before CTs)
//   sdk_landing_pages references other CTs → create last
const CT_ORDER = [
  'sdk_types',
  'sdk_language',
  'method_details',
  'classes_reference',
  'sdk_usage_guides',
  'sdk_landing_pages',
];

const DRY_RUN = process.env.SYNC_DRY_RUN === 'true';

function stripSystemFields(obj) {
  return omit(obj, STRIP_FIELDS);
}

async function upsertGlobalField(sandbox, gf) {
  const clean = stripSystemFields(gf);
  const existing = await sandbox.getGlobalField(gf.uid);
  if (existing) {
    logger.info(`  Global field "${gf.uid}" already exists — updating`);
    if (!DRY_RUN) await sandbox.updateGlobalField(gf.uid, clean);
    return 'updated';
  }
  logger.info(`  Creating global field "${gf.uid}"`);
  if (!DRY_RUN) await sandbox.createGlobalField(clean);
  return 'created';
}

async function upsertContentType(sandbox, ct) {
  const clean = stripSystemFields(ct);
  const existing = await sandbox.getContentType(ct.uid);
  if (existing) {
    logger.info(`  Content type "${ct.uid}" already exists — updating`);
    if (!DRY_RUN) await sandbox.updateContentType(ct.uid, clean);
    return 'updated';
  }
  logger.info(`  Creating content type "${ct.uid}"`);
  if (!DRY_RUN) await sandbox.createContentType(clean);
  return 'created';
}

async function main() {
  logger.separator();
  logger.info('SDK Sandbox Setup');
  if (DRY_RUN) logger.warn('DRY RUN — no changes will be made');
  logger.separator();

  const production = new ContentstackAPI(
    process.env.PRODUCTION_STACK_API_KEY,
    { deliveryToken: process.env.PRODUCTION_DELIVERY_TOKEN }
  );

  const sandbox = new ContentstackAPI(
    process.env.SANDBOX_STACK_API_KEY,
    { managementToken: process.env.SANDBOX_MANAGEMENT_TOKEN }
  );

  // ── Step 1: Fetch production schema ───────────────────────────────────────
  logger.separator();
  logger.info('Step 1: Fetching production stack schema...');

  const [globalFields, contentTypes] = await Promise.all([
    production.exportGlobalFields(),
    production.exportContentTypes(),
  ]);

  logger.success(`Found ${globalFields.length} global fields, ${contentTypes.length} content types`);

  // ── Step 2: Sync global fields ────────────────────────────────────────────
  logger.separator();
  logger.info('Step 2: Syncing global fields to sandbox...');

  const gfStats = { created: 0, updated: 0, failed: 0 };
  for (const gf of globalFields) {
    try {
      const result = await upsertGlobalField(sandbox, gf);
      gfStats[result]++;
    } catch (err) {
      const msg = err.response?.data?.error_message || err.message;
      logger.error(`  Failed to upsert global field "${gf.uid}": ${msg}`);
      gfStats.failed++;
    }
  }

  // ── Step 3: Sync content types in dependency order ────────────────────────
  logger.separator();
  logger.info('Step 3: Syncing content types to sandbox...');

  // Build a map for fast lookup, then apply CT_ORDER
  const ctMap = Object.fromEntries(contentTypes.map(ct => [ct.uid, ct]));
  const orderedCTs = [
    ...CT_ORDER.map(uid => ctMap[uid]).filter(Boolean),
    ...contentTypes.filter(ct => !CT_ORDER.includes(ct.uid)), // any extra CTs not in order list
  ];

  const ctStats = { created: 0, updated: 0, failed: 0 };
  for (const ct of orderedCTs) {
    try {
      const result = await upsertContentType(sandbox, ct);
      ctStats[result]++;
    } catch (err) {
      const msg = err.response?.data?.error_message || err.message;
      logger.error(`  Failed to upsert content type "${ct.uid}": ${msg}`);
      ctStats.failed++;
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  logger.separator();
  logger.info('Summary');
  logger.separator();

  const gfLabel = DRY_RUN ? '(dry run)' : '';
  logger.info(`Global fields ${gfLabel}:`);
  logger.info(`  Created: ${gfStats.created}  Updated: ${gfStats.updated}  Failed: ${gfStats.failed}`);
  logger.info(`Content types ${gfLabel}:`);
  logger.info(`  Created: ${ctStats.created}  Updated: ${ctStats.updated}  Failed: ${ctStats.failed}`);

  if (gfStats.failed > 0 || ctStats.failed > 0) {
    logger.error('Setup completed with failures — check logs above');
    process.exit(1);
  }

  logger.success('Sandbox setup complete');
}

main().catch(err => {
  logger.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});
