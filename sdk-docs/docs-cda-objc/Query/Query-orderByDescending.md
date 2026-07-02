---
title: "orderByDescending:"
description: "Sorts the provided entries in the descending order on the basis of the specified field."
url: "https://www.contentstack.com/ios-query-orderbydescending-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByDescending:

Sorts the provided entries in the descending order on the basis of the specified field.

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
[query orderByDescending:@"updated_at"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.orderByDescending("updated_at")
```
