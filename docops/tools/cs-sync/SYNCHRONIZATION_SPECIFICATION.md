# Git ↔ Contentstack CMS Synchronization Specification

## Overview

This document specifies the complete behavior of the bidirectional Git ↔ Contentstack CMS synchronization system, covering all 22 critical improvements. The system maintains published documentation parity across Production CMS, Sandbox CMS, and Git while strictly protecting production data integrity.

**Core Constraint**: Published documentation parity is maintained across Production CMS, Sandbox CMS, and Git. Git stores Markdown content and metadata, while binary assets remain in Production CMS. Sandbox CMS is an automated validation environment that mirrors Production's published documentation and is used solely to verify synchronization integrity, parity, and workflow correctness without impacting live content.

---

## 1. Synchronization Scope Definition

### 1.1 Entry Status Filter

**CRITICAL**: Only **Published** entries participate in all synchronization operations.

- **Included**: Entries with `publish_details.status === 'published'`
- **Excluded**:
  - Draft entries (`status: draft`)
  - Scheduled entries (`status: scheduled`)
  - Archived entries (`status: archived`)
  - Any other non-published state

**Implementation**:
```javascript
// Mandatory filter in all API queries
const query = `?limit=100&where[publish_details.status][exists]=true`;
// OR for entries API v3:
const query = `?limit=100&where[status][equals]=published`;
```

Every script must validate and log:
- Total entries fetched (before filtering)
- Published entries after filtering
- Excluded count (drafts, scheduled, archived)

### 1.2 Scope Definition Statement

The synchronization system:
- **Source of Authority**: Production CMS (all published entries)
- **Version Control**: Git (Markdown files + metadata only)
- **Validation Environment**: Sandbox (mirrors published entries only)
- **Binary Assets**: Production CMS only (not synced to Git)
- **Metadata Synced**: Title, URL, description, custom fields in YAML frontmatter

---

## 2. Production CMS as Source of Truth

### 2.1 Read-Only Production Policy

**CRITICAL**: Production CMS receives ZERO modifications from sync operations.

**Enforcement**:
- All credentials for Production must have **read-only** permissions
- Code reviews must explicitly check for any write operations to Production
- Logging: Every script logs "Production is READ-ONLY" on startup

**Allowed Operations**:
- Fetch published entries
- Fetch content types
- Fetch asset metadata
- Query publish status

**Forbidden Operations**:
- Create entries in Production
- Update entries in Production
- Delete entries in Production
- Modify any Production data

### 2.2 Production as Single Source

When conflicts arise between Git and Sandbox:
1. Production data is always correct
2. Sandbox is synced to match Production
3. Git is updated to reflect Production

Example:
- Git has 100 files, Production has 95 published entries
  - 5 files in Git are not published (drafts/scheduled)
  - Sync result: Git parity check warns about these 5 files
  - No production data modified

---

## 3. Git → Production Flow (On Merge to Main)

### 3.1 Merge-Triggered Import

**When**: Merge detected to `main` branch (GitHub webhook or workflow trigger)

**What Happens**:
1. Webhook or workflow detects merge to main
2. Git files are read from the merged commit
3. For each markdown file:
   - Parse YAML frontmatter
   - Extract title, URL, description, metadata
   - **Title field prefixed with `[DRAFT]`** to indicate human review required
   - Create entry in Production CMS as DRAFT (not published)
4. All entries grouped into single **Release**
5. Writer reviews Release and manually publishes when ready

### 3.2 Release Grouping Behavior

**Implementation**:
```javascript
// Create Release with all imports
const release = {
  name: `Git Import - ${new Date().toISOString()}`,
  description: `${fileCount} entries imported from Git`,
  items: entries.map(e => ({ entry_uid: e.uid }))
};
```

**Purpose**:
- Keeps imports organized and auditable
- Allows writers to review all imports together
- Enables bulk publishing decision
- Prevents auto-publishing to production

### 3.3 Title Prefix Requirement

All entries created/updated from Git must have:
```yaml
title: "[DRAFT] Original Title"
```

**Why**: Visual indicator in CMS UI that entry came from Git and needs human review.

