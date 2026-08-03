# Integration Testing Plan — DocOps Workflow

**Branch:** `test/sandbox-verify`  
**Environment:** Sandbox CMS only (Production READ-ONLY)  
**Test Data:** Max 10 files per operation  
**Status:** Ready to execute

---

## Phase 1: Enhanced Validation Scripts (Sandbox-Only)

### Test 1.1: Mirror Check (Prod ↔ Sandbox)
**Script:** `tools/cs-sync/sandbox-mirror-check-enhanced.js`

**Objective:** Verify Sandbox mirrors Production CMS published entries

**Preparation:**
```bash
cd tools/cs-sync
# Set environment variables (Sandbox credentials only)
export APIDOCS_SANDBOX_STACK_API_KEY="bltf92796d1cef4d3d4"
export APIDOCS_SANDBOX_MANAGEMENT_TOKEN="cs6829cf3da41d62cdad480661"
export PROD_APIDOCS_STACK_API_KEY="[your-prod-key]"
export PROD_APIDOCS_STACK_DELIVERY_TOKEN="[your-prod-token]"
```

**Test Cases:**
1. ✅ Entry in both Production and Sandbox → Match
2. ✅ Entry in Production, missing in Sandbox → Report missing
3. ✅ Entry in Sandbox, not in Production → Report extra
4. ✅ Duplicate URLs in Production → Report duplicates
5. ✅ 100+ entries → Performance check (<1 minute)

**Success Criteria:**
- All entries counted accurately
- Mismatches identified
- Duplicate URLs detected
- Duration <1 minute

---

### Test 1.2: Parity Check (Sandbox ↔ Git)
**Script:** `tools/cs-sync/sandbox-git-parity-check-enhanced.js`

**Objective:** Verify Sandbox entries match Git markdown files

**Test Cases:**
1. ✅ File in Git, entry in Sandbox → Match
2. ✅ File in Git, entry missing from Sandbox → Report missing
3. ✅ Entry in Sandbox, no file in Git → Report extra
4. ✅ YAML frontmatter invalid → Report validation error
5. ✅ Duplicate URLs across files → Report duplicates
6. ✅ Unsupported product folder → Report with error (no silent skip)
7. ✅ Unknown content type → Report error

**Success Criteria:**
- Accurate entry/file count matching
- YAML validation works
- All errors reported (no silent skipping)
- Folder mapping validated

---

### Test 1.3: Sync Operations Test
**Script:** `tools/cs-sync/sandbox-sync-test.js`

**Objective:** Test create/update/delete operations on Sandbox

**Preparation:** Create 5 test markdown files in Git

**Test Cases:**
1. ✅ CREATE: Add test file → Verify appears in Sandbox CMS
2. ✅ UPDATE: Modify test file → Verify change syncs to Sandbox
3. ✅ DELETE: Remove test file → Verify entry removed from Sandbox
4. ✅ IDEMPOTENCY: Run same sync twice → Second run = zero changes
5. ✅ ERROR HANDLING: Invalid YAML → Proper error message

**Success Criteria:**
- All three operations work
- Idempotent behavior confirmed
- No duplicate entries created
- Clean error messages

---

## Phase 2: Sync Workflow Testing

### Test 2.1: Production Import on Merge
**Workflow:** `.github/workflows/production-import-on-merge.yml`

**Objective:** Test import workflow on PR merge

**Preparation:**
1. Create feature branch
2. Add 3-5 new markdown files with valid YAML
3. Create PR
4. Merge to main

**Test Cases:**
1. ✅ Markdown files detected
2. ✅ YAML validates
3. ✅ Entries created as DRAFT (not published)
4. ✅ [DRAFT] prefix added to titles
5. ✅ Release created with all entries
6. ✅ Entries in correct folders
7. ✅ Workflow completes <3 minutes

**Success Criteria:**
- Entries created in Production CMS
- All have [DRAFT] prefix
- Status is DRAFT (not published)
- No auto-publishing
- Detailed log available

---

### Test 2.2: Sandbox Test Workflow (2 AM IST)
**Workflow:** `.github/workflows/sandbox-test-only.yml`

**Objective:** Test daily validation at 2 AM IST

