---
title: "where(queryableCodingKey:_:)"
description: "Use this method to do a search on Entries which enables searching for entries based on value’s queryable coding from EntryType.FieldKeys ."
url: "https://www.contentstack.com/swift-queryon-where-queryablecodingkey-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where(queryableCodingKey:_:)

Use this method to do a search on Entries which enables searching for entries based on value’s queryable coding from `EntryType.FieldKeys`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryableCodingKey | EntryType.FieldKeys | Yes | — | The member of your EntryType.FieldKeys that you are performing your select operation against. |
| operation | Query.Operation | Yes | — | The query operation used in the query. |

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query(Product.Self)
.where(queryableCodingKey: .title, .equals("Entry Title"))
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
        
    case .failure(let error):
        
    }
}
```
