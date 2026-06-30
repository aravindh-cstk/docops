---
title: "includeReference(with:)"
description: "Instance method to include reference objects with given key in response."
url: "https://www.contentstack.com/swift-entryqueryable-includereference-with-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReference(with:)

Instance method to include reference objects with given key in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | [string] | Yes | — | List for reference field uids to include reference in response. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query()
.includeReference(with: ["<REFERENCE_FIELD_UIDS>"])
.fetch { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
