---
title: "Variant Entry Data Corruption - Component Misbehavior from Modular Block Duplication"
description: "Variant Entry Data Corruption - Component Misbehavior from Modular Block Duplication"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/24-variant-entry-data-corruption-component-misbehavior-from-modular-block-duplication
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs1da6d611b1796637
---

# Variant Entry Data Corruption - Component Misbehavior from Modular Block Duplication

A variant entry exhibits unexpected component behavior: modular blocks convert to different types unexpectedly, data sources are reset without user action, and previously deleted items reappear within the entry. The issue is blocking a project go-live.

**Root Cause**

The corruption was caused by a bug in the duplication logic of modular blocks when applied to variant entries. The duplication process incorrectly shared or re-used block data between the base entry and the variant, causing component conversion, data source resets, and reappearance of items that had been deleted in the variant context.

**Resolution**

A platform fix was deployed to correct the modular block duplication logic for variant entries. No further action is required for stacks affected by this bug after the fix is applied.

1.  If similar symptoms appear (components converting types, deleted items reappearing, data source resets in variant entries), contact Contentstack Support immediately with the affected variant UID, entry UID, and stack API key.
2.  Do not attempt to manually re-delete the reappearing items or re-configure components - this may compound the data state.
3.  After the fix is confirmed, re-verify the variant entry content to ensure all components are in their expected state and no data corruption remains.

After the platform fix, open the affected variant entry and confirm that components display correctly, deleted items do not reappear, and data sources are stable.
