---
title: "Inconsistency Between GraphQL Delivery API and GraphQL Live Preview Responses"
description: "Inconsistency Between GraphQL Delivery API and GraphQL Live Preview Responses"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/107-inconsistency-between-graphql-delivery-api-and-graphql-live-preview-responses
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs8a32228c9df185da
---

# Inconsistency Between GraphQL Delivery API and GraphQL Live Preview Responses

The same GraphQL query returns different data when executed against the standard GraphQL Delivery API versus the GraphQL Live Preview API. Specifically, nested child objects or referenced content that appears in the standard delivery response is missing or empty in the Live Preview response.

**Root Cause**

The GraphQL Live Preview API and the standard GraphQL Delivery API use different data resolution mechanisms. The Live Preview API fetches the draft state of the requested entry but does not always resolve deeply nested referenced entries in the same way as the Delivery API. Specifically:

-   The Live Preview API resolves the top-level entry in its draft state, but referenced child entries are resolved from the delivery layer, not the draft layer.
-   If a child entry has not been published (or has only recently been published without cache propagation), it may not be available in the resolution path used by the Live Preview API.
-   The Live Preview API also has known limitations with certain nested structures compared to the full delivery GraphQL schema.

**Resolution**

1.  Verify that all referenced child entries are published to the target environment. Unpublished child entries will not be resolved in either the delivery or live preview response.
2.  After publishing child entries, clear any cached state and re-run the Live Preview query to confirm the nested data appears.
3.  If child entries are published but still missing in the Live Preview response, contact Contentstack Support and provide: the GraphQL query, the top-level entry UID, the missing child entry UIDs, and the Live Preview token being used.
4.  As a workaround, if the missing data is not in draft state (it is already published and visible in the standard delivery response), use the standard Delivery API response for the affected nested fields rather than re-fetching through the Live Preview endpoint.

After publishing all referenced child entries and re-running the Live Preview query, confirm that nested data is now returned consistently between the Delivery API and Live Preview API responses.
