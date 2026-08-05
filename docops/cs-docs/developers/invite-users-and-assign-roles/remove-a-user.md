---
title: "[Set Up Your Project] - Remove a User"
description: Remove a user from a stack via the Contentstack UI or via API (Unshare a stack).
url: https://www.contentstack.com/docs/headless-cms/remove-a-user
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Remove a User

This page explains how to remove an existing user from a stack in Contentstack, including who has permission to do so and where to find the related API request. Read this if you manage stack users and roles and need to revoke a collaborator’s access.

## Remove a User

A [user](./about-stack-users.md) with the required permissions can remove an existing user from the [stack](../set-up-stack/about-stack.md).

**Note**: The [stack owner](./types-of-roles.md#owner) has the right to remove any user from a stack. But, an admin or developer can only remove a user whom they added.

To remove a user, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to the stack from which you want to remove the user.
- Click the “Settings” icon on the left navigation panel, and select **Users & Roles**. The **Users & Roles** page opens up where you can see the list of users (collaborators) in the stack.
- Hover over the user you want to delete, click on the “Delete” icon (trash bin) that appears at the extreme right.
- Confirm the **Remove** action to permanently remove the user from the stack.

## API Reference

To remove a user from the stack via API request, refer to the [Unshare a stack](../../../api-docs/api-detail/content-management-api.md#unshare-a-stack) API request.

## Common questions

**Can an admin or developer remove any user from a stack?**  
No. An admin or developer can only remove a user whom they added.

**Who can remove any user from a stack?**  
The [stack owner](./types-of-roles.md#owner) has the right to remove any user from a stack.

**Where do I remove users in the Contentstack UI?**  
Go to the stack, click the “Settings” icon, and select **Users & Roles**.

**Is there an API to remove a user from a stack?**  
Yes. Refer to the [Unshare a stack](../../../api-docs/api-detail/content-management-api.md#unshare-a-stack) API request.