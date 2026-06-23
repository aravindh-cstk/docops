---
title: "[Extensions] - Ace Editor"
description: Step-by-step guide to create and use the Ace Editor custom field extension for content types in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields/ace-editor
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Ace Editor

This page explains how to add the prebuilt Ace Editor custom field extension to a Contentstack stack and then use it in a content type. It is intended for developers working with Contentstack custom fields and should be used when setting up or configuring an Ace Editor-based custom field in the legacy extensions approach.

## Ace Editor

**Note**: This documentation uses the legacy approach with extensions. We have launched Ace Editor as a Marketplace App. For more information on Ace Editor, please refer to the [Ace Editor App Installation Guide](../../marketplace-apps/ace-editor.md).

Ace Editor is an embeddable code editor that includes features of native code editors, such as Sublime and Vim.

This step-by-step guide explains how to create an Ace Editor custom field [extension](../../experience-extensions-overview/about-experience-extensions.md) for your [content types](../../create-content-types/about-content-types.md) in Contentstack.

## Add the “Ace Editor” custom field extension to your stack

To add this custom field to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

- Go to your [stack](../../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- Click on the **+ New Extensions** button, and select **Use prebuilt** option.
- In the following window, from the drop-down menu, select **Custom Field**.
- Hover over **Ace Editor**, and click on **+**** Add Extension**.
- In the **Create New Extension** page, you will see the following options:
  - **Title*** (required)*: You will see a predefined title, “Ace Editor.” Use the same title to add the custom field in your content type.
  - **Field data type ***(required)*: By default, the data type for the input data is set as “Text.”
  - **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON.
  - **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
  - **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.
  - **Config Parameters ***(optional)*: Provide values for the config parameters if you have used any in the source code.
- Finally,** Save **this custom field

## Use your custom field

To use Ace Editor custom field in your content type, perform the following steps:

- Click on the “Content Models” icon on the left navigation panel and click on **+ New Content Type** button.
- Create a content type by adding relevant details as displayed below:
- On the **Content Type Builder** page, add the [**Custom**](../../create-content-types/custom.md) field to your content type by clicking on the “Insert a field” link denoted by a **+** sign and then on **Custom**.
- Select **Ace Editor** from the **Select Extension** dropdown menu, and configure other properties of your custom field.  
  **Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.
- After adding other fields to your content type, click on either **Save **or **Save and Close** button. This will create a content type.
- To use the Ace editor, [create an entry](../../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the this field on your entry page as shown below:

**Additional Resource:** You can also refer to our guide on adding the [JSON editor](./json-editor.md) to your stack, which allows users to input JSON data as normal "text,” “code,” “tree” format, “form,” and “view.”

## Common questions

**Q: Is this guide for the Marketplace App version of Ace Editor?**  
A: No. **Note**: This documentation uses the legacy approach with extensions. We have launched Ace Editor as a Marketplace App. For more information on Ace Editor, please refer to the [Ace Editor App Installation Guide](../../marketplace-apps/ace-editor.md).

**Q: Where do I select the Ace Editor extension when building a content type?**  
A: Select **Ace Editor** from the **Select Extension** dropdown menu after adding the [**Custom**](../../create-content-types/custom.md) field in the **Content Type Builder**.

**Q: Can I change the Ace Editor custom field behavior?**  
A: Yes. In the **Create New Extension** page, **Extension Source Code ***(required)*: Here you will find the source code for the custom field. You can make changes to this code as per your requirements.

**Q: Can I provide instance-level configuration for the custom field?**  
A: Yes. **Note**: You can provide specific instance-level configuration settings for your Custom Field extension by referring to the [Config parameters](../../create-content-types/config-parameter-for-custom-fields-only.md) section.