# Bidirectional Sync - Test Procedure (Simplified)

## Setup Checklist

- [ ] All GitHub Secrets configured (stack IDs, tokens)
- [ ] `.github/workflows/sync-prod-to-sandbox.yml` deployed to main
- [ ] Git → CMS and CMS → Git scripts deployed
- [ ] Ready to test

---

## Test 1: Git → Prod CMS (PR Merge)

### Step 1: Create test markdown file

1. Create a new branch: `git checkout -b test/sync-test-entry`

2. Create test markdown file: `api-docs/content-management-api-requests/test-sync-entry.md`

```markdown
---
title: "Test Sync Entry"
description: "This is a test entry for sync verification"
url: test-sync-entry
product: Contentstack
doc_type: api-request
created_at: 2026-07-26T00:00:00Z
updated_at: 2026-07-26T00:00:00Z
---

# Test Sync Entry

This is a test entry created from Git markdown to verify bidirectional sync.

**API Endpoint**: `GET /v3/test`
**Method**: `GET`
```

3. Commit and push:
```bash
git add api-docs/content-management-api-requests/test-sync-entry.md
git commit -m "test: create sync test entry"
git push origin test/sync-test-entry
```

### Step 2: Create and merge PR

1. Go to **GitHub → New Pull Request**
2. Compare: `test/sync-test-entry` → `main`
3. **Title:** "test: sync test entry to CMS"
4. **Create PR** → **Merge PR**

### Step 3: Verify in Production CMS

**Expected:** Entry created as DRAFT in Production

1. Go to **API Docs Production Stack → Entries**
2. Search for: **"Test Sync Entry"**
3. ✅ **Should find it as DRAFT** (not published)
4. Check fields match markdown:
   - Title: "Test Sync Entry" ✓
   - URL: "test-sync-entry" ✓

---

## Test 2: Prod CMS → Sandbox CMS (Next 2 AM UTC)

### Option A: Wait for scheduled sync

1. **Next 2 AM UTC:**
   - Go to **GitHub → Actions → Sync Production to Sandbox**
   - **Should see a run** for that time
   - ✅ Check logs for success

2. **Verify in Sandbox:**
   - Go to **Sandbox API Docs Stack → Entries**
   - Search for **"Test Sync Entry"**
   - ✅ **Should find it as DRAFT** (matching production)

### Option B: Manual trigger (now)

1. Go to **GitHub → Actions → Sync Production to Sandbox**
2. Click **"Run workflow"** button
3. Select branch: **main**
4. Click **"Run workflow"**
5. ✅ Workflow starts immediately
6. Check logs once complete

### Step 3: Verify sync results

**Expected:** Entry in Sandbox, markdown in Git

1. **Sandbox CMS:**
   - Open **"Test Sync Entry"**
   - ✅ Status should be **DRAFT** (matching production)

2. **Git markdown:**
   - Go to **GitHub → api-docs/content-management-api-requests/**
   - ✅ **test-sync-entry.md** should exist

---

## Test 3: Publish → Sync to Sandbox

### Step 1: Publish in Production

1. Go to **Production API Docs → Entries**
2. Open **"Test Sync Entry"**
3. Click **"Publish"**
4. ✅ Entry is now **PUBLISHED**

### Step 2: Trigger next sync

**Option A: Wait for 2 AM UTC**
- Next scheduled sync will sync the published status

**Option B: Manual trigger now**
1. Go to **GitHub → Actions → Sync Production to Sandbox**
2. Click **"Run workflow"**
3. **Run workflow**

### Step 3: Verify published status synced

1. **Sandbox CMS:**
   - Open **"Test Sync Entry"**
   - ✅ Should be **PUBLISHED** (matching production)

2. **Git markdown:**
   - ✅ File should be updated with new timestamps

---

## Test 4: Unpublish → Sync to Sandbox

### Step 1: Unpublish in Production

1. Go to **Production API Docs → Entries**
2. Open **"Test Sync Entry"**
3. Click **"Unpublish"**
4. ✅ Entry is now **DRAFT**

### Step 2: Trigger sync

**Manual trigger:**
1. Go to **GitHub → Actions → Sync Production to Sandbox**
2. Click **"Run workflow"**
3. **Run workflow**

### Step 3: Verify draft status synced

1. **Sandbox CMS:**
   - Open **"Test Sync Entry"**
   - ✅ Should be **DRAFT** (matching production)

---

## Final Verification

After all tests pass:

```
✅ Test 1: Git → Prod CMS (PR merge creates draft entry)
✅ Test 2: Prod CMS → Sandbox CMS (daily sync mirrors entry)
✅ Test 3: Publish status syncs (published stays published)
✅ Test 4: Unpublish status syncs (draft stays draft)
✅ All three systems in sync (Git = Prod = Sandbox)
✅ Daily 2 AM UTC sync working
✅ Manual trigger working
```

---

## Cleanup

Remove test entry:

1. Go to **Production API Docs → Entries**
2. Open **"Test Sync Entry"**
3. Click **"Delete"**
4. Confirm delete
5. **Wait for next 2 AM UTC sync** OR **trigger manual sync**
6. Verify removed from Sandbox and Git

---

## Success Indicators

```
✅ Green checkmarks in GitHub Actions runs
✅ Entry appears in Sandbox after sync
✅ Markdown file appears in Git after sync
✅ Publish/unpublish status mirrors across all systems
✅ Daily safety check completes without errors
✅ Manual trigger works
✅ No external webhooks needed
```

**Once all tests pass: Bidirectional sync is PRODUCTION READY!** 🚀
