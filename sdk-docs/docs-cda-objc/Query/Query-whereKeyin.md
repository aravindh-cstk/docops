---
title: "whereKey:in:"
description: "This method provides only the entries matching the Query."
url: "https://www.contentstack.com/ios-query-wherekey-in-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereKey:in:

This method provides only the entries matching the Query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Reference Uid of the field that is to be taken into consideration. |
| query | Query | Yes | — | Query to be taken into consideration |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];

Query * reference = [contentType query];
[reference whereKey:@"name" equalTo:@"Author"];

[query whereKey:@"author" in:reference];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()

var reference:Query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
reference.whereKey("name", equalTo:"Author")

query.whereKey("author", in:reference)
```
