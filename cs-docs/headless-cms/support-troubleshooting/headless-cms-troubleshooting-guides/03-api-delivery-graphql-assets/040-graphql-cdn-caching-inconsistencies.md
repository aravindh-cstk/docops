---
title: "GraphQL CDN Caching Inconsistencies"
description: "GraphQL CDN Caching Inconsistencies"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/040-graphql-cdn-caching-inconsistencies
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs54564a0658c1bf2a
---

# GraphQL CDN Caching Inconsistencies

GraphQL requests return inconsistent results or do not behave as expected due to CDN caching. Some requests return stale data while others hit the origin unnecessarily.

**Root Cause**

CDN caching for GraphQL requests depends on how the CDN hashing mechanism is configured. If the hashing configuration does not correctly account for the query body, variables, or headers, requests may be incorrectly grouped into the same cache key or bypassed entirely.

**Resolution**

1.  Contact Contentstack Support if you observe consistent caching anomalies such as stale data or unexpected cache misses.
2.  Support will review the CDN hashing configuration for the affected stack and adjust it to ensure requests with different query bodies or variables are cached independently.
3.  In the meantime, append a cache-busting query string parameter to force fresh requests where stale data is critical.

After the CDN hashing configuration is adjusted, re-run the affected GraphQL queries. If responses are now consistent and correctly reflect the latest published content, the caching issue is resolved.
