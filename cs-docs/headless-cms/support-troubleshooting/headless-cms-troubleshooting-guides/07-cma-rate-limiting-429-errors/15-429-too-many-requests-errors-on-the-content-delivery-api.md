---
title: "429 Too Many Requests Errors on the Content Delivery API"
description: "429 Too Many Requests Errors on the Content Delivery API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/15-429-too-many-requests-errors-on-the-content-delivery-api
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs68fedb9e52f7affe
---

# 429 Too Many Requests Errors on the Content Delivery API

HTTP 429 Too Many Requests errors appear in production, during deployments, or during build processes. The errors occur in bursts and may affect static site generation, server-side rendering, or high-traffic periods.

**Root Cause**

The default Content Delivery API rate limit is 100 requests per second per organization. When the total number of CDA GET requests across all stacks in the organization exceeds this threshold within a one-second window, the API returns 429 responses for the excess requests. Common triggers include:

-   Vercel or Next.js build processes making many simultaneous CDA calls
-   Release or bulk publish events triggering high-frequency API queries
-   Multiple applications or services sharing the same organization quota
-   Integration assets or scripts making unconstrained API calls

**Resolution**

1.  Implement request throttling and exponential backoff in all applications to smooth request rates below 100 RPS.
2.  Review the x-ratelimit-limit and x-ratelimit-remaining response headers to monitor live usage against the current limit.
3.  Stagger build processes and bulk operations to distribute requests over time.
4.  Use the Product Analytics dashboard to identify which content types, stacks, or endpoints are generating the highest request volumes.
5.  If the default 100 RPS limit is consistently insufficient for production workloads, contact Contentstack Support to request a limit increase. Note that increases above the default may have contractual and cost implications.

After implementing throttling and reviewing request patterns, monitor the API for a 24-hour period. If 429 errors no longer appear at the same frequency, the rate of requests is within limits.
