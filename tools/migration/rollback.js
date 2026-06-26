#!/usr/bin/env node
'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const ContentstackAPI = require('./utils/contentstack-api');
const logger = require('./utils/logger');

const DRY_RUN = process.env.SYNC_DRY_RUN === 'true';

const destApi = new ContentstackAPI(
  process.env.APIDOCS_SANDBOX_STACK_API_KEY,
  process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN,
  process.env.APIDOCS_SANDBOX_STACK_REGION
);

// ── Helpers ──────────────────────────────────────────────────────────────────

function listBackups() {
  const backupRoot = process.env.BACKUP_DIR || './backups';
  if (!fs.existsSync(backupRoot)) return [];
  return fs.readdirSync(backupRoot)
    .filter(d => fs.statSync(path.join(backupRoot, d)).isDirectory())
    .sort()
    .reverse();
}

function loadBackup(backupDir) {
  const read = filename => {
    const p = path.join(backupDir, filename);
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : [];
  };
  return {
    contentTypes: read('content-types.json'),
    globalFields: read('global-fields.json'),
  };
}

const STRIP = ['created_at', 'updated_at', 'created_by', 'updated_by', '_version', 'last_activity', 'DEFAULT_ACL', 'SYS_ACL', 'abilities'];
const strip = obj => {
  const clean = { ...obj };
  STRIP.forEach(k => delete clean[k]);
  return clean;
};

// ── Restore workers ───────────────────────────────────────────────────────────

async function restoreGlobalFields(backupGFs, currentGFs) {
  const currentMap = Object.fromEntries(currentGFs.map(g => [g.uid, g]));
  const stats = { created: 0, updated: 0, failed: 0 };

  for (const gf of backupGFs) {
    const clean = strip(gf);
    logger.info(`  [GF] Restoring: ${gf.uid}`);
    if (DRY_RUN) { stats.updated++; continue; }
    try {
      if (currentMap[gf.uid]) {
        await destApi.updateGlobalField(gf.uid, clean);
        stats.updated++;
        logger.success(`    ✓ Updated ${gf.uid}`);
      } else {
        await destApi.createGlobalField(clean);
        stats.created++;
        logger.success(`    ✓ Created ${gf.uid}`);
      }
    } catch (err) {
      stats.failed++;
      logger.error(`    ✗ Failed ${gf.uid}: ${err.response?.data?.error_message || err.message}`);
    }
  }
  return stats;
}

async function restoreContentTypes(backupCTs, currentCTs) {
  const currentMap = Object.fromEntries(currentCTs.map(c => [c.uid, c]));
  const stats = { created: 0, updated: 0, failed: 0 };

  for (const ct of backupCTs) {
    const clean = strip(ct);
    logger.info(`  [CT] Restoring: ${ct.uid}`);
    if (DRY_RUN) { stats.updated++; continue; }
    try {
      if (currentMap[ct.uid]) {
        await destApi.updateContentType(ct.uid, clean);
        stats.updated++;
        logger.success(`    ✓ Updated ${ct.uid}`);
      } else {
        await destApi.createContentType(clean);
        stats.created++;
        logger.success(`    ✓ Created ${ct.uid}`);
      }
    } catch (err) {
      stats.failed++;
      logger.error(`    ✗ Failed ${ct.uid}: ${err.response?.data?.error_message || err.message}`);
    }
  }
  return stats;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function runRollback() {
  logger.separator();
  logger.info(`Starting rollback${DRY_RUN ? ' [DRY RUN]' : ''}...`);
  logger.separator();

  // Resolve backup to use
  const backupArg = process.argv[2]; // node rollback.js <backup-dir-name>
  const backupRoot = process.env.BACKUP_DIR || './backups';
  let backupPath;

  if (backupArg) {
    backupPath = path.isAbsolute(backupArg) ? backupArg : path.join(backupRoot, backupArg);
    if (!fs.existsSync(backupPath)) {
      logger.error(`Backup not found: ${backupPath}`);
      process.exit(1);
    }
  } else {
    const backups = listBackups();
    if (!backups.length) {
      logger.error(`No backups found in ${backupRoot}. Cannot rollback.`);
      process.exit(1);
    }
    backupPath = path.join(backupRoot, backups[0]);
    logger.info(`No backup specified — using most recent: ${backups[0]}`);
  }

  logger.info(`Rolling back to: ${backupPath}`);
  const backup = loadBackup(backupPath);
  logger.success(`Backup loaded — ${backup.contentTypes.length} CTs, ${backup.globalFields.length} GFs`);

  // List available backups for reference
  const allBackups = listBackups();
  if (allBackups.length > 1) {
    logger.info('\nAvailable backups (newest first):');
    allBackups.forEach((b, i) => logger.info(`  ${i === 0 ? '→ ' : '  '}${b}`));
  }

  // Fetch current destination state
  logger.info('\nFetching current destination state...');
  const [currentCTs, currentGFs] = await Promise.all([
    destApi.getContentTypes(),
    destApi.getGlobalFields(),
  ]);

  // Restore: global fields first (dependency order)
  logger.info('\nRestoring global fields...');
  const gfStats = await restoreGlobalFields(backup.globalFields, currentGFs);

  logger.info('\nRestoring content types...');
  const ctStats = await restoreContentTypes(backup.contentTypes, currentCTs);

  // Summary
  logger.separator();
  logger.success(`\nRollback ${DRY_RUN ? 'dry run ' : ''}complete!`);
  logger.info('\nGlobal Fields:');
  logger.info(`  Created: ${gfStats.created}  Updated: ${gfStats.updated}  Failed: ${gfStats.failed}`);
  logger.info('\nContent Types:');
  logger.info(`  Created: ${ctStats.created}  Updated: ${ctStats.updated}  Failed: ${ctStats.failed}`);

  const totalFailed = gfStats.failed + ctStats.failed;
  if (totalFailed > 0) {
    logger.warn(`\n${totalFailed} item(s) failed to restore — check errors above.`);
  } else {
    logger.success('\nAll items restored successfully.');
  }
  logger.separator();

  process.exit(totalFailed > 0 ? 1 : 0);
}

runRollback().catch(err => {
  logger.error(`Rollback failed: ${err.message}`);
  if (err.response?.data) logger.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
