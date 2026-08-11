---
title: "Resolving SSO Login Requirement After Disabling Strict Mode"
description: "Resolving SSO Login Requirement After Disabling Strict Mode"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/01-resolving-sso-login-requirement-after-disabling-strict-mode
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csaa0d5c3ac426654a
---

# Resolving SSO Login Requirement After Disabling Strict Mode

A message stating access is allowed only through SSO appears even after Strict Mode has been disabled, blocking login with credentials. This occurs when the system incorrectly mandates SSO access for non-SSO users.

**Root Cause**

A known UI issue prevents the "Allow Access without SSO" checkbox from appearing as expected when adding a user to an organization.

**Resolution**

1.  Navigate to the organization settings to add the user.
2.  Refresh the page while adding the user to make the checkbox visible.
3.  Locate the "Allow Access without SSO" checkbox that appears after the refresh.
4.  Select the "Allow Access without SSO" checkbox.
5.  Save the settings to allow the user to log in without SSO.

After saving the settings, attempt to log in using standard credentials. If the login is successful without an SSO redirect, the issue is resolved.
