---
title: "[Variants CMS] - Getting Started with Variants"
description: Getting Started with Variants in Contentstack Variants CMS, including terminology, creation methods, management, publishing, API integration, and limitations.
url: https://www.contentstack.com/docs/headless-cms/getting-started-with-variants
product: Contentstack
doc_type: getting-started
audience:
  - developers
  - administrators
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Variants CMS] - Getting Started with Variants

This page introduces Variants in Contentstack (Entry Variants and Variant Groups), explains key terminology, and outlines how to create, manage, publish, and integrate variants via APIs. It is intended for developers, administrators, and content managers who need to deliver personalized content experiences using Variants CMS and/or Personalize.

## Getting Started with Variants

**Note**: The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users. For more information, contact the [support](mailto:support@contentstack.com) team.

Variants allow you to deliver personalized content by creating multiple variations of an entry. These variations help tailor content for specific audiences based on attributes such as location, device type, or user preferences.

**Note**: You can create, edit, or delete independent variant groups and variants directly within a stack. Variant groups managed through Personalize remain linked to their respective Personalize projects.

This guide introduces the key concepts of variants and explains how they are created, managed, and delivered.

## Terminology

Familiarize yourself with these essential terms:
- **Personalize Project**: A [project](../../personalize/create-personalize-project.md) in Personalize allows you to manage and deliver personalized content across channels by linking it to an existing stack.
- **Experience**: In Personalize, an [experience](../../personalize/about-experiences.md) defines and manages personalized content, A/B tests, or audience-specific variants to optimize content delivery and engagement.
- **Variant Group**: A collection of related variants grouped for a common purpose or audience, such as location-based experiences or targeted promotions.**Note**: Each [experience](../../personalize/about-experiences.md) created in a Personalize project appears as a Variant Group in the linked stack.
- **Base Entry**: The original entry from which all entry variants are derived. It contains the base content that all entry variants inherit unless they are customized for a specific variant.
- **Entry Variant**: An [entry variant](../../content-managers/entry-variants/about-entry-variants.md) is a customized version of the base entry, created to deliver personalized or scenario-specific content to different audiences.For example, a travel website could create variants like "Luxury Europe" or "Budget Adventure South America" to serve tailored content to specific regions.

**Additional Resource**: To learn more about the key terms within Personalize, refer to the [Glossary and Key Features](../../personalize/glossary-key-features.md) document

## How Variants Are Created

This section outlines the process of creating experiences, defining variants, and linking them to your stack.
- **Via Personalize**
    This section outlines the process of creating experiences, defining variants, and linking them to your stack.

      **Create an Experience**: Set up an [A/B test](../../personalize/create-ab-test-experience.md) or [Segmented](../../personalize/create-segmented-experience.md) experience in Personalize to deliver content variations to different audience segments, optimizing engagement and conversions. These experiences are displayed as variant groups within the linked stacks.
- **Define Variants**: Within each experience, define variants that describe the user experience. For example:
          For a Color experience, you can create variants for different colors.
- For a Marketplace experience, create region-based variants like Asia, Europe, or North America.
- **Linking to Stack**: Link your Personalize [project](../../personalize/create-personalize-project.md) to a stack to inherit all experiences as variant groups within that stack.
- **Via CMS Stack**
    This method allows developers and administrators to create independent variant groups directly within the stack.

      **Create a Variant Group**: Navigate to **Settings**, then **Variants**, and click **New Variant Group** to create a variant group directly in the CMS.**Note**: By default, the create variant groups button is visible only in the main branch.
- **Define Variants**: Within the group, specify the variants that you want to associate with this variant group. (e.g., "Mobile," "Desktop," or "EMEA") to describe the user experience.
- **Assign Content Types**: Select the specific content types that will use these variants.

## Managing Variant Groups within a Stack

