---
title: "where(queryableCodingKey:_:)"
description: "Use this method to apply a filter on assets using a queryable field and a query operation (e.g., equals, includes)."
url: "https://www.contentstack.com/swift-assetquery-where-queryablecodingkey-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where(queryableCodingKey:_:)

Use this method to apply a filter on assets using a queryable field and a query operation (e.g., equals, includes).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryableCodingKey | AssetModel.QueryableCodingKey | Yes | — | The member of your QueryableCodingKey that you are performing your select operation against. |
| operation | Query.Operation | Yes | — | The query operation used in the query. |

Returns:
Type
Self. The same AssetQuery instance, for chaining

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query()
.where(queryableCodingKey: .title, .equals("Asset Title"))
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
    case .failure(let error):
    }
}
```
