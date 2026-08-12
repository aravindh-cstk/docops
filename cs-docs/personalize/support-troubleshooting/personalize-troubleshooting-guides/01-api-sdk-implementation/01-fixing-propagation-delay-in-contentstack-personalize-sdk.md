---
title: "Fixing Propagation Delay in Contentstack Personalize SDK"
description: "Fixing Propagation Delay in Contentstack Personalize SDK"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/01-api-sdk-implementation/01-fixing-propagation-delay-in-contentstack-personalize-sdk
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs8411a6198b079d17
---

# Fixing Propagation Delay in Contentstack Personalize SDK

When using the Contentstack Personalize SDK, changes made to experiment variants in the dashboard do not reflect immediately on the frontend.

**Root Cause**

This is due to propagation delays inherent in the SDK's manifest delivery system. The SDK is designed for performance, which sometimes results in a slight delay for updates to reach the client side.

**Resolution**

If your use case requires immediate variant updates (real-time reflection), do not rely on the SDK's automated fetch. Instead, switch to using the Contentstack Personalize API for direct variant retrieval. The API bypasses the SDK's propagation window.

After switching from the SDK to the API, retrieve a recently updated variant. If the updated data is returned immediately and aligns with the expected scenario, the issue is resolved.
