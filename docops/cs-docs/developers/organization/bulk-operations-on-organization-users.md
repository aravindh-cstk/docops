---
title: "[Organization] - Bulk Operations on Organization Users"
description: Bulk operations to manage multiple organization users in Contentstack Administration.
url: https://www.contentstack.com/docs/administration/bulk-operations-on-organization-users
product: Administration
doc_type: how-to
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-04-09
---

# [Organization] - Bulk Operations on Organization Users

This page explains how to perform bulk operations on Contentstack organization users from the Administration area. It is intended for administrators who need to manage multiple users at once (for example, removing users, updating roles, or resetting MFA) and should be used when you want to apply the same action to several users in a single step.

## Bulk Operations on Organization Users

You can efficiently perform bulk operations to manage multiple [organization users](./organization-users.md). These operations allow you to remove users, update their stack access, change their organization roles, force password resets, reset **Multi-Factor Authentication** (**MFA**) and much more in a single step.

**Note**: If any bulk action is not visible for your organization, please reach out to our [support](mailto:support@contentstack.com) team.

To perform bulk operations on organization users, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Administration** through “App Switcher”.
- Click the **Users** tab.
- Select the checkboxes next to the users you want to manage.

  **Note**: You can only select up to **10 users** at a time.
- In the floating panel that appears, select the operation you want to perform.
  - **Remove**: Removes the selected users from the organization.
- **Update Organization Role**: Updates the organization role for the selected users.
- **Update Stack Access**: Updates the stack access for selected users.

  **Note**: The new stack access applied would overwrite the existing access the users had in respective stacks.
- **Force Password Reset**: Sends a password reset email to the selected users.
- **Reset MFA**: Sends an MFA reset link email to the selected users.
- **Force Kill Session**: Selected users will be logged out immediately and will need to log in again.**Note**: You cannot terminate your own sessions. Users added to multiple organizations or no active sessions will be skipped.

Bulk operations help you manage organization users more efficiently by reducing repetitive administrative tasks.

## Common questions

**Q: How many users can I select for a bulk operation at a time?**  
A: You can only select up to **10 users** at a time.

**Q: What should I do if a bulk action is not visible for my organization?**  
A: Please reach out to the [support](mailto:support@contentstack.com) team.

**Q: What happens when I use “Update Stack Access”?**  
A: The new stack access applied would overwrite the existing access the users had in respective stacks.

**Q: Can I use “Force Kill Session” on myself?**  
A: No. You cannot terminate your own sessions.