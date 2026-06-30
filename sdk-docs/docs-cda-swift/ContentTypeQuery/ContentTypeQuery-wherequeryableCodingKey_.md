---
title: "where(queryableCodingKey:_:)"
description: "Use this method to do a search on ContentType which enables searching for entries based on value’s for members of referenced entries."
url: "https://www.contentstack.com/swift-contenttypequery-where-queryablecodingkey-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where(queryableCodingKey:_:)

Use this method to do a search on ContentType which enables searching for entries based on value’s for members of referenced entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryableCodingKey | ContentTypeModel.QueryableCodingKey | Yes | — | The member of your QueryableCodingKey that you are performing your select operation against. |
| operation | Query.Operation | Yes | — | The query operation used in the query. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType().query()
.where(queryableCodingKey: .title, .equals("ContentType Title"))
.find { (result: Result<ContentstackResponse<ContentTypeModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
        // Contentstack response with ContentTypeModel array in items.
    case .failure(let error):
        //Error Message
    }
}
```
