# Example Detailed Logging Output

## Overview

This document shows examples of the comprehensive logging output produced by the enhanced synchronization scripts. These examples demonstrate Improvements 15-16 (Logging & Observability).

---

## Example 1: Successful Sandbox Mirror Check

```
🔄 Synchronization Run Started

Workflow: sandbox-mirror-check-enhanced
Timestamp: 2026-08-01T14:30:00Z
Environment: Production CMS → Sandbox CMS (Published Only)

Production is READ-ONLY - no modifications

======================================================================

📥 Fetching content types from both stacks...

Found 12 content types

📊 Processing: CMA API Requests
   Fetching production entries...
   ✓ Production: 142 total, 142 published
   ✓ Sandbox: 142 total, 142 published
   ✅ Count match
   ✅ All production entries in sandbox
   ✅ URL uniqueness validated

📊 Processing: CDA API Requests
   Fetching production entries...
   ✓ Production: 156 total, 156 published
   ✓ Sandbox: 156 total, 156 published
   ✅ Count match
   ✅ All production entries in sandbox
   ✅ URL uniqueness validated

[... 10 more content types omitted for brevity ...]

======================================================================

📊 SUMMARY

Duration: 3 minutes 22 seconds
Start: 2026-08-01T14:30:00Z
End:   2026-08-01T14:33:22Z

Total Content Types: 12
Total Entries Fetched:
  Production: 1,847 (1,847 published)
  Sandbox: 1,847 (1,847 published)

Validation Results:
  Matched: 12
  Missing in Sandbox: 0
  Extra in Sandbox: 0
  Duplicate URLs: 0
  Validation Failures: 0

✅ PASS: Sandbox mirrors Production perfectly

======================================================================

✅ All checks passed
```

---

## Example 2: Mirror Check with Issues

```
🔄 Synchronization Run Started

Workflow: sandbox-mirror-check-enhanced
Timestamp: 2026-08-01T14:30:00Z
Environment: Production CMS → Sandbox CMS (Published Only)

Production is READ-ONLY - no modifications

======================================================================

📥 Fetching content types from both stacks...

Found 12 content types

📊 Processing: CMA API Requests
   Fetching production entries...
   ✓ Production: 142 total, 142 published
   ✓ Sandbox: 142 total, 142 published
   ✅ Count match
   ✅ All production entries in sandbox
   ✅ URL uniqueness validated

📊 Processing: CDA API Requests
   Fetching production entries...
   ✓ Production: 156 total, 156 published
   ✓ Sandbox: 155 total, 155 published
   ❌ Count mismatch: Prod 156 vs Sandbox 155
   ❌ Missing in Sandbox: 1 entries
   ✅ URL uniqueness validated

📊 Processing: GraphQL API Requests
   Fetching production entries...
   ✓ Production: 89 total, 87 published
   ✓ Sandbox: 89 total, 89 published
   ⚠️  Sandbox has 2 non-published entries (should be 0)
   ❌ Count mismatch: Prod 87 vs Sandbox 89

[... remaining content types ...]

======================================================================

📊 SUMMARY

Duration: 3 minutes 45 seconds
Start: 2026-08-01T14:30:00Z
End:   2026-08-01T14:33:45Z

Total Content Types: 12
Total Entries Fetched:
  Production: 1,847 (1,832 published)
  Sandbox: 1,847 (1,834 published)

Validation Results:
  Matched: 10
  Missing in Sandbox: 1
  Extra in Sandbox: 2
  Duplicate URLs: 0
  Validation Failures: 0

❌ FAIL: Sandbox does NOT mirror Production

⚠️  Missing in Sandbox (1 content types):
   cda-api-requests: 1 entries
      - cda-get-content-type: "Get Content Type" (/api/cda/get-content-type)

ℹ️  Extra in Sandbox (1 content types):
   graphql-api-requests: 2 entries
      - graphql-draft-field: "Draft Query (needs publishing)"
      - graphql-scheduled-field: "Scheduled Query"

⚠️  Issues encountered (1):
   ❌ graphql-api-requests: Sandbox contains 2 non-published entries

======================================================================

❌ Some checks failed - review details above
```

---

## Example 3: Git Parity Check with Validation Failures

