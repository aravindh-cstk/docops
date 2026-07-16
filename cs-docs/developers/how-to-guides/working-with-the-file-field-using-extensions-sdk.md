---
title: "[How-to Guides and Knowledgebase articles] - Working with the File Field Using Extensions SDK"
description: Working with the File Field Using Extensions SDK
url: https://www.contentstack.com/docs/developers/how-to-guides/working-with-the-file-field-using-extensions-sdk
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Working with the File Field Using Extensions SDK

This page explains how to use **File** as the field data type when creating a custom field extension using the Contentstack Extensions SDK. It is intended for developers building Contentstack extensions and should be used when you need your extension field to store file (asset) references in Contentstack.

## Working with the File Field Using Extensions SDK

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

The Extension SDK allows you to extend the functionality of Contentstack by enabling you to create a [Custom Fields](../create-custom-fields/about-custom-fields.md), [Custom Sidebar Extensions](../create-sidebar-extensions/about-sidebar-extensions.md), and [Dashboard Extensions](/docs/developers/create-dashboard-extensions/about-custom-dashboard-extensions).

While creating an extension in Contentstack, you can select **File** for the **Field data type** field. This ensures that the input data of the [field](../create-content-types/about-fields.md) to be saved in Contentstack is of type **file**.

In this document, we will learn how to use **File** as the Field data type while creating an Extension, custom field.

## Create an Extension with Field Type as File

Follow the steps given below to create a custom field extension:

In your [stack](../set-up-stack/about-stack.md), navigate to the “Settings” icon on the left navigation panel, and select **Extentions**.

- On the **Extensions** page, click on the **+ New Extension** button, and select **Create new**.![Working_with_the_File_Field_Using_Extensions_SDK_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte33725b1ce12b3e7/60b7be7fcf9889265dab7c36/Working_with_the_File_Field_Using_Extensions_SDK_1_highlighted.png)
- In the **Select Extension Type** window, select **Custom Field**.![Click on the Custom Field](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc903b95bdea7df35/61d88c378aabbf6426b751e0/Custom_Field_Card.png)
- On the **Create New Extension** page, enter values in the fields as given below:

**Title**: Provide a suitable title for your custom field. This title will be visible when you select the extension in the custom field in your [content type](../create-content-types/about-content-types.md).

- **Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select File.
- **Multiple**: You can leave this field unchecked or select it if your custom field will expect multiple values. In such a case, the field will save the input values in an array.
- **Hosting method**: Select either **External hosting** or **Hosted by Contentstack**. If you choose **Hosted by Contentstack**, you will have to provide the extension source code in the next field.  
  If you choose **External hosting**, then provide the URL where the code is hosted.****
- **Extension source code**: Specify the extension code here if you have selected **Hosted by Contentstack** in the above step.
- **Config Parameter**: Here specify the required configuration parameter for your extension.
- Once you have configured the extension, click on **Save** to save the settings.

## Saving Data Using File Type

In order to save data using file type, you need to pass the asset uid of your uploaded asset into the [setData()](https://github.com/contentstack/ui-extensions-sdk/blob/2.1.2/docs/ui-extensions-api-reference.md#Field+setData) method. The setData() method sets the data for the current field.

Let's see how we can use this method when we are dealing with only a **single** file.

When you write the extension code for your custom field, you can specify the method by using the following format: `extension.field.setData(“asset-uid”);`

In the above line of code, you need to specify the UID of the asset, an example is shown below:

```
extension.field.setData(“blt7d89318d346***”);
```

To set the data when you are using multiple files, you need to specify the UIDs of the assets by using the following format: `extension.field.setData([“asset-uid1”, “asset-uid2”, “asset-uid3”]);`

An example is shown below:

```
extension.field.setData(["bltd7618c9cba201***", "blt4edda9a4d9605***", "bltecb320669fefb***"]);
```

******Note**: You can use the management token for uploading assets through extensions. For example, you can upload the asset through the management token, get a reference to asset UID, and then call the setData() method.

This is how you can set the value of the files (assets) by using the setData() method while using the Extensions SDK.

## Common questions

### Can I store an uploaded file directly in the field value?

No. In order to save data using file type, you need to pass the asset uid of your uploaded asset into the setData() method.

### How do I set a single file value for a File field type extension?

Use the following format: `extension.field.setData(“asset-uid”);`

### How do I set multiple file values for a File field type extension?

Use the following format: `extension.field.setData([“asset-uid1”, “asset-uid2”, “asset-uid3”]);`

### Can I upload assets through extensions?

******Note**: You can use the management token for uploading assets through extensions. For example, you can upload the asset through the management token, get a reference to asset UID, and then call the setData() method.