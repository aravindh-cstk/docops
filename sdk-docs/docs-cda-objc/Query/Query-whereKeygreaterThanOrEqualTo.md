---
title: "whereKey:greaterThanOrEqualTo:"
description: "This method provides only the entries with values greater than or equal to the specified value for a field."
url: "https://www.contentstack.com/ios-query-wherekey-greaterthanorequalto-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## whereKey:greaterThanOrEqualTo:

This method provides only the entries with values greater than or equal to the specified value for a field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Uid of the field that is to be taken into consideration |
| object | id | Yes | — | The value used to match or compare |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query  whereKey:@"created_at" greaterThanOrEqualTo:@"2015-03-12"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.whereKey("created_at", greaterThanOrEqualTo:"2015-03-12")
```
