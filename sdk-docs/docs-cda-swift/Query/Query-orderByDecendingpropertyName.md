---
title: "orderByDecending(propertyName:)"
description: "When fetching entries, you can sort them in the descending order with respect to the value of a specific field in the response body."
url: "https://www.contentstack.com/swift-query-orderbydecending-propertyname-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByDecending(propertyName:)

When fetching entries, you can sort them in the descending order with respect to the value of a specific field in the response body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| propertyName | string | Yes | — | The member of your `EntryModel.FieldKeys` that you are performing order by descending. |

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.orderByDecending(propertyName: .title)
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
