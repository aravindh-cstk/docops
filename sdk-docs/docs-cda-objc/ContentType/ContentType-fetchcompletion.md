---
title: "fetch:completion:"
description: "Gets ContentType Schema definition."
url: "https://www.contentstack.com/ios-contenttype-fetch-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch:completion:

Gets ContentType Schema definition.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | NSDictionary<NSString*,id> | Yes | — | Fetch query parameters |
| completionBlock | (void ( ^ ) ( NSDictionary<NSString*,NSString*> *BUILT_NULLABLE_P contentType , NSError *BUILT_NULLABLE_P error )) | Yes | — | Block to be called once operation is done. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

ContentType * contentType = [stack contentTypeWithName:@"<content_type_id>"];
[contentType fetch:params completion:^(NSDictionary * _Nullable contentType, NSError * _Nullable error)  

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let contentType = stack.contentTypeWithName("<content_type_id>")
contentType.fetch(params, { (contentType, error) in
})
```
