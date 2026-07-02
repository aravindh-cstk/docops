---
title: "includeBranch"
description: "Retrieve the branch for the published content."
url: "https://www.contentstack.com/ios-assetlibrary-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

Retrieve the branch for the published content.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset includeBranch];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.includeBranch()
```
