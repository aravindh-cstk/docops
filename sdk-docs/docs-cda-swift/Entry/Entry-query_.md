---
title: "query(_:)"
description: "To fetch all or find Entries to specific model query method is used."
url: "https://www.contentstack.com/swift-entry-query-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query(_:)

To fetch all or find Entries to specific model query method is used.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry | EntryType.Type | Yes | — | A entry type for querying on. |

Returns:
Type
QueryOn<EntryType>

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let query = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry(uid: "<ENTRY_UID>").query(Product.self)
```
