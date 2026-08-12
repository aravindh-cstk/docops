---
title: "Cannot Delete a Parent Branch Without Deleting Child Branches"
description: "Cannot Delete a Parent Branch Without Deleting Child Branches"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/23-cannot-delete-a-parent-branch-without-deleting-child-branches
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csa972419b8c863885
---

# Cannot Delete a Parent Branch Without Deleting Child Branches

A team attempts to delete a parent branch but receives an error. Child branches forked from the parent still exist.

**Root Cause**

Contentstack does not support deleting a parent branch while child branches exist. Child branches inherit content versions and dependencies from their parent. Deleting the parent independently would create orphaned child branches.

**Resolution**

1.  Delete all child branches first before attempting to delete the parent.
2.  Navigate to Settings > Branches, identify all branches forked from the parent, and delete them in sequence.
3.  If child branches contain content that should be preserved, merge relevant changes back to the main branch first.

After deleting all child branches, confirm the parent branch can be deleted without errors.
