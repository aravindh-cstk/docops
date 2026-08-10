---
title: "Setting Up Taxonomy-based Permissions for Regional Content Management"
description: "Learn how to manage granular permissions in Contentstack using taxonomy-based roles, allowing access control for taxonomies and terms within your entries."
url: /headless-cms/setting-up-taxonomy-based-permissions-for-regional-content-management
---

# Setting Up Taxonomy-based Permissions for Regional Content Management

## Setting Up Taxonomy-based Permissions for Regional Content Management

The Taxonomy-based Permissions feature allows you to set more granular permissions by including taxonomies and their terms while creating custom roles. This enhancement enables users to have permissions not only for content types but also for specific taxonomies and their terms.

With this feature, you can set specific permissions for taxonomies as well as for terms. For example, you can select either all taxonomies or a specific taxonomy (let’s say “Regions”) and define permissions for individual terms within this taxonomy.

Consider a scenario where you have a "Regions" taxonomy and you have categorized entries based on the terms from this taxonomy. You want to allocate custom roles to your stack collaborators to give them permissions only to work on specific regional entries. You can easily do this with the taxonomy-based permissions feature.

To customize taxonomy-based permissions for custom roles, log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps below:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to create a taxonomy-based role, navigate to the “Settings” icon (press “S”), and select **Users & Roles**.
2.  Select the **Roles** tab.
3.  Click on the **\+ New Role** button located at the top right corner of the page.
4.  Enter a suitable **Name** and **Description** for the role.
5.  Under Permissions, define the permissions that you want to assign to the new role. You can set permissions on [entries](/docs/headless-cms/about-entries/), [assets](/docs/headless-cms/about-assets/), and [asset folders](/docs/headless-cms/create-a-folder/).
6.  Within the **All Entries of Content Types / Taxonomies** field, configure the permissions as required.
7.  Select whether you want to add these permissions to **All Taxonomies** or **Specific Taxonomies**. In our scenario, select **Specific Taxonomies**.
8.  Select the **Regions** taxonomy from the list of available taxonomies.
9.  Select **Specific Terms**, and finally select the term you want to allow your stack users to collaborate in.
10.  You will be able to view the list of content types associated with the selected taxonomies.
     
     **Note:** Users assigned these custom roles will only be able to perform the permissions assigned to them if their entries contain the specific terms of those taxonomies.
     
11.  Click **Save** to create the new role.
12.  Now, assign this specific role to users, and they will only be able to access content types linked to the **Regions** taxonomy and entries associated with the parent term “North America” and its child terms.

![Regional-Custom-Role GIF.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d1155b1047ca0e7/6666b22e3c0f7e4fc1a43e3c/Regional-Custom-Role_GIF.gif)

The new taxonomy permissions feature enhances user access control by allowing for more granular permissions. This new approach enables users to work with content types and entries associated with specific taxonomies and terms, providing more precise and flexible permission management.

**Note:** With the new taxonomy permissions, you can only see entries with taxonomies and terms you have explicit access to on the entry list page; saving entries for custom roles with taxonomy permissions may currently require adding at least one term.

By following these steps, you can effectively manage permissions for your stack collaborators, ensuring they have the appropriate access to the entries they need to work on.
