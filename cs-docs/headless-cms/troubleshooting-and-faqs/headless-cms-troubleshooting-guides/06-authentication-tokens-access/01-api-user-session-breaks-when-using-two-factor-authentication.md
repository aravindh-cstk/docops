---
title: "API User Session Breaks When Using Two-Factor Authentication"
description: "API User Session Breaks When Using Two-Factor Authentication"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/01-api-user-session-breaks-when-using-two-factor-authentication
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cseb04fa0b819cb4ff
---

# API User Session Breaks When Using Two-Factor Authentication

API user sessions fail or break when the account has two-factor authentication (2FA) enabled. CMA calls that require organization-level access return errors or cannot be authenticated.

**Root Cause**

Two-factor authentication adds an interactive step to the login flow that is not well-suited to unattended automation. While the login API does support a 2FA challenge step (tfa\_token), completing this interactively in an automated workflow is not practical, causing session failures for unattended API-driven processes.

**Resolution**

1.  Create a dedicated service account without 2FA enabled specifically for API and automation use.
2.  Generate an auth token using that service account's credentials via the user session (login) API.
3.  Use this auth token for all CMA calls requiring organization-level access.
4.  Restrict the service account's permissions to only the access required for the automation to follow the principle of least privilege.

After setting up the service account and generating its auth token, re-run the CMA calls. If they succeed without session breaks, the 2FA conflict is resolved.
