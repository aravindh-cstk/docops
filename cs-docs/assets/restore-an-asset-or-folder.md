---
title: "[AM2.0] - Restore an Asset or Folder"
description: Restore an asset or folder from trash within 14 days from the date of deletion.
url: https://www.contentstack.com/docs/assets/restore-an-asset-or-folder
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-05-27
---

# [AM2.0] - Restore an Asset or Folder

This page explains how to restore an asset or folder from the Trash in Contentstack Asset Management 2.0 (AM2.0). It is intended for users who manage assets in a workspace and need to recover deleted items within the retention period.

## Restore an Asset or Folder

Restore an asset from trash within 14 days from the date of deletion. Restoring returns the asset or folder to its original location in your folder structure.

After the retention period ends, Contentstack permanently removes the asset from trash.

**Note**: To restore an asset or folder, you need permission to manage assets in the workspace.

## Restore an Asset

To restore an asset, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

- Open your space, click **Space Settings** > **Trash**.
- Locate the asset you want to restore.
- To narrow the list, use the filters in the left panel for **Deleted By** or **Type**, and use the date range at the top to view assets deleted in a specific window. The listing shows only assets deleted within the selected range.
- Click the vertical ellipsis (⋮) to open the actions menu.
- Click **Restore**.

**Note**: If you cannot click Restore for an asset, the asset's parent folder is also in trash. Restore the parent folder first using the steps in [Restore a Folder](./restore-an-asset-or-folder.md#restore-a-folder), then return to the asset's row and click Restore.

Contentstack returns the asset to the assets listing.

## Restore a Folder

When you restore a folder, Contentstack asks whether to also restore the assets that were inside the folder when you deleted it.

To restore a folder, perform the steps below:

- In the **Trash** listing, locate the folder you want to restore.
- On the folder's row, click the vertical ellipsis (⋮), then click **Restore**.
- The **Restore [folder name]** confirmation appears.
- Choose one of the following:
  - Restore With Assets: Restores the folder and the assets that were inside the folder when you deleted it.
  - Restore without Assets: Restores the folder only. The assets that were inside the folder remain in trash, and you can restore them individually afterward.

**Note**: **Restore With Assets** restores only the assets that were inside the folder at the time you deleted the folder. Assets that you deleted individually before deleting the folder remain as separate items in trash. To recover those assets, restore the parent folder first, then restore each asset individually.

## Common questions

### How long can I restore an asset or folder from trash?
You can restore an asset from trash within 14 days from the date of deletion.

### Why is the Restore option disabled for an asset?
If you cannot click Restore for an asset, the asset's parent folder is also in trash. Restore the parent folder first, then restore the asset.

### What is the difference between “Restore With Assets” and “Restore without Assets”?
“Restore With Assets” restores the folder and the assets that were inside the folder when you deleted it, while “Restore without Assets” restores only the folder and leaves the assets in trash.

### Will “Restore With Assets” restore assets deleted before the folder was deleted?
No. “Restore With Assets” restores only the assets that were inside the folder at the time you deleted the folder. Assets deleted individually before deleting the folder remain separate items in trash and must be restored individually.