### 3.4 Zero Auto-Publishing

**CRITICAL**: No automatic publishing from Git.

- All imported entries created as DRAFT
- Writers manually review each Release
- Writers decide when to publish to Production
- Sync never modifies publish status

---

## 4. Production → Sandbox Mirror

### 4.1 Sandbox Purpose

Sandbox CMS mirrors Production's published documentation:
- **Read-only mirror** of Production
- **Contains only published entries** (no drafts)
- **Used exclusively** for testing and validation
- **No editorial work** happens in Sandbox

### 4.2 Daily Mirror Sync

**Schedule**: 2:00 AM IST (8:30 PM UTC previous day)

**Operation**:
1. Fetch all published entries from Production
2. For each entry: create or update in Sandbox with exact same data
3. Validate no drafts entered Sandbox
4. Report: entries synced, created, updated, skipped

**Idempotency**: Running twice with no new publishes = zero changes on second run

---

## 5. Validation Improvements: Comprehensive Parity Checks

### 5.1 Entry Count Validation (Quick Check)

**Test**: Production published count = Sandbox published count

```javascript
const prodPublished = prodEntries.filter(e => e.publish_details.status === 'published');
const sandboxPublished = sandboxEntries.filter(e => e.publish_details.status === 'published');

if (prodPublished.length !== sandboxPublished.length) {
  console.error(`❌ FAIL: Count mismatch - Prod: ${prodPublished.length}, Sandbox: ${sandboxPublished.length}`);
  failed = true;
}
```

**Pass Criteria**: Exact count match per content type

### 5.2 Missing Entries Detection

**Test**: Every Production published entry exists in Sandbox

```javascript
const prodUids = new Set(prodPublished.map(e => e.uid));
const sandboxUids = new Set(sandboxPublished.map(e => e.uid));
const missing = [...prodUids].filter(uid => !sandboxUids.has(uid));
```

**Report**: List missing UIDs with titles, content type, and URL

### 5.3 Extra Entries Detection

**Test**: No entries in Sandbox that aren't in Production

```javascript
const extra = [...sandboxUids].filter(uid => !prodUids.has(uid));
```

**Action**: Flag for manual investigation (possible old test data)

### 5.4 URL Uniqueness Validation

**Test**: No duplicate URLs in Production

```javascript
const urlMap = {};
const duplicates = [];
prodPublished.forEach(entry => {
  if (urlMap[entry.url]) {
    duplicates.push({ url: entry.url, entries: [urlMap[entry.url], entry.uid] });
  }
  urlMap[entry.url] = entry.uid;
});
```

**Report**: List all duplicate URLs with UIDs and content types

### 5.5 Content Type Mapping Validation

**Test**: All Git folders map to valid Sandbox content types

```javascript
const FOLDER_TO_CONTENT_TYPE = {
  'cma-api-requests': 'api_requests_cma',
  // ... all 12+ mappings
};

const gitFolders = fs.readdirSync(GIT_ROOT)
  .filter(f => fs.statSync(path.join(GIT_ROOT, f)).isDirectory());

const unmappedFolders = gitFolders.filter(f => !FOLDER_TO_CONTENT_TYPE[f]);
```

**Report**: List unmapped folders and suggest mapping

### 5.6 YAML Frontmatter Validation

**Tests**:
1. All markdown files have YAML frontmatter
2. Required fields present: `title`, `url`, `description`
3. No invalid values in metadata fields
4. No missing titles
5. No duplicate titles within same content type

```javascript
const required = ['title', 'url', 'description'];
const missing = required.filter(f => !frontmatter[f]);
if (missing.length > 0) {
  errors.push(`${filePath}: Missing ${missing.join(', ')}`);
}

// Validate title not empty
if (!frontmatter.title || frontmatter.title.trim() === '') {
  errors.push(`${filePath}: Empty title`);
}

// Check for duplicates in same content type
const titleMap = {};
markdownFiles.forEach(file => {
  const title = frontmatter[file].title;
  if (titleMap[title]) {
    duplicates.push({ title, files: [titleMap[title], file] });
  }
  titleMap[title] = file;
});
```

