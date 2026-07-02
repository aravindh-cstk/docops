---
title: "sortWithKey:orderBy:"
description: "Sorts the assets in the given order on the basis of the specified field."
url: "https://www.contentstack.com/ios-assetlibrary-sortwithkey-orderby-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sortWithKey:orderBy:

Sorts the assets in the given order on the basis of the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | field uid based on which the ordering should be done. |
| order | OrderBy | Yes | — | ascending or descending order in which results should come. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
AssetLibrary* asset = [stack assetLibrary];
[asset sortWithKey:@"updated_at" orderBy:Ascending];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
var asset:AssetLibrary = stack.assetLibrary()
asset.sortWithKey("updated_at" orderBy:Ascending)
```
