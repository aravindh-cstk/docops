---
title: "Getting Started with Variants"
description: "Learn how to create, manage, and deliver personalized content using variants in Contentstack. Get started with tailored experiences for your audience."
url: /headless-cms/getting-started-with-variants
uid: blt61c892aaab9a84aa
---

# Getting Started with Variants

## Getting Started with Variants

**Note:** The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users. For more information, contact the [support](mailto:support@contentstack.com) team.

Variants allow you to deliver personalized content by creating multiple variations of an entry. These variations help tailor content for specific audiences based on attributes such as location, device type, or user preferences.

**Note:** You can create, edit, or delete independent variant groups and variants directly within a stack. Variant groups managed through Personalize remain linked to their respective Personalize projects.

This guide introduces the key concepts of variants and explains how they are created, managed, and delivered.

## Terminology

Familiarize yourself with these essential terms:

1.  **Personalize Project**: A [project](/docs/personalize/create-personalize-project) in Personalize allows you to manage and deliver personalized content across channels by linking it to an existing stack.
2.  **Experience**: In Personalize, an [experience](/docs/personalize/about-experiences) defines and manages personalized content, A/B tests, or audience-specific variants to optimize content delivery and engagement.
3.  **Variant Group**: A collection of related variants grouped for a common purpose or audience, such as location-based experiences or targeted promotions.

    **Note:** Each [experience](/docs/personalize/about-experiences) created in a Personalize project appears as a Variant Group in the linked stack.

4.  **Base Entry**: The original entry from which all entry variants are derived. It contains the base content that all entry variants inherit unless they are customized for a specific variant.
5.  **Entry Variant**: An [entry variant](/docs/headless-cms/about-entry-variants) is a customized version of the base entry, created to deliver personalized or scenario-specific content to different audiences.

    For example, a travel website could create variants like "Luxury Europe" or "Budget Adventure South America" to serve tailored content to specific regions.


**Additional Resource:** To learn more about the key terms within Personalize, refer to the [Glossary and Key Features](/docs/personalize/glossary-key-features) document

## How Variants Are Created

This section outlines the process of creating experiences, defining variants, and linking them to your stack.

1.  **Via Personalize**

    This section outlines the process of creating experiences, defining variants, and linking them to your stack.

    1.  **Create an Experience**: Set up an [A/B test](/docs/personalize/create-ab-test-experience) or [Segmented](/docs/personalize/create-segmented-experience) experience in Personalize to deliver content variations to different audience segments, optimizing engagement and conversions. These experiences are displayed as variant groups within the linked stacks.![1-Experiences.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91d25af15baaee02/66fa902dd75ab88488acd395/1-Experiences.png)
    2.  **Define Variants**: Within each experience, define variants that describe the user experience. For example:
        -   For a Color experience, you can create variants for different colors.
        -   For a Marketplace experience, create region-based variants like Asia, Europe, or North America.![2-Variants.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e4ac5f54f116ed8/66fa902d5a3473c28b021961/2-Variants.png)
    3.  **Linking to Stack**: Link your Personalize [project](/docs/personalize/create-personalize-project) to a stack to inherit all experiences as variant groups within that stack.![3-Linking to Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d69e25de5fae8ad/66fa902dc7982842788f2e98/3-Linking_to_Stack.png)
2.  **Via CMS Stack**

    This method allows developers and administrators to create independent variant groups directly within the stack.

    1.  **Create a Variant Group**: Navigate to **Settings**, then **Variants**, and click **New Variant Group** to create a variant group directly in the CMS.

        **Note:** By default, the create variant groups button is visible only in the main branch.

    2.  **Define Variants**: Within the group, specify the variants that you want to associate with this variant group. (e.g., "Mobile," "Desktop," or "EMEA") to describe the user experience.
    3.  **Assign Content Types**: Select the specific content types that will use these variants.
    ![Create_and_Manage_Variant_Groups_in_the_CMS.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6baf5d96f7be059e/69bda20e554eb218ba371e6d/Create_and_Manage_Variant_Groups_in_the_CMS.gif)

## Managing Variant Groups within a Stack

This section explains how to manage variant groups to ensure personalized content delivery.

