---
title: "orderByAscending:"
description: "Sorts the provided entries in the ascending order on the basis of the specified field."
url: "https://www.contentstack.com/ios-query-orderbyascending-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByAscending:

Sorts the provided entries in the ascending order on the basis of the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | The f ield uid based on which the ordering should be done. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query orderByAscending:@"updated_at"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.orderByAscending("updated_at")
```
