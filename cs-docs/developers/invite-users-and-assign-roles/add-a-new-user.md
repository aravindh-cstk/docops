---
title: "[Set Up Your Project] - Add a New User"
description: Instructions to invite a new user to a stack and assign roles, including an API reference link.
url: https://www.contentstack.com/docs/headless-cms/add-a-new-user
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Add a New User

This page explains how to invite a new user to collaborate on a Contentstack stack, what roles can invite users by default, and where to find the related API request. It is intended for stack owners/admins/developers who manage collaborators and permissions, and should be used when onboarding new users to a stack.

## Add a New User

A [user](./about-stack-users.md) with the required permissions can invite other users to collaborate on a [stack](../set-up-stack/about-stack.md).

**Note**: By default, the [Owner](./types-of-roles.md#owner), [Admin](./types-of-roles.md#admin), and [Developer](./types-of-roles.md#developer) roles have the right to invite other users to a stack. A user added to a stack can access and perform actions across branches present in the stack as per the roles assigned to them. Refer to our [Global Modules](../branches/global-modules.md) document for more information.

To add a new user in the stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to the stack where you want to add a user
- Click the “Settings” icon on the left navigation panel, and select **Users & Roles**. This will open the **Users & Roles** page where you can see the list of all the existing users (collaborators) of the stack along with their details.
- Click on the **Invite User** button located at the top right corner of the page.
- The **Invite User** forms opens up where you can add the following details:**Email**: Enter the email address(es) of the user(s) you want to invite and share the stack with
- **Roles**: Select the [role(s)](./about-stack-roles.md) that you want to assign to the new user
- **Message** (optional): Enter a short message that goes along with the invitation to the user![Add_a_New_User_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaa1701f258fa3b72/60bf7ea3f8aee612d39966be/Add_a_New_User_no_highlight.png)
- Click on **Invite**.

The invited user will receive an invitation email. Once the user accepts the invitation, he/she can collaborate with you on the specified stack.

## API Reference

To add/invite a new user in your stack via API request, refer to the [Share a stack](../../../api-docs/api-detail/content-management-api.md#share-a-stack) API request.

## Common questions

### Which roles can invite other users to a stack by default?
By default, the [Owner](./types-of-roles.md#owner), [Admin](./types-of-roles.md#admin), and [Developer](./types-of-roles.md#developer) roles have the right to invite other users to a stack.

### Where do I invite a user from in the UI?
Go to the stack, click “Settings”, select **Users & Roles**, and then click **Invite User**.

### What information can I include in an invitation?
You can add **Email**, select **Roles**, and optionally include a **Message**.

### Is there an API to invite a user to a stack?
Yes. Refer to the [Share a stack](../../../api-docs/api-detail/content-management-api.md#share-a-stack) API request.