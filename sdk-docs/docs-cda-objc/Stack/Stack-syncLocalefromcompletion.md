---
title: "syncLocale:from:completion:"
description: "Perform a synchronization operation on locale, and date ."
url: "https://www.contentstack.com/ios-stack-synclocale-from-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## syncLocale:from:completion:

Perform a synchronization operation on locale, and date.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | NSString | Yes | — | Locale for which sync is needed. |
| date | NSDate | Yes | — | Date from where sync data is needed. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

NSDate *date = [NSDate date]; 
[[stack syncLocale:ENGLISH_UNITED_STATES from:date completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let date = Date.date() 
stack.syncLocale(ENGLISH_UNITED_STATES, from: date, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
