---
title: "[Extensions] - CSV/XLSX"
description: CSV/XLSX custom field extension for fetching content from CSV or XLSX files and displaying it in a field in Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-custom-fields/csv-xlsx
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-26
---

# [Extensions] - CSV/XLSX

This page explains how to create and use the CSV/XLSX custom field extension in Contentstack to import data from CSV or XLSX files into a custom field within a content type, intended for developers configuring stacks and content types and for teams who need to import spreadsheet data while creating entries.

## CSV/XLSX

The CSV/XLSX [custom field](../create-content-types/about-fields.md) extension allows you to fetch content from a CSV or an XLSX file and displays it into a field in your content type of your [stack](../set-up-stack/about-stack.md). Thus, while creating [entries](../../content-managers/author-content/about-entries.md), you can have a CSV or an XLSX file imported as the input value for the field.

This step-by-step guide explains how to create a CSV/XLSX custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Add the CSV/XLSX custom field extension to your stack](#add-the-csvxlsx-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites

- [Contentstack account](https://app.contentstack.com/#!/login)
- A CSV file with data in it

## Add the CSV/XLSX Custom Field Extension to your Stack

Log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions** page, click on the **+ New Extension** button and then on **Create new** as shown below:![CSV_XLSX_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltef0467351437910e/60bd84463fb413770446e771/CSV_XLSX_1_Highlighted.png)
- On the **Select Extension Type** screen, select **Custom Field**.![CSV_XLSX_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt37de485c227d536f/60bd8452971f487708eb154a/CSV_XLSX_2_highlighted.png)
- On the **Create New Extension** page, enter details in the fields as given below:**Title**: Provide a suitable title. For example, “CSV.”
- **Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. Select **JSON** in this case.
- **Multiple**: Keep this unchecked.
- **Hosting method**: The hosting method will be set to **Hosted By Contentstack.**
- **Extension Source Code**: In this field, you need to enter the extension code. To get the code, contact our [Support](mailto:support@contentstack.com) team.
Once it is downloaded, copy the code from the `index.html` file located in the root folder and paste it in the **Extension source code** field.**
**
- **Config Parameter**: Enter the following configuration details as the extension's config parameter:

```
{
    "columns_limit": ,
    "rows_limit":
}
```

The integer value that you enter in the above config will put a limit to the number of rows and columns that the imported file will display.
- Click on **Save**. This creates your custom field.

Now, let's understand how you can start using this custom field in your content type.

## Use Your Custom Field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “CSV” field that you created and set the other properties. You can add other fields as per requirements.![CSV_XLSX_3_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc3fdd0224eba82ae/60bd845cfbd63412d413313c/CSV_XLSX_3_highlighted.png)
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and click on the **Select CSV/XLSX File To Import **button.![CSV_XLSX_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf507223e5b8c24b7/60bd84712d47ce78c28ac083/CSV_XLSX_4_highlighted.png)
- It will then prompt you to choose the CSV or the XLSX file and import it to your field. Once you add your file, this is how it appears in your entry:![CSV_XLSX_5_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4d5c98fbd08a5c96/60bd847e2d47ce78c28ac087/CSV_XLSX_5_no_highlight.png)
- You can add or delete rows by clicking on the **+** or the "trash" icon respectively.

**Note**: The max file size that can be imported in the field extension is 10 KB. Refer to our [Extension Limitation](./limitations-of-custom-fields.md) doc for more details.

## Common questions

### What data type should be selected for the CSV/XLSX custom field extension?
Select **JSON** for **Field data type**.

### Where do I get the extension source code?
To get the code, contact our [Support](mailto:support@contentstack.com) team.

### What do `columns_limit` and `rows_limit` control?
The integer value that you enter in the above config will put a limit to the number of rows and columns that the imported file will display.

### What is the maximum file size supported by this field extension?
The max file size that can be imported in the field extension is 10 KB.

<!-- filename: extensions-csv-xlsx.md -->