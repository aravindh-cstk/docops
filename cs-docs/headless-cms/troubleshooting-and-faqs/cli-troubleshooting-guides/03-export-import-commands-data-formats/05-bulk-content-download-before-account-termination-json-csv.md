---
title: "Bulk Content Download Before Account Termination (JSON/CSV)"
description: "Bulk Content Download Before Account Termination (JSON/CSV)"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/05-bulk-content-download-before-account-termination-json-csv
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: csc2c998f85e91d109
---

# Bulk Content Download Before Account Termination (JSON/CSV)

Ahead of account termination, the customer requested a full export of their current content in **JSON/CSV** format for archiving and offboarding purposes.

**Root Cause**

This was not a CLI failure. The customer needed the correct, scalable method to export stack content in bulk prior to contract termination.

**Resolution**

1.  Confirm the scope of export needed (full stack content and/or specific modules like entries, assets, content types).
2.  For **full stack–style structured export**, use **csdx cm:stacks:export** (JSON/module folders as documented).
3.  For **CSV slices** (e.g. entries, taxonomies, users per command scope), use **csdx cm:export-to-csv** where it matches the need—**not** a drop-in replacement for entire-stack JSON export.
4.  Validate exported output locally to ensure completeness.
