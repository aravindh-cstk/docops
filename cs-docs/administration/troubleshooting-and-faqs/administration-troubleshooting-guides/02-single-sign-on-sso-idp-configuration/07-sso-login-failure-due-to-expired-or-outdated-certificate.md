---
title: "SSO Login Failure Due to Expired or Outdated Certificate"
description: "SSO Login Failure Due to Expired or Outdated Certificate"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/07-sso-login-failure-due-to-expired-or-outdated-certificate
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cse246d9aed0c127dd
---

# SSO Login Failure Due to Expired or Outdated Certificate

Attempting to log in via SSO as an organization owner may fail when the SSO certificate is not updated.

**Root Cause**

The SSO certificate has expired or is outdated, preventing successful authentication between the Identity Provider and Contentstack.

**Resolution**

1.  Navigate to the SSO configuration settings in Contentstack.
2.  Update the SSO certificate with the current valid certificate from the Identity Provider.
3.  Save the configuration changes.

After updating the SSO certificate, attempt to log in using SSO. If the login is successful, the issue is resolved.
