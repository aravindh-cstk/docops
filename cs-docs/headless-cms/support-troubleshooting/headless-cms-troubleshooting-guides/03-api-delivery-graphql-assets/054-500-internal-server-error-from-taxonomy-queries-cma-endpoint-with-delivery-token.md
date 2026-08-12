---
title: "500 Internal Server Error from Taxonomy Queries - CMA Endpoint with Delivery Token"
description: "500 Internal Server Error from Taxonomy Queries - CMA Endpoint with Delivery Token"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/054-500-internal-server-error-from-taxonomy-queries-cma-endpoint-with-delivery-token
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csa0fb70722f3a4d47
---

# 500 Internal Server Error from Taxonomy Queries - CMA Endpoint with Delivery Token

A CDA request using a delivery token (access\_token) to a taxonomy-related endpoint returns a 500 Internal Server Error. The same token works correctly for non-taxonomy endpoints.

**Root Cause**

The request is being sent to the CMA API endpoint (api.contentstack.io) using a delivery token. The CMA requires a management token or auth token - passing a delivery token to the CMA produces unexpected behavior including 500 errors. Delivery tokens are only valid for CDA endpoints (cdn.contentstack.io and its regional equivalents).

**Resolution**

1.  Confirm the endpoint being called. For content delivery use cases, use the CDA endpoint (cdn.contentstack.io or regional equivalent) with the delivery token (access\_token header).
2.  If the use case requires CMA access (for example, fetching unpublished entries or schema data), use the CMA endpoint (api.contentstack.io) with a management token or auth token.
3.  Never use a delivery token on the CMA endpoint - this configuration is not supported.

After switching to the correct endpoint and token combination, re-run the request and confirm a valid response is returned.