```
🔄 Synchronization Run Started

Workflow: sandbox-git-parity-check-enhanced
Timestamp: 2026-08-01T15:00:00Z
Environment: Sandbox CMS ↔ Git (Published Only)

======================================================================

🔍 Validating folder structure...

⚠️  Found 2 folder issues:
   ❌ Unsupported folder: experimental-api-requests
      Add mapping to FOLDER_TO_CONTENT_TYPE
   ❌ Unsupported folder: temp-requests
      Add mapping to FOLDER_TO_CONTENT_TYPE

📥 Fetching Sandbox entries...

Found 1,832 published entries in Sandbox

📝 Scanning Git markdown files...

❌ YAML validation failed: api-docs/cma-api-requests/missing-title.md
   - Missing required fields: title
   - Title is empty

❌ YAML validation failed: api-docs/cda-api-requests/invalid-url.md
   - URL must start with /: "docs/api/get-endpoint"

❌ Duplicate URL found: /api/graphql/query-entry-point
   File 1: api-docs/graphql-api-requests/query-entry-point.md
   File 2: api-docs/graphql-api-requests/query-entry-point-v2.md

⚠️  Orphaned files in Git (not in Sandbox):
   - api-docs/cma-api-requests/deprecated-endpoint.md
     URL: /api/cma/deprecated-endpoint (not found in Sandbox)

======================================================================

📊 SUMMARY

Duration: 2 minutes 15 seconds
Start: 2026-08-01T15:00:00Z
End:   2026-08-01T15:02:15Z

Content Types: 12
Files Scanned: 1,842
Entries Scanned: 1,832
Matched: 1,828

Validation Results:
  Orphaned in Git: 1
  Duplicate URLs: 1
  Validation Failures: 2
  Unsupported Folders: 2

❌ FAIL: Git ↔ Sandbox parity validation failed

❌ Validation errors (2):
   api-docs/cma-api-requests/missing-title.md:
      - Missing required fields: title
      - Title is empty
   api-docs/cda-api-requests/invalid-url.md:
      - URL must start with /: "docs/api/get-endpoint"

❌ Duplicate URLs (1):
   /api/graphql/query-entry-point:
      - api-docs/graphql-api-requests/query-entry-point.md
      - api-docs/graphql-api-requests/query-entry-point-v2.md

⚠️  Orphaned files in Git (1):
   api-docs/cma-api-requests/deprecated-endpoint.md

======================================================================

❌ Some checks failed - review details above
```

---

## Example 4: Merge-to-Main Import with Release

```
🔄 Production Import on Merge Started

Workflow: Production Import on Merge (Git → CMS with Release)
Timestamp: 2026-08-01T16:45:00Z
Trigger: Push to main (commit abc1234)
Stack: Production API Docs

======================================================================

🔍 Pre-Import Validation

Validation Checks:
  ✓ YAML frontmatter syntax
  ✓ Required fields (title, url, description)
  ✓ No duplicate URLs
  ✓ Folder mapping validity
  ✓ No draft/scheduled entries

All validations passed ✅

======================================================================

📝 Importing Git → Production CMS

Creating Release: Git Import - 2026-08-01T16:45:00Z
Description: 5 entries imported from Git

Creating: api_requests_cma entry
  File: api-docs/cma-api-requests/get-content-type-v2.md
  Entry UID: cma-get-content-type-v2
  URL: /docs/api/cma/get-content-type
  Size: 2.4 KB
  Fields: 8 (title, description, custom_field_1, ...)
  Status: Created ✅
  Processing time: 234ms
  Title: [DRAFT] Get Content Type (Latest Version)

Creating: api_requests_cma entry
  File: api-docs/cma-api-requests/list-entries-v2.md
  Entry UID: cma-list-entries-v2
  URL: /docs/api/cma/list-entries
  Size: 3.1 KB
  Fields: 9
  Status: Created ✅
  Processing time: 267ms
  Title: [DRAFT] List Entries (Latest Version)

Updating: api_requests_cda entry
  File: api-docs/cda-api-requests/fetch-entry.md
  Entry UID: cda-fetch-entry
  URL: /docs/api/cda/fetch-entry
  Existing entry found with UID: cda-fetch-entry
  Content changed: Yes
  Status: Updated ✅
  Processing time: 189ms
  Title: [DRAFT] Fetch Entry (Updated Content)

[... 2 more operations omitted for brevity ...]

======================================================================

📊 Import Summary

Duration: 45 seconds
Start: 2026-08-01T16:45:00Z
End:   2026-08-01T16:45:45Z

Entries Processed: 5
  Created: 2
  Updated: 2
  Skipped: 1 (no changes)
  Failed: 0

Release Information:
  Name: Git Import - 2026-08-01T16:45:00Z
  Entries: 5
  Status: Ready for Review

Important Notes:
  ⚠️  All entries created as [DRAFT]
  ⚠️  Grouped in Release for review
  ⚠️  Writers must publish manually
  ✅ No auto-publishing to production

📦 Release Created

✅ Import Summary:
  - All entries created as [DRAFT]
  - Grouped in Release for review
  - Ready for writer publication

⏭️  Next Steps:
  1. Writers review Release in CMS
  2. Edit entries as needed
  3. Click 'Publish' to go live

📊 Deployment Details:
  Stack: Production API Docs
  Timestamp: 2026-08-01T16:45:45Z
  Ref: refs/heads/main
  Commit: abc1234567890abcdef1234567890abcdef12345

======================================================================

✅ All checks passed
```

