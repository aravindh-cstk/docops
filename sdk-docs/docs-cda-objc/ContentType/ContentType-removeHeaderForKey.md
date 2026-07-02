---
title: "removeHeaderForKey:"
description: "Removes a header from this Stack."
url: "https://www.contentstack.com/ios-contenttype-removeheaderforkey-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeaderForKey:

Removes a header from this Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | NSString | Yes | — | The header key that needs to be removed. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
ContentType * contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
[contentType removeHeaderForKey:@"key"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let contentType = stack.contentTypeWithName("CONTENT_TYPE_UID")
contentType.removeHeaderForKey("key")
```
