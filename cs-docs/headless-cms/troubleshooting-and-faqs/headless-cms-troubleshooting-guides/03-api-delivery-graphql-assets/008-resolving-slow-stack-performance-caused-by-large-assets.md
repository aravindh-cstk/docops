---
title: "Resolving slow stack performance caused by large assets"
description: "Resolving slow stack performance caused by large assets"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/008-resolving-slow-stack-performance-caused-by-large-assets
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs3e687bec3f325dd0
---

# Resolving slow stack performance caused by large assets

Managing entries in the stack may experience significant delays and slow response times when the stack contains very large assets. This prevents efficient content management and increases API response latency.

**Root Cause**

Extremely large asset sizes, ranging from 100MB to 1.5GB, are causing high response times during delivery operations.

**Resolution**

1.  Review CDA logs to identify specific assets causing high latency.
2.  Reduce the file size of assets currently stored in the stack.
3.  Implement caching strategies to decrease the load on the origin server.

After optimizing asset sizes and implementing caching, monitor the stack response times in the logs. If the response times return to normal operating levels, the performance bottleneck is cleared.
