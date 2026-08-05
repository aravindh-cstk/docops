---
title: "setHeader:forKey:"
description: "Set a header for Entry"
url: "https://www.contentstack.com/ios-entry-setheader-forkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHeader:forKey:

Set a header for Entry

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerValue | NSString | Yes | — | The header value |
| headerKey | NSString | Yes | — | The header key |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry setHeader:@"MyValue" forKey:@"My-Custom-Header"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.setHeader("MyValue", forKey: "My-Custom-Header")
```
