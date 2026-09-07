---
title: "Operand Fields and Supported Operators"
description: "Learn about supported operators for different fields in Contentstack, including text, number, boolean, date, and reference fields."
url: /headless-cms/operand-fields-and-supported-operators
uid: blt44987c4d8868b4c1
---

# Operand Fields and Supported Operators

## Operand Fields and Supported Operators

When configuring field-based operations, it is essential to understand the available fields and their corresponding supported operators. The table below outlines various field types and the specific operators that can be applied to each field.

<table><tbody><tr><td><strong>Field Name</strong></td><td><strong>Supported Operators</strong></td></tr><tr><td>Title</td><td><ul><li>Matches</li><li>Does not match</li><li>Starts with</li><li>Ends with</li><li>Contains</li></ul></td></tr><tr><td>URL</td><td><ul><li>Matches</li><li>Does not match</li><li>Starts with</li><li>Ends with</li><li>Contains</li></ul></td></tr><tr><td>Single Line Textbox</td><td><ul><li>Matches</li><li>Does not match</li><li>Starts with</li><li>Ends with</li><li>Contains</li></ul></td></tr><tr><td>Multi Line Textbox</td><td><ul><li>Matches</li><li>Does not match</li><li>Starts with</li><li>Ends with</li><li>Contains</li></ul></td></tr><tr><td>Select</td><td><ul><li>Is</li><li>Is not</li></ul></td></tr><tr><td>Number</td><td><ul><li>Equals</li><li>Not equals</li><li>Less than</li><li>Less than or equals</li><li>Greater than</li><li>Greater than or equals</li></ul></td></tr><tr><td>Boolean</td><td><ul><li>Is</li><li>Is not</li></ul></td></tr><tr><td>Date</td><td><ul><li>Is</li><li>Is not</li><li>Before</li><li>After</li></ul></td></tr><tr><td>Reference</td><td><ul><li>Is</li><li>Is not</li></ul></td></tr></tbody></table>

**Note:**

-   The **Matches** and **Does not match** operators are case sensitive.
-   You cannot use the [Rich-Text Editor](/docs/headless-cms/rich-text-editor), [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor), [Markdown](/docs/headless-cms/markdown), [File](/docs/headless-cms/file), [Link](/docs/headless-cms/link), [Custom](/docs/headless-cms/custom), [Taxonomy](/docs/headless-cms/taxonomy) fields as the operand fields.
-   When a **Group** field is marked as **Single**, you can use the parent and its sub-fields as operands. When marked as **Multiple**, you **cannot** use the **parent group field** itself, but you can use its sub-fields as operands.

-   For **Modular Blocks**, neither the parent block nor nested child blocks can be used as operands. You can only select its sub-fields from within the same block as operands.
