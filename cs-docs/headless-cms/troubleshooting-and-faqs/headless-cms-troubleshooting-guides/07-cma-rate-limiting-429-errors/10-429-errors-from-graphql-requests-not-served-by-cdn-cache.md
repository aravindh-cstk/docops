---
title: "429 Errors from GraphQL Requests Not Served by CDN Cache"
description: "429 Errors from GraphQL Requests Not Served by CDN Cache"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/10-429-errors-from-graphql-requests-not-served-by-cdn-cache
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs0e1f5ce20929efbc
---

# 429 Errors from GraphQL Requests Not Served by CDN Cache

A spike of 20,000+ HTTP 429 errors occurs, with request rates reaching approximately 230 requests per second, exceeding this customer’s contracted CDA limit of 150 RPS (a customer-specific threshold, not the platform default). Analysis shows GraphQL queries are heavily contributing to the spike because they are not benefiting from CDN caching. Note that GraphQL origin requests are also independently capped at a platform default of 80 RPS per organization, separate from the CDA REST limit.

**Root Cause**

GraphQL POST requests may bypass CDN caching if the CDN is not configured to cache them. This causes every GraphQL request to hit the origin, consuming rate limit capacity. This is compounded when GraphQL queries use include\_all or deep reference chains without limit arguments, producing expensive queries that slow origin processing and cause backpressure.

**Resolution**

1.  Ensure the CDN caching layer is configured to cache GraphQL POST responses for frequently used queries. Use consistent query structures and avoid dynamic query generation that would create unique cache keys per request.
2.  Avoid using include\_all=true for top-level entry fetches combined with all references. Instead, fetch the top-level entry with specific include\[\] paths, or use separate API calls for heavy reference chains.
3.  Add limit arguments to all GraphQL queries to reduce response size and origin processing time.
4.  Implement request deduplication so multiple simultaneous identical requests share a single in-flight origin call rather than each hitting the API independently.

After improving CDN cache hit rates for GraphQL and reducing over-fetching, monitor the 429 error rate during the next traffic peak and confirm it stays within the rate limit.
