---
title: "GraphQL Taxonomy Search Not Returning Expected Results"
description: "GraphQL Taxonomy Search Not Returning Expected Results"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/041-graphql-taxonomy-search-not-returning-expected-results
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs5979332ff634e3f4
---

# GraphQL Taxonomy Search Not Returning Expected Results

A GraphQL taxonomy search query returns unexpected or empty results despite the taxonomy being correctly configured in the CMS.

**Root Cause**

GraphQL taxonomy search results can be affected by a stale cache at the delivery token or entry level. If the taxonomy or entries were recently created or modified, the cache may not have updated to reflect the latest state.

**Resolution**

1.  Navigate to Settings > Tokens and re-save the delivery token used in the GraphQL query (without making changes) to force a cache refresh.
2.  Re-save the affected entries or taxonomy terms in the CMS to trigger a cache invalidation.
3.  If caching is suspected at the CDN layer, append a unique query string parameter to the request to bypass the cache: ?cb=<random\_value>
4.  Re-run the taxonomy search query and confirm results now match expectations.

After re-saving the token and entries, execute the taxonomy search query again. If the expected taxonomy results are returned, the cache has been successfully refreshed.
