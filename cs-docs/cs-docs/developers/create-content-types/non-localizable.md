---
title: "[Field Properties] - Non-localizable"
description: Documentation for the Non-localizable field property in Contentstack content types.
url: https://www.contentstack.com/docs/headless-cms/non-localizable
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Field Properties] - Non-localizable

This page explains the **Non-localizable** field property, who it applies to (developers configuring content types), and when to use it (when a field should only be set in the master language and remain read-only in localized entries).

### Non-localizable

The **Non-localizable** property lets you set the field’s data only in the **master language entry**. This means it **cannot be edited** (or translated) in the localized copies of the [entry](/docs/content-managers/working-with-entries/about-entries).

The [field](/docs/developers/create-content-types/about-fields) data provided in the master language entry is automatically reflected in all [localized](/docs/developers/multilingual-content/about-localization) copies of the entry. In localized entries, the field remains in a **disabled (non-editable) mode**.

**Warning**: If you edit the data of a Non-localizable field in the master-language entry and save the entry, the field data in all localized copies automatically updates, and the **version number** of the localized entries will **increment by 1**.

**Note**: In some cases, such as when you add a new instance of a Group, Modular Block, or Global in a localized entry, **Non-localizable behavior may not apply**. The new instance is treated as a localized addition, and its fields—including those marked Non-localizable—can be edited. For more details, refer to [Managing Non-Localizable Fields](/docs/developers/create-content-types/managing-non-localizable-fields).

**Important**: The ability to mark fields as **Non-localizable** within **Group** (**Multiple**), **Modular Blocks**, and **Global** fields (**Multiple**) is plan based. If this feature is not working in your stack, it may not be enabled for your organization. To access it, please contact our [support](mailto:support@contentstack.com) team.For users on older plan, the following limitations apply:
- Fields inside a **Modular Blocks** field cannot be marked as Non-localizable
- Fields inside a **Group** and **Global** field marked as **Multiple** cannot be marked as Non-localizable

## Common questions

**Q: Can a Non-localizable field be edited in localized entries?**  
A: No. The field remains in a **disabled (non-editable) mode** in localized copies of the entry.

**Q: What happens to localized entries when a Non-localizable field is updated in the master language entry?**  
A: The field data in all localized copies automatically updates, and the **version number** of the localized entries will **increment by 1**.

**Q: Are there cases where Non-localizable behavior may not apply?**  
A: Yes. When you add a new instance of a Group, Modular Block, or Global in a localized entry, the new instance is treated as a localized addition and its fields—including those marked Non-localizable—can be edited.

**Q: Is Non-localizable support inside Group (Multiple), Modular Blocks, and Global (Multiple) available on all plans?**  
A: No. This capability is plan based; if it is not enabled for your organization, you may need to contact [support](mailto:support@contentstack.com).