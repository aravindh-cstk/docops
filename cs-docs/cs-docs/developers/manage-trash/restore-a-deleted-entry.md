---
title: "[Set Up Your Project] - Restore a Deleted Entry"
description: Restore a Deleted Entry and filter deleted entries in Trash.
url: https://www.contentstack.com/docs/headless-cms/restore-a-deleted-entry
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Restore a Deleted Entry

This page explains how to restore deleted entries from the Trash in Contentstack (including optional edits before restoring) and how to filter deleted entries to find what you need. It is intended for users managing content in a stack who need to recover entries within the retention window.

## Restore a Deleted Entry

Trash maintains a backup of all deleted entries for up to 14 days from the date of deletion. You can restore deleted entries before they are permanently deleted. Once restored, you will find the entries just as they were before you deleted them.

The Trash feature also provides the ability to modify entries before restoring them. This means that you can edit the content of any field in the entry and then restore the updated version of the entry.

**Warning**: You can directly recover entries of which the corresponding content types already exist in the stack. To recover entries that belong to deleted content types, you need to restore the content type first to be able to restore these entries.

To restore a deleted entry from the Trash, log in to your [Contentstack account,](https://app.contentstack.com/#!/login) go to your stack, perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel and select **Trash** (or press “**alt + T**” for Windows OS, and “option + **T**” for Mac OS).
- Click on the **Entries** tab, and hover over the entry you want to restore (e.g., **Author Bio**).
- Click on the **Restore** button that appears at the extreme right end.

    **Note**: To be able to restore an entry that belongs to a deleted content type, you need to first restore the content type.
- The entry will then disappear from the Trash and will be available in the stack.
- You can also edit the entry before you restore it back to the stack. Open the entry, edit field data, and click on **Restore**.

    **Note**: Every time a deleted entry is restored, its version number is incremented by default. At the same time, the **MODIFIED BY** column on the entry list page would also reflect the name of the user who restored the entry.

## Filter Deleted Entries

By default, the Trash displays previously deleted entries in reverse chronological order under the **Entries** tab. You can apply filters to refine the results and display only the required entries.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:
- **DATE**: You can filter out the deleted entries according to days. The date filter allows you to quickly view the deleted entries of only the last 14 days, last 7 days, the previous day, or the current day. The “Custom Range” option allows you to set a data range within the last 14 days.
- **DELETED BY**: You can filter out the deleted entries according to the users that sent them to the trash.
- **LANGUAGES**: You can filter out the deleted entries according to the language in which they are localized.
- **CONTENT TYPES**: You can filter out the deleted entries according to the content type that they belong to.

Check the filter options that you want to apply. Click on **Reset Filter** to clear all the applied filters.

**Note**: By default, you can view information of deleted entries only up to 14 days prior to the current day.

## Common questions

**Q: How long does Trash keep deleted entries?**  
A: Trash maintains a backup of all deleted entries for up to 14 days from the date of deletion.

**Q: Can I edit an entry before restoring it?**  
A: Yes, you can edit the entry before you restore it back to the stack. Open the entry, edit field data, and click on **Restore**.

**Q: Why can’t I restore an entry that belonged to a deleted content type?**  
A: To be able to restore an entry that belongs to a deleted content type, you need to first restore the content type.

**Q: What happens to the entry version when I restore it?**  
A: Every time a deleted entry is restored, its version number is incremented by default, and the **MODIFIED BY** column reflects the name of the user who restored the entry.