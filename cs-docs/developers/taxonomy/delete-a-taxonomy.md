---
title: "[Taxonomy] - Delete a Taxonomy"
description: Documentation for deleting a taxonomy in Contentstack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-a-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Delete a Taxonomy

This page explains how to delete a taxonomy in a Contentstack stack, including required permissions, the step-by-step UI workflow, and where to find the API request for deleting taxonomies. It is intended for stack Owners/Admins and developers managing taxonomy configuration and maintenance.

## Delete a Taxonomy

Contentstack allows you to delete a taxonomy that you create in your stack.

**Note**: Unless you are the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) of the stack, you cannot delete taxonomies created by other stakeholders.

To delete a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to delete a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Navigate to the taxonomy you want to delete and click the vertical ellipsis in the **Actions **column.
- Click the **Delete **button. **Warning**: Deleting a taxonomy removes its connections to any linked content types. This also increments the entry version because the terms associated with the deleted taxonomy were removed from the entry.
- In the **Delete Taxonomy** modal, you need to type “DELETE”, and confirm the **Delete** action.**Note**:If your content type includes a taxonomy field with multiple taxonomies configured, deleting one of them will not remove the entire field. Instead, only the term associations of the deleted taxonomy will be removed from the respective entries.
- However, if the taxonomy field only has one taxonomy configured and it is deleted, then the entire field will be removed from the content type.
- Alternatively, select a taxonomy and click the trash icon at the top-right corner to delete it.

**Additional Resource**: To recover a deleted term, consult our documentation on [restoring deleted taxonomies](../manage-trash/restore-a-deleted-taxonomy.md).

## API Reference

To delete taxonomies via the API, refer to the [Delete a Taxonomy](../../../api-docs/api-detail/content-management-api.md#delete-a-taxonomy) API request.

**Note**: While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.

## Common questions

**Q: Who can delete a taxonomy in a stack?**  
A: Unless you are the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) of the stack, you cannot delete taxonomies created by other stakeholders.

**Q: What happens to linked content types and entries when a taxonomy is deleted?**  
A: Deleting a taxonomy removes its connections to any linked content types and increments the entry version because the terms associated with the deleted taxonomy were removed from the entry.

**Q: What happens if a taxonomy field has multiple taxonomies configured and one is deleted?**  
A: Deleting one of them will not remove the entire field; only the term associations of the deleted taxonomy will be removed from the respective entries.

**Q: Where can I find the API request to delete a taxonomy?**  
A: Refer to the [Delete a Taxonomy](../../../api-docs/api-detail/content-management-api.md#delete-a-taxonomy) API request in the API Reference section.