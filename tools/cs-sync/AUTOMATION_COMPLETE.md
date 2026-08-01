# Complete Production Sync Automation

**Everything syncs from Production automatically at 2 AM UTC (or on manual trigger)**

## System Architecture

```
                    Production Stack
                  (blt8fb40ae1e60d06b9)
                   [READ-ONLY]
                          ↓
                ┌─────────┴─────────┐
                ↓                   ↓
         Sandbox Stack          Git Repository
      (bltf92796d1cef4d3d4)    (api-docs folder)
      [CMS - Full Sync]      [Markdown - Smart Sync]
                |                    |
         Full-sync.js          sync-to-git.js
```

## What Gets Synced

### 📦 Production → Sandbox CMS (Full Sync)

**Script**: `full-sync.js`

✅ **Entries**: All 834 published entries
✅ **Assets**: Asset metadata and files
✅ **Content Types**: All 23 content types
✅ **Auto-publish**: Published entries auto-publish in sandbox
✅ **Strategy**: Every entry synced each run

**When it runs**:
- Daily at 2 AM UTC
- Or manually anytime via GitHub Actions

### 📝 Production → Git Markdown (Smart Sync)

**Script**: `sync-to-git.js`

✅ **New entries**: Create new `.md` files in `api-docs/`
✅ **Modified entries**: Update existing `.md` files
✅ **Deleted entries**: Remove `.md` files
✅ **No duplicates**: Preserves existing structure
✅ **Smart strategy**: Only touch what changed
✅ **Auto-commit**: Commits with detailed message

**When it runs**:
- Daily at 2 AM UTC (same time as sandbox sync)
- Or manually anytime via GitHub Actions

## 2 AM UTC Workflow

```
2:00:00 AM UTC
├─ Start: GitHub Actions workflow triggers
│
├─ Step 1: Sandbox Sync (≈3 min)
│  ├─ Fetch 834 entries from production via CDA
│  ├─ Import to sandbox via CMA
│  ├─ Auto-publish published entries
│  └─ Log results
│
├─ Step 2: Git Sync (≈2 min)
│  ├─ Fetch 834 entries from production via CDA
│  ├─ Compare with git tracked files
│  ├─ Create/update/delete .md files
│  ├─ Commit changes to main
│  └─ Push to GitHub
│
└─ 2:06:00 AM UTC - Complete ✅
   └─ Both syncs finished, production in full sync
```

## Folder Structure After Sync

```
api-docs/
├─ cma-api-requests/
│  ├─ get-all-entries.md
│  ├─ create-entry.md
│  ├─ update-entry.md
│  └─ delete-entry.md
│
├─ cda-api-requests/
│  ├─ fetch-entries.md
│  ├─ search-entries.md
│  └─ ...
│
├─ graphql-api-requests/
├─ analytics-api-requests/
├─ administration-api-requests/
├─ ai-platform-api-requests/
├─ asset-management-api-requests/
├─ automation-hub-api-requests/
├─ brand-kit-api-requests/
├─ genai-ingest-api-requests/
├─ generative-api-requests/
├─ image-api-requests/
├─ knowledge-vault-api-requests/
└─ scim-api-requests/
```

Each folder contains `.md` files auto-synced from Contentstack entries.

## Key Features

### 🔒 Production Protection
- **Read-only access** via delivery token
- **No writes** to production stack
- **No configuration changes** to production
- **Zero risk** to production

### 🧠 Smart Git Sync
- **Prevents duplicates** - compares with existing files
- **Preserves structure** - organizes by content type
- **Auto-commits** - tracks all changes
- **Cross-references** - maintains relative links
- **No mess** - only changes what's necessary

### 📊 Full CMS Sync
- **Complete mirror** - sandbox becomes production clone
- **All entries** - 834 published entries
- **All assets** - full asset sync
- **All content types** - schema definitions
- **Auto-publish** - maintains publish state

### 🔄 Bidirectional Updates

**Production changes → Sandbox**
- New entry → Created in sandbox
- Entry updated → Updated in sandbox
- Entry deleted → Removed from sandbox
- Entry published → Published in sandbox

**Production changes → Git**
- New entry → New `.md` file created
- Entry updated → `.md` file updated
- Entry deleted → `.md` file deleted
- Entry unpublished → File management unchanged

