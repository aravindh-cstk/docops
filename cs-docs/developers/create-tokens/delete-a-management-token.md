---
title: "[Set Up Your Project] - Delete a Management Token"
description: Delete a management token in Contentstack and understand the impact on sessions and permissions.
url: https://www.contentstack.com/docs/headless-cms/delete-a-management-token
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Delete a Management Token

This page explains how to delete a management token in Contentstack, who is authorized to perform the deletion, and what to consider before removing a token that may be in active use.

## Delete a Management Token

You can delete a management token in Contentstack if it's no longer required. Deleting a token is permanent and will immediately terminate all sessions using that token. Only authorized users, such as the stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin), must perform this action with caution.

To delete a management token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon in the left navigation panel.
- Select **Tokens** in the list.
- Navigate to the **Management Tokens** tab to view the list of all the existing management tokens for the stack.
- Click the vertical ellipses next to the token you wish to delete and click **Delete**.![Delete option from management token list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32411f11cee0e6bb/67f5c0ec61ba905952f364a7/Delete_Management_Token.png)
- In the **Delete Management Token** confirmation modal, enter the exact name of the token and click **Delete**.![Confirmation modal to delete management token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c755f609ea51ee6/67f5c0eb8b8c703e01bfb2e1/Delete_Management_Token_Confirmation.png)

**Warning:** Deleting a management token **instantly revokes all permissions and sessions** associated with it. Ensure that no active operations depend on the token before deletion.

## Common questions

### Who can delete a management token?
Only authorized users, such as the stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin), must perform this action with caution.

### What happens immediately after deleting a management token?
Deleting a token is permanent and will immediately terminate all sessions using that token.

### Do I need to confirm the token name before deletion?
Yes. In the **Delete Management Token** confirmation modal, enter the exact name of the token and click **Delete**.

### What should I check before deleting a token?
Ensure that no active operations depend on the token before deletion.