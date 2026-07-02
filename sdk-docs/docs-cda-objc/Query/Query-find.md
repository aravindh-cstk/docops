---
title: "find:"
description: "This method provides all the entries from a specified ContentType. Note: By default, the limit for response details per request is 100, with the maximum limit set at 250."
url: "https://www.contentstack.com/ios-query-find-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find:

This method provides all the entries from a specified ContentType.

**Note:** By default, the limit for response details per request is 100, with the maximum limit set at 250.

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
[query find:^(ResponseType type, Entry *entry, NSError *error){

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.find({(responseType, entry!, error!) ->  in

})
```
