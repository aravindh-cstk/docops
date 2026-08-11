---
title: "Compression and Caching for Client-Side Rendered (CSR) Apps"
description: "Compression and Caching for Client-Side Rendered (CSR) Apps"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/06-performance-network-security-errors/01-compression-and-caching-for-client-side-rendered-csr-apps
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: csc3fc5c9a05259a51
---

# Compression and Caching for Client-Side Rendered (CSR) Apps

SEO auditing tools may report warnings regarding uncompressed static assets (such as .js and .css files) on production sites. These warnings indicate that assets are being served without compression, which can increase payload sizes and negatively impact site performance scores.

**Root Cause**

The behavior of asset compression in the hosting environment depends on the application architecture:

-   **Static Sites:** For projects hosted as purely static sites, the platform automatically applies compression (such as Gzip) to all assets.
-   **Next.js Applications:** In applications using the Next.js framework, the application itself is responsible for generating and serving static assets. Because these files are handled by the application code rather than the platform's default static hosting layer, compression is not applied by the platform automatically.

**Resolution**

1.  **Identify Architecture:** Determine if the project is a standard static site or a framework-based application like Next.js.
2.  **Configure Framework Compression:** If using Next.js, compression must be explicitly enabled within the Next.js configuration. This ensures that the application compresses the JavaScript and CSS files it serves, resolving SEO auditing warnings.
3.  **Static Site Default:** If the project is a purely static site, no additional action is required as compression is applied automatically by the platform.
