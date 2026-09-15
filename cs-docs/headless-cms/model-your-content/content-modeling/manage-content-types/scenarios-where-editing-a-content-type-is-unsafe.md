---
title: "Scenarios Where Editing a Content Type Is Unsafe"
description: "There are certain situations where editing a content type can cause some problems. Let’s look at the properties that are not safe and might cause data loss."
url: /headless-cms/scenarios-where-editing-a-content-type-is-unsafe
uid: blt9ab619ad01ac412e
---

# Scenarios Where Editing a Content Type Is Unsafe

## Scenarios Where Editing a Content Type Is Unsafe

[Editing a content type](https://www.contentstack.com/docs/headless-cms/edit-a-content-type) or the [properties](https://www.contentstack.com/docs/headless-cms/about-field-properties) of any [field](https://www.contentstack.com/docs/headless-cms/about-fields) of the [content type](https://www.contentstack.com/docs/headless-cms/about-content-types) may result in data loss or invalidate [Field visibility rules](https://www.contentstack.com/docs/headless-cms/about-field-visibility-rules) if you have set any.

Let’s look at the properties that are not safe to edit while editing a content type.

## When Data Is Lost

While you edit a content type, you might end up losing data if you do the following:

-   **Edit properties of a field**: If you change its datatype or mark the field as **Multiple**, the data of that field in all existing entries will be lost.
-   **Delete a field**: If you delete an existing field from a content type, the data of that field will be lost in all the existing entries.

## When Field Visibility Rules Are Invalidated

If you have added specific [Field visibility rules](https://www.contentstack.com/docs/headless-cms/about-field-visibility-rules/) to your content type, and subsequently, you make changes to the [properties](https://www.contentstack.com/docs/headless-cms/about-field-properties/) of the fields (used in the rule), the rule may become invalid in the following cases:

-   The operand or the target field is deleted or removed
-   The operand field is marked as multiple
-   The operand or the target field is moved to a group or a modular block
-   The data type of the operand field is changed to a data type that is not supported by Field visibility rules
-   Validations added to the field set as the target field. If you set the following validations by editing the properties of the field, the visibility rule will be invalidated:
    -   Add a date range (start and end date)
    -   Add min and max instances (in case of any multiple-type field)
    -   Add limit for Multiple Choices (in case of Select field)
    -   Any field marked as “Mandatory”
    -   Add min and max character length for any text field
    -   Add a min and max range for the number field
    -   Add any validation through Regular Expression (for example, starts with)
    -   Dimensions (image dimensions, etc) and extensions (.jpeg, png, etc) applied
