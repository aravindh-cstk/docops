---
title: "Changing a Field Data Type - Correct Process to Avoid Data Loss"
description: "Changing a Field Data Type - Correct Process to Avoid Data Loss"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/10-changing-a-field-data-type-correct-process-to-avoid-data-loss
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csae75826083b35b76
---

# Changing a Field Data Type - Correct Process to Avoid Data Loss

A customer wants to change an existing field's data type (for example, from Number to String). It is unclear whether this can be done directly and what the impact on existing content will be.

**Root Cause**

Directly changing a field's data type in Contentstack is not supported and will result in irreversible data loss. The existing data stored in the original field type cannot be automatically converted to the new type and will be permanently deleted.

**Resolution**

1.  Create a new field with the desired data type (for example, a new String field).
2.  Write a script using the CMA to fetch all entries, read the value from the original Number field, and write it to the new String field.
3.  Verify that all entries have been migrated correctly by spot-checking a sample of entries.
4.  Once migration is confirmed, deprecate the original field (optionally remove it from the UI without deleting it immediately to allow a rollback window).
5.  After full validation, delete the original field if it is no longer needed

After completing the migration script and verifying entry data, confirm that the new String field contains the expected values for all entries before removing the original field.