---

## Example 5: Failed Operation with Retry Details

```
🔄 Synchronization Run Started

Workflow: sandbox-mirror-check-enhanced
Timestamp: 2026-08-01T18:00:00Z

[... initial output omitted ...]

📊 Processing: CMA API Requests
   Fetching production entries...

⚠️  Retry Attempt 1/3 for GET /v3/content_types/api_requests_cma/entries
   Error: 429 Too Many Requests
   Waiting: 100ms before retry...

⚠️  Retry Attempt 2/3
   Error: 429 Too Many Requests
   Waiting: 400ms before retry...

✅ Retry Attempt 3/3 succeeded
   HTTP 200 OK
   Fetched 142 entries

   ✓ Production: 142 total, 142 published
   ✓ Sandbox: 142 total, 142 published
   ✅ Count match

[... more content types ...]

❌ Error fetching graphql-api-requests
   Error: Failed to fetch entries: 503 - {"error":"Service Unavailable"}

[... remaining types ...]

======================================================================

📊 SUMMARY

Duration: 5 minutes 12 seconds
Start: 2026-08-01T18:00:00Z
End:   2026-08-01T18:05:12Z

Entries Scanned: 1,689
Matched: 11
Missing in Sandbox: 0
Extra in Sandbox: 0
Duplicate URLs: 0
Validation Failures: 1

Retry Statistics:
  Total Attempts: 3
  Rate Limited (429): 2
  Success after retry: ✅

❌ FAIL: One content type failed to fetch

⚠️  Issues encountered (1):
   ❌ graphql-api-requests: Failed to fetch entries: 503 - Service Unavailable

======================================================================

❌ Some checks failed - review details above

Next Action: API service likely temporarily down. Retry on next scheduled run (5:30 PM IST).
```

---

## Example 6: Summary Statistics Format

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
  Validations Failed: 0

Retries:
  Total Attempts: 0
  Successful: 0
  Failed: 0

Validation:
  Entry Count: ✅ PASS
  URL Uniqueness: ✅ PASS
  Schema Compliance: ✅ PASS
  YAML Validation: ✅ PASS
  Folder Mapping: ✅ PASS
```

---

## Key Elements of Logging Format

### 1. Run Header
- Clear workflow name
- ISO 8601 timestamp
- Environment context
- Production status (READ-ONLY)

### 2. Processing Section
- Per-content-type status
- Entry counts (total, published, filtered)
- Specific validation results
- Per-operation details

### 3. Summary Section
- Duration, start, end times
- Total counts and breakdowns
- Validation results (✅ or ❌)
- Final status (PASS or FAIL)

### 4. Error Details
- Specific error locations
- What failed
- Why it failed
- What to do next

### 5. Statistics
- Retry attempts with outcomes
- Operation counts
- Validation breakdown
- Performance metrics

---

## Logging Best Practices

### Use Consistent Icons
- ✅ Success / Pass
- ❌ Failure / Error / Critical
- ⚠️  Warning / Non-critical issue
- ℹ️  Info / Detail
- 🔄 Process / In progress
- 📊 Summary / Statistics
- 📥 Fetch / Input
- 📝 Operation / Action
- 🔍 Validation / Check
- 📦 Release / Grouping

### Use Clear Hierarchy
```
Section Header
├── Sub-section
│  └── Detail
└── Result
```

### Report All Counts
- Always show total and filtered
- Always show before/after
- Always show success/failure breakdown

### Include Context
- File paths (absolute or repo-relative)
- Entry UIDs
- URLs
- Operation types
- Error codes

### Provide Remediation
- Explain what went wrong
- Show exact next step
- Link to documentation
- Contact info if needed

---

**Example Version**: 1.0
**Last Updated**: 2026-08-01
**Used By**: Enhanced validation and sync scripts
