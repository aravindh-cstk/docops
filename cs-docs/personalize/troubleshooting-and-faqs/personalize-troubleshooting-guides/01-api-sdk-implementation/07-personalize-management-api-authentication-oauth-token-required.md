---
title: "Personalize Management API Authentication: OAuth Token Required"
description: "Personalize Management API Authentication: OAuth Token Required"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/07-personalize-management-api-authentication-oauth-token-required
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: csc960cbe15dd6f3d6
---

# Personalize Management API Authentication: OAuth Token Required

Requests to the Personalize Management API return a "Failed to Fetch" or "Unable to Retrieve Data" error when using a Content Management Token (CMT) for authentication. This blocks programmatic access to Personalize resources.

**Root Cause**

The Personalize Management API does not support Content Management Tokens. It requires either an OAuth token or an authtoken for all API requests. Using an unsupported token type results in an authentication failure.

**Resolution**

1.  Confirm the authentication method currently in use. If a Content Management Token is being passed in the request headers, this is the cause of the failure.
2.  Generate an OAuth token by following the Contentstack OAuth documentation. Alternatively, use the authtoken associated with a valid Contentstack account.
3.  Update all API requests to pass the correct token in the Authorization header.
4.  Retry the request and confirm a successful response is returned.

Refer to the Personalize Management API documentation for full details on supported authentication methods: https://www.contentstack.com/docs/personalize/
