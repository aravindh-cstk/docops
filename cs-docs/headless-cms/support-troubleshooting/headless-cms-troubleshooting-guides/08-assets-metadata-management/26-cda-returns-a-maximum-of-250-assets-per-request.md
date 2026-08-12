---
title: "CDA Returns a Maximum of 250 Assets Per Request"
description: "CDA Returns a Maximum of 250 Assets Per Request"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/26-cda-returns-a-maximum-of-250-assets-per-request
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs90c45fac4802ec13
---

# CDA Returns a Maximum of 250 Assets Per Request

A CDA request to fetch all assets returns only approximately 250 results, even when a high limit value is specified. This differs from previous behavior where thousands of assets could be returned in a single call.

**Root Cause**

The Content Delivery API enforces a maximum limit of 250 assets per request. This is the expected platform cap and has not been reduced - earlier behavior that returned more results was not a supported feature. Requests with higher limit values are silently capped at 250.

**Resolution**

1.  Use pagination to retrieve the full asset set across multiple requests.
2.  Set limit=100 (or up to 250) per request and use the skip parameter to page through results.
3.  Example sequence: first request with skip=0&limit=100, second with skip=100&limit=100, and so on until the total count is reached.
4.  Use the count parameter in an initial request to determine the total number of assets before paginating.

After implementing pagination, confirm that running through all pages returns the expected total number of assets.