1.  [**Linking Content Types**](/docs/headless-cms/manage-variant-groups?_gl=1*smefi*_gcl_au*ODE3NDc0OTU3LjE3NTMxNTQ0ODM.#linking-content-types)**:** Connect variant groups to specific content types within your stack to create entry variants.
2.  [**Unlinking Content Types**](/docs/headless-cms/manage-variant-groups?_gl=1*smefi*_gcl_au*ODE3NDc0OTU3LjE3NTMxNTQ0ODM.#unlinking-content-types)**:** When you unlink a variant group from a content type, all associated entry variants will be disabled.

![4-Managing Variant Groups within a Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28b46d30484bbc4b/66fa902c70a1391a16e8a624/4-Managing_Variant_Groups_within_a_Stack.png)

## Creating Entry Variants

Learn how to create and manage entry variants for personalized content delivery.

1.  **Create Entry Variants**: Within the entry editor, use the “\[Base Entry\]” dropdown to select a variant and [create an entry variant](/docs/headless-cms/create-an-entry-variant).![5-Variants Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6bc13a9f017332b/66fa902cf32d377719a0717f/5-Variants_Dropdown.png)
2.  **Field Changes:** Only fields you update in the entry variant will display the **Variant Field** tag, while all other fields inherit data from the base entry.![6-Variant Field Tag.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda64baa363940823/66fa902c9f5a86238125bc47/6-Variant_Field_Tag.png)
3.  **Versioning**: Once saved, an entry variant becomes independent of the base entry. You can [manage versions](/docs/headless-cms/manage-versions-of-entry-variants), compare changes, or restore previous versions as needed.![7-Entry variant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce28f02e634f34b5/66fa902c80962461a07f6f22/7-Entry_variant.png)

## Publishing Entry Variants

Each entry variant can be published independently. You have full control over which entry variants are live at any given time. The following scenarios explain the publishing process:

1.  If the base entry is not published in the required environment(s) and language(s), the system will first publish the latest version of the base entry, followed by the entry variant.
2.  If the base entry is published in an older version, the system will skip republishing it and only publish the entry variant.
3.  Similarly, if the base entry is already published in its latest version, the system will skip republishing it and directly publish the entry variant.

![8-Publishing Entry Variants.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf14a45287927042c/66fa902c72566c23dc076edd/8-Publishing_Entry_Variants.png)

**Note:** Nested references for the base entry and entry variant will be published up to **5** **levels**, but entry variants of nested references will not. Learn more about [publishing an entry variant](/docs/headless-cms/publish-an-entry-variant).

## API Integration

Use APIs to manage and retrieve entry variants for personalized content:

-   **Content Delivery API**: Retrieve specific entry variants via the [Entry Variants collection](/docs/developers/apis/content-delivery-api/entry-variants) in our Contentstack’s Delivery APIs.
-   **Content Management API**:
    1.  View all the available variant groups and link them to the content types within your stack via the [Variant Groups collection](/docs/developers/apis/content-management-api/variant-groups) in our Content Management API.
    2.  Manage entry variants by creating, updating, deleting, publishing entry variants via the [Entry Variants collection](/docs/developers/apis/content-management-api/entry-variants) in our Content Management API.
-   **Applying Multiple Variants**: Pass multiple variant UIDs in an API request to apply layered variants, with the latest entry variant taking precedence.

    For example, if you pass variant UIDs for Mumbai, India, and Asia, the Asia variant will take precedence, ensuring the content is most relevant to users in that location. This approach allows for flexible and granular content personalization across different markets or audience segments.


## Handling Complex Cases

Understand how variants affect group fields, modular blocks, and sorting.

1.  **Group Fields**: Only updated fields of a group field are saved within the entry variant; other fields inherited from the base entry remain unchanged.
2.  **Modular Blocks**: Added or removed instances of block are handled appropriately, maintaining the base entry's structure.
3.  **Sorting and Reordering**: Entry variants can have different order of instances in modular blocks or group fields. The final result will reflect the applied entry variant’s sorting and ordering.
4.  **Custom Attributes**: If using custom [attributes](/docs/personalize/about-attributes) for [audiences](/docs/personalize/about-audiences), ensure these are configured in the Personalize setup. The final variant selection will consider these attributes.

## Important Considerations

Key considerations when working with variants:

1.  **Field Limitations:** The Taxonomy field does not support variants.
2.  **Branch Limitations:** Variants are supported only in the main branch.
3.  **Publishing with References:** When publishing entry variants, references are published up to **5 levels**.
4.  **Delete Limitations:** Deleted entry variants cannot be restored from Trash.

**Additional Resource:** Learn more about the [limitations for entry variants](/docs/headless-cms/limitations-for-entry-variants).

By understanding how to use variant groups and entry variants, you can create tailored content experiences for your audience segments, boosting engagement and performance.
