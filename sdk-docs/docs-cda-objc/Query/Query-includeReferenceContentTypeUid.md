---
title: "includeReferenceContentTypeUid"
description: "This method also includes the content type UIDs of the referenced entries returned in the response."
url: "https://www.contentstack.com/ios-query-includereferencecontenttypeuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReferenceContentTypeUid

This method also includes the content type UIDs of the referenced entries returned in the response.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query includeReferenceContentTypeUid];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.includeReferenceContentTypeUid()
```
