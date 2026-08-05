---
title: "[Taxonomy] - Setting Up Taxonomy-based Permissions for Regional Content Management"
description: Setting up taxonomy-based permissions for custom roles to manage regional content access using taxonomies and terms.
url: https://www.contentstack.com/docs/headless-cms/setting-up-taxonomy-based-permissions-for-regional-content-management
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Taxonomy] - Setting Up Taxonomy-based Permissions for Regional Content Management

This page explains how to configure taxonomy-based permissions in Contentstack custom roles so collaborators can be granted access to content based on specific taxonomies and terms (for example, regional terms like “North America”). Use this when you need more granular access control than content-type-only permissions.

## Setting Up Taxonomy-based Permissions for Regional Content Management

The Taxonomy-based Permissions feature allows you to set more granular permissions by including taxonomies and their terms while creating custom roles. This enhancement enables users to have permissions not only for content types but also for specific taxonomies and their terms.

With this feature, you can set specific permissions for taxonomies as well as for terms. For example, you can select either all taxonomies or a specific taxonomy (let’s say “Regions”) and define permissions for individual terms within this taxonomy.

Consider a scenario where you have a "Regions" taxonomy and you have categorized entries based on the terms from this taxonomy. You want to allocate custom roles to your stack collaborators to give them permissions only to work on specific regional entries. You can easily do this with the taxonomy-based permissions feature.

To customize taxonomy-based permissions for custom roles, log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps below:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to create a taxonomy-based role, navigate to the “Settings” icon (press “S”) on the left navigation panel, and select **Users & Roles**.
- Select the **Roles** tab.
- Click on the **+ New Role** button located at the top right corner of the page.
- Enter a suitable **Name** and **Description** for the role.
- Under Permissions, define the permissions that you want to assign to the new role. You can set permissions on [entries](../../content-managers/author-content/about-entries.md), [assets](../../content-managers/author-content/about-assets.md), and [asset folders](../../content-managers/author-content/create-a-folder.md).
- Within the **All Entries of Content Types / Taxonomies** field, configure the permissions as required.
- Select whether you want to add these permissions to **All Taxonomies** or **Specific Taxonomies**. In our scenario, select **Specific Taxonomies**.
- Select the **Regions** taxonomy from the list of available taxonomies.
- Select **Specific Terms**, and finally select the term you want to allow your stack users to collaborate in.
- You will be able to view the list of content types associated with the selected taxonomies.

  **Note:** Users assigned these custom roles will only be able to perform the permissions assigned to them if their entries contain the specific terms of those taxonomies.
- Click **Save** to create the new role.
- Now, assign this specific role to users, and they will only be able to access content types linked to the **Regions** taxonomy and entries associated with the parent term “North America” and its child terms.

The new taxonomy permissions feature enhances user access control by allowing for more granular permissions. This new approach enables users to work with content types and entries associated with specific taxonomies and terms, providing more precise and flexible permission management.

**Note**: With the new taxonomy permissions, you can only see entries with taxonomies and terms you have explicit access to on the entry list page; saving entries for custom roles with taxonomy permissions may currently require adding at least one term.

By following these steps, you can effectively manage permissions for your stack collaborators, ensuring they have the appropriate access to the entries they need to work on.

## Common questions

**Q: Can I assign permissions to only one taxonomy (for example, “Regions”) instead of all taxonomies?**  
A: Yes—select **Specific Taxonomies** and then choose the taxonomy (such as **Regions**) from the list of available taxonomies.

**Q: Can I restrict access to specific terms within a taxonomy?**  
A: Yes—select **Specific Terms**, and then select the term you want to allow your stack users to collaborate in.

**Q: Will users with taxonomy-based permissions be able to work on entries that don’t include the allowed terms?**  
A: No—users assigned these custom roles will only be able to perform the permissions assigned to them if their entries contain the specific terms of those taxonomies.

**Q: Why might a user not see entries in the entry list page after taxonomy permissions are applied?**  
A: With the new taxonomy permissions, you can only see entries with taxonomies and terms you have explicit access to on the entry list page.