---
title: "[Contentstack Launch] - Platform Limits on Launch"
description: Platform limits for request/response sizes, cache revalidation, and how limits are applied in Contentstack Launch.
url: https://www.contentstack.com/docs/launch/platform-limits-on-launch
product: Contentstack Launch
doc_type: platform-limits
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Platform Limits on Launch

This page describes the key platform limits in Contentstack Launch that affect deployments and delivery, including HTTP request/response size limits and cache revalidation quotas. It is intended for developers and DevOps teams planning, deploying, or operating sites on Launch and should be used when designing for reliability, performance, and scale.

## Platform Limits on Launch

Understanding platform limits is key to building reliable and scalable digital experiences. This page outlines important constraints within [Contentstack Launch](https://www.contentstack.com/login/) that help ensure optimal performance during deployment and delivery.

## Request and Response Size Limits to Deploy on Launch

The following limits apply to HTTP requests and responses for websites deployed on Launch:

| Category | Component | Maximum Size |
|---|---|---|
| **Request** | Headers | 10 KB |
| **Request** | Body | 128 KB |
| **Response** | Headers | 32 KB |
| **Response** | Body | 5 MB |

## Cache Revalidation Limits on Launch

Cache revalidation controls how frequently cached content refreshes, ensuring users receive up-to-date data without sacrificing performance. Launch applies daily cache revalidation limits to maintain platform stability and ensure fair usage across organizations.

### Cache Revalidation Limits by Plan

| **Plan** | **Daily Cache Revalidation Limit** |
|---|---|
| **Non-Enterprise** | 500 |
| **Enterprise** | 2000 |

**Note:** Enterprise customers can request higher cache revalidation limits based on workload requirements and usage patterns.

## How Limits Are Applied

- Limits apply at the **organization level** and reset every **24 hours**.
- Once the daily limit is reached, additional revalidation requests are rejected until the quota resets.
- Cache revalidation requests are counted regardless of how they are triggered, including through **Automate** or the **REST API**.

## Common questions

### Do these limits apply per project or per organization?
Limits apply at the **organization level** and reset every **24 hours**.

### What happens when the daily cache revalidation limit is reached?
Once the daily limit is reached, additional revalidation requests are rejected until the quota resets.

### Are cache revalidation requests counted if triggered via Automate or the REST API?
Cache revalidation requests are counted regardless of how they are triggered, including through **Automate** or the **REST API**.

### Can Enterprise plans increase cache revalidation limits?
**Note:** Enterprise customers can request higher cache revalidation limits based on workload requirements and usage patterns.