## GitHub Secrets Required

Add these 4 secrets to `GitHub → Settings → Secrets`:

```
PROD_STACK_API_KEY
PROD_STACK_DELIVERY_TOKEN
SANDBOX_STACK_API_KEY
SANDBOX_STACK_MANAGEMENT_TOKEN
```

## Manual Triggers

Trigger sync anytime without waiting for 2 AM:

```bash
# Via GitHub CLI
gh workflow run sync-prod-to-sandbox.yml

# Via GitHub UI
GitHub → Actions → Sync Production to Sandbox → Run workflow
```

## Monitoring

### View Sync Logs
**GitHub → Actions → Sync Production to Sandbox**

Each run shows:
- ✓ Entries synced to sandbox
- ✓ Files created/updated/deleted in git
- ✓ Git commit with changelog
- ✓ Total time to complete

### Example Log Entry

```
✅ All syncs completed successfully

- Production → Sandbox (CMS)
  ✓ 834 entries imported
  ✓ 45 assets imported
  ✓ Auto-publish complete

- Production → Git (Markdown in api-docs/)
  ✓ 12 files created
  ✓ 8 files updated
  ✓ 3 files deleted
  ✓ Committed to main branch

Completed at 2024-01-15 02:05:42 UTC
```

## Scripts

| Script | Purpose | Runs At |
|--------|---------|---------|
| `full-sync.js` | CMS sync: entries, assets, content types | 2 AM UTC |
| `sync-to-git.js` | Git sync: create/update/delete markdown | 2 AM UTC |
| `verify-and-cleanup.js` | Compare stacks, identify differences | Manual only |
| `migrate-entries.js` | One-time entry import (deprecated) | Manual only |

## Automation Files

```
.github/workflows/
└─ sync-prod-to-sandbox.yml        ← Main workflow (2 AM UTC)

tools/cs-sync/
├─ full-sync.js                    ← Sandbox sync script
├─ sync-to-git.js                  ← Git sync script
├─ AUTOMATION_SETUP.md             ← Setup guide
├─ GIT_SYNC_README.md              ← Git sync details
└─ AUTOMATION_COMPLETE.md          ← This file
```

## Cost & Performance

**Runs**: Once daily (configurable)
**Time**: ~5 minutes per run
**Resources**: Minimal (GitHub Actions free tier)
**API calls**: ~1000 entries × 2 endpoints = 2000 calls/month

## Failsafe

If a sync fails:
- ❌ Sandbox remains unchanged
- ❌ Git remains unchanged
- ✅ Workflow notifies failure
- ✅ Next sync tries again

**No data loss, no corruption possible**

## Next Steps

1. ✅ Add 4 GitHub Secrets (PROD/SANDBOX credentials)
2. ✅ Commit `.github/workflows/sync-prod-to-sandbox.yml`
3. ✅ Push to main branch
4. ✅ First sync runs at 2 AM UTC tomorrow
5. ✅ Or manually trigger it immediately

## Timeline

```
🟢 Day 1
├─ Setup: Add secrets, commit workflow
├─ 2 AM: First auto-sync runs
└─ ✅ Sandbox synced, git updated

🟢 Day 2-365
├─ 2 AM: Daily auto-sync
├─ Any changes in production → sandbox + git
└─ ✅ Always in sync

🟢 Anytime
├─ Manual trigger: `gh workflow run ...`
├─ Any urgent changes → immediate sync
└─ ✅ No waiting for 2 AM
```

## Success Indicators

After first sync, you should see:

```
✅ Sandbox stack has all 834 entries
✅ api-docs/ folder populated with .md files
✅ GitHub commit with sync metadata
✅ Workflow logs show "SYNC COMPLETE"
```

---

**🎉 Your Contentstack production is now fully automated!**

- Production is **read-only** (safe)
- Sandbox is **always synced** (fresh copy)
- Git is **auto-updated** (documentation)
- Everything runs **daily at 2 AM UTC** (hands-free)

Questions? Check the detailed docs:
- [Automation Setup](./AUTOMATION_SETUP.md)
- [Git Sync Details](./GIT_SYNC_README.md)
