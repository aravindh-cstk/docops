---
title: "Missing Image Data for Localized Entries in Preview GraphQL API"
description: "Missing Image Data for Localized Entries in Preview GraphQL API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/03-missing-image-data-for-localized-entries-in-preview-graphql-api
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs9b825da2c70cd339
---

# Missing Image Data for Localized Entries in Preview GraphQL API

Localized entries (for example, fr-fr) return missing or null image data when queried through the Preview GraphQL API. The same query against the Delivery API returns the correct images.

**Root Cause**

The Preview GraphQL API does not automatically apply locale fallback behavior. If an image field is not explicitly set for the requested locale, the Preview API will not fall back to the master locale to retrieve the image, unlike the Delivery API which applies fallback behavior by default.

**Resolution**

1.  Add fallback\_locale: true to the GraphQL query parameters when querying via the Preview API.
2.  Alternatively, ensure that the image field is populated and published for the specific locale being queried.
3.  Re-run the Preview API query after adding the fallback\_locale parameter.

After adding fallback\_locale: true to the query, execute the Preview API request for the affected locale. If image data is now returned, the fallback behavior is active for the Preview API.
