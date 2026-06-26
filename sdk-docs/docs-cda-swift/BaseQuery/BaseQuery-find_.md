---
title: "find(_:)"
description: "This is a generic find method which can be used to fetch collections of ContentType, Entry, and Asset instances."
url: "https://www.contentstack.com/swift-basequery-find-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find(_:)

This is a generic find method which can be used to fetch collections of ContentType, Entry, and Asset instances.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completion | ResultsHandler<ContentstackResponse<ResourceType>> | Yes | — | A handler which will be called on completion of the operation. |

Returns:
Type
void

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
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
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
