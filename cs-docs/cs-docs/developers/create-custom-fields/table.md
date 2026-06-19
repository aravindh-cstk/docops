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

**Note**: This documentation uses the legacy approach with extensions. We have launched Table as a Marketplace App. For more information on Table, please refer to the [Table App Installation Guide](/docs/developers/marketplace-apps/table).

The Table extension lets you add a table as a field in your [content type](/docs/developers/create-content-types/about-content-types). The [content managers](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) can then add values to the table, while creating [entries](/docs/content-managers/working-with-entries/about-entries). Here's how it works on the entry page:

This step-by-step guide explains how to create a **Table** custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Add the “Table” custom field extension to your stack](#add-the-table-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Add the “Table” custom field extension to your stack

To add the Table custom field extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps

Go to your [stack](/docs/developers/set-up-stack/about-stack) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:
          **Title ***(required)*: Provide a suitable title, for example “Table,” for your custom field. This title will be visible when you select the extension in the [**custom**](/docs/developers/create-content-types/custom) field in your content type.
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

[Create a content type](/docs/developers/create-content-types/create-a-content-type) and add the [**Custom**](/docs/developers/create-content-types/custom) field to it.
- Under **Select Extension**, select the “Table” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see the **Table **field in action.

## Common questions

1. **Is this page for the Marketplace App or the legacy extension approach?**  
   This documentation uses the legacy approach with extensions, and it also points to the [Table App Installation Guide](/docs/developers/marketplace-apps/table) for the Marketplace App.

2. **What data type should be selected for the Table custom field extension?**  
   Select **JSON** for **Field Data Type**.

3. **Where do I get the extension source code?**  
   To get the code, contact the [Support](mailto:support@contentstack.com) team.

4. **What can I configure in the Config Parameter?**  
   You can enter the names of the columns, and set the row and column limits (max column limit is 50).