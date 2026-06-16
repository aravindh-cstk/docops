---
title: "[JSON Rich Text Editor] - Schema of JSON Rich Text Editor"
description: Schema of JSON Rich Text Editor
url: https://www.contentstack.com/docs/developers/json-rich-text-editor/schema-of-json-rich-text-editor
product: JSON Rich Text Editor
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [JSON Rich Text Editor] - Schema of JSON Rich Text Editor

This page explains the schema and structure used by the JSON Rich Text Editor (RTE), including block and leaf node types, key properties, and examples. It is intended for developers who need to understand, validate, render, or process JSON RTE output in backend or frontend implementations.

## Schema of JSON Rich Text Editor

The [JSON Rich Text Editor (RTE)](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) organizes its data into blocks and spans, ensuring a clean and structured JSON output. Each paragraph is represented as a block, each block contains an array, and each array includes multiple spans of text objects representing different nodes of text. This structure simplifies data processing on the backend.

## Structure and Schema

The JSON RTE is built on a schema that defines the properties of each block. Below is the schema definition and an example:

### Schema

```
{
    "uid": { "type": "String", "required": true },
    "type": { "type": "String", "required": true },
    "attrs": { "type": "Object" },
    "children": { "type": "Array[id(Block), Text]" }
}
```

### Example

```
{
    "type": "h1",
    "uid": "3ddd280397cf44bcb8f",
    "attrs": {},
    "children": [
        {
            "text": "Hello World!",
            "bold": true
        },
        {
            "uid": "blta5aa9ca151e65333"
        },
        {
            "text": "Welcome",
            "bold": true
        }
    ]
}
```

## Properties of a Block in JSON RTE

- `uid`: A unique identifier for each block.
- `type`: Defines how the block should be rendered (e.g., h1, p).
- `attrs`: Contains metadata and attributes for the block, such as formatting options or properties like href for links.
- `children`: An array containing other components (e.g., embedded items) or text nodes inside the block.

## Overall Structure of JSON RTE

The following code depicts the structure of the JSON Rich Text Editor:

```
{
    "type": "doc",
    "children": [
        {
            "type": "p",
            "children": [
                {
                    "text": "Paragraph"
                }
            ]
        },
        {
            "type": "h1",
            "children": [
                {
                    "text": "Heading One"
                }
            ]
        }
    ]
}
```

## Node Types in JSON RTE

- **Block Node**: A block node is a JSON structure with a `children` key, representing nested content.
- **Leaf Node**: A leaf node contains the `text` property and formatting attributes (e.g., `bold`, `italic`).

### Example: Leaf Node with Formatting (Mark)

Here, `bold` is a mark indicating that the text "I am Bold" should be styled as bold.

```
{
    "text": "I am Bold",
    "bold": true
}
```

## Extensibility and Styling Attributes

- **Custom Properties**: Leaf nodes are extensible, allowing the addition of custom properties.
- **Copy-Pasted Styling**: Attributes like styling from Word or Google Docs are encapsulated within the `attrs` object in leaf nodes.

### Example: Styling from Word/Google Docs

```
{
    "text": "I am copy-pasted from Word/Google Docs",
    "attrs": {
        "style": {}
    }
}
```

## Render Types

Block nodes can be rendered in three ways:

- **Block**: Rendered as a standalone element.
- **Inline**: Rendered within another block element.
- **Void**: Represents a self-contained element like an image or video.

**Note:** Use the `type` key for block nodes and the `text` key for text nodes, rather than relying on the `attrs` key.

**Additional Resources:**
- Refer to the [Prerequisites](https://github.com/contentstack/rte-plugin-boilerplate/blob/be5739f31e1b1102786a6eeeb94f40fd9de555c9/docs/api-reference.md#prerequisites) section for requirements to work with JSON RTE.
- Explore our [detailed documentation](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#json-rich-text-editor) for an in-depth explanation of the JSON RTE schema.

## Common questions

### How do I distinguish a block node from a leaf node?
A block node is a JSON structure with a `children` key, and a leaf node contains the `text` property and formatting attributes (e.g., `bold`, `italic`).

### Where should styling attributes from Word or Google Docs appear?
Attributes like styling from Word or Google Docs are encapsulated within the `attrs` object in leaf nodes.

### What key should I use to identify node types when rendering?
Use the `type` key for block nodes and the `text` key for text nodes, rather than relying on the `attrs` key.

### What are the render types supported for block nodes?
Block nodes can be rendered in three ways: **Block**, **Inline**, and **Void**.