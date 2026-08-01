# Production Readiness Test Plan

## Overview

This document outlines all tests required to verify the Git ↔ Sandbox CMS bidirectional sync system is production-ready. The testing framework is **sandbox-only** — no production data is modified during testing.

## Test Infrastructure

### Scripts
- **sandbox-mirror-check.js** — Verifies Sandbox mirrors Production
- **sandbox-git-parity-check.js** — Verifies Sandbox matches Git folders
- **sandbox-sync-test.js** — Tests create/update/delete operations
- **.github/workflows/sandbox-test-only.yml** — Automation scheduler (3x daily)

### Execution Environment
- **When**: 2 AM UTC, 12 PM UTC, 5 PM UTC (3 times daily)
- **What**: All three scripts run sequentially
- **Duration**: ~5-10 minutes per run
- **Artifacts**: GitHub Actions logs + exit codes

---

## TEST CATEGORY 1: Sandbox Mirror Integrity

### Purpose
Ensure Sandbox contains all Production data and is a true mirror for testing.

### Test 1.1: Entry Count Verification
**Script**: `sandbox-mirror-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | Production entry count = Sandbox entry count (per content type) |
| **Expected** | All published entries from Production exist in Sandbox |
| **Fail Condition** | Entry count mismatch in any content type |
| **Manual Verification** | Compare counts in Production CMS vs Sandbox CMS UIs |

### Test 1.2: Entry UID Presence Check
**Script**: `sandbox-mirror-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | Each Production entry UID exists in Sandbox |
| **Expected** | No entries missing in Sandbox (UIDs match) |
| **Fail Condition** | Any Production entry UID not found in Sandbox |
| **Resolution** | Run full sync: `node full-sync_25July26.js` |

### Test 1.3: Extra Entries in Sandbox Detection
**Script**: `sandbox-mirror-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | Flag entries in Sandbox not in Production (stale data) |
| **Expected** | No extra entries (or acceptable test data) |
| **Warning** | Extra entries detected — may indicate old test data |
| **Manual Action** | Review and delete stale entries if needed |

### Test 1.4: Content Type Coverage
**Script**: `sandbox-mirror-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | All Production content types exist in Sandbox |
| **Expected** | Content type count: Production = Sandbox |
| **Fail Condition** | Missing content types in Sandbox |
| **Resolution** | Run: `node import-content-types.js` |

### Test 1.5: Per-Content-Type Comparison
**Script**: `sandbox-mirror-check.js`

For each content type:
- Count entries in Production
- Count entries in Sandbox
- Report matches/mismatches
- Flag if counts differ by >5% (possible sync drift)

---

## TEST CATEGORY 2: Git ↔ Sandbox Parity

### Purpose
Ensure Git markdown files align with Sandbox CMS entries (count and structure).

### Test 2.1: Folder-to-Content-Type Mapping
**Script**: `sandbox-git-parity-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | Each Git folder maps to exactly one Sandbox content type |
| **Expected** | All Git folders have valid content type mappings |
| **Fail Condition** | Unmapped folders or invalid mappings |
| **Manual Fix** | Update FOLDER_TO_CONTENT_TYPE in script |

### Test 2.2: Markdown File Count vs Entry Count
**Script**: `sandbox-git-parity-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | For each content type, markdown count = Sandbox entry count |
| **Expected** | Perfect parity: `git files === sandbox entries` |
| **Acceptable Mismatch** | ±1-2 files (new/pending entries okay) |
| **Fail Condition** | Mismatch >5% in any content type |
| **Example** | api-docs/content-management-api-requests: 42 files = 42 entries ✅ |

### Test 2.3: Folder Completeness
**Script**: `sandbox-git-parity-check.js`

| Aspect | Details |
|--------|---------|
| **What to Test** | All Sandbox content types have corresponding Git folders |
| **Expected** | No orphaned content types without Git representation |
| **Warning** | Content types without Git folders (editorial-only) |
| **Manual Review** | Verify intentional vs missing folders |

