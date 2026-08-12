---
title: "Cloudflare Cross-Zone Error 1000 - DNS-Based Custom Domain Asset Mapping"
description: "Cloudflare Cross-Zone Error 1000 - DNS-Based Custom Domain Asset Mapping"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/15-cloudflare-cross-zone-error-1000-dns-based-custom-domain-asset-mapping
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs336658931ca6639f
---

# Cloudflare Cross-Zone Error 1000 - DNS-Based Custom Domain Asset Mapping

A customer wants to serve Contentstack assets under their own domain (for example, assets.example.com) by mapping a DNS CNAME to images.contentstack.io. The DNS mapping fails with Cloudflare Error 1000.

**Root Cause**

Cloudflare’s cross-zone restriction (Error 1000) prevents DNS CNAME records on a Cloudflare-managed domain from pointing to another Cloudflare-managed zone (such as images.contentstack.io, which is also on Cloudflare). This is a Cloudflare architectural limitation - CNAME flattening between different Cloudflare customers is blocked at the DNS level.

**Resolution**

Two viable alternatives to DNS-based CNAME mapping:

1.  Cloudflare Worker proxy: deploy a Cloudflare Worker on the custom domain that intercepts requests to the custom asset URL, fetches the asset from images.contentstack.io, and returns the response. This allows the custom domain to serve Contentstack assets transparently without a direct CNAME.
2.  Mask Asset Domains feature: use the Contentstack Mask Asset Domains feature, which allows the CDA to return asset URLs using a custom domain at the application level. This does not change the underlying CDN delivery but allows the application to control which domain appears in API responses. Refer to the Contentstack Mask Asset Domains documentation for setup.
3.  Reverse proxy at the web server layer: configure Nginx, Caddy, or a cloud load balancer to proxy requests from the custom domain path to images.contentstack.io.

After implementing the chosen approach, verify that asset URLs served under the custom domain return the correct images and headers, and that no Cloudflare Error 1000 is triggered.
