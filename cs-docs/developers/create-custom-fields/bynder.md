---
title: "[Extensions] - Bynder"
description: Documentation for creating and using a Bynder custom field extension in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/bynder
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Bynder

This page explains how to create and configure the legacy Bynder custom field extension in Contentstack, then use it in a content type and entries. It is intended for developers setting up custom fields and should be used when integrating Bynder via extensions (legacy approach) rather than the Marketplace App.

## Bynder

**Note**: This documentation uses the legacy approach with extensions. We have launched Bynder as a Marketplace App. For more information on Bynder, please refer to the [Bynder App Installation Guide](../marketplace-apps/bynder.md).

The Bynder custom field extension allows you to fetch images from Bynder and display them into a [field](../create-content-types/about-fields.md) in your [content type](../create-content-types/about-content-types.md). Subsequently, while creating [entries](../../content-managers/author-content/about-entries.md), you can select one or more images as the input value for the field.

This step-by-step guide explains how to create a Bynder custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Create a Bynder account](#create-a-bynder-account)
- [Add the Bynder custom field extension to your stack](#add-the-bynder-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites
- [Bynder account](https://www.bynder.com/en/) and a domain
- [Contentstack account](https://app.contentstack.com/#!/login)

## Create a Bynder Account

To use this extension, you need to create an account in Bynder. To do that, follow the steps given below:

Go to [https://www.bynder.com/en/](https://www.bynder.com/en/) and create a new account. It is recommended to use the partnership account by purchasing the license. The free trial account won't work as expected.
- You will receive a confirmation email, click on the provided link and change your password.

You'll then get a URL. Make a note of it as you will need it when you set up the extension in Contentstack.

**Additional Resource**: If you want a detailed explanation to get started with your Bynder account, refer to the [Getting Started with Bynder](https://help.bynder.com/getting-started/Log-in-to-Bynder.htm) documentation.

Now, let's move ahead and set up our extension.

## Add the Bynder Custom Field Extension to your Stack

To add the Bynder custom field to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md), and click on the “Settings” icon on the left navigation panel
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions** page, click on the **+ New Extension** button and then on **Create new**:![Bynder_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5c18055d0a2e4652/60c214b2f33fd90fa1ed1b9c/Bynder_1_Highlighted.png)
- In the **Select Extension Type** window, select **Custom Field**.![Bynder_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta822ee5da85ec24d/60c214cc324cea0e69783679/Bynder_2_no_highlight.png)
- On the **Create New Extension** page, enter values in the fields as given below
  - **Title ***(required)*: Provide a suitable title, for example “Bynder,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
  - **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
  - **Multiple ***(optional)*: Leave this field unchecked.
  - **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
  - **Extension Source Code**: *(required)*: Specify the extension code here. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.

The support team will provide you with the source code (src file). Copy the code from the `index.html` file located in the root folder and paste it in the **Extension source code** field.**Note**: In the downloaded code, inside the **source** folder, there's a **bynder-widget** HTML file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload asset](../../content-managers/author-content/create-upload-assets.md) article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.
- **Config Parameter ***(required)*: Enter the following configuration details as the extension's config parameter:
```
{
    "widgetUrl": ">",
    "defaultDomain": ">"
}
```
The value for widgetUrl is the URL of the **bynder-widget** HTML file which you just uploaded as an asset. The value for defaultDomain is the same URL that you generated after the creation of your account in Bynder.****
- **Save** the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use Your Custom Field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Bynder” field that you created and set the other properties. You can add other fields as per requirements.![Bynder_3_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2146ee0e3b52c426/60c214bf2d47ce78c28ad778/Bynder_3_Highlighted.png)
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Bynder **field in action.
- Click on **Choose Assets**. If you are still logged into Bynder, it will open inside your entry page, from where you can select multiple images and insert them in your entry as shown below:![Bynder_5_no_highlight.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7ed7bab54d632eda/6140df5fd4224e7daaed05d2/Bynder_5_no_highlight.gif)

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.

## Common questions

**Q: Is this guide for the Marketplace App or the legacy extension approach?**  
A: **Note**: This documentation uses the legacy approach with extensions. We have launched Bynder as a Marketplace App. For more information on Bynder, please refer to the [Bynder App Installation Guide](../marketplace-apps/bynder.md).

**Q: What data type should be selected for the Bynder custom field extension?**  
A: Select **JSON**.

**Q: Where do I get the `widgetUrl` value used in the config parameter?**  
A: The value for widgetUrl is the URL of the **bynder-widget** HTML file which you just uploaded as an asset.

**Q: Is there a limit to how many items can be selected in the Bynder field?**  
A: **Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.