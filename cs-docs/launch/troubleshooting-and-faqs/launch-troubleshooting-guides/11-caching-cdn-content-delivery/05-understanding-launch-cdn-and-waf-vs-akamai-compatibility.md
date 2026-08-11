---
title: "Understanding Launch CDN and WAF vs. Akamai Compatibility"
description: "Understanding Launch CDN and WAF vs. Akamai Compatibility"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/11-caching-cdn-content-delivery/05-understanding-launch-cdn-and-waf-vs-akamai-compatibility
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: cs56775d77cb640658
---

# Understanding Launch CDN and WAF vs. Akamai Compatibility

An organization considering or currently using Akamai as a CDN or WAF layer on top of Contentstack Launch asks whether Akamai is supported or recommended as an additional network layer in front of Launch.

**Root Cause**

Launch includes a built-in CDN and Web Application Firewall (WAF). Placing a separate CDN or WAF such as Akamai in front of Launch creates a double-CDN architecture that can cause performance degradation, cache conflicts, and routing issues. The additional network layer is generally not recommended.

**Resolution**

1.  Rely on the built-in Launch CDN and WAF capabilities for content delivery, caching, and perimeter security, additional CDN layers are not needed and can be counterproductive.
2.  If your organization requires Akamai for other parts of the stack, work with your infrastructure team to ensure Akamai is not placed in front of Launch-hosted properties.
3.  If using Akamai in front of Launch is a hard requirement, contact Contentstack Support to discuss configuration constraints and potential compatibility issues before implementation.
4.  Review Launch documentation on CDN and WAF capabilities to understand what is provided natively before adding third-party network layers.

The issue is resolved when the network architecture is clarified and the Launch-hosted site performs correctly with the built-in CDN without additional intermediary layers.
