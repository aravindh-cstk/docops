---
title: "SDK Initialization Failures in SSR Frameworks (Next.js, Astro, Nuxt)"
description: "SDK Initialization Failures in SSR Frameworks (Next.js, Astro, Nuxt)"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/01-installation-initialization-environments/03-sdk-initialization-failures-in-ssr-frameworks-next-js-astro-nuxt
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: cs4f059aa99c5746fd
---

# SDK Initialization Failures in SSR Frameworks (Next.js, Astro, Nuxt)

SSR builds/runtime can fail when browser-only assumptions leak into server execution paths.

**Root Cause**

Browser-specific objects (like window or document) are referenced during server-side execution, or the SDK is initialized as a global singleton that cannot persist across stateless server requests.

**Resolution**

1.  Initialize SDK with contentstack.stack(...) in server-safe modules.
2.  Keep browser-only logic behind typeof window !== 'undefined' checks.
3.  Pass explicit environment/region in config for deterministic server behavior.
4.  Avoid older constructor/global-singleton patterns in SSR code.

Server render completes and fetch returns 2xx without window is not defined or similar runtime errors. Escalate with framework version and minimal initialization snippet.
