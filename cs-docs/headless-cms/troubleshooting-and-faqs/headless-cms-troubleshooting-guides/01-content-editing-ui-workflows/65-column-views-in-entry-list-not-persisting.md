---
title: "Column Views in Entry List Not Persisting"
description: "Column Views in Entry List Not Persisting"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/65-column-views-in-entry-list-not-persisting
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs5279db27b001d789
---

# Column Views in Entry List Not Persisting

Changes made to column layout in the entry list view - adding, removing, or reordering columns - revert to the previous state when navigating away from the page.

**Root Cause**

Column layout changes must be explicitly saved into a Named View to persist. Simply modifying the columns and navigating away does not auto-save the configuration. The view must be saved or updated after making column changes.

**Resolution**

1.  After adjusting the column layout in the entry list, click Save View or Update View to persist the column configuration.
2.  For new column configurations, use Save As New View and give the view a name.
3.  Select the saved view from the Views menu to load the persistent column configuration on future visits.

After saving the view, navigate away and return to the entry list. Confirm the column configuration is preserved.
