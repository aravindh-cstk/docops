---
title: "Unique Validation Not Enforced Inside Multiple Group Fields"
description: "Unique Validation Not Enforced Inside Multiple Group Fields"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/25-unique-validation-not-enforced-inside-multiple-group-fields
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6b89c2d8986d367d
---

# Unique Validation Not Enforced Inside Multiple Group Fields

A Group field marked as Multiple has fields inside it (such as key and value) with the Unique property enabled. Despite the unique constraint, duplicate key/value pairs can still be saved within the same entry.

**Root Cause**

The Unique validation for fields within a Multiple Group operates at the entry level, not at the group-item level. This means Contentstack checks whether the value is unique across all entries in the content type - it does not check whether the value appears more than once within the multiple group instances inside a single entry. Duplicate items within the same entry’s group instances are therefore permitted by design.

**Resolution**

Native uniqueness enforcement within a Multiple Group’s items is not supported. Alternatives:

1.  Implement client-side validation in the editorial workflow or a UI extension that checks for duplicate items within the group before saving.
2.  Use a custom App SDK extension on the field to perform real-time duplicate detection within the group instances as editors add items.
3.  If unique group items are a strict business requirement, consider restructuring the data model: use a JSON custom field or a modular block where the uniqueness can be enforced programmatically via a webhook or automation.

After implementing the client-side or extension-based validation, confirm that editors receive a clear message when attempting to save duplicate group items.