This section explains how to manage variant groups to ensure personalized content delivery.
- [**Linking Content Types**](/docs/developers/variants/manage-variant-groups?_gl=1*smefi*_gcl_au*ODE3NDc0OTU3LjE3NTMxNTQ0ODM.#linking-content-types)**:** Connect variant groups to specific content types within your stack to create entry variants.
- [**Unlinking Content Types**](/docs/developers/variants/manage-variant-groups?_gl=1*smefi*_gcl_au*ODE3NDc0OTU3LjE3NTMxNTQ0ODM.#unlinking-content-types)**:** When you unlink a variant group from a content type, all associated entry variants will be disabled.

## Creating Entry Variants

Learn how to create and manage entry variants for personalized content delivery.
- **Create Entry Variants**: Within the entry editor, use the “[Base Entry]” dropdown to select a variant and [create an entry variant](../../content-managers/entry-variants/create-an-entry-variant.md).
- **Field Changes:** Only fields you update in the entry variant will display the **Variant Field** tag, while all other fields inherit data from the base entry.
- **Versioning**: Once saved, an entry variant becomes independent of the base entry. You can [manage versions](../../content-managers/entry-variants/manage-versions-of-entry-variants.md), compare changes, or restore previous versions as needed.

## Publishing Entry Variants

Each entry variant can be published independently. You have full control over which entry variants are live at any given time. The following scenarios explain the publishing process:
- If the base entry is not published in the required environment(s) and language(s), the system will first publish the latest version of the base entry, followed by the entry variant.
- If the base entry is published in an older version, the system will skip republishing it and only publish the entry variant.
- Similarly, if the base entry is already published in its latest version, the system will skip republishing it and directly publish the entry variant.

**Note:** Nested references for the base entry and entry variant will be published up to **5** **levels**, but entry variants of nested references will not. Learn more about [publishing an entry variant](../../content-managers/entry-variants/publish-an-entry-variant.md).

## API Integration

Use APIs to manage and retrieve entry variants for personalized content:
- **Content Delivery API**: Retrieve specific entry variants via the [Entry Variants collection](../../../api-docs/api-detail/content-delivery-api.md#entry-variants) in our Contentstack’s Delivery APIs.
- **Content Management API**:
      View all the available variant groups and link them to the content types within your stack via the [Variant Groups collection](../../../api-docs/api-detail/content-management-api.md#variant-groups) in our Content Management API.
- Manage entry variants by creating, updating, deleting, publishing entry variants via the [Entry Variants collection](../../../api-docs/api-detail/content-management-api.md#entry-variants) in our Content Management API.
- **Applying Multiple Variants**: Pass multiple variant UIDs in an API request to apply layered variants, with the latest entry variant taking precedence.For example, if you pass variant UIDs for Mumbai, India, and Asia, the Asia variant will take precedence, ensuring the content is most relevant to users in that location. This approach allows for flexible and granular content personalization across different markets or audience segments.

## Handling Complex Cases

Understand how variants affect group fields, modular blocks, and sorting.
- **Group Fields**: Only updated fields of a group field are saved within the entry variant; other fields inherited from the base entry remain unchanged.
- **Modular Blocks**: Added or removed instances of block are handled appropriately, maintaining the base entry's structure.
- **Sorting and Reordering**: Entry variants can have different order of instances in modular blocks or group fields. The final result will reflect the applied entry variant’s sorting and ordering.
- **Custom Attributes**: If using custom [attributes](../../personalize/about-attributes.md) for [audiences](../../personalize/about-audiences.md), ensure these are configured in the Personalize setup. The final variant selection will consider these attributes.

## Important Considerations

Key considerations when working with variants:
- **Field Limitations:** The Taxonomy field does not support variants.
- **Branch Limitations:** Variants are supported only in the main branch.
- **Publishing with References:** When publishing entry variants, references are published up to **5 levels**.
- **Delete Limitations:** Deleted entry variants cannot be restored from Trash.

**Additional Resource**: Learn more about the [limitations for entry variants](../../content-managers/entry-variants/limitations-for-entry-variants.md).

By understanding how to use variant groups and entry variants, you can create tailored content experiences for your audience segments, boosting engagement and performance.

## Common questions

### Do I need a Personalize license to use Entry Variants?
The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users.

### Can I create variant groups without using Personalize?
Yes. You can create, edit, or delete independent variant groups and variants directly within a stack.

### Can entry variants be published independently from the base entry?
Each entry variant can be published independently, and the system may publish the base entry first depending on its published state.

### Are there limitations I should be aware of?
Variants are supported only in the main branch, the Taxonomy field does not support variants, references are published up to 5 levels, and deleted entry variants cannot be restored from Trash.