---
title: "[Set Up Your Project] - Selection Type"
description: Documentation for the Selection Type property of the Select field, including single and multiple choice behavior and rendering options.
url: https://www.contentstack.com/docs/headless-cms/selection-type
product: Documentation
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Selection Type

This page explains the **Selection Type** property for the **Select** field, who it applies to (developers configuring content types), and when to use it (when defining whether a Select field should allow single or multiple selections and how those choices are rendered).

## Selection Type

The **Selection Type** property of the [**Select**](/docs/developers/create-content-types/select) field lets you define if the field has **Single Choice** or **Multiple Choices**.
- **Single Choice**: This will let the user select only one option from the given choices on the [entry](/docs/content-managers/working-with-entries/about-entries) page. In this case, you can render the choices in either **Radio **or **Dropdown **options.
- **Multiple Choices**: This will let the user select multiple options from the given choices on the entry page. In this case, you can render the choices in either **Checkbox **or **Dropdown **options. For this option, you can set the minimum and the maximum number of choices that the user can select.

**Additional Resources**:
- To add this property to the **Select** field when [creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the JSON payload of the [Select](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select) field.
- Making changes in existing field properties may result in data loss. To prevent this, make sure you go through our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide before you go ahead.

## Common questions

**Q: What is the Selection Type property used for?**  
A: It lets you define if the [**Select**](/docs/developers/create-content-types/select) field has **Single Choice** or **Multiple Choices**.

**Q: What rendering options are available for Single Choice?**  
A: You can render the choices in either **Radio **or **Dropdown **options.

**Q: What rendering options are available for Multiple Choices?**  
A: You can render the choices in either **Checkbox **or **Dropdown **options, and you can set the minimum and the maximum number of choices that the user can select.

**Q: Where can I find the API JSON payload reference for this property?**  
A: Refer to the JSON payload of the [Select](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select) field when [creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type).