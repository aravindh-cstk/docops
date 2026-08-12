---
title: "429 Rate Limiting on the Images API"
description: "429 Rate Limiting on the Images API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/19-429-rate-limiting-on-the-images-api
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs7d87deafd753231c
---

# 429 Rate Limiting on the Images API

HTTP 429 Too Many Requests errors appear on requests to images.contentstack.io rather than on the standard CDA endpoint. The errors occur during short traffic spikes and affect image delivery specifically.

**Root Cause**

The Images API (images.contentstack.io) has its own rate limit, separate from the CDA REST and GraphQL limits. When the volume of asset requests to the Images API exceeds the configured threshold within a one-second window, 429 errors are returned for the excess image requests. This commonly occurs during:

-   High-traffic campaigns or product launches where many users load image-heavy pages simultaneously
-   Automated scripts or crawlers requesting large numbers of image URLs in rapid succession
-   Integration assets that call image URLs without throttling

**Resolution**

1.  Implement client-side caching for image responses to avoid repeated requests for the same asset URL.
2.  Use a CDN layer in front of the application to serve image responses from cache and reduce the volume of requests reaching the Contentstack Images API.
3.  Audit all integrations and automated processes that make image requests and add throttling where unconstrained calls are identified.
4.  Review images.contentstack.io request metrics via Contentstack Support to understand peak consumption patterns.
5.  If the Images API limit is consistently insufficient for production traffic, contact Contentstack Support to discuss a limit increase.

After implementing caching and throttling for image requests, monitor the 429 error rate on the Images API. If errors reduce or cease, the request volume is within the rate limit.
