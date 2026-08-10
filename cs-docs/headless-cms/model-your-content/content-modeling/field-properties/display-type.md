---
title: "Display Type"
description: "Display Type of your fields"
url: /headless-cms/display-type
---

# Display Type

## Display Type

The **Display Type** parameter is applicable to the **Select** field. This parameter lets the users assigned “[Developer](/docs/headless-cms/types-of-roles#developer)” roles to define how to render the list of choices on the entry page. You can choose among the **Radio** button, **Dropdown** list, and **Checkbox**.

**Note:** These options will vary depending on how you set up the **Select** field.

If the **Selection Type** is set to **Single Choice**, the available options under the **Display Type** parameter will be the **Radio** button and **Dropdown**.

If the **Selection Type** is set to **Multiple Choices**, the available options under the **Display Type** parameter will be **Checkbox** and **Dropdown**.

![display-type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9439d575dd93927d/65ceed28a906c8a324102015/display-type.png)

**Additional Resource:** To set this property to the **Select** field when [creating your content type via an API request](/docs/developers/apis/content-management-api/content-types#create-a-content-type), refer to the JSON payload of the [Select](/docs/headless-cms/json-schema-for-creating-a-content-type#select) field and the [Field parameters](/docs/headless-cms/json-schema-for-creating-a-content-type#field-parameters-explained) section.  
  
Changing an existing field property may result in loss of data. To avoid such, check out our [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide before you go ahead.
