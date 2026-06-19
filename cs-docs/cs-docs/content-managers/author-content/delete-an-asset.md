---
title: "[Author Content] - Delete an Asset"
description: Instructions for deleting an asset in Contentstack, including UI steps, retention period notes, and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-an-asset
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - Delete an Asset

This page explains how to delete an asset in Contentstack, what happens when an asset is deleted, and where to find the API request for deleting an asset. It is intended for content managers and developers who manage assets in stacks and need to remove assets safely.

## Delete an Asset

Deleting an [asset](/docs/content-managers/working-with-assets/about-assets) removes it from your stack and any [environments](/docs/developers/set-up-environments/about-environments) or [entries](/docs/content-managers/author-content/about-entries) where it is used. Use this action with caution, as deleted assets will no longer be available unless restored from the trash within the retention period.

To delete an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your stack, and click the **“Assets”** icon in the left navigation panel. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
- Select the asset you want to delete.
- Click the **horizontal ellipsis** in the top-right corner of the asset's details page.
- From the dropdown menu, select **Delete**.
- Click **Delete** to confirm your action.

**Note:** Deleted assets are moved to the trash and can be restored within **14 days**. After this retention period, they will be permanently deleted.

Alternatively, you can also delete an asset from the assets list page. To do so, perform the following steps:
- On the assets list page, locate the asset you want to delete and click the **vertical ellipsis** in the **Actions** column.
- From the dropdown menu, select **Delete**.
- Click **Delete** to confirm your action.

**Additional Resource:** Learn how to delete multiple assets at once by referring to our [Bulk Delete Assets](/docs/content-managers/author-content/bulk-delete-assets) document.

## API Reference

To delete an asset via API, refer to the [Delete asset](/docs/developers/apis/content-management-api#delete-asset) API request.

## Common questions

**Q: What happens to entries or environments that use a deleted asset?**  
A: Deleting an asset removes it from your stack and any environments or entries where it is used.

**Q: Can I restore a deleted asset?**  
A: Yes. Deleted assets are moved to the trash and can be restored within **14 days**.

**Q: Is there a way to delete an asset without opening its details page?**  
A: Yes. You can delete an asset from the assets list page using the **vertical ellipsis** in the **Actions** column.

**Q: Can I delete an asset using an API request?**  
A: Yes. Refer to the [Delete asset](/docs/developers/apis/content-management-api#delete-asset) API request.