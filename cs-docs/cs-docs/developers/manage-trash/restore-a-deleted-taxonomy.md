---
title: "[Taxonomy] - Restore a Deleted Taxonomy"
description: Restore a deleted taxonomy from the Trash and optionally restore its content type association; includes filtering deleted taxonomies.
url: https://www.contentstack.com/docs/developers/manage-trash/restore-a-deleted-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Restore a Deleted Taxonomy

This page explains how to restore deleted taxonomies from the Trash in Contentstack (including the option to restore content type associations) and how to filter deleted taxonomies to find the items you need. Use it if you manage taxonomies and need to recover recently deleted ones within the retention window.

## Restore a Deleted Taxonomy

Deleted taxonomies are retained in the Trash for up to **14 days** after deletion. Within this timeframe, you can choose to restore them to their original state before they are permanently removed.

When restoring a deleted taxonomy, you can also opt to restore it along with its associated content type.

**Note**: While viewing details of a deleted taxonomy from the Trash, you can't modify its schema; it's in a read-only mode.

To restore a deleted taxonomy from the Trash, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) where you want to restore a deleted taxonomy, navigate to the “Settings” icon (or press “S”), and select **Trash** (or press “alt + T” for Windows OS, and “option + T” for Mac OS).
- Click on the **Taxonomies** tab, locate the taxonomy you want to restore, and click on the vertical ellipsis in the **Actions **column.
- You can also view a taxonomy’s details by clicking **View Details**.
- Click **Restore**. In the modal that appears, choose between **Restore with Content Type Association** or **Restore without Content Type Association** based on your requirements.**Note**: Restoring with Content Type Association will reintegrate the taxonomy with the content types it was linked to before deletion, reconnecting its terms to the entries where they were previously referenced. This action will increase the entry version since the terms are added back to the entry.

## Filter Deleted Taxonomies

By default, the Trash displays previously deleted taxonomies in reverse chronological order under the **Taxonomies** tab i.e., recently deleted Taxonomies will appear at the top. You can apply filters to refine the results and display only the required taxonomies.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:
- **Deleted By**: Enables filtering of deleted taxonomies based on the users who moved them to the trash.
- **Type**: Allows filtering of deleted taxonomies by their type, either by taxonomy or terms.

Check the filter options that you want to apply. Click **Reset Filters** to clear all the applied filters.

**Note**: While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.

## Common questions

**How long do deleted taxonomies remain in the Trash?**  
Deleted taxonomies are retained in the Trash for up to **14 days** after deletion.

**Can I edit a deleted taxonomy’s schema while it’s in the Trash?**  
No. While viewing details of a deleted taxonomy from the Trash, you can't modify its schema; it's in a read-only mode.

**What does “Restore with Content Type Association” do?**  
It will reintegrate the taxonomy with the content types it was linked to before deletion, reconnecting its terms to the entries where they were previously referenced, and it will increase the entry version since the terms are added back to the entry.

**What filters are available for deleted taxonomies in the Trash?**  
The available filters include **Deleted By** and **Type**.