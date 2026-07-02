---
title: "includeBranch"
description: "The includeBranch retrieves the branch for the published content."
url: "https://www.contentstack.com/copy-of-ios-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

The `includeBranch` retrieves the branch for the published content.

No parameters.

Returns:
Type
void

No return value. Fallback behavior is applied to the next fetch.

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey: @"API_KEY"  accessToken: @"DELIVERY_TOKEN"  environmentName: @"ENVIRONMENT" ];
Asset* asset = [stack assetWithUID: @"ASSET_UID" ];
[asset includeBranch];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
var asset: Asset = stack.assetWithUID("ASSET_UID")
asset.includeBranch()
```
