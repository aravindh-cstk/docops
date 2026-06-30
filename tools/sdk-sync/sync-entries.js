require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logger = require('./utils/logger');
const ContentstackAPI = require('./utils/contentstack-api');
const { markdownToHtml } = require('./utils/md-to-html');
const {
  parseFrontmatter,
  extractUrlSlug,
  extractParameters,
  extractReturns,
  extractAfterReturns,
  extractProperties,
} = require('./utils/parse-markdown');
const SDK_CONFIG = require('./sdk-config');

// ── Config ────────────────────────────────────────────────────────────────────

const DRY_RUN = process.env.SYNC_DRY_RUN === 'true';
const SDK_DOCS_DIR = path.resolve(__dirname, '../../sdk-docs');
const REPO_ROOT = path.resolve(__dirname, '../..');

// Parse --before and --after from argv
const argv = process.argv.slice(2);
const argMap = {};
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) {
    argMap[argv[i]] = argv[i + 1] || '';
    i++;
  }
}
const GIT_BEFORE = argMap['--before'] || null;
const GIT_AFTER = argMap['--after'] || null;

// ── CMS payload builders ──────────────────────────────────────────────────────

function buildMethodEntry(filePath, sdkFolder, className) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, body } = parseFrontmatter(content);
  const cfg = SDK_CONFIG[sdkFolder];
  if (!cfg) return null;

  const methodName = data.title || '';
  const slug = extractUrlSlug(data.url || '');

  // Build method_summary blocks — one per parameter table (handles overloaded methods)
  const paramTables = extractParameters(body);
  const returnsType = extractReturns(body);
  const codeSection = extractAfterReturns(body);

  const methodSummaryBlocks = paramTables.length > 0
    ? paramTables.map(rows => buildMethodSummaryBlock(rows, returnsType, codeSection))
    : [buildMethodSummaryBlock([], returnsType, codeSection)];

  return {
    slug,
    payload: {
      title: `${cfg.framework} ${cfg.api} ${className} ${methodName} method`,
      method_name: methodName,
      superscript_text: '',
      description: markdownToHtml(data.description || ''),
      url: slug || '',
      md_content: body.trim(),
      method_summary: methodSummaryBlocks,
    },
  };
}

function buildMethodSummaryBlock(paramRows, returnsType, codeSection) {
  const parameters = paramRows.map(row => ({
    key: row['Name'] || '',
    value: row['Type'] || '',
    required: row['Required'] === 'Yes',
    optional: row['Required'] !== 'Yes',
    default_value: (row['Default'] || '').replace(/^—$/, 'NA'),
    description: markdownToHtml(row['Description'] || ''),
  }));

  return {
    method_params: {
      parameters,
      returns: returnsType,
      code_snippet: markdownToHtml(codeSection),
    },
  };
}

function buildClassEntry(filePath, sdkFolder, className, methodUids) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, body } = parseFrontmatter(content);
  const cfg = SDK_CONFIG[sdkFolder];
  if (!cfg) return null;

  const slug = extractUrlSlug(data.url || '');

  const propRows = extractProperties(body);
  const properties = propRows.map(row => ({
    key: row['Name'] || '',
    value: row['Type'] || '',
    required: row['Required'] === 'Yes',
    default_value: (row['Default'] || '').replace(/^—$/, ''),
    description: markdownToHtml(row['Description'] || ''),
  }));

  const methods = methodUids.map(uid => ({
    uid,
    _content_type_uid: 'method_details',
  }));

  return {
    slug,
    payload: {
      title: `${cfg.framework} ${cfg.api} ${className} class`,
      class_name: className,
      description: markdownToHtml(data.description || ''),
      url: slug || '',
      md_content: body.trim(),
      properties,
      methods,
      seo: { title: '', description: '', robots: '' },
    },
  };
}

function buildUsageGuideEntry(filePath, sdkFolder) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { body } = parseFrontmatter(content);
  const cfg = SDK_CONFIG[sdkFolder];
  if (!cfg) return null;

  return {
    title: `${cfg.framework} ${cfg.api} Introduction`,
    payload: {
      title: `${cfg.framework} ${cfg.api} Introduction`,
      languages: { select: cfg.language },
      md_content: body.trim(),
    },
  };
}

