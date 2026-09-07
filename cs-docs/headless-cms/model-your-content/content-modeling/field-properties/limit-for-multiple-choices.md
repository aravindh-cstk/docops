---
title: "Limit for Multiple Choices"
description: "Limit for Multiple Choices of your fields"
url: /headless-cms/limit-for-multiple-choices
uid: bltf5c7d2f57a68d582
---

# Limit for Multiple Choices

## Limit for Multiple Choices

The **Limit for Multiple Choices** property is associated with the [**Select**](/docs/headless-cms/select) field. It lets you set a selection limit on the choices.

While setting up the **Select** field in your [content type](/docs/headless-cms/about-content-types), if the **Selection Type** is set to **Multiple Choices**, then only you can set the minimum and/or maximum number of selections.

**Note:** This property is only available for these **Display Type**: **Checkbox** and **Dropdown**

For example, if you want the user to select a minimum of two items and a maximum of five items, you can set this limit through this property, as shown in the image below:

![limit-for-multiple-choices.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95ec9937a31f4da7/65ceec70915aea23a93355f6/limit-for-multiple-choices.png)

**Additional Resource:** To set this property to the **Select** field [when creating your content type via an API request](/docs/developers/apis/content-management-api/content-types#create-a-content-type), refer to the JSON payload of the [Select](/docs/headless-cms/json-schema-for-creating-a-content-type#select) field.  

Changing an existing field property may result in loss of data. To avoid data loss, make sure you go through our [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide before you go ahead.
