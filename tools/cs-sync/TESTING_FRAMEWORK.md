# Sandbox Testing Framework

Complete sandbox-only testing suite for Git ↔ Sandbox CMS bidirectional sync. **No production data is modified.**

## Overview

This framework provides three complementary test scripts that run automatically 3x daily (2 AM, 12 PM, 5 PM UTC) to ensure the sync system stays healthy and production-ready.

```
Production (READ-ONLY)  ←→  Sandbox (TEST)  ←→  Git (FEATURE BRANCHES)
    ↓                           ↓                      ↓
    └─ Mirror Check ────────────┘                      │
       (Compare counts)                                │
                                                       │
                         ┌─ Parity Check ─────────────┘
                         │ (File count vs entries)
                         │
                         └─ Sync Test ────────────────
                           (Create/Update/Delete)
```

---

## Quick Start

### Setup (One-Time)
```bash
cd tools/cs-sync
npm ci
```

### Run Tests Manually
```bash
# Test 1: Verify Sandbox mirrors Production
node sandbox-mirror-check.js

# Test 2: Verify Git ↔ Sandbox parity
node sandbox-git-parity-check.js

# Test 3: Test sync operations (create/update/delete)
node sandbox-sync-test.js

# Run all three (if npm scripts configured)
# npm run test:sandbox
```

### Environment Variables
**For API-Docs:**
```bash
export STACK_TYPE=apidocs
export PROD_APIDOCS_STACK_API_KEY=...
export PROD_APIDOCS_STACK_DELIVERY_TOKEN=...
export APIDOCS_SANDBOX_STACK_API_KEY=...
export APIDOCS_SANDBOX_MANAGEMENT_TOKEN=...
```

**For CS-Docs:**
```bash
export STACK_TYPE=csdocs
export PROD_CSDOCS_STACK_API_KEY=...
export PROD_CSDOCS_STACK_DELIVERY_TOKEN=...
export CSDOCS_SANDBOX_STACK_API_KEY=...
export CSDOCS_SANDBOX_MANAGEMENT_TOKEN=...
```

Or set in `.env` file (see `.env.example`).

---

## Script Details

### 1. sandbox-mirror-check.js

**Purpose**: Verify Sandbox mirrors Production

**What It Tests**:
- Entry counts per content type (Production vs Sandbox)
- All Production entries exist in Sandbox
- Content type coverage
- Detects stale/extra entries in Sandbox

**Runtime**: ~30-60 seconds

**Exit Code**:
- `0` = Sandbox perfectly mirrors Production
- `1` = Mismatches found (review logs)

**Usage**:
```bash
node sandbox-mirror-check.js
```

**Output Example**:
```
🔍 Sandbox Mirror Check (APIDOCS) - Read-Only Comparison

📥 Fetching content types from both stacks...

Found 5 content types

📊 API Requests (CMA)
   Fetching production entries...
   ✓ Production: 142 entries
   Fetching sandbox entries...
   ✓ Sandbox: 142 entries
   ✅ All production entries in sandbox

📊 API Requests (CDA)
   Fetching production entries...
   ✓ Production: 89 entries
   Fetching sandbox entries...
   ✓ Sandbox: 89 entries
   ✅ All production entries in sandbox

...

📋 SUMMARY

Total Entries:
  Production: 456
  Sandbox:    456

✅ PASS: Sandbox mirrors Production perfectly
```

### 2. sandbox-git-parity-check.js

**Purpose**: Verify Git markdown files match Sandbox CMS entries

**What It Tests**:
- Folder-to-content-type mappings are valid
- Markdown file count equals entry count (per content type)
- All content types have Git representation
- File naming aligns with entry URLs
- Frontmatter is valid YAML

**Runtime**: ~20-30 seconds

**Exit Code**:
- `0` = Perfect parity between Git and Sandbox
- `1` = Mismatches found (needs investigation)

**Usage**:
```bash
node sandbox-git-parity-check.js
```

