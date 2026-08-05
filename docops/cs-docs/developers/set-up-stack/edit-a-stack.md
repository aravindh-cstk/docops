---
title: "[Set Up Stack] - Edit a Stack"
description: Edit a stack’s details in Contentstack to keep your workspace organized and aligned with your project’s needs.
url: https://www.contentstack.com/docs/headless-cms/edit-a-stack
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Stack] - Edit a Stack

This page explains how to edit a stack in Contentstack, including who can perform the action and the steps to update stack settings. It is intended for developers and workspace users managing stacks, and should be used when you need to update a stack’s name, description, or confirm recent changes.

## Edit a Stack

You can update a stack’s details to keep your workspace organized and aligned with your project’s needs.

**Note:** Only the Stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) can edit a stack.

To edit a stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](./about-stack.md) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- In the **General** section, modify the stack’s **Name** and **Description**.
- Click **Save** to confirm your changes.![Edit Stack Settings in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb772f4ff187f7e86/67befadc5e83f4b872cb41f9/Setup-a-Stack-Edit-Stack-Settings-General-Section.png)

These updates help ensure your stack remains up-to-date.

After updating the stack settings, you can view the **Last Modified** timestamp on the stack card in the “Stacks” view.![Stack card showing last modified timestamp](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt977de0d5fdb4d79b/684fca62260f5330fa615189/2._last_updated_info.png)

## API Reference

To edit a stack via API, refer to the [Update a Stack](../../../api-docs/api-detail/content-management-api.md#update-stack) API request.

## Common questions

**Who can edit a stack?**  
Only the Stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) can edit a stack.

**Where do I edit a stack’s name and description?**  
In the **General** section after opening stack **Settings**.

**How do I confirm my stack changes were applied?**  
Click **Save** to confirm your changes.

**Can I edit a stack using an API instead of the UI?**  
Yes. Refer to the [Update a Stack](../../../api-docs/api-detail/content-management-api.md#update-stack) API request.