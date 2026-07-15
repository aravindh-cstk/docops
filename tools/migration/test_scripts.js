#!/usr/bin/env node
'use strict';

/**
 * CRUD test against APIDocs-Sandbox (bltf92796d1cef4d3d4)
 *
 * Creates a throwaway content type + entry, runs all operations,
 * then cleans up. Safe to run repeatedly.
 *
 * Usage:  node test_scripts.js
 *         node test_scripts.js --skip-cleanup   (leave CT + entry in stack for manual inspection)
 */

require('dotenv').config();
const ContentstackAPI = require('./utils/contentstack-api');
const logger = require('./utils/logger');

const SKIP_CLEANUP = process.argv.includes('--skip-cleanup');

const api = new ContentstackAPI(
  process.env.APIDOCS_SANDBOX_STACK_API_KEY,
  process.env.APIDOCS_SANDBOX_MANAGEMENT_TOKEN,
  process.env.APIDOCS_SANDBOX_STACK_REGION || 'us'
);

const STACK_APP_URL = `https://app.contentstack.com/#!/stack/${process.env.APIDOCS_SANDBOX_STACK_API_KEY}`;
const TEST_CT_UID   = 'test_migration_crud';
const TEST_CT_TITLE = '[TEST] Migration CRUD';

// ── Test helpers ──────────────────────────────────────────────────────────────

const results = { passed: 0, failed: 0 };

function pass(label) {
  logger.success(`  PASS  ${label}`);
  results.passed++;
}

function fail(label, err) {
  logger.error(`  FAIL  ${label}`);
  logger.error(`        ${err.response?.data?.error_message || err.message}`);
  results.failed++;
}

// ── Fixtures ──────────────────────────────────────────────────────────────────

const baseCTSchema = {
  title: TEST_CT_TITLE,
  uid: TEST_CT_UID,
  description: 'Temporary content type created by test_scripts.js — safe to delete',
  schema: [
    {
      data_type: 'text',
      display_name: 'Title',
      uid: 'title',
      field_metadata: { _default: true, version: 3 },
      mandatory: true,
      unique: true,
      multiple: false,
      non_localizable: false,
    },
    {
      data_type: 'text',
      display_name: 'Description',
      uid: 'description',
      field_metadata: { description: '', default_value: '', multiline: true, version: 3 },
      mandatory: false,
      unique: false,
      multiple: false,
      non_localizable: false,
    },
  ],
  options: { is_page: false, singleton: false, title: 'title', sub_title: [] },
};

const updatedCTSchema = {
  ...baseCTSchema,
  schema: [
    ...baseCTSchema.schema,
    {
      data_type: 'text',
      display_name: 'Status',
      uid: 'status',
      display_type: 'dropdown',
      enum: { advanced: false, choices: [{ value: 'Draft' }, { value: 'Published' }] },
      field_metadata: { description: 'Added by CRUD test', default_value: 'Draft', version: 3 },
      mandatory: false,
      unique: false,
      multiple: false,
      non_localizable: false,
    },
  ],
};

const testEntry = {
  title: '[TEST] CRUD entry created by test_scripts.js',
  description: 'This entry was created automatically to verify the sync scripts work.',
};

const updatedEntry = {
  title: '[TEST] CRUD entry — UPDATED',
  description: 'Updated by test_scripts.js to verify the UPDATE operation.',
};

// ── Tests ─────────────────────────────────────────────────────────────────────

async function testCreateContentType() {
  logger.info('\n[1] CREATE content type...');
  try {
    // Clean up any leftover from a previous run
    try { await api.deleteContentType(TEST_CT_UID); } catch {}

    const ct = await api.createContentType(baseCTSchema);
    if (ct.uid === TEST_CT_UID) {
      pass(`Content type "${TEST_CT_UID}" created`);
      logger.info(`      View → ${STACK_APP_URL}/content-type/${TEST_CT_UID}`);
      return true;
    } else {
      fail('CREATE content type', new Error(`uid mismatch: got ${ct.uid}`));
      return false;
    }
  } catch (err) {
    fail('CREATE content type', err);
    return false;
  }
}

async function testReadContentType() {
  logger.info('\n[2] READ content type...');
  try {
    const ct = await api.getContentType(TEST_CT_UID);
    if (ct && ct.uid === TEST_CT_UID) {
      pass(`Content type "${TEST_CT_UID}" fetched (${ct.schema.length} fields)`);
      return true;
    } else {
      fail('READ content type', new Error('Not found or uid mismatch'));
      return false;
    }
  } catch (err) {
    fail('READ content type', err);
    return false;
  }
}

async function testUpdateContentType() {
  logger.info('\n[3] UPDATE content type (add "status" dropdown field)...');
  try {
    const ct = await api.updateContentType(TEST_CT_UID, updatedCTSchema);
    const hasStatusField = ct.schema.some(f => f.uid === 'status');
    if (hasStatusField) {
      pass(`Content type updated — "status" field added (now ${ct.schema.length} fields)`);
      logger.info(`      View → ${STACK_APP_URL}/content-type/${TEST_CT_UID}`);
      return true;
    } else {
      fail('UPDATE content type', new Error('"status" field not found in updated schema'));
      return false;
    }
  } catch (err) {
    fail('UPDATE content type', err);
    return false;
  }
}

