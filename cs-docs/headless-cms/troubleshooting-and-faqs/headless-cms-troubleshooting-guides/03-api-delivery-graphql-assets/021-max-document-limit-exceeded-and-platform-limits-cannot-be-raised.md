---
title: "MAX_DOCUMENT_LIMIT_EXCEEDED and Platform Limits Cannot Be Raised"
description: "MAX_DOCUMENT_LIMIT_EXCEEDED and Platform Limits Cannot Be Raised"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/021-max-document-limit-exceeded-and-platform-limits-cannot-be-raised
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs343b8947a0585663
---

# MAX_DOCUMENT_LIMIT_EXCEEDED and Platform Limits Cannot Be Raised

GraphQL queries fail with a MAX\_DOCUMENT\_LIMIT\_EXCEEDED error. Requests to increase the default limit (7,500 documents) or the resolver cost cap beyond platform thresholds are not fulfilled.

**Root Cause**

Contentstack enforces fixed platform-level limits on GraphQL queries to ensure performance and stability across all customers. These limits are not configurable beyond predefined thresholds and cannot be raised on request:

-   Default document limit: 7,500
-   Default resolver cost cap: 20

Complex navigation structures, deeply nested content types, or queries that expand across many references commonly trigger these limits.

**Resolution**

1.  Restructure queries to fetch data in smaller, targeted chunks instead of one large query.
2.  Preprocess or flatten content structures where possible to reduce query depth and expansion.
3.  Use client-side aggregation to combine results from multiple smaller queries.
4.  Consider caching frequently accessed query results to reduce repeated large query execution.

After restructuring the queries, confirm that each individual request stays within the document and resolver cost limits. If queries complete without limit errors, the restructuring is effective.