**Report**: Specific file paths, line numbers, and required action

### 5.7 Folder Mapping Validation

**Test**: Report unsupported folders and unknown content types

```javascript
const gitFolders = fs.readdirSync(API_DOCS_PATH)
  .filter(f => fs.statSync(path.join(API_DOCS_PATH, f)).isDirectory());

gitFolders.forEach(folder => {
  if (!FOLDER_TO_CONTENT_TYPE[folder]) {
    console.error(`❌ Unsupported folder: ${folder}`);
    console.error(`   Add mapping to FOLDER_TO_CONTENT_TYPE`);
    failed = true;
  }
});
```

### 5.8 No Silent Skipping

**CRITICAL**: Every validation failure must be explicitly reported.

- Never skip files silently
- Always report count of skipped items with reasons
- Format: "Skipped 3 entries: [reason1, reason2]"
- Exit with code 1 if any validation fails

---

## 6. Failure Handling & Recovery

### 6.1 Failed Sync Behavior

If sync fails:
1. No partial data committed to Git
2. No partial entries created in CMS
3. Next run performs **fresh comparison** (not resume)
4. **Does not block** future executions

**Implementation**:
```javascript
try {
  // sync operations
} catch (error) {
  console.error(`❌ Sync failed: ${error.message}`);
  // Cleanup partial data
  await rollbackPartialCreates(createdEntries);
  // Log error for review
  logFailure(error);
  // Continue - don't block next run
  process.exit(1);
}
```

### 6.2 Error Reporting Format

Every failed operation must log:
- **File/Entry**: What failed (filename or entry UID)
- **Content Type**: The content type being processed
- **URL**: The destination URL
- **Operation**: Create/Update/Delete/Validation
- **Error Message**: Exact API error or validation error
- **Retry Attempts**: How many retries attempted
- **Timestamp**: When failure occurred
- **Next Action**: What should happen next

Example:
```
❌ FAILED: Create entry
   File: api-docs/cma-api-requests/get-content-type.md
   Content Type: api_requests_cma
   URL: /cma-api/get-content-type
   Operation: POST /v3/content_types/api_requests_cma/entries
   Error: Invalid field value for 'custom_field_x': exceeds max length
   Retries: 3/3 failed
   Next Action: Fix markdown frontmatter, retry manually or wait for next sync
```

---

## 7. Retry Logic & Transient Failures

### 7.1 Retryable Failures

**ONLY** retry on transient failures:
- **429**: Rate limit (too many requests)
- **5xx**: Server errors (gateway timeout, service unavailable)
- **Network timeout**: Connection reset, ECONNREFUSED
- **DNS failure**: Temporary resolution failure

**DO NOT** retry on:
- **4xx** (except 429): Client errors indicate bad data
- **Validation errors**: Will fail again on retry
- **Invalid schema**: Bad structure won't improve on retry
- **Auth failures**: Invalid token won't suddenly work

### 7.2 Exponential Backoff Strategy

```javascript
const delays = [100, 400, 1600]; // milliseconds

async function withRetry(operation, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (!isRetryable(error)) throw error; // Non-transient, fail immediately
      if (attempt === maxAttempts) throw error; // No more retries
      
      const delay = delays[attempt - 1];
      console.log(`⚠️  Attempt ${attempt}/${maxAttempts} failed, retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }
}
```

**Behavior**:
- Attempt 1: Immediate
- Attempt 2: Wait 100ms
- Attempt 3: Wait 400ms
- Attempt 4: Wait 1600ms
- Total max delay: ~2.1 seconds before failing

---

## 8. Delete Behavior & Safety

### 8.1 Deletion Validation

Before deleting any entry:

**Test 1**: Must be published in Production
```javascript
if (entry.publish_details.status !== 'published') {
  throw new Error('Cannot delete non-published entry');
}
```

**Test 2**: Must not be part of mass deletion
```javascript
if (deletionCount > 10) {
  throw new Error(`Mass deletion detected: ${deletionCount} entries. Requires manual review.`);
}
```

**Test 3**: Deleted file must match entry UID
```javascript
if (gitDeletedFile && !contentStackUid.endsWith(urlFromFile)) {
  throw new Error('UID mismatch - delete cancelled');
}
```

### 8.2 Mass Deletion Prevention

**Test**: Count of deleted entries cannot exceed 10% of total

```javascript
const deleteCount = filesToDelete.length;
const totalCount = allFiles.length;
const percentage = (deleteCount / totalCount) * 100;

