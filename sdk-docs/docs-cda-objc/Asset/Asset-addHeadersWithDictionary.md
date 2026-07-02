---
title: "addHeadersWithDictionary:"
description: "The addHeadersWithDictionary method sets a single header on the Asset . Multiple headers: Use addHeadersWithDictionary: . Override behavior: Headers set on the Asset override the same header from the Stack for that request only."
url: "https://www.contentstack.com/ios-asset-addheaderswithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeadersWithDictionary:

The `addHeadersWithDictionary` method sets a single header on the `Asset`.

- **Multiple headers:** Use `addHeadersWithDictionary:`.
- **Override behavior:** Headers set on the `Asset` override the same header from the `Stack` for that request only.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | NSDictionary<NSString*,NSString*> | Yes | — | The headers as dictionary which needs to be added to the application. |

Returns:
Type
void

No return value. Headers are applied to subsequent requests (e.g., `fetch:`).

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey: @"API_KEY"  accessToken: @"DELIVERY_TOKEN"  environmentName: @"ENVIRONMENT" ];
Asset* asset = [stack assetWithUID: @"ASSET_UID" ];
[asset addHeadersWithDictionary:@{ @"My-Custom-Header" :  @"MyValue" }];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
var asset: Asset = stack.assetWithUID("ASSET_UID")
asset.addHeadersWithDictionary(["My-Custom-Header": "MyValue"])
```
