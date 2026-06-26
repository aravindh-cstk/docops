---
title: "fetch:"
description: "The `fetch` fetches an asset asynchronously (by UID or with a query built on the instance)."
url: "https://www.contentstack.com/ios-asset-fetch-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch:

The `fetch` fetches an asset asynchronously (by UID or with a query built on the instance).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | (void ( ^ ) ( ResponseType type , NSError *BUILT_NULLABLE_P error )) | Yes | — | Block to be called once operation is done. |

Returns:
Type
void

No return value. Completion block is called with ResponseType (CACHE or NETWORK) and NSError; on success, the Asset instance is populated with properties (fileName, url, etc.).

**Obj-C**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
let asset = stack.assetWithUID("ASSET_UID")
asset.fetch { (responseType, error) -> Void in
    if let error = error {
        // Handle error
    }
}
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
let asset = stack.assetWithUID("ASSET_UID")
asset.fetch { (responseType, error) -> Void in
    if let error = error {
        // Handle error
    }
}
```
