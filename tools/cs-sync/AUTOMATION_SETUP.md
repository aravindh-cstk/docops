# Automated Sync Setup: Production → Sandbox

This guide sets up automated, one-way synchronization from Production to Sandbox Contentstack stacks using GitHub Actions.

## Overview

- **Direction**: Production (read-only) → Sandbox (write)
- **Frequency**: Daily at 2 AM UTC (configurable)
- **What syncs**: Entries, Assets, Content Types
- **Production impact**: None (read-only via delivery token)

## Setup Steps

### 1. Add GitHub Secrets

Add these 4 secrets to your GitHub repository settings:

**Settings → Secrets and variables → Actions → New repository secret**

```
PROD_APIDOCS_STACK_API_KEY        = blt8fb40ae1e60d06b9
PROD_APIDOCS_STACK_DELIVERY_TOKEN = cs9c8e6ecd1de6a45980524488
APIDOCS_SANDBOX_STACK_API_KEY     = bltf92796d1cef4d3d4
APIDOCS_SANDBOX_MANAGEMENT_TOKEN  = (Already set - you have this)
```

⚠️ **IMPORTANT**: These are sensitive credentials. Keep them secure in GitHub Secrets, not in code.

### 2. Configure Schedule (Optional)

Edit `.github/workflows/sync-prod-to-sandbox.yml` to change the run schedule:

```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
    # Other examples:
    # - cron: '0 0 * * 0'     # Weekly (Sundays at midnight)
    # - cron: '0 */6 * * *'   # Every 6 hours
```

Cron format: `minute hour day month day-of-week`

### 3. Manual Trigger (Optional)

The workflow includes `workflow_dispatch`, so you can manually trigger it:

**GitHub → Actions → Sync Production to Sandbox → Run workflow**

Or via CLI:
```bash
gh workflow run sync-prod-to-sandbox.yml
```

## What Gets Synced

### ✅ Entries
- All published entries from production content types
- Auto-publishes if they were published in production
- Updates existing entries in sandbox

### ✅ Assets
- Asset metadata (currently metadata only)
- Full file sync requires additional implementation

### ✅ Content Types
- All content type definitions
- Schema changes from production

## What Does NOT Get Synced

❌ Production stack itself (remains read-only)
❌ Users, roles, permissions
❌ Environment configurations (other than content)
❌ Webhook configurations

## Monitoring

### View Sync History

1. Go to **GitHub → Actions → Sync Production to Sandbox**
2. Click on any run to see logs
3. Check the summary for entry counts

### Example Output

```
🚀 PRODUCTION → SANDBOX SYNC

📍 Production: blt8fb40ae1e60d06b9
📍 Sandbox:    bltf92796d1cef4d3d4

📦 SYNCING ENTRIES

api_requests_cma:
  ✅ Synced 125 entries

api_requests_cda:
  ✅ Synced 98 entries

[...]

✅ SYNC COMPLETE

📊 SUMMARY:
   Entries: 834/834 synced
   Assets:  45/45 exported
```

## Troubleshooting

### Sync Fails with "403 Forbidden"

**Problem**: Authentication error
**Solution**: Verify secrets are correct in GitHub Settings

```bash
# Test tokens locally
node verify-and-cleanup.js
```

### Sync Runs but No Entries Updated

**Problem**: Entries already exist in sandbox
**Solution**: This is normal after first sync. Only new/modified entries update.

### Need to Force Full Resync

1. Delete sandbox entries via Contentstack UI
2. Manually trigger workflow: **Actions → Run workflow**

## Manual Sync (Without Automation)

If you need to sync manually without GitHub Actions:

```bash
# Verify entries first
node verify-and-cleanup.js

# Run full sync
node full-sync.js

# Check what's different
node full-sync.js | grep -E "✅|⚠️|❌"
```

## Schedule Recommendations

- **Daily (default)**: Best for frequently updated content
- **Weekly**: Good for stable documentation
- **On-demand**: Use manual trigger for critical updates

Current setting: **Daily at 2 AM UTC**

## Security Notes

✅ Production is read-only (delivery token, no write access)
✅ Sandbox credentials in GitHub Secrets (encrypted)
✅ No credentials in code or git history
✅ All communication over HTTPS

## Next Steps

1. ✅ Add the 4 GitHub Secrets
2. ✅ Commit `.github/workflows/sync-prod-to-sandbox.yml`
3. ✅ Push to `main` branch
4. ✅ First sync will run at scheduled time
5. ✅ Or manually trigger it immediately

**Sync is now automated!** 🎉
