---
title: "query"
description: "Represents a Query on ‘ContentType’ which can be executed to retrieve entries that pass the query condition"
url: "https://www.contentstack.com/ios-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

Represents a Query on ‘ContentType’ which can be executed to retrieve entries that pass the query condition

No parameters.

Returns:
Type
Query

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

ContentType * contentType = [stack contentTypeWithName:@"<content_type_id>"]
Query *queryObj = [contentTypeObj query];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let contentType = stack.contentTypeWithName("<content_type_id>")
var queryObj:Query = contentTypeObj.query()
```
