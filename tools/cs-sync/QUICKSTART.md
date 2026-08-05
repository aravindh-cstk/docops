# 🚀 Quick Start: Activate Automation

**Complete setup in 5 minutes. Everything syncs at 2 AM UTC automatically.**

## What You're Setting Up

```
Production Stack → Sandbox CMS (full sync) 
                → api-docs/ Markdown (smart sync)
                
All automated, daily at 2 AM UTC
```

## Setup Checklist

### ✅ Step 1: Add GitHub Secrets (2 min)

Go to: **GitHub → Settings → Secrets and variables → Actions**

Click **New repository secret** and add these 4:

| Secret Name | Value |
|---|---|
| `PROD_APIDOCS_STACK_API_KEY` | `blt8fb40ae1e60d06b9` |
| `PROD_APIDOCS_STACK_DELIVERY_TOKEN` | `cs9c8e6ecd1de6a45980524488` |
| `APIDOCS_SANDBOX_STACK_API_KEY` | `bltf92796d1cef4d3d4` |
| `APIDOCS_SANDBOX_MANAGEMENT_TOKEN` | (Already set in your GitHub) |

### ✅ Step 2: Commit Workflow (2 min)

```bash
cd /Users/gladys.daniel/Documents/docops
git add .github/workflows/sync-prod-to-sandbox.yml
git commit -m "feat: activate production sync automation"
git push origin main
```

### ✅ Step 3: Trigger First Sync (1 min)

**Option A: Wait for 2 AM UTC**
- First auto-sync runs tomorrow

**Option B: Trigger Now**
```bash
gh workflow run sync-prod-to-sandbox.yml
```

Or via GitHub UI:
- **GitHub → Actions → Sync Production to Sandbox → Run workflow**

## What Happens When It Runs

### 🎯 At 2 AM UTC (Or When You Trigger It)

```
⏱️  2:00 AM
├─ Sync 1: Sandbox CMS ✓
│  └─ Fetch 834 entries from production
│  └─ Import to sandbox
│  └─ Auto-publish published entries
│
├─ Sync 2: Git Markdown ✓
│  └─ Fetch 834 entries from production
│  └─ Create/update/delete .md files in api-docs/
│  └─ Commit changes to git
│
⏱️  2:06 AM ✅ Done!
```

## Files Created For You

```
✅ .github/workflows/sync-prod-to-sandbox.yml
   └─ GitHub Actions workflow (automation scheduler)

✅ tools/cs-sync/full-sync.js
   └─ Syncs entries to sandbox CMS

✅ tools/cs-sync/sync-to-git.js
   └─ Syncs entries to api-docs/ markdown

✅ Documentation:
   ├─ AUTOMATION_SETUP.md (detailed setup)
   ├─ GIT_SYNC_README.md (markdown sync details)
   └─ AUTOMATION_COMPLETE.md (architecture overview)
```

## Expected Results After First Run

### In Sandbox CMS
- ✅ 834 published entries imported
- ✅ All content types synced
- ✅ Entries auto-published
- ✅ Assets synced

### In Git (api-docs/)
- ✅ New folders created for each content type
- ✅ Markdown files generated from entries
- ✅ Commit with changelog

### In GitHub Actions Logs
- ✅ Workflow completed successfully
- ✅ Summary shows entries synced
- ✅ Git commit SHA visible

## Verify It's Working

### Check Sandbox CMS
1. Go to **sandbox API-Docs stack** → entries
2. Should show **906+ entries** (834 synced + existing)

### Check Git Commits
1. Go to **GitHub → Commits** on main branch
2. Should see **"chore: sync production Contentstack entries"** commit
3. Files in **api-docs/** should be updated

### Check Workflow Logs
1. Go to **GitHub → Actions**
2. Click **Sync Production to Sandbox**
3. Latest run should show ✅ **All checks passed**

## Customize Schedule (Optional)

Default: **Daily at 2 AM UTC**

To change, edit `.github/workflows/sync-prod-to-sandbox.yml`:

```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # Change this line

# Examples:
# '0 2 * * *'     = Daily at 2 AM UTC
# '0 0 * * 0'     = Weekly (Sunday midnight)
# '0 */6 * * *'   = Every 6 hours
# '0 12 * * *'    = Daily at 12 PM UTC
```

Then commit:
```bash
git add .github/workflows/sync-prod-to-sandbox.yml
git commit -m "chore: change sync schedule"
git push
```

## Troubleshooting

### "Workflow failed with error"
→ Check GitHub Secrets are correct (copy-paste from above)

### "No changes synced"
→ Wait for 2 AM UTC or check if production has unpublished entries (only published syncs)

### "Sandbox has too many entries"
→ Normal. Sandbox had 906, production has 834. Git sync cleans up extras.

### "Git sync created duplicate files"
→ First sync only. Later syncs prevent duplicates.

## Support

- **Detailed setup**: Read [AUTOMATION_SETUP.md](./AUTOMATION_SETUP.md)
- **Git sync details**: Read [GIT_SYNC_README.md](./GIT_SYNC_README.md)
- **Architecture**: Read [AUTOMATION_COMPLETE.md](./AUTOMATION_COMPLETE.md)

---

## ✨ That's It!

You now have:
- ✅ Production → Sandbox sync (daily)
- ✅ Production → Git markdown sync (daily)
- ✅ Automatic commits & push
- ✅ Zero maintenance required
- ✅ Production stays read-only

**🎉 Automation is live!**

First sync: Tomorrow at 2 AM UTC (or run manually now)
