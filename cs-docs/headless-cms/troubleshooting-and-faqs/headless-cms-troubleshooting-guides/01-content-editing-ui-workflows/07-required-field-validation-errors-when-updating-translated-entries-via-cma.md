---
title: "Required Field Validation Errors When Updating Translated Entries via CMA"
description: "Required Field Validation Errors When Updating Translated Entries via CMA"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/07-required-field-validation-errors-when-updating-translated-entries-via-cma
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csceb98e4907cd2df2
---

# Required Field Validation Errors When Updating Translated Entries via CMA

A translation connector or API-based workflow fails to push updated translated entries back to Contentstack. The CMA returns required field validation errors even though all required fields appear to be populated.

**Root Cause**

The validation error typically occurs because the file field value in the update payload is structured incorrectly. The translation connector may be passing the full asset object from the original Get Entry response instead of the required simplified format (asset UID only). Other required field validation errors can occur when the payload is missing field keys that are required by the content type schema.

**Resolution**

1.  Review the update payload and verify that all required fields are included with valid values.
2.  For file fields specifically, ensure only the asset UID is passed: { "uid": "<asset\_uid>" }
3.  For reference fields, ensure only the entry UID and content type are included, not the full resolved reference object.
4.  Test the corrected payload against a single entry before running the full translation batch.

After correcting the payload structure, re-run the update for a single translated entry. If it succeeds without validation errors, apply the fix to the full translation workflow.
