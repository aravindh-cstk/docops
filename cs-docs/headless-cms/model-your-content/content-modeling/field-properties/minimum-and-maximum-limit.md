---
title: "Minimum and Maximum Limits"
description: "Learn how to configure minimum and maximum limits for fields in Contentstack to control the number of items users can add."
url: /headless-cms/minimum-and-maximum-limit
uid: bltf55a23c468d8d0f9
---

# Minimum and Maximum Limits

## Minimum and Maximum Limits

The **Minimum** and **Maximum Limits** properties let you define the acceptable range for the number of instances a user can add when a field is marked as [Multiple](/docs/headless-cms/multiple/). These settings help enforce structured data entry by ensuring users provide the expected number of values.

**Note:** These limits apply only when the **Multiple** option is enabled for a field. They are different from character or value limits set for single-instance fields.

You can configure minimum and maximum limits for fields that support multiple instances, including:

-   **Single Line Textbox**: Define how many textboxes users can add.
-   **Multi Line Textbox**: Define how many multi line textboxes can be added.
-   **Rich Text Editor**: Set limits for HTML rich text editor fields.
-   **JSON Rich Text Editor**: Set limits for JSON RTE fields.
-   **Markdown**: Control the number of markdown fields users can add.
-   **Modular Blocks**:
    -   **Parent level**: Define the total number of blocks.
    -   **Block-level**: Set limits for how many times a specific block type can be added.
-   **Number**: Control how many numeric fields users can add.
-   **Date**: Set limits on the number of date fields allowed.
-   **File**: Restrict the number of file uploads.
-   **Link**: Set limits on the number of links users can add.
-   **Reference**: Limit the number of referenced entries.
-   **Group**: Control how many instances of the group users can add.
-   **Global Fields**: Define how many instances of the global field can be added.

**Note:** You cannot set minimum or maximum limits for **URL**, **Boolean**, **Custom**, and **Taxonomy** fields.

The system validates these limits when users add content. If the number of instances exceeds the maximum or falls below the minimum, a validation message appears, and saving is blocked until the issue is resolved.

To set minimum and maximum limits, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and open the content type where you want to set the limits.
2.  Click the field you want to configure. The **Edit Properties** panel appears on the right.
3.  In the **Advanced** tab, enable the **Multiple** toggle. The **Set Minimum Limit** and **Set Maximum Limit** fields will appear.
4.  Under **Set Minimum Limit**, enter the minimum number of instances a user must add.
5.  Under **Set Maximum Limit**, enter the maximum number of instances a user can add.
6.  Since **Modular Blocks** are multiple by default, you can configure limits directly without enabling a Multiple option:
    1.  **Parent level limits**: Set the total minimum and maximum number of blocks across all types.
    2.  **Block-level limits**: Click into a specific block type and define individual min/max limits for that block.
7.  Click **Save** or **Save and Close** to update the content type.

![Setting Minimum and Maximum Limits.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf37ea6000cd4f286/686ccdadb831ee6f5f273aed/Setting_Minimum_and_Maximum_Limits.gif)

## Example: Enforcing “OR” Logic with Modular Blocks

You can use the minimum and maximum limits to simulate **either-or** logic in Modular Blocks. For example, if you want editors to include either a **Video** block or an **Image** block, but not both, in an entry, follow these steps:

1.  Add a **Modular Blocks** field to your content type.
2.  Create two blocks within it: **Video** and **Image**.
3.  In the **Modular Blocks** parent field settings, set the **minimum** and **maximum** limit as **1**.![MB Parent Field Limits.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe040916e40d63c4/688219c35dcf4b0e34d95f4f/MB_Parent_Field_Limits.png)
4.  In the individual **Video** and **Image** blocks, set the maximum limit as **1**.

This setup ensures that:

-   Editors must add **one** block, but cannot add more than one.
-   As soon as either a **Video** or an **Image** block is added, the maximum limit is reached.
-   Editors are effectively allowed to choose one of the two—mimicking **OR** functionality.

![Example- Enforcing “OR” Logic with Modular Blocks.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e87fac222c25385/688219c36c8b803bc3205f60/Example-_Enforcing_“OR”_Logic_with_Modular_Blocks.png)

Minimum and maximum limits for **Multiple** fields help guide users and ensure consistent, high-quality content input. With clear limits and in-editor validation, you can streamline content entry while maintaining structure.
