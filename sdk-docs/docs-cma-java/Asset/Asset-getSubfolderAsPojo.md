---
title: "getSubfolderAsPojo"
description: "The getSubfolderAsPojo method fetches all subfolders."
url: "https://www.contentstack.com/java-asset-getsubfolderaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getSubfolderAsPojo

The getSubfolderAsPojo method fetches all subfolders.

No parameters.

Returns:
Type
Call<AssetListResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
JSONObject queryContent = new JSONObject();
        queryContent.put("is_dir", true);  
        asset.addParam("folder", "blt4f46298330ee5f99");
        asset.addParam("include_folders", true);    
        asset.addParam("query", queryContent);

Response<AssetListResponse> response = asset.getSubfolderAsPojo().execute();
if (response.isSuccessful() && response.body() != null) {
    AssetListResponse assetListResponse = response.body();
    if (assetListResponse != null) {
    List<AssetPojo> assetPojos = assetListResponse.getAssets();
     for (AssetPojo assetPojo : assetPojos) {
    System.out.println(" Asset UID: " + assetPojo.uid);
    System.out.println(" Asset Title: " + assetPojo.title);          
        }
    }
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
