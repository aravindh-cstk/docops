---
title: "Scenarios Invalidating the Field Visibility Rules"
description: "Learn scenarios that invalidate field visibility rules in Contentstack, including field changes, deletions, and validation conflicts."
url: /headless-cms/scenarios-invalidating-the-field-visibility-rules
---

# Scenarios Invalidating the Field Visibility Rules

## Scenarios That Invalidate Field Visibility Rules

[Field visibility rules](/docs/headless-cms/about-field-visibility-rules) determine when specific fields appear based on predefined conditions. However, modifying the properties of these [fields](/docs/headless-cms/about-fields) can invalidate the rules, causing them to no longer function as expected. If a saved rule is later altered, it may become invalid in the following cases.

## Changes to Fields Used in the Rule

Modifying fields in a visibility rule invalidates the rule:

-   Changing the UID of the operand or target field.
-   Deleting or removing the operand or target field.
-   Marking the operand field as **Multiple**.
-   Moving only the operand or only the target field into a [Group](/docs/headless-cms/group) or [Modular Block](/docs/headless-cms/modular-blocks). For Field Visibility Rules to remain valid, **both the operand** and **target** fields must be within the same Group or the same Modular Block.
    
-   Changing the data type of the operand field to an unsupported type.
-   When a Group is changed from **Single** to **Multiple**, the parent group field cannot be used as an operand.
    
-   Altering a Modular Block so that a field is no longer a valid operand or target.

## Field Validations that Invalidate the Rule

Field visibility rules do not work if the target field has specific validations applied. The following validations invalidate the rule:

-   **Date Range:** A specific start and end date
-   **Max Instances:** For any field set as **Multiple**
-   **Limit for Multiple Choices:** Restrictions on selections in a [Select](/docs/headless-cms/select) field
-   **Mandatory Field:** For the field marked as Required
-   **Character Length:** Restrictions on the maximum number of characters (e.g., A blog name restricted to 10–20 characters)
-   **Number Range:** Restrictions on numbers to be within a specific range (e.g., A value between 10 and 15)
-   **Regular Expression Validation:** Custom validation through regex

## Global Field-Specific Scenarios

When applying Field Visibility Rules to **Global** fields, the following changes can also invalidate rules:

-   **Modifying the Global Field Structure**
    -   Removing or renaming a field inside a Global field that is used as a source or target in a rule.
    -   Changing a field’s data type to one that is not supported by Field Visibility Rules.
-   **Changing Multiple/Single Settings**
    -   Fields inside a Global field cannot be used as source or target fields if they are marked as **Multiple**.
    -   Changing a single-instance field to multiple inside a Global field will invalidate rules referencing it.
-   **Moving the Global Field**
    -   If the Global field is removed from a Content Type, the inherited rules will no longer appear at the Content Type level.
-   **Breaking Inheritance at Content Type Level**
    -   Attempting to update a Global field’s rule from a Content Type will fail. All edits to Global field rules must be done in the Global field editor.

If a field visibility rule stops working after making changes, review these scenarios to identify the cause and update the rule accordingly.
