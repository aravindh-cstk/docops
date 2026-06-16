---
title: "[Set Up Stack] - Delete a Stack"
description: Delete a stack and understand the impact, permissions, and API option.
url: https://www.contentstack.com/docs/developers/set-up-stack/delete-a-stack
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

Deleting a stack removes all associated [entries](/docs/content-managers/author-content/about-entries), [assets](/docs/content-managers/author-content/about-assets), and settings. This action cannot be undone. Back up any critical data to prevent unintended data loss.

**Note:** Only the Stack [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) can delete a stack.

To delete a stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- On the **Stack Settings** page, click **Delete Stack**.
- In the **Delete Stack** modal, enter DELETE to confirm.

Once confirmed, the stack and all associated data are permanently removed.

**Note:** As an organization [owner](/docs/developers/organization/organization-roles#organization-owner), you can delete stacks directly from the **Org Admin** page.

**Warning:** If you accidentally delete a stack, the Contentstack Support team can restore the data. Refer to the [Restore Deleted Content](/docs/content-managers/author-content/restore-deleted-content) document for further information.

## API Reference

To delete a stack via API, refer to the [Delete a Stack](https://www.contentstack.com/docs/developers/apis/content-management-api#delete-stack) API Request.

## Common questions

**Who can delete a stack?**  
Only the Stack [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) can delete a stack.

**Is deleting a stack reversible?**  
Deleting a stack cannot be undone, and the stack and all associated data are permanently removed once confirmed.

**What data is removed when a stack is deleted?**  
Deleting a stack removes all associated [entries](/docs/content-managers/author-content/about-entries), [assets](/docs/content-managers/author-content/about-assets), and settings.

**Can I delete a stack from an organization admin area?**  
As an organization [owner](/docs/developers/organization/organization-roles#organization-owner), you can delete stacks directly from the **Org Admin** page.