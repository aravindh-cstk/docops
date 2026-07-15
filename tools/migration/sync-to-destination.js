#!/usr/bin/env node
'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const ContentstackAPI = require('./utils/contentstack-api');
const logger = require('./utils/logger');

const DRY_RUN = process.env.SYNC_DRY_RUN === 'true';

const destApi = new ContentstackAPI(
  process.env.APIDOCS_SANDBOX_STACK_API_KEY,
  process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN,
  process.env.APIDOCS_SANDBOX_STACK_REGION
);

// ── Helpers ──────────────────────────────────────────────────────────────────

function latestExportDir() {
  const exportRoot = process.env.EXPORT_DIR || './exports';
  const dirs = fs.readdirSync(exportRoot)
    .filter(d => {
      const full = path.join(exportRoot, d);
      return fs.statSync(full).isDirectory() && d !== 'diffs' && d !== 'backups';
    })
    .sort()
    .reverse();
  if (!dirs.length) throw new Error(`No exports found. Run "npm run export" first.`);
  return path.join(exportRoot, dirs[0]);
}

function loadExport(exportDir) {
  const read = filename => {
    const p = path.join(exportDir, filename);
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null;
  };
  return {
    contentTypes: read('content-types.json') || [],
    globalFields: read('global-fields.json') || [],
    entries: read('entries.json') || {},
  };
}

function loadLatestDiff() {
  const latestFile = path.join(process.env.EXPORT_DIR || './exports', 'diffs', 'latest.json');
  if (!fs.existsSync(latestFile)) return null;
  return JSON.parse(fs.readFileSync(latestFile, 'utf8'));
}

function stripImportFields(obj) {
  const STRIP = [
    'created_at', 'updated_at', 'created_by', 'updated_by',
    '_version', 'last_activity', 'DEFAULT_ACL', 'SYS_ACL', 'abilities',
  ];
  return _.omit(obj, STRIP);
}

async function createBackup(destCTs, destGFs) {
  const backupDir = path.join(process.env.BACKUP_DIR || './backups', new Date().toISOString().replace(/[:.]/g, '-'));
  fs.mkdirSync(backupDir, { recursive: true });
  fs.writeFileSync(path.join(backupDir, 'content-types.json'), JSON.stringify(destCTs, null, 2));
  fs.writeFileSync(path.join(backupDir, 'global-fields.json'), JSON.stringify(destGFs, null, 2));
  logger.info(`Backup saved to: ${backupDir}`);
  return backupDir;
}

// ── Sync workers ──────────────────────────────────────────────────────────────

async function syncGlobalFields(diff) {
  const stats = { created: 0, updated: 0, failed: 0 };

  for (const { uid, item } of diff.created) {
    logger.info(`  [GF] Creating: ${uid}`);
    if (!DRY_RUN) {
      try {
        await destApi.createGlobalField(stripImportFields(item));
        stats.created++;
        logger.success(`    ✓ Created ${uid}`);
      } catch (err) {
        stats.failed++;
        logger.error(`    ✗ Failed to create ${uid}: ${err.response?.data?.error_message || err.message}`);
      }
    } else {
      stats.created++;
    }
  }

  for (const { uid, source } of diff.updated) {
    logger.info(`  [GF] Updating: ${uid}`);
    if (!DRY_RUN) {
      try {
        await destApi.updateGlobalField(uid, stripImportFields(source));
        stats.updated++;
        logger.success(`    ✓ Updated ${uid}`);
      } catch (err) {
        stats.failed++;
        logger.error(`    ✗ Failed to update ${uid}: ${err.response?.data?.error_message || err.message}`);
      }
    } else {
      stats.updated++;
    }
  }

  if (diff.deleted.length) {
    logger.warn(`  [GF] Skipping ${diff.deleted.length} item(s) only in destination (not deleting to preserve safety)`);
  }

  return stats;
}

