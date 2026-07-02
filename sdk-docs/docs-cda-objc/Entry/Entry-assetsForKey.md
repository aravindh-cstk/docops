---
title: "assetsForKey:"
description: "Get the array containing instance of Assets mentioned in key specified."
url: "https://www.contentstack.com/ios-entry-assetsforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assetsForKey:

Get the array containing instance of Assets mentioned in key specified.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key containing the colection reference value of Assets. |

Returns:
Type
NSArray

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
NSArray *assetArray = [entry assetsForKey:@"asset"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
let assetArray = entry.assetsForKey("asset")
```
