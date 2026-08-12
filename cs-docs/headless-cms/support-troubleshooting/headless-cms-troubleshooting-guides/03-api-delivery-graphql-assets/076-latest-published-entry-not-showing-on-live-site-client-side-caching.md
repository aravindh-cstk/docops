---
title: "Latest Published Entry Not Showing on Live Site - Client-Side Caching"
description: "Latest Published Entry Not Showing on Live Site - Client-Side Caching"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/076-latest-published-entry-not-showing-on-live-site-client-side-caching
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs7c70b342f8902ac3
---

# Latest Published Entry Not Showing on Live Site - Client-Side Caching

The live site displays an older version of a published entry instead of the latest published version. Direct API calls (via cURL or Postman) return the correct latest version, confirming the CDA is serving the right content.

**Root Cause**

The discrepancy is caused by caching on the client side or at the front-end hosting layer, not by Contentstack. When the CDA API returns the correct latest version but the rendered site shows stale content, an intermediate cache (browser cache, CDN on the hosting platform, or front-end framework cache) is serving the older version.

**Resolution**

1.  Verify the CDA response directly using cURL or Postman. If the correct version is returned, the issue is not with Contentstack.
2.  Clear the front-end hosting platform’s cache (for example, Vercel, Netlify, or a custom CDN).
3.  Clear browser cache and test in an incognito window to rule out browser-level caching.
4.  Review the front-end application’s caching strategy and ensure published content invalidates the relevant cache on deploy or on a configurable TTL.

After clearing the client-side cache, reload the live site and confirm the latest published entry version is now displayed.
