---
title: "Publish Error When Entry Has More Than 20 Modular Blocks"
description: "Publish Error When Entry Has More Than 20 Modular Blocks"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/55-publish-error-when-entry-has-more-than-20-modular-blocks
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs59dbdb92dd1f217e
---

# Publish Error When Entry Has More Than 20 Modular Blocks

Publishing entries containing more than 20 modular blocks fails with a generic error (genericError.maxInstance). Entries with 20 or fewer blocks publish successfully.

**Root Cause**

A backend configuration limit key controls the maximum number of modular block instances allowed per entry. When this key is set to a threshold below the actual number of blocks in the entry, publishing is blocked. This is a stack-level backend configuration, not a UI-accessible setting.

**Resolution**

1.  Contact Contentstack Support and report the error along with the stack API key.
2.  Request that Engineering review and re-enable or increase the modular block maximum threshold for the affected stack.
3.  After the backend fix is applied, retry publishing the affected entries.

After engineering applies the configuration fix, attempt to publish entries with more than 20 modular blocks and confirm they publish without the genericError.maxInstance error.
