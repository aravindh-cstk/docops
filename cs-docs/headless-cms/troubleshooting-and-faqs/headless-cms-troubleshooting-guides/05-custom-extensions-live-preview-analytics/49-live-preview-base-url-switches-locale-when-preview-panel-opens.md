---
title: "Live Preview Base URL Switches Locale When Preview Panel Opens"
description: "Live Preview Base URL Switches Locale When Preview Panel Opens"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/49-live-preview-base-url-switches-locale-when-preview-panel-opens
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs67f758d489fadd99
---

# Live Preview Base URL Switches Locale When Preview Panel Opens

The en-us base URL unexpectedly switches to another locale as soon as the Live Preview panel opens. Consistent even in incognito mode.

**Root Cause**

The lpUrlLocaleWise configuration controls which URL to use per locale. If this configuration maps the current locale to a different environment URL, the base URL changes when the SDK applies locale-based URL routing.

**Resolution**

1.  Check localStorage for the lpUrlLocaleWise value in browser developer tools to inspect the current locale-to-URL mapping.
2.  Review the ContentstackLivePreview.init() configuration for the livePreviewEntry URL mapping - confirm the en-us locale is not incorrectly mapped.
3.  Ensure the staging environment has separately configured URL mappings rather than sharing with dev.

After correcting the locale-to-URL mapping, open the preview panel and confirm the base URL remains correct for the content locale.
