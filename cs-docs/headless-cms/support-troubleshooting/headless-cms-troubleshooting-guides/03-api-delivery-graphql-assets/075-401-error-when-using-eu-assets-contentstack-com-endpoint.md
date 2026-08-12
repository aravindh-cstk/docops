---
title: "401 Error When Using eu-assets.contentstack.com Endpoint"
description: "401 Error When Using eu-assets.contentstack.com Endpoint"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/075-401-error-when-using-eu-assets-contentstack-com-endpoint
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs400d351d720ab68a
---

# 401 Error When Using eu-assets.contentstack.com Endpoint

Attempts to retrieve assets using the eu-assets.contentstack.com endpoint return a 401 Unauthorized error. The same assets are accessible via other URLs.

**Root Cause**

The eu-assets.contentstack.com endpoint is not intended for CDN-based asset delivery. It is an internal or legacy endpoint that requires authentication and is not the correct URL for retrieving assets in the EU region.

**Resolution**

1.  Replace eu-assets.contentstack.com with eu-images.contentstack.com in all asset request URLs.
2.  The eu-images.contentstack.com endpoint is the correct CDN-based asset delivery URL for EU region stacks.
3.  Update any hardcoded URLs, SDK configurations, or integration settings that reference the incorrect endpoint.

After updating to the correct endpoint, request an asset URL using eu-images.contentstack.com and confirm a 200 response is returned with the expected asset content.
