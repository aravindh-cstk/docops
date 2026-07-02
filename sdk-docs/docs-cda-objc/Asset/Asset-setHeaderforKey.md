---
title: "setHeader:forKey:"
description: "The setHeader:forKey sets a header for the Asset."
url: "https://www.contentstack.com/ios-asset-setheader-forkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHeader:forKey:

The `setHeader:forKey` sets a header for the Asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerValue | NSString | Yes | — | The header value |
| headerKey | NSString | Yes | — | The header key |

Returns:
Type
void

No return value. The header is applied to the next fetch requests (e.g., `fetch:`).

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
Asset *asset = [stack assetWithUID:@"ASSET_UID"];
[asset setHeader:@"MyValue" forKey:@"My-Custom-Header"];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
var asset: Asset = stack.assetWithUID("ASSET_UID")
asset.setHeader("MyValue", forKey: "My-Custom-Header")
```
