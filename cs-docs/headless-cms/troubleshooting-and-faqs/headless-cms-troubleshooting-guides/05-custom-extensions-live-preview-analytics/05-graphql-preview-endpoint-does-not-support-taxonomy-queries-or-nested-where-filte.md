---
title: "GraphQL Preview Endpoint Does Not Support Taxonomy Queries or Nested Where Filtering"
description: "GraphQL Preview Endpoint Does Not Support Taxonomy Queries or Nested Where Filtering"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/05-graphql-preview-endpoint-does-not-support-taxonomy-queries-or-nested-where-filte
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs3df653370486662d
---

# GraphQL Preview Endpoint Does Not Support Taxonomy Queries or Nested Where Filtering

Queries that work on the main GraphQL endpoint - particularly those using taxonomy fields or where filtering on nested collection fields - fail or return errors when run against the GraphQL Preview endpoint.

**Root Cause**

The GraphQL Preview endpoint has known feature limitations compared to the main Delivery GraphQL endpoint. Specifically:

-   Taxonomy field queries are not supported on the Preview endpoint
-   The where argument for filtering is only available on top-level queries; nested collection filtering is not supported

This is a known platform limitation, not a bug or misconfiguration.

**Resolution**

1.  For taxonomy queries, use the main GraphQL Delivery endpoint rather than the Preview endpoint.
2.  For nested where filtering, restructure queries to apply filters at the top level where possible.
3.  If Preview-specific testing of these features is required, apply post-fetch filtering on the client side after retrieving data via the Preview endpoint.

After redirecting taxonomy and nested filter queries to the main GraphQL endpoint, confirm the queries return expected results. If responses are correct, the limitation has been appropriately worked around.
