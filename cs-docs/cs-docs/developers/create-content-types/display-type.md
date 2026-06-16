---
title: "[Set Up Your Project] - Display Type"
description: Documentation for the Display Type parameter for the Select field when setting up your project content types.
url: https://www.contentstack.com/docs/developers/create-content-types/display-type
product: Developer Docs
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Display Type

This page explains the **Display Type** parameter for the **Select** field when creating or configuring content types. It is intended for developers (especially users with the “Developer” role) who need to control how select options are rendered in the entry UI, and should be used when defining or updating Select field settings.

## Display Type

The **Display Type** parameter is applicable to the **Select **field. This parameter lets the users assigned “[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer)” roles to define how to render the list of choices on the entry page. You can choose among the **Radio **button, **Dropdown **list, and **Checkbox**.

**Note**: These options will vary depending on how you set up the **Select **field.

If the **Selection Type** is set to **Single Choice**, the available options under the **Display Type** parameter will be the **Radio **button and **Dropdown**.

If the **Selection Type** is set to **Multiple Choices**, the available options under the **Display Type** parameter will be **Checkbox **and **Dropdown**.

******Additional Resources**: To set this property to the **Select** field when [creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the JSON payload of the [Select](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select) field and the [Field parameters](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#field-parameters-explained) section.

Changing an existing field property may result in loss of data. To avoid such, check out our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide before you go ahead.

## Common questions

### Who can configure the Display Type parameter?
Users assigned “[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer)” roles can define how to render the list of choices on the entry page.

### What Display Type options are available for Single Choice selection?
If the **Selection Type** is set to **Single Choice**, the available options under the **Display Type** parameter will be the **Radio **button and **Dropdown**.

### What Display Type options are available for Multiple Choices selection?
If the **Selection Type** is set to **Multiple Choices**, the available options under the **Display Type** parameter will be **Checkbox **and **Dropdown**.

### Where can I find API details to set Display Type for a Select field?
Refer to the JSON payload of the [Select](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select) field and the [Field parameters](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#field-parameters-explained) section when [creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type).