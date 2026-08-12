---
title: "Error 105 - Organization API Calls Rejected With Strict SSO"
description: "Error 105 - Organization API Calls Rejected With Strict SSO"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/11-error-105-organization-api-calls-rejected-with-strict-sso
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs57939ebd5b341fb3
---

# Error 105 - Organization API Calls Rejected With Strict SSO

An API call to an organization-level endpoint returns Error 105 even though the authtoken is valid for stack-level calls. The organization has Strict SSO enabled.

**Root Cause**

With Strict SSO enabled, Contentstack rejects standard email/password authtokens for organization-level API calls. The SSO enforcement requires all organization-level requests to be authenticated via the SSO flow. Service accounts that use password-based login cannot generate authtokens that pass organization-level validation under Strict SSO.

**Resolution**

1.  Enable the User Email Whitelist feature for the service account email addresses that need to make organization-level API calls. This feature allows specific accounts to use password-based login (via the CMA Login API) while still having their authtokens accepted by organization-level APIs, even when Strict SSO is enabled.
2.  To add an email to the whitelist, contact Contentstack Support with the Organization ID and the service account email addresses to whitelist.
3.  After whitelisting, the service account can authenticate via POST /v3/user-session (CMA Login API) and use the returned authtoken for organization-level calls.

After whitelisting the service account email, confirm that organization-level API calls return 200 responses rather than Error 105.
