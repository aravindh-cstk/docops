---
title: "Platform Limits on Launch"
description: "Understand Contentstack Launch platform limits to build scalable digital experiences and ensure optimal performance during deployment and delivery."
url: /launch/platform-limits-on-launch
uid: blte9f262405f89e828
---

# Platform Limits on Launch

## Platform Limits on Launch

Understanding platform limits is key to building reliable and scalable digital experiences. This page outlines important constraints within [Contentstack Launch](https://www.contentstack.com/login/) that help ensure optimal performance during deployment and delivery.

## Request and Response Size Limits to Deploy on Launch

The following limits apply to HTTP requests and responses for websites deployed on Launch:

| **Category** | **Component** | **Maximum Size** |
| --- | --- | --- |
| **Request** | Headers | ~10 KB\* |
|   | Body | 128 KB |
| **Response** | Headers | 32 KB |
|   | Body | 5 MB |

**Note:** The maximum allowed size for request headers is approximately **10 KB**, but the exact limit may be slightly lower or higher depending on the specific cloud provider you have opted for.

## Cache Revalidation Limits on Launch

Cache revalidation controls how frequently cached content refreshes, ensuring users receive up-to-date data without sacrificing performance. Launch applies daily cache revalidation limits to maintain platform stability and ensure fair usage across organizations.

### Cache Revalidation Limits by Plan

| **Plan** | **Daily Cache Revalidation Limit** |
| --- | --- |
| **Non-Enterprise** | 500 |
| **Enterprise** | 2000 |

**Note:** Enterprise customers can request higher cache revalidation limits based on workload requirements and usage patterns.

### How Limits Are Applied

-   Limits apply at the **organization level** and reset every **24 hours** at **00:00:00 UTC**.
-   Once the daily limit is reached, additional revalidation requests are rejected until the quota resets.
-   Cache revalidation requests are counted regardless of how they are triggered, including through **Automate** or the **REST API**.
-   **Notifications trigger** when usage reaches **80%** and **100%** of the daily limit.
-   Usage can also be tracked via **Analytics** (Go to **Analytics → Launch**) for better visibility.

## Origin Delivery Rate Limits on Launch

Launch serves your site through a global CDN that caches responses at the edge. Most user requests are served directly from the CDN cache and do not count toward this limit. When a request cannot be served from the cache, for example, a cache miss, an expired cached response, or a request for non-cacheable content, it is forwarded to the origin for processing.

Origin delivery rate limits cap the number of these origin-bound requests per second (RPS), helping protect platform stability and ensure consistent performance across all deployments.

### Origin Delivery Rate Limits by Plan

| **Plan** | **Origin Delivery Rate Limit** |
| --- | --- |
| **Non-Enterprise** | 200 RPS |
| **Enterprise** | 1200 RPS |

**Note:** Enterprise customers can request higher origin delivery rate limits based on workload requirements and traffic patterns. Contact your Contentstack representative to discuss your needs.
