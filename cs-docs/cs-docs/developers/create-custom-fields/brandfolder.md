---
title: "[Extensions] - Brandfolder"
description: Create a Brandfolder custom field extension for Contentstack to fetch and select Brandfolder assets in entries.
url: https://www.contentstack.com/docs/developers/create-custom-fields/brandfolder
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Brandfolder

This page explains how to create and configure a Brandfolder custom field extension in Contentstack (legacy extensions approach), so developers and content managers can fetch Brandfolder assets and select them within entries when working with content types.

Brandfolder

**Note**: This documentation uses the legacy approach with extensions. We have launched Brandfolder as a Marketplace App. For more information on Brandfolder, please refer to the [Brandfolder App Installation Guide](/docs/developers/marketplace-apps/brandfolder).

Brandfolder is a popular Digital Asset Management platform that offers several features to help marketing, branding, and creative teams to streamline their workflow and make it easier.

Along with providing storage for your digital assets, Brandfolder helps in organizing, manipulating, analyzing, and distributing the company's important digital collateral.

With its flexible architecture, it is possible to add a Brandfolder [custom field](/docs/developers/create-custom-fields/about-custom-fields) extension to your [stack](/docs/developers/set-up-stack/about-stack) that allows you to fetch [assets](/docs/content-managers/working-with-assets/about-assets) from Brandfolder and display them into a field in your [content type](/docs/developers/create-content-types/about-content-types). Subsequently, while creating [entries](/docs/content-managers/working-with-entries/about-entries), you can select one or more assets as the input value for the field.

This step-by-step guide explains how to create a Brandfolder custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Create a Brandfolder account](#create-a-brandfolder-account)
- [Add the Brandfolder custom field extension to your stack](#add-the-brandfolder-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites
- [Brandfolder](https://brandfolder.com/) account
- [Contentstack Account](https://app.contentstack.com/#!/login)

## Create a Brandfolder Account

To use this extension, you need to create an account in Brandfolder. To do that, follow the steps given below:

Visit the [Brandfolder](https://brandfolder.com/) official website and create a new account. It is recommended to use the partnership account by purchasing the license.
- The free trial account won't work as expected. View the [plans](https://brandfolder.com/plans) offered by Brandfolder, signup with them, and get started.
- Once your account is created, you need access to your Brandfolder API key. We need this API key when we set up the extension in the next step. To get the API key, click on your username and select **My Profile** as shown below:
- Then, select **Integrations** from the left navigation panel as shown below:
- Copy the API key and keep it safe, we will use it in our next step.

Now, let's move ahead and set up our extension.

## Add the Brandfolder Custom Field Extension to your Stack

Go to your [stack](/docs/developers/set-up-stack/about-stack) and click on the “Settings” icon on the left navigation panel
- Select **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions** page, click on the **+ New Extension** button and then on **Create new** as shown below. Alternatively, you can click on the **+ New Extension** link.
- On the **Select Extension Type** screen, select **Custom Field**.
- On the **Create New Extension** page, enter details in the fields as given below:

  **Title**: Provide a suitable title. For example, Brandfolder.  
  - **Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. Select JSON in this case.
  - **Multiple**: Keep this unchecked.
  - **Hosting method**: The hosting method will be set to "Hosted By Contentstack." This option allows the source code for the custom field to be displayed in the "Extension Source Code" field.
  - **Extension source code**: Specify the extension code here. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.

The support team will provide you with the source code. Copy the code from the **index.html** file located in the root folder and paste it in the Extension source code field.

**Note**: In the downloaded code, inside the **source** folder, there's a **brandfolder** HTML file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload asset](/docs/content-managers/working-with-assets/create-upload-assets) article. After uploading the file, you'll get a URL in the [asset details](/docs/content-managers/working-with-assets/create-upload-assets#asset-details) section, make note of this URL.
- **Config parameter**: Enter the following configuration details as the extension's config parameter:

```
{
    "widgetUrl":  ">",
    "apiKey": ">",
    "popUpWindow":  {
    "height": 650,
    "width": 500,
    "left": 500,
    "top": 100
    }
}
```

The value for widgetURL is the URL of the brandfolder HTML file which you just uploaded as an asset. Enter your Brandfolder API key that you generated in the above step as the value of the "apiKey" parameter.
- Click on **Save**. This creates your custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use Your Custom Field

To use your custom field, you need to follow the steps given below:

Create a content type by clicking on the **+ New Content Type**. Provide a suitable name to your content type, an optional description, and click on **Create and Add fields**.

This leads you to the Content Type Builder page where you can add the relevant fields.
- Add the **Custom** field in your content type. Provide a name to it, for example, Brandfolder, and add other fields such as a single-line text box, and so on.
- In the **Edit Properties** pane on the right-hand side, select the custom field from the dropdown (that is, Brandfolder) and set the other properties of your custom field.
- After adding other relevant fields in your content type, click on **Save and Close**. This will create your content type.
- Now open the content type and create an entry as usual. You will see the Brandfolder extension field in your entry as shown below:
- Click on **Choose Assets**. From the Brandfolder modal that opens, you will be able to select and insert the required assets into the field.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](/docs/developers/create-custom-fields/limitations-of-custom-fields) doc for more detail.

## Common questions

### Is this documentation for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched Brandfolder as a Marketplace App. For more information on Brandfolder, please refer to the [Brandfolder App Installation Guide](/docs/developers/marketplace-apps/brandfolder).

### What do I need from Brandfolder to configure the extension?
You need access to your Brandfolder API key.

### What should I use as the `widgetUrl` value in the config parameter?
The value for widgetURL is the URL of the brandfolder HTML file which you just uploaded as an asset.

### Is there a limit on how many assets I can select?
**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](/docs/developers/create-custom-fields/limitations-of-custom-fields) doc for more detail.