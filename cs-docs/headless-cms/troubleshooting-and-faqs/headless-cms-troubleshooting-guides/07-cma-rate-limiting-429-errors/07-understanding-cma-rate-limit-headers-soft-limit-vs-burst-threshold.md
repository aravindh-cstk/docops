---
title: "Understanding CMA Rate Limit Headers - Soft Limit vs Burst Threshold"
description: "Understanding CMA Rate Limit Headers - Soft Limit vs Burst Threshold"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/07-understanding-cma-rate-limit-headers-soft-limit-vs-burst-threshold
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csb4891b4d94bc622a
---

# Understanding CMA Rate Limit Headers - Soft Limit vs Burst Threshold

The CMA usage log shows 429 errors appearing in spikes even though average usage appears below the confirmed rate limit. The rate limit response header (X-RateLimit-Limit) shows a value of 10 RPS, but the actual agreed limit is higher.

**Root Cause**

The CMA enforces two rate limit values: a soft limit (10 RPS for most CMA GET operations) reflected in the X-RateLimit-Limit response header, and an internal burst threshold (for example, 23 RPS) that is not exposed in headers. Requests are throttled when they exceed the soft limit in a sustained pattern. Short-duration bursts may be absorbed by the burst threshold, but sustained traffic above the soft limit consistently triggers 429 errors.

**Resolution**

1.  Design automation and integration logic to target the X-RateLimit-Limit header value (the soft limit) as the steady-state rate, not the burst threshold.
2.  Implement request spacing: rather than firing requests as fast as possible, introduce a configurable delay between requests to stay below the soft limit.
3.  On receiving a 429, read the Retry-After header (if present) and wait the specified duration before retrying.
4.  For spike prevention during deployments, add a rate-limiting wrapper to all CMA call sites that enforces the soft limit as a ceiling.
5.  To check the actual rate limit configuration for the organization directly: GET /v3/organizations/{org\_uid}/plan (requires auth token).

After implementing request spacing and retry logic based on the soft limit, monitor the 429 spike frequency during the next high-traffic period and confirm spikes are reduced. Rate limit header values: x-ratelimit-limit shows the soft limit; x-ratelimit-remaining shows requests remaining in the current window.
