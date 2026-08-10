---
title: "‘Preview Service Not Enabled’ Error Despite Live Preview Being Configured"
description: "‘Preview Service Not Enabled’ Error Despite Live Preview Being Configured"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/47-preview-service-not-enabled-error-despite-live-preview-being-configured
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csd4bff582e37c3a37
---

# ‘Preview Service Not Enabled’ Error Despite Live Preview Being Configured

After configuring Live Preview, the preview pane shows ‘Preview Service Not Enabled’. The stack has Live Preview enabled in settings.

**Root Cause**

This error appears when the application opens with the live\_preview hash in the URL, but is not sending requests that include this hash to the preview host. The SDK is not correctly intercepting and modifying API requests to include the live\_preview parameter.

**Resolution**

1.  Verify ContentstackLivePreview.init() includes: host, app\_host, enable: true, and preview\_token.
2.  Ensure data-fetching calls use the Contentstack SDK (not raw fetch/axios) so Live Preview SDK can intercept them to include the live\_preview hash.
3.  In Next.js, ensure the SDK is initialized in a Client Component (with ‘use client’) so it runs in the browser context.
4.  Add debug: true to init() to output hash interception status to the browser console.

After verifying SDK initialization and SDK-based data fetching, reload the preview and confirm the ‘Preview Service Not Enabled’ message is replaced by the correct entry preview.
