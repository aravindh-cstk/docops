---
title: "Add Users to Assets"
description: "Streamline user onboarding and access control in Contentstack Administration with a flexible RBAC model for secure Assets management and space roles."
url: /assets/add-users-to-assets
---

# Add Users to Assets

## Add Users to Assets

Users are added to Assets through Contentstack [Administration](/docs/administration/invite-users-to-organization). During the invitation flow, roles are assigned at two levels:

-   **Product-level**: Organization-specific **Administration** and **Assets** roles
-   **Space level (optional)**: Space-specific roles applied per selected space

This approach enables centralized user onboarding with granular access control across spaces.

**Note:** At least one **Administration** role is required for every invited user. By default, the **Member** role is preselected.

To invite users to **Assets**, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.
2.  Click **Invite User**.
3.  Enter one or more email addresses (comma-separated).
4.  In **Assign Product Access**, click **Manage Roles** for **Administration**. By default, the **Member** role is selected.
    
    **Note:** Modify this selection only if elevated administrative access is required.
    
5.  Click **Manage Roles** for **Assets**.
6.  A side panel opens, listing the default and custom organization-level roles available for Assets. Select one or more roles as required.
7.  Optionally select one or more spaces to which the user should be added.
8.  Select space-level roles (for example: Space Admin, Asset Developer, Asset Manager). By default, selected space-level roles apply to all selected spaces.
9.  Use **Roles Per Spaces** to fine-tune space-level access:
    -   Assign different roles for individual spaces
    -   Assign custom space roles where needed
10.  Remove a space or clear roles to restrict access.
11.  Click **Save**.
12.  Click **Invite** to send the invitation email.

This **role-based access control** (**RBAC**) model ensures secure and flexible access management across Assets and spaces while supporting both system-defined and custom permissions.
