---
title: "[Global Field] - Export a Global Field"
description: Export the JSON file of an existing Global field in a Contentstack stack for reuse or modification.
url: https://www.contentstack.com/docs/headless-cms/export-a-global-field
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Global Field] - Export a Global Field

This page explains how to export a Global field as a JSON file from a Contentstack stack. It is intended for developers and content modelers who need to reuse Global field configurations across stacks or modify them outside Contentstack before importing them back.

## Export a Global Field

Contentstack allows you to export the JSON file of any existing Global field in your stack, making it easy to reuse or modify configurations as needed.

To export a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to export a Global field.
- Click the **Content Models** icon in the left navigation panel and select **Global Fields** in the left panel.
- Locate the Global field you want to export. Click the vertical ellipsis in the **Actions** column next to it and select **Export**.
- The JSON file of the selected Global field will be saved to your local storage.

The exported JSON file retains all configurations of the Global field, which you can later import into another stack or use for modifications.

**Note:** Any changes made to the exported JSON file will be retained when [importing](./import-a-global-field.md) it back into Contentstack.

## API Reference

To export a Global field via API, refer to the [Export Global Field](../../../api-docs/api-detail/content-management-api.md#export-a-global-field) API request.

## Common questions

### Does exporting a Global field include all its configurations?
Yes. The exported JSON file retains all configurations of the Global field.

### Where is the exported Global field saved?
The JSON file of the selected Global field will be saved to your local storage.

### Can I modify the exported JSON before importing it?
Yes. Any changes made to the exported JSON file will be retained when importing it back into Contentstack.

### Can I export a Global field using an API?
Yes. To export a Global field via API, refer to the Export Global Field API request.