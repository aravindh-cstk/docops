---
title: "syncPublishType:completion:"
description: "Perform a synchronization operation on specified publishType."
url: "https://www.contentstack.com/ios-stack-syncpublishtype-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## syncPublishType:completion:

Perform a synchronization operation on specified publishType.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publishType | PublishType | Yes | — | PublishType for which sync is needed. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];</span>

[[stack syncPublishType:ENTRY_PUBLISHED completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.syncPublishType(ENTRY_PUBLISHED, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
