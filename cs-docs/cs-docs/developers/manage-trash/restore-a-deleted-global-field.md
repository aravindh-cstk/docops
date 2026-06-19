---
title: "[Set Up Your Project] - Restore a Deleted Global Field"
description: Restore a deleted Global field from the Trash and filter deleted Global fields.
url: https://www.contentstack.com/docs/headless-cms/restore-a-deleted-global-field
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Restore a Deleted Global Field

This page explains how to restore a deleted Global field from the Trash in Contentstack, including important warnings about what is recovered and how to filter deleted Global fields. It is intended for users managing stack schema and recovering deleted Global fields within the 14-day retention window.

### Restore a Deleted Global Field

Deleted Global fields remain in the Trash for up to 14 days. You can restore any deleted Global field back to the stack before it is permanently deleted.

The Trash feature also allows you to edit the schema of a deleted Global field before you restore it. For instance, you can drag or drop new fields or remove certain fields from the Global field’s schema and then restore the modified version.

**Warning**: When you restore a deleted Global field, you only recover the schema of the Global field within any content type that refers to it. However, you will have to re-enter field values for the Global field within each referred entry.

To restore a deleted Global field from the Trash, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your stack, and perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel and select **Trash **(or press “**alt + T**” for Windows OS, and “option + **T**” for Mac OS).
- Click on the **Global Fields** tab, and hover over the Global field you want to restore (e.g., **SEO Content**).
- Click on the **Restore** button that appears at the extreme right end.
- The Global field will then disappear from the Trash and will be available in the stack.
- You can also add new fields into the Global field schema or remove a field before you restore it back to the stack. Open the Global field schema, add or remove fields, and click on **Restore**.

## Filter Deleted Global Fields

By default, the Trash displays previously deleted global fields in reverse chronological order under the **Global Fields** tab. You can apply filters to refine the results and display only the required global fields.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:
- **DATE**: You can filter out the deleted global fields according to days. The date filter allows you to quickly view the deleted global fields of only the last 14 days, last 7 days, the previous day, or the current day. The “Custom Range” option allows you to set a data range within the last 14 days.
- **DELETED BY**: You can filter out the deleted global fields according to the users that sent them to the trash.

Check the filter options that you want to apply. Click on **Reset Filter** to clear all the applied filters.

**Note**: By default, you can view information of global fields that were deleted up to 14 days prior to the current day.

## Common questions

**Q: How long do deleted Global fields remain in the Trash?**  
A: Deleted Global fields remain in the Trash for up to 14 days.

**Q: What is restored when I restore a deleted Global field?**  
A: You only recover the schema of the Global field within any content type that refers to it.

**Q: Can I modify a deleted Global field before restoring it?**  
A: Yes, you can edit the schema (add, remove, drag, or drop fields) before you restore it.

**Q: What filters are available for deleted Global fields in the Trash?**  
A: The available filters include **DATE** and **DELETED BY**.