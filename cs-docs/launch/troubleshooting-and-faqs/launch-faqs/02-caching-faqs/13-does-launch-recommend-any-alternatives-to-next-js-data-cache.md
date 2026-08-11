---
title: "Does Launch recommend any alternatives to Next.js Data Cache"
description: "Does Launch recommend any alternatives to Next.js Data Cache"
url: /launch/troubleshooting-and-faqs/launch-faqs/02-caching-faqs/13-does-launch-recommend-any-alternatives-to-next-js-data-cache
doc_type: faq
_cms_section_uid: cs3af4c9c7caaf8607
_cms_faq_uid: cs272246302812ad83
---

# Does Launch recommend any alternatives to Next.js Data Cache

-   **Use SSR with Cache-Control headers**: Cache API responses at the CDN level using Cache-Control headers to increase the cache-hit ratio and enable [on-demand cache revalidation with Automate](/docs/agent-os/launch-trigger). Cache-Control: public, s-maxage=86400, stale-while-revalidate=60
-   **Cache API requests in a framework-agnostic way**: Check out the [GitHub example](https://github.com/contentstack-launch-examples/management-api-cache-wrapper) that caches Contentstack Management API responses to reduce rate-limiting issues.
