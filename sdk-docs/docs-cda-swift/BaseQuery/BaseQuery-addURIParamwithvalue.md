---
title: "addURIParam(with:value:)"
description: "The parameters dictionary that are converted to URLComponents."
url: "https://www.contentstack.com/swift-basequery-adduriparam-with-value-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addURIParam(with:value:)

The parameters dictionary that are converted to URLComponents.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The key for query parameter, |
| value | string | No | — | The value for query parameter. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.addURIParam(with: “key”, value: “value”)
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
.addURIParam(with: “key”, value: “value”)
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
.addURIParam(with: “key”, value: “value”)
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
