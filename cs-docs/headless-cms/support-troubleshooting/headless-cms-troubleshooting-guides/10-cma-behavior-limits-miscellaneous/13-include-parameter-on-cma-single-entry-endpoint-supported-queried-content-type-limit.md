---
title: "include[] Parameter on CMA Single Entry Endpoint - Supported; Queried Content Type Limit"
description: "include[] Parameter on CMA Single Entry Endpoint - Supported; Queried Content Type Limit"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/13-include-parameter-on-cma-single-entry-endpoint-supported-queried-content-type-limit
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csc61e4f8cf8ff0dbe
---

# include[] Parameter on CMA Single Entry Endpoint - Supported; Queried Content Type Limit

A developer asks whether include\[\] is supported on the CMA single-entry fetch endpoint (GET /v3/content\_types/{uid}/entries/{uid}). They also encounter a MAX\_QUERIED\_CONTENT\_TYPE\_LIMIT\_EXCEEDED error. Documentation states the default limit is 3, but the error shows 6.

**Root Cause**

The include\[\] parameter is supported on the CMA single-entry endpoint, though it is primarily documented for the CDA. The MAX\_QUERIED\_CONTENT\_TYPE\_LIMIT\_EXCEEDED error is triggered when the number of distinct content types being resolved (across include paths and the base content type) exceeds the configured limit. The default limit in public documentation is 3, but specific organizations may have a higher limit applied (such as 6) based on their plan or support request.

**Resolution**

1.  include\[\] is confirmed safe and supported on: GET /v3/content\_types/{uid}/entries/{uid}?include\[\]=field\_uid
2.  To avoid MAX\_QUERIED\_CONTENT\_TYPE\_LIMIT\_EXCEEDED, reduce the number of distinct content types being resolved across include paths. Fetch references from a limited set of content types per call.
3.  If a higher queried content type limit is needed, contact Contentstack Support to request an increase. Provide the current error value shown in the response (for example, 6) and the required limit.

After reducing include paths to stay within the content type limit, verify the response returns all required reference data without the limit exceeded error.
