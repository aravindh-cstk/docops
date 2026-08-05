---
title: "includeAllFieldsExcept:"
description: "Specifies an array of keys in reference class object that would be ‘excluded’ from the response."
url: "https://www.contentstack.com/ios-entry-includeallfieldsexcept-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeAllFieldsExcept:

Specifies an array of keys in reference class object that would be ‘excluded’ from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUIDs | NSArray | Yes | — | Array of keys to be excluded from the response. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry includeAllFieldsExcept:@["name"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.includeAllFieldsExcept(["name"])
```
