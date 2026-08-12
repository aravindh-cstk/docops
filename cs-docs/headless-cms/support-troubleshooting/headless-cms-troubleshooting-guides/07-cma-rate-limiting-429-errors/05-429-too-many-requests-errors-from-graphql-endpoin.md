---
title: "429 Too Many Requests Errors from GraphQL Endpoin"
description: "429 Too Many Requests Errors from GraphQL Endpoin"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/05-429-too-many-requests-errors-from-graphql-endpoin
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs0f0ebf1e74d5490e
---

# 429 Too Many Requests Errors from GraphQL Endpoin

GraphQL requests return HTTP 429 Too Many Requests errors, particularly during release events or periods of high traffic. The errors occur in bursts and affect production API performance.

**Root Cause**

Contentstack applies rate limits at the organization or API key level - not per IP address or per content type. Rate limits are triggered when the total number of requests to a given API endpoint exceeds the allowed threshold. The GraphQL API’s platform default for origin (uncached) requests is 80 requests per second per organization; CDN-cached requests are not subject to this limit. The 200 RPS figure below reflects this customer’s specific contracted threshold, not the platform default - reconcile with the 80 RPS default before publishing if the intent is to describe out-of-the-box behavior. Bulk publish events, release deployments, or simultaneous multi-client queries commonly cause request spikes that exceed the applicable limit.

**Resolution**

1.  Review the application’s request patterns and identify spikes above the applicable rate limit (80 RPS by default, or a higher contracted threshold such as 200 RPS if one has been negotiated) during release or publish events.
2.  Implement request throttling or exponential backoff in the client application to smooth out traffic spikes.
3.  Stagger bulk publish or release operations to distribute requests over a longer time window.
4.  Implement a caching layer to reduce repeated identical GraphQL requests hitting the origin.
5.  If the rate limit is consistently insufficient for production workloads, contact Contentstack Support to discuss limit adjustments.

After implementing throttling and staggered operations, monitor the API logs during the next release event. If 429 errors no longer appear at the same frequency, the rate of requests has been successfully reduced.
