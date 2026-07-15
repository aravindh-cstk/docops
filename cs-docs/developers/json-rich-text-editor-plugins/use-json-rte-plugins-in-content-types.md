---
title: "[Json Rich Text Editor Plugins] - Use JSON RTE Plugins in Content Types"
description: Use JSON RTE Plugins in Content Types.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor-plugins/use-json-rte-plugins-in-content-types
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Json Rich Text Editor Plugins] - Use JSON RTE Plugins in Content Types

This page explains how to add and use custom JSON Rich Text Editor (JSON RTE) plugins within a content type in Contentstack. It is intended for developers and content modelers who have already added a JSON RTE plugin to a stack and want to enable it in the JSON Rich Text Editor field while building content types.

## Use JSON RTE Plugins in Content Types

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [RTE UI Location](../developer-hub/rte-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Once you have added a custom JSON RTE plugin to your [stack](../set-up-stack/about-stack.md), you can use it in the [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field of your [content type](../create-content-types/about-content-types.md).

To add a JSON RTE plugin within a JSON Rich Text Editor in a content type, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your stack and click the “Content Models” icon on the left navigation panel.
- Click on the **+ New Content Type** button.
- Enter the details shown in the image below and click on **Save and proceed**.![CT_save.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt063d2dd50c7f2365/61d690a00d81d913d2ac73be/CT_save.png)
- In the Content Type Builder page, add the JSON Rich Text Editor field in your content type by clicking on the “Insert a field” link represented by a **+** sign.
- Under **Select Plugin(s)**, select the plugins you want to add within the JSON Rich Text Editor.

    **Note:** You can add a maximum of **five** plugins to a single JSON RTE field in a content type.
- After adding the plugins, click on either **Save** or **Save and Close** to save your changes.

Now, when you create an entry for that content type, you will see your plugin in action within the associated JSON RTE field.

## Common questions

### Do I need to add the plugin to a stack before I can use it in a content type?
Yes. The page states: “Once you have added a custom JSON RTE plugin to your stack, you can use it in the JSON Rich Text Editor field of your content type.”

### How many plugins can I add to a single JSON RTE field?
A maximum of five plugins can be added to a single JSON RTE field in a content type.

### Where do I select plugins when configuring the JSON Rich Text Editor field?
In the Content Type Builder page, under **Select Plugin(s)**, select the plugins you want to add within the JSON Rich Text Editor.

### What is recommended instead of the legacy Experience Extensions approach?
The page recommends using the [RTE UI Location](../developer-hub/rte-location.md) for the Contentstack App Framework to extend the functionality of your apps.