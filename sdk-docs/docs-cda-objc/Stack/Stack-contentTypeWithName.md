---
title: "contentTypeWithName:"
description: "Gets the new instance of ContentType object with specified name."
url: "https://www.contentstack.com/ios-stack-contenttypewithname-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## contentTypeWithName:

Gets the new instance of ContentType object with specified name.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeName | NSString | Yes | — | Uid of the contentType to perform action. |

Returns:
Type
ContentType

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

ContentType *contentTypeObj = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

var contentTypeObj:ContentType = stack.contentTypeWithName("CONTENT_TYPE_UID")
```
