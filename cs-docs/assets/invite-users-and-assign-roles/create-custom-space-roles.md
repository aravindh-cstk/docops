---
title: "Create Custom Space Roles"
description: "Create and manage custom space roles in Contentstack for granular control over asset access, enhancing security and team autonomy."
url: /assets/create-custom-space-roles
uid: blt6d410ddd4a0608e5
---

# Create Custom Space Roles

## Create Custom Space Roles

Custom space roles allow you to define granular, space-level permissions in Contentstack Assets. These roles determine what users can do within a specific space. Unlike organization-level roles, these custom space roles apply only within the selected space and support detailed control across assets, folders, workspaces, and languages.

You can use custom space roles to enforce least-privilege access while still enabling teams to work independently.

To create a custom role, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **Assets** through “App Switcher” and open the required space.
2.  Navigate to **Space Settings** > **Users & Roles**.
3.  Open the **Roles** tab.
4.  Click **\+ New Role**.
5.  Enter a name and description for the role.
6.  Under **Scope**, select one or more workspaces. This role applies only to the selected workspaces.

    **Note:** Changing the selected workspace(s) resets previously configured permissions.

7.  In the **Assets** section, click **\+ Add Rule** to define what the role can do.
    -   Select permissions: **Read**, **Create**, **Update**, **Delete**.
    -   Choose the scope:
        -   **All Asset(s) and Folder(s)**
        -   **Specific Folder(s)** > **Select Folders**
        -   **Specific Asset(s)** > **Select Assets**
8.  Click **\+ Add Rule** to create additional permission rules for this role.
9.  Click **\+ Add Exception** to define what this role cannot do, explicitly restricting actions such as **Delete** for added safety.
10.  Select one or more languages that the role can access.
11.  To add language-level restrictions, click **\+ Add Exceptions**.
     -   Click **\+ Add Rule**.
     -   Select permissions: **Read**, **Create**, **Update**, **Delete**.
     -   Select language(s) from the dropdown to which the selected permissions apply.

         **Warning:** If you remove access to the default language, assets that inherit from it become inaccessible.

12.  Click **Save** to create the custom space role.

The new role appears in the **Roles** list for the space. You can now assign it to users when adding or editing space users.

## Best Practices

-   Use the least-privilege principle, grant only the permissions necessary for a user’s responsibilities.
-   Use exceptions to prevent high-risk actions, such as Delete in production workspaces.
-   Restrict language access carefully to avoid unintentionally blocking inherited assets.
-   Periodically review custom roles to maintain clean governance.
