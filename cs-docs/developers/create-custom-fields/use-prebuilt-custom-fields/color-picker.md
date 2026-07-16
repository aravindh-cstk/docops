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

**Note**: This documentation uses the legacy approach with extensions. We have launched Color Picker as a Marketplace App. For more information on Color Picker, please refer to the [Color Picker App Installation Guide](../../marketplace-apps/color-picker.md).

Color Picker [custom field](../../create-content-types/custom.md) extension provides a native color picker polyfill that Contentstack users can use as a field within a [content ](../../create-content-types/about-content-types.md)[type](../../create-content-types/about-content-types.md).

This step-by-step guide explains how to create a Color Picker custom field extension for your content types.

## Add the “Color Picker” custom field extension to your stack

To add this custom field extension to your [stack](../../set-up-stack/about-stack.md), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack and click the “Settings” icon on the left navigation panel.

- Click on **Extensions**.
- Click on the **+ New Extensions** button, and select **Use prebuilt.**![color_picker_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbdf609f41d5924b7/60b7c19acf9889265dab7c50/color_picker_1_highlighted.png)
- In the following window, from the drop-down menu, select **Custom Field**.
- Hover over **Color Picker**, and click on **+ ****Add Extension**.![color_picker_2_no_highlight.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt91d86a6153fa4048/638760c6f33b43105dcdaaaa/color_picker_2_no_highlight.jpg)
- In the **Create New Extension** page, you will see the following options:**Title*** (required)*: You will see a predefined title, “Color Picker.” Use the same title to add the custom field in your content type.
- **Field data type ***(required)*: By default, the data type for the input data is set as “Text.”
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.![color_picker_3_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5706d95b602476c6/60b7c1b38bf36608f2c02db2/color_picker_3_no_highlight.png)
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use Color picker custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click on the **+ New Content Type** button.

- [Create a content type](../../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![color_picker_4_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta746ec44a6b7e34a/60b7c1bc16660819878654e7/color_picker_4_no_highlight.png)
- On the **Content Type Builder** page, add the [**Custom**](../../create-content-types/custom.md) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign. Then click on **Custom**.
- Select **Color Picker** from the **Select Extension** dropdown menu, and configure other properties of your custom field.  ![color_picker_5_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt699c9ee2d98c0d12/60b7c1d1dbcf2a08eed7aef3/color_picker_5_highlighted.png)

  **Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use the Color Picker, [create an entry](../../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the this field on your entry page as shown below:![color_picker_6_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5068c515d62c0a2a/60b7c1dfa8cd6a0a26e29018/color_picker_6_no_highlight.png)

## Common questions

### Is this page for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched Color Picker as a Marketplace App. For more information on Color Picker, please refer to the [Color Picker App Installation Guide](../../marketplace-apps/color-picker.md).

### Where do I add the Color Picker extension in Contentstack?
Go to your stack and click the “Settings” icon on the left navigation panel, then click on **Extensions**, click on the **+ New Extensions** button, and select **Use prebuilt.**

### How do I use the Color Picker in a content type?
On the **Content Type Builder** page, add the [**Custom**](../../create-content-types/custom.md) field to your content type, then select **Color Picker** from the **Select Extension** dropdown menu.

### Can I configure instance-level settings for the Color Picker custom field?
**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.