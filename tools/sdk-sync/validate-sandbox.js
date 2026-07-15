require('dotenv').config();
const isEqual = require('lodash/isEqual');
const omit = require('lodash/omit');
const logger = require('./utils/logger');
const ContentstackAPI = require('./utils/contentstack-api');

// Strip system / runtime fields before deep-comparing schemas.
// `indexed` and `inbuilt_model` are added by the CDA response but never stored by the CMA,
// so they appear on production fields but not on sandbox fields — exclude them from comparison.
const STRIP_FIELDS = [
  'created_at', 'updated_at', 'created_by', 'updated_by',
  '_version', 'DEFAULT_ACL', 'SYS_ACL', 'last_activity',
  'abilities', 'inbuilt_class', 'maintain_revisions',
  'indexed', 'inbuilt_model',
];

function clean(obj) {
  if (Array.isArray(obj)) return obj.map(clean);
  if (obj && typeof obj === 'object') {
    const stripped = omit(obj, STRIP_FIELDS);
    return Object.fromEntries(Object.entries(stripped).map(([k, v]) => [k, clean(v)]));
  }
  return obj;
}

function diffObjects(source, dest) {
  const issues = [];
  const sourceKeys = Object.keys(source);
  for (const key of sourceKeys) {
    if (!(key in dest)) {
      issues.push(`missing field: "${key}"`);
    } else if (!isEqual(source[key], dest[key])) {
      issues.push(`field "${key}" differs`);
    }
  }
  return issues;
}

async function validateGlobalFields(production, sandbox) {
  logger.info('Validating global fields...');
  const [prodGFs, sandboxGFs] = await Promise.all([
    production.exportGlobalFields(),
    sandbox.getGlobalFields(),
  ]);

  const sandboxMap = Object.fromEntries(sandboxGFs.map(gf => [gf.uid, gf]));
  const results = [];

  for (const pgf of prodGFs) {
    const sgf = sandboxMap[pgf.uid];
    if (!sgf) {
      results.push({ uid: pgf.uid, status: 'MISSING', issues: ['not found in sandbox'] });
      continue;
    }
    const issues = diffObjects(clean(pgf.schema || []), clean(sgf.schema || []));
    results.push({ uid: pgf.uid, status: issues.length ? 'SCHEMA_MISMATCH' : 'OK', issues });
  }

  return results;
}

async function validateContentTypes(production, sandbox) {
  logger.info('Validating content types...');
  const [prodCTs, sandboxCTs] = await Promise.all([
    production.exportContentTypes(),
    sandbox.getContentTypes(),
  ]);

  const sandboxMap = Object.fromEntries(sandboxCTs.map(ct => [ct.uid, ct]));
  const results = [];

  for (const pct of prodCTs) {
    const sct = sandboxMap[pct.uid];
    if (!sct) {
      results.push({ uid: pct.uid, status: 'MISSING', issues: ['not found in sandbox'] });
      continue;
    }

    const issues = [
      ...diffObjects(clean(pct.schema || []), clean(sct.schema || [])),
      ...diffObjects(clean(pct.options || {}), clean(sct.options || {})),
    ];

    results.push({ uid: pct.uid, status: issues.length ? 'SCHEMA_MISMATCH' : 'OK', issues });
  }

  return results;
}

function printResults(label, results) {
  logger.separator();
  logger.info(`${label} (${results.length} total)`);

  let ok = 0, missing = 0, mismatch = 0;
  for (const r of results) {
    if (r.status === 'OK') {
      logger.success(`  ${r.uid}`);
      ok++;
    } else if (r.status === 'MISSING') {
      logger.error(`  ${r.uid} — MISSING`);
      missing++;
    } else {
      logger.warn(`  ${r.uid} — SCHEMA_MISMATCH`);
      for (const issue of r.issues) {
        logger.warn(`    • ${issue}`);
      }
      mismatch++;
    }
  }

  return { total: results.length, ok, missing, mismatch };
}

async function main() {
  logger.separator();
  logger.info('SDK Sandbox Validation');
  logger.separator();

  const production = new ContentstackAPI(
    process.env.PRODUCTION_STACK_API_KEY,
    { deliveryToken: process.env.PRODUCTION_DELIVERY_TOKEN }
  );

  const sandbox = new ContentstackAPI(
    process.env.SANDBOX_STACK_API_KEY,
    { managementToken: process.env.SANDBOX_MANAGEMENT_TOKEN }
  );

  const [gfResults, ctResults] = await Promise.all([
    validateGlobalFields(production, sandbox),
    validateContentTypes(production, sandbox),
  ]);

  const gfSummary = printResults('Global Fields', gfResults);
  const ctSummary = printResults('Content Types', ctResults);

  logger.separator();
  logger.info('Summary');
  logger.separator();
  logger.info(`Global fields : ${gfSummary.ok} OK  ${gfSummary.missing} missing  ${gfSummary.mismatch} mismatch`);
  logger.info(`Content types : ${ctSummary.ok} OK  ${ctSummary.missing} missing  ${ctSummary.mismatch} mismatch`);

  const hasFailures =
    gfSummary.missing + gfSummary.mismatch + ctSummary.missing + ctSummary.mismatch > 0;

  if (hasFailures) {
    logger.error('Validation FAILED — sandbox does not match production');
    process.exit(1);
  }

  logger.success('Validation PASSED — sandbox matches production');
}

main().catch(err => {
  logger.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});
