---
title: "byFolderUidAsPojo"
description: "The byFolderUidAsPojo method retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of sub-folders within it."
url: "https://www.contentstack.com/java-asset-byfolderuidaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## byFolderUidAsPojo

The byFolderUidAsPojo method retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of sub-folders within it.

No parameters.

Returns:
Type
Call<AssetListResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Response<AssetListResponse> response = contentstack.stack().asset().byFolderUidAsPojo("folder_uid").execute();
if (response.isSuccessful() && response.body() != null) {
    AssetListResponse assetListResponse = response.body();
    List<AssetPojo> assets = assetListResponse.getAssets();
    for (AssetPojo asset : assets) {
        System.out.println(" Asset UID: " + asset.uid);
    }
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
