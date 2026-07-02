---
title: "syncOnly:locale:from:publishType:completion:"
description: "Perform a synchronization operation on specified classes, locale, date and publishType."
url: "https://www.contentstack.com/ios-stack-synconly-locale-from-publishtype-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## syncOnly:locale:from:publishType:completion:

Perform a synchronization operation on specified classes, locale, date and publishType.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentType | NSString | Yes | — | ContentType uids of classes to be expected. |
| locale | NSString | Yes | — | Locale for which sync is needed. |
| date | NSDate | Yes | — | Date from where sync data is needed. |
| publishType | PublishType | Yes | — | PublishType for which sync is needed. |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
NSArray *contentTypeArray = @[@“product”, @“multifield”]; 
NSDate *date = [NSDate date]; 
[[stack syncOnly: contentTypeArray locale:ENGLISH_UNITED_STATES from:date publishType:ENTRY_PUBLISHED completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let contentTypeArray = [“product”, “multifield”]
let date = Date.date() 
stack.syncOnly(contentTypeArray, locale:ENGLISH_UNITED_STATES, from: date, publishType:ENTRY_PUBLISHED, completion: { ( syncStack:SyncStack, error: NSError) in

})
```
