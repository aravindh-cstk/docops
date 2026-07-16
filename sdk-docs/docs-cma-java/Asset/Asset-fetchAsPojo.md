---
title: "fetchAsPojo"
description: "The fetchAsPojo method fetches a single asset by UID and deserializes it into a POJO."
url: "https://www.contentstack.com/java-asset-fetchaspojo"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAsPojo

The fetchAsPojo method fetches a single asset by UID and deserializes it into a POJO.

No parameters.

Returns:
Type
Call<AssetResponse>

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset("asset_uid");
Response&glt;AssetResponse> response = asset.fetchAsPojo().execute();
if (response.isSuccessful() && response.body() != null) {
    AssetResponse assetResponse = response.body();
    AssetPojo pojo = assetResponse.getAssetPojo();
    System.out.println(" Asset URL: " + pojo.url);
} else {
    System.out.println("Error: " + response.errorBody().string());
}
```
