---
title: "api_version: 3.2 Header Routes All Publishes to Bulk Queue"
description: "api_version: 3.2 Header Routes All Publishes to Bulk Queue"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/15-api-version-3-2-header-routes-all-publishes-to-bulk-queue
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs7843a9b4f78dc151
---

# api_version: 3.2 Header Routes All Publishes to Bulk Queue

Publish requests sent with the api\_version: 3.2 header are being routed to the Bulk Publish Queue and returning a job\_id. The same requests without the header process immediately through the Single Publish Queue. The Bulk Publish Queue is already heavily loaded, causing further delays.

**Root Cause**

This is expected behavior in API version 3.2. The 3.2 version routes all publish operations through the Bulk Publish Queue, regardless of whether the entry is localized. This change was introduced to standardize publish processing. The queue delay is a consequence of using the newer API version.

**Resolution**

1.  If immediate publishing is required and bulk queue load is a concern, omit the api\_version: 3.2 header to route the request through the Single Publish Queue.
2.  If api\_version: 3.2 is needed for other behavioral changes it introduces, implement polling logic against the returned job\_id to track publish completion rather than expecting a synchronous response.
3.  Use GET /v3/bulk/jobs/{job\_id} to poll job status until it reaches ‘complete’ or ‘failed’.
4.  Monitor the Bulk Publish Queue load before using 3.2 in high-frequency publishing workflows to avoid compounding queue delays.

After selecting the appropriate API version for the use case, confirm publish operations complete correctly and queue load is within acceptable bounds.
