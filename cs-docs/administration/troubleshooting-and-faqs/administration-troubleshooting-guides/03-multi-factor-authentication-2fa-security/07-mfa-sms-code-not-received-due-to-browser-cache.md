---
title: "MFA SMS Code Not Received Due to Browser Cache"
description: "MFA SMS Code Not Received Due to Browser Cache"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/03-multi-factor-authentication-2fa-security/07-mfa-sms-code-not-received-due-to-browser-cache
doc_type: faq
_cms_section_uid: cs8a47e12b50ebbe6e
_cms_faq_uid: csf99ef7bf8ba03b26
---

# MFA SMS Code Not Received Due to Browser Cache

A two-factor authentication SMS code may fail to arrive during login, even though the phone number on file is correct.

**Root Cause**

Corrupted or stale browser cache and cookies can interfere with the delivery or recognition of SMS-based verification codes during login.

**Resolution**

1.  Try logging in using an incognito or private browser window.
2.  If the issue persists, try a different browser.
3.  Clear the browser cache and cookies, then retry the login.

After clearing the cache or switching browsers, verify that the SMS code is received and that login completes successfully.
