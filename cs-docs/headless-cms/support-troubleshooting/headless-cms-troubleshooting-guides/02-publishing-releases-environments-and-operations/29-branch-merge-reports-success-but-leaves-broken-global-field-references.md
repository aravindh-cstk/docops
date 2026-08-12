---
title: "Branch Merge Reports Success but Leaves Broken Global Field References"
description: "Branch Merge Reports Success but Leaves Broken Global Field References"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/29-branch-merge-reports-success-but-leaves-broken-global-field-references
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs14f11aea70aec620
---

# Branch Merge Reports Success but Leaves Broken Global Field References

A branch merge operation reports success but the target branch is left in an inconsistent state. Global field references are broken, field rule changes were not applied, and entries show red-outlined blocks in the CMS editor.

**Root Cause**

The merge process completes at the schema level without fully normalizing or rebinding global field dependencies. When global fields are updated in the source branch and merged, the merge operation applies field rule changes but does not re-resolve the global field references in the target branch’s entries, leaving orphaned or stale references.

**Resolution**

1.  Contact Contentstack Support immediately and provide the source branch, target branch, stack API key, and the time of the merge. Engineering will assess the inconsistent state.
2.  As a diagnostic step, open affected entries in the target branch and check whether the red-outlined blocks correspond to specific global fields.
3.  Do not delete and recreate the global fields manually - this can compound data loss.
4.  Engineering will apply a targeted fix to normalize global field bindings in the target branch without requiring a full re-merge.
5.  After the fix, re-save affected entries to trigger schema revalidation and confirm the red-outlined blocks are resolved.

After Engineering resolves the reference normalization, verify a sample of affected entries display correctly and the global field references load without errors.
