---
title: "[Set Up Your Project] - Instruction Value"
description: Documentation for the Instruction Value property used when creating content types and fields.
url: https://www.contentstack.com/docs/headless-cms/instruction-value
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Instruction Value

This page explains the **Instruction Value** property for fields in a content type, intended for developers configuring content types and fields so Content Managers see guidance on what to enter when creating or editing entries.

### Item 1

#### Article section

##### Heading

Instruction Value

##### Content

The **Instruction Value** property enables you to add instructions or any information to the [Content Manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) regarding the value that is expected in the given field.

To set this property, [create a content type](/docs/developers/create-content-types/create-a-content-type) and add a [field](/docs/developers/create-content-types/about-fields) to it. Then, in the **{field_name} Properties** section of that field, you will see this property that lets you enter a text.

Once entered, you will see the instructional text right below the field in the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Example**: If your content type has a “Name” ([Single Line Textbox](/docs/developers/create-content-types/single-line-textbox)) field, and you want to instruct users to enter their first as well as last names in the field. For this, you can add something like “Enter your full name here,” and you will see this in the entry page as shown below:

## Common questions

**Q: Where does the Instruction Value text appear?**  
A: It appears right below the field in the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Q: Who is the Instruction Value intended for?**  
A: It is intended for the [Content Manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager).

**Q: How do I set the Instruction Value property?**  
A: [Create a content type](/docs/developers/create-content-types/create-a-content-type), add a [field](/docs/developers/create-content-types/about-fields), then use the **{field_name} Properties** section to enter the text.