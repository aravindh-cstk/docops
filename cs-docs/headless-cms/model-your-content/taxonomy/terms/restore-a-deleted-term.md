---
title: "Restore a Deleted Term"
description: "Easily recover deleted terms within 14 days. Restore with or without entry association. Filter and manage deleted terms effortlessly."
url: /headless-cms/restore-a-deleted-term
uid: blt9d6922b53e2eade6
---

# Restore a Deleted Term

## Restore a Deleted Term

Deleted terms are maintained in the Trash for up to **14 days** from the date of deletion. Within this timeframe, you can choose to restore them to their original state before they are permanently removed.

**Warning:** It is only possible to restore terms associated with existing taxonomies. For terms linked to deleted taxonomies, the taxonomy must be restored first

To restore a deleted term from the Trash, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) where you want to restore a deleted term, navigate to the “Settings” icon (press “S”), and select **Trash** (or press “alt + T” for Windows OS, and “option + T” for Mac OS).
2.  Click on the **Taxonomies** tab, locate the term you want to restore, and click the vertical ellipsis in the **Actions** column.
3.  You can also inspect the term by clicking **View Details**.

4.  Click **Restore**, and in the modal that appears, choose between **Restore with Entry Association** or **Restore without Entry Association** based on your requirements.![Restore Deleted Term.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc363e04c3a7a22c/6929c8ed7d0134462a3a82ce/Restore_Deleted_Term.gif)

    **Note:** Restoring with Entry Association will reconnect the term to the entries where they were previously referenced. This action will increase the entry version since the terms are added back to the entry.


## Filter Deleted Terms

By default, the Trash displays previously deleted terms in reverse chronological order under the **Taxonomies** tab i.e., recently deleted Terms will appear at the top. You can apply filters to refine the results and display only the required terms.

The **Filters** section, located on the right, displays the list of available filters which includes the following:

-   **Deleted By**: Enables filtering of deleted terms based on the users who moved them to the trash
-   **Type**: Allows filtering of deleted terms by their type, either by taxonomy or terms

Check the filter options that you want to apply. Click on **Reset Filters** to clear all the applied filters.

**Note:** While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.
