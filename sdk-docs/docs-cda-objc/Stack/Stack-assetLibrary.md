---
title: "assetLibrary"
description: "Represents a Asset on ‘Stack’ which can be executed to get AssetLibrary object."
url: "https://www.contentstack.com/ios-stack-assetlibrary"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assetLibrary

Represents a Asset on ‘Stack’ which can be executed to get AssetLibrary object.

No parameters.

Returns:
Type
AssetLibrary

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary *asset = [stack assetLibrary];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

var asset:AssetLibrary = stack.assetLibrary()
```
