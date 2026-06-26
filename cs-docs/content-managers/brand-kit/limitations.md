---
title: "[Brand Kit] - Limitations"
description: Limitations and rate limits for Brand Kit, including maximum counts and API request rate limits.
url: https://www.contentstack.com/docs/brand-kit/limitations
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Brand Kit] - Limitations

This page describes the usage limits for Brand Kit in Contentstack, including maximum allowed Brand Kits and Voice Profiles, as well as API rate limits. Content managers and developers should use this page when planning Brand Kit usage at scale or when troubleshooting limit-related issues.

## Brand Kit Limitations

- The maximum number of Brand Kits allowed per organization is **50**. To increase this limit, please contact our [Support](mailto:support@contentstack.com) team. By Contentstack permissions, they can be extended till **250** per organization.
- You can create a maximum of **100 Voice Profiles** within each Brand Kit. To increase this limit, please contact our [Support](mailto:support@contentstack.com) team.
- There are certain API rate limits:

| **API Request** | **Rate Limit** |
|---|---|
| Brand Kit Read (GET) and Write (POST/PUT/DELETE) requests | 10 requests per second per organization |
| GenAI Write (POST) requests | 10 requests per second per organization |
| Knowledge Vault Write (POST) requests | 10 requests per second per organization |

## Common questions

**Q: How can I increase the maximum number of Brand Kits per organization?**  
A: To increase this limit, please contact our [Support](mailto:support@contentstack.com) team.

**Q: What is the maximum number of Voice Profiles allowed within each Brand Kit?**  
A: You can create a maximum of **100 Voice Profiles** within each Brand Kit.

**Q: What are the API rate limits for Brand Kit requests?**  
A: Brand Kit Read (GET) and Write (POST/PUT/DELETE) requests are limited to 10 requests per second per organization.

**Q: Are GenAI Write (POST) and Knowledge Vault Write (POST) requests rate-limited?**  
A: Yes, both are limited to 10 requests per second per organization.