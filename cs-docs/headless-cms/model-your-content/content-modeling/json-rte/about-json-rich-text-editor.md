---
title: "About JSON Rich Text Editor"
description: "Learn how Contentstack's JSON Rich Text Editor simplifies content creation with block-style editing, structured JSON output, and user-friendly formatting tools."
url: /headless-cms/about-json-rich-text-editor
uid: blt9169240f70b53a01
---

# About JSON Rich Text Editor

## About JSON Rich Text Editor

The **JSON Rich Text Editor (RTE)** is a block-style editor that enables users to seamlessly add and format diverse types of content, such as text, images, and videos. Unlike traditional editors, it stores content as structured JSON blocks, providing more flexibility and ease of integration across platforms.

## Key Features

-   **User-Friendly Editing**: Add and format content directly from the [entry](/docs/headless-cms/about-entries) page using a text area with built-in editing tools. No need to work with HTML tags, making content management more intuitive and efficient.
-   **HTML-Free Environment**: The JSON RTE eliminates the need to manage HTML code by removing the HTML source view option. This simplifies the workflow for content managers, reducing the likelihood of errors in source code.
-   **Structured Content**: Store content in JSON format, ensuring that text, media, and layouts are logically organized in reusable blocks.

![JSON_RTE_Operations_GIF.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e88a597ed65f647/682ee3df6d16c7df6136ab86/About-JSON-RTE-Editied.gif)

## Handling Empty JSON RTE Fields

When an entry containing a JSON RTE field is saved, a default value is added to the entry. However, this default value is set only when the JSON RTE field is available to edit.

For example, in a long entry with many fields, if the JSON RTE field is lower down and hasn’t been rendered (i.e., you haven’t scrolled to or interacted with it), the default value won’t be added when the entry is saved.

If the RTE has not been edited yet, the field will store the following default value:

```
{
  "uid": "<uid>",
  "type": "doc",
  "children": [
    {
      "type": "p",
      "uid": "<uid>",
      "children": [
        {
          "text": ""
        }
      ]
    }
  ]
}
```

To determine whether the JSON RTE field is truly empty and avoid unnecessary paragraph (<p>) tags, use the following condition in your implementation:

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
