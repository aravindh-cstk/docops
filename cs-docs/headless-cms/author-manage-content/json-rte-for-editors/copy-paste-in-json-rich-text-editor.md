---
title: "Working with Copy-Paste in JSON Rich Text Editor"
description: "Learn how to copy and paste content into Contentstack’s JSON RTE while avoiding formatting issues and ensuring consistent frontend output."
url: /headless-cms/copy-paste-in-json-rich-text-editor
---

# Working with Copy-Paste in JSON Rich Text Editor

## Working with Copy-Paste in JSON Rich Text Editor

This guide provides clear guidelines on the acceptable practices for copying and pasting content into Contentstack’s JSON RTE. Maintaining consistency and preventing formatting issues are essential to delivering high-quality content. This documentation outlines best practices, limitations, and recommended workflows to help users avoid formatting challenges and align with design expectations.

## Understanding Copy-Paste Behavior

Copy-paste behavior in the JSON Rich Text Editor may vary depending on the source of the content (for example, Google Docs, Microsoft Word, or web pages). These sources often include hidden formatting or inline styles that are not always fully supported.

As a result:

-   Some formatting may be altered or removed during paste.
-   Hidden styles may impact how content renders on the frontend.
-   Achieving identical formatting across all sources is not always guaranteed.

## Recommended Approach: Paste as Plain Text

For the most consistent results, paste content as plain text to remove hidden formatting.

-   **Mac:** Command + Shift + V
-   **Windows:** Ctrl + Shift + V

This ensures that only clean text is inserted, allowing you to apply formatting directly within the JSON RTE.

After pasting:

-   Reapply formatting (such as headings, lists, or emphasis) using the JSON RTE toolbar.
-   Preview the content to ensure it renders as expected.

## Troubleshooting Formatting Issues

If pasted content does not render as expected:

1.  Paste the content as plain text.
2.  Reapply formatting within the JSON RTE.
3.  Recreate complex elements (such as nested lists).
4.  Preview the content on the frontend application.
5.  Adjust frontend styles (for example, margin or padding) if needed.

### List Spacing

When pasting bulleted or numbered lists from external sources:

-   Hidden formatting may override default spacing.
-   List items may appear compressed on the frontend.

To resolve this:

-   Paste content as plain text and recreate the list.
-   Remove and reapply list formatting if already pasted.
-   Validate spacing using frontend preview.

## Best Practices for Pasting Content into JSON RTE

To minimize formatting issues:

-   **Preferred Source:** Google Docs generally provides better compatibility, but results may still vary based on formatting.
-   **Review After Pasting:** Check lists, bullets, and other elements immediately after pasting.
-   **Validate Before Publishing:** Preview content on the frontend to catch rendering issues early.
-   **Avoid Unsupported Elements:** Refer to the table below for supported formatting.

## Supported Content Formatting When Pasting from Google Docs

The table below outlines supported, partially supported, and unsupported formatting when pasting from Google Docs into the JSON RTE.

| Group | Formatting | Supported When Pasted |
| --- | --- | --- |
| Font | Font color | Yes (Can be disabled via stack settings) |
| Font size | Yes (Can be disabled via stack settings) |
| Underline | Yes |
| Strikethrough | Yes |
| Superscript | Yes |
| Subscript | Yes |
| Paragraph | Alignment | Yes |
| Indentation left | Yes |
| Indentation right | Yes |
| Spacing before | No |
| Spacing after | No |
| Line spacing | No |
| Tabs | Alignment | No |
| Table Borders and Shading | Border Color | No |
| Background Color | No |
| Bullet points and Numbering | General | Yes |
| Nested Lists | Yes |
| Checkbox | No |
| Horizontal Line | General | Yes |
| Emojis | General | Yes |
| Smart Chips | Date, People, Voting Chip, StopWatch, Timer, Variables | Yes (Pasted as normal text) |
| File, Calendar Events, Place | Yes (Pasted as links) |
| Special Characters | General | Yes |

## Managing Limitations

While the JSON RTE offers flexibility, some limitations may affect pasted content:

-   **Hidden Formatting:** External content may introduce styles that affect rendering (for example, compressed list spacing).
-   **Loss of Advanced Formatting:** Custom spacing, borders, and layout styles may not be retained.
-   **Manual Adjustments Required:** Reformatting within the RTE may be needed.
-   **Unsupported Elements:** These are converted to plain text or links.

By following these recommendations, you can reduce formatting issues and ensure more consistent rendering across the editor and frontend.
