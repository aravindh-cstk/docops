---
title: "All Contentstack UI Pages Fail to Load - Browser-Specific Issue"
description: "All Contentstack UI Pages Fail to Load - Browser-Specific Issue"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/36-all-contentstack-ui-pages-fail-to-load-browser-specific-issue
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs58cdaf2a16f7b3b9
---

# All Contentstack UI Pages Fail to Load - Browser-Specific Issue

All Contentstack UI pages - entries, assets, and content models - fail to load for a specific user. The issue persists in incognito mode and after clearing the cache, but only in one browser.

**Root Cause**

A browser incompatibility, corrupted browser installation, or conflicting browser extension is preventing the Contentstack UI from rendering. This is not a platform issue when it affects only one browser.

**Resolution**

1.  Test the same URL in a different browser (for example, switch from Chrome to Firefox or Edge).
2.  If the alternative browser works, the issue is isolated to the original browser.
3.  Update or reinstall the problematic browser.
4.  Disable browser extensions one by one to identify if an extension is causing the conflict.

After switching browsers or reinstalling, confirm that all UI pages load correctly.
