---
title: "401 Error on /v3/stacks Using a Stack-Level Management Token"
description: "401 Error on /v3/stacks Using a Stack-Level Management Token"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/06-401-error-on-v3-stacks-using-a-stack-level-management-token
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs796a41c7cb10ccd3
---

# 401 Error on /v3/stacks Using a Stack-Level Management Token

A CMA request to GET /v3/stacks returns a 401 Unauthorized error when authenticated with a stack-level management token.

**Root Cause**

/v3/stacks is an organization-level endpoint. It returns the list of stacks associated with the authenticated user's organization. A stack-level management token is scoped to a single stack and does not have the organization-level authority required by this endpoint.

**Resolution**

1.  Generate a user auth token via the login (user-session) API: POST /v3/user-session with the user's credentials.
2.  Include the auth token in the request header as authtoken: <your\_auth\_token>.
3.  For SSO-enabled organizations, also include the organization\_uid header.
4.  Re-run the GET /v3/stacks request with the auth token and confirm the stack list is returned.

After replacing the management token with an auth token, execute the /v3/stacks request. If stacks are returned in the response, the correct authentication method is in use.
