---
title: "Contentstack CLI \"Login Failed\" via SDK-based Auth Module"
description: "Contentstack CLI \"Login Failed\" via SDK-based Auth Module"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/02-authentication-regions-networking/06-contentstack-cli-login-failed-via-sdk-based-auth-module
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: cs77e81c441daa0cf8
---

# Contentstack CLI "Login Failed" via SDK-based Auth Module

Users cannot log in to the CLI (csdx auth:login) despite using correct credentials, receiving an "Invalid Credentials" or "MFA Required" error.

**Root Cause**

Authentication fails due to incorrect region settings in the CLI config, or the user has failed to complete the required Multi-Factor Authentication (MFA) challenge.

**Resolution**

1.  Use csdx auth:login and complete the built-in MFA/OTP flow when prompted (or use --oauth for SSO flows).
2.  Confirm configured region before retrying auth (csdx config:get:region / csdx config:set:region).

csdx auth:login succeeds, csdx auth:whoami prints the logged-in email, and csdx config:get:region shows the expected region. Escalate through CLI support path with CLI version, exact login command used, region config output, and auth logs.
