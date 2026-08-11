---
title: "Blank Content Blocks and Login Failures Caused by Stale Session Token Caching"
description: "Blank Content Blocks and Login Failures Caused by Stale Session Token Caching"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/07-browser-client-specific-login-issuees/03-blank-content-blocks-and-login-failures-caused-by-stale-session-token-caching
doc_type: faq
_cms_section_uid: cs4c19aa47e31b91e0
_cms_faq_uid: cse4d8a9c9b35a940f
---

# Blank Content Blocks and Login Failures Caused by Stale Session Token Caching

Multiple editorial users may experience login failures and blank content blocks within the CMS at the same time.

**Root Cause**

The behavior is consistent with a session or authentication token caching issue on the client side, where the browser fails to automatically refresh the cached session, resulting in login failures and content blocks that do not render.

**Resolution**

1.  Clear the browser cache and cookies.
2.  Log back in to Contentstack.

After clearing the cache and logging back in, confirm content blocks render correctly and login no longer fails. If the issue recurs at scale, capture a HAR file (from the browser's Network tab) before clearing the cache to help identify why the session failed to refresh automatically.
