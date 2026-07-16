---
title: "[JSON RTE] - Basic Formatting"
description: Essential text styles and structural formatting options available in the Contentstack JSON Rich Text Editor (RTE).
url: https://www.contentstack.com/docs/headless-cms/basic-formatting
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-authors
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Basic Formatting

This page explains the essential text styles and structural formatting options available in the Contentstack JSON Rich Text Editor (RTE). It is intended for developers and content authors who need to understand supported formatting behaviors when creating, editing, or rendering JSON RTE content.

This guide explains the essential text styles and structural formatting options available in the Contentstack JSON Rich Text Editor (RTE). These features help ensure your content is both visually appealing and well-organized, offering flexibility for various editorial needs.

## Text Styles
The following [inline text styles](./about-block-and-inline-elements.md#inline-elements) are supported to enhance the appearance and readability of your content.
- **Bold**: Used to emphasize key points or important content.
- **Italic**: Used for emphasis or to indicate thoughts and citations.
- **Underline**: Helps to highlight important terms or phrases.
- **Strikethrough**: Used to show removed or deprecated content.
- **Inline Code**: Useful for displaying code snippets or programming references within text.
- **Superscript**: Used for mathematical notations or footnotes.
- **Subscript**: Often used for chemical formulas or mathematical expressions.![Example of subscript style in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt305ac2f68254e473/6819b8ab8850e6db1c278bf8/1-text-styles.gif)

## Formatting Options
The following block-level formatting options enhance the content structure.
- **Normal Text**: Default text block without any special heading or styling.
- **Headings (H1 to H6)**: Used to organize content hierarchically.
- **Block Quotes**: Used to emphasize quoted text or references.
- **Code Snippets**: Displays pre-formatted blocks of code.![Example of block code formatting in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65fbb88dea27159c/6819b8ab7a3a7c0d1caa8923/2-formatting-options.gif)

## Layout and Spacing
Layout and spacing options control how content is visually positioned within the editor.

**Additional Resource**: To understand how line breaks, new paragraphs, and list item behavior work (including the difference between `Enter` and `Shift + Enter`), refer to the [Keyboard Shortcuts for JSON Rich Text Editor](./keyboard-shortcuts-for-json-rich-text-editor.md) documentation.

### Indentation and Outdentation
Indentation visually offsets content to improve readability and reflect hierarchy. You can apply it using the toolbar icons or keyboard shortcuts.

Indentation is supported for the following block-level elements:
- Paragraphs
- Headings
- Inline-formatted content within paragraphs (e.g., links, inline code, superscript, subscript, images)
- Block quotes

**Note**: Indentation is not supported for tables or entire lists. Lists follow standard nesting behavior.

You can indent or outdent content using the **Indent** and **Outdent** icons in the toolbar or use the keyboard shortcut **Tab** for **Indent** and **Shift+Tab** for **Outdent**.

**Note**:
- You can apply indentation using the toolbar icon at any point in a block. When using keyboard shortcuts, indentation and outdentation only work when the cursor is at the beginning of a block.
- Each indent level increases the left margin by **~30px**.
- You can apply indentation up to a **maximum of 20 levels**.
- The drag-and-drop (DND) handle moves with the indented block.
- When using keyboard shortcuts in tables, pressing **Tab** moves the cursor to the next cell.

### Limitations for Indentation and Outdentation
Indentation and outdentation have the following limitations:
- Indentation is disabled if text alignment (left, center, right, justify) is applied.
- Alignment options are disabled for indented blocks.
- Tables and their contents cannot be indented.
- Converting indented blocks into lists removes the indentation and reverts the list to the root level.
- Indentation metadata is preserved when rendering content through SDKs.

By using these formatting tools in the JSON RTE, you can structure content effectively for clarity, consistency, and usability, tailoring it to various editorial and technical needs.

## Common questions

### What inline text styles are supported in the JSON RTE?
The supported inline text styles include **Bold**, **Italic**, **Underline**, **Strikethrough**, **Inline Code**, **Superscript**, and **Subscript**.

### What block-level formatting options are available?
The available block-level formatting options include **Normal Text**, **Headings (H1 to H6)**, **Block Quotes**, and **Code Snippets**.

### How do I indent and outdent content?
You can use the **Indent** and **Outdent** icons in the toolbar, or use **Tab** for **Indent** and **Shift+Tab** for **Outdent**.

### What are key limitations of indentation and outdentation?
Indentation is disabled when alignment is applied, alignment options are disabled for indented blocks, tables cannot be indented, converting indented blocks into lists removes indentation, and indentation metadata is preserved when rendering content through SDKs.