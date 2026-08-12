---
title: "GraphQL Latency Spikes - Response Times Rising to Multiple Seconds"
description: "GraphQL Latency Spikes - Response Times Rising to Multiple Seconds"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/011-graphql-latency-spikes-response-times-rising-to-multiple-seconds
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csfd289c99114cf033
---

# GraphQL Latency Spikes - Response Times Rising to Multiple Seconds

GraphQL API response times increase from milliseconds to several seconds with no changes to the query, stack configuration, or network setup. The latency spike is consistent and observed via monitoring probes across multiple requests.

**Root Cause**

Sudden, unexplained latency spikes in the GraphQL endpoint (graphql.contentstack.com) without any customer-side change indicate a platform-level issue, such as resource contention on shared infrastructure, CDN routing instability, or degraded performance in the GraphQL processing layer. These incidents are identified and resolved by Contentstack’s engineering and infrastructure teams.

**Resolution**

1.  Check the Contentstack Status Page (status.contentstack.com) for any active performance incidents.
2.  If no incident is listed but latency remains elevated, contact Contentstack Support and provide: the affected endpoint, the regions experiencing latency, the approximate start time of the increase, and monitoring probe data or response time samples.
3.  No configuration changes are required on the customer side for platform-level latency incidents.
4.  As a temporary measure during a latency spike, implement timeout handling and retry logic in the application so that individual slow responses do not cause cascading failures.

After Contentstack resolves the underlying infrastructure issue, response times will return to normal. Confirm by testing a standard query and verifying the response time is within the expected range.
