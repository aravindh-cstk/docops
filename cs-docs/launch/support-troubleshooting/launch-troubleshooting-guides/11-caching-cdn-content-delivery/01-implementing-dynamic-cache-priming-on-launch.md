---
title: "Implementing Dynamic Cache Priming on Launch"
description: "Implementing Dynamic Cache Priming on Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/11-caching-cdn-content-delivery/01-implementing-dynamic-cache-priming-on-launch
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: cs5439b579a888a74c
---

# Implementing Dynamic Cache Priming on Launch

After a deployment, the CDN cache is empty and all requests are served from the origin until the cache is populated organically. For large sites, this creates a period of elevated origin load and slower response times for end users immediately after a release.

**Root Cause**

Launch does not natively provide an automated cache priming mechanism. After each deployment, the CDN cache starts fresh and is populated only as users request pages. Sites with many pages or high traffic sensitivity need a pre-warming step to avoid performance degradation post-deployment.

**Resolution**

1.  Create a pre-build script that fetches all page URL paths from the Contentstack Delivery API by querying the relevant content types.
2.  Write the fetched URLs into the launch.json file or a custom cache manifest as part of the prebuild step.
3.  Configure the prebuild step to run automatically before the main build command by adding it to the package.json scripts as: "prebuild": "node scripts/prime-cache.js".
4.  After deployment, the priming script can send HTTP GET requests to each URL to warm the CDN cache. Throttle the requests to avoid overloading the origin.
5.  Use Contentstack Automate to trigger a cache priming webhook on each publish event so that new or updated entries are automatically included in the next cache warm cycle.

The issue is resolved when post-deployment response times remain consistent and origin load does not spike after a new release due to a cold cache.
