---
title: "syncFrom:completion:"
description: "Perform a synchronization operation on specified date."
url: "https://www.contentstack.com/ios-stack-syncfrom-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## syncFrom:completion:

Perform a synchronization operation on specified date.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| date | NSDate | Yes | — | Date from where sync data is needed. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

NSDate *date = [NSDate date]; 
[[stack syncFrom:date completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let date = Date.date() 
stack.syncFrom(date, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
