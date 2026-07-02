---
title: "configureWithDictionary"
description: "The configureWithDictionary method configures the assets’ in-memory metadata (for example, after a fetch or for local use). Request behavior: This method does not modify request parameters for fetch . For request parameters: Use setLocale: , includeMetadata , or addParamKey:andValue: ."
url: "https://www.contentstack.com/ios-asset-configurewithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## configureWithDictionary

The `configureWithDictionary` method configures the assets’ in-memory metadata (for example, after a fetch or for local use).

- **Request behavior:** This method does not modify request parameters for `fetch`.
- **For request parameters:** Use `setLocale:`, `includeMetadata`, or `addParamKey:andValue:`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dictionary | NSDictionary<NSString*,id*> | Yes | None | Key–value pairs used to set the asset’s stored metadata (for example, `uid` , `fileName` , `url` ). Replaces existing values for the provided keys. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey: @"API_KEY"  accessToken: @"DELIVERY_TOKEN"  environmentName: @"ENVIRONMENT" ];
Asset* asset = [stack assetWithUID: @"ASSET_UID" ];
[asset configureWithDictionary:@{ @"key_name" : @"MyValue" }];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey( "API_KEY" ,accessToken: "DELIVERY_TOKEN" , environmentName: "ENVIRONMENT" )
var asset:Asset = stack.assetWithUID( "ASSET_UID" )
asset.configureWithDictionary([ "key_name" : "MyValue" ])
```
