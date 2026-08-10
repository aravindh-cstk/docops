---
title: "Visual Builder Scroll Locked on Initial Load - Cookie Consent Popover"
description: "Visual Builder Scroll Locked on Initial Load - Cookie Consent Popover"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/41-visual-builder-scroll-locked-on-initial-load-cookie-consent-popover
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs97e0ae53e1c8c907
---

# Visual Builder Scroll Locked on Initial Load - Cookie Consent Popover

When opening Visual Builder, the page is stuck on initial load and users are unable to scroll down. The scroll appears completely locked, preventing interaction with the page content.

**Root Cause**

A cookie authorization popover or consent banner on the preview site is causing the scroll to remain locked even after it is dismissed. The popover intercepts scroll events at the page level and Visual Builder’s iframe cannot unlock the scroll after the popover state changes.

**Resolution**

1.  Dismiss the cookie consent banner immediately when Visual Builder first loads. Once dismissed, scroll should be restored.
2.  If the scroll remains locked after dismissal, refresh the Visual Builder session.
3.  To prevent this recurring: configure the preview site to suppress cookie consent popovers when loaded in the context of Visual Builder (for example, detect the Contentstack live\_preview query parameter and skip the consent UI).
4.  Alternatively, pre-accept the cookie consent in the browser before opening Visual Builder, so the popover does not appear.

After dismissing the cookie popover and refreshing if needed, confirm Visual Builder loads with full scroll functionality and all content sections are accessible.
