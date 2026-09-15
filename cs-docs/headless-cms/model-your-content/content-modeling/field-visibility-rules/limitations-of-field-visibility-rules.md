---
title: "Limitations of Field Visibility Rules"
description: "Understand the limitations of Field Visibility Rules in Contentstack, including rule limits, operand restrictions, and target field constraints."
url: /headless-cms/limitations-of-field-visibility-rules
uid: blt8d9aa141dbbcae09
---

# Limitations of Field Visibility Rules

## Limitations of Field Visibility Rules

-   You can add a maximum of **10 rules** per [content type](/docs/headless-cms/about-content-types).
-   You can add a maximum of **5 conditions** per rule.
-   You can add a maximum of **5 target fields** per rule.
-   The target [field](/docs/headless-cms/about-fields) and the operand field cannot be the same within a rule.
-   In case of contradictions, the action defined for the parent field takes precedence over the action defined for the child field. For example, if your rule says to hide the [Group](/docs/headless-cms/group) field and show a sub-field of that Group field when a condition is met, it will not show the sub-field.
-   If you delete a field or edit its [properties](/docs/headless-cms/about-field-properties) when it is used as an operand or target field, the rule becomes invalid. You must delete the rule in such a case.

## Limitations on Operand Field

-   You cannot use the [Rich-Text Editor](/docs/headless-cms/rich-text-editor), [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor), [Markdown](/docs/headless-cms/markdown), [File](/docs/headless-cms/file), [Link](/docs/headless-cms/link), [Custom](/docs/headless-cms/custom), [Taxonomy](/docs/headless-cms/taxonomy) fields as the operand fields.

-   The operand field cannot be any field marked as [Multiple](/docs/headless-cms/multiple).
-   The operand field can be a sub-field of a Group or Global field, but the parent field should not be marked as Multiple.
-   The operand field cannot be a field that is of JSON data type.
-   You can use the **Group** parent as an operand only when the Group field is marked as **Single**.

-   You **cannot use** the parent Modular Block or its individual child blocks as operands.
-   The operand field cannot be a [Select](/docs/headless-cms/select) field where the **Selection Type** is set to **Multiple Choices**. 

## Limitations on Target Field

-   The target field cannot be any field marked as [Mandatory](/docs/headless-cms/mandatory). This is because when a target field is hidden, the entry is saved with an empty value for that field.
-   The target field cannot be a sub-field of a Modular Block, Group, or Global field marked as **Multiple**, unless both the operand and target fields belong to the same block, group, or global field.

-   If a field is marked as **Mandatory**, has **validation applied**, or is set to **Multiple**, placing that field inside a container such as a **Group** or **Modular Block** does not bypass the restriction.

-   You cannot set a field as a target more than once in a content type. This includes fields targeted by rules created directly in the Content Type as well as rules inherited from referenced Global fields.
-   The target field cannot be the same as the operand field of any rule. 
-   Any field that has validation applied cannot be used as the target field. The validations are as follows:
    -   A specified date range (a specific start and end date)
    -   A maximum instance limit (any multiple field)
    -   A limit for Multiple Choices in the Select field
    -   Mandatory field validation
    -   Character length constraints, for eg., the blog name with a character length between 10 and 20
    -   A range of numbers, for eg., 10 to 15
    -   Regular Expression validation
    -   Dimension constraints (e.g., image dimensions) and file extensions (e.g., .jpeg, .png)

## Limitations for Global Fields

-   Rules for a multiple Global field apply **per instance**, not across all instances.
-   Fields **inside** a Global field cannot be used in rules if they are themselves marked as **Multiple**.
-   Rules can only target **fields within the same Global field**.
-   When a Global field with rules is referenced in a Content Type, its rules are **inherited** into the Content Type in a **read-only** state. Fields targeted by these inherited rules cannot be targeted again in Content Type-level rules.
-   Inherited rules from a Global field **cannot be edited** or **deleted** at the Content Type level, they must be updated in the Global field’s Field Visibility Rules settings.
-   All operand and target field restrictions that apply to Content Types also apply to Global fields.
