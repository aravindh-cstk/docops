---
title: "Mark as Title"
description: "The Mark as Group title property sets a specific field’s value as the title of a Group field when marked as Multiple in Contentstack."
url: /headless-cms/mark-as-title
uid: blt717d2cbd4e50e1ba
---

# Mark as Title

## Mark as Title

The **Mark as title** property lets you display the value of a specific field as the title for repeated content structures. This improves readability and helps content managers quickly identify items in the following field types:

-   Group fields (multiple)
-   Modular Blocks
-   Global fields (multiple)

When enabled, the selected field's value appears as the display title for each instance in the entry editor.

The toggle appears in the **Advanced** section of the field properties panel for the following supported field types:

-   [Single Line Textbox](/docs/headless-cms/single-line-textbox)
-   [Multi Line Textbox](/docs/headless-cms/multi-line-textbox)
-   [Number](/docs/headless-cms/number)
-   [File](/docs/headless-cms/file)
-   [Boolean](/docs/headless-cms/boolean)
-   [Rich Text Editor](/docs/headless-cms/rich-text-editor)
-   [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor)
-   [Markdown](/docs/headless-cms/markdown)
-   [Reference](/docs/headless-cms/reference)
-   [Select](/docs/headless-cms/select)
-   [Date](/docs/headless-cms/date)
-   [Link](/docs/headless-cms/link)

## Mark as Group Title

The **Mark as Group title** toggle appears for supported fields inside a Group field, but only when the Group is marked as **Multiple**.

Fields that are also marked as **Multiple** cannot be set as the Group title, **except** for the **Reference** field, which is supported.

**Example:**

In a real estate application, a Multiple Group field might store a list of **Property Listings**. Each listing includes fields like **Property Name**, **Address**, and **Price**. By marking the **Property Name** field as the **Group title**, editors can quickly identify which listing they’re editing within the group, rather than seeing generic labels like “Instance 1, Instance 2.”

![Mark as Group Title.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b0af0b2d71fa9f3/69398e9cdceb7f621351a412/Mark_as_Group_Title.gif)

## Mark as Modular Block Title

The **Mark as Modular block title** toggle appears for supported fields inside a Modular Block.

The selected field's value becomes the block’s display title, helping editors easily distinguish between multiple instances of the same block type.

**Example:**

In a blog CMS setup, a Modular Block may allow different types of content, such as **Text**, **Quote**, and **Image with Caption**. If the **Quote** block includes a **Person Name** field, marking this field as the block **title** makes it easier to identify quotes from different individuals when multiple quote blocks are used within an entry.

![Mark as Modular Block Title.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt984c9c520ddc5dea/69398e9d9f57d6671f2af986/Mark_as_Modular_Block_Title.gif)

## Mark as Global Field Title

The **Mark as Global field title** toggle appears for supported fields within a Global field only if the Global field is set to **Multiple** in the content type.

The selected field’s value is displayed as the title when the Global field is expanded within an entry.

**Example:**

Consider a Global field used to define author bios, including **Author Name**, **Bio**, and **Profile Picture**. When this Global field is reused across entries, setting **Author Name** as the **title** makes it easier to identify which author is referenced when the field is expanded in the entry editor.

![Mark as Global Field Title.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b64946d2035ee06/69398e9cdceb7ffd7551a416/Mark_as_Global_Field_Title.gif)

**Note:**

-   Updating field properties may lead to data loss. Before making changes, refer to the [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide.
-   Only **one** field can be marked as the title within a Group, Modular Block, or Global field.
-   The toggle appears only for supported field types.

The **Mark as title** feature enhances clarity and usability in the entry editor by allowing content creators to assign meaningful display titles to repeated content structures. Whether you're working with Groups, Modular Blocks, or Global fields, using this setting streamlines navigation and content management, making it easier to identify and edit specific entries quickly and efficiently.
