---
title: "sync:"
description: "The Initial Sync request performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response. The response also contains a sync token, which you need to store, since this token is used to get subsequent delta updates later."
url: "https://www.contentstack.com/ios-stack-sync-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## sync:

The Initial Sync request performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response. The response also contains a sync token, which you need to store, since this token is used to get subsequent delta updates later.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

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
