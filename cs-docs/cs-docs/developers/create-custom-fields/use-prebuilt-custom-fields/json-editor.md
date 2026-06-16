---
title: "[Extensions] - JSON Editor"
description: Step-by-step guide to create and use the JSON Editor custom field extension in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/json-editor
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - JSON Editor

This page explains how to add the JSON Editor prebuilt custom field extension to a Contentstack stack and then use it in a content type. It is intended for developers configuring custom fields via extensions, and should be used when setting up JSON (and related format) input fields in your content models.

## JSON Editor

**Note**: This documentation uses the legacy approach with extensions. We have launched JSON Editor as a Marketplace App. For more information on JSON Editor, please refer to the [JSON Editor App Installation Guide](/docs/developers/marketplace-apps/json-editor/).

The JSON Editor custom field [extension](/docs/developers/about-experience-extensions) enables users to input data that is in JSON as well as in other formats such as normal “text,” “code,” “tree” format, “form,” and “view.”

This step-by-step guide explains how to create a JSON Editor custom field extension for your [content types](/docs/developers/create-content-types/about-content-types) in Contentstack:

## Add the “JSON Editor” custom field extension to your stack

To add this custom field extension to your [stack](/docs/developers/set-up-stack/about-stack), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack and click the “Settings” icon on the left navigation panel.

- Click on **Extension**.
- Click on the **+ New** **Extensions** button, and select the **Use prebuilt** option.
- In the following window, from the drop-down menu, select **Custom Field** options.
- Hover over **JSON Editor**, and click on **+** **Add Extension**.
- In the **Create New Extension** page, you will see the following options:
  - **Title*** (required)*: You will see a predefined title, “JSON Editor.” Use the same title to add the custom field in your content type.
  - **Field data type *** (required)*: By default, the data type for the input data is set as “JSON.”
  - **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
  - **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
  - **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
  - **Config Parameters ** *(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field.

After saving the custom field, let’s learn how to start using this custom field in your content type.

## Use your custom field

To use JSON Editor custom field in your content type, perform the following steps:

Click on the “Content Models” icon on the left navigation panel and click on **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below.
- On the **Content Type Builder** page, add the [**Custom**](/docs/developers/create-content-types/custom) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign and then clicking on **Custom**.
- Select **JSON Editor** from the **Select Extension** dropdown menu, and configure other properties of your custom field.

**Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) section.

- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use the JSON editor, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see this field on your entry page as shown below:

**Additional Resource:** Refer to our guide on how to add the [Ace Editor](/docs/developers/create-custom-fields/use-prebuilt-custom-fields/ace-editor), a prebuilt custom field that includes features of code editors like Sublime and Vim.

## Common questions

### Is this page for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched JSON Editor as a Marketplace App. For more information on JSON Editor, please refer to the [JSON Editor App Installation Guide](/docs/developers/marketplace-apps/json-editor/).

### What data formats can the JSON Editor custom field accept?
The JSON Editor custom field [extension](/docs/developers/about-experience-extensions) enables users to input data that is in JSON as well as in other formats such as normal “text,” “code,” “tree” format, “form,” and “view.”

### Where do I select the JSON Editor when adding it to a content type?
Select **JSON Editor** from the **Select Extension** dropdown menu, and configure other properties of your custom field.

### Where can I find another prebuilt custom field for code editing?
**Additional Resource:** Refer to our guide on how to add the [Ace Editor](/docs/developers/create-custom-fields/use-prebuilt-custom-fields/ace-editor), a prebuilt custom field that includes features of code editors like Sublime and Vim.

<!-- filename: extensions-json-editor.md -->