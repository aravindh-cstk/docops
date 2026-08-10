---
title: "Resolving client-side exceptions in Live Preview"
description: "Resolving client-side exceptions in Live Preview"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/03-resolving-client-side-exceptions-in-live-preview
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs798c8731d93a4731
---

# Resolving client-side exceptions in Live Preview

Enabling Live Preview in the CMS may result in a client-side exception error when new global fields are added. This prevents the real-time rendering of content changes in the preview pane.

**Root Cause**

A TypeError occurs when the front-end application code attempts to render new global field data that is not yet supported by the existing implementation.

**Resolution**

1.  Inspect the browser console to identify the specific field causing the TypeError.
2.  Verify that the Live Preview SDK is correctly integrated and configured with valid API keys and delivery tokens.
3.  Ensure the Preview URL in stack settings is correct.
4.  Update the front-end code to handle the data structure of the newly added global field.
5.  Clear browser cache and reload the preview window.
6.  Refer to the official Live Preview documentation for complete front-end integration guidance.

After updating the front-end code to handle the new field structure, open the Live Preview window. If the preview renders without an application error, the issue is resolved.
