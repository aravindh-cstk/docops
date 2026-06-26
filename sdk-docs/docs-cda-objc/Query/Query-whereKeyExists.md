---
title: "whereKeyExists:"
description: "This method provides only the entries that contains the field matching the specified field uid."
url: "https://www.contentstack.com/ios-query-wherekeyexists-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereKeyExists:

This method provides only the entries that contains the field matching the specified field uid.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Uid of the field that is to be taken into consideration |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query whereKeyExists:@"introduction"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.whereKeyExists("introduction")
```
