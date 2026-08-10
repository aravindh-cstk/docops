---
title: "400 Error for Valid Locale Parameter - Re-save Delivery Token to Fix"
description: "400 Error for Valid Locale Parameter - Re-save Delivery Token to Fix"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/052-400-error-for-valid-locale-parameter-re-save-delivery-token-to-fix
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs53c10776a05875df
---

# 400 Error for Valid Locale Parameter - Re-save Delivery Token to Fix

API requests with a specific locale code (for example, de-de) intermittently fail with a 400 error. The same request works when tested from a different environment or tool. The issue is not consistently reproducible.

**Root Cause**

The delivery token configuration may have become out of sync with the stack’s branch or environment scope. This can occur after a branch scope change or environment update that was not propagated correctly to the delivery token’s state. The result is intermittent validation failures for otherwise valid locale parameters.

**Resolution**

1.  Navigate to Settings > Tokens in the Contentstack dashboard.
2.  Open the affected delivery token and re-save it without making any changes. This forces the token configuration to resync with the current branch and environment scope.
3.  Re-run the previously failing request with the locale parameter and confirm it no longer returns a 400 error.

Re-saving the delivery token resolves the configuration desync. No code or API request changes are required.
