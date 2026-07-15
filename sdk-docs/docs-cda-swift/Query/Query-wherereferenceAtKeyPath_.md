---
title: "where(referenceAtKeyPath:_:)"
description: "Use this method to do a search on Entries which enables searching for entries based on value’s for members of referenced entries."
url: "https://www.contentstack.com/swift-query-where-referenceatkeypath-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where(referenceAtKeyPath:_:)

Use this method to do a search on Entries which enables searching for entries based on value’s for members of referenced entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keyPath | string | Yes | — | The reference field key path that you are performing your select operation against. |
| operation | Query.Reference | Yes | — | The query operation used in the query. |

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let referenceQuery = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(queryableCodingKey: EntryModel.FieldKeys.title,Query.Operation.equals("10"))

let inReference = Query.Reference.include(referenceQuery)

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(referenceAtKeyPath: .title, inReference)
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let referenceQuery = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(queryableCodingKey: EntryModel.FieldKeys.title,Query.Operation.equals("10"))

let ninReference = Query.Reference.notInclude(referenceQuery)

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(referenceAtKeyPath: .title, ninReference)
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
