---
title: "Does caching apply to external URLs fetched via Edge Rewrites, Redirects, or Edge Functions?"
description: "Does caching apply to external URLs fetched via Edge Rewrites, Redirects, or Edge Functions?"
url: /launch/troubleshooting-and-faqs/launch-faqs/02-caching-faqs/14-does-caching-apply-to-external-urls-fetched-via-edge-rewrites-redirects-or-edge-
doc_type: faq
_cms_section_uid: cs3af4c9c7caaf8607
_cms_faq_uid: cscc785f3c5f3f492b
---

# Does caching apply to external URLs fetched via Edge Rewrites, Redirects, or Edge Functions?

Launch uses Cloudflare as its CDN. Caching external URLs can apply, but only if the external URL is served through Cloudflare and returns cacheable Cache-Control headers. If the external origin is hosted on a different CDN or server and lacks cacheable headers, the response will not be cached.
