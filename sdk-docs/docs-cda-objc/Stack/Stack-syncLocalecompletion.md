---
title: "syncLocale:completion:"
description: "Perform a synchronization operation on specified locale."
url: "https://www.contentstack.com/ios-stack-synclocale-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## syncLocale:completion:

Perform a synchronization operation on specified locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | NSString | Yes | — | Locale for which sync is needed. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];</span>

[[stack syncLocale:ENGLISH_UNITED_STATES completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.syncLocale(locale:ENGLISH_UNITED_STATES, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
