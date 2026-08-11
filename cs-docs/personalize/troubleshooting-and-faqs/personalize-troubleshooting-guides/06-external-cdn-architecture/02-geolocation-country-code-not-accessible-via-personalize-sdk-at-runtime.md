---
title: "Geolocation Country Code Not Accessible via Personalize SDK at Runtime"
description: "Geolocation Country Code Not Accessible via Personalize SDK at Runtime"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/06-external-cdn-architecture/02-geolocation-country-code-not-accessible-via-personalize-sdk-at-runtime
doc_type: faq
_cms_section_uid: csd2a9d7235b16f75c
_cms_faq_uid: csa5bf50786182e063
---

# Geolocation Country Code Not Accessible via Personalize SDK at Runtime

A developer needs to access the visitor's resolved country code at runtime in a Next.js application to pass it as a parameter to an external API call. Contentstack Personalize is already configured with location-based targeting (Country/Region/City) but the SDK does not appear to expose the resolved geolocation value programmatically.

**Root Cause**

Contentstack Personalize uses geolocation data internally for audience evaluation only. The resolved country code is not exposed via the Personalize SDK for external consumption at runtime. The SDK provides variant delivery, not raw geolocation data.

**Resolution**

1.  Do not rely on the Personalize SDK to expose geolocation data for non-audience use cases. The SDK is not designed for this purpose.
2.  Implement independent geolocation resolution in your Next.js application. The recommended approaches are:

-   Use the Cloudflare-IPCountry request header if your application is deployed behind Cloudflare. This header contains the two-letter country code resolved by Cloudflare's network and is available at the edge.
-   Use the x-vercel-ip-country header if deploying on Vercel. This header is automatically populated by Vercel's infrastructure.
-   Integrate a third-party geolocation API (for example, MaxMind GeoIP2 or ip-api.com) within your Next.js middleware or API route to resolve the country code server-side before rendering.

3\. Pass the resolved country code from your chosen geolocation source to the external API call as required by your implementation.

Using a CDN or infrastructure-level geolocation header is the most performant approach for Next.js applications, as the country code is resolved at the network edge without an additional API call.
