---
title: "addHeadersWithDictionary:"
description: "Set a header for Query"
url: "https://www.contentstack.com/ios-query-addheaderswithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeadersWithDictionary:

Set a header for Query

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | NSDictionary<NSString*,NSString*> | Yes | — | The headers as dictionary which needs to be added to the application. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query addHeadersWithDictionary:@{@"My-Custom-Header": @"MyValue"}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.addHeadersWithDictionary(["My-Custom-Header":"MyValue"])
```
