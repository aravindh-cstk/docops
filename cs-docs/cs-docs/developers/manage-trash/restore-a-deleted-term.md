---
title: "[Taxonomy] - Restore a Deleted Term"
description: Restore a deleted taxonomy term from Trash and filter deleted terms in Contentstack.
url: https://www.contentstack.com/docs/developers/manage-trash/restore-a-deleted-term
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Restore a Deleted Term

This page explains how to restore deleted taxonomy terms from the Trash in Contentstack (within the retention window) and how to filter deleted terms to find what you need. It is intended for users managing taxonomies and terms in a stack, especially when recovering recently deleted items.

## Restore a Deleted Term

Deleted terms are maintained in the Trash for up to **14 days** from the date of deletion. Within this timeframe, you can choose to restore them to their original state before they are permanently removed.

**Warning**: It is only possible to restore terms associated with existing taxonomies. For terms linked to deleted taxonomies, the taxonomy must be restored first

To restore a deleted term from the Trash, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) where you want to restore a deleted term, navigate to the “Settings” icon (press “S”), and select **Trash** (or press “alt + T” for Windows OS, and “option + T” for Mac OS).
- Click on the **Taxonomies** tab, locate the term you want to restore, and click the vertical ellipsis in the **Actions** column.
- You can also inspect the term by clicking **View Details**.
- Click **Restore**, and in the modal that appears, choose between **Restore with Entry Association** or **Restore without Entry Association** based on your requirements.**Note**: Restoring with Entry Association will reconnect the term to the entries where they were previously referenced. This action will increase the entry version since the terms are added back to the entry.

## Filter Deleted Terms

By default, the Trash displays previously deleted terms in reverse chronological order under the **Taxonomies** tab i.e., recently deleted Terms will appear at the top. You can apply filters to refine the results and display only the required terms.

The **Filters** section, located on the right, displays the list of available filters which includes the following:
- **Deleted By**: Enables filtering of deleted terms based on the users who moved them to the trash
- **Type**: Allows filtering of deleted terms by their type, either by taxonomy or terms

Check the filter options that you want to apply. Click on **Reset Filters** to clear all the applied filters.

**Note**: While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.

## Common questions

### How long do deleted terms stay in Trash?
Deleted terms are maintained in the Trash for up to **14 days** from the date of deletion.

### Why can’t I restore a term?
It is only possible to restore terms associated with existing taxonomies. If the taxonomy was deleted, the taxonomy must be restored first.

### What is the difference between restoring with and without entry association?
**Restore with Entry Association** reconnects the term to the entries where they were previously referenced and will increase the entry version since the terms are added back to the entry. **Restore without Entry Association** restores the term without reconnecting it to entries.

### How do I find a specific deleted term in Trash?
Use the **Filters** section on the right, such as **Deleted By** and **Type**, and click **Reset Filters** to clear applied filters.