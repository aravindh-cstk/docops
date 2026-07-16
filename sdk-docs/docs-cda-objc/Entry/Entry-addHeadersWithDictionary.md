---
title: "addHeadersWithDictionary:"
description: "Set a header for Entry"
url: "https://www.contentstack.com/ios-entry-addheaderswithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeadersWithDictionary:

Set a header for Entry

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
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry addHeadersWithDictionary:@{@"My-Custom-Header": @"MyValue"}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.addHeadersWithDictionary(["My-Custom-Header":"MyValue"])
```
