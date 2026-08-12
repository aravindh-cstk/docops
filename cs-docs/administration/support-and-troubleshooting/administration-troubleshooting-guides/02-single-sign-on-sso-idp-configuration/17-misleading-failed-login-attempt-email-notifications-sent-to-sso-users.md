---
title: "Misleading “Failed Login Attempt” Email Notifications Sent to SSO Users"
description: "Misleading “Failed Login Attempt” Email Notifications Sent to SSO Users"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/17-misleading-failed-login-attempt-email-notifications-sent-to-sso-users
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs171da94b388d6098
---

# Misleading “Failed Login Attempt” Email Notifications Sent to SSO Users

SSO-enabled users may receive an email about failed login attempts or a changed password, even though their account was never compromised and their SSO access continues to work normally.

**Root Cause**

This notification is triggered by multiple failed attempts on Contentstack's standard username/password login page, regardless of whether the account is actually configured for SSO. Since SSO-enabled accounts are authenticated entirely through the identity provider, Contentstack does not manage their password, so these notifications do not reflect any real impact to the account or its SSO access.

**Resolution**

1.  Confirm the account is configured for SSO, meaning authentication is handled entirely by the identity provider.
2.  Disregard the notification, since it does not indicate that the account or its SSO access has been affected.
3.  Continue logging in through the normal SSO flow to confirm access is unaffected.

After logging in via SSO, confirm access works normally despite having received the notification.
