---
title: "Intermittent 502 Latency Spikes via SDK - CDN Edge Delays"
description: "Intermittent 502 Latency Spikes via SDK - CDN Edge Delays"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/060-intermittent-502-latency-spikes-via-sdk-cdn-edge-delays
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs95417a6e6d506aec
---

# Intermittent 502 Latency Spikes via SDK - CDN Edge Delays

Production applications using the TypeScript Delivery SDK experience intermittent latency spikes (up to 60+ seconds) and occasional 502 errors. The stack itself appears stable and direct cURL tests show normal response times.

**Root Cause**

The latency is caused by CDN edge-level delays, not by the origin server. CDN edge nodes can experience transient congestion or routing issues that cause requests to wait longer than normal at the edge before receiving a response. The SDK wraps the CDN call, making the delay appear as SDK-level slowness. The origin processes the request within normal bounds (around 1–2 seconds) but the CDN layer adds the additional delay.

**Resolution**

1.  Implement a client-side timeout in the SDK configuration. Set a reasonable timeout (for example, 10 seconds) so requests that stall at the edge fail fast and can be retried rather than waiting indefinitely.
2.  Implement retry logic with exponential backoff for requests that exceed the timeout threshold.
3.  If sustained latency spikes are observed, contact Contentstack Support and provide the time window, affected region, and stack details. CDN engineering can investigate edge routing issues.
4.  Monitor the CDN layer by measuring response time at both the network level and the SDK level to distinguish edge delays from origin delays.

After configuring a client-side timeout, confirm that requests stalling at the CDN edge fail within the timeout window and are retried successfully.
