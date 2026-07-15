---
title: "fetch(completion:)"
description: "The `fetch(completion:)` call fetches the latest version of a specific Asset of a particular stack. The result is delivered to the completion handler."
url: "https://www.contentstack.com/swift-asset-fetch-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch(completion:)

The `fetch(completion:)` call fetches the latest version of a specific Asset of a particular stack. The result is delivered to the completion handler.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completion | Result<ResourceType, Error>, ResponseType) -> Void | Yes | — | A handler which will be called on completion of the operation. |

Returns:
Type
void

No value. When the request finishes, the completion handler is invoked with `Result<AssetModel, Error>` and `ResponseType`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `completion` | `(Result<AssetModel, Error>, ResponseType) -> Void` | Yes | none | Defines the callback handler manually set in `.fetch()` to receive either the `AssetModel` results or an error once the request completes. |

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>")
.fetch { (result: Result<AssetModel, Error>, response: ResponseType) in
   switch result {
   case .success(let model):
   case .failure(let error):
   }
}
```
