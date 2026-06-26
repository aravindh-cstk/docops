---
title: "exceptFields:"
description: "This method provides all entries except those that match the specified field uids and corresponding values."
url: "https://www.contentstack.com/ios-query-exceptfields-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exceptFields:

This method provides all entries except those that match the specified field uids and corresponding values.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUIDs | NSArray | Yes | — | An array of values that are to be included for the key |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query exceptFields:@[@"attachments"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.exceptFields(["attachments"])
```
