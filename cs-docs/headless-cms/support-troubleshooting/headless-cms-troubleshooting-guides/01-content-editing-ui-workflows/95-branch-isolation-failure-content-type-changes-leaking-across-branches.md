---
title: "Branch Isolation Failure - Content Type Changes Leaking Across Branches"
description: "Branch Isolation Failure - Content Type Changes Leaking Across Branches"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/95-branch-isolation-failure-content-type-changes-leaking-across-branches
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs9d478d02d65e5674
---

# Branch Isolation Failure - Content Type Changes Leaking Across Branches

Changes made to a content type in a test branch are incorrectly applied to the main branch. This unexpected behavior led to a significant purge of CDN content, disrupting production data integrity.

**Root Cause**

This was a critical platform-level bug in the branch isolation mechanism. Under specific conditions, schema changes made in one branch were being propagated to other branches, violating the expected branch isolation contract. This caused unintended content type modifications in branches that should not have been affected.

**Resolution**

A platform fix has been deployed to correct the branch isolation failure. Schema changes made in one branch no longer propagate to other branches.

1.  After the fix is deployed, verify branch isolation by making a test change to a content type in a non-main branch and confirming it does not appear in the main branch.
2.  If branch isolation issues are still observed after the fix, contact Contentstack Support immediately with the affected branch names, stack API key, and a description of what changed unexpectedly.
3.  Review and restore any production content type schemas that were incorrectly modified due to this bug. Use the content type version history or a pre-bug backup to identify the correct schema state.

After verifying the fix, confirm that branch isolation is functioning correctly by independently modifying a content type field in each branch and verifying the changes remain isolated.
