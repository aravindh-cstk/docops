---
title: "getContentTypes:completion:"
description: "Gets all the ContentTypes and its Schema definition."
url: "https://www.contentstack.com/ios-stack-getcontenttypes-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getContentTypes:completion:

Gets all the ContentTypes and its Schema definition.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | NSDictionary<NSString*,id> | Yes | — | params is dictionary of additional parameter |
| completionBlock | (NSArray<NSString*> *BUILT_NULLABLE_P contentTypes , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock to be called once operation is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

[stack getContentTypes:params completion:^(NSArray * _Nullable contentTypes, NSError * _Nullable error) {

 }];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.getContentTypes(params, { (contentTypes, error) in

})
```
