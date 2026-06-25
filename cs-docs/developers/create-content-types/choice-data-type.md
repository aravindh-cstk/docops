---
title: "[Set Up Your Project] - Choice Data Type"
description: Documentation for the Choice Data Type property of the Select field, including available options, warnings, and related resources.
url: https://www.contentstack.com/docs/headless-cms/choice-data-type
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Choice Data Type

This page explains the **Choice Data Type** property for the **Select** field, including the available data type options, important warnings about changing the property, and links to related API and schema resources. It is intended for developers configuring content types and field properties, especially when defining choices or creating content types via API.

## Choice Data Type

The **Choice Data Type** property of the [**Select**](./select.md) field lets you specify the format for the [**Add Choice**](./add-choices.md) property.

Under this property, you have the following options:
- **Text**: Allows you to add only text in the choices list
- **Number**: Allows you to add only integers in the choices list

**Warning**: If you change the data type after entering the choices, the values added as choices may be lost.

**Additional Resources**: If you want to set this property to the **Select** field when [creating your content type via an API request](../../../api-docs/api-detail/content-management-api.md#create-a-content-type), refer to the JSON payload of the [Select](./json-schema-for-creating-a-content-type.md#select) field and the [Field parameters](./json-schema-for-creating-a-content-type.md#field-parameters-explained) section.

Changing an existing field property may result in loss of data. To avoid such, check out our [Content Type Change Management](../content-modeling/content-type-change-management.md) guide before you go ahead.

## Common questions

### What does the Choice Data Type property control?
It lets you specify the format for the **Add Choice** property in the **Select** field.

### What are the available options for Choice Data Type?
- **Text**
- **Number**

### What happens if I change the data type after adding choices?
**Warning**: If you change the data type after entering the choices, the values added as choices may be lost.

### Where can I find the JSON payload details for setting this via API?
Refer to the JSON payload of the [Select](./json-schema-for-creating-a-content-type.md#select) field and the [Field parameters](./json-schema-for-creating-a-content-type.md#field-parameters-explained) section.