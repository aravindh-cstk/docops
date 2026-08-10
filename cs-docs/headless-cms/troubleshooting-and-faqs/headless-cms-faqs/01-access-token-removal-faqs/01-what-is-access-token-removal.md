---
title: "What is Access Token removal?"
description: "What is Access Token removal?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/01-access-token-removal-faqs/01-what-is-access-token-removal
doc_type: faq
_cms_section_uid: cs1428ecf25c6be69c
_cms_faq_uid: csf74dd18f72f41483
---

# What is Access Token removal?

Access Token removal refers to the deprecation of Access Tokens in Contentstack for [stacks](/docs/headless-cms/about-stack) created after **December 16, 2020.** Thus, new stacks no longer support Access Tokens for authentication.

Instead, you can:

-   Use [Delivery Tokens](/docs/headless-cms/about-delivery-tokens/) with the `access_token` header for [Content Delivery API](/docs/developers/apis/content-delivery-api) requests.
-   Use [Management Tokens](/docs/headless-cms/about-management-tokens/) or [Authtokens](https://www.contentstack.com/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens) for [Content Management API](/docs/developers/apis/content-management-api/) requests.

This enhances security and provides more control over content access.
