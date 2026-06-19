---
title: "[JSON RTE] - Block and Inline Properties"
description: Assign classes and IDs to block-level and inline elements in Contentstack's JSON Rich Text Editor.
url: https://www.contentstack.com/docs/headless-cms/block-and-inline-properties
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-creators
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Block and Inline Properties

This page explains how to add **Class** and **ID** properties to both **block-level** and **inline elements** in Contentstack’s JSON Rich Text Editor (JSON RTE). It is intended for developers and content creators who need to style, identify, or manipulate rich text content on the frontend while authoring entries.

### Block and Inline Properties

Contentstack's JSON Rich Text Editor provides the flexibility to assign **classes** and **IDs** to both **block-level** and **inline elements**. These properties allow developers to efficiently style, identify, and manipulate content on the frontend.

## Block-level Properties
Block-level properties apply to larger content structures such as:
- Paragraphs (`<p>`)
- Headings (`<h1>`, `<h2>`, etc.)
- Lists (`<ul>`, `<ol>`)
- Block quotes (`<blockquote>`)

For example, applying a CSS class to a paragraph for custom styling or adding an ID to a section for smooth scrolling.

To add a block-level property within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, select the block element (e.g., paragraph or heading) and click the **Property** icon in the toolbar.
- Click **Add Property** or use the shortcut key “Cmd + Shift + P” for Mac users and “Ctrl + Shift + P” for Windows users.
- In the **Add Property** modal that appears, enter the **Class** or **ID** property.
- Click **Apply** to add the property to the content element.

## Inline Properties
Inline properties apply to smaller segments within a block element, such as:
- Bold or italic text within a paragraph (`<b>`, `<i>`)
- Hyperlinks (`<a>`)
- Inline code snippets (`<code>`)

For example, styling individual words or phrases within a paragraph using a CSS class or adding metadata for embedded links.

To add an inline property within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, highlight the text or element you want to style and click the **Property** icon in the toolbar.
- In the **Add Property** modal that appears, enter the **Class** or **ID** property.
- Click **Apply** to add the property to your content element.

## Best Practices for Using Class and ID Properties
Here are some tips to follow when working with CSS classes and IDs in the JSON RTE:
- Use meaningful class names that describe the element’s purpose.
- Ensure the ID is unique within the document to avoid conflicts.
- Limit the number of classes applied to a single element to maintain clarity in styling.
- Avoid inline styling; use CSS classes instead for a more maintainable design.

The **block and inline properties** feature in Contentstack's JSON RTE provides greater flexibility to developers and content creators. By leveraging **CSS classes** and **unique IDs**, users can create structured, maintainable, and visually consistent content.

## Common questions

**How do I decide whether to use a Class or an ID property?**  
Use **Class** when you want to apply styling or behavior to multiple elements, and use **ID** when you need a unique identifier for a single element.

**Can I apply properties to both block and inline elements in the same JSON RTE field?**  
Yes, you can add properties to block elements (like paragraphs and headings) and inline elements (like links or bold text) within the same JSON RTE field.

**What should I do if an ID conflicts with another ID in the document?**  
Ensure the ID is unique within the document to avoid conflicts.

**Are inline styles supported as a substitute for Class properties?**  
Avoid inline styling; use CSS classes instead for a more maintainable design.