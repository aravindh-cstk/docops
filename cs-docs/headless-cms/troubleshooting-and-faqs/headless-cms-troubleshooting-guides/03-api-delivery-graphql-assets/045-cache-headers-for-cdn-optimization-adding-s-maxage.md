---
title: "Cache Headers for CDN Optimization - Adding s-maxage"
description: "Cache Headers for CDN Optimization - Adding s-maxage"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/045-cache-headers-for-cdn-optimization-adding-s-maxage
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs99cd37b2eebbb666
---

# Cache Headers for CDN Optimization - Adding s-maxage

Performance testing reveals CDN cache MISS responses for repeated requests. Repeated API calls are reaching the origin, causing latency and contributing to 429 rate limit errors. Cache-Control headers are not set or are set only for browser caching.

**Root Cause**

Without s-maxage in the Cache-Control header, CDN edge nodes do not cache API responses. The max-age directive controls browser-side caching only. Without explicit CDN caching instructions, every request passes through to the origin, multiplying traffic and increasing the risk of rate limiting under load.

**Resolution**

1.  Add Cache-Control: s-maxage=86400 to responses intended for CDN caching. The s-maxage directive instructs CDN and shared caches to store the response for the specified duration (86400 seconds = 24 hours).
2.  Retain max-age for browser-side caching if the application also needs client caching.
3.  After adding the header, redeploy the application or use the Launch cache revalidation option to clear existing CDN cache and begin serving the new cached responses.
4.  Re-run the load test after the header update. Monitor CDN cache HIT vs MISS rates to confirm caching is now effective.

After deploying with s-maxage headers, confirm that repeated requests return CDN cache HITs in the response headers and that the origin request rate decreases proportionally.
