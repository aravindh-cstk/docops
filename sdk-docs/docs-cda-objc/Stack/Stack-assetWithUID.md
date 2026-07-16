---
title: "assetWithUID:"
description: "Gets the new instance of Asset object with specified UID."
url: "https://www.contentstack.com/ios-stack-assetwithuid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## assetWithUID:

Gets the new instance of Asset object with specified UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | NSString | Yes | — | Uid of the Asset object to fetch. |

Returns:
Type
Asset

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

[[stack sync:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.sync({ ( syncStack:SyncStack, error: NSError) in

})
```
