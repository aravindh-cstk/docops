# Contentstack Migration Scripts

Automated synchronization scripts for keeping **APIDocs-Sandbox** in parity with the **Contentstack API Docs** source stack.

## Stack Details

| Stack | API Key | Region | Access |
|-------|---------|--------|--------|
| API Docs (source) | `blt8fb40ae1e60d06b9` | US | Read-only |
| APIDocs-Sandbox (dest) | `bltf92796d1cef4d3d4` | US | Read/Write |

## Setup

```bash
cd tools/migration
npm install
cp .env.example .env
# Fill in your credentials in .env
```

**Required environment variables:**

```
SOURCE_STACK_API_KEY=blt8fb40ae1e60d06b9
DEST_STACK_API_KEY=bltf92796d1cef4d3d4
DEST_MANAGEMENT_TOKEN=<management token for sandbox>
```

## Usage

Run these in order for a full sync cycle:

### 1. Export source stack

```bash
npm run export
```

Exports content types, global fields, entries, and assets from the source stack into `exports/YYYY-MM-DD/`. This is the source of truth used by all subsequent steps.

### 2. Diff stacks

```bash
npm run diff
```

Compares the latest export against the current destination stack state. Writes a diff report to `exports/diffs/latest.json`. Exits with code `2` if changes are found (useful in CI).

### 3. Sync to destination

```bash
npm run sync        # Apply changes
npm run sync:dry    # Preview only (no changes made)
```

Reads the latest diff report and applies creates/updates to the destination stack. Global fields are synced before content types to respect dependencies. Creates a backup in `backups/` before applying any changes.

> Items that exist only in the destination are **not deleted** automatically — manual review required.

### 4. Validate

```bash
npm run validate
```

Compares every content type schema field-by-field and checks entry counts. Writes a report to `exports/reports/latest.json`. Exits non-zero if mismatches are found.

### 5. Rollback (if needed)

```bash
npm run rollback                         # Restore most recent backup
npm run rollback -- <backup-dir-name>    # Restore a specific backup
npm run rollback:dry                     # Preview what would be restored
```

Backups are stored in `backups/` and created automatically before every sync.

## Project Structure

```
tools/migration/
├── export-source.js        # Step 1 — export source stack
├── diff-stacks.js          # Step 2 — compare source export vs destination
├── sync-to-destination.js  # Step 3 — apply diff to destination
├── validate-sync.js        # Step 4 — verify destination matches source
├── rollback.js             # Step 5 — restore from backup
├── utils/
│   ├── contentstack-api.js # Contentstack CMA wrapper (read + write)
│   └── logger.js           # Color-coded console logger
├── exports/                # (gitignored) export output
│   ├── YYYY-MM-DD/         # Timestamped export snapshots
│   ├── diffs/              # Diff reports (latest.json + timestamped)
│   └── reports/            # Validation reports
├── backups/                # (gitignored) pre-sync backups of destination
├── .env.example            # Environment variable template
└── package.json
```

## GitHub Actions Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `sync-apidocs-sandbox.yml` | Daily 02:00 UTC + manual | Export → Diff → Sync → Validate |
| `validate-apidocs-sandbox.yml` | Daily 03:00 UTC + manual | Standalone validation check |
| `rollback-apidocs-sandbox.yml` | Manual only | Restore destination from backup |

### Required GitHub Secrets

Set these in **Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `DEST_STACK_API_KEY` | `bltf92796d1cef4d3d4` |
| `DEST_MANAGEMENT_TOKEN` | `cs5b76ec832ed68bafb5be08b2` |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook URL (optional) |

> The source stack API key (`blt8fb40ae1e60d06b9`) is read-only and hardcoded directly in the workflows — no secret needed.

## Logging

Log levels: `error` (red), `warn` (yellow), `info` (blue), `success` (green), `debug` (gray).

Set `LOG_LEVEL=debug` in `.env` for verbose output.

## Error Handling

- 5xx errors are retried up to `MAX_RETRIES` times (default: 3) with a 1-second backoff.
- A backup is always created before any sync operation.
- Dry-run mode (`SYNC_DRY_RUN=true`) is available for all write operations.
