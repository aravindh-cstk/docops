---
title: "Live Preview SDK Initialization - Common Configuration Errors"
description: "Live Preview SDK Initialization - Common Configuration Errors"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/11-live-preview-sdk-initialization-common-configuration-errors
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs489aa0ead11e9394
---

# Live Preview SDK Initialization - Common Configuration Errors

Live Preview fails to initialize or does not update content when editing. Common errors include ‘stackSdk.live\_preview is an invalid key’, the preview pane not reflecting changes, or missing network requests to the preview endpoint.

**Root Cause**

The most common causes are: incorrect SDK initialization structure, the enable flag missing or set to false, required parameters (preview token, app host, host) absent, or the init() call placed in a server-rendered context where it cannot execute.

**Resolution**

1.  Ensure the SDK initialization is structured correctly. The live\_preview configuration must be nested correctly in the stack initialization - not as a top-level key.
2.  Include all required fields: enable: true, preview\_token, host, app\_host, and environment.
3.  For Next.js App Router: move ContentstackLivePreview.init() into a dedicated Client Component (add ‘use client’ at the top) rather than inside app/layout.jsx. Live Preview must run in a browser context.
4.  Add debug: true during setup to surface configuration details in the browser console.
5.  Ensure the SDK initialization fires before any GetEntry API calls in the page lifecycle.

After correcting the initialization structure and verifying all required parameters, reload the preview pane and confirm that content updates in the editor are reflected in real time.
