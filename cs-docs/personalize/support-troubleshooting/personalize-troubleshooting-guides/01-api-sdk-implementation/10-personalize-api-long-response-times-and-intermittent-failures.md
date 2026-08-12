---
title: "Personalize API Long Response Times and Intermittent Failures"
description: "Personalize API Long Response Times and Intermittent Failures"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/01-api-sdk-implementation/10-personalize-api-long-response-times-and-intermittent-failures
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs04e6950ef8a3d7e3
---

# Personalize API Long Response Times and Intermittent Failures

Connections to Contentstack Personalize endpoints (/user-attributes and /manifest) may experience response times ranging from 1 to 10 seconds, with intermittent failures across all containers in an integration. This can degrade application performance and reliability.

**Root Cause**

Isolated latency spikes on Personalize endpoints are typically caused by brief traffic bursts or normal network variability rather than a persistent platform issue. Platform-side p95 latency for /user-attributes is approximately 380 ms and for /manifest approximately 149 ms. Requests exceeding 1 second typically represent less than 0.2% of traffic.

**Resolution**

1.  Check whether the high latency is consistent or isolated. Review Contentstack's status page for any active incidents before investigating your own infrastructure.
2.  Implement /user-attributes calls as fire-and-forget requests so they do not block critical application workflows. These calls update user data asynchronously and do not need to be awaited before rendering content.
3.  Add retry logic and fallback mechanisms to /manifest calls to handle occasional latency spikes gracefully without impacting the user experience.
4.  Review your container or serverless environment's connection settings. Ensure HTTP keep-alive is enabled to avoid TCP handshake overhead on each request.
5.  If sustained high latency persists beyond what is explained by traffic bursts, open a support case and provide the affected Project ID, endpoint URLs, timestamps, and sample request/response logs.

After implementing fire-and-forget patterns for /user-attributes and retry logic for /manifest, isolated latency spikes will no longer cause visible failures in the application.
