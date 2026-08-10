---
title: "Ghost Entries Visible in UI After Successful Deletion"
description: "Ghost Entries Visible in UI After Successful Deletion"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/74-ghost-entries-visible-in-ui-after-successful-deletion
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csd8210e1ed091724c
---

# Ghost Entries Visible in UI After Successful Deletion

Deleted entries continue to appear in the entry list on a specific branch. API queries confirm the entries no longer exist, but they remain visible in the CMS UI.

**Root Cause**

This is a search index inconsistency. When an entry is deleted, the primary database is updated immediately, but the search index may retain stale records. This creates ghost entries that are visible in the UI but do not exist in the API or backend.

**Resolution**

1.  Confirm the entries are truly deleted by fetching them via the CMA: GET /v3/content\_types/{uid}/entries/{entry\_uid} - a 404 confirms deletion.
2.  Contact Contentstack Support and provide the stack API key, branch name, and UIDs of the ghost entries. Engineering will run a search index migration to remove the stale records.
3.  Do not attempt to re-delete the ghost entries - they do not exist in the backend and the delete call will fail.

After the index migration, reload the entry list and confirm ghost entries are no longer visible.
