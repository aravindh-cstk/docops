---
title: "How do I replace Access Tokens with Delivery or Management Tokens?"
description: "How do I replace Access Tokens with Delivery or Management Tokens?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/01-access-token-removal-faqs/08-how-do-i-replace-access-tokens-with-delivery-or-management-tokens
doc_type: faq
_cms_section_uid: cs1428ecf25c6be69c
_cms_faq_uid: csfc54a31878ef1665
---

# How do I replace Access Tokens with Delivery or Management Tokens?

To replace Access Tokens with Delivery Tokens:

1.  [Generate a separate Delivery Token](/docs/headless-cms/create-a-delivery-token) for each publishing environment.
2.  Use the Delivery Token value in the access\_token header for Content Delivery API calls.

To replace Access Tokens with Management Tokens:

1.  Generate a Management Token or request one from the stack [Owner](/docs/headless-cms/types-of-roles#owner) / [Admin](/docs/headless-cms/types-of-roles#admin).
2.  Use the Management Token value in the authorization header for Content Management API calls.
