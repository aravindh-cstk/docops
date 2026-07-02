---
title: "assetForKey:"
description: "Get the info of the specified key of Asset object and returns instance of Assets."
url: "https://www.contentstack.com/ios-entry-assetforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assetForKey:

Get the info of the specified key of Asset object and returns instance of Assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key containing the reference value of Asset |

Returns:
Type
Asset

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
Asset *asset = [entry assetForKey:@"asset"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
let asset = entry.assetForKey("asset")
```
