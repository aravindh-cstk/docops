---
title: "locale(_:)"
description: "Instance method to fetch Entry for specific locale."
url: "https://www.contentstack.com/swift-entryqueryable-locale-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale(_:)

Instance method to fetch Entry for specific locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | — | The code for fetching entry for locale. |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query()
.locale("<LOCALE_CODE>")
.fetch { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
