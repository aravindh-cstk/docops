---
title: "Exporting Asset Metadata for a Specific Folder Using the CLI"
description: "Exporting Asset Metadata for a Specific Folder Using the CLI"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/07-exporting-asset-metadata-for-a-specific-folder-using-the-cli
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs63ca47373dec383e
---

# Exporting Asset Metadata for a Specific Folder Using the CLI

Asset metadata for a specific folder could not be exported using the CLI.

**Root Cause**

CS Assets, Contentstack's space-based asset management system, is now generally available. CS Assets requires a logged-in session; a management token cannot read linked workspace settings and silently falls back to the legacy assets export. Folder-level filtering is not supported at export time in either path.

**Resolution**

1.  If CS Assets is not enabled on the stack, run the standard export; folder structure and folder association are included by default.
2.  If CS Assets is enabled, export using a logged-in session, not a management token, so the CLI can read the linked workspace settings.
3.  Filter the exported data locally by folder association, since export-time folder filtering is not supported.
4.  Alternatively, fetch assets via the [Content Management API](/docs/developers/apis/content-management-api) and filter by folder-related metadata.

Folder and asset metadata are available for both legacy and CS Assets stacks once the correct authentication method is used.

**Note:** [csdx cm:stacks:clone](/docs/developers/cli/clone-a-stack) does not export or import CS Assets space-based assets; use export/import instead if cloning a CS Assets-enabled stack.
