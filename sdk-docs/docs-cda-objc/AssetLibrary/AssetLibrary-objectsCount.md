---
title: "objectsCount"
description: "Provides only the number of assets."
url: "https://www.contentstack.com/ios-assetlibrary-objectscount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## objectsCount

Provides only the number of assets.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset objectsCount];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.objectsCount()
```
