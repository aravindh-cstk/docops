---
title: "[JSON RTE] - Render JSON RTE content using JSON RTE Serializer"
description: Render JSON RTE content using JSON RTE Serializer
url: https://www.contentstack.com/docs/headless-cms/render-json-rte-content-using-json-rte-serializer
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Render JSON RTE content using JSON RTE Serializer

This page explains how to use the JSON RTE Serializer package in Node.js to convert JSON RTE content to HTML, convert HTML back to JSON RTE, and serialize JSON RTE into Markdown. It is intended for developers working with Contentstack JSON Rich Text Editor content who need to render, migrate, or transform rich text data across formats.

## Render JSON RTE content using JSON RTE Serializer

The [JSON RTE](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) Serializer package converts content between JSON and HTML formats, and the Markdown serializer converts JSON into Markdown. This package also supports the migration of HTML-based RTE content to JSON format across
  [entries](/docs/content-managers/author-content/about-entries) within a
  [content type](/docs/developers/create-content-types/about-content-types).

The following prerequisites are required to use the JSON RTE Serializer with Node.js applications:
- Node.js version **10** or **later**
- Install the **json-rte-serializer** package via **npm** using the following command:

```
npm install @contentstack/json-rte-serializer
```

## Serialization

  Serialization converts a JSON RTE response into an HTML response. The following example demonstrates how to convert the
  `json_rte` field to HTML format using the
  `jsonToHtml` method.

```
import { jsonToHtml } from "@contentstack/json-rte-serializer";
// Provide your JSON RTE data as input
const htmlValue = jsonToHtml({
  type: "doc",
  attrs: {},
  uid: "547a479c68824767ce1d9725852f042b",
  children: [
    {
      uid: "767a479c6882471d9725852f042b67ce",
      type: "p", // Indicates the content is a paragraph
      attrs: {},
      children: [{ text: "This is HTML-formatted content." }]
    }
  ]
});
console.log(htmlValue); // Log the converted HTML output.
```

The converted HTML output is as follows:

```
This is HTML-formatted content.

```

  **Note:** JSON RTE Serializer supports only the standard tags within the JSON RTE field. To use custom tags, refer to the
  [Custom Conversion](https://github.com/contentstack/json-rte-serializer?tab=readme-ov-file#custom-conversion) section.

## Deserialization

  Deserialization converts HTML content into JSON RTE format. The following example demonstrates how to parse HTML into a DOM body and convert it to JSON using the
  `htmlToJson` method.

```
import { htmlToJson } from "@contentstack/json-rte-serializer";
// Parse your HTML content into a structured DOM body
const htmlDomBody = new DOMParser().parseFromString(
  "This is HTML-formatted content.

", // HTML input
  "text/html"
).body;
const jsonValue = htmlToJson(htmlDomBody); // Convert the parsed HTML DOM into JSON RTE format
console.log(jsonValue); // Output the JSON-formatted result
```

The converted JSON output is as follows:

```
{
  "type": "doc",
  "attrs": {},
  "uid": "547a479c68824767ce1d9725852f042b",
  "children": [
    {
      "uid": "767a479c6882471d9725852f042b67ce",
      "type": "p",
      "attrs": {},
      "children": [
        { "text": "This is HTML-formatted content." }
      ]
    }
  ]
}
```

## Markdown Serialization

  The Markdown Serialization function converts JSON data into Markdown format, simplifying text formatting for platforms that use Markdown.

  The following example shows how to convert the value of
  `json_rte` to `markdown`:

```
// Import jsonToMarkdown from Contentstack's JSON RTE serializer library
import { jsonToMarkdown } from "@contentstack/json-rte-serializer";

// Define the JSON RTE data to be converted
const markdownValue = jsonToMarkdown({
  type: "doc",
  attrs: {},
  uid: "547a479c68824767ce1d9725852f042b",
  children: [
    {
      uid: "767a479c6882471d9725852f042b67ce", // Element unique identifier
      type: "p",
      attrs: {},
      children: [
        { text: "This is Markdown-formatted content which has some " },
        { text: "BOLD", bold: true },
        { text: " text and some " },
        { text: "Italic", italic: true },
        { text: " text." }
      ]
    }
  ]
});
console.log(markdownValue); // Output the resulting Markdown
```

The converted Markdown output is as follows:

```
This is Markdown-formatted content which has some **BOLD** text and some *Italic* text.
```

  **Additional Resources:**
- [JSON RTE Serializer README file](https://github.com/contentstack/json-rte-serializer?tab=readme-ov-file#readme)

## Common questions

### Who should use the JSON RTE Serializer package?
Developers working with Contentstack JSON RTE content who need to convert between JSON, HTML, and Markdown formats.

### What Node.js versions are supported?
Node.js version **10** or **later**.

### Can I use custom tags with JSON RTE Serializer?
**Note:** JSON RTE Serializer supports only the standard tags within the JSON RTE field. To use custom tags, refer to the [Custom Conversion](https://github.com/contentstack/json-rte-serializer?tab=readme-ov-file#custom-conversion) section.

### Where can I find more details and updates?
Use the **Additional Resources** link to the [JSON RTE Serializer README file](https://github.com/contentstack/json-rte-serializer?tab=readme-ov-file#readme).