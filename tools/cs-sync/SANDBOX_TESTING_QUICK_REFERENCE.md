# Sandbox Testing Quick Reference

**Last Updated**: 2026-08-01  
**Status**: Ready for deployment  
**Target Audience**: QA, DevOps, Product Team

---

## What's New?

A complete sandbox-only testing framework that validates the Git ↔ Sandbox sync system 3 times daily:

| Time | Test | Purpose |
|------|------|---------|
| **2 AM UTC** | Mirror Check + Parity + Sync Ops | Overnight validation |
| **12 PM UTC** | Mirror Check + Parity + Sync Ops | Midday verification |
| **5 PM UTC** | Mirror Check + Parity + Sync Ops | Evening check |

**Key Principle**: Production is never touched. Only Sandbox data is used for testing.

---

## Files Created

### Test Scripts (Executable)
```
tools/cs-sync/
├── sandbox-mirror-check.js          ← Test 1: Prod ↔ Sandbox mirror
├── sandbox-git-parity-check.js      ← Test 2: Git ↔ Sandbox alignment
├── sandbox-sync-test.js             ← Test 3: Create/Update/Delete ops
```

### Documentation
```
tools/cs-sync/
├── TESTING_FRAMEWORK.md                    ← Framework overview & usage
├── PRODUCTION_READINESS_TEST_PLAN.md       ← Comprehensive 43-test spec
├── SANDBOX_TESTING_QUICK_REFERENCE.md      ← This file
```

### Automation
```
.github/workflows/
└── sandbox-test-only.yml            ← Scheduled 3x daily (2 AM, 12 PM, 5 PM UTC)
```

---

## One-Minute Setup

### 1. Ensure Dependencies
```bash
cd /Users/gladys.daniel/Documents/docops/tools/cs-sync
npm ci
```

### 2. Set Environment Variables

**Option A: .env file (for local testing)**
```bash
# Copy template
cp .env.example .env

# Edit .env with credentials
# NEVER commit .env to git
```

**Option B: GitHub Secrets (for automation)**
```
GitHub Settings → Secrets and variables → Actions

Required secrets:
  - PROD_APIDOCS_STACK_API_KEY
  - PROD_APIDOCS_STACK_DELIVERY_TOKEN
  - APIDOCS_SANDBOX_STACK_API_KEY
  - APIDOCS_SANDBOX_MANAGEMENT_TOKEN
```

### 3. Test Manually (Optional)
```bash
cd tools/cs-sync

# Run individual tests
node sandbox-mirror-check.js
node sandbox-git-parity-check.js
node sandbox-sync-test.js
```

### 4. Enable Automation
Tests run automatically 3x daily. No additional setup needed once secrets are configured.

---

## Running Tests

### Via GitHub Actions (Recommended)
```
GitHub → Actions → "Sandbox Test (Safe - No Production)" → View runs
```

### Manually via GitHub CLI
```bash
cd /Users/gladys.daniel/Documents/docops

# Trigger now
gh workflow run sandbox-test-only.yml

# Or through GitHub UI:
# Actions → Sandbox Test → "Run workflow" button
```

### Locally (For Debugging)
```bash
cd tools/cs-sync

# Individual tests
node sandbox-mirror-check.js
node sandbox-git-parity-check.js
node sandbox-sync-test.js

# Expected output: Detailed logs, exit code 0 (pass) or 1 (fail)
```

---

## Understanding Results

### TEST 1: Mirror Check
**What**: Sandbox mirrors Production?
```
✅ PASS: Sandbox mirrors Production perfectly
❌ FAIL: Missing X entries in Sandbox
⚠️  WARNING: Extra entries (stale data) in Sandbox
```
**Action**: If ❌, run `node full-sync_25July26.js`

### TEST 2: Parity Check
**What**: Git files match Sandbox entries?
```
✅ PASS: Git and Sandbox are in perfect parity
❌ FAIL: Mismatch in {folder} (X files ≠ Y entries)
⚠️  WARNING: Folder not mapped to content type
```
**Action**: If ❌, investigate mapping in script or sync drift

