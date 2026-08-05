# Solution 1: Track Entries by File Path (Not URL)

**Status:** Approved, deferred until after demo  
**Date:** 2026-08-05  
**Implementation:** TBD (after demo)

---

## Problem Solved

Currently, entries are matched by URL. When URL changes:
- Old entry: `/studio/old-feature` (orphaned, not deleted)
- New entry: `/studio/new-feature` (created)
- Result: Duplicate entries in Sandbox

**Solution: Match by file path hash instead of URL**

---

## Design

### 1. Generate File Hash
```javascript
// Generate unique ID from relative file path
const filePath = "cs-docs/studio/feature.md";
const fileHash = md5(filePath);  // e.g., "abc123xyz"
```

### 2. Store Hash in Entry Metadata
When creating/updating entry in Sandbox:
```javascript
const entryData = {
  title: frontmatter.title,
  url: frontmatter.url,
  body: body.trim(),
  _source_file_hash: fileHash,  // Track origin file
  // ... other fields
};
```

### 3. Match by Hash, Not URL
```javascript
// Current (WRONG):
const existing = await client.findEntryByUrl(frontmatter.url);

// New (CORRECT):
const existing = await client.findEntryByFileHash(fileHash);

if (existing) {
  // UPDATE entry (even if URL changed!)
  await client.updateEntry(existing.uid, entryData);
} else {
  // CREATE new entry
  await client.createEntry(entryData);
}
```

### 4. URL Changes are Now Harmless
```
BEFORE (creates orphans):
  Edit: /studio/old-feature → /studio/new-feature
  Result:
    - New entry created: /studio/new-feature
    - Old entry abandoned: /studio/old-feature ❌

AFTER (updates existing):
  Edit: /studio/old-feature → /studio/new-feature
  Result:
    - Same entry updated
    - URL field changed: /studio/old-feature → /studio/new-feature
    - No orphan ✅
```

---

## Files to Modify

1. **git-to-sandbox-sync.ts**
   - Add `crypto` import for MD5 hash
   - Generate fileHash from file path
   - Pass fileHash to entryData
   - Change matching logic from findEntryByUrl → findEntryByFileHash

2. **lib/sandbox-client.ts**
   - Add `findEntryByFileHash(hash)` method
   - Query entries by `_source_file_hash` field
   - Fallback to findEntryByUrl for entries created before this change

3. **Sandbox CMS Content Type Schema**
   - Add `_source_file_hash` field (Text, optional)
   - This tracks which file created each entry

---

## Benefits

✅ URL changes update existing entry (no orphans)
✅ Maintains full entry history in CMS
✅ Can track all edits and versions
✅ File renames are tracked (hash stays same)
✅ Backward compatible (fallback to URL match for old entries)

---

## Implementation Checklist

- [ ] Add MD5 hash generation
- [ ] Modify git-to-sandbox-sync.ts to use fileHash
- [ ] Add findEntryByFileHash method to SandboxClient
- [ ] Update Sandbox CMS content type schema
- [ ] Test with URL changes
- [ ] Verify no orphans created
- [ ] Update documentation

---

## When to Implement

**After demo**: Week of 2026-08-12 (estimated)

**Blockers:** None (can be done anytime)
**Risk:** Low (backward compatible, fallback to URL matching)
**Effort:** ~2-3 hours implementation + testing

