---
title: "whereKey:matchesRegex:modifiers:"
description: "This method provides only the entries matching the regular expression for the specified field."
url: "https://www.contentstack.com/ios-query-wherekey-matchesregex-modifiers-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereKey:matchesRegex:modifiers:

This method provides only the entries matching the regular expression for the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Uid of the field that is to be taken into consideration |
| regex | NSString | Yes | — | The value used to match or compare |
| modifier | NSString | Yes | — | Modifiers for regex options. Specify ‘i’ as the option to ignore the case. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query whereKey:@"title" matchesRegex:@"^wel" modifiers:@"i"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.whereKey("title", matchesRegex:"^wel", modifiers:"i")
```
