---
title: "operator(_:)"
description: "Use this method to do a search on Entries which enables searching for entries based on Query.Operator."
url: "https://www.contentstack.com/swift-query-operator-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## operator(_:)

Use this method to do a search on Entries which enables searching for entries based on Query.Operator.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| operator | Query.Operator | Yes | — | The member of Query.Operator that you are performing. |

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let query1 = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(valueAtKeyPath: "title", Query.Operation.equals("Gold"))

let query2 = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(valueAtKeyPath: "name", Query.Operation.equals("John"))

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.operator(.and([query1, query2]))
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let query1 = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(valueAtKeyPath: "title", Query.Operation.equals("Gold"))

let query2 = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(valueAtKeyPath: "name", Query.Operation.equals("John"))

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.operator(.or([query1, query2]))
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
