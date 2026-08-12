---
title: "429 Errors During Bulk Delete and Bulk Publish Despite Adding Delays"
description: "429 Errors During Bulk Delete and Bulk Publish Despite Adding Delays"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/02-429-errors-during-bulk-delete-and-bulk-publish-despite-adding-delays
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csd58fcbf128639143
---

# 429 Errors During Bulk Delete and Bulk Publish Despite Adding Delays

Bulk delete and bulk publish CMA operations return 429 errors even though the requests stay within the 10-UID-per-request limit and a 1-second delay is added between requests.

**Root Cause**

The CMA rate limit is enforced on call frequency, not on the number of UIDs per request. A 1-second delay between requests may still produce more than 20 POST/PUT/DELETE calls per second when requests are sent from multiple threads or processes simultaneously. The limit for CMA POST/PUT/DELETE operations is 20 requests per second.

**Resolution**

1.  Increase the delay between bulk operation requests to ensure the total call rate stays below 20 requests per second.
2.  If multiple threads or parallel processes are sending bulk requests, implement a shared throttle across all processes, not just per-thread delays.
3.  Use exponential backoff: when a 429 is received, wait and retry rather than failing the job immediately.
4.  Process bulk operations sequentially rather than in parallel where possible.

After increasing the delay and implementing throttling, re-run the bulk operation. If 429 errors no longer occur, the request rate is within the CMA limit.
