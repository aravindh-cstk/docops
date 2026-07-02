---
title: "entryWithUID:"
description: "Gets the new instance of Entry object with specified UID."
url: "https://www.contentstack.com/ios-contentstack-entrywithuid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entryWithUID:

Gets the new instance of Entry object with specified UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | NSString | Yes | — | U id of the Entry object to fetch. |

Returns:
Type
Entry

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

ContentType * contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry *entryObj = [contentType entryWithUID:@"ENTRY_UID"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let contentType = stack.contentTypeWithName("CONTENT_TYPE_UID")
let entryObj:Entry = contentType.entryWithUID("ENTRY_UID")
```
