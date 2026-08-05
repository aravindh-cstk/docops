# Sandbox-First Workflow Architecture - Test Plan

## 🧪 Test Objectives

Validate the new three-way sync system:
1. ✅ GitHub → Sandbox (auto on main merge)
2. ✅ Sandbox → Prod/Staging (manual promotion)
3. ✅ Prod → Sandbox → GitHub (auto-detection + PR)

---

## 📊 Test Environment Setup

**Branch:** `test/phase1-apidocs-graphql-cda`  
**Stacks:**
- Sandbox: `APIDOCS_SANDBOX_STACK_API_KEY`
- Production: `PROD_APIDOCS_STACK_API_KEY`

**Workflows to test:**
1. `gh-to-sandbox-sync-apidocs.yml` - GitHub → Sandbox
2. `sandbox-to-prod-promote-apidocs.yml` - Sandbox → Prod
3. `cms-to-github-apidocs.yml` - Prod → GitHub

---

## 🔬 Test Scenarios

### Test 1: GitHub → Sandbox Sync

**Trigger:** Merge a test PR to main  
**Expected outcome:** Content appears in Sandbox CMS within seconds

**Steps:**
```bash
# 1. Create test content on branch
git checkout -b test/workflow-validation
echo "Test content for workflow validation" >> api-docs/api-detail/test-workflow.md
git add api-docs/api-detail/test-workflow.md
git commit -m "test: add workflow validation content"
git push origin test/workflow-validation

# 2. Create PR and merge to main
# (Via GitHub UI or gh pr create + merge)

# 3. Verify sync
# - Check Sandbox CMS for new entry
# - Look for api_detail_page content type
# - Entry should be in DRAFT status
```

**Pass Criteria:**
- ✅ Entry appears in Sandbox within 1-2 minutes
- ✅ All markdown frontmatter fields are present
- ✅ Body content is complete
- ✅ Status is DRAFT (not published)

---

### Test 2: Sandbox → Prod Promotion

**Trigger:** Manual workflow execution after publishing in Sandbox  
**Expected outcome:** Entry cloned to Prod and published to Staging environment

**Steps:**
```bash
# 1. In Sandbox CMS:
#    - Find the test entry created in Test 1
#    - Edit it (add some test text)
#    - Click "Publish" button
#    - Verify status shows "Published"

# 2. Trigger promotion workflow:
gh workflow run sandbox-to-prod-promote-apidocs.yml \
  --repo aravindh-cstk/docops \
  --branch test/phase1-apidocs-graphql-cda

# 3. Wait for workflow to complete
#    - Check GitHub Actions tab
#    - Should see "Promote API Docs from Sandbox to Prod (Staging env)"
#    - Status should be "completed" with ✅ success

# 4. Verify in Prod CMS:
#    - Entry should exist in Production CMS
#    - Check api_detail_page content type
#    - Verify all fields copied correctly
#    - Check "Staging" environment shows as published
#    - Verify "Production" environment is NOT published
```

**Pass Criteria:**
- ✅ Workflow completes successfully
- ✅ Entry created in Prod CMS
- ✅ Entry published to Staging environment only
- ✅ Production environment untouched
- ✅ Workflow logs show: "✓ Created in Prod", "✓ Published to staging"

---

### Test 3: Prod → Sandbox → GitHub Sync

**Trigger:** Edit in Prod CMS, wait for automated detection  
**Expected outcome:** PR created in GitHub with changes

**Steps:**
```bash
# 1. In Production CMS:
#    - Find the test entry from Test 2
#    - Edit it (change title or body text)
#    - Click "Publish" to update Staging

# 2. Wait for cms-to-github workflow:
#    - Runs automatically every 15 minutes
#    - Or manually trigger:
gh workflow run cms-to-github-apidocs.yml \
  --repo aravindh-cstk/docops \
  --branch test/phase1-apidocs-graphql-cda \
  --raw-field "lookback_minutes=60"

# 3. Check GitHub for new PR:
#    - Go to Pull Requests tab
#    - Look for "CMS → GitHub: API doc changes detected (Sandbox)"
#    - PR should be assigned to you
#    - Check email for notification

# 4. Review PR:
#    - Should show file changes from Prod edit
#    - Lint checks should run automatically
#    - If lint passes: ✅, if fails: ⚠️ (but mergeable)
#    - Merge the PR to complete the cycle
```

**Pass Criteria:**
- ✅ PR automatically created within 15 minutes
- ✅ PR title: "CMS → GitHub: API doc changes detected (Sandbox)"
- ✅ PR shows correct file changes
- ✅ Lint check reported (success or failure)
- ✅ PR assigned to user who made Prod changes
- ✅ Email notification received (Gmail, Slack, etc.)
- ✅ Can merge PR back to main

---

### Test 4: Complete Cycle (End-to-End)

**Full workflow:** Local → GitHub → Sandbox → Prod/Staging → GitHub

