---
title: "includeRefFieldWithKey:andOnlyRefValuesWithKeys:"
description: "Specifies an array of ‘only’ keys in reference class object that would be included in the response."
url: "https://www.contentstack.com/ios-entry-includereffieldwithkey-andonlyrefvalueswithkeys-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeRefFieldWithKey:andOnlyRefValuesWithKeys:

Specifies an array of ‘only’ keys in reference class object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key who has reference to some other class object. |
| values | NSArray | Yes | — | Array of the ‘only’ reference keys to be included in response. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack  contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry* entry = [contentType  entryWithUID:@"ENTRY_UID"];
[entry includeRefFieldWithKey:@[@"detail"] andOnlyRefValuesWithKeys:@[@"description"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
var entry: Entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.includeRefFieldWithKey(["detail"], andOnlyRefValuesWithKeys:["description"])
```
