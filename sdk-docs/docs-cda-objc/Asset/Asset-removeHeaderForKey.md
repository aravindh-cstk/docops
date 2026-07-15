---
title: "removeHeaderForKey:"
description: "The `removeHeaderForKey` removes a header from this Asset."
url: "https://www.contentstack.com/ios-asset-removeheaderforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeHeaderForKey:

The `removeHeaderForKey` removes a header from this Asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | NSString | Yes | — | The header key that needs to be removed. |

Returns:
Type
void

No return value. The header is no longer sent with subsequent requests.

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
var asset:Asset = stack.assetWithUID( "ASSET_UID" )
asset.removeHeaderForKey( "key")
```
