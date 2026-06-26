---
title: "[Field Properties] - Mandatory"
description: Documentation for the Mandatory field property, which designates fields as required during entry creation and publishing.
url: https://www.contentstack.com/docs/headless-cms/mandatory
product: Documentation
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [Field Properties] - Mandatory

This page explains the **Mandatory** field property, who should use it (developers designing content types and content managers creating entries), and when to apply it to ensure required data is captured before publishing.

### Item 1

#### Article section

##### Heading

Mandatory

##### Content

The **Mandatory** property allows you to designate specific fields as required. When a field is set as mandatory, content managers must provide input in that field while creating or editing an entry. This ensures critical data is always captured and helps maintain consistency across entries.

When a field is marked as mandatory, the **(required)** label appears next to the field on the entry page, as shown in the image below:

If you leave a mandatory field blank, you can still save the entry as a draft or in-progress version. However, publishing is blocked until all mandatory fields are filled in. This behavior ensures that incomplete content does not get published accidentally.

You can enable the **Mandatory** property for the following field types:
- **URL Field**: You can mark the URL field as mandatory to ensure content contributors provide a valid path before publishing an entry. This is useful for enforcing structured URLs across content types.
- **Group Fields**: Mark the entire group as required to ensure users fill out at least one of its subfields.
- **Global Fields**: Apply the mandatory setting to any global field to enforce input across all entries that use it.
- **Reference Fields**: Ensure users select at least one referenced entry when the reference field is marked as required.
- **Modular Blocks**:**Parent Level**: Mark the Modular Block field itself as mandatory to ensure at least one block is added.
- **Block Level**: Set individual fields inside a block as mandatory to capture necessary data within each block instance.

The mandatory setting applies during entry creation and editing workflows. It is especially useful for enforcing content standards across complex content types and multi-author teams.

**Additional Resource**: You can combine the **Mandatory** property with **Validation (Regex)** to enforce advanced formatting rules on text fields, such as the Title. For implementation details, refer to our [validation](./validation-regex.md) documentation.

## Common questions

**Q: Can I save an entry if a mandatory field is empty?**  
A: Yes. If you leave a mandatory field blank, you can still save the entry as a draft or in-progress version.

**Q: What happens if I try to publish with mandatory fields missing?**  
A: Publishing is blocked until all mandatory fields are filled in.

**Q: Which field types support the Mandatory property?**  
A: URL Field, Group Fields, Global Fields, Reference Fields, and Modular Blocks (Parent Level and Block Level).

**Q: Can Mandatory be used with other constraints?**  
A: Yes. You can combine the **Mandatory** property with **Validation (Regex)** to enforce advanced formatting rules on text fields.