---
title: "Manage Duplicate Images"
description: "Find and clean up identical images in a workspace with Duplicate Management, which groups exact duplicates automatically as assets are uploaded."
url: /assets/manage-duplicate-images
uid: blt90b2c15e021dbd4b
---

# Manage Duplicate Images

## Manage Duplicate Images

Duplicate Management finds images that are byte-for-byte identical and groups them into sets, so you can review the copies and decide which to keep. Detection runs automatically as assets are uploaded, replaced, deleted, or restored.

The same logo or product shot tends to arrive several times, uploaded by different people across different campaigns. Every copy consumes storage, and a search returns all of them without telling you they are the same file. Duplicate Management surfaces those sets in one place and lets you clean them up without hunting through the asset listing.

**Note:** Duplicate Management is not enabled for every organization yet. If the option does not appear in your workspace, contact [Contentstack Support](https://www.contentstack.com/support/).

## What Counts as a Duplicate

Duplicate Management groups **exact duplicates only**. Two assets belong to the same set when their file contents are identical, regardless of file name, upload date, folder, or who uploaded them.

Images that look alike are not grouped. A resized copy, a re-exported version, a cropped variant, and the same photograph saved at a different quality are all different files, so they do not appear as duplicates.

Detection covers **images**. Other file types are not grouped into sets.

No copy in a set is marked as the original. Every asset in a set is equal, and you choose which one to keep.

## Open Duplicate Management

To review duplicates in a workspace, sign in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to **Assets** through the App Switcher and open the workspace you want to review.
2.  On the asset listing page, open the **More Actions** menu.
3.  Select **Duplicate Management**.

The page lists every duplicate set in the workspace. Each set card shows stacked thumbnails, the number of images in the set, the file type, and the combined size.

Sets are ordered by most recently updated first, so a set that just gained a new duplicate appears at the top. Scroll to load more sets.

Click **Global Refresh** to re-fetch the list after uploading or deleting assets elsewhere. A workspace with nothing to review shows **No duplicates yet**.

## Review a Set

Click a set to expand it in place. One set is open at a time, and the set header stays visible while you scroll through the images inside it.

Each asset card shows the thumbnail, the asset name, its locale, and whether the asset is public or restricted.

-   Click the information icon to open the asset info panel, which shows the system metadata.
-   Click the asset to open its Asset Details page.

Localized versions of an asset appear as separate cards and count toward the set total, so the number in the header always matches the cards on screen.

## Delete Duplicates

Three options are available, all of which move assets to the bin rather than removing them permanently.

### Keep One and Delete the Rest

Open the **More Actions** menu on the asset you want to keep and select **Keep This, Delete the Rest**. The confirmation dialog names the asset being kept and the number being removed.

Start here. Deduplicating means keeping one copy, and this option gets there in a single action instead of selecting every other card by hand.

### Delete a Single Asset

Open the **More Actions** menu on an asset card and select **Delete Asset**. Confirm the deletion in the dialog.

### Delete Several Assets

Select the assets you want to remove using their checkboxes, then click **Delete N Duplicates**. Use **Select all assets in this set** to select everything currently loaded, and **Show Only Selected** to review your selection before confirming.

Selection covers the assets currently loaded in the set. Scroll to load more before selecting if the set is large.

**Warning:** Selecting every asset in a set deletes every copy of that image. Nothing stops you, and the confirmation dialog does not single this case out, so check that one asset stays unselected unless you intend to remove the image entirely.

**Warning:** A deleted asset stops being available everywhere it is used or linked. Check where a copy is referenced before removing it, and prefer keeping the copy that is already in use.

After a deletion, a set that has fewer than two images left is complete and no longer appears in the list.

**Additional Resource:** Deleted assets follow the standard bin lifecycle. To recover one, refer to [Restore an Asset or Folder](/docs/assets/restore-an-asset-or-folder).

## Permissions

The Duplicate Management page is visible to everyone with read access to the space. The assets inside a set are governed by your own permissions.

Assets you do not have permission to view are not shown, and the set tells you so rather than quietly showing fewer cards. Its heading changes to **Set of 50 images, showing 4**, and a note appears inside the set:

> You do not have permission to view 46 assets in this set. Ask your admin for access.

Deleting requires delete permission on the asset. Assets you cannot delete are skipped.

## Enable or Disable Duplicate Management

Duplicate Management is enabled by default in every workspace, including newly created ones. A space admin can turn it off for a specific workspace.

1.  Open **Space Settings** and select the **Workspaces** section.
2.  Open the **More Actions** menu for the workspace.
3.  Select **Duplicate Management**, then choose **Enable** or **Disable**.
4.  Confirm the change in the dialog.

Disabling stops duplicate scanning in that workspace and hides Duplicate Management from the asset listing page. Sets that were already detected are kept, so re-enabling brings them back.

**Note:** Changing this setting requires permission to edit space settings.

## Limitations

-   Only exact duplicates are grouped. Visually similar images are not detected.
-   Detection covers images only.
-   Sets are scoped to a single workspace. Copies of the same image in two workspaces are not grouped together.
-   Detection is asynchronous. A newly uploaded duplicate takes a short time to appear in a set, and uploading is never blocked or delayed while it runs.
-   Sets cannot be searched, filtered, or sorted in this release.

## Common Questions

**Does uploading a duplicate get blocked?** No. Detection runs in the background after the upload completes, and the upload experience is unchanged.

**Which copy is the original?** None of them. All copies in a set are equal, and you choose which one to keep.

**What happens to a duplicate set when I delete assets from it?** The set disappears from the list once fewer than two images remain.

**Are deleted duplicates recoverable?** Yes. Every deletion moves the asset to the bin, where it stays for the standard retention period and can be restored.

**Why does the count in a set header not match the number of images I see?** The header counts every copy in the workspace, including copies you do not have permission to view.

**Does disabling Duplicate Management delete the sets already found?** No. Detection pauses and the section is hidden. Re-enabling restores access to the existing sets.
