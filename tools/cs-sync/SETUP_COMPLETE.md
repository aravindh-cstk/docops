# Bidirectional Sync Setup - COMPLETE

## ✅ What's Deployed

```
✅ Sync Scripts:
   - import-git-to-cms-apidocs_25July26.js (Git → Prod CMS)
   - import-git-to-cms-csdocs_25July26.js (Git → Prod CMS)
   - full-sync_25July26.js (Prod → Sandbox CMS)
   - sync-to-git_25July26.js (Prod → Git markdown)
   - full-sync-csdocs_25July26.js (Prod → Sandbox CMS)
   - sync-to-git-csdocs_25July26.js (Prod → Git markdown)

✅ GitHub Actions Workflows:
   - .github/workflows/sync-prod-to-sandbox.yml (Daily 2 AM UTC + manual trigger)

✅ Documentation:
   - TEST_PROCEDURE.md (Complete test steps)
   - This file (setup summary)

❌ REMOVED (Simplified):
   - Real-time webhooks (not needed)
   - Webhook scripts
   - Webhook setup guides
```

---

## 🔄 How It Works Now

### **Flow 1: Git PR Merge → Prod CMS**
```
Writer commits markdown on feature branch
    ↓
PR merged to main
    ↓
GitHub Actions triggers immediately
    ↓
import-git-to-cms scripts run
    ↓
Markdown → Production CMS (as DRAFT)
Markdown → Sandbox CMS (as DRAFT)
    ↓
Writer reviews & manually publishes when ready
```

### **Flow 2: Daily Safety Check (2 AM UTC)**
```
Scheduled workflow runs at 2 AM UTC
    ↓
1. Git markdown (main) → Prod CMS (create/update as DRAFT)
2. Prod CMS → Sandbox CMS (mirror status)
3. Prod CMS → Git markdown (create/update/delete)
    ↓
All systems verified in sync
```

### **Flow 3: Manual Trigger (Any Time)**
```
Writer needs immediate sync (don't want to wait for 2 AM)
    ↓
Go to GitHub Actions
    ↓
Click "Run workflow" on Sync Production to Sandbox
    ↓
All syncs run immediately
```

---

## 📋 Setup Checklist

### Already Done ✅
- [x] Git → CMS import scripts created
- [x] CMS → Git sync scripts created
- [x] Prod → Sandbox CMS sync scripts created
- [x] GitHub Actions workflow created
- [x] Scripts use environment variables (no hardcoded creds)
- [x] Auto-publish REMOVED (entries create as DRAFT)
- [x] Webhooks REMOVED (simplified)

### You Need To Do
- [ ] Verify all GitHub Secrets exist:
  - PROD_APIDOCS_STACK_API_KEY
  - PROD_APIDOCS_STACK_DELIVERY_TOKEN
  - APIDOCS_SANDBOX_STACK_API_KEY
  - APIDOCS_SANDBOX_MANAGEMENT_TOKEN
  - PROD_CSDOCS_STACK_API_KEY
  - PROD_CSDOCS_STACK_DELIVERY_TOKEN
  - CSDOCS_SANDBOX_STACK_API_KEY
  - CSDOCS_SANDBOX_MANAGEMENT_TOKEN

### Run Tests
- [ ] Test Git → Prod CMS (PR merge)
- [ ] Test Prod → Sandbox sync (manual trigger)
- [ ] Test publish/unpublish status sync
- [ ] Test daily 2 AM UTC scheduled run
- [ ] Verify all three systems in sync

---

## 🚀 Ready to Start

### For Writers
1. Create markdown files in Git (any branch)
2. Open PR, get reviewed
3. Merge to main → auto-imported to Prod CMS as DRAFT
4. Review in CMS, publish when ready
5. Daily sync keeps Sandbox & Git in sync

### For DevOps/Admins
1. Monitor GitHub Actions for sync runs
2. Check logs if anything fails
3. Manual trigger available anytime: GitHub → Actions → Sync Production to Sandbox

---

## 📊 Sync Timeline

```
Writer commits to Git
    ↓
[Immediate] PR merge → import to Prod CMS (DRAFT)
    ↓
[Immediate] Auto-synced to Sandbox CMS (DRAFT)
    ↓
Writer publishes in CMS
    ↓
[Next 2 AM UTC] Sync to Sandbox & Git markdown
    ↓
All systems in sync
```

**No real-time webhooks needed!**
**Simple, reliable, daily safety check.**

---

## 💡 Key Differences from Original Plan

| Feature | Original | Simplified |
|---------|----------|-----------|
| Real-time sync | Webhooks | Daily 2 AM UTC |
| Auto-publish | Yes | No (draft only) |
| External servers | GitHub API | None |
| Setup complexity | Complex | Simple |
| Manual trigger | Not needed | Available |
| Sync latency | ~30 seconds | ~20 hours average |

---

## ✨ Benefits

```
✅ No external webhooks to maintain
✅ No GitHub token complexity
✅ No server infrastructure needed
✅ Simple, reliable daily sync
✅ Manual trigger for urgent needs
✅ Entries created as draft (safety)
✅ Writer control over publishing
✅ Full git audit trail
✅ Parity enforced daily
```

---

## Next Steps

1. **Verify GitHub Secrets** (all 8 should exist)
2. **Run TEST_PROCEDURE.md** (4 simple tests)
3. **Confirm all tests pass**
4. **Notify writers** (ready to start!)
5. **Create Writer Manual** (simple instructions)

---

## Reference Links

- **Main Workflow:** `.github/workflows/sync-prod-to-sandbox.yml`
- **Test Guide:** `tools/cs-sync/TEST_PROCEDURE.md`
- **Git Import API:** `tools/cs-sync/import-git-to-cms-apidocs_25July26.js`
- **Git Import CS Docs:** `tools/cs-sync/import-git-to-cms-csdocs_25July26.js`
- **CMS Sync:** `tools/cs-sync/full-sync_25July26.js`
- **Git Sync:** `tools/cs-sync/sync-to-git_25July26.js`

---

**Setup is complete. Simplified. Ready to test!** 🎉
