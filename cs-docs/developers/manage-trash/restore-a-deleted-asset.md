---
title: "[Set Up Your Project] - Restore a Deleted Asset"
description: Restore a deleted asset from Trash and filter deleted assets.
url: https://www.contentstack.com/docs/headless-cms/restore-a-deleted-asset
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Restore a Deleted Asset

This page explains how to restore deleted assets from Contentstack Trash (including notes and warnings about folder restoration), and how to filter deleted assets to find specific items. It is intended for users managing assets in a stack who need to recover recently deleted files or refine Trash results.

## Restore a Deleted Asset

Trash maintains a backup of all deleted assets for up to 14 days from the date of deletion. You can restore deleted assets before they are permanently deleted.

The Trash feature also allows you to edit the asset information before you restore it. For example, you can rename, tag, or replace the asset and then restore the modified version.

Warning: You can directly recover assets of which the corresponding asset folders already exist in the stack. To recover assets that belong to deleted asset folders, you need to restore the asset folder first to be able to restore these assets.

To restore a deleted asset from the Trash, log in to your [Contentstack account](https://app.contentstack.com/), go to your stack, and perform the following steps:
- Click the “Settings” icon (press “S”) on the left panel and select **Trash** (or press “**alt + T**” for Windows OS, and “option + **T**” for Mac OS).
- Click on the **Assets** tab, and hover over the asset you want to restore (e.g., **Profile Picture**).
- Click on the **Restore** button that appears at the extreme right end.

  **Note**: To be able to restore an asset that belongs to a deleted asset folder, restore the asset folder first.
- The asset will then disappear from the Trash and will be available in the stack.
- You can also edit asset details before you restore it back to the stack. Open the asset, edit its name or description, add a tag for the image, or replace the image with a new one.
- Once done, click on **Restore**.

  **Note**: Every time a deleted asset is restored, its version number is incremented by default. At the same time, the **MODIFIED BY** column would also reflect the name of the user who restored the asset.

## Filter Deleted Assets

By default, the Trash displays previously deleted assets in reverse chronological order under the **Assets** tab. You can apply filters to refine the results and display only the required assets.

The **Filters** section, located on the right, displays the list of available filters, which includes the following:
- **DATE**: You can filter out the deleted assets according to days. The date filter allows you to quickly view the deleted assets of only the last 14 days, last 7 days, the previous day, or the current day. The “Custom Range” option allows you to set a data range within the last 14 days.
- **DELETED BY**: You can filter out the deleted assets according to the users that sent them to the trash.
- **TYPE**: You can filter out the deleted assets according to their filetype. Assets may be present in file formats such as videos, images, PDFs, spreadsheets, or audio files.

## Common questions

**Q: How long does Trash keep deleted assets?**  
A: Trash maintains a backup of all deleted assets for up to 14 days from the date of deletion.

**Q: Can I restore an asset if its folder was deleted?**  
A: To be able to restore an asset that belongs to a deleted asset folder, restore the asset folder first.

**Q: Can I edit an asset before restoring it?**  
A: The Trash feature also allows you to edit the asset information before you restore it (for example, rename, tag, replace the asset).

**Q: What changes when I restore a deleted asset?**  
A: Every time a deleted asset is restored, its version number is incremented by default, and the **MODIFIED BY** column reflects the name of the user who restored the asset.