---
title: "Empty Modular Block Instance Not Saved - Expected Behavior"
description: "Empty Modular Block Instance Not Saved - Expected Behavior"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/90-empty-modular-block-instance-not-saved-expected-behavior
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs28613b37b77ff577
---

# Empty Modular Block Instance Not Saved - Expected Behavior

When a modular block instance is added but no field values are entered, the block disappears after page reload.

**Root Cause**

This is expected behavior. Contentstack requires at least one field within the block to contain a value before it is persisted. An empty block is considered a no-op and is discarded on reload.

**Resolution**

This behavior is by design. To retain a modular block instance, populate at least one field before saving. If a block must be saved in a ‘blank’ state, add a placeholder field (such as a boolean or select with a default value) that is always populated automatically.
