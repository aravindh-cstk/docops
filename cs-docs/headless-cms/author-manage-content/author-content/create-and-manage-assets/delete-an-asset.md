---
title: "Delete an Asset"
description: "Learn how to delete assets in Contentstack safely, manage trash retention, and restore or permanently remove assets within 14 days."
url: /headless-cms/delete-an-asset
uid: blt42c95fdccc505c88
---

# Delete an Asset

## Delete an Asset

Deleting an [asset](/docs/headless-cms/about-assets) removes it from your stack and any [environments](/docs/headless-cms/about-environments) or [entries](/docs/headless-cms/about-entries) where it is used. Use this action with caution, as deleted assets will no longer be available unless restored from the trash within the retention period.

To delete an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your stack, and click the **“Assets”** icon. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
2.  Select the asset you want to delete.
3.  Click the **horizontal ellipsis** in the top-right corner of the asset's details page.
4.  From the dropdown menu, select **Delete**.
5.  Click **Delete** to confirm your action.

**Note:** Deleted assets are moved to the trash and can be restored within **14 days**. After this retention period, they will be permanently deleted.

Alternatively, you can also delete an asset from the assets list page. To do so, perform the following steps:

1.  On the assets list page, locate the asset you want to delete and click the **vertical ellipsis** in the **Actions** column.
2.  From the dropdown menu, select **Delete**.
3.  Click **Delete** to confirm your action.

**Additional Resource:** Learn how to delete multiple assets at once by referring to our [Bulk Delete Assets](/docs/headless-cms/bulk-delete-assets) document.

## API Reference

To delete an asset via API, refer to the [Delete asset](/docs/developers/apis/content-management-api/assets#delete-asset) API request.
