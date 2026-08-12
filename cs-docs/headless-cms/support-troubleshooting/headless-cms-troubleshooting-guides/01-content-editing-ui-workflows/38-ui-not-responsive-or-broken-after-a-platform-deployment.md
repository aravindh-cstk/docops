---
title: "UI Not Responsive or Broken After a Platform Deployment"
description: "UI Not Responsive or Broken After a Platform Deployment"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/38-ui-not-responsive-or-broken-after-a-platform-deployment
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs383f8b62a6a305c3
---

# UI Not Responsive or Broken After a Platform Deployment

The Contentstack UI becomes unresponsive, shows visual glitches, or fails to load pages for some users immediately after a platform update or deployment. Other users may be unaffected.

**Root Cause**

A cached version of the previous JavaScript bundle is being served from the browser cache after a UI revamp or feature flag rollout. The old cached scripts conflict with the newly deployed code, causing rendering failures for users whose browsers cached the previous version.

**Resolution**

1.  Ask affected users to perform a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac) or clear browser cache and reload.
2.  Alternatively, open Contentstack in an incognito window, which bypasses the cache.
3.  If clearing cache does not resolve the issue and multiple users are affected, contact Contentstack Support. Engineering may need to revert the deployment.

After clearing cache or switching to incognito, confirm the UI loads and functions as expected.
