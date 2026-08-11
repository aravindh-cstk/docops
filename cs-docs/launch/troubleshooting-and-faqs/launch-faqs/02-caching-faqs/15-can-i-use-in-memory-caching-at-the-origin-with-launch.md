---
title: "Can I use in-memory caching at the origin with Launch?"
description: "Can I use in-memory caching at the origin with Launch?"
url: /launch/troubleshooting-and-faqs/launch-faqs/02-caching-faqs/15-can-i-use-in-memory-caching-at-the-origin-with-launch
doc_type: faq
_cms_section_uid: cs3af4c9c7caaf8607
_cms_faq_uid: cse3179a3702b51e00
---

# Can I use in-memory caching at the origin with Launch?

No. Each request is handled by a stateless function instance that may not retain memory between invocations. This implies:

-   Any data stored in memory—such as variables, objects, or in-process caches—is not guaranteed to persist beyond a single request.
-   You should opt out of in-memory caching supported by some libraries, such as the [Contentstack SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference#quickstart-in-5-mins-cache-policies), which can optionally maintain a local cache to help with rate limiting and performance.
