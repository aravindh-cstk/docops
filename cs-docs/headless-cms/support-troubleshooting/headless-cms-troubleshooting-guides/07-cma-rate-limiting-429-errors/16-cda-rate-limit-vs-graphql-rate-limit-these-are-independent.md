---
title: "CDA Rate Limit vs GraphQL Rate Limit - These Are Independent"
description: "CDA Rate Limit vs GraphQL Rate Limit - These Are Independent"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/16-cda-rate-limit-vs-graphql-rate-limit-these-are-independent
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csfd4092e853e5c218
---

# CDA Rate Limit vs GraphQL Rate Limit - These Are Independent

After receiving a CDA rate limit increase to 200 RPS, requests continue to be capped at 80 RPS. The x-ratelimit-limit header continues to show 80 even though the CDA limit was raised.

**Root Cause**

The CDA REST API and GraphQL API have separate, independent rate limits. Increasing the CDA REST limit does not affect the GraphQL limit. The GraphQL API has a hard default limit of 80 requests per second, which is enforced independently of the CDA REST limit. If traffic is routed through GraphQL, the 80 RPS cap applies regardless of the CDA REST limit in effect.

**Resolution**

1.  Identify whether the rate-limited requests are being sent to the CDA REST endpoint (cdn.contentstack.io) or the GraphQL endpoint (graphql.contentstack.com).
2.  If requests are hitting the GraphQL endpoint, a separate rate limit increase request is required for the GraphQL API.
3.  Contact Contentstack Support to request a GraphQL rate limit increase, noting that this may require a KCR (Key Configuration Request) and has its own approval process.
4.  As a workaround while awaiting a GraphQL limit increase, use the CDA REST API for high-volume requests where GraphQL is not strictly required.

After identifying the correct endpoint and applying the appropriate limit increase, monitor the x-ratelimit-limit header in responses from each endpoint to confirm the limits are updated.
