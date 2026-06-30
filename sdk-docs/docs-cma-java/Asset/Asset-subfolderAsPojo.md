---
title: "subfolderAsPojo"
description: "The subfolderAsPojo method retrieves details of assets and asset subfolders within a specific parent asset folder."
url: "https://www.contentstack.com/java-asset-subfolderaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## subfolderAsPojo

The subfolderAsPojo method retrieves details of assets and asset subfolders within a specific parent asset folder.

No parameters.

Returns:
Type
Call<AssetListResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Response<AssetListResponse> response = contentstack.stack().asset().subfolderAsPojo("folder_uid", true).execute();
if (response.isSuccessful() && response.body() != null) {
    AssetListResponse assetListResponse = response.body();
    List<AssetPojo> assets = assetListResponse.getAssets();
    for (AssetPojo asset : assets) {
        System.out.println(" Asset Title: " + asset.title);
    }
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
