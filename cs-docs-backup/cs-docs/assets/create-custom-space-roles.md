---
title: "[AM2.0] - Create Custom Space Roles"
description: Create and manage custom space roles to define granular, space-level permissions in Contentstack Assets.
url: https://www.contentstack.com/docs/assets/create-custom-space-roles
product: Contentstack Assets
doc_type: how-to
audience:
  - administrators
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create Custom Space Roles

This page explains how to create custom space roles in Contentstack Assets to control space-level permissions across assets, folders, workspaces, and languages. It is intended for space administrators and teams managing access control, and should be used when you need granular, least-privilege permissions within a specific space.

## Create Custom Space Roles

Custom space roles allow you to define granular, space-level permissions in Contentstack Assets. These roles determine what users can do within a specific space. Unlike organization-level roles, these custom space roles apply only within the selected space and support detailed control across assets, folders, workspaces, and languages.

You can use custom space roles to enforce least-privilege access while still enabling teams to work independently.

To create a custom role, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets** through “App Switcher” and open the required space.
- Navigate to **Space Settings** > **Users & Roles**.
- Open the **Roles** tab.
- Click **+ New Role**.
- Enter a name and description for the role.
- Under **Scope**, select one or more workspaces. This role applies only to the selected workspaces.**Note:** Changing the selected workspace(s) resets previously configured permissions.
- In the **Assets** section, click **+ Add Rule** to define what the role can do.Select permissions: **Read**, **Create**, **Update**, **Delete**.
- Choose the scope:**All Asset(s) and Folder(s)**
- **Specific Folder(s)** > **Select Folders**
- **Specific Asset(s)** > **Select Assets**
- Click **+ Add Rule** to create additional permission rules for this role.
- Click **+ Add Exception** to define what this role cannot do, explicitly restricting actions such as **Delete** for added safety.
- Select one or more languages that the role can access.
- To add language-level restrictions, click **+ Add Exceptions**.Click **+ Add Rule**.
- Select permissions: **Read**, **Create**, **Update**, **Delete**.
- Select language(s) from the dropdown to which the selected permissions apply.**Important:** If you remove access to the default language, assets that inherit from it become inaccessible.
- Click **Save** to create the custom space role.

The new role appears in the **Roles** list for the space. You can now assign it to users when adding or editing space users.

## Best Practices
- Use the least-privilege principle, grant only the permissions necessary for a user’s responsibilities.
- Use exceptions to prevent high-risk actions, such as Delete in production workspaces.
- Restrict language access carefully to avoid unintentionally blocking inherited assets.
- Periodically review custom roles to maintain clean governance.

## Common questions

### Can a custom space role apply across multiple spaces?
No. Unlike organization-level roles, these custom space roles apply only within the selected space.

### What happens if I change the selected workspace(s) under Scope?
**Note:** Changing the selected workspace(s) resets previously configured permissions.

### What is the purpose of using exceptions?
Exceptions let you define what this role cannot do, explicitly restricting actions such as **Delete** for added safety.

### What should I consider when restricting language access?
**Important:** If you remove access to the default language, assets that inherit from it become inaccessible.