if (percentage > 10) {
  console.error(`❌ BLOCKED: Mass deletion detected (${percentage.toFixed(1)}%)`);
  console.error(`   Attempting to delete ${deleteCount}/${totalCount} entries`);
  console.error(`   Requires manual investigation and approval`);
  process.exit(1);
}
```

### 8.3 Clear Warnings

Before any delete operation:
```javascript
console.error(`⚠️  WARNING: About to delete ${deleteCount} entries:`);
filesToDelete.forEach(f => {
  console.error(`   - ${f.path} (UID: ${f.uid}, URL: ${f.url})`);
});
console.error(`   This action cannot be undone.`);
console.error(`   If this is not intentional, STOP and investigate.`);
```

---

## 9. Safety & Concurrency Protection

### 9.1 Concurrency Control

**Problem**: Two syncs running simultaneously can cause race conditions, duplicate creates, lost updates.

**Solution**: GitHub Actions concurrency groups

```yaml
concurrency:
  group: sandbox-sync-${{ github.ref }}
  cancel-in-progress: false
```

**Behavior**:
- Only one sync runs per branch at a time
- Subsequent requests wait in queue
- `cancel-in-progress: false` ensures no partial syncs are cancelled

**Implementation per script**:
Each script logs on startup:
```javascript
console.log(`🔒 Concurrency Lock: ${CONCURRENCY_GROUP}`);
console.log(`   Ensuring single sync execution...`);
```

### 9.2 Idempotency Guarantee

**Test**: Running same sync twice with no new changes = zero modifications

**Implementation**:
```javascript
// Before creating entry, check if exists
const existing = await getEntry(contentType, entryUid);
if (existing && isIdentical(existing, newData)) {
  console.log(`✅ Entry already exists with same data, skipping: ${entryUid}`);
  return { action: 'skipped', reason: 'identical' };
}
```

**Validation**:
1. First run: Create N entries, update M entries, delete K entries
2. Second run (no new changes): 0 creates, 0 updates, 0 deletes
3. Counts and content exactly match

---

## 10. Asset Handling

### 10.1 Binary Assets Remain in Production Only

**Policy**: Binary assets (images, PDFs, files) are NOT synced to Git.

**Why**:
- Git is inefficient for binary data
- Production CMS is authoritative for asset management
- Assets are infrastructure, not documentation content

**What Stays in Production CMS**:
- Image files (.png, .jpg, .gif, etc.)
- PDF documents
- Audio/video files
- Any binary attachments

**What Syncs to Git**:
- Markdown content
- Asset metadata (filename, URL, title)
- Asset references (e.g., `![alt text](asset-url)`)

### 10.2 Asset References Are Synchronized

Example in Git markdown:
```markdown
# Document Title

