---
title: "FieldMetadata"
description: "Metadata details for the field."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/fieldmetadata"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# FieldMetadata

## FieldMetadata

Metadata details for the field.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| AllowRichText | bool | No | — | Determines whether the editor will support rich text, and is set to ‘true’ by default for Rich Text Editors. |
| Default | string | No | — | Allows you to set default fields for content types. |
| DefaultValue | object | No | — | Allows you to set a default value for a field. |
| Description | string | No | — | Allows you to provide the content for the Rich text editor field. |
| Instruction | string | No | — | Allows you to add instructions for the content managers while entering values for a field. The instructional text appears below the field. |
| Markdown | bool | No | — | Lets you assign a field to be a markdown by setting its value to ‘true’. |
| Multiline | bool | No | — | Provides multi-line capabilities to the Rich text editor. |
| Options | List<string> | No | — | If you choose the Custom editor, then the options key lets you specify the formatting options you prefer for your RTE toolbar, e.g., "options": ["h3", "blockquote", "sup"] |
| Placeholder | string | No | — | Allows you to provide a hint text about the values that need to be entered in an input field, e.g., Single Line Textbox. This text can be seen inside the field until you enter a value. |
| RefMultiple | bool | No | — | Allows you to set single or multiple reference to Reference field. |
| RichTextType | string | No | — | Lets you enable either the basic, custom, or advanced editor to enter your content. |
| Version | int | No | — | This key determines whether you are using the older version of the Rich Text Editor or the latest version. The value of 1 denotes that it is an older version of the editor, while 3 denotes that it is the latest version of the editor. |
