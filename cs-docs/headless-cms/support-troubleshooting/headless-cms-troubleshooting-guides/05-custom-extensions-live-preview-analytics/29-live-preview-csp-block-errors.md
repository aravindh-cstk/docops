---
title: "Live Preview CSP Block Errors"
description: "Live Preview CSP Block Errors"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/29-live-preview-csp-block-errors
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csf2e92310b684a788
---

# Live Preview CSP Block Errors

Content Security Policy (CSP) block errors appear in the browser console when using Live Preview. The errors prevent the preview iframe from loading or communicating with the editor.

**Root Cause**

The application’s CSP headers do not include the Contentstack app domains required for Live Preview to function. The preview iframe communicates via postMessage between the Contentstack editor (app.contentstack.com) and the preview application. If the CSP blocks frame-ancestors, connect-src, or frame-src for Contentstack domains, the preview fails.

**Resolution**

1.  Review the application’s Content Security Policy headers.
2.  Add the following Contentstack domains to the appropriate CSP directives:

-   frame-ancestors: app.contentstack.com, eu-app.contentstack.com (and other regional variants)
-   connect-src: \*.contentstack.com, \*.contentstack.io

1.  If the application is served via a CDN or reverse proxy, update the CSP there as well.
2.  After updating the CSP, reload the Live Preview session and confirm no CSP block errors appear in the console.

After updating the Content Security Policy to allow Contentstack domains, reload the preview. If Live Preview loads without CSP errors and the editor communicates with the preview, the policy is correctly configured.
