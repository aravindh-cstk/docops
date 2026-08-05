---
title: "fetch(_:)"
description: "This call fetches the latest version of a specific Entry of a particular stack."
url: "https://www.contentstack.com/swift-entry-fetch-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch(_:)

This call fetches the latest version of a specific Entry of a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completion | Result<ResourceType, Error>, ResponseType) -> Void | Yes | — | A handler which will be called on completion of the operation. |

Returns:
Type
void

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry(uid: "<ENTRY_UID>")
.fetch { (result: Result<EntryModel, Error>, response: ResponseType) in
   switch result {
   case .success(let model):

   case .failure(let error):

   }
}
```
