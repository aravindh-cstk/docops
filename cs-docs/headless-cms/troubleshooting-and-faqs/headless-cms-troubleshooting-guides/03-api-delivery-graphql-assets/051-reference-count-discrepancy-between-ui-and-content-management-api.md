---
title: "Reference Count Discrepancy Between UI and Content Management API"
description: "Reference Count Discrepancy Between UI and Content Management API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/051-reference-count-discrepancy-between-ui-and-content-management-api
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs209c81c3ff5f1327
---

# Reference Count Discrepancy Between UI and Content Management API

A reference field shows 19 linked entries in the Contentstack UI but the CMA API returns only 17 matching entries. Two entries appear with an unexpected content type UID in the API response.

**Root Cause**

The discrepancy occurs when some referenced entries belong to a content type that has been renamed or modified since the references were created. The UI resolves the display name dynamically, showing the current content type name. The CMA returns the actual stored content type UID at the time of reference creation, which may not match the current content type UID after a rename.

**Resolution**

1.  Identify the two entries with the unexpected content type UID from the API response.
2.  Open those entries in the CMS and re-save them to update the stored content type reference to the current UID.
3.  Re-fetch the reference field via the CMA and confirm all 19 entries now return with the correct and consistent content type UID.

After re-saving the affected entries, verify the reference field count matches between the CMS UI and the CMA API response.