### Test 2.4: Markdown File Naming
**Script**: sandbox-git-parity-check.js (extended)

| Aspect | Details |
|--------|---------|
| **What to Test** | Git filenames match Sandbox entry URLs |
| **Expected** | {folder}/{entry.url}.md exists for each entry |
| **Fail Condition** | Orphaned files (no matching entry in Sandbox) |
| **Manual Cleanup** | Remove orphaned markdown files |

### Test 2.5: Frontmatter Validation
**Script**: sandbox-git-parity-check.js (extended)

| Aspect | Details |
|--------|---------|
| **What to Test** | All markdown files have valid YAML frontmatter |
| **Required Fields** | title, url, description (at minimum) |
| **Fail Condition** | Missing required frontmatter fields |
| **Validation** | Parse frontmatter and check against content type schema |

---

## TEST CATEGORY 3: Sync Operations (Create, Update, Delete)

### Purpose
Verify bidirectional sync works for all CRUD operations.

### Test 3.1: Create Operation
**Script**: `sandbox-sync-test.js`

| Step | What to Verify |
|------|-----------------|
| 1. Create markdown file | File written to Git branch |
| 2. Commit to feature branch | Git shows new commit |
| 3. Verify Sandbox entry | Entry created in Sandbox CMS |
| 4. Metadata match | Title, description, url match |
| **Expected** | File in Git → Entry in Sandbox ✅ |
| **Fail Condition** | Entry not found in Sandbox after sync |

### Test 3.2: Update Operation
**Script**: `sandbox-sync-test.js`

| Step | What to Verify |
|------|-----------------|
| 1. Modify markdown file | Content updated, frontmatter changed |
| 2. Commit update | Git shows updated commit |
| 3. Verify Sandbox changes | Entry updated in Sandbox CMS |
| 4. Content match | Body content reflects markdown |
| **Expected** | File update in Git → Entry update in Sandbox ✅ |
| **Fail Condition** | Changes not reflected in Sandbox |

### Test 3.3: Delete Operation
**Script**: `sandbox-sync-test.js`

| Step | What to Verify |
|------|-----------------|
| 1. Delete markdown file | File removed from Git |
| 2. Commit deletion | Git shows deletion commit |
| 3. Verify Sandbox deletion | Entry removed from Sandbox CMS |
| **Expected** | File deleted from Git → Entry deleted from Sandbox ✅ |
| **Fail Condition** | Entry still exists in Sandbox |

### Test 3.4: Rollback Safety
**Script**: `sandbox-sync-test.js` + manual

| Aspect | Details |
|--------|---------|
| **What to Test** | Test operations leave no orphaned data |
| **Cleanup Steps** | Delete test entries from Sandbox after tests |
| **Verification** | No test files remain in production Git |
| **Expected** | All test data removed, system clean |

### Test 3.5: Concurrent Operations
**Manual Test**

| Scenario | Expected Behavior |
|----------|-------------------|
| Create two files simultaneously | Both sync without conflicts |
| Update while another deletes | Operations execute sequentially without errors |
| Rapid create/update/delete | No lost data, final state correct |

---

## TEST CATEGORY 4: Error Handling & Recovery

### Test 4.1: Network Failure Recovery
**Script**: All scripts with retry logic

| Scenario | Expected |
|----------|----------|
| API timeout | Retry up to 3 times with exponential backoff |
| Rate limit (429) | Backoff and retry successfully |
| 5xx errors | Retry; if persistent, fail with clear error |
| **Expected** | Transient failures recover; persistent failures reported |

### Test 4.2: Invalid Data Handling
**Script**: sandbox-sync-test.js

| Scenario | Expected |
|----------|----------|
| Missing required fields | Entry rejected with validation error |
| Invalid markdown syntax | Graceful parsing with warnings |
| Special characters in URL | Properly escaped/sanitized |
| **Expected** | Bad data doesn't corrupt Sandbox or Git |

