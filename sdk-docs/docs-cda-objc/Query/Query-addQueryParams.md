---
title: "addQueryParams:"
description: "A custom dictionary can be provided to a query that can specify the conditions for retrieving objects."
url: "https://www.contentstack.com/ios-query-addqueryparams-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQueryParams:

A custom dictionary can be provided to a query that can specify the conditions for retrieving objects.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryDict | NSDictionary<NSString*,id> | Yes | — | A dictionary with all the necessary conditions for retrieving objects. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query addQueryParams:@{@"Query_Key":@"Query Value"}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.addQueryParams(["Query_Key":"Query Value"])
```
