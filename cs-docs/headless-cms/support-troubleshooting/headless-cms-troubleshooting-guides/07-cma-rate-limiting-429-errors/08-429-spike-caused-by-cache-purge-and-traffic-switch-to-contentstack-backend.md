---
title: "429 Spike Caused by Cache Purge and Traffic Switch to Contentstack Backend"
description: "429 Spike Caused by Cache Purge and Traffic Switch to Contentstack Backend"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/08-429-spike-caused-by-cache-purge-and-traffic-switch-to-contentstack-backend
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs84b07aed3edaf4df
---

# 429 Spike Caused by Cache Purge and Traffic Switch to Contentstack Backend

A sudden spike in HTTP 429 errors occurs after a CDN cache purge or a traffic switch that routes requests directly to the Contentstack backend. Request rates reach several hundred per second, exhausting the organization rate limit.

**Root Cause**

When a CDN cache is purged or traffic is switched to bypass the CDN, all requests that were previously served from cache now hit the Contentstack origin simultaneously. This cache stampede drives traffic well above the organization rate limit. Malformed asset URLs (incorrect query parameters) in the traffic also contribute - each unique URL variant creates a separate cache miss, multiplying origin-bound requests.

**Resolution**

1.  After a cache purge, implement a staggered cache warm-up instead of allowing all traffic to hit the origin simultaneously. Gradually re-route traffic or use a crawl-based warm-up script that paces requests.
2.  Audit asset URLs for malformed query parameters. Incorrect parameters prevent CDN caching and ensure every request is a cache miss. Fix URL construction in the application to ensure consistent, cacheable URLs.
3.  If a planned traffic switch is required, notify Contentstack Support in advance. They can monitor the traffic pattern and assist if rate limits need temporary adjustment.
4.  Implement exponential backoff and retry logic in the application to handle 429 responses gracefully during the transition period.

After stabilizing the CDN cache state and fixing malformed URLs, monitor the request rate and confirm 429 errors return to baseline.