### Test 4.3: Partial Failure Recovery
**Manual Test**

| Scenario | Expected |
|----------|----------|
| Sync fails mid-way | Resume from checkpoint on next run |
| Entry partially created | Retry completes creation; no orphaned data |
| **Expected** | System recovers to consistent state |

### Test 4.4: Duplicate Prevention
**Script**: sandbox-sync-test.js

| Scenario | Expected |
|----------|----------|
| Sync runs twice for same file | No duplicate entries created |
| Entry synced to Git twice | Git shows single file, not duplicated |
| **Expected** | Idempotent operations; duplicates prevented |

---

## TEST CATEGORY 5: Performance & Scale

### Test 5.1: Bulk Sync Performance
**Script**: Full sync test (manual)

| Metric | Target | Acceptable |
|--------|--------|------------|
| Time to sync 500 entries | <60 sec | <120 sec |
| Time to sync 5000 entries | <5 min | <10 min |
| API rate limit handling | No errors | Graceful backoff |
| Memory usage | <200 MB | <500 MB |

### Test 5.2: Concurrent Request Handling
**Manual Test**

| Scenario | Expected |
|----------|----------|
| 10 parallel create requests | All succeed without race conditions |
| Mixed create/update/delete | Operations complete consistently |
| **Expected** | No deadlocks or lost data |

### Test 5.3: Large File Handling
**Manual Test**

| Scenario | Expected |
|----------|----------|
| Markdown file >10 MB | Syncs successfully |
| Entry with >1000 word body | Stored and retrieved correctly |
| **Expected** | No truncation or data loss |

---

## TEST CATEGORY 6: Data Integrity & Validation

### Test 6.1: Schema Compliance
**Script**: sandbox-mirror-check.js

| Check | Expected |
|-------|----------|
| All entries match content type schema | ✅ Valid |
| Required fields present | ✅ No nulls for required fields |
| Field types correct | ✅ Strings are strings, dates are dates |
| Custom field values valid | ✅ Follow field constraints |

### Test 6.2: Date & Timestamp Integrity
**Script**: sandbox-mirror-check.js (extended)

| Check | Expected |
|-------|----------|
| created_at preserved | ✅ Original creation date unchanged |
| updated_at refreshed on sync | ✅ Reflects latest sync time |
| Publication date preserved | ✅ No accidental re-dating |

### Test 6.3: Relationship Integrity (if applicable)
**Manual Test**

| Check | Expected |
|-------|----------|
| Parent/child relationships intact | ✅ No orphaned children |
| Reference fields valid | ✅ All IDs point to existing entries |
| Asset references intact | ✅ Images/files still linked |

### Test 6.4: Content Encoding
**Script**: sandbox-sync-test.js (extended)

| Scenario | Expected |
|----------|----------|
| UTF-8 characters (emoji, accents) | ✅ Stored correctly |
| HTML in markdown | ✅ Escaped or converted |
| Special characters | ✅ No data corruption |

---

## TEST CATEGORY 7: Authorization & Security

### Test 7.1: Credential Isolation
**Code Review**

| Check | Expected |
|-------|----------|
| No hardcoded secrets | ✅ All from environment variables |
| No secrets in logs | ✅ Credentials never printed |
| GitHub Secrets used | ✅ Injection controlled |

### Test 7.2: Token Expiry Handling
**Manual Test**

| Scenario | Expected |
|----------|----------|
| Expired management token | ✅ Clear error; suggest token refresh |
| Expired delivery token | ✅ Clear error; check API key permissions |
| Invalid API key | ✅ Immediate rejection; no retries |

### Test 7.3: Permission Boundaries
**Manual Test**

| Scenario | Expected |
|----------|----------|
| Sandbox credentials on Production API | ❌ Access denied |
| Production credentials on Sandbox API | ❌ Access denied (intentional) |
| Read-only credentials on write | ❌ Proper permission error |