**Output Example**:
```
🔍 Sandbox ↔ Git Parity Check (APIDOCS) - Read-Only Comparison

📥 Analyzing Git folders and Sandbox content types...

📁 Git Folders: 3
📊 Sandbox Content Types: 5

📊 content-management-api-requests
   Content Type: api_requests_cma
   Git Files: 142 markdown files
   Sandbox: 142 entries
   ✅ MATCH: Git and Sandbox are in sync

📊 content-delivery-api-requests
   Content Type: api_requests_cda
   Git Files: 89 markdown files
   Sandbox: 89 entries
   ✅ MATCH: Git and Sandbox are in sync

...

📋 SUMMARY

Git Total:     231 markdown files
Sandbox Total: 231 entries

✅ PASS: Git and Sandbox are in perfect parity

📊 Detailed Mappings:

Folder                                  | Content Type            | Git | Sandbox | Match
content-management-api-requests         | api_requests_cma        | 142 |     142 | ✅
content-delivery-api-requests           | api_requests_cda        |  89 |      89 | ✅
```

### 3. sandbox-sync-test.js

**Purpose**: Test bidirectional sync operations (Create, Update, Delete)

**What It Tests**:
- CREATE: Add markdown file → syncs to Sandbox
- UPDATE: Modify markdown → changes sync to Sandbox
- DELETE: Remove markdown → entry removed from Sandbox
- Cleanup: Test files don't pollute system

**Runtime**: ~1-2 minutes

**Exit Code**:
- `0` = Tests completed (see logs for details)
- `1` = Fatal error (check setup)

**Usage**:
```bash
node sandbox-sync-test.js
```

**Output Example**:
```
🔒 SANDBOX SYNC OPERATIONS TEST
📂 Stack Type: APIDOCS
📂 Git Branch: test/sync-test-entry
📂 Test File: test-sync-entry-1722502800000.md
⚠️  Production CMS is NOT touched

======================================================================

📝 TEST 1: CREATE - Add test file to Git, verify sync to Sandbox

1️⃣  Checking out test branch...
   Creating branch test/sync-test-entry...
2️⃣  Creating test markdown file...
   ✓ File created: test-sync-entry-1722502800000.md
3️⃣  Committing to Git...
   ✓ Committed to Git
4️⃣  Verifying sync to Sandbox CMS...
   ✓ Entry found in Sandbox: blt123abc456def789

📝 TEST 2: UPDATE - Modify test file, verify sync to Sandbox

1️⃣  Updating test markdown file...
   ✓ File updated
2️⃣  Committing update to Git...
   ✓ Update committed
3️⃣  Verifying sync to Sandbox...
   ✓ Update verified in Sandbox

📝 TEST 3: DELETE - Remove test file, verify removal from Sandbox

1️⃣  Deleting test file from Git...
   ✓ File deleted
2️⃣  Committing deletion to Git...
   ✓ Deletion committed
3️⃣  Verifying removal from Sandbox...
   ✓ Entry confirmed removed from Sandbox

🧹 CLEANUP: Reverting test changes

1️⃣  Reverting Git changes...
   ✓ Git reset to main
2️⃣  Cleaning up test branch...
   ✓ Branch test/sync-test-entry deleted
3️⃣  Removing test entry from Sandbox...
   ✓ Entry removed from Sandbox

======================================================================
📊 SYNC OPERATIONS TEST SUMMARY

CREATE: ✅ PASS
UPDATE: ✅ PASS
DELETE: ✅ PASS

✅ All sync operations passed
```

---

## Automated Execution

### Schedule

Tests run automatically at 3 times per day:

| Time | Timezone | Purpose |
|------|----------|---------|
| 2 AM | UTC | Overnight: catch issues before workday |
| 12 PM | UTC | Midday: verify during business hours |
| 5 PM | UTC | Evening: final check before night |

### View Results

1. Go to: **GitHub → Actions**
2. Click: **"Sandbox Test (Safe - No Production)"**
3. Select latest run
4. Review logs for each test

### Manual Trigger

Run tests on-demand:

```bash
# Via GitHub CLI
gh workflow run sandbox-test-only.yml

# Or via GitHub UI:
# Actions → Sandbox Test → Run workflow
```

---

## Understanding Results

### Success Indicators
```
✅ PASS: All checks passed
✅ All sync operations passed
✅ All checks passed
Exit code: 0
```

### Warning Signs
```
⚠️  Missing in Sandbox (5 entries)
⚠️  Content Type Mismatches (1)
⚠️  Some operations were incomplete
```

### Failure Indicators
```
❌ FAIL: Sandbox does NOT mirror Production
❌ Fatal error: ...
Exit code: 1
```

---

