---
title: "Bulk Operations on Organization Users"
description: "Efficiently manage organization users with bulk operations. Remove, update stack access, or change roles in one step."
url: /administration/bulk-operations-on-organization-users
---

# Bulk Operations on Organization Users

## Bulk Operations on Organization Users

Bulk operations let you manage multiple organization users in a single step. You can remove users, update their stack access, change their organization roles, force password resets, reset Multi-Factor Authentication (MFA), and more.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What you will learn

-   How to select multiple organization users for a bulk action.
    
-   Which bulk operations you can apply to the selected users.
    
-   How each operation affects user roles, stack access, sessions, and MFA.
    

**Note:** If any bulk action is not visible for your organization, please reach out to our [support](mailto:support@contentstack.com) team.

## Perform Bulk Operations on Organization Users

Log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps:

1.  Navigate to **Administration** through “App Switcher”.
2.  Click the **Users** tab.
3.  Select the checkboxes next to the users you want to manage.
    
    **Note:** You can only select up to **10 users** at a time.
    
4.  In the floating panel that appears, select the operation you want to perform.
    -   **Remove**: Removes the selected users from the organization.
    -   **Update Organization Role**: Updates the organization role for the selected users.
    -   **Update Stack Access**: Updates the stack access for selected users.
        
        **Note:** The new stack access applied would overwrite the existing access the users had in respective stacks.
        
    -   **Force Password Reset**: Sends a password reset email to the selected users.
    -   **Reset MFA**: Sends an MFA reset link email to the selected users.
    -   **Force Kill Session**: Selected users will be logged out immediately and will need to log in again. Use this to quickly secure accounts during suspicious activity or access concerns.
        
        **Note:** You cannot terminate your own sessions. Users added to multiple organizations or no active sessions will be skipped.
        

Bulk operations help you manage organization users more efficiently by reducing repetitive administrative tasks.
