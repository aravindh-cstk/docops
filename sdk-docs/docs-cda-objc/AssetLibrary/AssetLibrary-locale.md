---
title: "locale:"
description: "This method provides all the assets for the specified language in the response."
url: "https://www.contentstack.com/ios-assetlibrary-locale-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale:

This method provides all the assets for the specified language in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | NSString | Yes | — | Language enum for all language available. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset locale:@"en-us"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.locale("en-us")
```
