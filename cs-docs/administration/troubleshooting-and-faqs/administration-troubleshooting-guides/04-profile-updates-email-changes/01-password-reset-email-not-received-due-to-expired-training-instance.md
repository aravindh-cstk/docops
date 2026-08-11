---
title: "Password Reset Email Not Received Due to Expired Training Instance"
description: "Password Reset Email Not Received Due to Expired Training Instance"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/04-profile-updates-email-changes/01-password-reset-email-not-received-due-to-expired-training-instance
doc_type: faq
_cms_section_uid: cs0e0bdbe7a7e720fb
_cms_faq_uid: cse4d9a294e69ed6e0
---

# Password Reset Email Not Received Due to Expired Training Instance

Login attempts fail and the Forgot Password option does not trigger a password reset email. Access to the account is not granted because the expected reset communication is not received.

**Root Cause**

The email address used for login is associated with an expired training instance, which prevents the password reset process from functioning.

**Resolution**

1.  Create a new training instance using a different email address.
2.  Create a new training instance using the same email address while selecting a different region instead of AWS NA.

After creating a new training instance, attempt to log in or trigger the password reset process to verify if access is restored.
