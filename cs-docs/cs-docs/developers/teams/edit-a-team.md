---
title: "[Teams] - Edit a Team"
description: Edit an existing team in Contentstack, including team details, roles, and users.
url: https://www.contentstack.com/docs/administration/edit-a-team
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Teams] - Edit a Team

This page explains how to edit an existing team in Contentstack, including updating the team name/description, managing roles, and adding or removing users. It is intended for organization Owners and Admins who need to maintain team settings after creation.

## Edit a Team

Once created, you can edit an existing team and make changes as per your requirements.

**Note**: Only the [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) of the organization can edit teams created by other stakeholders.

To edit a team, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [Organization](../organization/about-organizations.md) where you want to edit an existing team, navigate to the “Org Admin” icon on the left navigation panel, and select **Teams **from the menu.
- Click on the three dots in the **Actions** column (extreme right) for the team you want to edit and then click the **Edit** option (pencil icon).
- The **Edit** option (pencil icon) appears on the extreme right, as shown.
- Clicking the **Edit** option will take you to your existing team page where you can:Update the **Team Name** or **Description**
- Update already assigned Organization-level roles and add or remove Stack-level roles.
- Add/remove users (refer [Add Users to a Team](./create-a-team.md#add-users-to-a-team) section in the [Create a Team](./create-a-team.md) document).

When you modify settings in the **Team** tab, you must click the 'Save' button to apply the changes. Conversely, in the **Users** tab, changes are immediate (there is no 'Save' button), and users can be added or removed directly.

**Additional Resource**: You can also edit teams via the [Edit a team](../../../api-docs/api-detail/content-management-api.md#update-a-team) API request.

## Common questions

### Who can edit a team?
Only the [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) of the organization can edit teams created by other stakeholders.

### Do I need to click Save after editing a team?
When you modify settings in the **Team** tab, you must click the 'Save' button to apply the changes. In the **Users** tab, changes are immediate (there is no 'Save' button).

### Can I manage team users while editing a team?
Yes. You can add/remove users (refer [Add Users to a Team](./create-a-team.md#add-users-to-a-team) section in the [Create a Team](./create-a-team.md) document).

### Can I edit a team using an API?
Yes. **Additional Resource**: You can also edit teams via the [Edit a team](../../../api-docs/api-detail/content-management-api.md#update-a-team) API request.