---
title: "Entry Import vs. Create Entry API - Understanding the Overwrite Flag"
description: "Entry Import vs. Create Entry API - Understanding the Overwrite Flag"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/08-entry-import-vs-create-entry-api-understanding-the-overwrite-flag
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs52ef23ae297f699f
---

# Entry Import vs. Create Entry API - Understanding the Overwrite Flag

The overwrite flag behavior during CMA entry import is unclear. It is uncertain whether import will overwrite existing entries or create duplicates, and how it differs from the Create Entry API.

**Root Cause**

The CMA import endpoint and the Create Entry API are distinct operations with different behaviors. The overwrite flag in the import endpoint controls whether existing entries with matching UIDs are overwritten. Without overwrite=true, importing an entry with an existing UID will either fail or create a new entry, depending on the content type's uniqueness constraints

**Resolution**

-   CMA Import endpoint: imports entries in bulk from a JSON export. Use overwrite=true in the request to replace existing entries that share the same UID. Without overwrite, duplicate entries may be created or conflicts may occur.
-   Create Entry API (POST /v3/content\_types/{uid}/entries): creates a new entry each time it is called, regardless of whether an entry with the same title or content already exists. It does not accept an overwrite flag.
-   To update an existing entry via API, use the Update Entry (PUT) endpoint with the entry's UID.

Choose the appropriate API based on the use case: use Import with overwrite=true for bulk migration scenarios, and use the Update Entry API for targeted entry updates.
