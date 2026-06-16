---
title: "[JSON Rich Text Editor] - Keyboard Shortcuts for JSON Rich Text Editor"
description: Keyboard shortcuts for formatting, headings, blocks, alignment, lists, line breaks, tables, and miscellaneous actions in the JSON Rich Text Editor on Windows and macOS.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor/keyboard-shortcuts-for-json-rich-text-editor
product: JSON Rich Text Editor
doc_type: reference
audience:
  - developers
  - content-authors
version: v1
last_updated: 2026-03-25
---

# [JSON Rich Text Editor] - Keyboard Shortcuts for JSON Rich Text Editor

This page lists keyboard shortcuts available in the JSON Rich Text Editor for Windows and macOS. It is intended for developers and content authors who want to speed up editing by applying formatting, inserting elements, and managing layout directly from the keyboard.

## Keyboard Shortcuts for JSON Rich Text Editor

Speed up your editing process in the JSON Rich Text Editor with these handy keyboard shortcuts. Whether you’re using Windows or macOS, this guide helps you apply formatting, insert elements, and adjust layout quickly.

## Formatting Shortcuts
Apply text styles such as bold, italic, underline, and more using these shortcuts.

| Action | Windows | Mac |
|---|---|---|
| Bold | Ctrl + B | ⌘ + B |
| Italic | Ctrl + I | ⌘ + I |
| Underline | Ctrl + U | ⌘ + U |
| Strikethrough | Ctrl + Shift + X | ⌘ + Shift + X |
| Inline Code | Ctrl + E | ⌘ + E |
| Superscript | Ctrl + Shift + ^ | ⌘ + Shift + ^ |
| Subscript | Ctrl + Shift + ~ | ⌘ + Shift + ~ |

## Heading and Paragraph Shortcuts
Use these shortcuts to switch between paragraph text and different heading levels.

| Action | Windows | Mac |
|---|---|---|
| Normal (Paragraph) | Ctrl + Alt + 0 | ⌘ + Option + 0 |
| Heading 1 | Ctrl + Alt + 1 | ⌘ + Option + 1 |
| Heading 2 | Ctrl + Alt + 2 | ⌘ + Option + 2 |
| Heading 3 | Ctrl + Alt + 3 | ⌘ + Option + 3 |
| Heading 4 | Ctrl + Alt + 4 | ⌘ + Option + 4 |
| Heading 5 | Ctrl + Alt + 5 | ⌘ + Option + 5 |
| Heading 6 | Ctrl + Alt + 6 | ⌘ + Option + 6 |

## Block and Code Shortcuts
Quickly add quotes or code blocks for better content structure.

| Action | Windows | Mac |
|---|---|---|
| Block Quote | Ctrl + Alt + 7 | ⌘ + Option + 7 |
| Code Block | Ctrl + Alt + 8 | ⌘ + Option + 8 |

## Text Alignment Shortcuts
Align text with ease using the shortcuts below.

| Action | Windows | Mac |
|---|---|---|
| Left Align | Ctrl + Alt + L | ⌘ + Ctrl + L |
| Center Align | Ctrl + Alt + E | ⌘ + Ctrl + E |
| Right Align | Ctrl + Alt + R | ⌘ + Ctrl + R |
| Justify | Ctrl + Alt + J | ⌘ + Ctrl + J |

## List Shortcuts
Create ordered or unordered lists quickly.

| Action | Windows | Mac |
|---|---|---|
| Ordered List | Ctrl + Shift + 7 | ⌘ + Shift + 7 |
| Unordered List | Ctrl + Shift + 8 | ⌘ + Shift + 8 |

## Line Break and Return Behavior
Manage line breaks and paragraph structure using **Enter** and **Shift + Enter**. These keys determine whether you create a new paragraph, start a new list item, or insert a line break within the same block.

**Note:** The Return key behavior can be customized at the stack level using the Stack Settings API request. Configure the `cs_breakline_on_enter` and `cs_only_breakline` parameters within the `rte` object to modify how the **Enter** and **Shift + Enter** keys behave. Refer to the [Stack Settings](/docs/developers/apis/content-management-api#add-stack-settings) documentation for more details.

### Paragraphs
Control spacing and structure within standard paragraph text.

| Key | Behavior |
|---|---|
| Enter | Creates a new paragraph by ending the current paragraph and starting a new one. |
| Shift + Enter | Inserts a soft line break within the same paragraph without creating a new paragraph block. |

### Lists
Control how list items continue or break within ordered and unordered lists.

| Key | Behavior |
|---|---|
| Enter | Ends the current list item and creates a new list item. |
| Shift + Enter | Inserts a soft line break within the same list item, letting you add multiple lines without creating a new list entry. |

### Block Quotes
Manage line breaks and exit behavior within block quotes.

| Key | Behavior |
|---|---|
| Enter | Exits the block quote (or creates a new quoted paragraph depending on context). |
| Shift + Enter | Inserts a line break within the same block quote. |

### Single vs Double Returns
Understand how repeated returns affect spacing between content blocks.
- Press **Enter once** to create a new paragraph (or a new list item if inside a list).
- Press **Enter twice** to insert an empty paragraph between blocks.
- Press **Shift + Enter** to insert a line break within the same block (paragraph, list item, or block quote).

## Table Editing Shortcuts
Insert and manage tables using the following shortcuts.

| Action | Windows | Mac |
|---|---|---|
| Insert Table | Ctrl + Alt + Shift + T | ⌘ + Option + Shift + T |
| Insert Row Above | Ctrl + Alt + ↑ | Control + Option + ↑ |
| Insert Row Below | Ctrl + Alt + ↓ | Control + Option + ↓ |
| Insert Column Left | Ctrl + Alt + ← | Control + Option + ← |
| Insert Column Right | Ctrl + Alt + → | Control + Option + → |

## Miscellaneous Shortcuts
Use these shortcuts to insert dividers, open properties, or undo/redo actions.

| Action | Windows | Mac |
|---|---|---|
| Insert Divider | Ctrl + H | ⌘ + H |
| Properties | Ctrl + Shift + P | ⌘ + Shift + P |
| Undo | Ctrl + Z | ⌘ + Z |
| Redo | Ctrl + Shift + Z | ⌘ + Shift + Z |

## Common questions

### Do these shortcuts work on both Windows and macOS?
Yes. The tables list the Windows and Mac equivalents for each action.

### How do I change what Enter and Shift + Enter do?
The Return key behavior can be customized at the stack level using the Stack Settings API request by configuring the `cs_breakline_on_enter` and `cs_only_breakline` parameters within the `rte` object.

### Where can I find the Stack Settings documentation referenced here?
Refer to the [Stack Settings](/docs/developers/apis/content-management-api#add-stack-settings) documentation link included in the note under “Line Break and Return Behavior”.

### What’s the difference between a new paragraph and a soft line break?
Enter creates a new paragraph (or new list item in a list), while Shift + Enter inserts a soft line break within the same block.