---
title: "Keyboard Shortcuts for JSON Rich Text Editor"
description: "Learn keyboard shortcuts for Contentstack’s JSON Rich Text Editor to format text, insert tables, and more on Windows and Mac."
url: /headless-cms/keyboard-shortcuts-for-json-rich-text-editor
uid: blt5f0a1f4588ad813a
---

# Keyboard Shortcuts for JSON Rich Text Editor

## Keyboard Shortcuts for JSON Rich Text Editor

Speed up your editing process in the JSON Rich Text Editor with these handy keyboard shortcuts. Whether you’re using Windows or macOS, this guide helps you apply formatting, insert elements, and adjust layout quickly.

## Formatting Shortcuts

Apply text styles such as bold, italic, underline, and more using these shortcuts.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Bold</strong></td><td>Ctrl + B</td><td>⌘ + B</td></tr><tr><td><strong>Italic</strong></td><td>Ctrl + I</td><td>⌘ + I</td></tr><tr><td><strong>Underline</strong></td><td>Ctrl + U</td><td>⌘ + U</td></tr><tr><td><strong>Strikethrough</strong></td><td>Ctrl + Shift + X</td><td>⌘ + Shift + X</td></tr><tr><td><strong>Inline Code</strong></td><td>Ctrl + E</td><td>⌘ + E</td></tr><tr><td><strong>Superscript</strong></td><td>Ctrl + Shift + ^</td><td>⌘ + Shift + ^</td></tr><tr><td><strong>Subscript</strong></td><td>Ctrl + Shift + ~</td><td>⌘ + Shift + ~</td></tr></tbody></table>

## Heading and Paragraph Shortcuts

Use these shortcuts to switch between paragraph text and different heading levels.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Normal (Paragraph)</strong></td><td>Ctrl + Alt + 0</td><td>⌘ + Option + 0</td></tr><tr><td><strong>Heading 1</strong></td><td>Ctrl + Alt + 1</td><td>⌘ + Option + 1</td></tr><tr><td><strong>Heading 2</strong></td><td>Ctrl + Alt + 2</td><td>⌘ + Option + 2</td></tr><tr><td><strong>Heading 3</strong></td><td>Ctrl + Alt + 3</td><td>⌘ + Option + 3</td></tr><tr><td><strong>Heading 4</strong></td><td>Ctrl + Alt + 4</td><td>⌘ + Option + 4</td></tr><tr><td><strong>Heading 5</strong></td><td>Ctrl + Alt + 5</td><td>⌘ + Option + 5</td></tr><tr><td><strong>Heading 6</strong></td><td>Ctrl + Alt + 6</td><td>⌘ + Option + 6</td></tr></tbody></table>

## Block and Code Shortcuts

Quickly add quotes or code blocks for better content structure.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Block Quote</strong></td><td>Ctrl + Alt + 7</td><td>⌘ + Option + 7</td></tr><tr><td><strong>Code Block</strong></td><td>Ctrl + Alt + 8</td><td>⌘ + Option + 8</td></tr></tbody></table>

## Text Alignment Shortcuts

Align text with ease using the shortcuts below.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Left Align</strong></td><td>Ctrl + Alt + L</td><td>⌘ + Ctrl + L</td></tr><tr><td><strong>Center Align</strong></td><td>Ctrl + Alt + E</td><td>⌘ + Ctrl + E</td></tr><tr><td><strong>Right Align</strong></td><td>Ctrl + Alt + R</td><td>⌘ + Ctrl + R</td></tr><tr><td><strong>Justify</strong></td><td>Ctrl + Alt + J</td><td>⌘ + Ctrl + J</td></tr></tbody></table>

## List Shortcuts

Create ordered or unordered lists quickly.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Ordered List</strong></td><td>Ctrl + Shift + 7</td><td>⌘ + Shift + 7</td></tr><tr><td><strong>Unordered List</strong></td><td>Ctrl + Shift + 8</td><td>⌘ + Shift + 8</td></tr></tbody></table>

## Line Break and Return Behavior

Manage line breaks and paragraph structure using **Enter** and **Shift + Enter**. These keys determine whether you create a new paragraph, start a new list item, or insert a line break within the same block.

**Note:** The Return key behavior can be customized at the stack level using the Stack Settings API request. Configure the cs\_breakline\_on\_enter and cs\_only\_breakline parameters within the rte object to modify how the **Enter** and **Shift + Enter** keys behave. Refer to the [Stack Settings](/docs/developers/apis/content-management-api/stacks#add-stack-settings) documentation for more details.

### Paragraphs

Control spacing and structure within standard paragraph text.

<table><tbody><tr><td><strong>Key</strong></td><td><strong>Behavior</strong></td></tr><tr><td>Enter</td><td>Creates a new paragraph by ending the current paragraph and starting a new one.</td></tr><tr><td>Shift + Enter</td><td>Inserts a soft line break within the same paragraph without creating a new paragraph block.</td></tr></tbody></table>

### Lists

Control how list items continue or break within ordered and unordered lists.

<table><tbody><tr><td><strong>Key</strong></td><td><strong>Behavior</strong></td></tr><tr><td>Enter</td><td>Ends the current list item and creates a new list item.</td></tr><tr><td>Shift + Enter</td><td>Inserts a soft line break within the same list item, letting you add multiple lines without creating a new list entry.</td></tr></tbody></table>

### Block Quotes

Manage line breaks and exit behavior within block quotes.

<table><tbody><tr><td><strong>Key</strong></td><td><strong>Behavior</strong></td></tr><tr><td>Enter</td><td>Exits the block quote (or creates a new quoted paragraph depending on context).</td></tr><tr><td>Shift + Enter</td><td>Inserts a line break within the same block quote.</td></tr></tbody></table>

### Single vs Double Returns

Understand how repeated returns affect spacing between content blocks.

-   Press **Enter once** to create a new paragraph (or a new list item if inside a list).
-   Press **Enter twice** to insert an empty paragraph between blocks.
-   Press **Shift + Enter** to insert a line break within the same block (paragraph, list item, or block quote).

## Table Editing Shortcuts

Insert and manage tables using the following shortcuts.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Insert Table</strong></td><td>Ctrl + Alt + Shift + T</td><td>⌘ + Option + Shift + T</td></tr><tr><td><strong>Insert Row Above</strong></td><td>Ctrl + Alt + ↑</td><td>Control + Option + ↑</td></tr><tr><td><strong>Insert Row Below</strong></td><td>Ctrl + Alt + ↓</td><td>Control + Option + ↓</td></tr><tr><td><strong>Insert Column Left</strong></td><td>Ctrl + Alt + ←</td><td>Control + Option + ←</td></tr><tr><td><strong>Insert Column Right</strong></td><td>Ctrl + Alt + →</td><td>Control + Option + →</td></tr></tbody></table>

## Miscellaneous Shortcuts

Use these shortcuts to insert dividers, open properties, or undo/redo actions.

<table><tbody><tr><td><strong>Action</strong></td><td><strong>Windows</strong></td><td><strong>Mac</strong></td></tr><tr><td><strong>Insert Divider</strong></td><td>Ctrl + H</td><td>⌘ + H</td></tr><tr><td><strong>Properties</strong></td><td>Ctrl + Shift + P</td><td>⌘ + Shift + P</td></tr><tr><td><strong>Undo</strong></td><td>Ctrl + Z</td><td>⌘ + Z</td></tr><tr><td><strong>Redo</strong></td><td>Ctrl + Shift + Z</td><td>⌘ + Shift + Z</td></tr></tbody></table>
