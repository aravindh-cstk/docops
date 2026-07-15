---
title: "HTMLStringForMarkdownKey:"
description: "Converts Markdown to String of HTML String for specified key"
url: "https://www.contentstack.com/ios-entry-htmlstringformarkdownkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## HTMLStringForMarkdownKey:

Converts Markdown to String of HTML String for specified key

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Key is Multiple Markdown Parameter |

Returns:
Type
NSString

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry HTMLStringForMarkdownKey:@"multiple_markdown"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.HTMLStringForMarkdownKey("Multiple_markdown")
```
