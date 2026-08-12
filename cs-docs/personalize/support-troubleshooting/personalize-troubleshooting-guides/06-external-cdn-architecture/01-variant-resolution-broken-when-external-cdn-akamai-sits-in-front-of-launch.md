---
title: "Variant Resolution Broken When External CDN (Akamai) Sits in Front of Launch"
description: "Variant Resolution Broken When External CDN (Akamai) Sits in Front of Launch"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/06-external-cdn-architecture/01-variant-resolution-broken-when-external-cdn-akamai-sits-in-front-of-launch
doc_type: faq
_cms_section_uid: csd2a9d7235b16f75c
_cms_faq_uid: cs88100551bb01826b
---

# Variant Resolution Broken When External CDN (Akamai) Sits in Front of Launch

When an external CDN such as Akamai is placed in front of Contentstack Launch, personalized variant resolution may not work as expected. Experience splits (for example, 33/33/33 A/B distributions) do not behave correctly because cached content is served without re-evaluating the Personalize SDK per visitor.

**Root Cause**

The documented Contentstack Launch + Personalize architecture assumes that Launch's Edge Proxy runs the Personalize Edge SDK before any personalized HTML or API response is returned. When Akamai caches the response after the first request and serves it to subsequent visitors, the Personalize SDK is not re-executed per visitor — so variant selection does not occur for cached requests. Using a Vary header affects cache keys only and does not cause the Personalize SDK to execute.

**Resolution**

1.  Prefer using Contentstack Launch as the delivery edge for all hostnames serving personalized pages. Avoid placing a second CDN in front of Launch for personalized routes where possible.
2.  If Akamai must remain in front of Launch, do not cache personalized routes at Akamai. Apply Cache-Control: no-store on HTML responses for personalized pages and on any personalized API responses. Ensure Akamai is configured to honour origin cache-control headers for these routes.
3.  Static assets (images, stylesheets, scripts) can still be cached aggressively at Akamai — apply no-cache policies only to routes that serve personalized content.
4.  If you require per-visitor variant evaluation at the Akamai layer, explore Akamai EdgeWorkers as a custom solution. Note that EdgeWorkers are a customer-owned design and Contentstack does not provide a supported integration for this pattern. Professional Services can be engaged if needed.
5.  Confirm the final architecture with your team and reopen the support case if additional clarification is required.

The safest and most supported architecture for Personalize is using Contentstack Launch as the sole edge delivery layer. CDN bypass rules for personalized routes are the recommended interim solution when a second CDN cannot be removed.
