---
title: "query()"
description: "To fetch all or find Entries query method is used."
url: "https://www.contentstack.com/swift-entry-query-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query()

To fetch all or find Entries query method is used.

No parameters.

Returns:
Type
Query

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let query = stack.contentType(uid: "<CONTENT_TYPE_UID>").entry(uid: "<ENTRY_UID>").query()
```