## Common Issues & Fixes

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Missing credentials" | Env vars not set | Check `.env` or GitHub Secrets |
| "Entry count mismatch" | Sync drift detected | Run `node full-sync_25July26.js` |
| "Sandbox has extra entries" | Old test data | Manual cleanup in Sandbox CMS |
| "Git parity failed" | Unmapped folder | Update `FOLDER_TO_CONTENT_TYPE` mapping |
| "Sync test timeout" | Slow API response | Check Contentstack status; retry |
| All tests timeout | Network issue | Check VPN/firewall; check API status |

---

## Production Readiness Checklist

Use this to verify system is production-ready:

### Baseline Tests
- [ ] Run each test script manually
- [ ] Verify all exit code 0
- [ ] Review logs for warnings

### Automation
- [ ] Schedule activated (3x daily)
- [ ] Manual triggers work
- [ ] GitHub Secrets configured
- [ ] Logs are clear and actionable

### Data Safety
- [ ] No production data modified
- [ ] Test cleanup removes orphaned data
- [ ] Rollback procedures documented

### Monitoring
- [ ] Team can interpret results
- [ ] Failure escalation path defined
- [ ] On-call playbook created

### Sign-Off
- [ ] QA: Tests are comprehensive
- [ ] Ops: Automation is safe
- [ ] Product: Ready for monitoring
- [ ] Docs: All procedures documented

---

## File Structure

```
tools/cs-sync/
├── sandbox-mirror-check.js          # Test 1: Production ← Sandbox
├── sandbox-git-parity-check.js      # Test 2: Git ↔ Sandbox
├── sandbox-sync-test.js             # Test 3: Sync operations
├── TESTING_FRAMEWORK.md             # This file
├── PRODUCTION_READINESS_TEST_PLAN.md # Comprehensive test spec
├── lib/
│   ├── config.js                    # Environment variable loader
│   ├── retry.js                     # Retry with backoff logic
│   └── merge-entry.js               # Entry field merging
├── .env.example                     # Environment template
└── package.json                     # Dependencies
```

---

## Extending the Tests

### Adding a New Content Type

**For parity check:**
1. Edit `sandbox-git-parity-check.js`
2. Add entry to `FOLDER_TO_CONTENT_TYPE`:
   ```javascript
   'new-folder': 'new_content_type',
   ```

**For sync test:**
1. Edit `sandbox-sync-test.js`
2. Update `TEST_FOLDER` and `TEST_CONTENT_TYPE` constants

### Adding a New Test Category

Create a new script following the pattern:
```javascript
#!/usr/bin/env node

// Header comment explaining purpose
// Environment variables required
// Exit codes (0 = pass, 1 = fail)

class MyTest {
  async run() {
    console.log('\n🔍 My Test\n');
    console.log('=' .repeat(70));
    
    try {
      // Test logic
      console.log('✅ Test passed');
      process.exit(0);
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      process.exit(1);
    }
  }
}

new MyTest().run();
```

---

## Troubleshooting

### Script Permissions
```bash
# Make scripts executable
chmod +x sandbox-mirror-check.js
chmod +x sandbox-git-parity-check.js
chmod +x sandbox-sync-test.js
```

### Node Version
```bash
# Check required version
node --version  # Should be ≥20

# If needed
nvm use 20
```

### Dependencies
```bash
# Reinstall if issues
npm ci  # Clean install

# Or with npm cache clear
npm cache clean --force
npm ci
```

### Credentials
```bash
# Create .env from template
cp .env.example .env

# Edit .env with actual values
# Do NOT commit .env to git!
```

---

## Support & Escalation

### Quick Checks
1. Are credentials valid?
2. Is the API accessible?
3. Are there recent Git changes?
4. Are there production incidents?

### Escalation Path
1. Review test logs
2. Run affected test in isolation
3. Check Contentstack status page
4. Verify GitHub Secrets are correct
5. Contact Contentstack support if needed

### Monitoring
- **Daily**: Check morning (2 AM) test results
- **Weekly**: Review trends (all 21 scheduled runs)
- **Monthly**: Update mappings if content types change

---

## Next Steps

1. ✅ Deploy test scripts
2. ✅ Activate scheduled workflow
3. ✅ Verify 3x daily execution
4. 🔄 Monitor for 1 week
5. 📊 Review baseline metrics
6. 📋 Create on-call runbook
7. 🎯 Declare production-ready

---

**Version**: 1.0
**Last Updated**: 2026-08-01
**Status**: Ready for deployment
