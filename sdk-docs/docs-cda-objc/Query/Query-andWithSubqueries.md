---
title: "andWithSubqueries:"
description: "This method performs the AND operation on the specified query objects and provides only the matching entries."
url: "https://www.contentstack.com/ios-query-andwithsubqueries-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## andWithSubqueries:

This method performs the AND operation on the specified query objects and provides only the matching entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | NSArray<Query*> | Yes | — | Array of queries to be taken into consideration. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];

Query *query1 = [contentType query];
[query1 whereKey:@"total_hits" greaterThanOrEqualTo:@(800)];

Query *query2 = [contentType query];
[query2 whereKey:@"total_hits" lessThanOrEqualTo:@(1200)];

Query * query = [contentType query];
[query andWithSubqueries:@[query1, query2]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

var query1:Query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query1.whereKey("total_hits", greaterThanOrEqualTo:800)

var query2:Query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query2.whereKey("total_hits", equalTo:1200)

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.andWithSubqueries([query1, query2])
```
