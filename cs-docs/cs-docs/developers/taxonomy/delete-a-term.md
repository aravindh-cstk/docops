---
title: "[Taxonomy] - Delete a Term"
description: Documentation for deleting terms from a taxonomy in Contentstack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-a-term
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Delete a Term

This page explains how to delete terms from a taxonomy within a Contentstack stack. It is intended for stack stakeholders (such as Owners, Admins, and Developers) who manage taxonomy terms, and should be used when you need to remove one or more terms via the UI or confirm the related API reference.

## Delete a Term

Within your stack, you can delete terms from a taxonomy.

**Note**: Unless you are the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), or [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) of the stack, you cannot delete terms created by other stakeholders.

To delete a term, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) where you want to delete term(s) from a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Select the taxonomy from which you want to delete terms.
- Click the vertical ellipsis next to the term and select **Delete Term**.
- Click **Delete Term**. In the modal, type "DELETE" and confirm your action.**Warning**: Following these steps will detach the term(s) association from the entries. As a result, the entry version will increase because the terms were removed from the entry.

**Additional Resource**: To recover a deleted term, consult our documentation on [restoring deleted terms](/docs/developers/manage-trash/restore-a-deleted-term).

## API Reference

To delete a term via API, refer to the [Delete a Term](/docs/developers/apis/content-management-api#delete-a-term) API request.

**Note**: While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.

## Common questions

### Who can delete taxonomy terms?
Unless you are the Owner, Admin, or Developer of the stack, you cannot delete terms created by other stakeholders.

### What happens to entries associated with a deleted term?
Following the deletion steps will detach the term(s) association from the entries, and the entry version will increase because the terms were removed from the entry.

### Can I recover a deleted term?
Yes. To recover a deleted term, consult the documentation on restoring deleted terms: /docs/developers/manage-trash/restore-a-deleted-term.

### Can I delete a term using the API?
Yes. To delete a term via API, refer to the Delete a Term API request: /docs/developers/apis/content-management-api#delete-a-term.