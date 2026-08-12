---
title: "Unexpected User Session Logouts"
description: "Unexpected User Session Logouts"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/03-multi-factor-authentication-2fa-security/04-unexpected-user-session-logouts
doc_type: faq
_cms_section_uid: cs8a47e12b50ebbe6e
_cms_faq_uid: cscabe4bd490f07a11
---

# Unexpected User Session Logouts

Unexpected session logouts may occur in Contentstack when security configurations such as Two-Factor Authentication are not enabled.

**Root Cause**

Missing security configurations, such as Two-Factor Authentication (2FA), can lead to unintended session termination or security-related drops.

**Resolution**

1.  Enable Two-Factor Authentication (2FA) for the affected user account.
2.  Monitor the account for any further unexpected logouts.

After enabling 2FA, monitor the session stability during platform use. If the user remains logged in without further interruptions, the issue is resolved.
