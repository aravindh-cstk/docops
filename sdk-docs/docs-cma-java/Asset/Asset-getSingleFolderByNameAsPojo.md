---
title: "getSingleFolderByNameAsPojo"
description: "The getSingleFolderByNameAsPojo method retrieves a folder by name and deserializes into POJOs."
url: "https://www.contentstack.com/java-asset-getsinglefolderbynameaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getSingleFolderByNameAsPojo

The getSingleFolderByNameAsPojo method retrieves a folder by name and deserializes into POJOs.

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
        queryContent.put("name", "sub_folder");
        asset.addParam("query", queryContent);
Response<AssetListResponse> response =
asset.getSingleFolderByNameAsPojo().execute();
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
