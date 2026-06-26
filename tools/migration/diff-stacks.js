#!/usr/bin/env node
'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const ContentstackAPI = require('./utils/contentstack-api');
const logger = require('./utils/logger');

const destApi = new ContentstackAPI(
  process.env.APIDOCS_SANDBOX_STACK_API_KEY,
  process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN,
  process.env.APIDOCS_SANDBOX_STACK_REGION
);

// ── Helpers ──────────────────────────────────────────────────────────────────

function stripSystemFields(obj) {
  const SKIP = [
    'created_at', 'updated_at', 'created_by', 'updated_by',
    '_version', 'last_activity', 'DEFAULT_ACL', 'SYS_ACL', 'abilities',
  ];
  return _.omit(obj, SKIP);
}

function latestExportDir() {
  const exportRoot = process.env.EXPORT_DIR || './exports';
  if (!fs.existsSync(exportRoot)) {
    throw new Error(`Export directory not found: ${exportRoot}. Run "npm run export" first.`);
  }
  const dirs = fs.readdirSync(exportRoot)
    .filter(d => {
      const full = path.join(exportRoot, d);
      return fs.statSync(full).isDirectory() && d !== 'diffs' && d !== 'backups';
    })
    .sort()
    .reverse();
  if (!dirs.length) {
    throw new Error(`No exports found in ${exportRoot}. Run "npm run export" first.`);
  }
  return path.join(exportRoot, dirs[0]);
}

function loadExport(exportDir) {
  const read = filename => {
    const p = path.join(exportDir, filename);
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  };
  return {
    contentTypes: read('content-types.json') || [],
    globalFields: read('global-fields.json') || [],
    entries: read('entries.json') || {},
  };
}

function diffCollection(label, sourceItems, destItems) {
  const sourceMap = _.keyBy(sourceItems, 'uid');
  const destMap = _.keyBy(destItems, 'uid');

  const created = [];
  const updated = [];
  const deleted = [];
  const unchanged = [];

  for (const [uid, sourceItem] of Object.entries(sourceMap)) {
    const clean = stripSystemFields(sourceItem);
    if (!destMap[uid]) {
      created.push({ uid, item: clean });
    } else {
      const destClean = stripSystemFields(destMap[uid]);
      if (!_.isEqual(clean, destClean)) {
        updated.push({ uid, source: clean, dest: destClean });
      } else {
        unchanged.push(uid);
      }
    }
  }

  for (const uid of Object.keys(destMap)) {
    if (!sourceMap[uid]) {
      deleted.push({ uid, item: stripSystemFields(destMap[uid]) });
    }
  }

  logger.info(`  ${label}: +${created.length} new  ~${updated.length} changed  -${deleted.length} removed  =${unchanged.length} identical`);
  return { created, updated, deleted, unchanged };
}

function diffEntryCounts(sourceEntries, destCounts) {
  const mismatches = [];
  for (const [ctUid, entries] of Object.entries(sourceEntries)) {
    const sourceCount = Array.isArray(entries) ? entries.length : 0;
    const destCount = destCounts[ctUid] || 0;
    if (sourceCount !== destCount) {
      mismatches.push({ contentType: ctUid, source: sourceCount, dest: destCount });
    }
  }
  return mismatches;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function runDiff() {
  logger.separator();
  logger.info('Starting stack diff...');
  logger.separator();

  const exportDir = latestExportDir();
  logger.info(`Loading source export from: ${exportDir}`);
  const source = loadExport(exportDir);
  logger.success(`Source loaded — ${source.contentTypes.length} content types, ${source.globalFields.length} global fields`);

  logger.info('\nFetching destination stack state...');
  const [destCTs, destGFs] = await Promise.all([
    destApi.getContentTypes(),
    destApi.getGlobalFields(),
  ]);
  logger.success(`Destination loaded — ${destCTs.length} content types, ${destGFs.length} global fields`);

  logger.info('\nFetching destination entry counts...');
  const destEntryCounts = {};
  for (const ct of destCTs) {
    try {
      const { totalCount } = await destApi.getEntries(ct.uid, 1, 0);
      destEntryCounts[ct.uid] = totalCount;
    } catch {
      destEntryCounts[ct.uid] = 0;
    }
  }

  logger.info('\nComputing diffs...');
  const diff = {
    generatedAt: new Date().toISOString(),
    exportDir,
    globalFields: diffCollection('Global Fields', source.globalFields, destGFs),
    contentTypes: diffCollection('Content Types', source.contentTypes, destCTs),
    entryCounts: diffEntryCounts(source.entries, destEntryCounts),
  };

  const diffDir = path.join(process.env.EXPORT_DIR || './exports', 'diffs');
  if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const diffFile = path.join(diffDir, `diff-${timestamp}.json`);
  fs.writeFileSync(diffFile, JSON.stringify(diff, null, 2));
  fs.writeFileSync(path.join(diffDir, 'latest.json'), JSON.stringify(diff, null, 2));

  const totalSchemaChanges =
    diff.globalFields.created.length + diff.globalFields.updated.length + diff.globalFields.deleted.length +
    diff.contentTypes.created.length + diff.contentTypes.updated.length + diff.contentTypes.deleted.length;

  logger.separator();
  if (totalSchemaChanges === 0 && diff.entryCounts.length === 0) {
    logger.success('Stacks are in sync — no differences found.');
  } else {
    logger.warn(`Found ${totalSchemaChanges} schema change(s) and ${diff.entryCounts.length} entry count mismatch(es).`);

    if (diff.contentTypes.created.length)
      logger.info(`  New CTs to create : ${diff.contentTypes.created.map(c => c.uid).join(', ')}`);
    if (diff.contentTypes.updated.length)
      logger.info(`  CTs to update     : ${diff.contentTypes.updated.map(c => c.uid).join(', ')}`);
    if (diff.contentTypes.deleted.length)
      logger.warn(`  CTs only in dest  : ${diff.contentTypes.deleted.map(c => c.uid).join(', ')}`);
    if (diff.globalFields.created.length)
      logger.info(`  New GFs to create : ${diff.globalFields.created.map(g => g.uid).join(', ')}`);
    if (diff.globalFields.updated.length)
      logger.info(`  GFs to update     : ${diff.globalFields.updated.map(g => g.uid).join(', ')}`);
    if (diff.entryCounts.length) {
      logger.warn('  Entry count mismatches:');
      diff.entryCounts.forEach(m =>
        logger.warn(`    ${m.contentType}: source=${m.source}  dest=${m.dest}`)
      );
    }
  }
  logger.info(`\nDiff report saved to: ${diffFile}\n`);
  logger.separator();

  // Exit 2 = changes found (useful in CI to gate sync step), 0 = in sync
  process.exit(totalSchemaChanges > 0 ? 2 : 0);
}

runDiff().catch(err => {
  logger.error(`Diff failed: ${err.message}`);
  if (err.response?.data) logger.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
