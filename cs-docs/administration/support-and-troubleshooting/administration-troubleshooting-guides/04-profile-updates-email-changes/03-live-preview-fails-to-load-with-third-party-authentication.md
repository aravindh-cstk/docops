---
title: "Live Preview Fails to Load with Third-Party Authentication"
description: "Live Preview Fails to Load with Third-Party Authentication"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/04-profile-updates-email-changes/03-live-preview-fails-to-load-with-third-party-authentication
doc_type: faq
_cms_section_uid: cs0e0bdbe7a7e720fb
_cms_faq_uid: cs8c2b4ad74fae1f59
---

# Live Preview Fails to Load with Third-Party Authentication

Live Preview fails to load when the application uses a third-party authentication provider and redirection. Preview windows remain empty or fail to initialize because the authentication flow is blocked.

**Root Cause**

Live Preview does not support third-party OAuth authentication flows because iframes block the required redirects as per documented security limitations.

**Resolution**

1.  Verify if the application uses third-party OAuth authentication flows (such as Keycloak) that require redirection.
2.  Refer to the Live Preview limitations documentation to confirm unsupported authentication methods.
3.  Note that this restriction is expected behavior and cannot be bypassed using Content Security Policy (CSP) changes.

After reviewing the authentication flow and documentation, verify if removing the redirection requirement for the preview environment allows the preview to lo
