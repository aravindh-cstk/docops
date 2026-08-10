---
title: "Syncing Entries Across Locales: Limitations and Workarounds"
description: "Syncing Entries Across Locales: Limitations and Workarounds"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/02-syncing-entries-across-locales-limitations-and-workarounds
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs917cf9b1901c28f4
---

# Syncing Entries Across Locales: Limitations and Workarounds

An attempt to sync entries from a source locale to a target locale via script fails. The Delivery API returns nested references correctly, but those references are not attached when creating or updating entries in the target locale.

**Root Cause**

Bulk locale-to-locale entry sync is not directly supported by Contentstack. When references are resolved by the Delivery API, the resolved reference objects cannot be passed back directly into the CMA create or update payload — only reference UIDs and content type UIDs should be provided. Additionally, referenced entries that belong to different content types must be independently localized before they can be referenced in the target locale entry.

**Resolution**

1.  Export entries as JSON from the source locale.
2.  Update the locale UIDs in the exported JSON to match the target locale.
3.  For each referenced entry, ensure the referenced entry also has a localized version in the target locale before importing the parent.
4.  Re-import the modified JSON using the CMA import endpoint with overwrite=true.

**Note:** This approach has limitations for complex reference hierarchies spanning multiple content types. Engage a Solutions Architect for complex cross-locale sync implementations.

After completing the export-modify-import cycle, fetch entries in the target locale and confirm referenced entries are correctly attached.
