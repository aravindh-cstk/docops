---
url: /developers/documentation/sync-pipeline-test-cases
marker: "Documentation"
heading: "Sync Pipeline Test Cases"
---

# Sync Pipeline Test Cases

Validation tests for bidirectional Git↔CMS synchronization. Run these after merging `test_gladys` to `main` to verify the sync pipeline works end-to-end.

---

## Tier 1: Core Validation (Priority)

### 1. CREATE — New file syncs to CMS ✅

**Status:** Verified (test_gladys branch)

**Scenario:**
- New `.md` files added to cs-docs, api-docs, sdk-docs
- Frontmatter includes valid url, marker, heading

**Test Files:**
- `cs-docs/assets/TEST_add-users-to-assets.md`
- `api-docs/asset-management-api-requests/TEST_Create-a-Space.md`
- `sdk-docs/docs-app-typescript/CustomField/TEST_CustomField.md`

**Expected Outcome:**
- GitHub Actions workflow triggers on merge
- New entries appear in Contentstack CMS dashboard
- Entries are in draft status (awaiting review)

**Verification Steps:**
1. Merge `test_gladys` to `main`
2. Watch GitHub Actions: `contentstack-sync.yml` runs
3. Open Contentstack CMS → check "Assets" stack for `TEST_add-users-to-assets` entry
4. Verify entry title matches frontmatter title
5. Verify entry URL is correct

**How to Report:**
```
✅ CREATE test passed
- Entry created: TEST_add-users-to-assets
- Status: Draft
- URL correct: /assets/test-add-users-to-assets
```

---

### 2. RENAME — File path change updates CMS URL

**Status:** Not yet tested

**Scenario:**
- Rename `TEST_add-users-to-assets.md` → `TEST_add-users-to-assets-renamed.md`
- Update frontmatter url to match new path

**Setup:**
1. After CREATE test passes, create new commit:
   ```bash
   git mv cs-docs/assets/TEST_add-users-to-assets.md cs-docs/assets/TEST_add-users-to-assets-renamed.md
   ```
2. Update frontmatter in renamed file:
   ```yaml
   url: /assets/test-add-users-to-assets-renamed
   ```
3. Push to `test_gladys`, create PR to `main`

**Expected Outcome:**
- Old URL (`/assets/test-add-users-to-assets`) unpublished/deleted in CMS
- New URL (`/assets/test-add-users-to-assets-renamed`) published in CMS
- Entry content preserved

**Verification Steps:**
1. Check CMS: Search for `test-add-users-to-assets` (old) → should not exist
2. Check CMS: Search for `test-add-users-to-assets-renamed` (new) → should exist
3. Verify content is identical to original

**How to Report:**
```
✅ RENAME test passed
- Old URL unpublished: /assets/test-add-users-to-assets
- New URL published: /assets/test-add-users-to-assets-renamed
- Content preserved: ✓
```

---

### 3. UPDATE — File changes sync to CMS ✅

**Status:** Verified (test_gladys branch)

**Scenario:**
- Modify existing test file: `TEST_add-users-to-assets_1update.md`
- Change only frontmatter (title, last_updated)

**Test File:**
- `cs-docs/assets/TEST_add-users-to-assets_1update.md`

**Expected Outcome:**
- GitHub Actions detects file change
- CMS entry updated with new title
- last_updated timestamp reflects the change
- Content body unchanged

**Verification Steps:**
1. Merge `test_gladys` to `main`
2. Watch GitHub Actions: sync workflow runs
3. Open Contentstack CMS → find `TEST_add-users-to-assets_1update` entry
4. Verify title shows `(UPDATED)` marker
5. Verify last_updated date is 2026-07-18

**How to Report:**
```
✅ UPDATE test passed
- Entry updated: TEST_add-users-to-assets_1update
- Title shows (UPDATED): ✓
- last_updated: 2026-07-18 ✓
- Content unchanged: ✓
```

---

### 4. DELETE — File removal unpublishes from CMS

**Status:** Verified (test_gladys branch)

**Scenario:**
- File marked for deletion: `TEST_add-users-to-assets_1.md`
- Entry should be unpublished/removed from CMS

**Test File:**
- `cs-docs/assets/TEST_add-users-to-assets_1.md`

**Expected Outcome:**
- After merge, file gets deleted from repo
- GitHub Actions detects deletion
- CMS entry is unpublished or marked as deleted
- Entry no longer appears in live docs

**Verification Steps:**
1. Merge `test_gladys` to `main`
2. Wait for sync workflow to complete
3. Open Contentstack CMS → search for `TEST_add-users-to-assets_1`
4. Entry should NOT exist or be unpublished

**How to Report:**
```
✅ DELETE test passed
- Entry removed from CMS: TEST_add-users-to-assets_1
- No longer in active entries: ✓
```

---

### 5. BATCH — Multiple files sync simultaneously

**Status:** Partially verified (3 files in test_gladys)

**Scenario:**
- Multiple new files added across different content types
- All should sync to CMS in single merge

**Test Files:**
- All 9 TEST_* files in `test_gladys` branch

