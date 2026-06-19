---
title: "[Personalize] - Personalize Limitations"
description: Limits and rate limits for Contentstack Personalize projects, experiences, audiences, rules, attributes, events, variants, and APIs.
url: https://www.contentstack.com/docs/personalize/limitations
product: Contentstack Personalize
doc_type: reference
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Personalize] - Personalize Limitations

This page lists the default limits for Contentstack Personalize (projects, experiences, audiences, rules, attributes, events, and variants) and the applicable API rate limits. It is intended for developers and administrators who need to understand scaling constraints and when to request limit increases.

## Personalize Limitations

- The default number of Personalize Projects allowed per organization is **3**. By Contentstack permissions, they can be extended till **100** per organization.
- The default number of Experiences allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
- The default number of Audiences allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
- The default number of Rules allowed per audience is **50**. By Contentstack permissions, they can be extended till **100** per audience.
- The default number of Custom Attributes allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
- The default number of Events allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
- The default number of Variants allowed per experience is **20**. By Contentstack permissions, they can be extended till **50** per experience.
- There are certain API rate limits:

| API Request | Rate Limit |
|---|---|
| Personalize Management Read (GET) and Write (POST/PUT/DELETE) requests | 10 requests per second per organization |
| Personalize Edge Read (GET) and Write (POST/PUT/PATCH/DELETE) requests | No rate limit. The Edge API is intended to match your scale. |

**Note: **To increase any of the default limits, please contact our [support team](mailto:support@contentstack.com).

## Common questions

### How do I increase the default limits for Personalize?
**Note: **To increase any of the default limits, please contact our [support team](mailto:support@contentstack.com).

### What is the default number of Personalize Projects allowed per organization?
The default number of Personalize Projects allowed per organization is **3**. By Contentstack permissions, they can be extended till **100** per organization.

### Are there rate limits for the Personalize Edge API?
Personalize Edge Read (GET) and Write (POST/PUT/PATCH/DELETE) requests have: No rate limit. The Edge API is intended to match your scale.