**Trigger:** Manual workflow_dispatch (since we can't wait for 2 AM)

**Test Cases:**
1. ✅ Mirror check runs
2. ✅ Parity check runs
3. ✅ Sync ops test runs
4. ✅ All three complete successfully
5. ✅ Detailed logs recorded

**Success Criteria:**
- All three checks pass
- Duration <5 minutes
- Clear pass/fail for each test

---

### Test 2.3: Sandbox Test Workflow (5:30 PM IST)
**Same as 2.2, different time trigger**

---

## Phase 3: End-to-End Workflow

### Test 3.1: Complete Sync Cycle
1. Add 3 markdown files to Git (feature branch)
2. Push and create PR
3. Merge to main → Import workflow triggers
4. Verify entries created in Production CMS as [DRAFT]
5. Run mirror check → Should match
6. Run parity check → Should match
7. Manually publish one entry in Production CMS
8. Run export workflow → Verify markdown updated in Git
9. Git file shows as modified (updated_at changed)
10. Commit and merge Git changes

**Success Criteria:**
- All entries created correctly
- Parity maintained throughout
- Export picks up published entries
- Git reflects all changes

---

## Test Data Requirements

### Markdown Files (3-5 files)
```markdown
---
title: "[Studio] - Integration Test Document"
description: "Test document for integration testing"
url: "test-integration-doc"
product: "Contentstack"
---

# Integration Test Document

This is a test document for validating the sync workflow.

Test content here.
```

### Naming Convention
- `test-integration-[1-5].md`
- Always include [Product] prefix in title
- Valid YAML frontmatter
- Keep descriptions short

---

## 1-Day Execution Plan

**Morning (0-3 hours):**
- [ ] Phase 1.1: Mirror Check (5 min)
- [ ] Phase 1.2: Parity Check (5 min)
- [ ] Phase 1.3: Sync Operations (10 min)
- **Total: 20 minutes**

**Mid-Day (3-6 hours):**
- [ ] Phase 2.1: PR Merge Import (15 min - create PR, merge, verify)
- [ ] Phase 2.2: Sandbox Test Workflow (5 min - manual trigger)
- [ ] Phase 2.3: Quick Validation Run (5 min)
- **Total: 25 minutes**

**Afternoon (6-8 hours):**
- [ ] Phase 3.1: Complete End-to-End Cycle (30 min)
- [ ] Verify Production READ-ONLY (5 min)
- [ ] Data Integrity Check (5 min)
- [ ] Results Documentation (15 min)
- **Total: 55 minutes**

**Overall Duration: ~2 hours active testing + documentation**

---

## Logging & Reporting

**For each test:**
1. Capture full console output
2. Record start/end time
3. Verify all 22 improvements working
4. Check: no production modifications
5. Document any issues

**Report format:**
```
Test ID: [1.1]
Name: Mirror Check
Status: ✅ PASS / ❌ FAIL / ⚠️ PARTIAL
Duration: [seconds]
Key Results:
  - Entries matched: [count]
  - Missing from Sandbox: [count]
  - Extra in Sandbox: [count]
  - Duplicates found: [count]
Issues: [if any]
```

---

## Safety Checklist

Before each test:
- [ ] Credentials from environment variables only (no hardcoding)
- [ ] Sandbox credentials set
- [ ] Production credentials READ-ONLY (no modifications)
- [ ] Test data <10 files
- [ ] No production CMS access
- [ ] Rollback plan ready

After each test:
- [ ] Clean up test files from Git
- [ ] Remove test entries from Sandbox CMS
- [ ] Verify Production untouched
- [ ] All logs saved

---

## Success Metrics

✅ **All 22 Improvements Verified:**
1. Published entries only (no drafts/scheduled)
2. Production READ-ONLY
3. Sandbox mirrors Production
4. Git parity verified
5. Release grouping with [DRAFT] prefix
6. Comprehensive validation (counts, URLs, YAML, mapping)
7. Detailed error reporting
8. Retry logic (transient only)
9. Delete safety
10. Concurrency protection
11. Idempotency confirmed
12. Asset handling
13. Comprehensive logging
14. IST schedule validation
15. On-merge trigger works

**Overall:** 0 production modifications, 100% data integrity

---

## Next Steps

1. Execute Phase 1 (enhanced validation scripts)
2. Document results
3. Execute Phase 2 (workflows)
4. Execute Phase 3 (end-to-end)
5. Final sign-off for production deployment

**Estimated Duration:** 1 day (~2 hours active testing)
