---
title: "fetchAll:"
description: "This method provides all the assets."
url: "https://www.contentstack.com/ios-assetlibrary-fetchall-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll:

This method provides all the assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | (void ( ^ ) ( ResponseType type , NSArray<Asset*> *BUILT_NULLABLE_P result , NSError *BUILT_NULLABLE_P error )) | Yes | — | Block to be called once operation is done. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset fetchAll:^(ResponseType type, NSArray *result, NSError *error) {

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.fetchAll { (responseType, result!, error!) -> Void in

})
```
