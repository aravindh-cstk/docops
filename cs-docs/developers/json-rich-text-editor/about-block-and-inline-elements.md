---
title: [JSON RTE] - About Block and Inline Elements
description: Learn the difference between block and inline elements in Contentstack's JSON RTE to create structured, well-formatted content easily.
url: https://www.contentstack.com/docs/headless-cms/about-block-and-inline-elements
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-10-29
filename: about-block-and-inline-elements.md
---

# [JSON RTE] - About Block and Inline Elements

This page explains [JSON RTE] - About Block and Inline Elements for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## About Block and Inline Elements

In the [JSON Rich Text Editor](./about-json-rich-text-editor.md) (RTE), content is organized into **block elements** and **inline elements**. Understanding the distinction between these two types of elements is essential for content managers to create structured and well-formatted content.

This guide will walk you through what block and inline elements are, how they function, and when to use them, ensuring a smooth content authoring experience.

### Block Elements

Block elements are used to structure the content into **meaningful sections** or **blocks**. These elements typically occupy the full width of the container they are placed in and are used to organize larger sections of content.

#### Characteristics of Block Elements

* Start on a **new line**.
* Take up the **entire width** of the content area.
* Contain other block elements or multiple inline elements inside them.
* Commonly used for layout organization (e.g., paragraphs, lists, images).

#### Examples of Block Elements

1. **Paragraphs** (<p>): Used for normal text blocks.
2. **Headings** (<h1>, <h2>, etc.): Represent section titles.
3. **Lists** (<ul>, <ol>): Create ordered and unordered lists.
4. **Blockquotes** (<blockquote>): Used for long quotes.
5. **Images or Media Embeds**: Placed as standalone content sections.

#### JSON Example of a Block Element

```
{  
  "type": "paragraph",  
  "children": [  
    { "text": "This is a paragraph inside a block element." }  
  ]  
}
```

### Inline Elements

Inline elements are used to format content **within block elements**. Unlike block elements, inline elements only occupy as much space as their content requires. They are placed **within the flow of text**, allowing content authors to apply styling and enhancements to parts of a sentence or paragraph.

#### Characteristics of Inline Elements

* Appear **inside block elements** (like a paragraph or list).
* Do not start on a new line; they flow with the text.
* Typically used for **styling** or **special formatting** (like bold or links).
* Cannot contain block elements inside them.

#### Examples of Inline Elements

1. **Bold Text** (<strong>): Highlights important content.
2. **Italic Text** (<em>): Emphasizes specific words.
3. **Hyperlinks** (<a>): Embeds links within text.
4. **Code** (<code>): Formats inline code snippets.

#### JSON Example of an Inline Element

```
{  
  "type": "text",  
  "marks": ["bold"],  
  "text": "This text is bold."  
}
```

### When to Use Block and Inline Elements

* **Block Elements**: Use these elements to structure content into logical sections like headings, paragraphs, lists, or quotes.
* **Inline Elements**: Use these elements to format specific words or phrases within a block element, such as applying bold to highlight important text or adding links.

### Working with Block and Inline Elements in JSON RTE

Content authors can create rich content by combining block and inline elements. For example, you can insert a bolded word inside a paragraph or create a heading followed by a list. These elements work together to provide structure and formatting flexibility within your content.

Here’s a **nested example** demonstrating both block and inline elements:

```
{  
  "type": "paragraph",  
  "children": [  
    {  
      "text": "This is a ",  
      "marks": []  
    },  
    {  
      "text": "bold",  
      "marks": ["bold"]  
    },  
    {  
      "text": " word within a paragraph block.",  
      "marks": []  
    }  
  ]  
}
```

Understanding block and inline elements will help you create well-structured and visually appealing content. Use **block elements** to organize content into meaningful sections and **inline elements** to format specific words or phrases within those sections.

For more details, explore our [API reference on GitHub](https://github.com/contentstack/rte-plugin-boilerplate/blob/main/docs/api-reference.md) to understand how these elements work behind the scenes.

## Common questions
### What is covered in [JSON RTE] - About Block and Inline Elements?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [JSON RTE] - About Block and Inline Elements?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
