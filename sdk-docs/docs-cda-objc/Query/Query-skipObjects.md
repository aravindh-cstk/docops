---
title: "skipObjects:"
description: "This method provide response by skipping only the specified number of entries."
url: "https://www.contentstack.com/ios-query-skipobjects-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skipObjects:

This method provide response by skipping only the specified number of entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | NSNumber | Yes | — | Number of entries to be skipped before returned. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query skipObjects:@(5)];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.skipObjects(NSNumber(int:5))
```
