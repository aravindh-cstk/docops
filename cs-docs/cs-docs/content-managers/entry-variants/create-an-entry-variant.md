---
title: "[Variants CMS] - Create an Entry Variant"
description: Create an Entry Variant in Contentstack Variants CMS and learn how to manage variants in the entry editor or via API.
url: https://www.contentstack.com/docs/content-managers/entry-variants/create-an-entry-variant
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
- Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the **Entries **icon in the left navigation panel.**Note:** Link variant groups to the relevant content type(s) before creating entry variants. Each [experience](/docs/personalize/about-experiences) in your Personalize project appears as a Variant Group in the linked stack. For more details on linking, refer to the [Manage Variant Groups](/docs/developers/variants/manage-variant-groups) document.
- Create a new entry or select an existing one that belongs to the content type with linked variant groups.
- In the entry editor, you will see a dropdown menu labeled “[Base Entry]”. Click this dropdown.**Note**: When a variant or content type is unlinked, you can still **update**, **publish**, or **unpublish** existing entry variants. However, you **cannot create new** entry variants. If the variant or content type is **removed** from the variant group, all associated entry variants are **deleted** and **unpublished** if they were previously published.
- Select the desired variant from the available variant groups to create your entry variant.
- The entry editor will display content from the base entry by default. Enter or edit content in the fields as per the selected variant. This content will be tailored specifically for the configured [audiences](/docs/personalize/about-audiences).
- As soon as you enter or update content for a field, you will see a **Variant Field **tag.
- You can click the **Variant Field **dropdown and select **Revert to base entry value** if you want to revert to the base entry content for a specific field.
- Once satisfied with the content, click **Save **to save the entry variant.**Note: **Once saved, the entry variants become independent of the base entry. For more details, refer to the [manage versions of entry variants](/docs/content-managers/entry-variants/manage-versions-of-entry-variants) document.

You can manage and switch between different variants within the entry editor by selecting the relevant variant from the dropdown menu.

By following these steps, you can effectively create and manage entry variants in Contentstack to provide personalized experiences for your audience.

## API Reference

To create an entry variant via API, refer to the [Create Entry Variant](/docs/developers/apis/content-management-api#create-entry-variant) API requests.

## Common questions

### Who can use the Entry Variants feature?
The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

### Do entry variants stay linked to the base entry after saving?
Once saved, the entry variants become independent of the base entry.

### Can I create new entry variants if a variant or content type is unlinked?
When a variant or content type is unlinked, you can still **update**, **publish**, or **unpublish** existing entry variants. However, you **cannot create new** entry variants.

### Where do I find the API to create an entry variant?
To create an entry variant via API, refer to the [Create Entry Variant](/docs/developers/apis/content-management-api#create-entry-variant) API requests.