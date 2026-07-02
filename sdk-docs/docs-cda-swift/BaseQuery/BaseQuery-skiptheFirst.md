---
title: "skip(theFirst:) "
description: "Instance method to mutating query to skip the first n records."
url: "https://www.contentstack.com/swift-basequery-skip-thefirst-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skip(theFirst:) 

Instance method to mutating query to skip the first n records.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| numberOfResults | UInt | Yes | — | The number of results that will be skipped in the query. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.skip(theFirst: 20)
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
.skip(theFirst: 20)
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
.skip(theFirst: 20)
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
