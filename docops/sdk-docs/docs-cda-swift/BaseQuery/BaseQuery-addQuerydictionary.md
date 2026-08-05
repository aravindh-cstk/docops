---
title: "addQuery(dictionary:)"
description: "The Query parameters dictionary that are converted to URLComponents."
url: "https://www.contentstack.com/swift-basequery-addquery-dictionary-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQuery(dictionary:)

The Query parameters dictionary that are converted to URLComponents.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dictionary | [String : Any] | Yes | — | The dictionary for URLComponents |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.addQuery(dictionary: ["key": "value"])
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
.addQuery(dictionary: ["key": "value"])
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
.addQuery(dictionary: ["key": "value"])
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
