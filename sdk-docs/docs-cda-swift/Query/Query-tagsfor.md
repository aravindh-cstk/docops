---
title: "tags(for:)"
description: "Use this method to do a search on tags for Entries."
url: "https://www.contentstack.com/swift-query-tags-for-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags(for:)

Use this method to do a search on tags for Entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| text | string | Yes | — | The text string to match against. |

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry().query()
.tags(for: "tagSearchString")
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
   switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

   }
}
```