### TEST 3: Sync Operations Test
**What**: Create/Update/Delete operations work?
```
CREATE: ✅ PASS (entry created in Sandbox)
UPDATE: ✅ PASS (changes synced)
DELETE: ✅ PASS (entry removed)

✅ All sync operations passed
```
**Action**: If ❌, check Git connectivity and webhook status

---

## Exit Codes

| Code | Meaning | Action |
|------|---------|--------|
| **0** | Tests passed or completed | None required |
| **1** | Tests failed | Review logs for details |

### In GitHub Actions
- ✅ **Green** = All tests passed
- ⚠️ **Yellow** = Some tests incomplete (review logs)
- ❌ **Red** = Critical failure (immediate review needed)

---

## Common Scenarios

### Scenario 1: Daily Morning Check
**Time**: 2 AM UTC runs while you sleep

**Check upon waking**:
1. Go to GitHub Actions
2. Find latest "Sandbox Test" run
3. Expand each step:
   - ✅ If all green → No action needed
   - ⚠️ If yellow → Review warnings, likely non-critical
   - ❌ If red → Read error message, follow fix steps

**Time to review**: 2-3 minutes

### Scenario 2: Before Production Deployment
**Before going live:**
```bash
# Run all 3 tests manually
cd tools/cs-sync
node sandbox-mirror-check.js && \
  node sandbox-git-parity-check.js && \
  node sandbox-sync-test.js
```

**Verify**:
- [ ] All exit codes = 0
- [ ] All entry counts match
- [ ] No stale data in Sandbox
- [ ] Sync test files cleaned up

**Time needed**: 3-5 minutes

### Scenario 3: Investigate Mismatch
**Problem**: Git parity check failed

**Diagnose**:
1. Run: `node sandbox-git-parity-check.js 2>&1 | tee results.txt`
2. Check output for:
   - Which content type has mismatch
   - How many files vs entries
   - If any folders are unmapped
3. Review Git changes:
   ```bash
   cd ../../api-docs  # or cs-docs
   git log --oneline -20  # Recent commits
   git status             # Uncommitted changes
   ```
4. Review Sandbox:
   - Log into Contentstack
   - Check entry counts in each content type

**Likely causes**:
- New entries created in Sandbox not yet in Git
- Git files deleted but Sandbox entries remain
- Unmapped folders (normal for editorial-only content)

---

## What's Tested (Summary)

### Mirror Check (30-60 sec)
- [ ] Prod entry count = Sandbox entry count
- [ ] All Prod entries exist in Sandbox
- [ ] No missing content types
- [ ] Detects stale/extra entries

### Parity Check (20-30 sec)
- [ ] Git files per folder = Sandbox entries per content type
- [ ] All folders have valid mappings
- [ ] Markdown frontmatter is valid YAML
- [ ] File naming aligns with entry URLs

### Sync Operations (1-2 min)
- [ ] Create: File in Git → Entry in Sandbox
- [ ] Update: Changes in Git → Changes in Sandbox
- [ ] Delete: File deleted from Git → Entry removed from Sandbox
- [ ] Cleanup: No orphaned test data left behind

---

## Troubleshooting

| Problem | Check | Fix |
|---------|-------|-----|
| "Missing credentials" | `.env` file exists? | Copy `.env.example` → `.env`, add values |
| "API returned 401" | Tokens valid? | Refresh tokens in GitHub Secrets |
| "Timeout" | Network ok? | Check Contentstack status, retry |
| "File not found" | Git folder exists? | Verify path: `api-docs/` or `cs-docs/` |
| Mirror test fails | Sync drift? | Run: `node full-sync_25July26.js` |
| Parity test fails | Unmapped folder? | Add to `FOLDER_TO_CONTENT_TYPE` |
| Sync test fails | Git branch issue? | Manual cleanup: `git checkout main && git branch -D test/sync-test-entry` |

