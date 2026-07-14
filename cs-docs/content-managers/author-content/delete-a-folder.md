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
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Assets” icon in the left navigation panel to view the list of available assets.
- Locate the folder you want to delete, click the **vertical ellipses** under **Actions**, and select **Delete**.![Assets_DeleteFolder_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3bd001fd6d5c1b87/6745a182acefd54fd0a6d9da/Assets_DeleteFolder_Delete.png)
- In the **Delete Asset Folder** modal, click **Delete** to confirm the action.![Assets_DeleteFolder_DeleteModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9d08e482c36ab6a/6745528beae8d97a3e8fe0ba/Assets_DeleteFolder_DeleteModal.png)

**Note**: Deleted asset folders, along with their contents, are moved to the [Trash](../../developers/manage-trash/about-trash.md) and can be restored within **14 days**. After this timeframe, they are permanently deleted.

## API Reference

To delete an asset folder via API, refer to the [Delete a folder](../../../api-docs/api-detail/content-management-api.md#delete-a-folder) API request.

## Common questions

### Does deleting an asset folder delete the assets inside it?
Yes. Deleting a folder will also delete all its contents.

### Can I restore a deleted asset folder?
Yes. Deleted asset folders, along with their contents, are moved to the Trash and can be restored within 14 days.

### What happens after 14 days in Trash?
After this timeframe, they are permanently deleted.

### Where can I find the API request to delete a folder?
Refer to the API Reference section and the [Delete a folder](../../../api-docs/api-detail/content-management-api.md#delete-a-folder) API request link.