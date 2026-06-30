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

const SYSTEM_FIELDS = [
  'created_at', 'updated_at', 'created_by', 'updated_by',
  '_version', 'last_activity', 'DEFAULT_ACL', 'SYS_ACL', 'abilities',
];

function strip(obj) {
  return _.omit(obj, SYSTEM_FIELDS);
}

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

function findSchemaDiff(uid, sourceSchema, destSchema) {
  const issues = [];
  const srcFields = _.keyBy(sourceSchema, 'uid');
  const dstFields = _.keyBy(destSchema, 'uid');

  for (const [fuid, srcField] of Object.entries(srcFields)) {
    if (!dstFields[fuid]) {
      issues.push(`field "${fuid}" missing in destination`);
    } else if (!_.isEqual(strip(srcField), strip(dstFields[fuid]))) {
      issues.push(`field "${fuid}" differs`);
    }
  }
  for (const fuid of Object.keys(dstFields)) {
    if (!srcFields[fuid]) {
      issues.push(`field "${fuid}" exists in destination but not in source`);
    }
  }
  return issues;
}

// ── Validation checks ─────────────────────────────────────────────────────────

async function validateGlobalFields(sourceGFs, destGFs) {
  const results = [];
  const destMap = _.keyBy(destGFs, 'uid');

  for (const src of sourceGFs) {
    const dest = destMap[src.uid];
    if (!dest) {
      results.push({ uid: src.uid, status: 'MISSING', issues: ['not found in destination'] });
      continue;
    }
    const issues = findSchemaDiff(src.uid, src.schema || [], dest.schema || []);
    results.push({
      uid: src.uid,
      status: issues.length ? 'SCHEMA_MISMATCH' : 'OK',
      issues,
    });
  }

  return results;
}

async function validateContentTypes(sourceCTs, destCTs) {
  const results = [];
  const destMap = _.keyBy(destCTs, 'uid');

  for (const src of sourceCTs) {
    const dest = destMap[src.uid];
    if (!dest) {
      results.push({ uid: src.uid, status: 'MISSING', issues: ['not found in destination'] });
      continue;
    }
    const issues = findSchemaDiff(src.uid, src.schema || [], dest.schema || []);

    // Check field_rules
    if (!_.isEqual(src.field_rules || [], dest.field_rules || [])) {
      issues.push('field_rules differ');
    }
    // Check options (is_page, singleton, url_pattern)
    const srcOpts = _.pick(src.options || {}, ['is_page', 'singleton', 'url_pattern', 'title']);
    const dstOpts = _.pick(dest.options || {}, ['is_page', 'singleton', 'url_pattern', 'title']);
    if (!_.isEqual(srcOpts, dstOpts)) {
      issues.push('options (is_page/singleton/url_pattern) differ');
    }

    results.push({
      uid: src.uid,
      status: issues.length ? 'SCHEMA_MISMATCH' : 'OK',
      issues,
    });
  }

  return results;
}

