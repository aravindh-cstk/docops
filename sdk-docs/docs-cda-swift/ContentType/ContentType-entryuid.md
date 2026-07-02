---
title: "entry(uid:)"
description: "Get instance of Entry to fetch Entry or fetch specific Entry."
url: "https://www.contentstack.com/swift-contenttype-entry-uid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry(uid:)

Get instance of Entry to fetch Entry or fetch specific Entry.

No parameters.

Returns:
Type
ContentType

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry()
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").entry(uid: "<ENTRY_UID>")
```
