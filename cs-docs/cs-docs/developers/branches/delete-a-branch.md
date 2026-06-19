---
title: "[Set Up Your Project] - Delete a Branch"
description: Documentation for deleting a branch in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/delete-a-branch
product: Contentstack
doc_type: how-to
audience:
  - developers
  - owners
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Delete a Branch

This page explains how to delete a branch in Contentstack, including prerequisites and important limitations. It is intended for stack Owners/Admins and developers managing branches, and should be used when you need to permanently remove a branch and its content.

## Delete a Branch

Contentstack allows you to delete a [branch](/docs/developers/branches/about-branches)that you created in your [stack](/docs/developers/set-up-stack/about-stack).

**Note:** Unless you are the Owner or Admin of the stack, you cannot delete branches created by other stakeholders.

**Warning:** These steps permanently delete the branch along with all the content within it. The branch and its content are **not moved to Trash** and cannot be recovered.

To delete a branch, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your stack, and perform the following steps:
- Click the “Settings” icon on the left navigation panel, and select **Branches, **to view the list of available branches.
- Hover over the branch you want to delete, click the “Delete” icon (trash can) that appears at the extreme right end.
- Type in your branch ID and confirm the **Delete** action.

**Note:**
- At a time only **one** branch can be deleted across an organization.
- You can only delete child branches but not the parent (source) branches.
- The deletion actions triggered for any other branches will remain in the “in-queue” state until the ongoing branch deletion action is completed. You can view the status of these actions within the [organization's bulk task queue](/docs/owners-and-admins/organization-bulk-task-queue).

## Common questions

### Who can delete a branch?
Unless you are the Owner or Admin of the stack, you cannot delete branches created by other stakeholders.

### Can I recover a deleted branch from Trash?
No. The branch and its content are **not moved to Trash** and cannot be recovered.

### Can I delete multiple branches at the same time?
No. At a time only **one** branch can be deleted across an organization.

### Can I delete a parent (source) branch?
No. You can only delete child branches but not the parent (source) branches.