---
title: "[Extensions] - Table"
description: Documentation for creating and using the Table custom field extension in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/table
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy
last_updated: 2026-03-25
---

# [Extensions] - Table

This page explains how to create and use the legacy **Table** custom field extension in Contentstack. It is intended for developers configuring content types and extensions, and should be used when you need to add a table field to entries via an extension (or when comparing with the newer Marketplace App approach).

## Note

**Note**: This documentation uses the legacy approach with extensions. We have launched Table as a Marketplace App. For more information on Table, please refer to the [Table App Installation Guide](../marketplace-apps/table.md).

The Table extension lets you add a table as a field in your [content type](../create-content-types/about-content-types.md). The [content managers](../invite-users-and-assign-roles/types-of-roles.md#content-manager) can then add values to the table, while creating [entries](../../content-managers/author-content/about-entries.md). Here's how it works on the entry page:

This step-by-step guide explains how to create a **Table** custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Add the “Table” custom field extension to your stack](#add-the-table-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Add the “Table” custom field extension to your stack

To add the Table custom field extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.![Table_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4995d3b8feea0ccb/60c208d2f77af428924ba848/Table_1_Highlighted.png)
- In the **Select Extension Type** window, select **Custom Field**.![Table_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt441c0b49844fef82/60c208e7f33fd90fa1ed1b3e/Table_2_no_highlight.png)
- On the **Create New Extension **page, enter values in the fields as given below:
          **Title ***(required)*: Provide a suitable title, for example “Table,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
- **Field Data Type** *(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting Method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code ***(required)*: Specify the extension code here. To get the code, contact our [Support](mailto:support@contentstack.com) team.
The support team will provide you with the source code (src file). Copy the code from the `index.html` file located in the root folder and paste it in the **Extension source code** field.
- **Config Parameter**: Enter the names of the columns, and set the row and column (max column limit is 50) limits. Based on the column names provided, your table will be designed accordingly:
```
{
    "columns": [
        "Column_01",
        "Column_02",
        "Column_03"
    ],
    "rowsLimit": 10,
    "columnsLimit": 8
}

```
- Save the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Table” field that you created and set the other properties. You can add other fields as per requirements.![Table_3_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd9f5c39ac8fcf60c/60c208dd85c4c2118e31794f/Table_3_Highlighted.png)
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Table **field in action.![Table_4_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt444f9ca24747cbb2/60c208f1f33fd90fa1ed1b48/Table_4_no_highlight.png)

## Common questions

1. **Is this page for the Marketplace App or the legacy extension approach?**  
   This documentation uses the legacy approach with extensions, and it also points to the [Table App Installation Guide](../marketplace-apps/table.md) for the Marketplace App.

2. **What data type should be selected for the Table custom field extension?**  
   Select **JSON** for **Field Data Type**.

3. **Where do I get the extension source code?**  
   To get the code, contact the [Support](mailto:support@contentstack.com) team.

4. **What can I configure in the Config Parameter?**  
   You can enter the names of the columns, and set the row and column limits (max column limit is 50).