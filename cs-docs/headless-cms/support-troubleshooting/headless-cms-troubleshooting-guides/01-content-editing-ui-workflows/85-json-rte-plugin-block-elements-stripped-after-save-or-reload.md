---
title: "JSON RTE Plugin Block Elements Stripped After Save or Reload"
description: "JSON RTE Plugin Block Elements Stripped After Save or Reload"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/85-json-rte-plugin-block-elements-stripped-after-save-or-reload
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csc6f9ce7af943f6e6
---

# JSON RTE Plugin Block Elements Stripped After Save or Reload

Custom block elements created by JSON RTE plugins (including Contentstack’s out-of-the-box info panel extension) are stripped from the field when the entry is saved and reloaded.

**Root Cause**

This was a platform-level bug in how plugin-generated content was being persisted and reloaded in the JSON RTE - the persistence logic had a gap that dropped plugin-specific block types during serialization.

**Resolution**

A platform fix has been deployed. Plugin-based content in the JSON RTE is now correctly persisted and reloaded.

1.  If plugin block elements are still being stripped after the fix, contact Contentstack Support with the plugin name, block type, and steps to reproduce.
2.  As a temporary workaround: use the JSON RTE’s standard block types rather than plugin-created custom blocks where content persistence is critical.

After the fix deployment, create a test entry with a plugin-generated block, save and reload, and confirm the block content is preserved.
