---
title: "Password Reset Email Failure Due to Expired Organization"
description: "Password Reset Email Failure Due to Expired Organization"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/01-basic-login-passwords-account-lockouts/02-password-reset-email-failure-due-to-expired-organization
doc_type: faq
_cms_section_uid: cs2988f86f67d44366
_cms_faq_uid: cs4172875569dc8b7c
---

# Password Reset Email Failure Due to Expired Organization

Login attempts fail due to an invalid password, and the Forgot Password flow does not send a reset email. Access to the account is not granted because the organization has expired, disabling automated email triggers.

**Root Cause**

The organization associated with the account has reached its expiration date, which prevents the password reset process from functioning and sending emails.

**Resolution**

1.  Obtain access to an active organization.

After obtaining access to an active organization, attempt to log in or trigger a password reset to verify if access is restored.
