---
title: "Basic Formatting"
description: "Learn how to use basic text styles and formatting options within Contentstack’s JSON RTE to create clear, structured, and engaging content."
url: /headless-cms/basic-formatting
---

# Basic Formatting

## Basic Formatting

This guide explains the essential text styles and structural formatting options available in the Contentstack JSON Rich Text Editor (RTE). These features help ensure your content is both visually appealing and well-organized, offering flexibility for various editorial needs.

## Text Styles

The following [inline text styles](/docs/headless-cms/about-block-and-inline-elements#inline-elements) are supported to enhance the appearance and readability of your content.

1.  **Bold**: Used to emphasize key points or important content.
2.  **Italic**: Used for emphasis or to indicate thoughts and citations.
3.  **Underline**: Helps to highlight important terms or phrases.
4.  **Strikethrough**: Used to show removed or deprecated content.
5.  **Inline Code**: Useful for displaying code snippets or programming references within text.
6.  **Superscript**: Used for mathematical notations or footnotes.
7.  **Subscript**: Often used for chemical formulas or mathematical expressions.
    
    ![Example of subscript style in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt305ac2f68254e473/6819b8ab8850e6db1c278bf8/1-text-styles.gif)
    

## Formatting Options

The following block-level formatting options enhance the content structure.

1.  **Normal Text**: Default text block without any special heading or styling.
2.  **Headings (H1 to H6)**: Used to organize content hierarchically.
3.  **Block Quotes**: Used to emphasize quoted text or references.
4.  **Code Snippets**: Displays pre-formatted blocks of code.
    
    ![Example of block code formatting in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65fbb88dea27159c/6819b8ab7a3a7c0d1caa8923/2-formatting-options.gif)
    

## Layout and Spacing

Layout and spacing options control how content is visually positioned within the editor.

**Additional Resource:** To understand how line breaks, new paragraphs, and list item behavior work (including the difference between Enter and Shift + Enter), refer to the [Keyboard Shortcuts for JSON Rich Text Editor](/docs/headless-cms/keyboard-shortcuts-for-json-rich-text-editor) documentation.

### Indentation and Outdentation

Indentation visually offsets content to improve readability and reflect hierarchy. You can apply it using the toolbar icons or keyboard shortcuts.

Indentation is supported for the following block-level elements:

-   Paragraphs
-   Headings
-   Inline-formatted content within paragraphs (e.g., links, inline code, superscript, subscript, images)
-   Block quotes

**Note:** Indentation is not supported for tables or entire lists. Lists follow standard nesting behavior.

You can indent or outdent content using the **Indent** and **Outdent** icons in the toolbar or use the keyboard shortcut **Tab** for **Indent** and **Shift+Tab** for **Outdent**.

![JSON_RTE_Indentation_and_Outdentation.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d5f18a0f57a9225/697065786b2a1070197a4bf2/JSON_RTE_Indentation_and_Outdentation.gif)

**Note**:

-   You can apply indentation using the toolbar icon at any point in a block. When using keyboard shortcuts, indentation and outdentation only work when the cursor is at the beginning of a block.
-   Each indent level increases the left margin by **~30px**.
-   You can apply indentation up to a **maximum of 20 levels**.
-   The drag-and-drop (DND) handle moves with the indented block.
-   When using keyboard shortcuts in tables, pressing **Tab** moves the cursor to the next cell.

### Limitations for Indentation and Outdentation

Indentation and outdentation have the following limitations:

-   Indentation is disabled if text alignment (left, center, right, justify) is applied.
-   Alignment options are disabled for indented blocks.
-   Tables and their contents cannot be indented.
-   Converting indented blocks into lists removes the indentation and reverts the list to the root level.
-   Indentation metadata is preserved when rendering content through SDKs.

By using these formatting tools in the JSON RTE, you can structure content effectively for clarity, consistency, and usability, tailoring it to various editorial and technical needs.
