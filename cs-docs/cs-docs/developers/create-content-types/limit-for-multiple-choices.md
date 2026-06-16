---
title: "[Set Up Your Project] - Limit for Multiple Choices"
description: Documentation for the Limit for Multiple Choices property for the Select field when configuring content types.
url: https://www.contentstack.com/docs/developers/create-content-types/limit-for-multiple-choices
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Limit for Multiple Choices

This page explains the **Limit for Multiple Choices** property for the **Select** field in a content type. Developers configuring content types should read this when they need to enforce minimum and/or maximum selections for fields that allow multiple choices.

## Limit for Multiple Choices

The **Limit for Multiple Choices** property is associated with the [**Select**](/docs/developers/create-content-types/select) field. It lets you set a selection limit on the choices.

While setting up the **Select **field in your [content type](/docs/developers/create-content-types/about-content-types), if the **Selection Type** is set to **Multiple Choices**, then only you can set the minimum and/or maximum number of selections.

**Note**: This property is only available for these **Display Type**: **Checkbox **and **Dropdown**

For example, if you want the user to select a minimum of two items and a maximum of five items, you can set this limit through this property, as shown in the image below:

**Additional Resources**: To set this property to the **Select** field [when creating your content type via an API request](/docs/developers/apis/content-management-api#create-a-content-type), refer to the JSON payload of the [Select](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#select) field.

Changing an existing field property may result in loss of data. To avoid data loss, make sure you go through our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide before you go ahead.

## Common questions

**Q: When can I set the Limit for Multiple Choices property?**  
A: While setting up the **Select** field in your content type, when the **Selection Type** is set to **Multiple Choices**.

**Q: Which display types support this property?**  
A: **Checkbox** and **Dropdown**.

**Q: Can I set this property via API when creating a content type?**  
A: Yes. Refer to the JSON payload of the **Select** field when creating your content type via an API request.

**Q: What should I consider before changing this field property on an existing content type?**  
A: Changing an existing field property may result in loss of data; review the **Content Type Change Management** guide before proceeding.