---
title: "addQueryWithKey:andValue:"
description: "Include custom query using a key and a value."
url: "https://www.contentstack.com/ios-query-addquerywithkey-andvalue-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQueryWithKey:andValue:

Include custom query using a key and a value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | The name of the key to be added. |
| value | id | Yes | — | The value for the query key. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query  addQueryWithKey:@"key_name" andValue:@"MyValue"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.addQueryWithKey("key_name", andValue:"MyValue")
```
