---
title: "[Set Up Your Project] - Update a Role"
description: Update a Role in Contentstack by editing role details and permissions.
url: https://www.contentstack.com/docs/headless-cms/update-a-role
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Update a Role

This page explains who can update a role in Contentstack and the exact steps to edit a role’s details and permissions. It is intended for stack owners and users with admin/developer roles who created the role, and should be used when you need to modify role settings such as permissions, publishing environments, or language access.

## Update a Role

Only the [stack owner](./types-of-roles.md#owner), or the users assigned  [admin](./types-of-roles.md#admin) and [developer](./types-of-roles.md#developer) roles, who created the role, can update that particular role.

To update a role, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to the [stack](../set-up-stack/about-stack.md), navigate to the “Settings” icon on the left navigation panel, and select **Users & ****Roles.**
- Select the **Roles** tab and select the role that you want to update.
- Edit the details such as **Name** and **Description** of the role, if required.
- Under the **PERMISSIONS** section, you can update the permissions assigned to the role by making changes to the “Entry-/Field-level permissions” and/or to the “Asset-level permissions.” Also, you can make changes to the **Publishing Environments**, or the **Languages** sections.
- You can then make changes to the **Publishing Environments** section.
- Under the **Languages** section, you can update the [language-related permissions](../multilingual-content/manage-language-permissions.md) assigned to the role by selecting or deselecting a language from the available list. Additionally, you can also update the [exceptions set on different language variants](./create-a-role.md#exceptions-on-languages) of all entries in the stack.

You can also restrict access for a specific role to the [master language](../multilingual-content/set-the-master-language.md). To understand how this restriction affects entry access, refer to the [Language-Specific Restrictions on Entries Scenarios](../multilingual-content/manage-language-permissions.md#language-specific-restrictions-on-entries-scenarios) section.

**Warning**: If you deselect the master language, then any [unlocalized language entry](../multilingual-content/unlocalize-an-entry.md) that inherits content from the master language will not be accessible.
- **Save** the changes.

**Note**: The stack owner can update any role in the stack irrespective of the role being created by any other user.

## API Reference

Here are the links to the API requests related to this action:
- [Update role](../../../api-docs/api-detail/content-management-api.md#update-role)
- [Create role](../../../api-docs/api-detail/content-management-api.md#create-a-role)

## Common questions

### Who can update a role?
Only the stack owner, or users assigned admin and developer roles who created the role, can update that particular role.

### What parts of a role can be updated?
You can edit role details such as **Name** and **Description**, and update permissions under **PERMISSIONS**, including “Entry-/Field-level permissions,” “Asset-level permissions,” **Publishing Environments**, and **Languages**.

### What happens if the master language is deselected?
**Warning**: If you deselect the master language, then any [unlocalized language entry](../multilingual-content/unlocalize-an-entry.md) that inherits content from the master language will not be accessible.

### Where can I find the related API requests?
See **API Reference** for links to [Update role](../../../api-docs/api-detail/content-management-api.md#update-role) and [Create role](../../../api-docs/api-detail/content-management-api.md#create-a-role).

<!-- filename: set-up-your-project-update-a-role.md -->