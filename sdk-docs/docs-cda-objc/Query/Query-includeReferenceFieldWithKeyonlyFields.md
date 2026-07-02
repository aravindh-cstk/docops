---
title: "includeReferenceFieldWithKey:onlyFields:"
description: "This method provides all entries including referred entry containing only specified fields."
url: "https://www.contentstack.com/ios-query-includereferencefieldwithkey-onlyfields-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReferenceFieldWithKey:onlyFields:

This method provides all entries including referred entry containing only specified fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString | Yes | — | Uid of the reference field that is to be taken into consideration |
| fieldUIDs | NSArray<NSString*> * | Yes | — | Uid of the reference field that is to be taken into consideration |

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query * query = [contentType query];
[query includeReferenceFieldWithKey:@"entry_a" onlyFields:@[@"attachments"]];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let query = stack.contentTypeWithName("CONTENT_TYPE_UID").query()
query.includeReferenceFieldWithKey(@"entry_a", onlyFields:["attachments"])
```
