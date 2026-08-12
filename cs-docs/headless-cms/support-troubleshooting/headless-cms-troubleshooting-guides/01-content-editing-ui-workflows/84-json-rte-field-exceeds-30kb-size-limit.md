---
title: "JSON RTE Field Exceeds 30KB Size Limit"
description: "JSON RTE Field Exceeds 30KB Size Limit"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/84-json-rte-field-exceeds-30kb-size-limit
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs1af1ab5efd77807d
---

# JSON RTE Field Exceeds 30KB Size Limit

Saving an entry returns an error indicating the JSON RTE field has exceeded the 30KB size limit. The field contains large amounts of structured content including tables.

**Root Cause**

Each JSON RTE field has a maximum of 30KB. Tables with many rows, nested formatting, and inline metadata grow significantly in JSON representation. The 30KB counts the full serialized JSON, not visible character count.

**Resolution**

1.  Move large tables to a Reference field pointing to a dedicated ‘Table’ content type, separating table data from the RTE field.
2.  Split long content across multiple JSON RTE fields, or across multiple entries linked by references.
3.  Reduce nested formatting - excessive bold, italic, and inline style metadata contributes to JSON size.

After restructuring, verify the entry saves without the 30KB limit error and the frontend renders the complete content correctly.
