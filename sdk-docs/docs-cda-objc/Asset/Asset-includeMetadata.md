---
title: "includeMetadata"
description: "The includeMetadata method Includes metadata in the response body."
url: "https://www.contentstack.com/ios-asset-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The `includeMetadata` method Includes metadata in the response body.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
Asset* asset = [stack assetWithUID:@"ASSET_UID"];
[asset includeMetadata];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
var asset:Asset = stack.assetWithUID("ASSET_UID")
asset.includeMetadata()
```
