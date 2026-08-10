---
title: "[AM2.0] - Bulk Move Assets"
description: Select assets and move to a different folder in a single action instead of moving them one at a time.
url: https://www.contentstack.com/docs/assets/bulk-move-assets
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-05-26
---

# [AM2.0] - Bulk Move Assets

This page explains how to bulk move assets to a different folder in Contentstack, who can perform the action (users with the required permissions), and when to use it (reorganizing assets or consolidating files across folders).

## Bulk Move Assets

Select assets and move to a different folder in a single action instead of moving them one at a time. Bulk move helps when you reorganize assets after a project or consolidate files into a shared folder.

When you move an asset, Contentstack also moves all its localized and source versions. Contentstack updates the access permissions to match the destination folder, which may change who can view or edit the asset.

**Warning**: Moving an asset changes its permissions to match the destination folder. Collaborators who can access the asset today may lose access after the move if they do not have permission on the destination folder.

To move multiple assets, you need permission to manage assets in the stack, plus access to both the source and destination folders. Sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:
- Navigate to the **Assets** listing page within your space.
- Select the assets you want to move using the checkbox next to each asset.
- The selection toolbar appears above the listing and shows the number of selected assets.
- On the selection toolbar, click **Move To**. The Move Assets modal opens and displays the folder structure of your stack.
- Navigate to the destination folder using one of these options:**Browse**: Click through the folder hierarchy until you reach the folder you want.
- **Search**: Enter a folder name in the search field and click **Search**.
- **Create a new folder**: Click **Create Folder**, name the folder, and confirm.

**Tip**: Use the **Sort by** dropdown to reorder the list by title, date modified, date created, created by, modified by, or file size.
- With the destination folder open, click **Move Here**.

Contentstack moves the selected assets to the destination folder and refreshes the assets listing.

**Note**: If a folder has no subfolders, you can still move assets into it. Open the folder and click **Move Here**.

## Common questions

### Does bulk move also move localized and source versions of an asset?
When you move an asset, Contentstack also moves all its localized and source versions.

### Will moving assets change who can access them?
Yes. Contentstack updates the access permissions to match the destination folder, which may change who can view or edit the asset.

### What permissions do I need to bulk move assets?
To move multiple assets, you need permission to manage assets in the stack, plus access to both the source and destination folders.

### Can I move assets into a folder that has no subfolders?
Yes. If a folder has no subfolders, you can still move assets into it. Open the folder and click **Move Here**.