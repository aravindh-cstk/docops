---
title: "Account Locked Out - Unable to Generate Auth Token"
description: "Account Locked Out - Unable to Generate Auth Token"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/04-account-locked-out-unable-to-generate-auth-token
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs85c3ffa70e8f7522
---

# Account Locked Out - Unable to Generate Auth Token

A user is unable to sign in to Contentstack without SSO and therefore cannot generate an auth token. The account is locked and login attempts consistently fail.

**Root Cause**

Repeated failed login attempts trigger an automatic account lock as a security measure. Once locked, the account cannot be accessed until the lock is reset by Contentstack Support.

**Resolution**

1.  Contact Contentstack Support and request an account lock reset for the affected user account.
2.  Once Support resets the lock, attempt login again with correct credentials.
3.  After successfully logging in, generate the required auth token via the user session (login) API or the Contentstack UI.

After the account lock is reset, log in and confirm an auth token can be generated successfully.