async function syncContentTypes(diff) {
  const stats = { created: 0, updated: 0, failed: 0 };

  for (const { uid, item } of diff.created) {
    logger.info(`  [CT] Creating: ${uid}`);
    if (!DRY_RUN) {
      try {
        await destApi.createContentType(stripImportFields(item));
        stats.created++;
        logger.success(`    ✓ Created ${uid}`);
      } catch (err) {
        stats.failed++;
        logger.error(`    ✗ Failed to create ${uid}: ${err.response?.data?.error_message || err.message}`);
      }
    } else {
      stats.created++;
    }
  }

  for (const { uid, source } of diff.updated) {
    logger.info(`  [CT] Updating: ${uid}`);
    if (!DRY_RUN) {
      try {
        await destApi.updateContentType(uid, stripImportFields(source));
        stats.updated++;
        logger.success(`    ✓ Updated ${uid}`);
      } catch (err) {
        stats.failed++;
        logger.error(`    ✗ Failed to update ${uid}: ${err.response?.data?.error_message || err.message}`);
      }
    } else {
      stats.updated++;
    }
  }

  if (diff.deleted.length) {
    logger.warn(`  [CT] Skipping ${diff.deleted.length} item(s) only in destination (not deleting to preserve safety)`);
  }

  return stats;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function runSync() {
  logger.separator();
  logger.info(`Starting stack sync${DRY_RUN ? ' [DRY RUN — no changes will be made]' : ''}...`);
  logger.separator();

  // Load source
  const exportDir = latestExportDir();
  logger.info(`Loading source export from: ${exportDir}`);
  const source = loadExport(exportDir);
  logger.success(`Source loaded — ${source.contentTypes.length} CTs, ${source.globalFields.length} GFs`);

  // Load or compute diff
  let diff = loadLatestDiff();
  if (!diff) {
    logger.warn('No diff report found. Run "npm run diff" first for a preview. Proceeding with full sync...');
    const [destCTs, destGFs] = await Promise.all([
      destApi.getContentTypes(),
      destApi.getGlobalFields(),
    ]);
    const { diffCollection } = require('./diff-stacks'); // reuse if available, else inline
    diff = {
      globalFields: { created: source.globalFields.map(g => ({ uid: g.uid, item: g })), updated: [], deleted: [] },
      contentTypes: { created: source.contentTypes.map(c => ({ uid: c.uid, item: c })), updated: [], deleted: [] },
    };
  } else {
    logger.info(`Using diff from: ${diff.generatedAt}`);
  }

  const totalChanges =
    diff.globalFields.created.length + diff.globalFields.updated.length +
    diff.contentTypes.created.length + diff.contentTypes.updated.length;

  if (totalChanges === 0) {
    logger.success('Nothing to sync — stacks are already in sync.');
    process.exit(0);
  }

  logger.info(`\nPlanned: ${diff.globalFields.created.length + diff.globalFields.updated.length} GF changes, ${diff.contentTypes.created.length + diff.contentTypes.updated.length} CT changes\n`);

  // Backup current destination state before modifying
  if (!DRY_RUN) {
    logger.info('Creating backup of current destination state...');
    const [destCTs, destGFs] = await Promise.all([
      destApi.getContentTypes(),
      destApi.getGlobalFields(),
    ]);
    const backupDir = await createBackup(destCTs, destGFs);
    logger.success(`Backup complete: ${backupDir}`);
  }

  // Sync global fields first (content types may reference them)
  logger.info('\nSyncing global fields...');
  const gfStats = await syncGlobalFields(diff.globalFields);

  // Then content types
  logger.info('\nSyncing content types...');
  const ctStats = await syncContentTypes(diff.contentTypes);

  // Summary
  logger.separator();
  logger.success(`\nSync ${DRY_RUN ? 'dry run ' : ''}complete!`);
  logger.info('\nGlobal Fields:');
  logger.info(`  Created: ${gfStats.created}  Updated: ${gfStats.updated}  Failed: ${gfStats.failed}`);
  logger.info('Content Types:');
  logger.info(`  Created: ${ctStats.created}  Updated: ${ctStats.updated}  Failed: ${ctStats.failed}`);

  const totalFailed = gfStats.failed + ctStats.failed;
  if (totalFailed > 0) {
    logger.warn(`\n${totalFailed} item(s) failed — check errors above.`);
  }
  logger.separator();

  process.exit(totalFailed > 0 ? 1 : 0);
}

runSync().catch(err => {
  logger.error(`Sync failed: ${err.message}`);
  if (err.response?.data) logger.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
