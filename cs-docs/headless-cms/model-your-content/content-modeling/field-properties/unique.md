---
title: "Unique"
description: "Learn how the Unique property ensures data integrity by preventing duplicate field values in Contentstack entries."
url: /headless-cms/unique
---

# Unique

## Unique

The **Unique** property ensures that the value of a field does not repeat across entries within the same content type. It helps maintain data integrity by preventing duplicate values.

When you mark a field as **Unique** in a content type, Contentstack enforces the following rules:

-   The field value must be different from the value in the same field of all other entries in that content type.
-   If you enter a value that already exists, Contentstack displays a warning and blocks the save action until the value is changed.

![Unique_Property.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89738291b7fcea4b/69732bb123d5fb459ac77f08/Unique_Property.png)

**Note:**

-   The Unique property does not apply to fields marked as [Multiple](/docs/headless-cms/multiple).
-   You can save the entry even if non-mandatory fields marked as **Unique** are left empty.

## Unique Fields While Copying an Entry

When you copy an entry that includes fields marked as **Unique**, Contentstack automatically appends a timestamp to those field values. This prevents conflicts and ensures the copied entry can be saved successfully.

This applies to:

-   Both **Master Only** and **All Locales** copy modes
-   All fields marked as **Unique**
-   Localized entries included in an **All Locales** copy

**Example:**

If a Unique field originally contains: promo-code

After copying, it becomes: promo-code – Copy (2025-01-10 14:22:18)

![Unique_Fields_While_Copying_an_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt29fedd40ad932c32/69732bc3e3ff6fb101d2f18e/Unique_Fields_While_Copying_an_Entry.gif)

This adjustment ensures that the copied entry remains valid and does not trigger a uniqueness error during the save process.

The **Unique** property helps maintain data accuracy by preventing duplicate values within a content type. By automatically handling Unique fields during entry duplication, Contentstack streamlines content creation while preserving data integrity. Use this feature to ensure your content model supports reliable, conflict-free data entry across all locales and workflows.
