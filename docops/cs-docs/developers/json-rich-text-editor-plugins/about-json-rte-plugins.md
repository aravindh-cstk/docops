---
title: "[Json Rich Text Editor Plugins] - About JSON RTE Plugins"
description: About JSON RTE Plugins
url: https://www.contentstack.com/docs/developers/json-rich-text-editor-plugins/about-json-rte-plugins
product: Contentstack
doc_type: overview
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Json Rich Text Editor Plugins] - About JSON RTE Plugins

This page explains what JSON Rich Text Editor (JSON RTE) Plugins are, what they enable, and the available ways to add them to your content types. It is intended for developers extending the JSON RTE experience in Contentstack stacks, and should be used when planning or implementing custom or prebuilt JSON RTE plugins.

## About JSON RTE Plugins

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [RTE UI Location](../developer-hub/rte-location.md) for the Contentstack App Framework to extend the functionality of your apps.

The JSON Rich Text Editor Plugins lets you add/create custom plugins to extend the functionality of your [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) as per your needs. You can use third-party applications to interact with your JSON Rich Text Editor content.

With prebuilt plugins such as Highlight, Info Panel, and Word Count, you can enhance the JSON Rich Text Editor (JSON RTE) field. Instead of using separate custom fields to interact with the content within the JSON RTE, create and add plugins to your JSON RTE for real-time adaptiveness.

**Note:** JSON RTE plugins are exclusive to the stack they are installed in and cannot be shared among different stacks.

The following are the two ways to add JSON RTE plugins to your content types:
- **Create new JSON RTE plugins:** Create your custom plugins by writing custom code and using it in your content types.
- **Use prebuilt JSON RTE plugins:** Use the prebuilt JSON RTE plugins by modifying the code to suit your requirement. Contentstack provides certain basic prebuilt plugins such as Highlight, Info Panel, and Word Count.

**Note:** You can add a maximum of **50** extensions (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.

To understand JSON Rich Text Editor Plugins in more detail, make sure you go through our extensive documentation provided in the “More articles” section.

## Tutorial Video

Let's learn how to create how to create a JSON RTE Plugin.

## Common questions

### Are JSON RTE plugins shared across stacks?
No. JSON RTE plugins are exclusive to the stack they are installed in and cannot be shared among different stacks.

### What are the ways to add JSON RTE plugins to content types?
You can either create new JSON RTE plugins by writing custom code, or use prebuilt JSON RTE plugins by modifying the code to suit your requirement.

### Is there a limit to how many JSON RTE plugins/extensions can be added to a stack?
Yes. You can add a maximum of **50** extensions (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.

### What is recommended instead of the legacy Experience Extensions approach?
We recommend using the [RTE UI Location](../developer-hub/rte-location.md) for the Contentstack App Framework to extend the functionality of your apps.