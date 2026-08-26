---
title: "Change Organization Role of Existing Users"
description: "How to update an existing user's organization-level Administration and product roles, along with project-level roles, in Contentstack."
url: /administration/change-organization-role-of-existing-users
uid: bltda4a5fdab7ba73f3
---

# Change Organization Role of Existing Users

## Change Organization Role of Existing Users

Contentstack uses **role-based access control** (**RBAC**) to manage access across your organization and its products. This page shows you how to update the roles of an existing organization user. For an existing user, you can update:

-   **Administration roles**: Organization-level roles, such as Owner, Admin, Security Manager, Product Analytics Viewer, and Member, that control organization-wide capabilities.
-   **Product roles**: Organization-level roles for each product, such as the CMS, Assets, and AgentOS, that control product-wide access.
-   **Project-level roles**: Roles applied to individual stacks, spaces, or AgentOS projects within a product.

A user can hold more than one role at the same time. For example, a user can be both a Member and a Product Analytics Viewer.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to edit an existing user's Administration, product, and project-level roles.

-   Which role rules apply when updating a user, such as the required Administration role.


## Change a User's Roles

To change the roles of a user, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Navigate to **Administration** through the App Switcher, then click the **Users** tab to view organization users.
2.  Click the vertical ellipsis next to the user and select **Edit**.![Edit option for a user on the Users tab](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6efdbeb486a9b14c/24a548bbc0f9c8f3c4e5c1e5/RBAC_Edit_User.png?locale=en-us)
3.  On the **Edit User** screen, update the following as required:
    -   The organization-level **Administration** roles.
    -   The product roles for each product, such as the CMS, Assets, and AgentOS.
    -   The assigned stacks, spaces, or AgentOS projects, and the project-level roles for each.
4.  Click **Update** to save your changes.![Update button on the Edit User screen](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amfa61bf74c627dcd7/91132031a9c760e8cec51097/RBAC_Edit_User_2.png?locale=en-us)

Changes take effect immediately.

**Note:**

-   At least one **Administration** role must always remain assigned. By default, the **Member** role is selected.
-   Organization-level (product-level) custom roles created in **Administration** are available for selection here. Project-level custom roles, such as custom stack, space, or AgentOS project roles, must be created from the respective project or its per-product settings page before they can be assigned.

**Additional Resource:**

-   To learn about the organization-level Administration roles, refer to the [About Administration Roles](/docs/administration/about-administration-roles) documentation.
-   To learn about the default roles available for each product, refer to the [About Product Roles](/docs/administration/about-product-roles) documentation.

## Related Resource

-   [Get all roles in an Organization](/docs/developers/apis/administration-api/organizations#get-all-roles-in-an-organization)
