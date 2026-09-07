---
title: "Mandatory"
description: "Learn how to use the Mandatory property in Contentstack to ensure required fields are completed before publishing entries."
url: /headless-cms/mandatory
uid: bltd96b6b5a2b80e70f
---

# Mandatory

## Mandatory

The **Mandatory** property allows you to designate specific fields as required. When a field is set as mandatory, content managers must provide input in that field while creating or editing an entry. This ensures critical data is always captured and helps maintain consistency across entries.

When a field is marked as mandatory, the **(required)** label appears next to the field on the entry page, as shown in the image below:

![1. Required Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb847e954504b655/686ccda0c4493cbfc0a989dd/1._Required_Fields.png)

If you leave a mandatory field blank, you can still save the entry as a draft or in-progress version. However, publishing is blocked until all mandatory fields are filled in. This behavior ensures that incomplete content does not get published accidentally.

You can enable the **Mandatory** property for the following field types:

-   **URL Field**: You can mark the URL field as mandatory to ensure content contributors provide a valid path before publishing an entry. This is useful for enforcing structured URLs across content types.

-   **Group Fields**: Mark the entire group as required to ensure users fill out at least one of its subfields.
-   **Global Fields**: Apply the mandatory setting to any global field to enforce input across all entries that use it.
-   **Reference Fields**: Ensure users select at least one referenced entry when the reference field is marked as required.
-   **Modular Blocks**:
    -   **Parent Level**: Mark the Modular Block field itself as mandatory to ensure at least one block is added.
    -   **Block Level**: Set individual fields inside a block as mandatory to capture necessary data within each block instance.

The mandatory setting applies during entry creation and editing workflows. It is especially useful for enforcing content standards across complex content types and multi-author teams.

**Additional Resource:** You can combine the **Mandatory** property with **Validation (Regex)** to enforce advanced formatting rules on text fields, such as the Title. For implementation details, refer to our [validation](/docs/headless-cms/validation-regex) documentation.
