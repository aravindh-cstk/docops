---
title: "[Set Up Your Project] - Restore a Deleted Content Type"
description: Restore a deleted content type from Trash and understand key considerations and filtering options.
url: https://www.contentstack.com/docs/headless-cms/restore-a-deleted-content-type
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Restore a Deleted Content Type

This page explains how to restore a deleted content type from the Trash in Contentstack, what limitations and side effects to expect after restoration, and how to filter deleted content types. It is intended for developers or administrators managing stacks who need to recover content types within the Trash retention window.

## Restore a Deleted Content Type

Trash maintains a backup of all deleted content types for up to 14 days from the date of deletion. You can restore the content types back to their original condition before they are permanently deleted. While restoring the deleted content type, you can also choose whether you want to restore the entries that were deleted with it.

**Note**: You cannot edit the schema of a deleted content type while restoring it from the Trash. You get a read-only view of the content type schema.

To restore a deleted content type from the Trash, log in to your Contentstack account, go to your stack, and perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel and select **Trash **(or press “**alt + T**” for Windows OS, and “option + **T**” for Mac OS)****.
- Click on the **Content Types** tab, and hover over the content type you want to restore (e.g. **Author Details**).![Restore_a_Deleted_Content_Type_1_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt38527d69efe7f0aa/60c0c6eef33fd90fa1ed143b/Restore_a_Deleted_Content_Type_1_no_highlight.png)
- Click on the **Restore** button that appears at the extreme right end.![Restore_a_Deleted_Content_Type_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt33ee45531d275c61/60c0c708fbd63412d413419c/Restore_a_Deleted_Content_Type_2_highlighted.png)
- The content type will then disappear from the Trash and will be available in the stack.
- While restoring a content type, you can choose to restore the content type with or without the entries that were deleted with it. Select **Restore With Entries** or **Restore Without Entries** depending on your choice.![Restore_a_Deleted_Content_Type_3_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt952b753e24d2f63e/60c0c6f8f33fd90fa1ed143f/Restore_a_Deleted_Content_Type_3_no_highlight.png)

## Key Points to Remember

Before restoring a deleted content type, it is important to understand the following points:
- The [entry-level](../invite-users-and-assign-roles/create-a-role.md#permissions-on-entries) or [field-level](../invite-users-and-assign-roles/create-a-role.md#exceptions-on-entries) permissions that were set on the restored content type before deletion will no longer be applicable to it
- The [workflow](../set-up-workflows-and-publish-rules/about-workflows.md) that was assigned to the restored content type before deletion will no longer be applicable to it
- The [labels](../create-content-types/about-labels.md) that were applied to the restored content type before deletion will no longer exist
- The [releases](../../content-managers/create-and-manage-releases/about-releases.md) that were yet to be deployed will no longer contain the entries and assets of the restored content type

## Filter Deleted Content Types

By default, the Trash displays previously deleted content types in reverse chronological order under the **Content Types** tab. You can apply filters to refine the results and display only the required content types.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:
- **DATE**: You can filter out the deleted content types according to days. The date filter allows you to quickly view the deleted content types of only the last 14 days, last 7 days, the previous day, or the current day. The “Custom Range” option allows you to set a data range within the last 14 days.
- **DELETED BY**: You can filter out the deleted content types according to the users that sent them to the trash.

Check the filter options that you want to apply. Click on **Reset Filter** to clear all the applied filters.

**Note**: By default, you can view information of content types that were deleted up to 14 days prior to the current day.

## Common questions

### How long does Trash keep backups of deleted content types?
Trash maintains a backup of all deleted content types for up to 14 days from the date of deletion.

### Can I edit the schema while restoring a deleted content type?
No. You cannot edit the schema of a deleted content type while restoring it from the Trash, and you get a read-only view of the content type schema.

### Can I restore a deleted content type without restoring its entries?
Yes. While restoring a content type, you can choose to restore the content type with or without the entries that were deleted with it by selecting **Restore With Entries** or **Restore Without Entries**.

### What filters are available for deleted content types in Trash?
The available filters include **DATE** and **DELETED BY**, and you can click **Reset Filter** to clear all the applied filters.