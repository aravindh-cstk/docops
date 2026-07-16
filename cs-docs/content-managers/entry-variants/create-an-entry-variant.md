---
title: "[Variants CMS] - Create an Entry Variant"
description: Create an Entry Variant in Contentstack Variants CMS and learn how to manage variants in the entry editor or via API.
url: https://www.contentstack.com/docs/headless-cms/create-an-entry-variant
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Variants CMS] - Create an Entry Variant

This page explains how to create an entry variant in Contentstack (Variants CMS) to deliver personalized content to specific user groups. It is intended for content managers and developers who need to create and manage variants in the entry editor, and for those who may also create entry variants via the Content Management API.

## Create an Entry Variant

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Contentstack allows you to create entry variants to deliver personalized content to specific user groups. This feature helps you target different audience segments with customized content.

To create an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:
- Navigate to the desired [stack](../../developers/set-up-stack/about-stack.md), then click the **Entries **icon in the left navigation panel.

  **Note:** Link variant groups to the relevant content type(s) before creating entry variants. Each [experience](../../personalize/about-experiences.md) in your Personalize project appears as a Variant Group in the linked stack. For more details on linking, refer to the [Manage Variant Groups](../../developers/variants/manage-variant-groups.md) document.
- Create a new entry or select an existing one that belongs to the content type with linked variant groups.
- In the entry editor, you will see a dropdown menu labeled “[Base Entry]”. Click this dropdown.![1-Base Entry Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9b5f55fe171153d/66fa8f5872566c590c076ec7/1-Base_Entry_Dropdown.png)

  **Note**: When a variant or content type is unlinked, you can still **update**, **publish**, or **unpublish** existing entry variants. However, you **cannot create new** entry variants. If the variant or content type is **removed** from the variant group, all associated entry variants are **deleted** and **unpublished** if they were previously published.
- Select the desired variant from the available variant groups to create your entry variant.![2-Variants Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteecc7bdf15412f52/66fa8f58f32d375cfea07170/2-Variants_Dropdown.png)
- The entry editor will display content from the base entry by default. Enter or edit content in the fields as per the selected variant. This content will be tailored specifically for the configured [audiences](../../personalize/about-audiences.md).
- As soon as you enter or update content for a field, you will see a **Variant Field **tag.![3-Variant Field Tag.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt500bb8e18a252b5e/66fa8f58c798287b778f2e8a/3-Variant_Field_Tag.png)
- You can click the **Variant Field **dropdown and select **Revert to base entry value** if you want to revert to the base entry content for a specific field.![4-Revert to base entry value.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc74c6c52280a6a4/66fa8f58373290cb3189f67b/4-Revert_to_base_entry_value.png)
- Once satisfied with the content, click **Save **to save the entry variant.![5-Entry variant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0592f38f5896cc2/66fa8f583367ab59246cfa92/5-Entry_variant.png)

  **Note: **Once saved, the entry variants become independent of the base entry. For more details, refer to the [manage versions of entry variants](./manage-versions-of-entry-variants.md) document.

You can manage and switch between different variants within the entry editor by selecting the relevant variant from the dropdown menu.

By following these steps, you can effectively create and manage entry variants in Contentstack to provide personalized experiences for your audience.

## API Reference

To create an entry variant via API, refer to the [Create Entry Variant](../../../api-docs/api-detail/content-management-api.md#create-entry-variant) API requests.

## Common questions

### Who can use the Entry Variants feature?
The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

### Do entry variants stay linked to the base entry after saving?
Once saved, the entry variants become independent of the base entry.

### Can I create new entry variants if a variant or content type is unlinked?
When a variant or content type is unlinked, you can still **update**, **publish**, or **unpublish** existing entry variants. However, you **cannot create new** entry variants.

### Where do I find the API to create an entry variant?
To create an entry variant via API, refer to the [Create Entry Variant](../../../api-docs/api-detail/content-management-api.md#create-entry-variant) API requests.