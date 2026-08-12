---
title: "Global Field Cannot Be Added Inside a Modular Block"
description: "Global Field Cannot Be Added Inside a Modular Block"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/51-global-field-cannot-be-added-inside-a-modular-block
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs67b5bceee4676c4e
---

# Global Field Cannot Be Added Inside a Modular Block

A customer wants to add a Global Field inside a Modular Block but is unable to do so in the content type editor.

**Root Cause**

Global Fields in Contentstack can only be added as standalone blocks within a Modular Block - they cannot be nested inside another block type within the Modular Block. The Global Field appears as its own full block in the Modular Block structure, not as a nested sub-field.

**Resolution**

1.  Add the Global Field as a standalone block directly in the Modular Block configuration - do not attempt to nest it inside another block.
2.  If deeper nesting is required, use a Reference Content Type approach: create the nested structure as a regular content type and reference it from within the Modular Block.

After adding the Global Field as a standalone block in the Modular Block, verify editors can select and populate it in entries.
