---
title: "‘URL Not Unique’ Error When Saving - Deleted Entry Holds the URL"
description: "‘URL Not Unique’ Error When Saving - Deleted Entry Holds the URL"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/75-url-not-unique-error-when-saving-deleted-entry-holds-the-url
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csa6e619f958432959
---

# ‘URL Not Unique’ Error When Saving - Deleted Entry Holds the URL

Attempting to save an entry returns a ‘value is not unique’ or ‘URL not unique’ error. No other visible entry appears to use that URL.

**Root Cause**

Soft-deleted entries in the Trash continue to hold their URL values until permanently deleted or restored. The system enforces URL uniqueness including against Trash entries.

**Resolution**

1.  Check the Trash/Bin for deleted entries with the conflicting URL via the UI Trash section or GET /v3/trash via the CMA.
2.  If a deleted entry with the same URL is found in Trash, either restore and republish it (then delete it properly) or permanently delete it from Trash.
3.  If no deleted entry is found, contact Contentstack Support with the entry UID and stack API key. Engineering will investigate whether a stale uniqueness lock exists.
4.  Best practice: always unpublish an entry before deleting it to ensure clean removal of all database references.

After clearing the stale uniqueness reference, retry saving the entry and confirm it saves without the uniqueness error.