function buildLandingPageEntry(sdkFolder, guideUid, classUids) {
  const cfg = SDK_CONFIG[sdkFolder];
  if (!cfg) return null;

  const navigations = [
    { uid: guideUid, _content_type_uid: 'sdk_usage_guides' },
    ...classUids.map(uid => ({ uid, _content_type_uid: 'classes_reference' })),
  ];

  return {
    payload: {
      title: cfg.landingPageTitle,
      url: cfg.landingPageUrl,
      language: { select: cfg.language },
      navigations,
    },
  };
}

// ── Upsert helpers ────────────────────────────────────────────────────────────

async function upsertByUrl(sandbox, ctUid, slug, payload, label) {
  if (!slug) {
    logger.warn(`  Skipping ${label} — no URL slug`);
    return null;
  }

  const { entries } = await sandbox.queryEntries(ctUid, { url: slug });
  const existing = entries[0];

  if (DRY_RUN) {
    logger.info(`  [DRY] ${existing ? 'update' : 'create'} ${label} (${slug})`);
    return existing ? existing.uid : 'dry-run-uid';
  }

  if (existing) {
    const result = await sandbox.updateEntry(ctUid, existing.uid, payload);
    logger.success(`  Updated ${label} (${slug})`);
    return result.uid;
  } else {
    const result = await sandbox.createEntry(ctUid, payload);
    logger.success(`  Created ${label} (${slug})`);
    return result.uid;
  }
}

async function upsertByTitle(sandbox, ctUid, title, payload, label) {
  const { entries } = await sandbox.queryEntries(ctUid, { title });
  const existing = entries[0];

  if (DRY_RUN) {
    logger.info(`  [DRY] ${existing ? 'update' : 'create'} ${label} ("${title}")`);
    return existing ? existing.uid : 'dry-run-uid';
  }

  if (existing) {
    const result = await sandbox.updateEntry(ctUid, existing.uid, payload);
    logger.success(`  Updated ${label} ("${title}")`);
    return result.uid;
  } else {
    const result = await sandbox.createEntry(ctUid, payload);
    logger.success(`  Created ${label} ("${title}")`);
    return result.uid;
  }
}

// ── Filesystem helpers ────────────────────────────────────────────────────────

function getSdkDirs() {
  return fs.readdirSync(SDK_DOCS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && SDK_CONFIG[d.name])
    .map(d => d.name);
}

