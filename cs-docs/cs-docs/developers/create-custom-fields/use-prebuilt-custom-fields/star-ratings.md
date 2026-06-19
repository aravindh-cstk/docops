---
title: "[Extensions] - Star Ratings"
description: Documentation for the legacy Star Ratings custom field extension (prebuilt custom field) and how to add and use it in Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/star-ratings
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Star Ratings

This page explains how to use the legacy (extensions-based) Star Ratings prebuilt custom field in Contentstack, including how to add the extension to a stack and then use it in a content type. It is intended for developers configuring content models who need a star-rating input field in entries.

## Star Ratings

**Note**: This documentation uses the legacy approach with extensions. We have launched Star Ratings as a Marketplace App. For more information on Star Ratings, please refer to the [Star Ratings App Installation Guide](/docs/developers/marketplace-apps/star-ratings).

Star Ratings [custom field](/docs/developers/create-custom-fields/about-custom-fields) [extension](/docs/developers/about-experience-extensions) allows Contentstack users to provide a star-rating system as an input field in the [content types](/docs/developers/create-content-types/about-content-types) of a [stack](/docs/developers/set-up-stack/about-stack).

This step-by-step guide explains how to create a Star Ratings custom field extension for your content types:

## Add the “Star Ratings” custom field extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack, and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- Click on the **+ New Extensions** button, and select the **Use prebuilt** option.
- In the following window, from the drop-down menu,  select **Custom Field**.
- Hover over **Star Ratings**, and click on **+ Add Extension**.
- In the **Create New Extension** page, you will see the following options:**Title*** (required)*: You will see a predefined title, “Star Ratings.” Use the same title to add the custom field in your content type.
- **Field data type *** (required)*: By default, the data type for the input data is set as “Number.”
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use this custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click the **+ New Content Type** button.
- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- On the **Content Type Builder** page, add the [Custom](/docs/developers/create-content-types/custom) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign and then clicking on **Custom**.
- Select **Star Ratings** from the **Select Extension** dropdown menu, and configure other properties of your custom field.
**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use this field, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see this field on your entry page as shown below:

## Common questions

### Is this Star Ratings documentation for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched Star Ratings as a Marketplace App. For more information on Star Ratings, please refer to the [Star Ratings App Installation Guide](/docs/developers/marketplace-apps/star-ratings).

### What data type does the Star Ratings custom field use by default?
By default, the data type for the input data is set as “Number.”

### Where do I select the Star Ratings extension when adding it to a content type?
Select **Star Ratings** from the **Select Extension** dropdown menu, and configure other properties of your custom field.

### Can I configure instance-level settings for the Star Ratings custom field?
You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.