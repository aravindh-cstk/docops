---
title: "includeOnlyFields:"
description: "Specifies an array of ‘only’ keys in BASE object that would be included in the response."
url: "https://www.contentstack.com/ios-entry-includeonlyfields-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeOnlyFields:

Specifies an array of ‘only’ keys in BASE object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUIDs | NSArray | Yes | — | Array of the ‘only’ keys to be included in response. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry includeOnlyFields:@["name"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.includeOnlyFields(["name"])
```
