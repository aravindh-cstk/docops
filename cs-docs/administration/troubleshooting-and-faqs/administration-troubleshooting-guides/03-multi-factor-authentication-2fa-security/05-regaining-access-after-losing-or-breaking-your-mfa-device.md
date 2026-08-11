---
title: "Regaining Access After Losing or Breaking Your MFA Device"
description: "Regaining Access After Losing or Breaking Your MFA Device"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/03-multi-factor-authentication-2fa-security/05-regaining-access-after-losing-or-breaking-your-mfa-device
doc_type: faq
_cms_section_uid: cs8a47e12b50ebbe6e
_cms_faq_uid: cs185a540aba1d3eea
---

# Regaining Access After Losing or Breaking Your MFA Device

Login is blocked when the device enrolled for two-factor authentication is lost, broken, or otherwise inaccessible, and no backup method is available.

**Root Cause**

Contentstack does not provide a self-service way to bypass multi-factor authentication when the enrolled device is unavailable. Disabling MFA on an account requires explicit approval from the Organization Owner.

**Resolution**

1.  Contact the Organization Owner to request approval to disable MFA on the affected account.
2.  Once approval is confirmed, Contentstack Support disables MFA for the account.
3.  Log in using the account's username and password now that MFA has been disabled.
4.  Set up MFA again on a new device if continued use of two-factor authentication is desired.

After MFA is disabled and login is confirmed, verify that a new authentication method can be configured successfully if needed.
