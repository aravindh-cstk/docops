---
title: Set Up Your Project - Markdown
description: Documentation for the Markdown field and supported formatting commands in the Markdown editor.
url: https://www.contentstack.com/docs/headless-cms/markdown
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-26
---

# Set Up Your Project - Markdown

This page explains the Markdown field in Contentstack, including what it is used for and which formatting commands are supported in the Markdown editor. It is intended for developers and content managers configuring content types or authoring entries where Markdown formatting is required.

### Item 1

#### Article section

##### Heading

Markdown

##### Content

The Markdown field enables users to input text in markdown format in an [entry](/docs/content-managers/working-with-entries/about-entries). Markdown text is marked with certain tags or formatting instructions. Once done entering your content, click on the **Preview** tab to preview your formatted text in real time.

**Note:** Contentstack uses the "Markdown" syntax for its Markdown field. You can find more details about the Markdown syntax in [Pagedown](https://code.google.com/archive/p/pagedown/wikis/PageDown.wiki).

This field possesses certain [properties](/docs/developers/create-content-types/about-field-properties) that you can change any time as per your needs. The properties that can be modified are “[Display Name](/docs/developers/create-content-types/display-name),” “[Unique ID](/docs/developers/create-content-types/unique-id),” “[Placeholder Value](/docs/developers/create-content-types/placeholder-value),” “[Instruction Value](/docs/developers/create-content-types/instruction-value),” “[Help Text](/docs/developers/create-content-types/help-text),” “[Mandatory](/docs/developers/create-content-types/mandatory),” “[Multiple](/docs/developers/create-content-types/multiple),” and “[Non-localizable](/docs/developers/create-content-types/non-localizable).”

**Additional Resource:** You can also try out our [Rich Text Editor](/docs/developers/create-content-types/rich-text-editor) and [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/). You can refer to our documentation to understand the difference between [Markdown and RTE](/docs/developers/how-to-guides/content-modeling-best-practices#rte-vs-markdown).

After adding this field in content type, you will see it on your entry page as shown below.

## Commands Supported

You can use the following commands in the Markdown editor to format your content:

| Commands | Syntax | Description |
|---|---|---|
| Bold | __Sample content__ | Use `__`(double underscore) or `****` (double asterisk) at the start and end of the content to format it in bold. |
| Italic | _Sample content_ | Use `_` or `***` at the start and end of the content to format it in italic. |
| Bold and Italic | *__Sample content__* | Use `**__ *`(asterisk and double underscore) at the start and `*__* *`at the end of the content to format it in bold and italic. |
| Heading 1 | # Sample content | Use `# `at the start of the content to format it as Heading 1. |
| Heading 2 | ## Sample content | Use` ## `at the start of the content to format it as Heading 2. |
| Heading 3 | ### Sample content | Use `### `at the start of the content to format it as Heading 3. |
| Heading 4 | #### Sample content | Use `#### `at the start of the content to format it as Heading 4. |
| Heading 5 | ##### Sample content | Use `##### `at the start of the content to format it as Heading 5. |
| Heading 6 | ###### Sample content | Use `###### `at the start of the content to format it as Heading 6. |
| Block Quote | Sample content | Use `> `at the start of the content to add block quote formatting. |
| Ordered List | 1. Sample content for Ordered List | Use `1. `or `1)` at the start of the content to add an ordered list. |
| Unordered List | * Sample content for Unordered List | Use`* **` or` - `at the start of the content to add an unordered list. |
| Code Snippet | `Sample content for single line/word a code` | Use ``` at the start and end of the content for single line code snippets. |
| Multi Line Code | ```Multi Line<br><br>Code``` | Use ```` `at the start and end of the content for multi line code snippets. |
| Horizontal Rules | *** | Use `*** `or `---` or `___` to add horizontal rules. |
| Link | [Text to display](URL) | Enter the display text for the URL within `[]` followed by the URL within `().` |
| Image | ![alt text](image-URL) | Use `!` at the beginning, then enter the alt text within `[]` followed by the image source within `()`. |
| HTML Elements | <p>Hello World!<p><br><br><pre>Hello World!</pre> | Use HTML tags to format text directly in the editor. You must separate block level HTML tags, such as <div>, <pre>, <p>, etc. from surrounding text by blank lines, and avoid indenting the start and end tags with tabs or spaces. |
| Strikethrough | ~~Sample Content~~ | Use `~~ `at the beginning and end of the content to strikethrough. |
| Table | \| Title 1 \| Title 2 \|<br><br>\| ------ \| ------- \|<br><br>\| Point 1 \| Point 1 \|<br><br>\| Point 2 \| Point 2 \| | Use vertical bars `| `at the beginning and end for each row. |
| Comments | <!-- Sample content for comment --> | Use `<!--` at the start and `-->` at the end of the content to add a comment. |

## Common questions

**How do I preview formatted Markdown while editing?**  
Once done entering your content, click on the **Preview** tab to preview your formatted text in real time.

**Which Markdown syntax does Contentstack use for the Markdown field?**  
Contentstack uses the "Markdown" syntax for its Markdown field. You can find more details about the Markdown syntax in [Pagedown](https://code.google.com/archive/p/pagedown/wikis/PageDown.wiki).

**Can I change the Markdown field settings after creating it?**  
This field possesses certain [properties](/docs/developers/create-content-types/about-field-properties) that you can change any time as per your needs.

**Where can I learn the difference between Markdown and Rich Text Editor?**  
You can refer to our documentation to understand the difference between [Markdown and RTE](/docs/developers/how-to-guides/content-modeling-best-practices#rte-vs-markdown).