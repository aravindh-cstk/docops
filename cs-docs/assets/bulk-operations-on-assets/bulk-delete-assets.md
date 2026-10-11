---
title: "Bulk Delete Assets"
description: "Learn how to delete several assets at once from the assets listing in Contentstack. Deleted assets move to Trash, where you can restore them."
url: /assets/bulk-delete-assets
uid: bltd8d1b8d1785c0441
---

# Bulk Delete Assets

## Bulk Delete Assets

Select and delete multiple assets at once from the assets listing. Bulk deletion is useful when you clear out files after a campaign ends or during a content audit.

When you delete an asset, Contentstack moves it to trash. You can restore the asset from trash within **14 days**.

**Note:** To delete assets, you need permission to delete assets in the stack. Without delete permission, the **Delete** action does not appear on the selection toolbar.

To delete multiple assets, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Navigate to the **Assets** listing page within your space.
2.  Select the assets you want to delete using the checkbox next to each asset.  

    **Note:** You can select and delete up to **100 assets** at a time. To delete more than 100 assets, repeat the process in batches.

3.  The selection toolbar appears above the listing and shows the number of selected assets.
4.  On the selection toolbar, click **Delete**.
5.  The **Delete Assets** confirmation appears. Click **Delete** to confirm.

Contentstack moves the selected assets to trash and refreshes the assets listing.

To restore a deleted asset, open **Trash** within **Space Settings** and select the assets you want to restore.

**Warning:** Contentstack permanently removes assets from trash after **14 days**. The asset cannot be restored after 14 days from the date of deletion.

## Find and Delete Duplicate Images

Clearing out duplicates is a common reason to delete in bulk, and selecting them by hand from the listing is slow and error prone. Two copies of the same image often carry different file names and sit in different folders, so nothing on the listing page tells you they are the same file.

**Duplicate Management** does that work for you. It groups images that are byte-for-byte identical into sets, so you review a set rather than hunt across the library.

1.  On the assets listing page, open the **More Actions** menu.
2.  Select **Duplicate Management**.
3.  Click a set to see every copy it holds.
4.  Open the **More Actions** menu on the copy you want to keep and select **Keep This, Delete the Rest**. To choose the copies yourself instead, select them and click **Delete N Duplicates**.

Deletions made here follow the same path as any other bulk delete. The assets move to trash, the same selection limit applies, and you can restore them within the retention window.

**Note:** Duplicate Management groups exact matches only, and covers images. A resized or re-exported copy is a different file, so it is not grouped and has to be deleted from the listing in the usual way.

**Additional Resource:** For how sets are detected, what happens to your permissions, and how to turn detection off for a workspace, refer to [Manage Duplicate Images](/docs/assets/manage-duplicate-images).
