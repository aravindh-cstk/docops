---
title: "contentType(uid:)"
description: "Get instance of ContentType to fetch content-types and schema or fetch entries of specific content-type."
url: "https://www.contentstack.com/swift-stack-contenttype-uid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## contentType(uid:)

Get instance of ContentType to fetch content-types and schema or fetch entries of specific content-type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | No | — | The UId of ContentType you want to fetch data, |

Returns:
Type
ContentType

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType()

stack.contentType(uid: "<CONTENT_TYPE_UID>")
```
