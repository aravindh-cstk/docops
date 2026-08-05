---
title: "[AM2.0] - Create a New Stack With Assets"
description: Create a new stack and link it to a space so assets from a workspace are available in the stack.
url: https://www.contentstack.com/docs/assets/create-a-new-stack
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create a New Stack With Assets

This page explains how to create a new Contentstack stack and link it to a space so that assets from a selected workspace are available in the stack. It is intended for organization owners and admins who need to set up a stack with assets access as part of initial project configuration.

## Create a New Stack With Assets

A stack is a centralized repository that stores and manages content types, entries, and linked assets for a project. It provides a structured environment for teams to create, manage, and publish content across channels.

**Note:**
- You must be an organization [owner](../developers/organization/organization-roles.md#organization-owner) or organization [admin](../developers/organization/organization-roles.md#organization-admin) to create a stack.
- An organization user can create only one stack per minute per organization.

To create a new stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **CMS** through “App Switcher”.
- Click **+ New Stack**.
- Select **Create New**.
- Enter the required information:**Name** (required)
- **Description** (optional)
- **Master Language** (required)

  **Note:** The master language cannot be changed after the stack is created.
- Assets are stored in spaces, not directly within stacks. Choose how to link the stack to a space.**Create and Link a New Space**:A new space is created with the same name as the stack.
- A default workspace (e.g., main) is created within the space.
- The stack owner becomes the space owner.
- The workspace is linked to the stack’s main branch.
- **Link an Existing Space**: Disable the toggle, then select an existing space and workspace.
- Click **Create**.

Once the stack is created:
- You are redirected to the newly created stack.
- The selected workspace is linked to the **main** branch.
- Assets from the linked workspace become immediately available in the stack.
- You can manage linked spaces from **Settings** > **Assets Hub**.

## Common questions

**Q: Who can create a stack?**  
A: You must be an organization owner or organization admin to create a stack.

**Q: Can I change the master language after creating the stack?**  
A: No. The master language cannot be changed after the stack is created.

**Q: Where are assets stored when using stacks with assets?**  
A: Assets are stored in spaces, not directly within stacks.

**Q: How many stacks can an organization user create?**  
A: An organization user can create only one stack per minute per organization.