**Expected Outcome:**
- All 9 entries created in CMS
- No race conditions or missed syncs
- All entries have correct metadata

**Verification Steps:**
1. After merge, watch GitHub Actions output
2. Search CMS for all entries:
   - `TEST_add-users-to-assets*` (3)
   - `TEST_Create-a-Space*` (3)
   - `TEST_CustomField*` (3)
3. Verify all 9 exist with correct URLs and titles

**How to Report:**
```
✅ BATCH test passed
- Files synced: 9/9
- All URLs correct: ✓
- All titles correct: ✓
- No duplicates: ✓
```

---

### 6. FRONTMATTER-ONLY — Metadata updates without content changes

**Status:** Not yet tested

**Scenario:**
- Modify only frontmatter fields (title, description, last_updated)
- Content body remains unchanged
- Verify CMS metadata updates without re-syncing body

**Setup:**
1. After CREATE test passes, edit one test file:
   ```yaml
   title: "TEST - Updated Title"
   last_updated: 2026-07-21
   ```
2. Keep content identical
3. Push to `test_gladys`, create PR

**Expected Outcome:**
- CMS entry title updates
- Content body unchanged
- Metadata reflects changes
- No content re-sync lag

**Verification Steps:**
1. Check CMS entry before change → note title
2. Push change, wait for sync
3. Check CMS entry after change → verify new title
4. Verify body content is identical

**How to Report:**
```
✅ FRONTMATTER-ONLY test passed
- Title updated in CMS: ✓
- Content unchanged: ✓
- Metadata sync successful: ✓
```

---

### 7. WEBHOOK — CMS publish triggers Git PR

**Status:** Not yet tested

**Scenario:**
- Create entry directly in Contentstack CMS
- Publish entry
- Verify GitHub PR auto-created in docops repo

**Setup:**
1. In Contentstack CMS, create test entry:
   - Title: `CMS_WEBHOOK_TEST`
   - URL: `/assets/cms-webhook-test`
   - Content: Test description
2. Publish entry
3. Wait for webhook trigger

**Expected Outcome:**
- GitHub PR automatically created in docops repo
- PR title references the CMS entry
- New `.md` file added with correct frontmatter
- PR ready for review/merge

**Verification Steps:**
1. Create entry in CMS
2. Publish entry
3. Check GitHub: https://github.com/aravindh-cstk/docops/pulls
4. New PR should appear within 30 seconds
5. Review PR: verify `.md` file content matches CMS entry

**How to Report:**
```
✅ WEBHOOK test passed
- CMS entry created: CMS_WEBHOOK_TEST
- PR auto-created: ✓
- File content matches CMS: ✓
- Ready to merge: ✓
```

---

### 8. UNPUBLISH — CMS deletion triggers Git PR

**Status:** Not yet tested

**Scenario:**
- Unpublish/delete entry in Contentstack CMS
- Verify GitHub PR created to remove file from repo

**Setup:**
1. Find existing test entry in CMS (e.g., `TEST_add-users-to-assets`)
2. Unpublish or delete entry
3. Wait for webhook

**Expected Outcome:**
- GitHub PR automatically created
- PR removes `.md` file from docops repo
- Commit message references the deletion

**Verification Steps:**
1. Unpublish entry in CMS
2. Wait 30 seconds
3. Check GitHub: new PR should appear
4. PR should show file deletion
5. Review changes, merge to apply deletion

**How to Report:**
```
✅ UNPUBLISH test passed
- CMS entry unpublished: TEST_add-users-to-assets
- PR auto-created with deletion: ✓
- File removal is correct: ✓
```

---

## Test Execution Timeline

**Week 1:**
- ✅ CREATE (merge to main, verify immediately)
- ✅ UPDATE (included in merge)
- ✅ DELETE (included in merge)
- ✅ BATCH (all 9 files, included in merge)

**Week 2:**
- RENAME (create new test commit)
- FRONTMATTER-ONLY (create new test commit)

**Week 3:**
- WEBHOOK (manual CMS test)
- UNPUBLISH (manual CMS test)

---

## How to Document Results

After running each test, update this file:

```markdown
### Test Name — [Status]

**Result:** PASS / FAIL / PARTIAL

**Date Tested:** YYYY-MM-DD

**Verified By:** [Your name]

**Details:**
- [Specific outcome]
- [Any issues encountered]
- [How it was resolved]

**Evidence:**
- Screenshot of CMS entry
- GitHub Actions run log
- PR link (if applicable)
```

---

## Known Issues / Gaps

Document any failures or unexpected behavior here:

| Test | Issue | Status | Notes |
|------|-------|--------|-------|
| — | — | — | None yet |

---

## Questions?

- **Sync not working?** Check GitHub Actions logs: https://github.com/aravindh-cstk/docops/actions
- **CMS entry missing?** Verify frontmatter url and marker fields
- **Linting errors?** Run `./lint-before-push.sh` before pushing
- **Need help?** Reference [LINT-WORKFLOW.md](./LINT-WORKFLOW.md)
