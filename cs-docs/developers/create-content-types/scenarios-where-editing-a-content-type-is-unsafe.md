---
title: "[Set Up Your Project] - Scenarios Where Editing a Content Type Is Unsafe"
description: Scenarios where editing a content type is unsafe and may cause data loss or invalidate Field visibility rules.
url: https://www.contentstack.com/docs/headless-cms/scenarios-where-editing-a-content-type-is-unsafe
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Scenarios Where Editing a Content Type Is Unsafe

This page explains scenarios where editing a Contentstack content type (or field properties) is unsafe, including when changes can cause data loss or invalidate Field visibility rules. It is intended for developers and content modelers who manage content types and should be used before making schema changes in environments with existing entries and visibility rules.

## Scenarios Where Editing a Content Type Is Unsafe

[Editing a content type](./edit-a-content-type.md) or the [properties](./about-field-properties.md) of any [field](./about-fields.md) of the [content type](./about-content-types.md) may result in data loss or invalidate [Field visibility rules](./about-field-visibility-rules.md) if you have set any.

Let’s look at the properties that are not safe to edit while editing a content type.

## When Data Is Lost

While you edit a content type, you might end up losing data if you do the following:

- **Edit properties of a field**: If you change its datatype or mark the field as **Multiple**, the data of that field in all existing entries will be lost.
- **Delete a field**: If you delete an existing field from a content type, the data of that field will be lost in all the existing entries.

## When Field Visibility Rules Are Invalidated

If you have added specific [Field visibility rules](./about-field-visibility-rules.md) to your content type, and subsequently, you make changes to the [properties](./about-field-properties.md) of the fields (used in the rule), the rule may become invalid in the following cases:

- The operand or the target field is deleted or removed
- The operand field is marked as multiple
- The operand or the target field is moved to a group or a modular block
- The data type of the operand field is changed to a data type that is not supported by Field visibility rules
- Validations added to the field set as the target field. If you set the following validations by editing the properties of the field, the visibility rule will be invalidated:Add a date range (start and end date)
- Add min and max instances (in case of any multiple-type field)
- Add limit for Multiple Choices (in case of Select field)
- Any field marked as “Mandatory”
- Add min and max character length for any text field
- Add a min and max range for the number field
- Add any validation through Regular Expression (for example, starts with)
- Dimensions (image dimensions, etc) and extensions (.jpeg, png, etc) applied

## Common questions

### What kinds of content type edits can cause data loss?
Changing a field’s datatype, marking a field as Multiple, or deleting a field can result in data loss in existing entries.

### When can Field visibility rules become invalid?
Field visibility rules may become invalid if fields used in the rule are deleted, marked as multiple, moved into groups/modular blocks, changed to unsupported data types, or updated with certain validations.

### Should I avoid editing content types after entries exist?
This page highlights that some edits are unsafe once entries exist, especially changes that affect field structure or rules; review these scenarios before making changes.

### What should I check before changing field properties?
Check whether the field is used in Field visibility rules and whether the change involves datatype, Multiple settings, moving fields, or adding validations that can invalidate rules.