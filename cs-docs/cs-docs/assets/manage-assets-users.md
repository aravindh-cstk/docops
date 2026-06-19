---
title: "[AM2.0] - Manage Assets Users"
description: Manage Assets user access, roles, and space assignments through Contentstack Administration.
url: https://www.contentstack.com/docs/assets/manage-assets-users
product: Contentstack Assets
doc_type: guide
audience:
  - administrators
  - developers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Manage Assets Users

This page explains how to manage user access to Contentstack Assets via Contentstack Administration, including editing roles and space assignments or removing users from the organization. It is intended for administrators who need to control organization-level and space-level permissions, and should be used when onboarding, updating access, or offboarding users.

### Item 1

#### Article section

##### Heading

Manage Assets Users

##### Content

Assets user management is handled through Contentstack [Administration](/docs/developers/organization/invite-users-to-organization), where organization-level access, product roles, and space-level permissions can be viewed and updated in one place.

Administrators can review who has access to Assets, modify roles and space assignments, or completely remove a user from the organization.

## Edit User Roles
You can edit or remove a user’s Assets roles, assigned spaces, and space-level roles at any time.

To edit users, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.
- Click the vertical ellipsis next to the user and select **Edit**.
- On the **Edit user** screen, update the following:Organization-level Assets roles (default or custom)
- Assigned spaces
- Space-level roles per space
- Click **Update** to save changes.

Changes take effect immediately.

**Note:** At least one **Administration** role must always remain assigned. By default, the **Member** role is selected.

## Remove a User From the Organization
To remove the user entirely from the organization, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.
- Click the vertical ellipsis next to the user and select **Remove**.
- A **Remove User** confirmation modal appears. Click **Remove** to confirm the action.

**Tip:** Remove space access or Assets roles if the user still requires access to other Contentstack products. Remove the user entirely only when the user is no longer required in the Contentstack organization.

Managing Assets users through Contentstack Administration ensures centralized governance while enabling granular, space-specific access control.

## Common questions

**How do I change a user’s Assets role?**  
Use **Administration** → **Users**, select **Edit** for the user, update roles and assignments, then click **Update**.

**Do changes to user roles take effect immediately?**  
Yes, changes take effect immediately.

**When should I remove a user entirely from the organization?**  
Remove the user entirely only when the user is no longer required in the Contentstack organization.

**What should I do if a user still needs access to other Contentstack products?**  
Remove space access or Assets roles if the user still requires access to other Contentstack products.