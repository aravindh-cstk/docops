---
title: "Resolving CSP Framing Restrictions in Custom Field Applications"
description: "Resolving CSP Framing Restrictions in Custom Field Applications"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/05-edge-functions-frameworks/03-resolving-csp-framing-restrictions-in-custom-field-applications
doc_type: faq
_cms_section_uid: csdb00c5f9828f74b1
_cms_faq_uid: cs004f6c0c4343cfd9
---

# Resolving CSP Framing Restrictions in Custom Field Applications

A custom field application hosted on Launch fails to load within the Contentstack editor, displaying a Content Security Policy (CSP) error. This occurs because the browser refuses to frame the application URL, citing that an ancestor violates the frame-ancestors 'self' directive, particularly when users access the application via a VPN.

**Root Cause**

The application lacks a server-side framework (such as Next.js or Express) to modify response headers directly. By default, the CSP headers restrict the application from being embedded (framed) in external sites like the Contentstack UI.

**Resolution**

1.  Create a folder named functions at the root of your project.
2.  Inside this folder, add a file named \[proxy\].edge.js.
3.  Implement a handler function within \[proxy\].edge.js to modify the response headers.
4.  Use the Edge Function to explicitly set or update the Content Security Policy headers to allow the application to be embedded within Contentstack.
5.  Deploy the project; Contentstack Launch will automatically detect the new functions folder and apply the header modifications to all requests.
6.  If further clarification is needed on the function implementation, a technical call can be scheduled with the support team.

After the deployment is complete, navigate to the Contentstack entry that utilizes the custom field application. If the custom field application loads successfully within the Contentstack UI without being blocked by CSP restrictions, the issue is resolved.
