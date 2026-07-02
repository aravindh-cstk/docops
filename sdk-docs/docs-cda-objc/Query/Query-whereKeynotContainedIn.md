---
title: "whereKey:notContainedIn:"
description: "This method provides only the entries that do not contain values matching the specified values for a field."
url: "https://www.contentstack.com/ios-query-wherekey-notcontainedin-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## whereKey:notContainedIn:

This method provides only the entries that do not contain values matching the specified values for a field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Uid of the field that is to be taken into consideration |
| array | NSArray | Yes | — | An array of values that are to be used to match or compare |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query whereKey:@"title" notContainedIn:@["Demo", @"Welcome"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.whereKey("title", notContainedIn:["Demo", "Welcome"])
```
