---
title: Set Up Your Project - Number
description: Documentation for the Number field in content types, including its purpose, modifiable properties, and related resources.
url: https://www.contentstack.com/docs/headless-cms/number
product: Contentstack
doc_type: field-reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# Set Up Your Project - Number

This page explains the **Number** field used in content types, including what it’s for, which properties you can configure, and where it appears in entries. It’s intended for developers setting up or modifying content types and should be used when modeling numeric data fields.

## Number

The **Number **field enables users to enter numeric data, for example, phone number or ZIP code.

This field possesses certain [properties](/docs/developers/create-content-types/about-field-properties) that you can change any time as per your needs. The properties that can be modified are “[Display Name](/docs/developers/create-content-types/display-name),” “[Unique ID](/docs/developers/create-content-types/unique-id),” “[Placeholder Value](/docs/developers/create-content-types/placeholder-value),” “[Instruction Value](/docs/developers/create-content-types/instruction-value),” “[Help Text](/docs/developers/create-content-types/help-text),” “Range” “[Default Value](/docs/developers/create-content-types/default-value),” “[Mandatory](/docs/developers/create-content-types/mandatory),” “[Multiple](/docs/developers/create-content-types/multiple),” and “[Non-localizable](/docs/developers/create-content-types/non-localizable).”

After you add this field in [content type](/docs/developers/create-content-types/about-content-types), you will see it on your [entry](/docs/content-managers/working-with-entries/about-entries) page as shown in the example below. The **Customer Number** entry is the **Number** field content type.

**Additional Resources**:
- If you want to hide/show a field when certain conditions are met, you can use [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules).
- To add this field to the content type using our [CMA request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the [JSON payload of the Number](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#number) field.
- You can check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide to learn how you can map your webpage’s layout with your Content Type.
- Editing any current field in existing Content Type might result in data loss. To avoid such, make sure to check out the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.

## Common questions

### What kind of data should I store in a Number field?
Use the **Number **field to enter numeric data, for example, phone number or ZIP code.

### Which properties of the Number field can I change later?
You can modify the field’s [properties](/docs/developers/create-content-types/about-field-properties) such as “[Display Name](/docs/developers/create-content-types/display-name),” “[Unique ID](/docs/developers/create-content-types/unique-id),” “[Placeholder Value](/docs/developers/create-content-types/placeholder-value),” “[Instruction Value](/docs/developers/create-content-types/instruction-value),” “[Help Text](/docs/developers/create-content-types/help-text),” “Range” “[Default Value](/docs/developers/create-content-types/default-value),” “[Mandatory](/docs/developers/create-content-types/mandatory),” “[Multiple](/docs/developers/create-content-types/multiple),” and “[Non-localizable](/docs/developers/create-content-types/non-localizable).”

### How do I add a Number field via API?
To add this field to the content type using our [CMA request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the [JSON payload of the Number](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#number) field.

### Where can I learn about managing changes to content types safely?
Editing any current field in existing Content Type might result in data loss. To avoid such, make sure to check out the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.