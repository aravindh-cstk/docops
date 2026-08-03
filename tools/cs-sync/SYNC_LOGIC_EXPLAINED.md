# Sync Logic: Mathematical Parity

## The Core Principle

```
Published Entries in Production TODAY
           ↓
           ↓ Full Sync (EXACT MIRROR)
           ↓
Entries in Sandbox TODAY = Git Markdown Files TODAY
```

## Why This Matters

If production has **834 published entries today** but then:
- User unpublishes 5 entries
- User deletes 2 entries
- User publishes 10 new entries

**Tomorrow, production will have: 834 - 5 - 2 + 10 = 837 entries**

And that's what sandbox & git must have too.

## How the Sync Achieves This

### Phase 1: Import New/Updated Entries

```javascript
for each published entry in production:
  if entry not in sandbox:
    CREATE entry in sandbox
    PUBLISH if it was published in production
  else if entry changed:
    UPDATE entry in sandbox
    PUBLISH if needed
```

**Result**: Sandbox now has at least all production entries.

### Phase 2: Cleanup Removed Entries

```javascript
for each entry in sandbox:
  if entry not in production:
    DELETE from sandbox  ← KEY STEP!
```

**Result**: Sandbox has EXACTLY the entries in production, no more, no less.

### Phase 3: Git Markdown Sync

```javascript
for each file in api-docs/:
  if markdown not in production:
    DELETE markdown file  ← KEY STEP!

for each entry in production:
  if markdown doesn't exist:
    CREATE markdown file
  else if entry changed:
    UPDATE markdown file
```

**Result**: Git markdown files match production entries perfectly.

## The Math

```
Day 1: Production = 834 entries
       After sync: Sandbox = 834 entries, Git = 834 files ✓

Day 2: Production changes to 837 entries
       (5 unpublished, 2 deleted, 10 published)
       
       After sync: Sandbox = 837 entries, Git = 837 files ✓

Day 3: Production changes to 825 entries
       After sync: Sandbox = 825 entries, Git = 825 files ✓
```

## Verification

After each sync at 2 AM UTC, all three should be equal:

```bash
# Check production count
Production: SELECT count(*) FROM published_entries
→ 834

# Check sandbox count
Sandbox: curl https://api.contentstack.io/v3/content_types/...
→ 834

# Check git count
Git: find api-docs -name "*.md" | wc -l
→ 834

# All equal? ✓ PERFECT SYNC
```

## What the Updated Script Does

### `full-sync.js` - Sandbox Sync

```
IMPORT PHASE:
├─ Fetch all 834 published entries from production
├─ For each: CREATE in sandbox if new
├─ AUTO-PUBLISH entries that were published
└─ Result: Sandbox has ≥ 834 entries

CLEANUP PHASE (NEW!):
├─ Fetch all entries currently in sandbox
├─ For each: DELETE if not in production
└─ Result: Sandbox has EXACTLY 834 entries ✓
```

### `sync-to-git.js` - Git Sync

```
COMPARE PHASE:
├─ Fetch all 834 published entries from production
├─ Get all markdown files from git
└─ Identify differences

CREATE/UPDATE PHASE:
├─ Create new markdown files for new entries
├─ Update markdown files for changed entries
└─ Result: Git has ≥ 834 files

DELETE PHASE (ALREADY INCLUDED!):
├─ Delete markdown files for removed entries
└─ Result: Git has EXACTLY 834 files ✓
```

## Example Walkthrough

**Starting state (Day 1):**
- Production: 834 published entries
- Sandbox: 906 entries (includes old/draft)
- Git: Some markdown files

**Sync runs at 2 AM:**

1. Import phase: Create/update entries
   - Result: Sandbox now has 834+ entries

2. Cleanup phase: Delete old entries
   - Sandbox had: 906 entries
   - Production has: 834 entries
   - Difference: 906 - 834 = 72 old entries
   - DELETE 72 old entries
   - Result: Sandbox now has EXACTLY 834 entries ✓

3. Git sync: Create/update/delete markdown
   - Git now has EXACTLY 834 markdown files ✓

**Ending state:**
```
✓ Production: 834 published entries
✓ Sandbox: 834 entries
✓ Git: 834 markdown files

Perfect mathematical parity!
```

## Key Guarantees

✅ **No orphaned entries** - Sandbox won't have entries deleted in production
✅ **No orphaned files** - Git won't have markdown for deleted entries
✅ **Always in sync** - All three have identical entry counts
✅ **Automatic cleanup** - No manual deletion needed
✅ **Safe deletion** - Only deletes if entry is NOT in production

## When Counts Diverge

If counts don't match after sync, it means:

| Scenario | Cause | Fix |
|----------|-------|-----|
| Sandbox > Production | Old entries not deleted | Run sync again |
| Git > Production | Old markdown not deleted | Run sync again |
| Production > Sandbox/Git | New entries not imported | Run sync again |

Sync again = Fixed (cleanup phase removes orphans)

## Production Updates Reflected

**User action in production** → **Reflected in both sandboxes at 2 AM UTC**

| Action | Sandbox | Git |
|--------|---------|-----|
| Create & publish entry | Entry appears ✓ | Markdown created ✓ |
| Unpublish entry | Entry removed ✓ | Markdown deleted ✓ |
| Delete entry | Entry removed ✓ | Markdown deleted ✓ |
| Modify & publish entry | Entry updated ✓ | Markdown updated ✓ |
| Add new content type | New folder | New folder |

## Conclusion

The sync scripts now guarantee:

**`count(published in production) = count(in sandbox) = count(in git)`**

Every single day at 2 AM UTC. ✅

No manual intervention needed. No orphaned data. Perfect sync.
