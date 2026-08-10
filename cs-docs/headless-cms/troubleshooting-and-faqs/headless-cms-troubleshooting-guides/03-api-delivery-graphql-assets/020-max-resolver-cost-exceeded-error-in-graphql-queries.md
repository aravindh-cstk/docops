---
title: "MAX_RESOLVER_COST_EXCEEDED Error in GraphQL Queries"
description: "MAX_RESOLVER_COST_EXCEEDED Error in GraphQL Queries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/020-max-resolver-cost-exceeded-error-in-graphql-queries
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs9a5466af592bd080
---

# MAX_RESOLVER_COST_EXCEEDED Error in GraphQL Queries

GraphQL queries fail with a MAX\_RESOLVER\_COST\_EXCEEDED error even when the expected number of returned results is small. The platform rejects the query before execution based on estimated query cost.

**Root Cause**

Contentstack applies strict query cost limits to protect platform stability. These limits are evaluated based on worst-case expansion of the query, not actual returned data:

-   Maximum documents: 7,500
-   Maximum resolver cost: 20
-   Maximum reference depth: 3 levels

When a query structure theoretically could expand to exceed these limits - even if the actual dataset is small - the platform rejects it. Queries with multiple nested references, high include depth, or broad filters are most commonly affected.

**Resolution**

1.  Reduce the number of nested reference levels in the query to stay within the 3-level maximum.
2.  Break complex queries into multiple smaller queries targeting specific content types or fields.
3.  Avoid querying all fields across deeply nested structures in a single request.
4.  Use pagination (limit and skip) to reduce the theoretical document count per query.

After restructuring the query to reduce resolver cost and depth, re-run it in the GraphQL Explorer. If the query executes without a MAX\_RESOLVER\_COST\_EXCEEDED error, the query is within platform limits.
