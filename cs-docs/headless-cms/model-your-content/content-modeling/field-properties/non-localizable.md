---
title: "Non-localizable"
description: "Learn how Non-localizable fields in Contentstack allow data to be edited only in the master language, auto-updating localized entries."
url: /headless-cms/non-localizable
uid: bltcb9c05c883bfaf20
---

# Non-localizable

## Non-localizable

The **Non-localizable** property lets you set the field’s data only in the **master language entry**. This means it **cannot be edited** (or translated) in the localized copies of the [entry](/docs/headless-cms/about-entries).

The [field](/docs/headless-cms/about-fields) data provided in the master language entry is automatically reflected in all [localized](/docs/headless-cms/about-localization) copies of the entry. In localized entries, the field remains in a **disabled (non-editable) mode**.

**Warning:** If you edit the data of a Non-localizable field in the master-language entry and save the entry, the field data in all localized copies automatically updates, and the **version number** of the localized entries will **increment by 1**.

![Enabling Non-localizable Field Property.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fb3e047a5838e1a/681831586a96c0b45456014b/Enabling_Non-localizable_Field_Property.png)

**Note:** In some cases, such as when you add a new instance of a Group, Modular Block, or Global in a localized entry, **Non-localizable behavior may not apply**. The new instance is treated as a localized addition, and its fields—including those marked Non-localizable—can be edited. For more details, refer to [Managing Non-Localizable Fields](/docs/headless-cms/managing-non-localizable-fields).

**Important**: The ability to mark fields as **Non-localizable** within **Group** (**Multiple**), **Modular Blocks**, and **Global** fields (**Multiple**) is plan based. If this feature is not working in your stack, it may not be enabled for your organization. To access it, please contact our [support](mailto:support@contentstack.com) team.

For users on older plan, the following limitations apply:

-   Fields inside a **Modular Blocks** field cannot be marked as Non-localizable
-   Fields inside a **Group** and **Global** field marked as **Multiple** cannot be marked as Non-localizable
