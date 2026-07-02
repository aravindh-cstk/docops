---
title: "configureWithDictionary:"
description: "Configure user properties with built object info."
url: "https://www.contentstack.com/ios-entry-configurewithdictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## configureWithDictionary:

Configure user properties with built object info.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dictionary | NSDictionary<NSString*,id*> | Yes | — | The as dictionary which needs to be added to the application. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry configureWithDictionary:@{@"key_name":@"MyValue"}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
var hashKey:Bool = entry.hasKey("key")
entry.configureWithDictionary(["key_name":"MyValue"])
```
