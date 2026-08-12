---
title: "Management Token Exposed in Client-Side Code - Use preview_token Instead"
description: "Management Token Exposed in Client-Side Code - Use preview_token Instead"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/13-management-token-exposed-in-client-side-code-use-preview-token-instead
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs035de11c41d5772b
---

# Management Token Exposed in Client-Side Code - Use preview_token Instead

During a Live Preview implementation, the management token is visible in browser developer tools when inspecting the network requests or environment variables on the client side.

**Root Cause**

An older Live Preview SDK version requires using a management token in the Live Preview configuration. Newer versions of the SDK support the preview\_token, which is specifically designed for safe client-side use and does not expose management-level access.

**Resolution**

1.  Upgrade the Live Preview SDK to the latest version that supports preview\_token.
2.  Replace the management token in the Live Preview configuration with the preview\_token.
3.  Generate a Preview Token in Settings > Tokens and use it in the SDK initialization.
4.  Remove the management token from all client-side code and environment variables.

After switching to preview\_token, inspect the network requests in browser developer tools and confirm the management token is no longer visible.
