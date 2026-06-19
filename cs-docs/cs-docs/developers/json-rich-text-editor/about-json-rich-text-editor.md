---
title: "[JSON RTE] - About JSON Rich Text Editor"
description: Overview of the JSON Rich Text Editor (RTE), its key features, and how empty JSON RTE fields are handled.
url: https://www.contentstack.com/docs/headless-cms/about-json-rich-text-editor
product: JSON RTE
doc_type: concept
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [JSON RTE] - About JSON Rich Text Editor

This page explains what the JSON Rich Text Editor (RTE) is, highlights its key features, and describes how empty JSON RTE fields are stored and detected. It is intended for developers implementing JSON RTE output handling and content managers working with entries, especially when validating or rendering content.

## About JSON Rich Text Editor

The **JSON Rich Text Editor (RTE)** is a block-style editor that enables users to seamlessly add and format diverse types of content, such as text, images, and videos. Unlike traditional editors, it stores content as structured JSON blocks, providing more flexibility and ease of integration across platforms.

## Key Features

- **User-Friendly Editing**: Add and format content directly from the [entry](/docs/content-managers/working-with-entries/about-entries) page using a text area with built-in editing tools. No need to work with HTML tags, making content management more intuitive and efficient.
- **HTML-Free Environment**: The JSON RTE eliminates the need to manage HTML code by removing the HTML source view option. This simplifies the workflow for content managers, reducing the likelihood of errors in source code.
- **Structured Content**: Store content in JSON format, ensuring that text, media, and layouts are logically organized in reusable blocks.

## Handling Empty JSON RTE Fields

When an entry containing a JSON RTE field is saved, a default value is added to the entry. However, this default value is set only when the JSON RTE field is available to edit.

For example, in a long entry with many fields, if the JSON RTE field is lower down and hasn’t been rendered (i.e., you haven’t scrolled to or interacted with it), the default value won’t be added when the entry is saved.

If the RTE has not been edited yet, the field will store the following default value:

```
{
  "uid": "",
  "type": "doc",
  "children": [
    {
      "type": "p",
      "uid": "",
      "children": [
        {
          "text": ""
        }
      ]
    }
  ]
}
```

To determine whether the JSON RTE field is truly empty and avoid unnecessary paragraph (`<p>`) tags, use the following condition in your implementation:

```
if (
  entry?.json_rte?.children?.[0]?.children?.[0]?.text === "" &&
  entry?.json_rte?.children?.length === 1 &&
  entry?.json_rte?.children?.[0]?.children?.length === 1
) {
  console.log("JSON RTE field is empty");
}
```

This ensures that you do not mistakenly process empty values as valid content.

## Tutorial Video

Learn how to efficiently work with the JSON Rich Text Editor by watching the tutorial video below.

## Common questions

### What is the JSON Rich Text Editor (RTE)?
The **JSON Rich Text Editor (RTE)** is a block-style editor that stores content as structured JSON blocks instead of traditional HTML-based rich text.

### Why might a JSON RTE field not get its default value on save?
If the JSON RTE field hasn’t been rendered (for example, it is lower down in a long entry and you haven’t scrolled to it or interacted with it), the default value won’t be added when the entry is saved.

### How can I detect whether a JSON RTE field is truly empty?
Use the provided condition that checks the `children` structure and confirms the nested `text` value is `""`, ensuring empty values are not processed as valid content.

### What problem does the empty-field check help prevent?
It helps avoid unnecessary paragraph (`<p>`) tags and prevents mistakenly processing empty values as valid content.