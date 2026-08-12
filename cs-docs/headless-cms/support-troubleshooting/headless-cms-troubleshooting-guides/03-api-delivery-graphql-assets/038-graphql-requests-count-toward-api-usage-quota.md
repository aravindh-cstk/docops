---
title: "GraphQL Requests Count Toward API Usage Quota"
description: "GraphQL Requests Count Toward API Usage Quota"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/038-graphql-requests-count-toward-api-usage-quota
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs00a90348611f35fd
---

# GraphQL Requests Count Toward API Usage Quota

There is uncertainty about whether GraphQL API requests delivered through the Contentstack CDN count toward the API usage quota. Usage metrics appear higher than expected.

**Root Cause**

GraphQL requests run through the Content Delivery API (CDA) and are counted toward the API usage quota, regardless of whether they are served from the CDN cache or hit the origin. Each GraphQL request - cached or otherwise - is recorded as an API call for quota purposes.

**Resolution**

1.  Review API usage metrics in the Contentstack dashboard under Organization settings to understand current consumption patterns.
2.  Implement query-level caching in the front-end application to avoid repeated identical GraphQL requests.
3.  Use the CDN effectively by structuring queries that can be cached (avoid highly dynamic, user-specific queries for cacheable content).
4.  If usage consistently exceeds plan limits, contact the Contentstack account team to review quota allocations.

After implementing caching and reviewing usage patterns, monitor the API usage dashboard over a rolling window. If usage decreases to expected levels, the caching strategy is reducing redundant API calls.
