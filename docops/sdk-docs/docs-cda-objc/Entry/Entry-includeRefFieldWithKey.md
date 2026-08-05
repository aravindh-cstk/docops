---
title: "includeRefFieldWithKey:"
description: "Include reference objects with given key in response."
url: "https://www.contentstack.com/ios-entry-includereffieldwithkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeRefFieldWithKey:

Include reference objects with given key in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSArray | Yes | — | Array of reference keys to include in response. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry includeRefFieldWithKey:@[@"detail"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.includeRefFieldWithKey(["detail"])
```
