---
title: "Create an Entry Variant"
description: "Learn how to create entry variants in Contentstack to deliver personalized content to specific user groups and enhance user experiences."
url: /headless-cms/create-an-entry-variant
uid: blt2384ff607178bade
---

# Create an Entry Variant

## Create an Entry Variant

**Note:** The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Contentstack allows you to create entry variants to deliver personalized content to specific user groups. This feature helps you target different audience segments with customized content.

To create an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), then click the **Entries** icon in the left navigation panel.

    **Note:** Link variant groups to the relevant content type(s) before creating entry variants. Each [experience](/docs/personalize/about-experiences) in your Personalize project appears as a Variant Group in the linked stack. For more details on linking, refer to the [Manage Variant Groups](/docs/headless-cms/manage-variant-groups) document.

2.  Create a new entry or select an existing one that belongs to the content type with linked variant groups.
3.  In the entry editor, you will see a dropdown menu labeled “\[Base Entry\]”. Click this dropdown.![1-Base Entry Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9b5f55fe171153d/66fa8f5872566c590c076ec7/1-Base_Entry_Dropdown.png)

    **Note:** When a variant or content type is unlinked, you can still **update**, **publish**, or **unpublish** existing entry variants. However, you **cannot create new** entry variants. If the variant or content type is **removed** from the variant group, all associated entry variants are **deleted** and **unpublished** if they were previously published.

4.  Select the desired variant from the available variant groups to create your entry variant.![2-Variants Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteecc7bdf15412f52/66fa8f58f32d375cfea07170/2-Variants_Dropdown.png)
5.  The entry editor will display content from the base entry by default. Enter or edit content in the fields as per the selected variant. This content will be tailored specifically for the configured [audiences](/docs/personalize/about-audiences).
6.  As soon as you enter or update content for a field, you will see a **Variant Field** tag.![3-Variant Field Tag.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt500bb8e18a252b5e/66fa8f58c798287b778f2e8a/3-Variant_Field_Tag.png)
7.  You can click the **Variant Field** dropdown and select **Revert to base entry value** if you want to revert to the base entry content for a specific field.![4-Revert to base entry value.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc74c6c52280a6a4/66fa8f58373290cb3189f67b/4-Revert_to_base_entry_value.png)
8.  Once satisfied with the content, click **Save** to save the entry variant.![5-Entry variant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0592f38f5896cc2/66fa8f583367ab59246cfa92/5-Entry_variant.png)

    **Note:** Once saved, the entry variants become independent of the base entry. For more details, refer to the [manage versions of entry variants](/docs/headless-cms/manage-versions-of-entry-variants) document.


You can manage and switch between different variants within the entry editor by selecting the relevant variant from the dropdown menu.

By following these steps, you can effectively create and manage entry variants in Contentstack to provide personalized experiences for your audience.

## API Reference

To create an entry variant via API, refer to the [Create Entry Variant](/docs/developers/apis/content-management-api/entry-variants#create-entry-variant) API requests.
