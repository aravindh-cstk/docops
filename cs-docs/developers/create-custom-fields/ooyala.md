---
title: "[Extensions] - Ooyala"
description: How to create and use the Ooyala custom field extension to fetch Ooyala videos and display them in a field of a Content Type in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/ooyala
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Ooyala

This page explains how to create an **Ooyala** custom field extension in Contentstack, add it to your stack, and then use it in a content type so content managers can select Ooyala videos while creating entries.

## Ooyala

The Ooyala custom field [extensions](../experience-extensions-overview/about-experience-extensions.md) allows you to fetch Ooyala videos and display them into a [field](../create-content-types/about-fields.md) of your [Content Type](../create-content-types/about-content-types.md). Thus, while creating [entries](../../content-managers/author-content/about-entries.md), you can select one or more videos as input value for the field.

This step-by-step guide explains how to create an **Ooyala** custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Add the “Ooyala” custom field extension to your stack](#add-the-ooyala-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Add the “Ooyala” custom field extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:
  - **Title ***(required)*: Provide a suitable title, for example “Ooyala,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
  - **Field Data Type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **Text**.
  - ******Multiple ***(optional)*: Leave this field unchecked.
  - **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
  - **Extension Source Code**:  *(required)*: Specify the extension code here. To get the code, [download](https://github.com/contentstack/extensions/tree/master/ooyala) the source code for the extension, and paste the contents of `index.html` file in this field.
  - **Config Parameter ***(required)*: To configure your Ooyala custom field, you need to provide your Ooyala API credentials which include your API key and secret key. These will be used to sign all HTTP requests. You also need to make use of proxy servers.

Alternatively, you can make use of the [Ooyala npm package](https://www.npmjs.com/package/ooyala) provided in the official doc.

Enter the configuration details in your custom field's settings as follows:

```
{
    "api_key": "your_api_key",
    "secret": "your_secret_key"
    "url": "proxy_generated_URL",
    "searchUrl": "proxy_generated_search_URL"
}
```

- **Save** the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Ooyala” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save** or **Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Ooyala **field in action.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only **10 KB** of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.

**Additional Resource: **You can also refer to our other documents on custom video extensions such as [YouTube](./youtube.md), [Brightcove](./brightcove.md), and [Vimeo](./vimeo.md).

## Common questions

### What does the Ooyala custom field extension do?
It allows you to fetch Ooyala videos and display them into a field of your Content Type so you can select one or more videos as the input value for the field.

### What field data type should be selected for this extension?
In this case, select **Text**.

### What configuration details are required for the Ooyala custom field?
You need to provide your Ooyala API credentials which include your API key and secret key, and you also need to make use of proxy servers.

### Is there a limit to how many items can be selected?
The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only **10 KB** of data can be stored.