---
title: "[Field Properties] - Minimum and Maximum Limits"
description: Minimum and Maximum Limits properties for fields marked as Multiple in Contentstack content types.
url: https://www.contentstack.com/docs/headless-cms/minimum-and-maximum-limit
product: Contentstack
doc_type: concept-guide
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Field Properties] - Minimum and Maximum Limits

This page explains how to use the **Minimum** and **Maximum Limits** field properties to control how many instances users can add for fields marked as **Multiple** in Contentstack. It is intended for developers and content modelers configuring content types, and should be used when you need to enforce structured data entry with required minimums or capped maximums.

## Minimum and Maximum Limits

The **Minimum** and **Maximum Limits** properties let you define the acceptable range for the number of instances a user can add when a field is marked as [Multiple](/docs/developers/create-content-types/multiple/). These settings help enforce structured data entry by ensuring users provide the expected number of values.

**Note**: These limits apply only when the **Multiple** option is enabled for a field. They are different from character or value limits set for single-instance fields.

You can configure minimum and maximum limits for fields that support multiple instances, including:
- **Single Line Textbox**: Define how many textboxes users can add.
- **Multi Line Textbox**: Define how many multi line textboxes can be added.
- **Rich Text Editor**: Set limits for HTML rich text editor fields.
- **JSON Rich Text Editor**: Set limits for JSON RTE fields.
- **Markdown**: Control the number of markdown fields users can add.
- **Modular Blocks**:**Parent level**: Define the total number of blocks.
- **Block-level**: Set limits for how many times a specific block type can be added.
- **Number**: Control how many numeric fields users can add.
- **Date**: Set limits on the number of date fields allowed.
- **File**: Restrict the number of file uploads.
- **Link**: Set limits on the number of links users can add.
- **Reference**: Limit the number of referenced entries.
- **Group**: Control how many instances of the group users can add.
- **Global Fields**: Define how many instances of the global field can be added.

**Note**: You cannot set minimum or maximum limits for **URL**, **Boolean**, **Custom**, and **Taxonomy** fields.

The system validates these limits when users add content. If the number of instances exceeds the maximum or falls below the minimum, a validation message appears, and saving is blocked until the issue is resolved.

To set minimum and maximum limits, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Navigate to your [stack](/docs/developers/set-up-stack/about-stack) and open the content type where you want to set the limits.
- Click the field you want to configure. The **Edit Properties** panel appears on the right.
- In the **Advanced** tab, enable the **Multiple** toggle. The **Set Minimum Limit** and **Set Maximum Limit** fields will appear.
- Under **Set Minimum Limit**, enter the minimum number of instances a user must add.
- Under **Set Maximum Limit**, enter the maximum number of instances a user can add.
- Since **Modular Blocks** are multiple by default, you can configure limits directly without enabling a Multiple option:**Parent level limits**: Set the total minimum and maximum number of blocks across all types.
- **Block-level limits**: Click into a specific block type and define individual min/max limits for that block.
- Click **Save** or **Save and Close** to update the content type.

## Example: Enforcing “OR” Logic with Modular Blocks

You can use the minimum and maximum limits to simulate **either-or** logic in Modular Blocks. For example, if you want editors to include either a **Video** block or an **Image** block, but not both, in an entry, follow these steps:
- Add a **Modular Blocks** field to your content type.
- Create two blocks within it: **Video** and **Image**.
- In the **Modular Blocks** parent field settings, set the **minimum** and **maximum** limit as **1**.
- In the individual **Video** and **Image** blocks, set the maximum limit as **1**.

This setup ensures that:
- Editors must add **one** block, but cannot add more than one.
- As soon as either a **Video** or an **Image** block is added, the maximum limit is reached.
- Editors are effectively allowed to choose one of the two—mimicking **OR** functionality.

Minimum and maximum limits for **Multiple** fields help guide users and ensure consistent, high-quality content input. With clear limits and in-editor validation, you can streamline content entry while maintaining structure.

## Common questions

### Do minimum and maximum limits work if Multiple is not enabled?
No. **Note**: These limits apply only when the **Multiple** option is enabled for a field.

### Which fields do not support minimum or maximum limits?
**Note**: You cannot set minimum or maximum limits for **URL**, **Boolean**, **Custom**, and **Taxonomy** fields.

### What happens if an editor exceeds the maximum or goes below the minimum?
A validation message appears, and saving is blocked until the issue is resolved.

### Can Modular Blocks have limits without enabling Multiple?
Yes. Since **Modular Blocks** are multiple by default, you can configure limits directly without enabling a Multiple option.