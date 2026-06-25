---
title: "[Variants CMS] - Manage Variant Groups"
description: Manage variant groups in Contentstack Variants CMS, including accessing, creating, linking content types, and API reference.
url: https://www.contentstack.com/docs/headless-cms/manage-variant-groups
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Variants CMS] - Manage Variant Groups

This page explains how to access and manage Variant Groups in Contentstack Variants CMS, including creating groups in the stack, viewing group details, linking/unlinking content types, using variant groups in entries, and where to find the related API reference. It is intended for users working with Variants and entry variants in a stack, especially when integrating with Personalize.

## Manage Variant Groups

**Note:** The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users. For more information, contact the [support](mailto:support@contentstack.com) team.

The **Variants** page in Contentstack allows you to view all variant groups and the variants associated with them. Variant groups may originate from a linked **Personalize** project or be created independently within the CMS UI to support content modeling workflows.

**Note:**
- Each [experience](../../personalize/about-experiences.md) created in your Personalize project appears as a **Variant Group** with the same name as the experience in the linked stack.
- When a stack is linked to a Personalize project, you cannot create, edit, or delete the **title** or **description** of variant groups or variants that originate from Personalize.

## Accessing Variant Groups

The **Variant Groups** page in the stack settings displays all available variant groups, including those linked to Personalize and those created independently in the CMS.

To access the variant groups, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](../set-up-stack/about-stack.md).
- Click **Settings**.
- Select **Variants**.

The **Variants** page opens and displays all available variant groups.

## Variants List Overview

The **Variants** page displays all variant groups, including those linked to Personalize and those created independently in the CMS.

The following information is available for each variant group:
- **Variant Group**: The name of the variant group.
- **Linked With**: Indicates whether the group is linked to Personalize or unlinked meaning created within the stack.
- **Variants**: The variants available within the group.
- **Linked Content Types**: The content types associated with the variant group.
- **Modified At**: Displays the date, time, and user who last modified the group

## Create a Variant Group within the Stack

You can create independent variant groups directly in the CMS without requiring a Personalize integration.

To create a variant group, perform the following steps:
- On the **Variant Groups** list page, click **New Variant Group**.
- In the configuration modal, enter a **Name** for the variant group.
- Under **Linked Variants**, specify the variants that you want to associate with this variant group.
- Click **Save** to create a group.

**Note:**
- Unlike Personalize-linked groups, variant groups created through the UI allow you to edit titles and descriptions at any time, provided you have the required permissions.
- By default, the create variant groups button is visible only in the main branch.

## Variant Group Details

Click a variant group to open the **Variant Group Details** page.

On this page, you can view the Name, Description, and the specific Variants within that group.

**Note:** For variant groups originating from Personalize, these fields are not editable. For groups created through the CMS UI, these fields remain editable.

If variants become unlinked from the group due to changes in Personalize, they appear in the **Unlinked Variants** section. From here, you can:
- **Re-link Variant**: Reconnect the variant to enable entry variant creation.
- **Remove Variant**: Delete the variant and all associated entry variants.

## Link Content Types

To enable entry variants, you must link content types to a variant group.

**Note:** Content type assignments are **branch-specific**, meaning changes in one branch do not affect other branches.

To link content types, perform the following steps:
- In the **Linked Content Types** field, select one or more content types.
- Click **Apply**.
- Click **Save**.

## Unlinking Content Types

When content types are unlinked from a variant group, they appear in the **Unlinked Content Types** section.

From this section, you can perform the following actions:
- **Re-link Content Type**: Reconnect the content type and re-enable entry variant creation.
- **Remove Content Type**: Remove the content type and delete all associated entry variants.

**Note:** When a content type is unlinked, you can still update, publish, or unpublish existing entry variants. However, you cannot create new entry variants.

## Using Variant Groups in Entries

After linking a variant group to a content type, a **Variants** dropdown appears in the entry editor. This allows you to create and manage entry variants for that content type.

For more information, refer to [Create an Entry Variant](../../content-managers/entry-variants/create-an-entry-variant.md).

## API Reference

To manage variant groups via API, refer to the [Variant Group](../../../api-docs/api-detail/content-management-api.md#variant-groups) API requests.

## Common questions

### Can I edit the title or description of a variant group linked to Personalize?
When a stack is linked to a Personalize project, you cannot create, edit, or delete the **title** or **description** of variant groups or variants that originate from Personalize.

### Are content type assignments shared across branches?
No. Content type assignments are **branch-specific**, meaning changes in one branch do not affect other branches.

### What happens if a variant or content type becomes unlinked?
Unlinked variants appear in the **Unlinked Variants** section and unlinked content types appear in the **Unlinked Content Types** section, where you can **Re-link** or **Remove** them.

### Where do I find the API to manage variant groups?
Use the [Variant Group](../../../api-docs/api-detail/content-management-api.md#variant-groups) API requests in the Content Management API reference.

<!-- filename: variants-cms-manage-variant-groups.md -->