# Production → Git Sync (Markdown Export)

Automatically exports published Contentstack entries as markdown files to the `api-docs/` folder on a schedule.

## What It Does

✅ **Exports entries as markdown** with YAML frontmatter
✅ **Organizes by content type** (e.g., `api-docs/cma-api-requests/`)
✅ **Smart sync** - only creates/updates/deletes what changed
✅ **No duplicates** - preserves existing files, never messes them up
✅ **Auto-commits** - uses git to track changes
✅ **Production read-only** - delivery token, no writes

## How It Works

### Entry → Markdown Mapping

```
Production Entry
├─ Content Type: api_requests_cma
├─ Title: "Create an Entry"
├─ URL: /create-entry
├─ API Endpoint: POST /content_types/{uid}/entries
└─ Fields: summary, request_body, response_body, etc.

        ↓ Converts to ↓

api-docs/cma-api-requests/create-entry.md
├─ YAML Frontmatter
│  ├─ title: "Create an Entry"
│  ├─ url: /create-entry
│  ├─ api_endpoint: POST /content_types/{uid}/entries
│  └─ metadata...
└─ Markdown Content
   ├─ # Title
   ├─ Description
   ├─ ## API Endpoint
   ├─ ## URL Parameters
   ├─ ## Request Body
   └─ ## Response
```

### Sync Strategy

**On each run (2 AM UTC):**

1. **Fetch** all published entries from production
2. **Compare** with what's in git (api-docs/)
3. **Create** new markdown files for new entries
4. **Update** existing files if entry changed
5. **Delete** markdown if entry removed from production
6. **Commit** changes with detailed message

**Files NOT touched:**
- Existing synced files (unless changed in production)
- Non-auto-synced files
- Manually edited files outside api-docs/

## Content Type → Folder Mapping

```javascript
{
  'api_requests_cma': 'cma-api-requests',
  'api_requests_cda': 'cda-api-requests',
  'api_requests_graphql': 'graphql-api-requests',
  'api_requests_apps': 'apps-api-requests',
  'api_requests_analytics': 'analytics-api-requests',
  'api_requests_administration': 'administration-api-requests',
  'api_requests_ai_platform': 'ai-platform-api-requests',
  'api_requests_asset_management_api': 'asset-management-api-requests',
  'api_requests_automation_hub': 'automation-hub-api-requests',
  'api_requests_brand_kit': 'brand-kit-api-requests',
  'api_requests_genai_api_and_ingest_api': 'genai-ingest-api-requests',
  'api_requests_generative_api': 'generative-api-requests',
  'api_requests_image': 'image-api-requests',
  'api_requests_knowlegde_vault': 'knowledge-vault-api-requests',
  'api_requests_scim': 'scim-api-requests',
}
```

## Markdown Format

Generated files include:

```markdown
---
title: "API Request Title"
description: GET /api/endpoint
url: /api-request-url
product: Contentstack
doc_type: api-request
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-15T10:30:00Z
---

# API Request Title

Description text from Contentstack entry.

**API Endpoint**: `GET /api/endpoint`
**Method**: `GET`

## URL Parameters

- **param_name** (optional)
  Description of parameter

## Query Parameters

- **query_param** (required)
  Query parameter description

## Headers

- **header-name** (required)
  Header description

## Request Body

```json
{
  "example": "request"
}
```

## Response

```json
{
  "example": "response"
}
```
```

## Cross-References

For linking between markdown files, use relative paths:

```markdown
See [Authentication](../api-detail/content-delivery-api.md#authentication) for details.
```

The sync script preserves these references automatically.

## Manual Sync

To manually trigger a git sync without waiting for 2 AM:

```bash
# Test locally (dry run)
cd tools/cs-sync
node sync-to-git.js

# Via GitHub Actions
gh workflow run sync-prod-to-sandbox.yml
```

## Monitoring Syncs

### View Recent Syncs

**GitHub → Actions → Sync Production to Sandbox**

Each run shows:
- ✓ Created X files
- ~ Updated Y files
- - Deleted Z files
- Git commit SHA with full changelog

### Example Output

```
📝 SYNCING TO GIT

✓ api_requests_cma: Fetched entries
✓ api_requests_cda: Fetched entries
✓ api_requests_graphql: Fetched entries
[...]

Total entries in production: 834

📋 Processing changes:

  ✓ Created: get-all-entries.md
  ✓ Created: create-entry.md
  ✓ Updated: update-entry.md
  ✓ Deleted: deprecated-endpoint.md

📦 Committing 4 changes

chore: sync production Contentstack entries to markdown

Changes:
+ api-docs/cma-api-requests/get-all-entries.md
+ api-docs/cma-api-requests/create-entry.md
~ api-docs/cma-api-requests/update-entry.md
- api-docs/cma-api-requests/deprecated-endpoint.md

- Created: 2
- Updated: 1
- Deleted: 1

Auto-synced from production stack

✅ GIT SYNC COMPLETE

📊 Summary:
   Created: 2 files
   Updated: 1 files
   Deleted: 1 files
```

## Troubleshooting

### Sync Creates Wrong File Path

**Problem**: Files created outside expected folder
**Solution**: Check content type mapping in `CONTENT_TYPES` object. Entry's `url` field determines file name.

### Markdown Not Updated When Entry Changes

**Problem**: Git has stale version
**Solution**: 
1. Verify entry was actually published in production
2. Check if content type is in `CONTENT_TYPES` mapping
3. Check workflow logs for errors

### Commit Message Shows No Changes

**Problem**: Sync ran but no commit
**Solution**: This is normal if no entries changed. Next sync will commit any new changes.

### Need to Regenerate All Files

**Danger: This will recreate all files**

```bash
cd api-docs
find . -name "*.md" -path "*/cma-api-requests/*" -delete
# Then trigger sync to recreate them
```

## Performance

- **834 entries**: ~2-3 minutes to fetch and process
- **File creation**: Batch processed for speed
- **Git commit**: Fast (single commit per run)

## What's NOT Synced

❌ Draft entries (only published)
❌ Asset files (only metadata)
❌ User/permission data
❌ Webhook configurations
❌ Environment settings

## Schedule

**Default**: Daily at 2 AM UTC
**Also**: Whenever sandbox sync runs
**Manual**: Anytime via GitHub Actions workflow

## Next Steps

1. ✅ Check that `api-docs/` folder structure exists
2. ✅ Wait for first sync (2 AM UTC) or manually trigger
3. ✅ Review generated markdown in PR/commits
4. ✅ Merge to main to make live

**Sync is now bi-directional:**
- Production → Sandbox CMS (full sync)
- Production → Git Markdown (smart sync)

Both happen at 2 AM UTC automatically! 🎉
