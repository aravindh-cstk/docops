---
title: "[Author Content] - Restore Deleted Content"
description: How to request restoration of deleted stacks, content types, entries, and assets in Contentstack, including required details and timelines.
url: https://www.contentstack.com/docs/content-managers/author-content/restore-deleted-content
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Author Content] - Restore Deleted Content

This page explains how to restore deleted content in Contentstack and what information you must provide to Customer Support. It is intended for Stack/Organization Owners and Admins who need to recover deleted stacks, content types, entries, or assets, typically within the Trash retention window.

## Restore Deleted Content

**Note:** By default, the [Trash](/docs/developers/manage-trash/about-trash) feature stores deleted content such as Content Types, Entries, and Assets for **14 days** before it is permanently deleted. If this period has passed, contact the [Customer Support](mailto:support@contentstack.com) team with the necessary details for restoration.

If you have accidentally deleted stacks, entries, assets, or content types, the Contentstack [Customer Support](mailto:support@contentstack.com) team can assist with restoring the data. To process your request, you will need to provide specific details about the deleted modules.

**Note:** Only a **Stack **[**Owner**](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)**/**[**Admin**](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) or **Organization **[**Owner**](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)**/**[**Admin**](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) can submit or approve requests to restore content.

## Stacks

To restore a deleted stack, provide the following details:
- **Stack API Key or Stack Owner/Admin Email Address:** The API key of the stack or the email address of its owner/admin.
- **Stack Name:** The name of the deleted stack.
- **Branch Name:** The name of the branch of the deleted stack.

**Note:** Restoring a stack may take approximately **10 business days**, depending on its size and resource availability.

## Content Types

To restore deleted content types, provide the following details:
- **Stack API Key:** The API key of the stack containing the deleted content type.
- **Deletion Time:** The date and time the content type was deleted (available in the stack’s [audit log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log)).
- **Branch Name:** The name of the branch containing the deleted content type(s).

**Note:** When restoring a content type, you can choose to restore it either with or without the entries that were deleted along with it.

## Entries

To recover deleted entries, provide the following details:
- **Stack API Key:** The API key of the stack containing the deleted entries.
- **Content Type UID:** The UID of the content type associated with the deleted entries (available in the stack’s [audit log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log)).
- **Deletion Time:** The date and time the entries were deleted (available in the stack’s [audit log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log)).
- **Branch Name:** The name of the branch containing the deleted entries.

**Warning:** The deletion time is necessary to restore entries associated with the content type. The published status of the deleted entries cannot be retrieved when restoring them.

## Assets

To restore deleted assets, provide the following details:
- **Stack API Key:** The API key of the stack containing the deleted asset(s).
- **Deletion Time:** The date and time the assets were deleted (available in the stack’s [audit log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log)).
- **Branch Name:** The name of the branch containing the deleted asset(s).

**Warning:** The published status of the deleted assets cannot be retrieved when restoring them.

**Note:** Once the request is received, the specified content will be restored within **2 business days**. The restored content will appear as the latest version and will not retain its published status.

## Common questions

### Who can request a restore of deleted content?
Only a Stack Owner/Admin or Organization Owner/Admin can submit or approve requests to restore content.

### How long does Trash keep deleted content by default?
By default, Trash stores deleted content such as Content Types, Entries, and Assets for 14 days before it is permanently deleted.

### What information is typically required to restore deleted items?
You generally need the Stack API Key (or Stack Owner/Admin email for stacks), the deletion time (from the audit log), and the branch name, plus item-specific identifiers such as stack name or content type UID.

### Will restored entries or assets keep their published status?
No. The published status of deleted entries and assets cannot be retrieved when restoring them, and restored content will not retain its published status.