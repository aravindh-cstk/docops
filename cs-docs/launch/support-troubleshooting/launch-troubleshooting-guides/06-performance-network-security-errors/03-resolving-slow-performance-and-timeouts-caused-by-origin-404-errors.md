---
title: "Resolving Slow Performance and Timeouts Caused by Origin 404 Errors"
description: "Resolving Slow Performance and Timeouts Caused by Origin 404 Errors"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/03-resolving-slow-performance-and-timeouts-caused-by-origin-404-errors
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: csa08c569650add9cc
---

# Resolving Slow Performance and Timeouts Caused by Origin 404 Errors

Accessing website redirects and production instances in Launch may experience significant delays and timeouts when a high volume of 404 errors occurs at the origin. This prevents accessing live site content and completing redirects within a functional timeframe.

**Root Cause**

A high volume of 404 errors from the application origin caused requests to bypass the CDN cache, subsequently overloading the server and leading to performance timeouts.

**Resolution**

1.  Investigate the application root cause, focusing on potential data retrieval issues from the CMS, database, or other sources.
2.  Add logging to your application to pinpoint the specific source of the 404 errors.
3.  Resolve the underlying application errors to stop the generation of 404 responses.
4.  Implement caching to reduce server load once the errors are resolved.
5.  Refer to the provided analytics report for a detailed list of URLs returning 404 errors.

After completing the resolution steps, navigate through the affected URLs and monitor server logs. If the site performs without timeouts and 404 errors are no longer bypassing the cache, the issue is resolved.
