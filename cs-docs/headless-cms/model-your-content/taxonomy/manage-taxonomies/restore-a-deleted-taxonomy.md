---
title: "Restore a Deleted Taxonomy"
description: "Easily recover taxonomies within 14 days from deletion. Restore with associated content types. Apply filters for efficient search."
url: /headless-cms/restore-a-deleted-taxonomy
---

# Restore a Deleted Taxonomy

## Restore a Deleted Taxonomy

Deleted taxonomies are retained in the Trash for up to **14 days** after deletion. Within this timeframe, you can choose to restore them to their original state before they are permanently removed.

When restoring a deleted taxonomy, you can also opt to restore it along with its associated content type.

**Note:** While viewing details of a deleted taxonomy from the Trash, you can't modify its schema; it's in a read-only mode.

To restore a deleted taxonomy from the Trash, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) where you want to restore a deleted taxonomy, navigate to the “Settings” icon (or press “S”), and select **Trash** (or press “alt + T” for Windows OS, and “option + T” for Mac OS).
2.  Click on the **Taxonomies** tab, locate the taxonomy you want to restore, and click on the vertical ellipsis in the **Actions** column.
3.  You can also view a taxonomy’s details by clicking **View Details**.
4.  Click **Restore**. In the modal that appears, choose between **Restore with Content Type Association** or **Restore without Content Type Association** based on your requirements.![Restore Deleted Taxonomy.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc83dc68c6e1c6b7f/6929c96564580958292a1678/Restore_Deleted_Taxonomy.gif)
    
    **Note:** Restoring with Content Type Association will reintegrate the taxonomy with the content types it was linked to before deletion, reconnecting its terms to the entries where they were previously referenced. This action will increase the entry version since the terms are added back to the entry.
    

## Filter Deleted Taxonomies

By default, the Trash displays previously deleted taxonomies in reverse chronological order under the **Taxonomies** tab i.e., recently deleted Taxonomies will appear at the top. You can apply filters to refine the results and display only the required taxonomies.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:

-   **Deleted By**: Enables filtering of deleted taxonomies based on the users who moved them to the trash.
-   **Type**: Allows filtering of deleted taxonomies by their type, either by taxonomy or terms.

Check the filter options that you want to apply. Click **Reset Filters** to clear all the applied filters.

**Note:** While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.
