---
title: "includeCount"
description: "This method also includes the total number of assets returned in the response."
url: "https://www.contentstack.com/ios-assetlibrary-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeCount

This method also includes the total number of assets returned in the response.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset includeCount];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.includeCount()
```
