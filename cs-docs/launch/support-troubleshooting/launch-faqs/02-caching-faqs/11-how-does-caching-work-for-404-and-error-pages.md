---
title: "How does caching work for 404 and error pages?"
description: "How does caching work for 404 and error pages?"
url: /launch/support-troubleshooting/launch-faqs/02-caching-faqs/11-how-does-caching-work-for-404-and-error-pages
doc_type: faq
_cms_section_uid: cs3af4c9c7caaf8607
_cms_faq_uid: cs72c3540561632eb8
---

# How does caching work for 404 and error pages?

By default, **404** and **error pages** are **not cached** by Launch’s CDN, even if Cache-Control headers are present. This is a platform-level behavior to ensure error pages are always revalidated. Identify known bad routes and handle them gracefully at the edge using [Launch Edge Functions](/docs/launch/edge-functions/).
