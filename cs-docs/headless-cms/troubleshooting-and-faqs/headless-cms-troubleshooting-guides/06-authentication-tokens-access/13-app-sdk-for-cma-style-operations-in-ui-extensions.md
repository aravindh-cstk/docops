---
title: "App SDK for CMA-Style Operations in UI Extensions"
description: "App SDK for CMA-Style Operations in UI Extensions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/13-app-sdk-for-cma-style-operations-in-ui-extensions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cscad9837f1aedf232
---

# App SDK for CMA-Style Operations in UI Extensions

A developer building a Contentstack UI extension or marketplace app needs to perform CMA-style operations (such as asset search or entry lookups) without embedding a management token in client-side code.

**Root Cause**

Embedding management tokens in client-side extensions is a security risk - the token would be visible to any user inspecting the extension’s code. The App SDK provides a secure, proxied method for extensions to make CMA-style requests that execute under the logged-in user’s permissions and session, without exposing tokens.

**Resolution**

1.  Use the App SDK’s window.opener.postMessage or the stack.ContentType().Entry() SDK methods to make requests. These are proxied through the Contentstack App SDK, which uses the logged-in user’s session and permissions.
2.  For asset search: use the App SDK’s stack.Asset().Query().where() methods to search assets under the logged-in user’s access.
3.  For entry lookups: use stack.ContentType(uid).Entry(entryUid).fetch() within the extension to retrieve entry data without a management token.
4.  Refer to the Contentstack App SDK documentation for the full list of supported CMA-proxied operations available to UI extensions and marketplace apps.

After implementing App SDK proxied requests, confirm that CMA-style operations work without a management token being embedded in the extension code.