![Diagram showing flow](https://cdn.contentstack.io/v3/assets/...uuid.../diagram.png)
```

This asset URL is preserved during sync:
- When markdown is pulled to Git: URL preserved as-is
- When markdown is updated in Git: Asset URL remains valid
- When markdown is pushed to CMS: Asset reference updated if needed

### 10.3 Asset Exclusion from Parity Validation

When validating parity between Git and Sandbox:
- Ignore asset file count (not in Git)
- Validate that referenced assets exist in Production
- Skip binary content comparison
- Report: "Assets: N referenced, all exist in Production ✅"

---

## 11. Logging & Observability Requirements

### 11.1 Mandatory Logging Format

Every script run must output:

```
🔄 Synchronization Run Started

Workflow: sandbox-mirror-check.js
Timestamp: 2026-08-01T14:30:00Z
Environment: Production CMS → Sandbox CMS

───────────────────────────────────────

Processing: api_requests_cma
  Entries fetched from Production: 142
  Entries fetched from Sandbox: 142
  Status: ✅ PASS (perfect match)

Processing: api_requests_cda
  Entries fetched from Production: 156
  Entries fetched from Sandbox: 155
  Status: ❌ FAIL (1 missing in Sandbox: uid-12345)

───────────────────────────────────────

📊 SUMMARY

Total Content Types: 12
Total Entries Processed: 1,847
  Production: 1,847 published
  Sandbox: 1,847

Results:
  Matched: 1,846 ✅
  Missing in Sandbox: 1 ❌
  Extra in Sandbox: 0 ℹ️
  Failures: 0

Validation Results:
  URL Uniqueness: ✅ PASS
  Duplicate Detection: ✅ PASS
  Schema Compliance: ✅ PASS

───────────────────────────────────────

Duration: 3 minutes 22 seconds
Start: 2026-08-01T14:30:00Z
End:   2026-08-01T14:33:22Z

Status: ❌ FAILED - 1 issue requires attention
```

### 11.2 Per-Operation Logging

For each create/update/delete:

```
Creating: api_requests_cma entry
  File: api-docs/cma-api-requests/get-content-type.md
  Entry UID: cma-get-content-type-v1
  URL: /docs/api/cma/get-content-type
  Size: 2.4 KB
  Fields: 8 (title, description, custom_field_1, ...)
  Status: Created ✅
  Processing time: 234ms
```

### 11.3 Retry Attempt Logging

When retries occur:

```
⚠️  Retry Attempt 1/3 for POST /v3/content_types/api_requests_cma/entries
   Error: 429 Too Many Requests
   Waiting: 100ms before retry...

⚠️  Retry Attempt 2/3
   Error: 429 Too Many Requests
   Waiting: 400ms before retry...

✅ Retry Attempt 3/3 succeeded
   HTTP 201 Created
```

### 11.4 Summary Statistics

Every run must report:

```
📈 Statistics

Workflow Runtime: 3 minutes 22 seconds
Content Types: 12
Total Entries: 1,847
  Scanned: 1,847
  Matched: 1,846
  Mismatched: 1
  Skipped: 0

Operations:
  Creates: 0
  Updates: 0
  Deletes: 0
  Validations Failed: 1

Retries:
  Total Attempts: 3
  Successful: 2
  Failed: 1 (still retrying on next run)

Validation:
  Entry Count: ✅ PASS
  URL Uniqueness: ✅ PASS
  Schema Compliance: ✅ PASS
  YAML Validation: ✅ PASS
  Folder Mapping: ✅ PASS
```

---

## 12. New Scheduling (India Standard Time)

### 12.1 IST Schedule

**2:00 AM IST** = **8:30 PM UTC (previous day)**
```
cron: '30 20 * * *'  # UTC time
```

**5:30 PM IST** = **12:00 PM UTC**
```
cron: '0 12 * * *'   # UTC time
```

### 12.2 Schedule Purposes

**2:00 AM IST - Daily Health Check**
- Run: `sandbox-mirror-check.js`
- Purpose: Verify Sandbox mirrors Production
- Action: Report drift, alert if mismatches
- Expected duration: ~5 minutes

**5:30 PM IST - End-of-Day Validation**
- Run: `sandbox-git-parity-check.js`
- Purpose: Verify Git ↔ Sandbox alignment
- Action: Report missing/extra files, validation failures
- Expected duration: ~5 minutes

**On Merge to Main - Immediate Sync**
- Trigger: Webhook on merge to main
- Run: `import-git-to-cms-apidocs.js` + `import-git-to-cms-csdocs.js`
- Purpose: Import new/updated content immediately
- Action: Create Release, notify writers
- Expected duration: ~3-10 minutes (depends on file count)

### 12.3 Timezone Context

India Standard Time (IST) is UTC+5:30. No daylight saving applies.

**Conversion Table**:
| IST | UTC | UTC-5 (EST) | UTC-7 (PDT) |
|-----|-----|-------------|------------|
| 2:00 AM | 8:30 PM (prev) | 3:30 PM (prev) | 1:30 PM (prev) |
| 5:30 PM | 12:00 PM | 7:00 AM | 5:00 AM |

---

## 13. Merge-to-Main Trigger & Validation

### 13.1 Immediate Sync on Merge

**Event**: Merge to main branch detected

**Workflow**: `.github/workflows/production-import-on-merge.yml`

**Sequence**:
1. Checkout main branch (merged code)
2. Validate all git changes
3. Run: `import-git-to-cms-apidocs.js`
4. Run: `import-git-to-cms-csdocs.js`
5. Create Release grouping
6. Report summary to GitHub PR/commit

### 13.2 Validation Before Import

Before importing, validate:

**Check 1**: No draft/scheduled/archived files
```javascript
// All markdown files must have status: published in YAML
// OR be brand new (will be created as [DRAFT] for review)
```

**Check 2**: YAML frontmatter is valid
```javascript
// Required: title, url, description
// Optional: others based on content type
```

**Check 3**: No duplicate URLs
```javascript
// No two files can have the same URL
```

**Check 4**: Folder mappings are valid
```javascript
// All folders must have FOLDER_TO_CONTENT_TYPE mapping
```

If any validation fails:
- Stop import
- Report errors
- Ask user to fix before retrying
- Do not create partial Release

### 13.3 Release Creation

```javascript
// Create Release with [DRAFT] title prefix
const release = {
  name: `Git Import - ${new Date().toISOString()}`,
  items: entries.map(e => ({
    entry_uid: e.uid,
    content_type: e.contentType,
    title: e.title, // Already prefixed with [DRAFT]
  })),
};

console.log(`✅ Release created: ${release.name}`);
console.log(`   ${entries.length} entries grouped for review`);
console.log(`   Writers can now review and publish from Release UI`);
```

### 13.4 Manual Publishing Requirement

All entries created from Git must be manually published:

```javascript
// When creating entry from Git:
const entryData = {
  title: '[DRAFT] Original Title',
  url: '/docs/api/...',
  // ... other fields
  // DO NOT include: publish_details.status = 'published'
};
// Entry created as DRAFT, never auto-published
```

Writer workflow:
1. Open Release in CMS
2. Review all [DRAFT] entries
3. Make edits if needed
4. Click "Publish" for entries ready to go live
5. Click "Save" for entries still in progress

---

## 14. Expected Runtime & Operational Notes

### 14.1 Sync Operation Runtimes

**sandbox-mirror-check.js**:
- Small stacks (< 500 entries): ~2-3 minutes
- Medium stacks (500-2000 entries): ~3-5 minutes
- Large stacks (2000+ entries): ~5-10 minutes
- Per-entry time: ~0.15-0.3 seconds

**sandbox-git-parity-check.js**:
- Small repos (< 200 files): ~1-2 minutes
- Medium repos (200-500 files): ~2-4 minutes
- Large repos (500+ files): ~4-8 minutes
- Per-file time: ~0.3-0.5 seconds (includes parsing)

**import-git-to-cms.js**:
- Per-entry time: ~0.5-1.5 seconds (includes API round-trip)
- 10 files: ~1 minute
- 50 files: ~3-5 minutes
- 100 files: ~5-10 minutes
- Expected for typical merge: ~2-5 minutes

**sandbox-sync-test.js**:
- Full cycle test: ~5-10 minutes
- Includes: create, update, delete, verify, cleanup

### 14.2 Supported Repository Size

- **Maximum recommended files**: 10,000 markdown files
- **Maximum recommended content types**: 50+
- **Maximum recommended entries per type**: 5,000
- **Total production CMS size**: 50,000+ entries supported

Beyond these limits, consider:
- Splitting into multiple syncs
- Implementing partial syncs (by content type)
- Batch processing

### 14.3 Pagination & Batch Processing

**API Pagination**:
- Page size: 100 entries per request
- Automatic pagination: Scripts fetch all pages
- Example: 5000 entries = 50 API calls

**Batch Processing**:
- Import max 10 files per Release (prevents overwhelming writers)
- Per-content-type batches (easier to review by domain)
- Sequential processing (not parallel, due to rate limits)

**Rate Limiting**:
- Contentstack CMS API: ~300 requests/minute
- Expected during peak: ~5-10 requests/second
- Scripts include 100ms delay between requests
- Retry on 429 with exponential backoff

### 14.4 Failure Recovery

- **Partial sync**: Next run continues from beginning
- **Orphaned entries**: Manual cleanup required
- **Duplicate URLs**: Detected and reported, not created
- **Failed validations**: Reported with remediation steps

---

## 15. Terminology & Definitions

### 15.1 Standard Terms

**Published Entry**: An entry in Production CMS with `publish_details.status === 'published'`

**Release**: CMS grouping of entries for batch review and publishing

**Markdown Files**: Text files in Git containing content (stored in `/api-docs/`, `/cs-docs/`, etc.)

**Synchronization**: Bi-directional process of keeping Production CMS, Sandbox CMS, and Git aligned

**Parity**: State where entry counts, URLs, and content match across systems (when filtered for published only)

**Mirror**: Sandbox CMS contains exact copy of Production's published entries (no drafts)

**Content Type**: Schema definition in CMS (e.g., `api_requests_cma`, `documentation_page`)

**Entry UID**: Unique identifier within a content type (e.g., `get-api-request-v1`)

**Entry Markdown File**: File path `{folder}/{entry-url}.md` corresponding to entry

### 15.2 Incorrect Terminology (To Avoid)

❌ "Draft in Production" → ✅ "Draft in CMS awaiting review"
❌ "Sync to Production" → ✅ "Publish Release to Production"
❌ "Git Release" → ✅ "CMS Release grouped from Git import"
❌ "Published in Sandbox" → ✅ "Sandbox mirrors Production's published entries"

---

## 16. Appendix: Key Decision Log

### Decision 1: Production Read-Only
- **Why**: Production is customer-facing; any write error affects public docs
- **Impact**: All imports must go through CMS review (no auto-publish)
- **Validation**: Code reviews explicitly check for write operations

### Decision 2: Sandbox = Published-Only Mirror
- **Why**: Sandbox is for testing (not editorial work); must match Production exactly
- **Impact**: Drafts never appear in Sandbox; separate testing environment for draft work
- **Validation**: `sandbox-mirror-check.js` explicitly filters `status !== 'published'`

### Decision 3: Git = Markdown + Metadata Only
- **Why**: Version control for text content and structure, CMS for binary/assets
- **Impact**: Images stay in CMS, references stored as URLs in Git
- **Validation**: Parity checks ignore binary assets

### Decision 4: IST Schedule (2 AM + 5:30 PM)
- **Why**: Covers early morning (post-overnight issues) + end-of-day (before next work cycle)
- **Impact**: Drifts detected within ~12 hours
- **Validation**: Logged timestamps show IST conversion

### Decision 5: Merge-to-Main Trigger
- **Why**: Immediate feedback to writers; catch issues before production publish
- **Impact**: Release creation and writer notifications happen automatically
- **Validation**: GitHub webhook confirms merge, workflow executes

---

## 17. Implementation Checklist

- [ ] All scripts filter for `status === 'published'` only
- [ ] Production credentials are read-only verified
- [ ] Sandbox contains no draft entries
- [ ] Git files have valid YAML frontmatter
- [ ] All 5 validation checks implemented and tested
- [ ] Retry logic handles only transient failures
- [ ] Delete operations require validation + mass-delete prevention
- [ ] Concurrency groups configured in workflows
- [ ] Idempotency tests pass (run twice = same result)
- [ ] Binary assets excluded from parity checks
- [ ] All logging requirements met
- [ ] IST schedule converted correctly to cron
- [ ] Merge-to-main workflow created
- [ ] Release grouping implemented
- [ ] Manual publish required (no auto-publishing)
- [ ] All error messages follow standard format
- [ ] Documentation complete and tested

---

**Document Version**: 1.0
**Last Updated**: 2026-08-01
**Status**: Production-Grade Specification
**Maintained By**: Documentation Operations Team
