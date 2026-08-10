---
title: "Block and Inline Properties"
description: "Learn how to use block and inline properties in Contentstack’s JSON RTE to style, identify, and manipulate content elements with CSS classes and unique IDs."
url: /headless-cms/block-and-inline-properties
---

# Block and Inline Properties

## Block and Inline Properties

Contentstack's JSON Rich Text Editor provides the flexibility to assign **classes** and **IDs** to both **block-level** and **inline elements**. These properties allow developers to efficiently style, identify, and manipulate content on the frontend.

## Block-level Properties

Block-level properties apply to larger content structures such as:

-   Paragraphs (<p>)
-   Headings (<h1>, <h2>, etc.)
-   Lists (<ul>, <ol>)
-   Block quotes (<blockquote>)

For example, applying a CSS class to a paragraph for custom styling or adding an ID to a section for smooth scrolling.

To add a block-level property within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), then click the **Entries** icon.
2.  Create a new entry or open an existing one containing a JSON RTE field.
3.  In the **JSON RTE field**, select the block element (e.g., paragraph or heading) and click the **Property** icon in the toolbar.
4.  Click **Add Property** or use the shortcut key “Cmd + Shift + P” for Mac users and “Ctrl + Shift + P” for Windows users.
5.  In the **Add Property** modal that appears, enter the **Class** or **ID** property.
6.  Click **Apply** to add the property to the content element.
    
    ![Add class or ID to a block-level element in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ef960f35b7820d/6819c71c473f11be33acc2a0/1-class-and-ID-adding-gif.gif)
    

## Inline Properties

Inline properties apply to smaller segments within a block element, such as:

-   Bold or italic text within a paragraph (<b>, <i>)
-   Hyperlinks (<a>)
-   Inline code snippets (<code>)

For example, styling individual words or phrases within a paragraph using a CSS class or adding metadata for embedded links.

To add an inline property within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), then click the **Entries** icon.
2.  Create a new entry or open an existing one containing a JSON RTE field.
3.  In the **JSON RTE field**, highlight the text or element you want to style and click the **Property** icon in the toolbar.
4.  In the **Add Property** modal that appears, enter the **Class** or **ID** property.
5.  Click **Apply** to add the property to your content element.

## Best Practices for Using Class and ID Properties

Here are some tips to follow when working with CSS classes and IDs in the JSON RTE:

-   Use meaningful class names that describe the element’s purpose.
-   Ensure the ID is unique within the document to avoid conflicts.
-   Limit the number of classes applied to a single element to maintain clarity in styling.
-   Avoid inline styling; use CSS classes instead for a more maintainable design.

The **block and inline properties** feature in Contentstack's JSON RTE provides greater flexibility to developers and content creators. By leveraging **CSS classes** and **unique IDs**, users can create structured, maintainable, and visually consistent content.
