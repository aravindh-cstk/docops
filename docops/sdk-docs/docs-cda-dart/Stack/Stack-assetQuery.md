---
title: "assetQuery"
description: "It also returns the content of each asset in JSON format."
url: "https://www.contentstack.com/dart-stack-assetquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## assetQuery

It also returns the content of each asset in JSON format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | Yes | — | Asset uid |

Returns:
Type
Map

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var assets = stack.assetQuery()
```
