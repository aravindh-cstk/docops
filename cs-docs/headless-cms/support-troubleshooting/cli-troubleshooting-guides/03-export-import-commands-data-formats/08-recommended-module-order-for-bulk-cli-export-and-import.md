---
title: "Recommended Module Order for Bulk CLI Export and Import"
description: "Recommended Module Order for Bulk CLI Export and Import"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/08-recommended-module-order-for-bulk-cli-export-and-import
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs186c213a8800863b
---

# Recommended Module Order for Bulk CLI Export and Import

CLI-exported entries and assets could not be successfully re-imported into a stack.

**Root Cause**

Modules do need a specific order for dependencies to resolve (for example, assets must exist before entries import). cm:stacks:import enforces this automatically for a full import (no --module flag) via a fixed internal module order. Manual ordering only matters when modules are imported one at a time with --module; the CLI does not re-order anything in that case. If module order is correct and a bulk re-import still fails, check for missing or mismatched management token scopes, or conflicting UIDs on locales or content types already in the destination stack.

**Resolution**

1.  Install the CLI: npm install -g @contentstack/cli (requires Node.js 22 or later).
2.  Generate management tokens and confirm access rights on both stacks.
3.  Run the export using the source stack's API key.
4.  Run the import using the destination stack's token and API key, pointing to the same export directory.
5.  For a full import (no --module), the CLI already sequences modules correctly. For per-module imports, use this order: locales, environments, assets, taxonomies, extensions, marketplace-apps, webhooks, global-fields, content-types, workflows, entries, labels, custom-roles.
