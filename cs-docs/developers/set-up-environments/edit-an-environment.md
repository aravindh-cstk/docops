---
title: "[Set up Environments] - Edit an Environment"
description: Editing an environment allows you to update its details, adapt to workflow changes, and ensure smooth content deployment.
url: https://www.contentstack.com/docs/headless-cms/edit-an-environment
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set up Environments] - Edit an Environment

This page explains how to edit an environment in Contentstack, including required roles and the steps in the UI (and a related API reference). It is intended for stack Admins and Developers who need to update environment details as workflows change.

## Edit an Environment

Editing an [environment](./about-environments.md) allows you to update its details, adapt to workflow changes, and ensure smooth content deployment.

**Note:** Only the stack [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can edit an environment.

To edit an Environment, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
- Click the vertical ellipsis icon next to an environment in the **Actions** menu and select **Edit**.
- Update the details in the **Edit Environment** modal and click **Save**.![Edit Environment modal with fields to update environment details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt229bd80a997e55f2/67dd59ada71458fdd9b9b33e/1-Edit-an-Environment-gif.gif)

**Note:** You can use [Webhooks](../set-up-webhooks/about-webhooks.md) to trigger deployments to multiple servers when you publish content.

## API Reference

To edit an environment via API, refer to the [Update an API](../../../api-docs/api-detail/content-management-api.md#update-environment) request.

## Common questions

**Who can edit an environment?**  
Only the stack [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can edit an environment.

**Where do I find the Environments settings in the UI?**  
Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon in the left navigation panel, then navigate to **Environments**.

**What keyboard shortcuts are available for editing environments?**  
Use “S” to open Settings, then “alt + E” for Windows or “option + E” for Mac OS to navigate to **Environments**.

**How can I edit an environment using the API?**  
Refer to the [Update an API](../../../api-docs/api-detail/content-management-api.md#update-environment) request.