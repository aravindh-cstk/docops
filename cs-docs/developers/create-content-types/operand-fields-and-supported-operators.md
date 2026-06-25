---
title: "[Field Visibility Rules] - Operand Fields and Supported Operators"
description: Operand fields and supported operators for field-based operations in Field Visibility Rules.
url: https://www.contentstack.com/docs/headless-cms/operand-fields-and-supported-operators
product: Field Visibility Rules
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Field Visibility Rules] - Operand Fields and Supported Operators

This page explains which operand fields can be used in field-based operations and which operators are supported for each field type. It is intended for developers configuring Field Visibility Rules and should be used when selecting fields and operators for rule conditions.

## Operand Fields and Supported Operators

When configuring field-based operations, it is essential to understand the available fields and their corresponding supported operators. The table below outlines various field types and the specific operators that can be applied to each field.

| Field Name | Supported Operators |
|---|---|
| Title | Matches<br>Does not match<br>Starts with<br>Ends with<br>Contains |
| URL | Matches<br>Does not match<br>Starts with<br>Ends with<br>Contains |
| Single Line Textbox | Matches<br>Does not match<br>Starts with<br>Ends with<br>Contains |
| Multi Line Textbox | Matches<br>Does not match<br>Starts with<br>Ends with<br>Contains |
| Select | Is<br>Is not |
| Number | Equals<br>Not equals<br>Less than<br>Less than or equals<br>Greater than<br>Greater than or equals |
| Boolean | Is<br>Is not |
| Date | Is<br>Is not<br>Before<br>After |
| Reference | Is<br>Is not |

**Note:**
- The **Matches** and **Does not match** operators are case sensitive.
- You cannot use the [Rich-Text Editor](./rich-text-editor.md), [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md), [Markdown](./markdown.md), [File](./file.md), [Link](./link.md), [Custom](../create-custom-fields/about-custom-fields.md), [Taxonomy](./taxonomy.md) fields as the operand fields.
- When a **Group** field is marked as **Single**, you can use the parent and its sub-fields as operands. When marked as **Multiple**, you **cannot** use the **parent group field **itself, but you can use its sub-fields as operands.
- For** Modular Blocks**, neither the parent block nor nested child blocks can be used as operands. You can only select its sub-fields from within the same block as operands.

## Common questions

**Q: Are the Matches and Does not match operators case sensitive?**  
A: Yes, the **Matches** and **Does not match** operators are case sensitive.

**Q: Can I use Rich-Text Editor, JSON Rich Text Editor, Markdown, File, Link, Custom, or Taxonomy fields as operand fields?**  
A: No, you cannot use those fields as the operand fields.

**Q: Can I use Group fields as operands?**  
A: When a **Group** field is marked as **Single**, you can use the parent and its sub-fields as operands. When marked as **Multiple**, you **cannot** use the **parent group field **itself, but you can use its sub-fields as operands.

**Q: Can I use Modular Blocks as operands?**  
A: For** Modular Blocks**, neither the parent block nor nested child blocks can be used as operands. You can only select its sub-fields from within the same block as operands.