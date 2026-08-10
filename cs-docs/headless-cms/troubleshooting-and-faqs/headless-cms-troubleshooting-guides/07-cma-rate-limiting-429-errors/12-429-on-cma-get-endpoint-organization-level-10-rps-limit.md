---
title: "429 on CMA GET Endpoint - Organization-Level 10 RPS Limit"
description: "429 on CMA GET Endpoint - Organization-Level 10 RPS Limit"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/12-429-on-cma-get-endpoint-organization-level-10-rps-limit
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csae39ae82b224e8f7
---

# 429 on CMA GET Endpoint - Organization-Level 10 RPS Limit

HTTP 429 responses appear when calling the CMA GET endpoint to fetch entries. The application is not making an obviously high volume of requests.

**Root Cause**

The CMA GET rate limit is 10 requests per second at the organization level by default. Applications that make sequential or lightly parallelized CMA GET calls can reach this limit quickly, especially when processing bulk entry lists or running scheduled jobs during peak editorial activity.

**Resolution**

1.  Implement exponential backoff: on receiving a 429, wait and retry with increasing delay intervals (for example, 1s, 2s, 4s, 8s).
2.  Add jitter to backoff intervals to prevent multiple clients from retrying simultaneously.
3.  Use pagination (limit + skip) to fetch entries in smaller batches rather than requesting all entries at once.
4.  Cache CMA responses where the data does not change frequently to reduce repeated calls.
5.  If the default 10 RPS limit is insufficient for the use case, contact the Customer Success Manager to request a rate limit increase (note: increases have commercial implications).

After implementing exponential backoff and pagination, re-run the operation and confirm 429 errors no longer appear or are handled gracefully with successful retries.
