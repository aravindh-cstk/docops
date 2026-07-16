---
title: "[Stack Roles] - Create a Role"
description: Create a Role
url: https://www.contentstack.com/docs/headless-cms/create-a-role
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
  - owners
version: unknown
last_updated: 2026-05-18
---

# [Stack Roles] - Create a Role

This page explains how to create a custom role in a Contentstack stack and configure permissions and exceptions for entries, taxonomies, assets, and languages. It is intended for stack Owners, Admins, and users with the Developer role who need to manage access control for different user groups within a stack.

## Create a Role

Roles help you control what users can view, create, update, publish, or delete within a stack. You can create custom roles to manage access for content teams, developers, translators, taxonomy managers, and other users.

Only stack [Owners](./types-of-roles.md#owner), [Admins](./types-of-roles.md#admin), and users assigned the [Developer](./types-of-roles.md#developer) role can create roles in a stack.

To create a role, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your stack and click the **Settings** icon.
- Select **Users & Roles**.
- Open the **Roles** tab.
- Click **New Role**.
- Enter a name and description for the role.
- Under **Permissions**, configure the required permissions for entries, taxonomies, assets, and languages
- Under **Publishing Environments**, select the [environments](../set-up-environments/about-environments.md) where the role can publish content.
- Configure [language](../multilingual-content/about-languages.md) permissions and exceptions as required.
- Click **Save**.

**Note**: Publishing environment permissions apply to all language variants associated with the selected environments.

## Permissions on Entries
You can configure entry-level permissions to control what a role can do with entries in specific content types or taxonomies. Available permissions include **Read**, **Create**, **Update**, **Publish/Unpublish**, and **Delete**.

Entry permissions are divided into the following categories:
- **All Entries of Content Types/Taxonomies**Use this option to define permissions for all entries of one or more content types or taxonomies.

For example:

Allow a role to **Read** all entries from the “Marketing Blogs” content type.
- Allow a role to manage entries associated with a specific taxonomy and term combination, such as the “Regions” taxonomy with the “North America” term.
- **Specific Entries**Use this option to define permissions for selected entries within one or more content types.

For example, allow a role to **Read** and **Update** the “AI” entry from the “Marketing Blogs” content type.

## Permissions on Taxonomies
Taxonomy permissions allow you to control access to taxonomy structures within a stack. These permissions are available only when taxonomy RBAC is enabled for your organization.

With taxonomy permissions, you can allow a role to perform the following actions:
- **Read**: View taxonomies and taxonomy terms
- **Create**: Create taxonomies and create, update, or delete taxonomy terms
- **Update**: Update taxonomy details and create, update, or delete taxonomy terms
- **Publish/Unpublish**: Publish or unpublish taxonomies
- **Delete**: Delete taxonomies

Taxonomy permissions are divided into the following categories:
- **All Taxonomies**Use this option to define permissions for all taxonomies in the stack.

For example:

Allow a role to **Read** all taxonomies in the stack.
- Allow a role to **Create** and **Update** taxonomy structures across all taxonomies.
- **Specific Taxonomies**Use this option to define permissions for selected taxonomies.

For example, allow a role to **Read** and **Update** the “Regions” taxonomy.

**Note**:
- Taxonomy permissions apply only to taxonomy structures. They do not control entry-level access to taxonomy-associated entries.
- The **Taxonomies** permission section is visible only when the taxonomy RBAC plan is enabled for the organization.

## Permissions on Assets
You can configure asset-level permissions to control access to assets and asset folders within a stack.

Available permissions include **Read**, **Create**, **Update**, **Publish/Unpublish**, and **Delete**.

Asset permissions are divided into the following categories:
- **All Assets and Folders**Use this option to define permissions for all assets and asset folders in the stack.

For example, allow a role to **Read** all assets and folders.
- **Specific Assets**Use this option to define permissions for selected assets.

For example, allow a role to **Read** and **Publish/Unpublish** the “AI_1” asset.
- **Specific Folders**Use this option to define permissions for selected asset folders.

Permissions applied to a folder also apply to all assets and subfolders within that folder.

For example:

Allow a role to **Read** the “Blogs” folder.
- Allow a role to **Read** and **Publish/Unpublish** the “Homepage” folder.

## Permissions on Languages
Language permissions control access to localized versions of entries in the stack.

Available permissions include **Read**, **Create**, **Update**, and **Delete**.

Language permissions are divided into the following categories:
- **All Languages**Use this option to define permissions for all language variants in the stack.

For example, allow a role to access all English and German entry variants.
- **Specific Languages**Use this option to define permissions for selected language variants.

For example, allow a role to access only the “English - United States” language variant.

**Note**: Language permissions apply at the role level and cannot vary by content type.

**Warning**: If you deselect the master language, users cannot access unlocalized entries that inherit content from the master language.

To allow access to all available languages, select **All Languages**.

For more information about language-based access behavior, refer to the [Language-Specific Restrictions on Entries Scenarios](../multilingual-content/manage-language-permissions.md#language-specific-restrictions-on-entries-scenarios) section.

## Exceptions
Exceptions allow you to restrict actions that a role would otherwise be allowed to perform through assigned permissions.

For example, a role may have permission to create entries for all content types but be restricted from creating entries in the “Blog” content type.

### Exceptions on Entries
You can configure entry exceptions to restrict a role from performing actions such as **Read**, **Create**, **Update**, **Publish/Unpublish**, and **Delete**.

Entry exceptions are divided into the following categories:
- **All Entries of Content Types/Taxonomies**Use this option to restrict actions across all entries of one or more content types or taxonomies.

For example:

Allow a role to **Read** entries from the “Blog” content type but restrict **Update** access.
- Allow a role to manage entries associated with the “Regions” taxonomy and “North America” term but restrict **Publish/Unpublish** access.
- **Specific Entries**Use this option to restrict actions on selected entries.

For example, allow a role to read all entries but restrict updates to the “AI” entry from the “Marketing Blogs” content type.
- **Specific Fields**Use this option to restrict actions on selected fields across entries.

For example, allow a role to read all entries from the “Marketing Blogs” content type but restrict updates to the “Multi Line Textbox” field.

### Exceptions on Taxonomies
You can configure taxonomy exceptions to restrict specific taxonomy management actions.

These exceptions apply only to taxonomy structures and do not affect entry-level taxonomy access.

Taxonomy exceptions are divided into the following categories:
- **All Taxonomies**Use this option to restrict actions across all taxonomies.

For example, allow a role to read all taxonomies but restrict delete access.
- **Specific Taxonomies**Use this option to restrict actions on selected taxonomies.

For example, allow a role to manage all taxonomies but restrict publishing or deletion of the “Regions” taxonomy.

### Exceptions on Assets
You can configure asset exceptions to restrict actions on assets and asset folders.

Available restrictions include **Read**, **Create**, **Update**, **Publish/Unpublish**, and **Delete**.

Asset exceptions are divided into the following categories:
- **All Assets and Folders**Use this option to restrict actions across all assets and folders.

For example, allow a role to read all assets and folders but restrict update access.
- **Specific Assets**Use this option to restrict actions on selected assets.

For example, allow a role to read all assets but restrict publishing of the “Image1” asset.
- **Specific Folders**Use this option to restrict actions on selected folders.

For example, allow a role to read and update all folders except the “Marketing Blogs” and “Sales Blogs” folders.

By default, users can still access assets and subfolders within those folders based on the configured exception settings.

### Exceptions on Languages
You can configure language exceptions to restrict actions on localized entry variants.

Available restrictions include **Create**, **Update**, and **Delete**.

Language exceptions are divided into the following categories:
- **All Languages**Use this option to restrict actions across all language variants.

For example, allow a role to read entries in all languages but restrict update access.
- **Specific Languages**Use this option to restrict actions on selected language variants.

For example, allow a role to read English (United States) entry variants but restrict update access.

## API Reference
To create custom roles via API, refer to the [Create a Role](../../../api-docs/api-detail/content-management-api.md#create-a-role) API request.

## Common questions

### Who can create roles in a stack?
Only stack Owners, Admins, and users assigned the Developer role can create roles in a stack.

### What permissions can be configured for entries?
Available permissions include **Read**, **Create**, **Update**, **Publish/Unpublish**, and **Delete**.

### Do publishing environment permissions apply per language?
Publishing environment permissions apply to all language variants associated with the selected environments.

### Are taxonomy permissions always available?
These permissions are available only when taxonomy RBAC is enabled for your organization, and the **Taxonomies** permission section is visible only when the taxonomy RBAC plan is enabled for the organization.