async function validateEntryCounts(sourceEntries, destCTs) {
  const results = [];
  for (const [ctUid, entries] of Object.entries(sourceEntries)) {
    const sourceCount = Array.isArray(entries) ? entries.length : 0;
    try {
      const { totalCount: destCount } = await destApi.getEntries(ctUid, 1, 0);
      const ok = sourceCount === destCount;
      results.push({
        contentType: ctUid,
        source: sourceCount,
        dest: destCount,
        status: ok ? 'OK' : 'COUNT_MISMATCH',
      });
    } catch {
      results.push({
        contentType: ctUid,
        source: sourceCount,
        dest: null,
        status: 'ERROR',
      });
    }
  }
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function runValidation() {
  logger.separator();
  logger.info('Starting sync validation...');
  logger.separator();

  const exportDir = latestExportDir();
  logger.info(`Loading source export from: ${exportDir}`);
  const source = loadExport(exportDir);
  logger.success(`Source loaded — ${source.contentTypes.length} CTs, ${source.globalFields.length} GFs`);

  logger.info('\nFetching destination state...');
  const [destCTs, destGFs] = await Promise.all([
    destApi.getContentTypes(),
    destApi.getGlobalFields(),
  ]);
  logger.success(`Destination loaded — ${destCTs.length} CTs, ${destGFs.length} GFs`);

  logger.info('\nValidating global fields...');
  const gfResults = await validateGlobalFields(source.globalFields, destGFs);

  logger.info('Validating content types...');
  const ctResults = await validateContentTypes(source.contentTypes, destCTs);

  logger.info('Validating entry counts...');
  const entryResults = await validateEntryCounts(source.entries, destCTs);

  // Compile report
  const report = {
    validatedAt: new Date().toISOString(),
    exportDir,
    summary: {
      globalFields: {
        total: gfResults.length,
        ok: gfResults.filter(r => r.status === 'OK').length,
        missing: gfResults.filter(r => r.status === 'MISSING').length,
        mismatch: gfResults.filter(r => r.status === 'SCHEMA_MISMATCH').length,
      },
      contentTypes: {
        total: ctResults.length,
        ok: ctResults.filter(r => r.status === 'OK').length,
        missing: ctResults.filter(r => r.status === 'MISSING').length,
        mismatch: ctResults.filter(r => r.status === 'SCHEMA_MISMATCH').length,
      },
      entries: {
        total: entryResults.length,
        ok: entryResults.filter(r => r.status === 'OK').length,
        mismatch: entryResults.filter(r => r.status === 'COUNT_MISMATCH').length,
      },
    },
    globalFields: gfResults,
    contentTypes: ctResults,
    entries: entryResults,
  };

  // Save report
  const reportsDir = path.join(process.env.EXPORT_DIR || './exports', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportFile = path.join(reportsDir, `validation-${timestamp}.json`);
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'latest.json'), JSON.stringify(report, null, 2));

  // Print summary
  logger.separator();
  const s = report.summary;
  const totalIssues = s.globalFields.missing + s.globalFields.mismatch + s.contentTypes.missing + s.contentTypes.mismatch + s.entries.mismatch;

  if (totalIssues === 0) {
    logger.success('Validation PASSED — destination stack matches source export.');
  } else {
    logger.warn(`Validation found ${totalIssues} issue(s):`);
  }

  logger.info(`\nGlobal Fields : ${s.globalFields.ok}/${s.globalFields.total} OK  |  ${s.globalFields.missing} missing  |  ${s.globalFields.mismatch} schema mismatch`);
  logger.info(`Content Types : ${s.contentTypes.ok}/${s.contentTypes.total} OK  |  ${s.contentTypes.missing} missing  |  ${s.contentTypes.mismatch} schema mismatch`);
  logger.info(`Entry Counts  : ${s.entries.ok}/${s.entries.total} OK  |  ${s.entries.mismatch} mismatch`);

  const failed = [
    ...gfResults.filter(r => r.status !== 'OK'),
    ...ctResults.filter(r => r.status !== 'OK'),
  ];
  if (failed.length) {
    logger.warn('\nIssues:');
    failed.forEach(r => {
      logger.warn(`  ${r.uid} [${r.status}]: ${r.issues.join('; ')}`);
    });
  }

  const entryIssues = entryResults.filter(r => r.status !== 'OK');
  if (entryIssues.length) {
    logger.warn('\nEntry count mismatches:');
    entryIssues.forEach(r => {
      logger.warn(`  ${r.contentType}: source=${r.source}  dest=${r.dest}`);
    });
  }

  logger.info(`\nFull report saved to: ${reportFile}\n`);
  logger.separator();

  process.exit(totalIssues > 0 ? 1 : 0);
}

runValidation().catch(err => {
  logger.error(`Validation failed: ${err.message}`);
  if (err.response?.data) logger.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
