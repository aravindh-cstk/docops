---
title: "AssetSidebarWidget"
description: "The `AssetSidebarWidget` UI location integrates with asset management interfaces in the Contentstack UI."
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/assetsidebarwidget"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# AssetSidebarWidget

## AssetSidebarWidget

The `AssetSidebarWidget` UI location integrates with asset management interfaces in the Contentstack UI.

```
const assetSidebar = sdk.location.AssetSidebarWidget;
if (assetSidebar) {
  const assetData = assetSidebar.getData();
  await assetSidebar.setData({ title: 'New Asset Title' });
  assetSidebar.onSave((updatedAsset) => {
    console.log('Asset saved:', updatedAsset);
  });
}
```
