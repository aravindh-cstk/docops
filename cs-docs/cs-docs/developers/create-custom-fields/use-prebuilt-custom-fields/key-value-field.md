---
title: "[Extensions] - Key-value Field"
description: Step-by-step guide to add and use the Key-value Field custom field extension in Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/key-value-field
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Key-value Field

This page explains what the Key-value Field extension is and provides step-by-step instructions for adding the prebuilt Key-value custom field extension to your Contentstack stack and using it in a content type.

## Key-value Field

Key-value Field [extension](/docs/developers/about-experience-extensions) lets you add a field into content types that saves key-value pairs as input value.

This step-by-step guide explains how to create a Key-value custom field extension for your [content types](/docs/developers/create-content-types/about-content-types) in Contentstack:

## Add the “Key-value” custom field extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](/docs/developers/set-up-stack/about-stack) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- Click on the **+ New**** Extensions** button, and select **Use prebuilt** option. Alternatively.
- In the following window, from the drop-down menu select **Custom Field**.
- Hover over **Key-value Field**, and click on **+ Add Extension.
**
- In the **Create New Extension** page, you will see the following options:**Title*** (required)*: You will see a predefined title, “Key-value Field.” Use the same title to add the custom field in your content type.
- **Field data type *** (required)*: By default, the data type for the input data is set as “JSON.”
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use Key-value custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click on **+ New Content Type** button.
- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- On the **Content Type Builder** page, add the [Custom](/docs/developers/create-content-types/custom) field to your content type by clicking on the “Insert a Schema” link denoted by a **+** sign and then clicking on **Custom**.
- Select **Key-value Field** from the **Select Extension** dropdown menu, and configure other properties of your custom field.
**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use the Key-value field, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see this field on your entry page as shown below:

## Common questions

### What data type does the Key-value Field use by default?
By default, the data type for the input data is set as “JSON.”

### Where do I add the Key-value Field extension in Contentstack?
Go to your stack settings, open **Extensions**, click **+ New Extensions**, select **Use prebuilt**, choose **Custom Field**, then add **Key-value Field**.

### How do I use the Key-value Field in a content type?
In **Content Models**, create or edit a content type, insert a **Custom** field, select **Key-value Field** from the **Select Extension** dropdown, and save the content type.

### Can I configure the Key-value Field per instance in a content type?
Yes, you can provide specific instance-level configuration settings by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.

<!-- filename: extensions-key-value-field.md -->