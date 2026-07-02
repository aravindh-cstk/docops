---
title: "groupsForKey:"
description: "Get the info of the specified key of content type and returns array of Group."
url: "https://www.contentstack.com/ios-entry-groupsforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## groupsForKey:

Get the info of the specified key of content type and returns array of Group.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key containing the value of Group array |

Returns:
Type
NSArray

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry groupsForKey:@"addresses"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.groupsForKey("addresses")
```
