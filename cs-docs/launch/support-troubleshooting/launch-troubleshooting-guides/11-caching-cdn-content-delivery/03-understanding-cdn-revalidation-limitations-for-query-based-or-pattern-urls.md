---
title: "Understanding CDN Revalidation Limitations for Query-Based or Pattern URLs"
description: "Understanding CDN Revalidation Limitations for Query-Based or Pattern URLs"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/11-caching-cdn-content-delivery/03-understanding-cdn-revalidation-limitations-for-query-based-or-pattern-urls
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: cs4c731b0fba6932e9
---

# Understanding CDN Revalidation Limitations for Query-Based or Pattern URLs

A Next.js site on Launch uses Contentstack Automate to trigger CDN cache revalidation when content is published. However, the revalidation only invalidates prefix-based URL patterns and does not support query string parameters or wildcard patterns. This causes stale content to be served for URLs with query strings after a content update.

**Root Cause**

Contentstack Automate’s CDN revalidation feature uses a prefix-based URL matching approach. It does not currently support query-aware or pattern-specific URL revalidation. URLs that include query strings (such as ?category=news) are not matched by prefix-only rules, so cache entries for those URLs are not invalidated when the trigger fires.

**Resolution**

1.  Accept that the current prefix-based approach is the supported method for CDN revalidation via Automate. Design URL structures to use path segments rather than query strings where cache invalidation is critical.
2.  For URLs that must use query strings, implement application-level cache control by setting short Cache-Control max-age headers on query-parameterized responses to reduce the window in which stale content is served.
3.  Alternatively, use Next.js ISR (Incremental Static Regeneration) with a short revalidation interval for pages that use query-parameterized data, so the CDN automatically refreshes stale content within a defined time window.
4.  Monitor Contentstack release notes for updates to the Automate CDN revalidation feature, as pattern-based and query-aware invalidation may be added in future releases.

The issue is resolved when content updates are reflected within an acceptable timeframe for all URL patterns, either through prefix invalidation, short cache TTLs, or ISR revalidation.
