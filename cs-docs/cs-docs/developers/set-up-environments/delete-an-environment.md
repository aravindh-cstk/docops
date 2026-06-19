---
title: "[Set up Environments] - Delete an Environment"
description: Delete an Environment
url: https://www.contentstack.com/docs/headless-cms/delete-an-environment
product: Contentstack
doc_type: how-to
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Set up Environments] - Delete an Environment

This page explains how to delete an environment in Contentstack (via the UI or API). It is intended for stack Admins and Developers who need to remove outdated or unnecessary environments and understand the impact of deletion.

## Delete an Environment

Deleting an environment allows you to remove unnecessary or outdated environments, streamline workflows, and simplify content deployment.

**Note:** Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can delete an environment.

To delete an [environment](/docs/developers/set-up-environments/about-environments), log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
- Click the vertical ellipsis icon next to an environment in the **Actions** menu and select **Delete**.
- Click **Delete** to confirm your action.

**Warning:** Once you delete an Environment, it is permanently removed from your stack, and its associated [delivery tokens](/docs/developers/create-tokens/about-delivery-tokens) become invalid.

## API Reference

To delete an environment via API, refer to the [Delete an Environment](/docs/developers/apis/content-management-api#delete-environment) request.

## Common questions

### Who can delete an environment?
Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can delete an environment.

### What happens to delivery tokens after deleting an environment?
Once you delete an Environment, it is permanently removed from your stack, and its associated [delivery tokens](/docs/developers/create-tokens/about-delivery-tokens) become invalid.

### Can I delete an environment using the API?
Yes. To delete an environment via API, refer to the [Delete an Environment](/docs/developers/apis/content-management-api#delete-environment) request.