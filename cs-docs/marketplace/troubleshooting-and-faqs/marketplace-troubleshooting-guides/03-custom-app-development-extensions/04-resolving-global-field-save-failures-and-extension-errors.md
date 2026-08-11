---
title: "Resolving Global Field save failures and extension errors"
description: "Resolving Global Field save failures and extension errors"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/03-custom-app-development-extensions/04-resolving-global-field-save-failures-and-extension-errors
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: cs07ad5487e52ba1a6
---

# Resolving Global Field save failures and extension errors

Saving Global Field entries may fail with an error referencing a non-existent extension ID when specific experimental features are enabled. This prevents users from updating content model components.

**Root Cause**

The error is caused by a known defect in the Nested Global Fields feature, which incorrectly attempts to reference internal extension IDs that do not exist in the stack.

**Resolution**

1.  Navigate to the stack settings or contact support to access feature flags.
2.  Locate the "Nested Global Fields" enablement setting.
3.  Disable the feature to stop the system from referencing non-existent extension IDs.
4.  Attempt to save the Global Field entry again.

After disabling the Nested Global Fields feature, open a Global Field and attempt to save a change.

If the "Failed to update" error no longer appears, the reference mismatch is resolved.
