---
title: "Bulk JSON Import via UI Creates ‘Untitled’ Entries Without Populating Fields"
description: "Bulk JSON Import via UI Creates ‘Untitled’ Entries Without Populating Fields"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/27-bulk-json-import-via-ui-creates-untitled-entries-without-populating-fields
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6d6578c5a9d1ef9e
---

# Bulk JSON Import via UI Creates ‘Untitled’ Entries Without Populating Fields

Attempting a bulk entry import through the Contentstack UI using a JSON file results in entries being created as ‘Untitled’ with no fields populated. The import appears to succeed but the entries are empty.

**Root Cause**

The Contentstack UI does not support bulk entry creation via JSON import. The UI import function is designed for configuration data (content types, global fields, etc.), not for populating entry fields from JSON. When a JSON entry structure is uploaded through the UI import, it creates shell entries without mapping the JSON fields to entry field values.

**Resolution**

1.  Use the Contentstack CLI for bulk entry import: cs cm:stacks:import --stack-api-key {key} --data-dir {path} - this correctly maps JSON data to entry fields.
2.  Alternatively, use the CMA to create entries programmatically: POST /v3/content\_types/{uid}/entries with the entry data in the request body.
3.  Delete the ‘Untitled’ entries created by the failed UI import before running the CLI or CMA import to avoid duplicates.

After importing via CLI or CMA, verify that a sample of entries contain the expected field values and can be published successfully.
