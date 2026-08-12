---
title: "Delivery Token Exposed in Frontend Application Bundle - Rotate Immediately"
description: "Delivery Token Exposed in Frontend Application Bundle - Rotate Immediately"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/18-delivery-token-exposed-in-frontend-application-bundle-rotate-immediately
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs96850573999b5efa
---

# Delivery Token Exposed in Frontend Application Bundle - Rotate Immediately

A delivery token is discovered to be exposed in the frontend application bundle - visible to anyone who inspects the application’s JavaScript code. This is a security risk.

**Root Cause**

Delivery tokens embedded in frontend code or hardcoded in client-side JavaScript bundles are publicly accessible to any user who inspects the application source. While delivery tokens are designed for read-only content delivery (not write operations), an exposed token allows unauthorized parties to access all published content in the stack, potentially including content not yet published publicly.

**Resolution**

1.  Rotate the exposed delivery token immediately: navigate to Settings > Tokens, locate the compromised token, and regenerate or delete it. Create a new token to replace it.
2.  Update the application configuration to use the new token.
3.  For frontend applications, avoid embedding delivery tokens directly in client-side code. Instead, proxy delivery API requests through a server-side endpoint that adds the token server-side before forwarding to Contentstack.
4.  For server-side rendering (SSR) or static site generation (SSG) frameworks, ensure the token is stored in server-side environment variables and never bundled into the client-side output.

After rotating the token and updating the application, confirm that the old token no longer returns data (it should return a 401 or 404) and that the new token functions correctly.
