---
title: "Login Failure in SSO-Enabled Organizations via Credentials"
description: "Login Failure in SSO-Enabled Organizations via Credentials"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/05-login-failure-in-sso-enabled-organizations-via-credentials
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csed9ee78b02755517
---

# Login Failure in SSO-Enabled Organizations via Credentials

Login attempts fail for SSO-enabled organizations even when "Strict SSO" is disabled. Despite the setting, the system displays an error message stating that access is restricted to SSO authentication only.

**Root Cause**

The "Allow Access Without SSO" configuration is not explicitly enabled for the specific user within the organization settings.

**Resolution**

1.  Access the **Organization User settings**.
2.  Explicitly enable the **Allow Access Without SSO** setting for the affected user.
3.  If the user still cannot access the platform, remove and re-invite the user to refresh their access permissions and SSO-related flags.

After updating the user settings or re-inviting the user, verify if the account can successfully authenticate without using SSO.
