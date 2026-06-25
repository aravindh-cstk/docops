---
title: "[Team] - Delete a Team"
description: Delete an existing team created in your Contentstack organization.
url: https://www.contentstack.com/docs/administration/delete-a-team
product: Contentstack
doc_type: how-to
audience:
  - developers
  - org-admins
version: unknown
last_updated: 2026-03-26
---

# [Team] - Delete a Team

This page explains how to delete an existing team in a Contentstack organization. It is intended for organization Owners and Admins who manage teams and permissions, and should be used when you need to remove a team and understand the impact on associated members’ permissions.

## Delete a Team

Contentstack allows you to delete an existing team created in your organization.

**Note**: Only the [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) of the organization can delete teams created by other stakeholders.

To delete a team, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [Organization](../organization/about-organizations.md) where you want to delete an existing team, navigate to the “Org Admin” icon on the left navigation panel, and select **Teams **from the menu.
- Click on the three dots in the **Actions** column for the team you want to delete (from the list) and then click the **Delete **option (trash bin icon).
- The **Delete **option (trash bin icon) appears on the extreme right, as shown.
- In the **Delete Team** modal that appears on your screen, click the **Delete Team** button in order to delete the team.

**Warning**: Deleting a team will cause the associated team members to lose the permissions assigned to them.

**Additional Resource**: You can also delete teams via the [Delete a team](../../../api-docs/api-detail/content-management-api.md#delete-a-team) API request.

## Common questions

### Who can delete a team?
Only the [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) of the organization can delete teams created by other stakeholders.

### What happens to team members’ permissions after deleting a team?
Deleting a team will cause the associated team members to lose the permissions assigned to them.

### Can I delete a team using an API?
Yes. You can also delete teams via the [Delete a team](../../../api-docs/api-detail/content-management-api.md#delete-a-team) API request.