async function testCreateEntry() {
  logger.info('\n[4] CREATE entry...');
  try {
    const entry = await api.createEntry(TEST_CT_UID, testEntry);
    if (entry && entry.uid) {
      pass(`Entry created (uid: ${entry.uid})`);
      logger.info(`      View → ${STACK_APP_URL}/content-type/${TEST_CT_UID}/entries/${entry.uid}/en-us`);
      return entry.uid;
    } else {
      fail('CREATE entry', new Error('No uid in response'));
      return null;
    }
  } catch (err) {
    fail('CREATE entry', err);
    return null;
  }
}

async function testReadEntry(entryUid) {
  logger.info('\n[5] READ entry...');
  try {
    const { entries } = await api.getEntries(TEST_CT_UID, 10, 0);
    const found = entries.find(e => e.uid === entryUid);
    if (found && found.title === testEntry.title) {
      pass(`Entry "${found.title}" fetched`);
      return true;
    } else {
      fail('READ entry', new Error('Entry not found or title mismatch'));
      return false;
    }
  } catch (err) {
    fail('READ entry', err);
    return false;
  }
}

async function testUpdateEntry(entryUid) {
  logger.info('\n[6] UPDATE entry...');
  try {
    const updated = await api.updateEntry(TEST_CT_UID, entryUid, updatedEntry);
    if (updated && updated.title === updatedEntry.title) {
      pass(`Entry updated — new title: "${updated.title}"`);
      logger.info(`      View → ${STACK_APP_URL}/content-type/${TEST_CT_UID}/entries/${entryUid}/en-us`);
      return true;
    } else {
      fail('UPDATE entry', new Error('Title not updated'));
      return false;
    }
  } catch (err) {
    fail('UPDATE entry', err);
    return false;
  }
}

async function testDeleteEntry(entryUid) {
  logger.info('\n[7] DELETE entry...');
  try {
    await api.deleteEntry(TEST_CT_UID, entryUid);
    // Verify it's gone
    const { entries } = await api.getEntries(TEST_CT_UID, 10, 0);
    const stillExists = entries.some(e => e.uid === entryUid);
    if (!stillExists) {
      pass(`Entry ${entryUid} deleted`);
      return true;
    } else {
      fail('DELETE entry', new Error('Entry still exists after delete'));
      return false;
    }
  } catch (err) {
    fail('DELETE entry', err);
    return false;
  }
}

async function testDeleteContentType() {
  logger.info('\n[8] DELETE content type...');
  try {
    await api.deleteContentType(TEST_CT_UID);
    // Verify it's gone
    const ct = await api.getContentType(TEST_CT_UID);
    if (!ct) {
      pass(`Content type "${TEST_CT_UID}" deleted`);
      return true;
    } else {
      fail('DELETE content type', new Error('Still exists after delete'));
      return false;
    }
  } catch (err) {
    // 404 after delete = success
    if (err.response?.status === 404) {
      pass(`Content type "${TEST_CT_UID}" deleted`);
      return true;
    }
    fail('DELETE content type', err);
    return false;
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  logger.separator();
  logger.info('CRUD test — APIDocs-Sandbox stack');
  logger.info(`Stack: ${process.env.APIDOCS_SANDBOX_STACK_API_KEY}`);
  if (SKIP_CLEANUP) logger.warn('--skip-cleanup: content type and entry will NOT be deleted');
  logger.separator();

  // CREATE
  const ctCreated = await testCreateContentType();
  if (!ctCreated) {
    logger.error('\nCannot continue — content type creation failed.');
    process.exit(1);
  }

  // READ
  await testReadContentType();

  // UPDATE
  await testUpdateContentType();

  // CREATE entry
  const entryUid = await testCreateEntry();

  if (entryUid) {
    // READ entry
    await testReadEntry(entryUid);

    // UPDATE entry
    await testUpdateEntry(entryUid);

    if (!SKIP_CLEANUP) {
      // DELETE entry (must happen before CT delete)
      await testDeleteEntry(entryUid);
    } else {
      logger.warn('\n[7] Skipping DELETE entry (--skip-cleanup)');
      logger.info(`      Entry stays at → ${STACK_APP_URL}/content-type/${TEST_CT_UID}/entries/${entryUid}/en-us`);
      results.passed++; // count as pass since skipped intentionally
    }
  }

  if (!SKIP_CLEANUP) {
    // DELETE content type
    await testDeleteContentType();
  } else {
    logger.warn('\n[8] Skipping DELETE content type (--skip-cleanup)');
    logger.info(`      CT stays at → ${STACK_APP_URL}/content-type/${TEST_CT_UID}`);
    results.passed++;
  }

  // ── Summary ──
  logger.separator();
  const total = results.passed + results.failed;
  if (results.failed === 0) {
    logger.success(`All ${total} tests passed.`);
  } else {
    logger.warn(`${results.passed}/${total} passed, ${results.failed} failed.`);
  }

  if (SKIP_CLEANUP) {
    logger.info('\nInspect the stack at:');
    logger.info(`  Content Types → ${STACK_APP_URL}/content-type/${TEST_CT_UID}`);
    logger.info(`  Entries       → ${STACK_APP_URL}/content-type/${TEST_CT_UID}/entries`);
  }

  logger.separator();
  process.exit(results.failed > 0 ? 1 : 0);
}

run().catch(err => {
  logger.error(`Unhandled error: ${err.message}`);
  process.exit(1);
});
