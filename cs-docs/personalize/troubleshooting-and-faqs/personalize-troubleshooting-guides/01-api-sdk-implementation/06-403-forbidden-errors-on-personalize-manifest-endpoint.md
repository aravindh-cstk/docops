---
title: "403 Forbidden Errors on Personalize Manifest Endpoint"
description: "403 Forbidden Errors on Personalize Manifest Endpoint"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/06-403-forbidden-errors-on-personalize-manifest-endpoint
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cscba0e02306aea57f
---

# 403 Forbidden Errors on Personalize Manifest Endpoint

The Personalize manifest endpoint (/manifest) may return a high volume of 403 Forbidden responses, particularly during overnight hours. Users may suspect a platform change, rate limit, or authentication issue as the cause.

**Root Cause**

403 responses on the manifest endpoint are commonly caused by automated bot or crawler traffic (for example, ChatGPT bots, SeznamBot, or Website-info robots). DNS and CDN providers may automatically block unusual or high-frequency bot requests, resulting in 403 responses for those specific request origins. Legitimate user traffic is not affected.

**Resolution**

1.  Review your server logs or CDN analytics and filter requests by user agent. Identify whether the 403 responses are concentrated among known bot agents rather than real user sessions.
2.  Check your DNS provider or CDN configuration (for example, Cloudflare) to see if automated bot-blocking rules are active. These are expected and do not require changes.
3.  If legitimate user requests are also returning 403 errors, open a support case with Contentstack and share the specific user agents, IP ranges, and timestamps of affected requests for further investigation.
4.  Monitor the error rate over 24-48 hours. If bot traffic subsides, the 403 count will decrease accordingly.

If 403 errors drop significantly as bot activity decreases and real user traffic continues to succeed, the issue is confirmed as bot-related and no platform changes are required.

Note: if Personalize is completely unresponsive rather than returning 403 errors, check the Contentstack Status Page (https://www.contentstackstatus.com) as the first step before beginning any SDK or configuration debugging. Platform incidents are posted there in real time.
