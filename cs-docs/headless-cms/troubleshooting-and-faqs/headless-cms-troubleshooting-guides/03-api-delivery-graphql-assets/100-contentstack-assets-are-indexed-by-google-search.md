---
title: "Contentstack Assets Are Indexed by Google Search"
description: "Contentstack Assets Are Indexed by Google Search"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/100-contentstack-assets-are-indexed-by-google-search
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs7c67acfc1c914325
---

# Contentstack Assets Are Indexed by Google Search

PDF files, images, and other assets uploaded to Contentstack are appearing in Google search results. The assets are publicly accessible via their direct URLs, which allows search engines to discover and index them.

**Root Cause**

Contentstack asset URLs are publicly accessible by default once an asset is uploaded, regardless of its publish status. If asset URLs are embedded in publicly accessible pages, shared externally, or discovered via sitemaps, search engine crawlers can index them. Contentstack does not apply noindex headers or robots restrictions to assets by default.

**Resolution**

To prevent asset indexing going forward:

1.  Implement secure asset URLs by enabling token-based access for assets in the stack settings. This makes direct URL access require authentication, preventing public crawler access.
2.  Serve assets through a custom domain with appropriate robots.txt rules and X-Robots-Tag: noindex headers to instruct crawlers not to index the asset URLs.
3.  Remove all publicly accessible links to assets that should not be indexed.
4.  To de-index already indexed assets, use the Google Search Console URL Removal tool to request de-indexing of specific asset URLs.

After implementing token-based asset access, confirm that unauthenticated requests to asset URLs return 401 errors, preventing public crawler access.
