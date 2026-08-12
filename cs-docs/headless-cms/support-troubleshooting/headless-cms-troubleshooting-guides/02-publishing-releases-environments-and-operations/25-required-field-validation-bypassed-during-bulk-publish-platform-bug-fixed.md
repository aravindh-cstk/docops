---
title: "Required Field Validation Bypassed During Bulk Publish - Platform Bug Fixed"
description: "Required Field Validation Bypassed During Bulk Publish - Platform Bug Fixed"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/25-required-field-validation-bypassed-during-bulk-publish-platform-bug-fixed
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs49a5050e220c4bde
---

# Required Field Validation Bypassed During Bulk Publish - Platform Bug Fixed

Entries with unpopulated required fields (specifically images and single-line text fields) are successfully published via bulk publish operations. The required field validation that normally blocks individual entry publish does not apply during bulk publish.

**Root Cause**

This was a platform-level bug where the required field validation was not being consistently enforced across both individual and bulk publish workflows. Entries that would correctly fail validation when published individually were bypassing the same validation during bulk publish operations.

**Resolution**

A platform fix has been deployed. Required field validation is now consistently enforced across both individual entry publish and bulk publish workflows. No configuration change is required.

1.  If entries with missing required fields were successfully published before the fix, review and re-publish affected entries after populating the required fields to ensure the published content is valid.
2.  To audit which entries were published with missing required fields, query the CDA for the affected content type and check for entries where the required field is null or empty.

After the platform fix, attempt a bulk publish with an entry that has an empty required field and confirm the operation correctly fails with a validation error.
