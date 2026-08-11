---
title: "Resolving Unexpected SSO Session Timeouts and Logouts"
description: "Resolving Unexpected SSO Session Timeouts and Logouts"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/04-resolving-unexpected-sso-session-timeouts-and-logouts
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csc94f805c83f88265
---

# Resolving Unexpected SSO Session Timeouts and Logouts

Unexpected daily logouts occur for SSO users regardless of Identity Provider session settings. Automatic logouts occur once the Contentstack SSO session timeout expires.

**Root Cause**

The SSO session timeout is controlled by Contentstack settings, which default to 12 hours and override the session duration set by the Identity Provider.

**Resolution**

1.  Access the SSO session timeout settings in Contentstack.
2.  Update the SSO session timeout value to a preferred duration between 1 and 24 hours.
3.  Note that each SSO login starts a new session; logging out and back in resets the session timer, but the session duration cannot exceed the configured limit.

After updating the timeout settings, verify if the session duration reflects the new configuration.
