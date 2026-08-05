---
title: "removeHeaderForKey:"
description: "Removes a header from this AssetLibrary"
url: "https://www.contentstack.com/ios-assetlibrary-removeheaderforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeHeaderForKey:

Removes a header from this AssetLibrary

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | NSString | Yes | — | The header key that needs to be removed. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
AssetLibrary * asset = [stack assetLibrary];
[asset removeHeaderForKey:@"key"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let asset = stack.assetLibrary()
asset.removeHeaderForKey("key")
```
