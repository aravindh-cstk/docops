---
title: "syncOnly:completion:"
description: "Perform a synchronization operation on specified classes."
url: "https://www.contentstack.com/ios-stack-synconly-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## syncOnly:completion:

Perform a synchronization operation on specified classes.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentType | NSString | Yes | — | ContentType uids of classes to be expected. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];</span>

NSArray *contentTypeArray = @[@“product”, @“multifield”]; 
[[stack syncOnly: contentTypeArray completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let contentTypeArray = [“product”, “multifield”]
stack.syncOnly(contentTypeArray, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
