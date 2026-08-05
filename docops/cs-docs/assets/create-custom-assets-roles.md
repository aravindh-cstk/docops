---
title: "[AM2.0] - Create Custom Assets Roles"
description: Create custom organization-level (product-level) roles and permissions for Assets.
url: https://www.contentstack.com/docs/assets/create-custom-assets-roles
product: Contentstack Assets
doc_type: how-to
audience:
  - administrators
  - developers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create Custom Assets Roles

This page explains how to create custom organization-level (product-level) roles for Assets in Contentstack, including selecting permission categories and configuring access. It is intended for administrators managing user access and compliance, and should be used when you need to define or adjust Assets permissions beyond default roles.

## Title

[AM2.0] - Create Custom Assets Roles

## Url

/assets/create-custom-assets-roles

## Article content

### Item 1

#### Article section

##### Heading

Create Custom Assets Roles

##### Content

Custom roles define **organization-level** (product-level) permissions for Assets (e.g., user management, roles management, spaces creation, asset type configuration, fields, and languages). These roles help align access with internal responsibilities and compliance requirements.

To create a custom role, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Administration** through “App Switcher”, then click the **Roles** tab to view organization roles.
- Click **+ New Role**.
- Enter a **Name** and **Description** (optional).
- Under **Choose a Product**, click **Assets**.
- The available permission categories are:Spaces
- Fields
- Asset Types
- Users
- Roles
- Languages
- For each category, click **Select Permissions**, or click the vertical ellipsis and select **Manage Permissions**.
- A permissions side panel opens. Select the required permissions (View, Create, Edit, or Delete) for the selected category.
- Click **Save**.
- Configure permissions only for the areas this role should access. Leave other categories unselected to restrict access.
- Click **Create Role**.

The custom role is created successfully and appears on the **Roles** listing page with a **Custom** tag.

The role becomes available for selection when:
- Inviting new users
- Editing existing users’ organization-level Assets roles

## Common questions

**Q: Where do custom Assets roles appear after creation?**  
A: They appear on the **Roles** listing page with a **Custom** tag.

**Q: When can a newly created custom Assets role be assigned to users?**  
A: When inviting new users or editing existing users’ organization-level Assets roles.

**Q: What happens if I leave permission categories unselected?**  
A: Access is restricted for those categories because permissions are configured only for selected areas.