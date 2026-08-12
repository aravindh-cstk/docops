---
title: "Entries Not Visible When Switching to a Branch - UI Cache Issue"
description: "Entries Not Visible When Switching to a Branch - UI Cache Issue"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/39-entries-not-visible-when-switching-to-a-branch-ui-cache-issue
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs3deb478276f74120
---

# Entries Not Visible When Switching to a Branch - UI Cache Issue

When navigating to a specific branch in the entry list, no entries are visible even though the branch contains content. Refreshing the page does not help. Switching to another branch and back resolves the display temporarily.

**Root Cause**

This is a UI-level caching inconsistency. The entry list view retains a stale cache from a previous branch session. No data loss has occurred - the entries exist and are accessible via the API.

**Resolution**

1.  Navigate away from the empty branch view to another branch or stack.
2.  Return to the original branch and verify entries now appear.
3.  If the issue persists, clear the browser cache and reload.

After navigating away and returning, confirm that entries in the branch are now visible in the list view.
