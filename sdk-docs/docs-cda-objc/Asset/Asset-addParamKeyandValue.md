---
title: "addParamKey:andValue"
description: "The `addParamKey:andValue` method adds a query parameter key–value pair to the `Asset` . The SDK sends the parameter with the next `fetch` request (for example, `include_dimension` , `locale` , or other supported API keys)."
url: "https://www.contentstack.com/ios-asset-addparamkey-andvalue-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParamKey:andValue

The `addParamKey:andValue` method adds a query parameter key–value pair to the `Asset`. The SDK sends the parameter with the next `fetch` request (for example, `include_dimension`, `locale`, or other supported API keys).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | None | User-defined key for the query parameter. Specifies the key sent during the fetch operation. |
| value | NSString | Yes | None | User-defined value for the query parameter. Specifies the value sent during the fetch operation. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey: @"API_KEY"  accessToken: @"DELIVERY_TOKEN"  environmentName: @"ENVIRONMENT" ];
Asset* asset = [stack assetWithUID: @"ASSET_UID" ];
[asset addParamKey:@"include_dimension" andValue:@"true"];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
var asset: Asset = stack.assetWithUID("ASSET_UID")
asset.addParamKey("include_dimension", andValue: "true")
```
