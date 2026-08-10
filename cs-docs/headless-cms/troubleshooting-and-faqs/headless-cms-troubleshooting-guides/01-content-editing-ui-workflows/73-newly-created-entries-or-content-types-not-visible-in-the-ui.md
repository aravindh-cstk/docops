---
title: "Newly Created Entries or Content Types Not Visible in the UI"
description: "Newly Created Entries or Content Types Not Visible in the UI"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/73-newly-created-entries-or-content-types-not-visible-in-the-ui
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6948d18a6e610991
---

# Newly Created Entries or Content Types Not Visible in the UI

An entry or content type is created successfully via the API or UI, but does not appear in the entry list or content type list. The item is accessible via API but invisible in the CMS UI.

**Root Cause**

Newly created items are indexed asynchronously in the search layer that powers the CMS list views. Under high-load conditions, this indexing can lag, causing the item to appear in the API (which reads directly from the primary database) but not in the UI (which reads from the search index).

**Resolution**

1.  Wait 1-2 minutes and refresh the page - indexing typically completes quickly.
2.  If the item is still not visible after several minutes, try a hard refresh (Ctrl+Shift+R / Cmd+Shift+R).
3.  If the issue persists across multiple users and browsers, contact Contentstack Support. Engineering can trigger a manual index refresh for the affected stack.

After the index refresh, confirm the newly created entry or content type appears in the CMS list view.
