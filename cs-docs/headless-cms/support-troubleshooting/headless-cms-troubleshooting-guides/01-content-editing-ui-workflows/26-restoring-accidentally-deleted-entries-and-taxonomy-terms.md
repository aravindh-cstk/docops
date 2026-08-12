---
title: "Restoring Accidentally Deleted Entries and Taxonomy Terms"
description: "Restoring Accidentally Deleted Entries and Taxonomy Terms"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/26-restoring-accidentally-deleted-entries-and-taxonomy-terms
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csbc69bdfa781a463e
---

# Restoring Accidentally Deleted Entries and Taxonomy Terms

A large number of entries or taxonomy terms were accidentally deleted - for example, by a misconfigured integration script - and need to be restored. The affected content is now missing from the CMS.

**Root Cause**

When entries or taxonomy terms are deleted, they are moved to the Trash (Bin) and retained for a platform-defined retention period before permanent deletion. During this window, they can be restored programmatically.

**Resolution**

**Restoring deleted entries from Trash:**

1.  Retrieve deleted entries from the Bin: GET https://app.contentstack.com/#!/stacks/{stack\_api\_key}/recycle-bin (UI) or via the CMA: GET /v3/trash (Management API Trash endpoint).
2.  Restore individual entries: POST /v3/trash/{entry\_uid}/restore.
3.  For bulk restoration of many entries, use the Trash API in a script: fetch all deleted entry UIDs and iterate with restore calls.

**Restoring accidentally removed taxonomy terms:**

1.  If terms were removed from entries (not the taxonomy itself deleted), use the CMA to re-add taxonomy terms to affected entries: PUT /v3/content\_types/{uid}/entries/{entry\_uid} with the corrected taxonomy data.
2.  If terms were deleted from the taxonomy, contact Contentstack Support - taxonomy term deletion may require backend restoration if the terms are no longer in the Trash.
3.  For large-scale restorations (600+ entries), contact Contentstack Support and provide the list of affected entry UIDs and the Stack API key. Engineering can assist with bulk restoration.

After restoration, verify a sample of entries are correctly restored and contain the expected data.

Important: Contentstack does not provide a bulk rollback endpoint for restoring multiple deleted entries in a single API call. Each entry must be restored individually using: PUT /v3/content\_types/{content\_type\_uid}/entries/{entry\_uid}/restore?deleted=true with the entry locale in the request body. For large-scale restorations, script this call iteratively across all affected entry UIDs rather than expecting a single bulk operation.
