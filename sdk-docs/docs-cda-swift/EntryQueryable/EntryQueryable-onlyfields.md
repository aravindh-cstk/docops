---
title: "only(fields:)"
description: "Specifies an array of only keys in BASE object that would be included in the response."
url: "https://www.contentstack.com/swift-entryqueryable-only-fields-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only(fields:)

Specifies an array of only keys in BASE object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | [string] | Yes | — | List for field uids to included in response. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query()
.only(["<FIELD_UID_TO_EXCEPT>"])
.fetch { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
