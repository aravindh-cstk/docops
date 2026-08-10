---
title: "High Percentage of API Calls Going to Origin Instead of CDN Cache"
description: "High Percentage of API Calls Going to Origin Instead of CDN Cache"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/080-high-percentage-of-api-calls-going-to-origin-instead-of-cdn-cache
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs8be1c49c2c3ebe48
---

# High Percentage of API Calls Going to Origin Instead of CDN Cache

Approximately 30% or more of API calls are reaching the Contentstack origin server instead of being served from the CDN cache. This increases origin load and response latency.

**Root Cause**

A high origin hit rate is typically caused by the development or staging environment being configured to bypass CDN caching, or by cache-busting query parameters being appended to requests. Development environments often fetch content directly from origin by design to ensure fresh content during active development, which naturally produces a higher origin traffic proportion.

**Resolution**

1.  Review the environment configuration for all applications making CDA requests. Development environments may intentionally bypass the CDN and do not need optimization.
2.  For production environments, ensure requests use consistent, cacheable URL structures without dynamic query strings that create unique cache keys per request.
3.  Review any middleware, proxy configurations, or front-end caching settings that may be forwarding requests to origin unnecessarily.
4.  Monitor origin vs CDN hit ratios in Product Analytics after configuration changes.

After reviewing and correcting the configuration, monitor the origin hit rate. A well-configured production environment should have a CDN hit rate well above 70%.
