---
title: "[Set Up Stack] - Create a New Stack"
description: Create a new Stack in Contentstack and understand prerequisites, steps, and API reference.
url: https://www.contentstack.com/docs/developers/set-up-stack/create-a-new-stack
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Set Up Stack] - Create a New Stack

This page explains what a Stack is in Contentstack and how Organization Owners or Admins can create a new stack from the UI (with an API reference for creating a stack programmatically). Use this when setting up a new project workspace where teams will manage entries and assets.

## Create a New Stack

A Stack is a centralized repository that stores and manages all [entries](../../content-managers/author-content/about-entries.md) and [assets](../../content-managers/author-content/about-assets.md) for a project. It provides a structured workspace where teams can collaborate to create, manage, and publish content efficiently.

**Note:** Only the Organization [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) can create stacks and invite users to collaborate.

To create a stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to the organization where you want to create a stack.
- Click the **+ New Stack** button in the top right corner, and select **Create New**.
- In the **Create New Stack** modal, enter the following details:**Name** (required): Name of your stack.
- **Description** (optional): Provide a relevant description for the stack.
- **Set Master Language** (required): Select the primary language for your stack.
- **Stack Color** (optional): Choose a predefined color to visually identify your stack across the interface. If you do not select a color, a default color is applied.
- Click **Create**.

After creating the stack, you will be automatically redirected to it. You can now [create content types](../create-content-types/create-a-content-type.md) and [upload assets](../../content-managers/author-content/create-upload-assets.md).

**Note:** An organization user can create only **one stack per minute**. For more information, visit our [Service Description](https://www.contentstack.com/legal/fair-use-policy/) document.

## API Reference

To create a stack via API, refer to the [Create a Stack API](../../../api-docs/api-detail/content-management-api.md#create-stack) request.

## Common questions

**Q: Who can create stacks?**  
A: Only the Organization [Owner](../organization/organization-roles.md#organization-owner) or [Admin](../organization/organization-roles.md#organization-admin) can create stacks and invite users to collaborate.

**Q: What happens after I create a stack?**  
A: After creating the stack, you will be automatically redirected to it. You can now [create content types](../create-content-types/create-a-content-type.md) and [upload assets](../../content-managers/author-content/create-upload-assets.md).

**Q: Is there a limit on how often stacks can be created?**  
A: An organization user can create only **one stack per minute**. For more information, visit our [Service Description](https://www.contentstack.com/legal/fair-use-policy/) document.

**Q: Can I create a stack using an API instead of the UI?**  
A: To create a stack via API, refer to the [Create a Stack API](../../../api-docs/api-detail/content-management-api.md#create-stack) request.