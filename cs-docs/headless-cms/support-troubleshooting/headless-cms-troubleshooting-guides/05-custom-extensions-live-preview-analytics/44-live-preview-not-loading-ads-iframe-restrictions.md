---
title: "Live Preview Not Loading Ads - iframe Restrictions"
description: "Live Preview Not Loading Ads - iframe Restrictions"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/44-live-preview-not-loading-ads-iframe-restrictions
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs5e2009f2dbc461fa
---

# Live Preview Not Loading Ads - iframe Restrictions

Live Preview fails to render certain content (particularly ads or embedded third-party widgets) in the preview pane. The content loads correctly on the published site.

**Root Cause**

Google Ads and many third-party providers explicitly block rendering inside iframes. Since Live Preview loads in an embedded iframe, ad content is blocked by the provider’s X-Frame-Options or frame-ancestors CSP directives.

**Resolution**

1.  Enable the ‘Live Preview outside iframe’ feature in the stack settings. This opens Live Preview in a separate browser tab rather than an embedded iframe, bypassing iframe restrictions.
2.  Navigate to Settings > Live Preview and toggle the ‘Open in new tab’ or ‘Outside iframe’ option if available.
3.  Contact Contentstack Support to enable the LivePreview outside iframe feature if the toggle is not visible.

After enabling Live Preview outside iframe, confirm that ad content renders correctly in the preview and editorial workflows are unblocked.
