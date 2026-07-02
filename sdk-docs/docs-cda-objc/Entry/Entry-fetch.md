---
title: "fetch:"
description: "Fetches an entry asynchronously provided entry UID."
url: "https://www.contentstack.com/ios-entry-fetch-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch:

Fetches an entry asynchronously provided entry UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | (void ( ^ ) ( ResponseType type , NSError *BUILT_NULLABLE_P error )) | Yes | — | Block to be called once operation is done. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry * entry = [contentType entryWithUID:@"ENTRY_UID"];
[entry fetch:^(ResponseType type, NSError *error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let entry = stack.contentTypeWithName("CONTENT_TYPE_UID").entryWithUID("ENTRY_UID")
entry.fetch({ (responseType, error!) ->  in

})
```
