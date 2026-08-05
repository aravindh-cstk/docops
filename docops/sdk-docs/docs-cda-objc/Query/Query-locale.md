---
title: "locale:"
description: "This method provides all the entries for the specified language in the response."
url: "https://www.contentstack.com/ios-query-locale-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale:

This method provides all the entries for the specified language in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | NSString | Yes | — | Language enum for all language available. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];

Query * query = [contentType query];
[query locale:@“en-us”];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.locale(“en-us”)
```
