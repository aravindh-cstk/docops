# Contentstack Migration Scripts

Automated synchronization scripts for migrating content between Contentstack stacks.

## Overview

This tool suite provides automated export, diff, sync, validation, and rollback capabilities for synchronizing content from the **Contentstack API Docs** stack to the **APIDocs-Sandbox** stack.

## Setup

### 1. Install Dependencies

```bash
cd tools/migration
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your credentials
```

**Required Variables:**
- `SOURCE_STACK_API_KEY` - API key for source stack (read-only)
- `DEST_STACK_API_KEY` - API key for destination stack
- `DEST_MANAGEMENT_TOKEN` - Management token for destination stack

## Usage

### Export from Source Stack

```bash
npm run export
```

Exports:
- Content types (23)
- Entries (100+)
- Global fields (14)
- Assets (52)

Output: `exports/YYYY-MM-DD/`

### Compare Stacks (Coming Soon)

```bash
npm run diff
```

### Synchronize to Destination (Coming Soon)

```bash
npm run sync
```

Options:
- `--dry-run` - Preview changes without applying

### Validate Sync (Coming Soon)

```bash
npm run validate
```

### Rollback Changes (Coming Soon)

```bash
npm run rollback
```

## Project Structure

```
migration/
├── export-source.js          # Export from source stack
├── diff-stacks.js           # Compare stacks (WIP)
├── sync-to-destination.js   # Synchronize changes (WIP)
├── validate-sync.js         # Validate migration (WIP)
├── rollback.js              # Rollback changes (WIP)
├── utils/
│   ├── logger.js            # Logging utility
│   ├── contentstack-api.js  # API wrapper
│   ├── error-handler.js     # Error handling (TODO)
│   └── diff-engine.js       # Diff logic (TODO)
├── config/
│   ├── schema-rules.js      # Schema rules (TODO)
│   └── migration-settings.js # Settings (TODO)
└── package.json
```

## Logs

- All operations logged to console with color coding
- Log level configurable via `LOG_LEVEL` env variable
- Colors: Red=error, Yellow=warn, Blue=info, Green=success

## Error Handling

- Automatic retry on 5xx errors (up to 3 attempts)
- Configurable retry count via `MAX_RETRIES`
- Full error messages and stack traces

## Performance

- Batch operations with configurable batch size (default: 50)
- Pagination for large datasets
- ~30-60s for full stack export (100+ entries, 52 assets)

## Stack Details

### Source Stack (API Docs)
- API Key: `blt8fb40ae1e60d06b9`
- Region: US
- Status: **READ ONLY**

### Destination Stack (APIDocs-Sandbox)
- API Key: `bltf92796d1cef4d3d4`
- Region: US
- Status: **Sync target**

## Next Steps

Phase 2 (coming soon):
- [ ] Diff engine implementation
- [ ] Sync script with create/update/delete logic
- [ ] Validation script
- [ ] Rollback script

Phase 3 (coming soon):
- [ ] GitHub Actions workflows
- [ ] Scheduled syncs
- [ ] Slack notifications

## Support

For issues or questions, refer to:
1. `MIGRATION_IMPLEMENTATION_GUIDE.md`
2. `MIGRATION_PLAN.md`
3. Check logs for detailed error messages

## License

MIT
