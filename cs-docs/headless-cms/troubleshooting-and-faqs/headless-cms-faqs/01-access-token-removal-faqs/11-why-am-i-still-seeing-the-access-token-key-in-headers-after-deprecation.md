---
title: "Why am I still seeing the access_token key in headers after deprecation?"
description: "Why am I still seeing the access_token key in headers after deprecation?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/01-access-token-removal-faqs/11-why-am-i-still-seeing-the-access-token-key-in-headers-after-deprecation
doc_type: faq
_cms_section_uid: cs1428ecf25c6be69c
_cms_faq_uid: cse9189cc8462e96eb
---

# Why am I still seeing the access_token key in headers after deprecation?

The access\_token key remains valid for older stacks (before December 16, 2020). New stacks must use **Delivery Tokens** in this header. For newer stacks, use the Delivery Token value in the access\_token header.
