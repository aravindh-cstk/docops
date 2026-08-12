---
title: "Missing tags in Delivery API locale responses"
description: "Missing tags in Delivery API locale responses"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/006-missing-tags-in-delivery-api-locale-responses
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse5cd8c778745b411
---

# Missing tags in Delivery API locale responses

Querying entry data for specific locales via the Delivery API may result in missing tag fields. This prevents localized content from displaying tags that have been added to the latest version of the entry.

**Root Cause**

The API request is targeting an older version of the entry that was saved before the tags or fields were implemented.

**Resolution**

1.  Navigate to the Entry UI and verify the latest version number for the affected locale.
2.  Update the Delivery API query parameters to target the latest version of the entry.
3.  Ensure the fields exist in the specific version being requested.

After adjusting the query to the latest version, perform a new API call for the affected locale. If the tags appear in the JSON response, the data discrepancy is resolved.
