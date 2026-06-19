---
title: "[Author Content] - Delete an Asset Folder"
description: Instructions for deleting an asset folder in Contentstack and reference for deleting via API.
url: https://www.contentstack.com/docs/headless-cms/delete-a-folder
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Author Content] - Delete an Asset Folder

This page explains how to delete an asset folder in Contentstack (including what happens to its contents) and points to the API reference for deleting a folder programmatically. It is intended for Contentstack users managing assets and developers who may need the equivalent API request.

## Delete an Asset Folder

Contentstack allows you to delete asset folders that are no longer required. Deleting a folder will also delete all its contents.

To delete an asset folder, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Assets” icon in the left navigation panel to view the list of available assets.
- Locate the folder you want to delete, click the **vertical ellipses** under **Actions**, and select **Delete**.
- In the **Delete Asset Folder** modal, click **Delete** to confirm the action.

**Note**: Deleted asset folders, along with their contents, are moved to the [Trash](/docs/developers/manage-trash/about-trash) and can be restored within **14 days**. After this timeframe, they are permanently deleted.

## API Reference

To delete an asset folder via API, refer to the [Delete a folder](/docs/developers/apis/content-management-api#delete-a-folder) API request.

## Common questions

### Does deleting an asset folder delete the assets inside it?
Yes. Deleting a folder will also delete all its contents.

### Can I restore a deleted asset folder?
Yes. Deleted asset folders, along with their contents, are moved to the Trash and can be restored within 14 days.

### What happens after 14 days in Trash?
After this timeframe, they are permanently deleted.

### Where can I find the API request to delete a folder?
Refer to the API Reference section and the [Delete a folder](/docs/developers/apis/content-management-api#delete-a-folder) API request link.