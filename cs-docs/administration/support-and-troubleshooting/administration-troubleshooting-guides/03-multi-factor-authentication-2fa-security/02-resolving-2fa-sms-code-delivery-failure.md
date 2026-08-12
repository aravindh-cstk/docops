---
title: "Resolving 2FA SMS Code Delivery Failure"
description: "Resolving 2FA SMS Code Delivery Failure"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/03-multi-factor-authentication-2fa-security/02-resolving-2fa-sms-code-delivery-failure
doc_type: faq
_cms_section_uid: cs8a47e12b50ebbe6e
_cms_faq_uid: csb56f04c41ddf4a4a
---

# Resolving 2FA SMS Code Delivery Failure

Login attempts fail when the two-factor authentication code is not received via SMS. Authentication cannot be completed because the required verification code is not delivered.

**Root Cause**

Two-factor authentication codes fail to deliver via SMS, preventing the completion of the login process.

**Resolution**

1.  Install the Authy app on your mobile device.
2.  Switch the two-factor authentication method from SMS to app-based authentication.
3.  Configure the Authy app to receive authentication codes for the account.

After configuring the Authy app, enter the generated code into the login prompt to verify if access is restored.
