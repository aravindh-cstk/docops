---
title: "findAsPojo"
description: "The findAsPojo method fetches multiple assets and deserializes them into POJOs."
url: "https://www.contentstack.com/java-asset-findaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAsPojo

The findAsPojo method fetches multiple assets and deserializes them into POJOs.

No parameters.

Returns:
Type
Call<AssetListResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Response<AssetListResponse> response = contentstack.stack().asset().findAsPojo().execute();
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
