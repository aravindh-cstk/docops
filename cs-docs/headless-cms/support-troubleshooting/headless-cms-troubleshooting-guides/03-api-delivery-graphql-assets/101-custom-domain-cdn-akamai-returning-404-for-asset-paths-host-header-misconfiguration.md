---
title: "Custom Domain CDN (Akamai) Returning 404 for Asset Paths - Host Header Misconfiguration"
description: "Custom Domain CDN (Akamai) Returning 404 for Asset Paths - Host Header Misconfiguration"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/101-custom-domain-cdn-akamai-returning-404-for-asset-paths-host-header-misconfiguration
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs746b502634ec7973
---

# Custom Domain CDN (Akamai) Returning 404 for Asset Paths - Host Header Misconfiguration

Assets requested via a custom Akamai CDN domain return 404 errors for all asset paths (/v3/assets/\*). Direct requests to the Contentstack origin return 200 OK, confirming the assets exist and are accessible.

**Root Cause**

Akamai is forwarding an incorrect Host header to the Contentstack origin. When the Host header contains the customer’s custom domain instead of the Contentstack CDN domain, the Contentstack origin cannot match the request to the correct stack and returns 404. The Akamai property’s origin configuration is also misconfigured, pointing to the wrong origin hostname.

**Resolution**

1.  In the Akamai property settings, update the Origin Hostname to the correct Contentstack CDN domain: images.contentstack.io (or eu-images.contentstack.com for EU region stacks).
2.  Set the Forward Host Header in Akamai to Origin Hostname to ensure the correct Host header is forwarded to Contentstack.
3.  Do not use the customer’s custom domain as the value forwarded in the Host header to the Contentstack origin.
4.  After updating the Akamai configuration, test a direct asset request through the custom domain and confirm a 200 response is returned.

After correcting the Akamai origin hostname and Host header forwarding settings, request an asset via the custom domain. If a 200 response is returned with the expected asset content, the configuration is correct.
