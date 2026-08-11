---
title: "Blocking Launch-Hosted Sites From Search Engine Indexing"
description: "Blocking Launch-Hosted Sites From Search Engine Indexing"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/11-caching-cdn-content-delivery/04-blocking-launch-hosted-sites-from-search-engine-indexing
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: csc166fc024bc1154b
---

# Blocking Launch-Hosted Sites From Search Engine Indexing

Internal or staging Launch-hosted sites are appearing in Google search results. This can expose pre-production content, duplicate indexed pages, or reveal internal tools to the public.

**Root Cause**

If a Launch-hosted site is publicly accessible without authentication, search engine crawlers can discover and index it—especially if the domain is referenced in sitemaps, links, or social shares. There is no platform-level setting in Launch to block crawlers automatically for non-production environments.

**Resolution**

1.  Implement a Launch Edge Function that inspects the User-Agent header of incoming requests and returns a 403 response (or serves a robots.txt with Disallow: /) for known search engine crawler agents.
2.  Add a robots.txt file to the public directory of the site with Disallow: / to instruct crawlers not to index the site.
3.  Set the X-Robots-Tag: noindex, nofollow response header via the Edge Function for all responses to prevent indexing even if crawlers access the site.
4.  For staging environments, consider restricting access using HTTP Basic Authentication or IP allowlisting via the CDN to prevent unauthorized access entirely.

The issue is resolved when the Launch-hosted site no longer appears in new search engine index results and existing indexed pages are removed following a Search Console removal request or natural cache expiry.
