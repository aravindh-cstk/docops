---
title: "Reducing API Call Count and Improving Delivery Performance"
description: "Reducing API Call Count and Improving Delivery Performance"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/098-reducing-api-call-count-and-improving-delivery-performance
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscdd1271330a6dacd
---

# Reducing API Call Count and Improving Delivery Performance

API usage significantly exceeds expected limits. The application is generating a high volume of CDA calls and guidance is needed on how to reduce consumption without impacting content delivery.

**Root Cause**

High API call counts are commonly caused by inefficient content modeling, redundant requests, deeply nested reference resolution on every page load, and lack of caching at the application layer.

**Resolution**

-   Use GraphQL instead of REST for queries requiring specific field selection, reducing over-fetching. Be mindful of the 8,192-byte GraphQL query size limit.
-   For REST, use the only\[\] parameter to fetch only required fields and reduce response payload.
-   Flatten deep reference chains in the content model where possible to reduce include\_depth requirements per request.
-   Paginate large datasets using limit and skip rather than fetching all entries in a single large request.
-   Implement server-side or edge caching to serve repeated identical queries from cache rather than making a new CDA call each time.
-   Review the Product Analytics dashboard (accessible to Org Owners and Admins) to identify the highest-traffic endpoints and content types, then target optimizations accordingly.
-   For static site generation, pre-fetch and cache all required content at build time to reduce runtime API calls.

After implementing caching and query optimization, monitor API usage in Product Analytics over a 7-day window. If total call counts decrease toward expected levels, the optimizations are effective.