---

## Metrics & Monitoring

### What to Monitor Daily

```
curl -s https://api.github.com/repos/contentstack/contentstack-docs/actions/runs \
  -H "Authorization: token $GITHUB_TOKEN" | jq '.workflow_runs[] | select(.name=="Sandbox Test")'
```

Or simply: Check GitHub Actions UI each morning

### Health Indicators
- ✅ **Good**: All tests pass 21/21 times per week (3x daily)
- ⚠️ **Watch**: 1-2 failures per week (investigate root cause)
- ❌ **Critical**: 3+ failures per week (escalate)

### Weekly Metrics
- Total scheduled runs
- Pass rate %
- Average execution time
- Most common failures

---

## When to Escalate

### Contact Team If:
1. **Test fails 3+ times in a week** → Likely systemic issue
2. **"Missing in Sandbox" count growing** → Sync drift not recovering
3. **"Extra in Sandbox" > 10 entries** → Stale data accumulating
4. **Parity mismatch in multiple folders** → Mapping issue or schema change

### Provide When Escalating:
- Screenshot of failing test
- GitHub Actions run URL
- Steps to reproduce
- Error message (full text)

---

## Advanced: Customization

### For Different Stack Types

**API-Docs (default)**:
```bash
export STACK_TYPE=apidocs
node sandbox-mirror-check.js
```

**CS-Docs**:
```bash
export STACK_TYPE=csdocs
node sandbox-mirror-check.js
```

### For Custom Git Branch

**Sync Test Only**:
```bash
export GIT_BRANCH=my-feature-branch
node sandbox-sync-test.js
```

### For Custom Timeout

Edit script to increase retry attempts:
```javascript
// In each script's request function
const maxRetries = 5;  // Change from 3 to 5
```

---

## Integration with CI/CD

### Block Merge if Tests Fail

Add to `.github/workflows/pull-request.yml`:
```yaml
- name: Run Sandbox Tests
  run: |
    cd tools/cs-sync
    node sandbox-mirror-check.js
    node sandbox-git-parity-check.js
  env:
    APIDOCS_SANDBOX_STACK_API_KEY: ${{ secrets.APIDOCS_SANDBOX_STACK_API_KEY }}
    APIDOCS_SANDBOX_MANAGEMENT_TOKEN: ${{ secrets.APIDOCS_SANDBOX_MANAGEMENT_TOKEN }}
```

### Slack Notifications (Optional)

Add to workflow:
```yaml
- name: Notify Slack
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    text: 'Sandbox test failed: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

## Reference Links

- **Main framework**: [TESTING_FRAMEWORK.md](./TESTING_FRAMEWORK.md)
- **Full test spec**: [PRODUCTION_READINESS_TEST_PLAN.md](./PRODUCTION_READINESS_TEST_PLAN.md)
- **Setup guide**: [QUICKSTART.md](./QUICKSTART.md)
- **Sync logic**: [SYNC_LOGIC_EXPLAINED.md](./SYNC_LOGIC_EXPLAINED.md)

---

## Support

### For Issues:
1. Check logs in GitHub Actions
2. Run affected test locally
3. Review troubleshooting table above
4. Check Contentstack status page
5. Ask in #eng-docs Slack channel

### For Feature Requests:
- Suggest enhancements in engineering standup
- Document in GitHub Issue
- Submit PR with test updates

---

## Summary

You now have:
- ✅ 3 automated test scripts (production-safe)
- ✅ 3x daily execution (2 AM, 12 PM, 5 PM UTC)
- ✅ Comprehensive documentation (this guide + 2 others)
- ✅ Clear pass/fail indicators
- ✅ Actionable error messages

**Status**: Ready to deploy  
**Next Step**: Commit & push to activate automation

---

**Questions?** See [TESTING_FRAMEWORK.md](./TESTING_FRAMEWORK.md) for detailed docs or reach out to the platform team.
