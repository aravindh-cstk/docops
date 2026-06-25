---
title: "[Extensions] - Progress Bar"
description: Documentation for the Progress Bar custom field extension, including how to add it to a stack and use it in a content type.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/progress-bar
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Progress Bar

This page explains how to create and use the Progress Bar custom field extension in Contentstack using the legacy extensions approach. It is intended for developers configuring custom fields in stacks and content types, and should be used when you need to add a progress bar or slider field via a prebuilt custom field extension.

## Progress Bar

**Note**: This documentation uses the legacy approach with extensions. We have launched Progress Bar as a Marketplace App. For more information on Progress Bar, please refer to the [Progress Bar App Installation Guide](../../marketplace-apps/progress-bar.md).

Progress Bar custom field [extension](../../experience-extensions-overview/about-experience-extensions.md) allows you to add a progress bar or a slider as a field within the content types of your stack.

This step-by-step guide explains how to create a Progress Bar custom field extension for your content types:

## Add the “Progress Bar” custom field extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](../../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel
- Click on **Extensions**.
- Click on the **+ New**** Extensions** button, and select **Use prebuilt** option.
- In the following window, from the drop-down menu, select **Custom Field**.
- Hover over **Progress bar**, and select **+ Add Extension**.
- In the **Create New Extension** page, you will see the following options:**Title*** (required)*: You will see a predefined title, “Progress Bar.” Use the same title to add the custom field in your content type.
- **Field data type *** (required)*: By default, the data type for the input data is set as “Number.”
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use Progress Bar custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click on **+**** New Content Type** button.
- [Create a content type](../../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:
- On the **Content Type Builder** page, add the [**Custom**](../../create-content-types/custom.md) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign and then clicking on **Custom**.
- Select **Progress Bar** from the **Select Extension** dropdown menu, and configure other properties of your custom field.
**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use this field, [create an entry](../../../content-managers/author-content/create-an-entry.md) for this content type, and you will see this field on your entry page as shown below:

## Common questions

### Is this Progress Bar documentation for the Marketplace App or the legacy extension?
This documentation uses the legacy approach with extensions, and it also links to the Marketplace App installation guide for the app-based version.

### Where do I add the Progress Bar custom field extension?
You add it in your stack under **Settings** → **Extensions** → **+ New Extensions** → **Use prebuilt** → **Custom Field**.

### What data type does the Progress Bar custom field use by default?
By default, the data type for the input data is set as “Number.”

### Can I configure the Progress Bar custom field per content type instance?
Yes. You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.