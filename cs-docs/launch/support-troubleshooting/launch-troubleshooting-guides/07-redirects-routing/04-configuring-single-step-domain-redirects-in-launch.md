---
title: "Configuring Single-Step Domain Redirects in Launch"
description: "Configuring Single-Step Domain Redirects in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/07-redirects-routing/04-configuring-single-step-domain-redirects-in-launch
doc_type: faq
_cms_section_uid: csa82453e7ca89b7fd
_cms_faq_uid: cs8847955281375d33
---

# Configuring Single-Step Domain Redirects in Launch

A domain redirect configuration results in a multi-step redirect chain (e.g., http://example.com → https://example.com → https://www.example.com) instead of a single direct redirect. Multi-step chains increase latency and may cause issues with certain browsers or SEO crawlers.

**Root Cause**

Default redirect configurations handle HTTP-to-HTTPS and non-www-to-www as separate steps. Without explicit single-step redirect configuration, the CDN or platform applies each rule sequentially, resulting in a redirect chain.

**Resolution**

1.  Define a single redirect rule that maps the non-secure, non-www root URL (e.g., http://example.com) directly to the final secure www destination (e.g., https://www.example.com).
2.  Configure the rule within your Launch Edge Function or launch.json so that both the protocol upgrade and subdomain normalization are handled in a single HTTP 301 response.
3.  Remove or disable any intermediate redirect rules that separately handle HTTP-to-HTTPS and non-www-to-www to prevent redirect chains from forming.
4.  Test the redirect chain using a tool such as curl --head or an online redirect checker to confirm that http://example.com resolves directly to https://www.example.com in a single hop.

The issue is resolved when the redirect chain collapses to a single step and the destination URL loads without intermediate redirects.
