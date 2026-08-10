---
title: "SSO Users Cannot Generate Auth Tokens via Basic Credentials in Postman"
description: "SSO Users Cannot Generate Auth Tokens via Basic Credentials in Postman"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/03-sso-users-cannot-generate-auth-tokens-via-basic-credentials-in-postman
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs361840d61dfc3323
---

# SSO Users Cannot Generate Auth Tokens via Basic Credentials in Postman

An SSO-enabled user is unable to generate an auth token using basic username and password credentials in Postman. The login attempt fails and no token is returned.

**Root Cause**

SSO users authenticate through the identity provider (IdP), not through Contentstack's native credential system. Standard credential-based auth token generation via the login API is not available for SSO-only accounts. Additionally, certain Postman configurations (such as proxy settings or certificate handling) can interfere with the SSO authentication flow.

**Resolution**

1.  Use a non-SSO service account (a Contentstack-native user) to generate auth tokens programmatically for API and Postman use.
2.  If the SSO user must authenticate, use the Contentstack UI to generate a temporary auth token via the browser-based SSO flow and paste it into Postman manually.
3.  Review Postman's proxy and SSL certificate settings to ensure they are not intercepting or modifying the SSO redirect flow.

After switching to a non-SSO service account or obtaining a browser-generated token, re-run the Postman request. If authentication succeeds and an auth token is returned, the credential issue is resolved.
