---
title: "setHeader:forKey:"
description: "Set a header for AssetLibrary"
url: "https://www.contentstack.com/ios-assetlibray-setheader-forkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHeader:forKey:

Set a header for AssetLibrary

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerValue | NSString | Yes | — | The header value |
| headerKey | NSString | Yes | — | The header key |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
AssetLibrary * asset = [stack assetLibrary];
[asset setHeader:@"MyValue" forKey:@"My-Custom-Header"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let asset = stack.assetLibrary()
asset.setHeader("MyValue", forKey: "My-Custom-Header")
```
