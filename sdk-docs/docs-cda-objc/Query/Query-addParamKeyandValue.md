---
title: "addParamKey:andValue:"
description: "This method provides all the entries from a specified ContentType."
url: "https://www.contentstack.com/ios-query-addparamkey-andvalue-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParamKey:andValue:

This method provides all the entries from a specified ContentType.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | The key as string which needs to be added to the Query |
| value |  | Yes | — | The value as string which needs to be added to the Query |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query addParamKey:@"key" andValue:@"value"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.addParamKey("key", andValue:"value")
```
