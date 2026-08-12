---
title: "Live Preview ‘Open in New Tab’ Auto-Closes and Reopens in Side Panel"
description: "Live Preview ‘Open in New Tab’ Auto-Closes and Reopens in Side Panel"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/51-live-preview-open-in-new-tab-auto-closes-and-reopens-in-side-panel
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csa18278b40bea6919
---

# Live Preview ‘Open in New Tab’ Auto-Closes and Reopens in Side Panel

When clicking ‘Open in new tab’ for Live Preview, the new tab automatically closes after a few seconds and the preview reverts to the side panel. Reproducible across browsers and incognito sessions.

**Root Cause**

This is a known platform bug. A lifecycle detection issue causes the newly opened tab to be detected as disconnected from the editor session, triggering an automatic close and fallback to the side panel.

**Resolution**

1.  Contact Contentstack Support and report the issue with browser version, OS, and region.
2.  As a workaround: copy the Live Preview URL from the tab before it closes, paste it into a new browser tab, and refresh manually.
3.  If the Live Preview outside iframe feature is available, enable it - this uses a different tab-opening mechanism without the auto-close.

After the platform fix is deployed, confirm that opening Live Preview in a new tab maintains the editor connection for the full session.
