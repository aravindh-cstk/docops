---
title: "asset(uid:)"
description: "Get instance of Asset to fetch Assets or fetch specific Asset."
url: "https://www.contentstack.com/swift-stack-asset-uid-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset(uid:)

Get instance of Asset to fetch Assets or fetch specific Asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | No | — | The UId of Asset you want to fetch data. |

Returns:
Type
Asset

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.asset()

stack.asset(uid: "<ASSET_UID>")
```
