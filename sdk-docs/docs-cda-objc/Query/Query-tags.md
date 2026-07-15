---
title: "tags:"
description: "This method provides only the entries that contain tags matching the ones mentioned in the function."
url: "https://www.contentstack.com/ios-query-tags-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags:

This method provides only the entries that contain tags matching the ones mentioned in the function.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tagsArray | NSArray<NSString*> | Yes | — | An array of tags that are to be included for the key |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];

Query * query = [contentType query];
[query tags:@[@"phone", @"laptop"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.tags(["phone", "laptop"])
```
