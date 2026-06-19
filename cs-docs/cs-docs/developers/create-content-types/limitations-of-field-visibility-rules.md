---
title: "[Field Visibility Rules] - Limitations of Field Visibility Rules"
description: Limitations and restrictions for Field Visibility Rules, including operand fields, target fields, and global fields.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-field-visibility-rules
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Field Visibility Rules] - Limitations of Field Visibility Rules

This page lists the limitations and restrictions for Field Visibility Rules, including maximum rule counts and constraints on operand fields, target fields, and Global fields. It is intended for developers and content modelers configuring Field Visibility Rules in content types and Global fields, and should be used when designing or troubleshooting rule behavior.

## Limitations of Field Visibility Rules

- You can add a maximum of **10 rules** per [content type](/docs/developers/create-content-types/about-content-types).
- You can add a maximum of **5 conditions** per rule.
- You can add a maximum of **5 target fields** per rule.
- The target [field](/docs/developers/create-content-types/about-fields) and the operand field cannot be the same within a rule.
- In case of contradictions, the action defined for the parent field takes precedence over the action defined for the child field. For example, if your rule says to hide the [Group](/docs/developers/create-content-types/group) field and show a sub-field of that Group field when a condition is met, it will not show the sub-field.
- If you delete a field or edit its [properties](/docs/developers/create-content-types/about-field-properties) when it is used as an operand or target field, the rule becomes invalid. You must delete the rule in such a case.

## Limitations on Operand Field

- You cannot use the [Rich-Text Editor](/docs/developers/create-content-types/rich-text-editor), [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor), [Markdown](/docs/developers/create-content-types/markdown), [File](/docs/developers/create-content-types/file), [Link](/docs/developers/create-content-types/link), [Custom](/docs/developers/create-custom-fields/about-custom-fields), [Taxonomy](/docs/developers/create-content-types/taxonomy) fields as the operand fields.
- The operand field cannot be any field marked as [Multiple](/docs/developers/create-content-types/multiple).
- The operand field can be a sub-field of a Group or Global field, but the parent field should not be marked as Multiple.
- The operand field cannot be a field that is of JSON data type.
- You can use the **Group** parent as an operand only when the Group field is marked as **Single**.
- You **cannot use** the parent Modular Block or its individual child blocks as operands.
- The operand field cannot be a [Select](/docs/developers/create-content-types/select) field where the **Selection Type** is set to **Multiple Choices**.

## Limitations on Target Field

- The target field cannot be any field marked as [Mandatory](/docs/developers/create-content-types/mandatory). This is because when a target field is hidden, the entry is saved with an empty value for that field.
- The target field cannot be a sub-field of a Modular Block, Group, or Global field marked as **Multiple**, unless both the operand and target fields belong to the same block, group, or global field.
- If a field is marked as **Mandatory**, has **validation applied**, or is set to **Multiple**, placing that field inside a container such as a **Group** or **Modular Block** does not bypass the restriction.
- You cannot set a field as a target more than once in a content type. This includes fields targeted by rules created directly in the Content Type as well as rules inherited from referenced Global fields.
- The target field cannot be the same as the operand field of any rule.
- Any field that has validation applied cannot be used as the target field. The validations are as follows:A specified date range (a specific start and end date)
- A maximum instance limit (any multiple field)
- A limit for Multiple Choices in the Select field
- Mandatory field validation
- Character length constraints, for eg., the blog name with a character length between 10 and 20
- A range of numbers, for eg., 10 to 15
- Regular Expression validation
- Dimension constraints (e.g., image dimensions) and file extensions (e.g., .jpeg, .png)

## Limitations for Global Fields

- Rules for a multiple Global field apply **per instance**, not across all instances.
- Fields **inside** a Global field cannot be used in rules if they are themselves marked as **Multiple**.
- Rules can only target **fields within the same Global field**.
- When a Global field with rules is referenced in a Content Type, its rules are **inherited** into the Content Type in a **read-only** state. Fields targeted by these inherited rules cannot be targeted again in Content Type-level rules.
- Inherited rules from a Global field **cannot be edited** or **deleted** at the Content Type level, they must be updated in the Global field’s Field Visibility Rules settings.
- All operand and target field restrictions that apply to Content Types also apply to Global fields.

## Common questions

**Q: How many Field Visibility Rules can I add to a content type?**  
A: You can add a maximum of **10 rules** per content type.

**Q: Can I use a Multiple field as an operand field?**  
A: No. The operand field cannot be any field marked as **Multiple**.

**Q: Can a Mandatory field be used as a target field?**  
A: No. The target field cannot be any field marked as **Mandatory**.

**Q: Can I edit or delete inherited rules from a Global field at the Content Type level?**  
A: No. Inherited rules from a Global field **cannot be edited** or **deleted** at the Content Type level; they must be updated in the Global field’s Field Visibility Rules settings.