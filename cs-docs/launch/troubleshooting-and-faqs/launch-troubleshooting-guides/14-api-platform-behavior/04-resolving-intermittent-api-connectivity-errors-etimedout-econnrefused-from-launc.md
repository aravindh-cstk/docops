---
title: "Resolving Intermittent API Connectivity Errors (ETIMEDOUT/ECONNREFUSED) From Launch Environments"
description: "Resolving Intermittent API Connectivity Errors (ETIMEDOUT/ECONNREFUSED) From Launch Environments"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/14-api-platform-behavior/04-resolving-intermittent-api-connectivity-errors-etimedout-econnrefused-from-launc
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs4ec2e4f9d0205dfa
---

# Resolving Intermittent API Connectivity Errors (ETIMEDOUT/ECONNREFUSED) From Launch Environments

Requests from a Launch-hosted application to the Content Delivery API intermittently fail with TCP-level errors such as ETIMEDOUT and ECONNREFUSED, generating alerts even though external API monitoring shows normal platform uptime.

**Root Cause**

Investigation showed the failures were primarily 500-level responses generated at the application layer rather than a platform-wide outage. Outbound connection handling in the hosting environment, combined with high concurrency, can produce intermittent TCP-level failures that surface as ETIMEDOUT or ECONNREFUSED at the client.

**Resolution**

1.  Review application logs to confirm whether the errors correlate with periods of high concurrency or specific deployment events.
2.  Enable HTTP/HTTPS keep-alive in your API client configuration to reduce the overhead of repeatedly establishing new TCP connections.
3.  Configure retry logic with exponential backoff and appropriate custom timeout settings in the Content Delivery API client to gracefully handle transient connection failures.
4.  Enforce IPv4 resolution in the application’s network configuration if dual-stack resolution is contributing to instability.
5.  Implement stale-while-revalidate caching so the application can continue serving a recent cached response while a fresh one is fetched in the background, reducing the impact of any individual failed request.
6.  Introduce request deduplication to avoid issuing multiple identical concurrent requests for the same data, which reduces unnecessary load during traffic spikes.
7.  Apply a concurrency cap on outbound API requests to prevent the application from overwhelming its own connection pool during periods of high concurrency.
8.  Monitor error rates after applying these changes to confirm a reduction in ETIMEDOUT and ECONNREFUSED occurrences, and roll the optimizations out to production as part of your regular release cycle once validated.

The issue is resolved when API requests from the Launch environment complete reliably under normal and high-concurrency conditions, with caching, deduplication, concurrency limits, and retry logic together absorbing any remaining transient failures.
