---
title: "[JSON RTE] - Working with Copy-Paste in JSON Rich Text Editor"
description: Guidelines, best practices, supported formatting, and limitations for copying and pasting content into Contentstack’s JSON Rich Text Editor (JSON RTE).
url: https://www.contentstack.com/docs/developers/json-rich-text-editor/copy-paste-in-json-rich-text-editor
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-authors
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Working with Copy-Paste in JSON Rich Text Editor

This page explains acceptable practices for copying and pasting content into Contentstack’s JSON Rich Text Editor (JSON RTE). It is intended for developers and content authors who paste content from sources like Google Docs and need to understand supported formatting, limitations, and recommended workflows to avoid formatting issues.

## Working with Copy-Paste in JSON Rich Text Editor

This guide provides clear guidelines on the acceptable practices for copying and pasting content into Contentstack’s JSON RTE. Maintaining consistency and preventing formatting issues are essential to delivering high-quality content. This documentation outlines best practices, limitations, and recommended workflows to help users avoid formatting challenges and align with design expectations.

## Best Practices for Pasting Content into JSON RTE

To minimize formatting issues and ensure a smooth content creation experience, follow these recommended practices.
- **Preferred Editor: **We recommend using **Google Docs** as the primary source, as it ensures better compatibility with the JSON RTE. Copying from other sources or websites may introduce inconsistencies, requiring manual fixes.
- **Review and Edit After Pasting**: Inspect the content after pasting to ensure that elements like bullet points, lists, or smart chips render correctly. Make any necessary adjustments immediately to avoid issues during final publishing.
- **Test Complex Elements Frequently: **If your content includes complex structures (e.g., nested lists or special chips), render the content on the front-end to detect and resolve any visual inconsistencies early.
- **Avoid Unsupported Elements**: Refer to the list of supported elements below and avoid unsupported features to prevent data loss or misrendering.

## Supported Content Formatting When Pasting from Google Docs

The table below outlines the content formatting elements that are supported, partially supported, or not supported when pasted from Google Docs into the JSON RTE.

| Group | Formatting | Pasted from Google Docs |
|---|---|---|
| Font | Font color | Yes<br>(Can be disabled via stack settings) |
| Font | Font size | Yes<br>(Can be disabled via stack settings) |
| Font | Underline | Yes |
| Font | Strikethrough | Yes |
| Font | Superscript | Yes |
| Font | Subscript | Yes |
| Paragraph | Alignment | Yes |
| Paragraph | Indentation left | Yes |
| Paragraph | Indentation right | Yes |
| Paragraph | Spacing before | No |
| Paragraph | Spacing after | No |
| Paragraph | Line spacing | No |
| Tabs | Alignment | No |
| Table Borders and Shading | Border Color | No |
| Table Borders and Shading | Background Color | No |
| Bullet points and Numbering | General | Yes |
| Bullet points and Numbering | Nested Lists | Yes |
| Bullet points and Numbering | Checkbox | No |
| Horizontal Line | General | Yes |
| Emojis | General | Yes |
| Smart Chips | Date, People, Voting Chip, StopWatch, Timer, Variables | Yes (Pasted as normal text) |
| Smart Chips | File, Calendar Events, Place | Yes (Pasted as links) |
| Special Characters | General | Yes |

## Managing Limitations

    While the JSON RTE offers flexibility, users may encounter formatting issues when pasting content from unsupported sources. Follow these steps to manage limitations effectively:
- **Loss of Advanced Formatting: **Some advanced features (e.g., borders, advanced styling) may not be retained when pasted.
- **Manual Adjustments May Be Required: **Users might need to correct visual inconsistencies by manually editing the content after pasting.
- **Unsupported Elements as Plain Text: **Elements not supported by JSON RTE will appear as plain text or links, and formatting may be lost.

    By following these recommendations, you can maintain high-quality content and minimize disruptions caused by formatting inconsistencies.

## Common questions

### What is the preferred source editor for pasting into JSON RTE?
Google Docs is recommended as the primary source, as it ensures better compatibility with the JSON RTE.

### What should I do after pasting content into JSON RTE?
Inspect the content after pasting to ensure that elements like bullet points, lists, or smart chips render correctly, and make any necessary adjustments immediately.

### What happens to unsupported elements when pasted into JSON RTE?
Elements not supported by JSON RTE will appear as plain text or links, and formatting may be lost.

### How can I catch issues with complex pasted content early?
If your content includes complex structures (e.g., nested lists or special chips), render the content on the front-end to detect and resolve any visual inconsistencies early.