function getClassDirs(sdkFolder) {
  const sdkPath = path.join(SDK_DOCS_DIR, sdkFolder);
  return fs.readdirSync(sdkPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

function getUsageGuideFile(sdkFolder) {
  const sdkPath = path.join(SDK_DOCS_DIR, sdkFolder);
  const files = fs.readdirSync(sdkPath).filter(f => f.endsWith('.md'));
  for (const f of files) {
    const content = fs.readFileSync(path.join(sdkPath, f), 'utf8');
    const { data } = parseFrontmatter(content);
    if (data.doc_type === 'usage_guide') return path.join(sdkPath, f);
  }
  return null;
}

function getClassFiles(sdkFolder, className) {
  const classPath = path.join(SDK_DOCS_DIR, sdkFolder, className);
  const files = fs.readdirSync(classPath).filter(f => f.endsWith('.md'));

  let introFile = null;
  const methodFiles = [];

  for (const f of files) {
    const filePath = path.join(classPath, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = parseFrontmatter(content);
    if (data.doc_type === 'class_intro') {
      introFile = filePath;
    } else if (data.doc_type === 'method_details') {
      methodFiles.push(filePath);
    }
  }

  return { introFile, methodFiles };
}

// ── Determine affected SDK folders ────────────────────────────────────────────

function getAffectedSdks() {
  if (GIT_BEFORE && GIT_AFTER) {
    try {
      const output = execSync(`git diff --name-only ${GIT_BEFORE} ${GIT_AFTER}`, {
        cwd: REPO_ROOT,
        encoding: 'utf8',
      });
      const changedFiles = output.trim().split('\n').filter(f =>
        f.startsWith('sdk-docs/') && f.endsWith('.md')
      );
      const sdks = new Set(changedFiles.map(f => f.split('/')[1]).filter(s => SDK_CONFIG[s]));
      if (sdks.size > 0) {
        logger.info(`Incremental mode — ${changedFiles.length} changed file(s) across ${sdks.size} SDK(s):`);
        for (const s of sdks) logger.info(`  ${s}`);
        return [...sdks];
      }
    } catch (err) {
      logger.warn(`Could not run git diff: ${err.message} — falling back to full scan`);
    }
  }
  logger.info('Full scan mode — processing all SDK folders');
  return getSdkDirs();
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  logger.separator();
  logger.info('SDK Docs → Contentstack Sync');
  if (DRY_RUN) logger.warn('DRY RUN — no entries will be created or updated');
  logger.separator();

  const sandbox = new ContentstackAPI(
    process.env.SANDBOX_STACK_API_KEY,
    { managementToken: process.env.SANDBOX_MANAGEMENT_TOKEN }
  );

  const affectedSdks = getAffectedSdks();

  if (affectedSdks.length === 0) {
    logger.success('No SDK folders affected — nothing to sync');
    return;
  }

  // Per-SDK indexes built during passes 1–3, used to wire references in passes 2 & 4
  // methodIndex[sdkFolder][className] = [uid, ...]
  // classIndex[sdkFolder] = [uid, ...]
  // guideIndex[sdkFolder] = uid
  const methodIndex = {};
  const classIndex = {};
  const guideIndex = {};

  const stats = { processed: 0, skipped: 0, failed: 0 };

  // ── Pass 1: method_details ─────────────────────────────────────────────────
  logger.separator();
  logger.info('Pass 1: Syncing method_details...');

  for (const sdkFolder of affectedSdks) {
    methodIndex[sdkFolder] = {};
    const classDirs = getClassDirs(sdkFolder);

    for (const className of classDirs) {
      methodIndex[sdkFolder][className] = [];
      const { methodFiles } = getClassFiles(sdkFolder, className);

      for (const filePath of methodFiles) {
        try {
          const built = buildMethodEntry(filePath, sdkFolder, className);
          if (!built) { stats.skipped++; continue; }

          const uid = await upsertByUrl(sandbox, 'method_details', built.slug, built.payload,
            `[${sdkFolder}] ${className} method`);
          if (uid) {
            methodIndex[sdkFolder][className].push(uid);
            stats.processed++;
          }
        } catch (err) {
          logger.error(`  Failed ${filePath}: ${err.response?.data?.error_message || err.message}`);
          stats.failed++;
        }
      }
    }
  }

  // ── Pass 2: classes_reference ──────────────────────────────────────────────
  logger.separator();
  logger.info('Pass 2: Syncing classes_reference...');

  for (const sdkFolder of affectedSdks) {
    classIndex[sdkFolder] = [];
    const classDirs = getClassDirs(sdkFolder);

    for (const className of classDirs) {
      const { introFile } = getClassFiles(sdkFolder, className);
      if (!introFile) {
        logger.warn(`  No class_intro file for [${sdkFolder}] ${className} — skipping`);
        stats.skipped++;
        continue;
      }

      try {
        const methodUids = methodIndex[sdkFolder]?.[className] || [];
        const built = buildClassEntry(introFile, sdkFolder, className, methodUids);
        if (!built) { stats.skipped++; continue; }

        const uid = await upsertByUrl(sandbox, 'classes_reference', built.slug, built.payload,
          `[${sdkFolder}] ${className} class`);
        if (uid) classIndex[sdkFolder].push(uid);
      } catch (err) {
        logger.error(`  Failed ${introFile}: ${err.response?.data?.error_message || err.message}`);
        stats.failed++;
      }
    }
  }

  // ── Pass 3: sdk_usage_guides ───────────────────────────────────────────────
  logger.separator();
  logger.info('Pass 3: Syncing sdk_usage_guides...');

  for (const sdkFolder of affectedSdks) {
    const guideFile = getUsageGuideFile(sdkFolder);
    if (!guideFile) {
      logger.warn(`  No usage_guide file for [${sdkFolder}] — skipping`);
      stats.skipped++;
      continue;
    }

    try {
      const built = buildUsageGuideEntry(guideFile, sdkFolder);
      if (!built) { stats.skipped++; continue; }

      const uid = await upsertByTitle(sandbox, 'sdk_usage_guides', built.title, built.payload,
        `[${sdkFolder}] usage guide`);
      if (uid) guideIndex[sdkFolder] = uid;
    } catch (err) {
      logger.error(`  Failed [${sdkFolder}] usage guide: ${err.response?.data?.error_message || err.message}`);
      stats.failed++;
    }
  }

  // ── Pass 4: sdk_landing_pages ──────────────────────────────────────────────
  logger.separator();
  logger.info('Pass 4: Syncing sdk_landing_pages...');

  for (const sdkFolder of affectedSdks) {
    const cfg = SDK_CONFIG[sdkFolder];
    const guideUid = guideIndex[sdkFolder];
    const classUids = classIndex[sdkFolder] || [];

    if (!guideUid) {
      logger.warn(`  No usage guide UID for [${sdkFolder}] — skipping landing page`);
      stats.skipped++;
      continue;
    }

    try {
      const built = buildLandingPageEntry(sdkFolder, guideUid, classUids);
      if (!built) { stats.skipped++; continue; }

      await upsertByUrl(sandbox, 'sdk_landing_pages', cfg.landingPageUrl, built.payload,
        `[${sdkFolder}] landing page`);
    } catch (err) {
      logger.error(`  Failed [${sdkFolder}] landing page: ${err.response?.data?.error_message || err.message}`);
      stats.failed++;
    }
  }

  // ── Pass 5: Deletion sweep (full scan only) ────────────────────────────────
  const isFullScan = !GIT_BEFORE || !GIT_AFTER;
  if (isFullScan && !DRY_RUN) {
    logger.separator();
    logger.info('Pass 5: Checking for deleted entries to unpublish...');

    const processedSlugs = new Set();
    for (const sdkFolder of affectedSdks) {
      for (const className of Object.keys(methodIndex[sdkFolder] || {})) {
        // Collect slugs from files we processed
        const { methodFiles, introFile } = getClassFiles(sdkFolder, className);
        for (const f of methodFiles) {
          const { data } = parseFrontmatter(fs.readFileSync(f, 'utf8'));
          const slug = extractUrlSlug(data.url || '');
          if (slug) processedSlugs.add(slug);
        }
        if (introFile) {
          const { data } = parseFrontmatter(fs.readFileSync(introFile, 'utf8'));
          const slug = extractUrlSlug(data.url || '');
          if (slug) processedSlugs.add(slug);
        }
      }
    }

    for (const ctUid of ['method_details', 'classes_reference']) {
      try {
        const allEntries = await sandbox.getAllEntries(ctUid);
        let unpublished = 0;
        for (const entry of allEntries) {
          if (entry.url && !processedSlugs.has(entry.url)) {
            await sandbox.unpublishEntry(ctUid, entry.uid);
            logger.info(`  Unpublished removed entry: ${ctUid} (${entry.url})`);
            unpublished++;
          }
        }
        if (unpublished === 0) logger.info(`  No removed entries found for ${ctUid}`);
      } catch (err) {
        logger.error(`  Deletion sweep failed for ${ctUid}: ${err.message}`);
      }
    }
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  logger.separator();
  logger.info('Sync complete');
  logger.separator();
  logger.info(`SDKs processed  : ${affectedSdks.length}`);
  logger.info(`Entries synced  : ${stats.processed}`);
  logger.info(`Entries skipped : ${stats.skipped}`);
  logger.info(`Failed          : ${stats.failed}`);
  if (DRY_RUN) logger.warn('No changes were applied (dry run)');

  if (stats.failed > 0) {
    logger.error('Sync completed with failures — check logs above');
    process.exit(1);
  }

  logger.success('All entries synced successfully');
}

main().catch(err => {
  logger.error(`Unexpected error: ${err.message}`);
  if (err.stack) logger.debug(err.stack);
  process.exit(1);
});
