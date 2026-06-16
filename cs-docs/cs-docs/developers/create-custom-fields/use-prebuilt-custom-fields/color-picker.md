---
title: "[Extensions] - Color Picker"
description: Documentation for adding and using the Color Picker custom field extension in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/color-picker
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Color Picker

This page explains how to add the “Color Picker” prebuilt custom field extension to a Contentstack stack and then use it in a content type. It is intended for developers configuring custom fields in Contentstack, and should be used when setting up a Color Picker field via the legacy extensions approach.

## Color Picker

**Note**: This documentation uses the legacy approach with extensions. We have launched Color Picker as a Marketplace App. For more information on Color Picker, please refer to the [Color Picker App Installation Guide](/docs/developers/marketplace-apps/color-picker).

Color Picker [custom field](/docs/developers/create-content-types/custom) extension provides a native color picker polyfill that Contentstack users can use as a field within a [content ](/docs/developers/create-content-types/about-content-types)[type](/docs/developers/create-content-types/about-content-types).

This step-by-step guide explains how to create a Color Picker custom field extension for your content types.

## Add the “Color Picker” custom field extension to your stack

To add this custom field extension to your [stack](/docs/developers/set-up-stack/about-stack), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack and click the “Settings” icon on the left navigation panel.

- Click on **Extensions**.
- Click on the **+ New Extensions** button, and select **Use prebuilt.**
- In the following window, from the drop-down menu, select **Custom Field**.
- Hover over **Color Picker**, and click on **+ ****Add Extension**.
- In the **Create New Extension** page, you will see the following options:**Title*** (required)*: You will see a predefined title, “Color Picker.” Use the same title to add the custom field in your content type.
- **Field data type ***(required)*: By default, the data type for the input data is set as “Text.”
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use Color picker custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click on the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- On the **Content Type Builder** page, add the [**Custom**](/docs/developers/create-content-types/custom) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign. Then click on **Custom**.
- Select **Color Picker** from the **Select Extension** dropdown menu, and configure other properties of your custom field.  **Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use the Color Picker, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see the this field on your entry page as shown below:

## Common questions

### Is this page for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched Color Picker as a Marketplace App. For more information on Color Picker, please refer to the [Color Picker App Installation Guide](/docs/developers/marketplace-apps/color-picker).

### Where do I add the Color Picker extension in Contentstack?
Go to your stack and click the “Settings” icon on the left navigation panel, then click on **Extensions**, click on the **+ New Extensions** button, and select **Use prebuilt.**

### How do I use the Color Picker in a content type?
On the **Content Type Builder** page, add the [**Custom**](/docs/developers/create-content-types/custom) field to your content type, then select **Color Picker** from the **Select Extension** dropdown menu.

### Can I configure instance-level settings for the Color Picker custom field?
**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.