---

## TEST CATEGORY 8: Workflow & Automation

### Test 8.1: Scheduled Execution
**Workflow**: sandbox-test-only.yml

| Time | Expected |
|------|----------|
| 2 AM UTC | All tests run automatically ✅ |
| 12 PM UTC | All tests run automatically ✅ |
| 5 PM UTC | All tests run automatically ✅ |
| **Verification** | GitHub Actions logs show 3 successful runs daily |

### Test 8.2: Manual Trigger
**Workflow**: sandbox-test-only.yml

| Trigger | Expected |
|---------|----------|
| GitHub UI "Run workflow" | Tests execute immediately ✅ |
| `gh workflow run` CLI | Tests execute immediately ✅ |
| **Verification** | Workflow runs on-demand without schedule |

### Test 8.3: Failure Notifications
**Workflow**: sandbox-test-only.yml

| Failure Scenario | Expected |
|------------------|----------|
| Script returns exit code 1 | Workflow marked as failed ❌ |
| API timeout | Retry and recovery logged |
| Missing credentials | Clear error message in logs |

### Test 8.4: Success Reporting
**Workflow**: sandbox-test-only.yml

| Success Scenario | Expected |
|------------------|----------|
| All tests pass | Workflow marked as successful ✅ |
| Exit code 0 | Green check in GitHub UI |
| Logs summarize results | Clear pass/fail per test |

---

## TEST CATEGORY 9: Git Workflow Integration

### Test 9.1: Branch Management
**Script**: sandbox-sync-test.js

| Operation | Expected |
|-----------|----------|
| Create feature branch | Branch created successfully |
| Commit test file | Commit appears in branch history |
| Delete branch after test | Branch cleaned up |
| **Verification** | Git log shows test commits; cleanup removes traces |

### Test 9.2: Merge Conflict Prevention
**Manual Test**

| Scenario | Expected |
|----------|----------|
| Sync creates commit while PR pending | No merge conflicts |
| Multiple sync operations | Commits squashed/ordered properly |

### Test 9.3: Git History Integrity
**Script**: All scripts

| Check | Expected |
|-------|----------|
| Commits are signed | ✅ If signing enabled |
| Commit messages clear | ✅ Describe what synced |
| No force pushes | ✅ Clean history |

---

## TEST CATEGORY 10: Documentation & Support

### Test 10.1: Error Messages Clarity
**Script**: All scripts

| Error Type | Expected Message |
|------------|------------------|
| Missing credentials | Lists exact env var names needed |
| API failure | Shows status code + error detail |
| File not found | Shows full path tried |
| Sync mismatch | Suggests resolution steps |

### Test 10.2: Logging Verbosity
**Script**: All scripts

| Log Level | Expected |
|-----------|----------|
| Status updates | Every major step logged |
| Counts | Entry/file counts at each step |
| Warnings | Non-fatal issues flagged with ⚠️ |
| Errors | Critical issues with ❌ |

### Test 10.3: Help & Documentation
**Files**

| Document | Required Content |
|----------|------------------|
| README.md | How to run tests |
| QUICKSTART.md | 5-minute setup guide |
| AUTOMATION_SETUP.md | Detailed config steps |
| SYNC_LOGIC_EXPLAINED.md | How sync works |
| PRODUCTION_READINESS_TEST_PLAN.md | This file! |

---

## Acceptance Criteria: 100% Production Ready

### All Tests Must Pass
- ✅ Category 1: Sandbox Mirror Integrity (5/5 tests)
- ✅ Category 2: Git ↔ Sandbox Parity (5/5 tests)
- ✅ Category 3: Sync Operations (5/5 tests)
- ✅ Category 4: Error Handling (4/4 tests)
- ✅ Category 5: Performance (3/3 tests)
- ✅ Category 6: Data Integrity (4/4 tests)
- ✅ Category 7: Authorization (3/3 tests)
- ✅ Category 8: Workflow (4/4 tests)
- ✅ Category 9: Git Integration (3/3 tests)
- ✅ Category 10: Documentation (3/3 tests)

