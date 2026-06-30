---
title: "addParamKey:andValue:"
description: "This method adds key and value to an Entry."
url: "https://www.contentstack.com/ios-entry-addparamkey-andvalue-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParamKey:andValue:

This method adds key and value to an Entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | The key as string which needs to be added to an Entry |
| value | NSString | Yes | — | The value as string which needs to be added to an Entry |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry* entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry addParamKey:@"key" andValue:@"value"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
var entry: Entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.addParamKey("key", andValue:"value")
```
