---
title: "Restore an Asset or Folder"
description: "Learn how to restore a deleted asset or folder from Trash in Contentstack, including how parent folders affect restoration."
url: /assets/restore-an-asset-or-folder
uid: blt844d509568c686ec
---

# Restore an Asset or Folder

## Restore an Asset or Folder

Restore an asset from trash within 14 days from the date of deletion. Restoring returns the asset or folder to its original location in your folder structure.

After the retention period ends, Contentstack permanently removes the asset from trash.

**Note:** To restore an asset or folder, you need permission to manage assets in the workspace.

## Restore an Asset

To restore an asset, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Open your space, click **Space Settings** > **Trash**.
2.  Locate the asset you want to restore.
3.  To narrow the list, use the filters in the left panel for **Deleted By** or **Type**, and use the date range at the top to view assets deleted in a specific window. The listing shows only assets deleted within the selected range.
4.  Click the vertical ellipsis (⋮) to open the actions menu.
5.  Click **Restore**.  

    **Note:** If you cannot click Restore for an asset, the asset's parent folder is also in trash. Restore the parent folder first using the steps in [Restore a Folder](/docs/assets/restore-an-asset-or-folder#restore-a-folder), then return to the asset's row and click Restore.


Contentstack returns the asset to the assets listing.

## Restore a Folder

When you restore a folder, Contentstack asks whether to also restore the assets that were inside the folder when you deleted it.

To restore a folder, perform the steps below:

1.  In the **Trash** listing, locate the folder you want to restore.
2.  On the folder's row, click the vertical ellipsis (⋮), then click **Restore**.
3.  The **Restore \[folder name\]** confirmation appears.
4.  Choose one of the following:
    -   Restore With Assets: Restores the folder and the assets that were inside the folder when you deleted it.
    -   Restore without Assets: Restores the folder only. The assets that were inside the folder remain in trash, and you can restore them individually afterward.

**Note:** **Restore With Assets** restores only the assets that were inside the folder at the time you deleted the folder. Assets that you deleted individually before deleting the folder remain as separate items in trash. To recover those assets, restore the parent folder first, then restore each asset individually.