**Total: 43 test categories covering all aspects**

### Execution Checklist
- [ ] All 3 test scripts run successfully
- [ ] Workflow scheduled for 3x daily execution
- [ ] Manual triggers work (gh workflow run)
- [ ] Logs are clear and actionable
- [ ] Error messages guide resolution
- [ ] No production data touched
- [ ] Cleanup removes all test data
- [ ] Documentation complete and accurate
- [ ] Team trained on interpreting results
- [ ] On-call runbook created for failures

### Sign-Off
- [ ] QA Lead: Tests comprehensive and cover edge cases
- [ ] DevOps: Automation is safe and scalable
- [ ] Product: Ready for production monitoring
- [ ] Docs: All procedures documented

---

## Running the Tests

### One-Time Setup
```bash
cd tools/cs-sync
npm ci
```

### Run Manually (One-Off)
```bash
# Verify Sandbox mirrors Production
node sandbox-mirror-check.js

# Verify Git ↔ Sandbox parity
node sandbox-git-parity-check.js

# Test sync operations
node sandbox-sync-test.js

# Run all three
npm run test:sandbox
```

### Automated (3x Daily)
Tests run automatically at:
- **2 AM UTC**
- **12 PM UTC**
- **5 PM UTC**

View results in: **GitHub → Actions → "Sandbox Test (Safe - No Production)"**

### Environment Variables Required
```bash
# For API-Docs stack
export STACK_TYPE=apidocs
export PROD_APIDOCS_STACK_API_KEY=...
export PROD_APIDOCS_STACK_DELIVERY_TOKEN=...
export APIDOCS_SANDBOX_STACK_API_KEY=...
export APIDOCS_SANDBOX_MANAGEMENT_TOKEN=...

# For CS-Docs stack
export STACK_TYPE=csdocs
export PROD_CSDOCS_STACK_API_KEY=...
export PROD_CSDOCS_STACK_DELIVERY_TOKEN=...
export CSDOCS_SANDBOX_STACK_API_KEY=...
export CSDOCS_SANDBOX_MANAGEMENT_TOKEN=...
```

### Interpreting Results
- **✅ PASS**: All checks successful, system working correctly
- **⚠️ WARNING**: Non-critical issues, monitor situation
- **❌ FAIL**: Critical issue requiring immediate attention
- **Exit Code 0**: Success (can be used in CI/CD)
- **Exit Code 1**: Failure (blocks merge if in CI/CD)

---

## Troubleshooting

### Common Failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Missing credentials" | Env vars not set | Check .env or GitHub Secrets |
| "Entry count mismatch" | Sync drift | Run `node full-sync_25July26.js` |
| "Sandbox has extra entries" | Old test data | Manual cleanup in CMS |
| "Git parity failed" | Unmapped folder | Update FOLDER_TO_CONTENT_TYPE |
| "Sync test timeout" | Slow API | Check Contentstack status page |

### Escalation Path
1. **Check logs** → What exactly failed?
2. **Run single test** → Isolate the issue
3. **Check credentials** → Are tokens valid?
4. **Check API status** → Is Contentstack down?
5. **Review data** → Is there orphaned/stale data?
6. **Contact support** → If still stuck

---

## Next Steps

1. **Run baseline tests** — Establish current system health
2. **Fix any failures** — Address root causes
3. **Enable automation** — Deploy .github/workflows/sandbox-test-only.yml
4. **Monitor results** — Review logs 3x daily
5. **Iterate** — Improve tests based on real-world results

---

**Last Updated**: 2026-08-01
**Version**: 1.0
**Status**: Draft (waiting for test run results)
