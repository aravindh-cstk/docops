---
title: "Live Preview Not Working in Next.js SSR - SDK Initialization"
description: "Live Preview Not Working in Next.js SSR - SDK Initialization"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/16-live-preview-not-working-in-next-js-ssr-sdk-initialization
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs4f59be11bdf3ffe4
---

# Live Preview Not Working in Next.js SSR - SDK Initialization

Live Preview does not update content in a Next.js application using SSR. The SDK initialization appears correct but the preview pane shows stale or unresponsive content.

**Root Cause**

In Next.js SSR environments, the Live Preview SDK must run in a browser context. Placing ContentstackLivePreview.init() inside server-rendered files (such as app/layout.jsx without the ‘use client’ directive) means the SDK never initializes in the browser, so Live Preview cannot receive editor messages.

**Resolution**

1.  Create a dedicated Client Component file (for example, LivePreviewInit.tsx) and add ‘use client’ at the top.
2.  Move ContentstackLivePreview.init() with all required parameters into this Client Component.
3.  Import and render the Client Component in app/layout.jsx.
4.  Ensure preview token, host, and environment are passed correctly in the init configuration.

After moving the initialization to a Client Component, reload the page in the editor preview pane. If content updates in the editor are reflected in real time, the initialization is correctly placed.
