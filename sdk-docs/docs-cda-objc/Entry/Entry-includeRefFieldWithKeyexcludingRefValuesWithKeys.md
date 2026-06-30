---
title: "includeRefFieldWithKey:excludingRefValuesWithKeys:"
description: "Specifies an array of keys in reference class object that would be ‘excluded’ from the response."
url: "https://www.contentstack.com/ios-entry-includereffieldwithkey-excludingrefvalueswithkeys-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeRefFieldWithKey:excludingRefValuesWithKeys:

Specifies an array of keys in reference class object that would be ‘excluded’ from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key who has reference to some other class object. |
| values | NSArray | Yes | — | Array of the ‘only’ reference keys to be ‘excluded’ from the response. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry* entry = [stack includeRefFieldWithKey:@[@"detail"] excludingRefValuesWithKeys:@[@"description"];
[entry addParamKey:@"key" andValue:@"value"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
var entry: Entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.includeRefFieldWithKey(["detail"], excludingRefValuesWithKeys:["description"])
```
