---
title: "Manage Variant Groups"
description: "Learn how to view and manage variant groups in Contentstack, allowing you to create and target personalized content to your users."
url: /headless-cms/manage-variant-groups
---

# Manage Variant Groups

## Manage Variant Groups

**Note:** The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users. For more information, contact the [support](mailto:support@contentstack.com) team.

The **Variants** page in Contentstack allows you to view all variant groups and the variants associated with them. Variant groups may originate from a linked **Personalize** project or be created independently within the CMS UI to support content modeling workflows.

**Note:**

-   Each [experience](/docs/personalize/about-experiences) created in your Personalize project appears as a **Variant Group** with the same name as the experience in the linked stack.
-   When a stack is linked to a Personalize project, you cannot create, edit, or delete the **title** or **description** of variant groups or variants that originate from Personalize.

## Accessing Variant Groups

The **Variant Groups** page in the stack settings displays all available variant groups, including those linked to Personalize and those created independently in the CMS.

To access the variant groups, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack).
2.  Click **Settings**.
3.  Select **Variants**.

The **Variants** page opens and displays all available variant groups.

## Variants List Overview

The **Variants** page displays all variant groups, including those linked to Personalize and those created independently in the CMS.

The following information is available for each variant group:

-   **Variant Group**: The name of the variant group.
-   **Linked With**: Indicates whether the group is linked to Personalize or unlinked meaning created within the stack.
-   **Variants**: The variants available within the group.
-   **Linked Content Types**: The content types associated with the variant group.
-   **Modified At**: Displays the date, time, and user who last modified the group ![Accessing_Variant_Groups.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0510c5c2e9b08190/69bda2c850ca69fc19d4075a/Accessing_Variant_Groups.png)

## Create a Variant Group within the Stack

You can create independent variant groups directly in the CMS without requiring a Personalize integration.

**Note:** Developers can create, edit, and delete variant groups and variants. Administrators have full permissions to manage variant configurations across the stack.

To create and manage variant groups, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack) and click **Settings**.
2.  Select **Variants** to open the **Variant Groups** list page.
3.  On the **Variant Groups** page, click **New Variant Group**.
    
    **Note:** By default, the create variant groups button is visible only in the main branch.
    
4.  In the modal, enter the **Variant Group Name**, and click **Create**.
5.  Within the variant group, add a **Description** if required.
6.  Under **Linked Variants**, enter the variants associated with this group. To add multiple variants, click the **+** icon.
    
    **Note:** Variant group names and variant names are shared across all branches in the stack.
    
7.  In the **Linked Content Types** section, select one or more content types that this variant group will support for the main branch.
    
    **Note:** Content type assignments can be configured independently in each branch.
    
8.  Click **Save** to apply the configuration.

![Create_and_Manage_Variant_Groups_in_the_CMS.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6baf5d96f7be059e/69bda20e554eb218ba371e6d/Create_and_Manage_Variant_Groups_in_the_CMS.gif)

**Note:**

-   Unlike Personalize-linked groups, variant groups created through the UI allow you to edit titles and descriptions at any time, provided you have the required permissions.
-   By default, the create variant groups button is visible only in the main branch.

Once configured, these groups can be used when creating or managing entries, helping teams maintain structured and consistent content variations across the stack.

## Variant Group Details

Click a variant group to open the **Variant Group Details** page.

On this page, you can view the Name, Description, and the specific Variants within that group.

**Note:** For variant groups originating from Personalize, these fields are not editable. For groups created through the CMS UI, these fields remain editable.

If variants become unlinked from the group due to changes in Personalize, they appear in the **Unlinked Variants** section. From here, you can:

-   **Re-link Variant**: Reconnect the variant to enable entry variant creation.
-   **Remove Variant**: Delete the variant and all associated entry variants.

## Link Content Types

To enable entry variants, you must link content types to a variant group.

**Note:** Content type assignments are **branch-specific**, meaning changes in one branch do not affect other branches.

To link content types, perform the following steps:

1.  In the **Linked Content Types** field, select one or more content types.
2.  Click **Apply**.
3.  Click **Save**.

## Unlinking Content Types

When content types are unlinked from a variant group, they appear in the **Unlinked Content Types** section.

From this section, you can perform the following actions:

-   **Re-link Content Type**: Reconnect the content type and re-enable entry variant creation.
-   **Remove Content Type**: Remove the content type and delete all associated entry variants.

**Note:** When a content type is unlinked, you can still update, publish, or unpublish existing entry variants. However, you cannot create new entry variants.

## Using Variant Groups in Entries

After linking a variant group to a content type, a **Variants** dropdown appears in the entry editor. This allows you to create and manage entry variants for that content type.

For more information, refer to [Create an Entry Variant](/docs/headless-cms/create-an-entry-variant).

## API Reference

To manage variant groups via API, refer to the [Variant Group](/docs/developers/apis/content-management-api/variant-groups) API requests.
