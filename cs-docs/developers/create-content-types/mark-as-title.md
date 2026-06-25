---
title: "[Field Properties] - Mark as Title"
description: The Mark as title property lets you display the value of a specific field as the title for repeated content structures.
url: https://www.contentstack.com/docs/headless-cms/mark-as-title
product: Developers Documentation
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [Field Properties] - Mark as Title

This page explains how the **Mark as title** field property works for repeated content structures (Groups, Modular Blocks, and Global fields), who can use it, and when to enable it to improve readability and item identification in the entry editor.

## Title

[Field Properties] - Mark as Title

## Url

/developers/create-content-types/mark-as-title

## Article content

### Item 1

#### Article section

##### Heading

Mark as Title

##### Content

The **Mark as title** property lets you display the value of a specific field as the title for repeated content structures. This improves readability and helps content managers quickly identify items in the following field types:
- Group fields (multiple)
- Modular Blocks
- Global fields (multiple)

When enabled, the selected field's value appears as the display title for each instance in the entry editor.

The toggle appears in the **Advanced** section of the field properties panel for the following supported field types:
- [Single Line Textbox](./single-line-textbox.md)
- [Multi Line Textbox](./multi-line-textbox.md)
- [Number](./number.md)
- [File](./file.md)
- [Boolean](./boolean.md)
- [Rich Text Editor](./rich-text-editor.md)
- [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md)
- [Markdown](./markdown.md)
- [Reference](./reference.md)
- [Select](./select.md)
- [Date](./date.md)
- [Link](./link.md)

## Mark as Group Title
The **Mark as Group title** toggle appears for supported fields inside a Group field, but only when the Group is marked as **Multiple**.

Fields that are also marked as **Multiple** cannot be set as the Group title, **except** for the **Reference** field, which is supported.

**Example:**

In a real estate application, a Multiple Group field might store a list of **Property Listings**. Each listing includes fields like **Property Name**, **Address**, and **Price**. By marking the **Property Name** field as the **Group title**, editors can quickly identify which listing they’re editing within the group, rather than seeing generic labels like “Instance 1, Instance 2.”

## Mark as Modular Block Title
The **Mark as Modular block title** toggle appears for supported fields inside a Modular Block.

The selected field's value becomes the block’s display title, helping editors easily distinguish between multiple instances of the same block type.

**Example:**

In a blog CMS setup, a Modular Block may allow different types of content, such as **Text**, **Quote**, and **Image with Caption**. If the **Quote** block includes a **Person Name** field, marking this field as the block **title** makes it easier to identify quotes from different individuals when multiple quote blocks are used within an entry.

## Mark as Global Field Title
The **Mark as Global field title** toggle appears for supported fields within a Global field only if the Global field is set to **Multiple** in the content type.

The selected field’s value is displayed as the title when the Global field is expanded within an entry.

**Example:**

Consider a Global field used to define author bios, including **Author Name**, **Bio**, and **Profile Picture**. When this Global field is reused across entries, setting **Author Name** as the **title** makes it easier to identify which author is referenced when the field is expanded in the entry editor.

**Note:**
- Updating field properties may lead to data loss. Before making changes, refer to the [Content Type Change Management](../content-modeling/content-type-change-management.md) guide.
- Only **one** field can be marked as the title within a Group, Modular Block, or Global field.
- The toggle appears only for supported field types.

The **Mark as title** feature enhances clarity and usability in the entry editor by allowing content creators to assign meaningful display titles to repeated content structures. Whether you're working with Groups, Modular Blocks, or Global fields, using this setting streamlines navigation and content management, making it easier to identify and edit specific entries quickly and efficiently.

## Common questions

### Where do I find the Mark as title toggle?
The toggle appears in the **Advanced** section of the field properties panel for supported field types.

### Can I mark more than one field as the title within a Group, Modular Block, or Global field?
Only **one** field can be marked as the title within a Group, Modular Block, or Global field.

### When does the Mark as Group title option appear?
The **Mark as Group title** toggle appears for supported fields inside a Group field, but only when the Group is marked as **Multiple**.

### Are fields marked as Multiple allowed to be set as the Group title?
Fields that are also marked as **Multiple** cannot be set as the Group title, **except** for the **Reference** field, which is supported.