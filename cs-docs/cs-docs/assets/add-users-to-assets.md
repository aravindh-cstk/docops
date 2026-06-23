---
title: "[AM2.0] - Add Users to Assets"
description: Instructions for inviting users to Assets via Contentstack Administration and assigning product-level and optional space-level roles.
url: https://www.contentstack.com/docs/assets/add-users-to-assets
product: Contentstack Assets
doc_type: how-to
audience:
  - administrators
  - developers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Add Users to Assets

This page explains how to invite users to Contentstack Assets via Administration and assign product-level and optional space-level roles. It is intended for organization administrators managing user onboarding and access control, and should be used when adding new users or adjusting role-based access across Assets and spaces.

## Title

[AM2.0] - Add Users to Assets

## Url

/assets/add-users-to-assets

## Article content

### Item 1

#### Article section

##### Heading

Add Users to Assets

##### Content

Users are added to Assets through Contentstack [Administration](../developers/organization/invite-users-to-organization.md). During the invitation flow, roles are assigned at two levels:
- **Product-level**: Organization-specific **Administration** and **Assets** roles
- **Space level (optional)**: Space-specific roles applied per selected space

This approach enables centralized user onboarding with granular access control across spaces.

**Note:** At least one **Administration** role is required for every invited user. By default, the **Member** role is preselected.

To invite users to **Assets**, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.
- Click **Invite User**.
- Enter one or more email addresses (comma-separated).
- In **Assign Product Access**, click **Manage Roles** for **Administration**. By default, the **Member** role is selected.**Note:** Modify this selection only if elevated administrative access is required.
- Click **Manage Roles** for **Assets**.
- A side panel opens, listing the default and custom organization-level roles available for Assets. Select one or more roles as required.
- Optionally select one or more spaces to which the user should be added.
- Select space-level roles (for example: Space Admin, Asset Developer, Asset Manager). By default, selected space-level roles apply to all selected spaces.
- Use **Roles Per Spaces** to fine-tune space-level access:Assign different roles for individual spaces
- Assign custom space roles where needed
- Remove a space or clear roles to restrict access.
- Click **Save**.
- Click **Invite** to send the invitation email.

This **role-based access control** (**RBAC**) model ensures secure and flexible access management across Assets and spaces while supporting both system-defined and custom permissions.

## Common questions

### Do I need to assign an Administration role to every invited user?
Yes. **Note:** At least one **Administration** role is required for every invited user.

### Can I assign roles at both the product level and the space level?
Yes. Roles are assigned at two levels: **Product-level** (Administration and Assets roles) and **Space level (optional)** (space-specific roles per selected space).

### How do I assign different roles for different spaces?
Use **Roles Per Spaces** to fine-tune space-level access:Assign different roles for individual spaces.

### Where do I invite users from?
Invite users through Contentstack **Administration** by navigating via “App Switcher” and using the **Users** tab and **Invite User** flow.