---
title: "[JSON RTE] - Markdown Content"
description: Markdown syntax support and commands in Contentstack’s JSON Rich Text Editor (JSON RTE).
url: https://www.contentstack.com/docs/headless-cms/markdown-content
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-authors
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Markdown Content

This page explains how to use Markdown syntax in Contentstack’s JSON Rich Text Editor (RTE), who should use it (developers and content authors working in JSON RTE fields), and when to reference it (when formatting content using supported Markdown commands inside the editor).

### Item 1

#### Article section

##### Heading

Markdown Content

##### Content

Contentstack’s JSON Rich Text Editor (RTE) allows you to use **Markdown syntax** to format your content, making the creation process faster and more efficient. Markdown provides a simple way to add formatting elements like headings, lists, links, and code blocks without complex HTML tags.

## Supported Markdown Commands

In the JSON RTE, you can format your content easily using the following Markdown commands:

**Note:** After applying a Markdown syntax, add a **space** to activate the formatting (except for code blocks). To switch back to normal text, use the same syntax again.

| Commands | Syntax | Description |
|---|---|---|
| Bold | `__Sample content__` | Use `__` or `**` at the start and end of the text. |
| Italic | `_Sample content_` | Use `_` or `*` at the start and end of the text. |
| Heading 1 | `# Sample content` | Add `#` at the start of the text. |
| Heading 2 | `## Sample content` | Add `##` at the start of the text. |
| Heading 3 | `### Sample content` | Add `###` at the start of the text. |
| Heading 4 | `#### Sample content` | Add `####` at the start of the text. |
| Heading 5 | `##### Sample content` | Add `#####` at the start of the text. |
| Heading 6 | `###### Sample content` | Add `######` at the start of the text. |
| Unordered List | `* Sample content` | Use `*` or `-` at the start of the text. |
| Ordered List | `1. Sample content` | Use `1.` or `1)` at the start of the text. |
| Strikethrough | `~~Sample content~~` | Use `~~` at the start and end of the text. |
| Inline Code | ``Sample content`` | Use ``` at the start and end of the text. |
| Superscript | `^Sample content^` | Use `^` at the start and end of the text. |
| Subscript | `~Sample content~` | Use `~` at the start and end of the text. |
| Hyperlink | `[Text](URL)` | Write the display text in `[ ]` and the URL in `( )`. |
| Blockquote | `> Sample content` | Use `>` at the start of the text. |
| Code Block | ````Sample content```` | Use ````` at the start and end of the block. |
| Image | `![alt text](image-URL)` | Use `!` followed by alt text in `[ ]` and the image URL in `( )`. |

Here’s a visual example of how Markdown commands look within Contentstack’s JSON RTE:

With the added support for **Markdown**, formatting content becomes more intuitive and efficient.

## Common questions

### Do I need to add a space after typing Markdown syntax in the JSON RTE?
Yes. **Note:** After applying a Markdown syntax, add a **space** to activate the formatting (except for code blocks).

### How do I switch back to normal text after applying a Markdown format?
To switch back to normal text, use the same syntax again.

### Which list syntaxes are supported?
Unordered List supports `*` or `-` at the start of the text, and Ordered List supports `1.` or `1)` at the start of the text.

### Can I add links and images using Markdown in the JSON RTE?
Yes. Hyperlink uses `[Text](URL)` and Image uses `![alt text](image-URL)`.