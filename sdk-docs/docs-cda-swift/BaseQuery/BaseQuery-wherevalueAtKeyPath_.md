---
title: "where(valueAtKeyPath:_:)"
description: "Method to adding Query."
url: "https://www.contentstack.com/swift-basequery-where-valueatkeypath-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where(valueAtKeyPath:_:)

Method to adding Query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keyPath | string | Yes | — | Key path for field uid. |
| operation | Query.Operation | Yes | — | The query operation used in the query. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.where(valueAtKeyPath: "<FIELD_UID>", .equals("Field condition"))
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType().query()
.where(valueAtKeyPath: "<FIELD_UID>", .equals("Field condition"))
.find { (result: Result<ContentstackResponse<ContentTypeModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.asset().query()
.where(valueAtKeyPath: "<FIELD_UID>", .equals("Field condition"))
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
