---
title: "findOne:"
description: "This method provides the first entry from a specified ContentType."
url: "https://www.contentstack.com/ios-query-findone-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findOne:

This method provides the first entry from a specified ContentType.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | (void ( ^ ) ( ResponseType type , Entry *BUILT_NULLABLE_P entry , NSError *BUILT_NULLABLE_P error )) | Yes | — | Block to be called once operation is done. |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query findOne:^(ResponseType type, Entry *entry, NSError *error){

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.findOne({(responseType, entry!, error!) ->  in

})
```
