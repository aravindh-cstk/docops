---
title: "Mapping a Custom Domain for Asset URLs - Mask Asset Domains"
description: "Mapping a Custom Domain for Asset URLs - Mask Asset Domains"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/20-mapping-a-custom-domain-for-asset-urls-mask-asset-domains
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs381fa67bcdeb7614
---

# Mapping a Custom Domain for Asset URLs - Mask Asset Domains

A customer wants API responses to return asset URLs using a custom domain instead of the default images.contentstack.io. Stack-level configuration for this mapping is not available in the Contentstack UI.

**Root Cause**

Contentstack does not currently provide a stack-level UI setting to automatically replace images.contentstack.io with a custom domain in API responses. This capability requires either a client-side URL rewriting approach or the Mask Asset Domains feature.

**Resolution**

1.  Use the Mask Asset Domains feature: this Contentstack feature allows the CDA to return asset URLs using a custom domain in API responses. Refer to the Contentstack Mask Asset Domains documentation for setup steps. Note: this controls what domain appears in the API response but requires a corresponding reverse proxy or CDN configuration to route requests from the custom domain to Contentstack’s CDN.
2.  Alternatively, implement URL replacement at the application layer: after fetching entries from the CDA, replace images.contentstack.io with the custom domain in asset URL strings before rendering or passing to the frontend.
3.  For a reverse proxy approach: configure Nginx, Caddy, or a cloud CDN rule to serve requests to the custom domain by proxying to images.contentstack.io. This handles routing independently of what the API returns.
4.  If stack-level automatic domain mapping is a business requirement, contact your Customer Success Manager - this may be evaluated as a future platform capability.

After configuring Mask Asset Domains or the reverse proxy, verify that API responses return asset URLs using the custom domain and that assets load correctly through the custom domain URL.
