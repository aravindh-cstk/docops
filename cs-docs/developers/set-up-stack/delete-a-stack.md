---
title: "[Set Up Stack] - Delete a Stack"
description: Delete a stack and understand the impact, permissions, and API option.
url: https://www.contentstack.com/docs/headless-cms/delete-a-stack
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Set Up Stack] - Delete a Stack

This page explains how to delete a Contentstack stack, what data is removed, who is allowed to perform the deletion, and where to find the API request for deleting a stack. Use this when you need to permanently remove a stack and its associated content and settings.

### Delete a Stack

Deleting a stack removes all associated [entries](../../content-managers/author-content/about-entries.md), [assets](../../content-managers/author-content/about-assets.md), and settings. This action cannot be undone. Back up any critical data to prevent unintended data loss.

**Note:** Only the Stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) can delete a stack.

To delete a stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](./about-stack.md) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- On the **Stack Settings** page, click **Delete Stack**.![Stack Settings page showing the Delete Stack option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt55d565d8569fab9e/67beff62304ea9d30d82c9f1/Setup-a-Stack-Delete-Stack-Delete-Icon.png)
- In the **Delete Stack** modal, enter DELETE to confirm.![Setup-a-Stack-Delete-a-Stack-Delete-confirmation-modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ef953263210350e/67c032f94f9066ab238f6541/Setup-a-Stack-Delete-a-Stack-Delete-confirmation-modal.png)

Once confirmed, the stack and all associated data are permanently removed.

**Note:** As an organization [owner](../organization/organization-roles.md#organization-owner), you can delete stacks directly from the **Org Admin** page.

**Warning:** If you accidentally delete a stack, the Contentstack Support team can restore the data. Refer to the [Restore Deleted Content](../../content-managers/author-content/restore-deleted-content.md) document for further information.

## API Reference

To delete a stack via API, refer to the [Delete a Stack](../../../api-docs/api-detail/content-management-api.md#delete-stack) API Request.

## Common questions

**Who can delete a stack?**  
Only the Stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) can delete a stack.

**Is deleting a stack reversible?**  
Deleting a stack cannot be undone, and the stack and all associated data are permanently removed once confirmed.

**What data is removed when a stack is deleted?**  
Deleting a stack removes all associated [entries](../../content-managers/author-content/about-entries.md), [assets](../../content-managers/author-content/about-assets.md), and settings.

**Can I delete a stack from an organization admin area?**  
As an organization [owner](../organization/organization-roles.md#organization-owner), you can delete stacks directly from the **Org Admin** page.