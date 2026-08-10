---
title: "CMA Workflows API Returns Auth Error - Postman Authorization Header Conflict"
description: "CMA Workflows API Returns Auth Error - Postman Authorization Header Conflict"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/12-cma-workflows-api-returns-auth-error-postman-authorization-header-conflict
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs0c3e5e4fa50e2ecd
---

# CMA Workflows API Returns Auth Error - Postman Authorization Header Conflict

A CMA API call to retrieve workflows returns an authentication error similar to ‘you cannot do that unless you are logged in’, even though the api\_key and management token are correct. The same call works correctly when run via cURL.

**Root Cause**

The issue is caused by Postman’s Authorization tab. When Postman’s Authorization is set to any type other than ‘No Auth’, Postman generates and injects its own Authorization header into the request. This injected header overwrites or conflicts with the manual authorization header (containing the management token) that was added in the Headers tab. The result is that the management token is either duplicated or replaced by an empty or invalid value.

**Resolution**

1.  In Postman, navigate to the Authorization tab for the request and set the type to No Auth.
2.  Add the management token manually in the Headers tab: key = authorization, value = {management\_token}.
3.  Also add the api\_key header: key = api\_key, value = {stack\_api\_key}.
4.  Re-send the request and confirm the workflows are returned correctly.

After setting Postman’s Authorization to No Auth and adding headers manually, confirm the CMA call returns the expected workflow list without authentication errors.
