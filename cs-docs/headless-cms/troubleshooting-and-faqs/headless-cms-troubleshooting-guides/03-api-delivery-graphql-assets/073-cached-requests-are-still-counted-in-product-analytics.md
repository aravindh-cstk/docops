---
title: "Cached Requests Are Still Counted in Product Analytics"
description: "Cached Requests Are Still Counted in Product Analytics"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/073-cached-requests-are-still-counted-in-product-analytics
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csa6f50a3b7b59ad0f
---

# Cached Requests Are Still Counted in Product Analytics

Product Analytics shows API requests for assets and entries even when responses are served from the CDN cache. The expectation is that cached responses should not increment the API usage count.

**Root Cause**

Product Analytics logs every request that reaches Contentstack endpoints - including CDN, Images API, GraphQL, and Assets - regardless of whether the response is served from cache or origin. Cache hits are still recorded as API calls because the request is processed by the CDN layer, which is part of Contentstack infrastructure.

**Resolution**

This is expected behavior. Cached requests do count toward API usage metrics and cannot be excluded from Product Analytics. To reduce overall API usage counts:

1.  Maximize cache hit rates by structuring requests to be cache-friendly (consistent URLs, minimal query string variation).
2.  Implement application-level or CDN-level caching upstream of Contentstack to avoid repeated requests for the same content.

After improving cache hit rates, monitor Product Analytics to confirm that total request counts decrease as more responses are served from the application cache.
