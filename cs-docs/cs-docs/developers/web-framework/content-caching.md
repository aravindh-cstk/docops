---
title: "[Web Framework] - Content Caching"
description: Content caching in the contentstack-express web framework, including enabling caching and related resources.
url: https://www.contentstack.com/docs/developers/web-framework/content-caching
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Web Framework] - Content Caching

This page explains how content caching works in the contentstack-express web framework and how to enable it in configuration. It is intended for developers maintaining existing contentstack-express implementations and should be used when you want to improve performance by serving cached rendered pages.

## Content Caching

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

**Caching** refers to the process of storing data in a cache (temporary storage area). When someone requests the data, it is fetched from the cache.

**Additional Resources**: This article gives you an overview of caching specific to the contentstack-express framework. To learn about caching in general, these following guides might help:  
[Cache Management in Content Delivery Network (CDN)](../cdn-and-caching/contentstack-cdn-cache-management.md)  
[Clear Cache and Cookies in Different Browsers](../how-to-guides/clear-caches-and-cookies-in-different-browsers.md)  
[Cache Purging Scenarios](../cdn-and-caching/cache-purging-scenarios.md)

**contentstack-express** stores the entire content of the rendered page. The visitors are then served the cached version of the content, instead of rendering pages every time. This decreases the number of read requests sent to the database, as well as improves the overall performance of the website.

To enable content caching, you need to set cache to **“true” **in the config.

## Common questions

**How do I enable content caching in contentstack-express?**  
To enable content caching, you need to set cache to **“true” **in the config.

**What does contentstack-express cache?**  
**contentstack-express** stores the entire content of the rendered page.

**Why would I use caching in contentstack-express?**  
This decreases the number of read requests sent to the database, as well as improves the overall performance of the website.

**Is contentstack-express still supported?**  
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.