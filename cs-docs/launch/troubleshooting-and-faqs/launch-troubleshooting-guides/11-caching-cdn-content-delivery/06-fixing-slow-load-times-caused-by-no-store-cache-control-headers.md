---
title: "Fixing Slow Load Times Caused by no-store Cache-Control Headers"
description: "Fixing Slow Load Times Caused by no-store Cache-Control Headers"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/11-caching-cdn-content-delivery/06-fixing-slow-load-times-caused-by-no-store-cache-control-headers
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: csf089aefb3e0d9481
---

# Fixing Slow Load Times Caused by no-store Cache-Control Headers

A Launch-hosted site experiences slow load times (30–60 seconds) and intermittent 5xx errors, primarily in certain browsers. The frequency of 5xx errors is too low to explain the performance issue on its own.

**Root Cause**

The application was sending cache-control headers such as no-store, max-age=0, and must-revalidate on responses. These directives prevent any caching and force every request to be processed by the origin server, significantly increasing load times under normal traffic.

**Resolution**

1.  Audit the cache-control headers currently being sent by the application across key page types (homepage, listing pages, detail pages).
2.  Identify which routes are unnecessarily using no-store, max-age=0, or must-revalidate when content does not change on every request.
3.  Implement an intermediate caching strategy with a short time-to-live (for example, 5–10 minutes) for pages where content updates are infrequent, rather than disabling caching entirely.
4.  Ensure a cache purge or revalidation workflow is triggered whenever content is updated from the CMS, so cached pages are refreshed promptly after publishing.
5.  Validate that the updated caching strategy does not interfere with other ongoing work (such as redirect logic or migration activities) before rolling it out broadly.
6.  Apply the caching strategy across the full site and monitor load times to confirm improvement.

The issue is resolved when page load times return to expected levels and the origin server no longer receives a disproportionate volume of uncached requests.
