---
title: "addHeadersWithDictionary:"
description: "Set a header for Stack"
url: "https://www.contentstack.com/ios-stack-addheaderswithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeadersWithDictionary:

Set a header for Stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | NSDictionary<NSString*,NSString*> | Yes | — | The headers as dictionary which needs to be added to the application. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

[stack addHeadersWithDictionary:@{@"My-Custom-Header": @"MyValue"}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.addHeadersWithDictionary(["My-Custom-Header":"MyValue"])
```
