---
title: "[Field Properties] - Unique"
description: Field property that ensures a field value does not repeat across entries within the same content type, including behavior when copying entries.
url: https://www.contentstack.com/docs/developers/create-content-types/unique
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Field Properties] - Unique

This page explains the **Unique** field property in Contentstack, including the rules it enforces within a content type and how unique fields behave when copying entries. It is intended for developers and content modelers configuring content types and validating data integrity, especially when duplicating entries across locales.

## Article content

### Item 1

#### Article section

##### Heading

Unique

##### Content

The **Unique** property ensures that the value of a field does not repeat across entries within the same content type. It helps maintain data integrity by preventing duplicate values.

When you mark a field as **Unique** in a content type, Contentstack enforces the following rules:
- The field value must be different from the value in the same field of all other entries in that content type.
- If you enter a value that already exists, Contentstack displays a warning and blocks the save action until the value is changed.

**Note:**
- The Unique property does not apply to fields marked as [Multiple](/docs/developers/create-content-types/multiple).
- You can save the entry even if non-mandatory fields marked as **Unique** are left empty.

## Unique Fields While Copying an Entry
When you copy an entry that includes fields marked as **Unique**, Contentstack automatically appends a timestamp to those field values. This prevents conflicts and ensures the copied entry can be saved successfully.

This applies to:
- Both **Master Only** and **All Locales** copy modes
- All fields marked as **Unique**
- Localized entries included in an **All Locales** copy

**Example:**

If a Unique field originally contains: `promo-code`

After copying, it becomes: `promo-code – Copy (2025-01-10 14:22:18)`

This adjustment ensures that the copied entry remains valid and does not trigger a uniqueness error during the save process.

The **Unique** property helps maintain data accuracy by preventing duplicate values within a content type. By automatically handling Unique fields during entry duplication, Contentstack streamlines content creation while preserving data integrity. Use this feature to ensure your content model supports reliable, conflict-free data entry across all locales and workflows.

## Common questions

### Does the Unique property prevent saving an entry if the field is empty?
You can save the entry even if non-mandatory fields marked as **Unique** are left empty.

### Does Unique apply to fields marked as Multiple?
No. The Unique property does not apply to fields marked as [Multiple](/docs/developers/create-content-types/multiple).

### What happens to Unique fields when I copy an entry?
Contentstack automatically appends a timestamp to fields marked as **Unique** to prevent conflicts and ensure the copied entry can be saved successfully.

### Does the timestamp behavior apply to localized entries and copy modes?
Yes. This applies to both **Master Only** and **All Locales** copy modes, all fields marked as **Unique**, and localized entries included in an **All Locales** copy.