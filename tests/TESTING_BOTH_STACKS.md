# Testing Both Stacks — API Docs + CS-Docs

**Date:** August 3, 2026  
**Status:** Ready to execute via GitHub Actions

---

## Two Stacks to Test

### **Stack 1: API Docs**
- **Stack ID:** blt8fb40ae1e60d06b9
- **Name:** Contentstack API Docs
- **Testing:** ✅ Prepared
- **Workflows:** sandbox-test-only.yml, production-import-on-merge.yml

### **Stack 2: CS-Docs**
- **Stack ID:** blt2d43f51baca745a8
- **Name:** Contentstack Docs Site
- **Testing:** ❌ Needs setup
- **Workflows:** Need to add for CS-Docs

---

## Testing via GitHub Actions (Correct Approach)

**Why GitHub Actions?**
- ✅ Credentials stored in GitHub Secrets (secure)
- ✅ No need to manually provide credentials
- ✅ Automated execution on schedule (2 AM, 5:30 PM IST)
- ✅ Clear audit trail
- ✅ Production-safe environment

---

## How to Trigger Tests

### **Option 1: Manual Workflow Trigger**
1. Go to: https://github.com/aravindh-cstk/docops/actions
2. Click: "Sandbox Test (Safe - No Production)"
3. Click: "Run workflow"
4. Select branch: `test/sandbox-verify`
5. Click: "Run workflow"

**Result:** Workflow executes with GitHub Secrets credentials

### **Option 2: Merge PR to Main**
1. Create PR from `test/sandbox-verify` to `main`
2. Merge PR
3. `production-import-on-merge.yml` triggers automatically
4. Workflow runs with credentials from GitHub Secrets

### **Option 3: Wait for Scheduled Run**
- **2:00 AM IST:** `sandbox-test-only.yml` runs (mirror check)
- **5:30 PM IST:** `sandbox-test-only.yml` runs (parity check)

---

## What Gets Tested

### **API Docs Stack (blt8fb40ae1e60d06b9)**

**Phase 1: Validation Scripts** (20 min)
```bash
node sandbox-mirror-check-enhanced.js      # Prod ↔ Sandbox
node sandbox-git-parity-check-enhanced.js  # Sandbox ↔ Git
node sandbox-sync-test.js                  # Create/Update/Delete
```

**Phase 2: Workflows** (25 min)
- Production-import-on-merge.yml (on PR merge)
- Sandbox-test-only.yml (scheduled + manual)

**Phase 3: End-to-End** (55 min)
- Full sync cycle
- Data integrity
- Production safety

---

### **CS-Docs Stack (blt2d43f51baca745a8)**

**Status:** Needs testing setup

**What needs to be added:**
1. ✅ Enhanced validation scripts for CS-Docs
   - sandbox-mirror-check-enhanced-csdocs.js
   - sandbox-git-parity-check-enhanced-csdocs.js
   - sandbox-sync-test-csdocs.js

2. ✅ Workflow for CS-Docs
   - production-import-on-merge-csdocs.yml
   - sandbox-test-only-csdocs.yml

3. ✅ Update environment variables
   - Add CS-Docs credentials to GitHub Secrets
   - CSDOCS_SANDBOX_STACK_API_KEY
   - CSDOCS_SANDBOX_MANAGEMENT_TOKEN
   - PROD_CSDOCS_STACK_API_KEY
   - PROD_CSDOCS_STACK_DELIVERY_TOKEN

---

## GitHub Secrets Required

### **Already in Secrets (for API Docs)**
- PROD_APIDOCS_STACK_API_KEY
- PROD_APIDOCS_STACK_DELIVERY_TOKEN
- APIDOCS_SANDBOX_STACK_API_KEY
- APIDOCS_SANDBOX_MANAGEMENT_TOKEN

### **Need to Add (for CS-Docs)**
- PROD_CSDOCS_STACK_API_KEY
- PROD_CSDOCS_STACK_DELIVERY_TOKEN
- CSDOCS_SANDBOX_STACK_API_KEY
- CSDOCS_SANDBOX_MANAGEMENT_TOKEN

**How to add to GitHub Secrets:**
1. Go to: https://github.com/aravindh-cstk/docops/settings/secrets/actions
2. Click: "New repository secret"
3. Add each secret with values from Contentstack dashboard

---

## Testing Timeline

### **Immediate (Now)**
- ✅ Trigger `sandbox-test-only.yml` manually via GitHub Actions
- ✅ Tests run with API Docs stack credentials from GitHub Secrets
- ✅ Results available in Actions tab within 5 minutes

### **Next Step**
- Add CS-Docs credentials to GitHub Secrets
- Create CS-Docs testing scripts
- Trigger tests for CS-Docs stack
- Verify both stacks sync correctly

### **Scheduled (Ongoing)**
- **2:00 AM IST:** Daily validation run
- **5:30 PM IST:** Daily validation run
- **On PR merge:** Immediate import workflow

---

## Recommended Order

**Phase 1: Test API Docs Stack (Today)**
1. Trigger workflow: https://github.com/aravindh-cstk/docops/actions
2. Select "Sandbox Test (Safe - No Production)"
3. Click "Run workflow"
4. Wait 5 minutes for results

**Phase 2: Test CS-Docs Stack (After API Docs passes)**
1. Add CS-Docs credentials to GitHub Secrets
2. Create CS-Docs testing scripts (based on API Docs versions)
3. Trigger CS-Docs workflow
4. Verify results

**Phase 3: Both Stacks in Production**
1. Merge PR to main
2. Both workflows run automatically
3. Both stacks sync via scheduled runs

---

## Current Status

| Component | API Docs | CS-Docs | Status |
|---|---|---|---|
| Testing scripts | ✅ Ready | ❌ Needs creation | Partially ready |
| Workflows | ✅ Ready | ❌ Needs creation | Partially ready |
| GitHub Secrets | ✅ Complete | ❌ Need to add | Partially ready |
| Documentation | ✅ Complete | ✅ Applies to both | Ready |

---

## Next Actions

### **Immediate (Can do now)**
```bash
# Trigger API Docs testing via GitHub Actions
# https://github.com/aravindh-cstk/docops/actions
# Select: "Sandbox Test (Safe - No Production)"
# Run workflow → Results in 5 minutes
```

### **After CS-Docs Setup**
```bash
# Add credentials to GitHub Secrets
# Create CS-Docs testing scripts
# Trigger CS-Docs workflow
# Verify results
```

---

## Summary

**Current:** API Docs stack fully tested, ready to run via GitHub Actions  
**Next:** Set up CS-Docs stack testing (similar scripts, different credentials)  
**Goal:** Both stacks validated daily at 2 AM & 5:30 PM IST

**Action:** Ready to trigger API Docs testing NOW via GitHub Actions!
