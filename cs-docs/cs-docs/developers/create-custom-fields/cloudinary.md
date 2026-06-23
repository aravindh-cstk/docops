---
title: "[Extensions] - Cloudinary"
description: Documentation for creating and using a Cloudinary custom field extension in Contentstack (legacy extensions approach).
url: https://www.contentstack.com/docs/developers/create-custom-fields/cloudinary
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Cloudinary

This page explains how to create and use a Cloudinary custom field extension in Contentstack (legacy extensions approach). It is intended for developers who want to fetch Cloudinary images/videos into Contentstack entries via a custom field, and should be used when configuring a stack and content type to integrate Cloudinary assets.

## Cloudinary

**Note**: This documentation uses the legacy approach with extensions. We have launched Cloudinary as a Marketplace App and Automate Connector. For more information on Cloudinary, please refer to the [Cloudinary App Installation Guide](../marketplace-apps/cloudinary.md) for Marketplace and [Cloudinary Connector](/docs/developers/automation-hub-connectors/cloudinary/) documentation for Automate.

The Cloudinary custom field extensions allows you to fetch data (videos and images) from Cloudinary and display them into a [field](../create-content-types/about-fields.md) of your [Content type](../create-content-types/about-content-types.md). Thus, while creating [entries](../../content-managers/author-content/about-entries.md), you can select one or more images or videos as the input value for the field.

This step-by-step guide explains how to create a Cloudinary custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Create a Cloudinary account](#create-a-cloudinary-account)
- [Add the Cloudinary custom field extension to your stack](#add-the-cloudinary-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites

- [Cloudinary account](https://cloudinary.com/)
- Cloudinary cloud name
- Cloudinary API Key
- [Contentstack account](https://app.contentstack.com/#!/login)

## Create a Cloudinary Account

To use this extension, you need to create an account in Cloudinary. To do that, perform the following steps:

Go to [https://cloudinary.com/](https://cloudinary.com/) and create a new account.
- After creating an account and logging in, go to the **Dashboard**. Here you will get details such as

**Cloud name**, **API key**, **API Secret**, and **Environment variable**.

These details will be required when we set up our extension, so make a note of these. Now, let's move ahead and set up our extension.

## Add the Cloudinary Custom Field Extension to your Stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:

**Title ***(required)*: Provide a suitable title, for example “Cloudinary,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
- **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code ***(required)*: Specify the extension code here. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension. The support team will provide you with the source code (src file). Copy the code from the index.html file located in the root folder and paste it in the **Extension source code** field.

In the downloaded code inside the **source** folder, there's a **cloudinary-widget** HTML file. Upload this file as an asset in Contentstack, as discussed in our [Create/Upload Assets](../../content-managers/author-content/create-upload-assets.md) documentation. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.
- **Config Parameter ***(required)*: Enter the following configuration details as the extension's config parameter:

```
{
    "widgetUrl": "",
    "cloudName": "",
    "apiKey": ""
}
```

The value for widgetURL is the URL of the cloudinary-widget HTML file which you just uploaded as an asset. The values for cloudName and apiKey can be retrieved from the Cloudinary dashboard as shown above.
- **Save **the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use Your Custom Field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Cloudinary” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save** or **Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Cloudinary **field in action.
- Click on **Choose Assets**. If you are still logged into Cloudinary, it will open inside your entry page, from where you can select multiple images and insert them in your entry.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.

**Additional Resource:** Amason S3 is another technology similar to Cloudinary which allows user to fetch and display data in their content types, Read our guide on how to create a custom field using [Amazon S3](./amazon-s3.md).

## Common questions

### Is this the recommended way to integrate Cloudinary?
No. **Note**: This documentation uses the legacy approach with extensions. We have launched Cloudinary as a Marketplace App and Automate Connector. For more information on Cloudinary, please refer to the [Cloudinary App Installation Guide](../marketplace-apps/cloudinary.md) for Marketplace and [Cloudinary Connector](/docs/developers/automation-hub-connectors/cloudinary/) documentation for Automate.

### What data type should the custom field use?
**Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.

### What values are required in the config parameter?
```
{
    "widgetUrl": "",
    "cloudName": "",
    "apiKey": ""
}
```

### Is there a limit on how many items can be selected?
**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.