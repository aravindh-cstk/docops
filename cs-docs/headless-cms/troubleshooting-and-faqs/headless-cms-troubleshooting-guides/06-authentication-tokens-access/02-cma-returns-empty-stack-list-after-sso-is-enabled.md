---
title: "CMA Returns Empty Stack List After SSO Is Enabled"
description: "CMA Returns Empty Stack List After SSO Is Enabled"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/02-cma-returns-empty-stack-list-after-sso-is-enabled
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csf3fe33a8f3c92a35
---

# CMA Returns Empty Stack List After SSO Is Enabled

After enabling Single Sign-On (SSO) for the organization, CMA calls to Get All Stacks return an empty array even though stacks exist and are accessible via the UI.

**Root Cause**

For SSO-enabled organizations, the CMA requires the organization\_uid to be included as a header in API requests. Without this header, the API cannot scope the request to the correct organization and returns an empty result.

**Resolution**

1.  Retrieve the organization UID from the Contentstack dashboard (Organization Settings).
2.  Add the organization\_uid header to all CMA requests: organization\_uid: <your\_org\_uid>
3.  Re-run the Get All Stacks call with the header included and confirm the correct stack list is returned.

After adding the organization\_uid header, execute the Get All Stacks API call. If the response contains the expected stacks, the SSO scoping is correctly configured
