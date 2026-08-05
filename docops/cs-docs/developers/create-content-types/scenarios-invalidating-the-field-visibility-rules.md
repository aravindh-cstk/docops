---
title: "[Field Visibility Rules] - Scenarios Invalidating the Field Visibility Rules"
description: Scenarios that invalidate field visibility rules when fields, validations, or global field structures are changed.
url: https://www.contentstack.com/docs/headless-cms/scenarios-invalidating-the-field-visibility-rules
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Field Visibility Rules] - Scenarios Invalidating the Field Visibility Rules

This page explains the scenarios in which Field Visibility Rules can become invalid after changes to fields, validations, or Global fields. It is intended for developers and content modelers who configure visibility rules and need to troubleshoot rules that stop working after updates.

Scenarios That Invalidate Field Visibility Rules

[Field visibility rules](./about-field-visibility-rules.md) determine when specific fields appear based on predefined conditions. However, modifying the properties of these [fields](./about-fields.md) can invalidate the rules, causing them to no longer function as expected. If a saved rule is later altered, it may become invalid in the following cases.

## Changes to Fields Used in the Rule

Modifying fields in a visibility rule invalidates the rule:
- Changing the UID of the operand or target field.
- Deleting or removing the operand or target field.
- Marking the operand field as **Multiple**.
- Moving only the operand or only the target field into a [Group](./group.md) or [Modular Block](./modular-blocks.md). For Field Visibility Rules to remain valid, **both the operand** and **target** fields must be within the same Group or the same Modular Block.
- Changing the data type of the operand field to an unsupported type.
- When a Group is changed from **Single** to **Multiple**, the parent group field cannot be used as an operand.
- Altering a Modular Block so that a field is no longer a valid operand or target.

## Field Validations that Invalidate the Rule

Field visibility rules do not work if the target field has specific validations applied. The following validations invalidate the rule:
- **Date Range:** A specific start and end date
- **Max Instances:** For any field set as **Multiple**
- **Limit for Multiple Choices:** Restrictions on selections in a [Select](./select.md) field
- **Mandatory Field:** For the field marked as Required
- **Character Length:** Restrictions on the maximum number of characters (e.g., A blog name restricted to 10–20 characters)
- **Number Range:** Restrictions on numbers to be within a specific range (e.g., A value between 10 and 15)
- **Regular Expression Validation:** Custom validation through regex

## Global Field-Specific Scenarios

When applying Field Visibility Rules to **Global **fields, the following changes can also invalidate rules:
- **Modifying the Global Field Structure**Removing or renaming a field inside a Global field that is used as a source or target in a rule.
- Changing a field’s data type to one that is not supported by Field Visibility Rules.
- **Changing Multiple/Single Settings**Fields inside a Global field cannot be used as source or target fields if they are marked as **Multiple**.
- Changing a single-instance field to multiple inside a Global field will invalidate rules referencing it.
- **Moving the Global Field**If the Global field is removed from a Content Type, the inherited rules will no longer appear at the Content Type level.
- **Breaking Inheritance at Content Type Level**Attempting to update a Global field’s rule from a Content Type will fail. All edits to Global field rules must be done in the Global field editor.

If a field visibility rule stops working after making changes, review these scenarios to identify the cause and update the rule accordingly.

## Common questions

**Q: Why did my Field Visibility Rule stop working after I renamed a field?**  
A: Changing the UID of the operand or target field invalidates the rule.

**Q: Can I move only the target field into a Group or Modular Block and keep the rule working?**  
A: No. For Field Visibility Rules to remain valid, **both the operand** and **target** fields must be within the same Group or the same Modular Block.

**Q: Do Field Visibility Rules work if the target field has validations like Date Range or Mandatory Field?**  
A: No. The listed validations (such as **Date Range** and **Mandatory Field**) invalidate the rule.

**Q: Can I edit Global field rules from a Content Type?**  
A: No. Attempting to update a Global field’s rule from a Content Type will fail; edits must be done in the Global field editor.