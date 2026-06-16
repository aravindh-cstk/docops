---
title: "[Set up Environments] - Edit an Environment"
description: Editing an environment allows you to update its details, adapt to workflow changes, and ensure smooth content deployment.
url: https://www.contentstack.com/docs/developers/set-up-environments/edit-an-environment
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

Editing an [environment](/docs/developers/set-up-environments/about-environments) allows you to update its details, adapt to workflow changes, and ensure smooth content deployment.

**Note:** Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can edit an environment.

To edit an Environment, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
- Click the vertical ellipsis icon next to an environment in the **Actions** menu and select **Edit**.
- Update the details in the **Edit Environment** modal and click **Save**.

**Note:** You can use [Webhooks](/docs/developers/set-up-webhooks/about-webhooks) to trigger deployments to multiple servers when you publish content.

## API Reference

To edit an environment via API, refer to the [Update an API](/docs/developers/apis/content-management-api#update-environment) request.

## Common questions

**Who can edit an environment?**  
Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can edit an environment.

**Where do I find the Environments settings in the UI?**  
Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel, then navigate to **Environments**.

**What keyboard shortcuts are available for editing environments?**  
Use “S” to open Settings, then “alt + E” for Windows or “option + E” for Mac OS to navigate to **Environments**.

**How can I edit an environment using the API?**  
Refer to the [Update an API](/docs/developers/apis/content-management-api#update-environment) request.