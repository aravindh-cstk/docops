---
title: "Non-Localized Fields Cannot Be Configured Inside a Non-Localized Modular Block"
description: "Non-Localized Fields Cannot Be Configured Inside a Non-Localized Modular Block"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/52-non-localized-fields-cannot-be-configured-inside-a-non-localized-modular-block
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs67282b90edd306e3
---

# Non-Localized Fields Cannot Be Configured Inside a Non-Localized Modular Block

After setting a modular block to non-localized, the option to mark individual fields inside the block as non-localizable disappears. This is unexpected behavior.

**Root Cause**

This is expected behavior by design. When a modular block is configured as non-localized, all fields within it automatically inherit the non-localized status. Setting individual fields within the block as non-localizable is therefore redundant - it is implied by the block-level configuration. The UI removes the per-field option to reflect this inherited state.

**Resolution**

No action is required. All fields within a non-localized modular block are automatically non-localized. If specific fields within the block need to be localizable while others are not, the modular block itself should not be set to non-localized - instead, configure non-localizable at the individual field level.
