---
title: "[Stack Roles] - Examples to Create Custom Roles"
description: Examples to Create Custom Roles
url: https://www.contentstack.com/docs/headless-cms/examples-to-create-custom-roles
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-05-18
---

# [Stack Roles] - Examples to Create Custom Roles

This page provides practical examples for creating custom roles in Contentstack to control access across entries, assets, languages, and taxonomies. It is intended for administrators and developers who manage stack permissions and should be used when defining role-based access models for different teams and workflows.

## Examples to Create Custom Roles

Custom roles help you control access to content, assets, languages, and taxonomies within your stack. This guide provides common role configuration examples to help you manage permissions for different user responsibilities and workflows.

## Prerequisites
Before you begin, ensure that you:
- Have access to the organization and stack
- Have permission to create and manage roles
- Understand the content types, assets, languages, or taxonomies you want to manage

## Entry-Level Permissions

### Scenario 1: Grant All Permissions to Specific Content Types
Use this configuration when users need complete access to entries within selected content types while restricting access to other content types in the stack.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
- Select **All Permissions** in the **Select Permissions** field.
- Select **Specific Content Types**.
- Click **Select Content Types** and select the required content types, for example, **Products**.
- Click **Add Content Types**.
- **Save** the role.

### Scenario 2: Grant Specific Permissions to Specific Content Types
Use this configuration when users require limited access, such as read-only or publish-only permissions, for selected content types.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
- Select **Read** in the **Select Permissions** field.
- Select **Specific Content Types**.
- Click **Select Content Types** and select the required content types, for example, **Contact Us**.
- Click **Add Content Types**.
- **Save** the role.

### Scenario 3: Restrict Access to Specific Entries
Use exceptions when users should have broad access to a content type but must be restricted from accessing specific entries.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
- Select **All Permissions** in the **Select Permissions** field.
- Select **All Content Types**.
- Scroll down and click **Add Exceptions**.
- Under **Specific Entries**, click **Add Rule**.
- Under **Permissions**, select **Read**.
- Click **Select Content Type** and select the **Products** content type.
- Select the “Introducing iPhone X” entry.
- Click **Add Entries**.
- **Save** the role.

## Field-Level Permissions

### Scenario 4: Restrict Editing Access to Specific Fields
Use field-level restrictions to protect sensitive or system-managed fields while allowing users to edit the rest of the entry.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
- Select **All Permissions** in the **Select Permissions** field.
- Select **All Content Types**.
- Scroll down and click **Add Exceptions**.
- Under **Specific Entries**, click **Add Rule**.
- Under **Permissions**, select **Edit**.
- Click **Select Content Type** and select the **Products** content type.
- Select the **Description** field.
- Click **Add Entries**.
- **Save** the role.

## Taxonomy Management Permissions

### Scenario 5: Grant Permissions to Specific Taxonomies
Use taxonomy permissions to allow custom role users to manage taxonomy structures without requiring Admin or Developer access.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Taxonomies** in the **Permissions** section, click **Add Rule**.
- In the **Select Permissions** field, select **Create**, **Update**, and **Publish/Unpublish**.
- Select **Specific Taxonomies**.
- Click **Select Taxonomies** and select the required taxonomies.
- Click **Add Taxonomies**.
- **Save** the role.

**Note**: Taxonomy management permissions control access to taxonomy structures only. Entry-level taxonomy access is managed separately through entry permissions.

### Scenario 6: Restrict Actions on Specific Taxonomies
Use taxonomy exceptions when users need broad taxonomy management access but must be restricted from performing actions on specific taxonomies.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Taxonomies** in the **Permissions** section, click **Add Rule**.
- Select **All Permissions**.
- Select **All Taxonomies**.
- Scroll down and click **Add Exceptions**.
- Under **Specific Taxonomies**, click **Add Rule**.
- Select **Delete** in the **Permissions** field. This allows the user to manage everything except for the accidental permanent removal of the critical 'Regions' taxonomy.
- Click **Select Taxonomies** and select the **Regions** taxonomy.
- Click **Add Taxonomies**.
- **Save** the role.

**Note**: Taxonomy exceptions apply only to taxonomy management permissions. They do not affect entry-level taxonomy access configured under entry permissions.

## Asset-Level Permissions

### Scenario 7: Grant Permissions to Specific Assets
Use asset-level permissions to control access to selected files or media assets within the stack.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Assets** in the **Permissions** section, click **Add Rule**.
- Select **Read** in the **Select Permissions** field.
- Select **Specific Assets**.
- Click **Select Assets**.
- Select the required assets, for example, Image 1 and Image 2.
- **Save** the role.

## Language-Level Permissions

### Scenario 8: Restrict Actions for Specific Languages
Use language exceptions when users need access to most localized content but should not manage content for specific languages.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Languages** in the **Permissions** section, select the **All Languages** checkbox.
- Click **Add Exceptions**.
- Click **Add Rule**.
- Select **Create**, **Update**, and **Delete** in the **Select Permissions** field.
- Select **French - France** and **German - Germany**.
- **Save** the role.

### Scenario 9: Restrict Access to the Master Language
Use this configuration when localization teams should work only on translated content and should not modify the master language.

**Warning**: If you deselect the master language, unlocalized entries that inherit content from the master language may not be accessible.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:
- Navigate to the stack where you want to create the role.
- Click the **Settings** icon and select **Users & Roles**.
- Click **Roles**.
- Click **New Role** and enter a name and description for the role.
- Under **Languages** in the **Permissions** section, deselect **English - United States**.
- Click **Add Exceptions**.
- Click **Add Rule**.
- Select **Create**, **Update**, and **Delete** in the **Select Permissions** field.
- Select the required languages, for example, **French - France**.
- **Save** the role.

## API Reference
To perform role management operations via API, refer to the following API requests:
- [Create role](/docs/developers/apis/content-management-api#create-a-role)
- [Update role](/docs/developers/apis/content-management-api#update-role)
- [Delete role](/docs/developers/apis/content-management-api#delete-role)

Custom roles help you control access across entries, assets, languages, and taxonomies while ensuring users only have the permissions required for their responsibilities. By combining permissions and exceptions, you can create flexible access models that align with your organization’s workflows and governance requirements.

## Common questions

### What are custom roles used for in a stack?
Custom roles help you control access to content, assets, languages, and taxonomies within your stack.

### When should I use exceptions in role permissions?
Use exceptions when users should have broad access but must be restricted from accessing specific entries, fields, languages, or taxonomies.

### Do taxonomy management permissions control entry-level taxonomy access?
**Note**: Taxonomy management permissions control access to taxonomy structures only. Entry-level taxonomy access is managed separately through entry permissions.

### Where can I find API operations for role management?
To perform role management operations via API, refer to the following API requests:
- [Create role](/docs/developers/apis/content-management-api#create-a-role)
- [Update role](/docs/developers/apis/content-management-api#update-role)
- [Delete role](/docs/developers/apis/content-management-api#delete-role)

<!-- Filename: stack-roles-examples-to-create-custom-roles.md -->