**Steps:**
```bash
# 1. Start on feature branch
git checkout -b docs/complete-test-cycle
echo "## Complete Test Content" >> api-docs/api-detail/test-complete.md
git add .
git commit -m "docs: add complete cycle test content"
git push origin docs/complete-test-cycle

# 2. Create PR, get review, merge to main
# (Via GitHub - PR workflow validates automatically)

# 3. Wait 1-2 min for gh-to-sandbox-sync
# Verify in Sandbox CMS:
#   - Entry appears
#   - Status is DRAFT
#   - Can view and edit

# 4. In Sandbox: Publish the entry
#    Click "Publish" button
#    Status changes to "Published"

# 5. Manually trigger Sandbox → Prod promotion
gh workflow run sandbox-to-prod-promote-apidocs.yml \
  --repo aravindh-cstk/docops \
  --branch test/phase1-apidocs-graphql-cda

# 6. Verify in Prod CMS:
#    - Entry exists
#    - Published to Staging
#    - Not published to Production

# 7. Make edit in Prod CMS
#    - Change title or body
#    - Publish to Staging

# 8. Wait for cms-to-github workflow (15 min or manual trigger)
gh workflow run cms-to-github-apidocs.yml \
  --repo aravindh-cstk/docops \
  --branch test/phase1-apidocs-graphql-cda \
  --raw-field "lookback_minutes=30"

# 9. Check GitHub for PR
#    - Should exist with your changes
#    - Assigned to you
#    - Lint checks pass/fail
#    - Merge PR

# ✅ Cycle complete!
```

**Pass Criteria:**
- ✅ All 4 workflows execute successfully
- ✅ Content flows through all 3 systems correctly
- ✅ No direct Prod creation (only via Sandbox promotion)
- ✅ Full accountability trail in GitHub
- ✅ Lint checks validate content
- ✅ Email notifications work

---

## 📋 Validation Checklist

### Workflow Execution
- [ ] `gh-to-sandbox-sync-apidocs.yml` runs on main merge
- [ ] `sandbox-to-prod-promote-apidocs.yml` clones correctly
- [ ] `cms-to-github-apidocs.yml` detects Prod changes
- [ ] All workflows show ✅ success status in Actions tab

### Data Integrity
- [ ] Markdown frontmatter fields preserved
- [ ] Body content copied completely
- [ ] URLs and internal links working
- [ ] Special characters (accents, symbols) handled correctly

### Environment Control
- [ ] Sandbox entries are DRAFT by default
- [ ] Prod entries published to Staging ONLY (never Production)
- [ ] Production environment remains untouched until manual action
- [ ] No accidental direct Prod creation

### Accountability
- [ ] PRs created from Prod edits are assigned to user
- [ ] Email notifications sent on PR assignment
- [ ] Git history shows who changed what when
- [ ] Lint checks report on all created PRs

### User Experience
- [ ] Writers understand the workflow
- [ ] Clear status messages in GitHub Actions
- [ ] Workflow logs show what happened
- [ ] Error messages are helpful (if any)

---

## 🚨 Known Limitations & Edge Cases

1. **First sync may take time**
   - First `cms-to-github` run looks back 20 minutes
   - Existing Prod changes older than 20 min may not be detected
   - Can manually specify lookback time

2. **Complex fields**
   - Reference fields (regions, navigation) may need special handling
   - Already handled with `!clone_from:` syntax

3. **Large files**
   - Very large markdown files might timeout
   - Break into smaller files if needed

4. **Concurrent edits**
   - If same entry edited in Sandbox and Prod simultaneously
   - Promotion will overwrite Sandbox version with newer Prod version
   - **Recommendation:** Don't edit in two places at once

---

## 📝 Test Results

| Test | Status | Notes |
|------|--------|-------|
| Test 1: GH → Sandbox | ⏳ Pending | |
| Test 2: Sandbox → Prod | ⏳ Pending | |
| Test 3: Prod → GH | ⏳ Pending | |
| Test 4: End-to-End | ⏳ Pending | |

---

## 🎯 Success Criteria (Overall)

✅ **Must Pass:**
- All workflows execute without errors
- Content flows through all 3 systems
- No data loss or corruption
- Accountability trail in GitHub

✅ **Should Have:**
- Clear status messages
- Helpful error messages
- Email notifications working
- Fast sync times

✅ **Nice to Have:**
- Performance optimizations
- Detailed workflow logs
- Pattern documentation for writers

---

## 📞 Troubleshooting

### Workflow doesn't trigger
- Check GitHub Actions tab for errors
- Verify branch name in triggers
- Check secrets/environment variables configured

### Entry doesn't appear in Sandbox
- Check sync workflow logs in Actions
- Verify Sandbox credentials are correct
- Check api-docs folder for markdown files

### Promotion fails
- Check Prod CMS for issues
- Verify managementToken has write access
- Review workflow logs for specific error

### PR not created
- Check cms-to-github workflow logs
- Verify GitHub token has PR creation permissions
- Wait up to 15 minutes for scheduled run
- Or manually trigger workflow

---

## 📚 References

- `WORKFLOW_ARCHITECTURE.md` - Complete architecture guide
- `.github/workflows/cms-to-github-apidocs.yml` - Prod → GitHub workflow
- `.github/workflows/gh-to-sandbox-sync-apidocs.yml` - GitHub → Sandbox workflow
- `.github/workflows/sandbox-to-prod-promote-apidocs.yml` - Sandbox → Prod workflow

