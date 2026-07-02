---
title: "asset"
description: "This call fetches the latest version of a specific. asset of a particular stack."
url: "https://www.contentstack.com/dart-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset

This call fetches the latest version of a specific. asset of a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | Yes | — | Asset uid |

Returns:
Type
Map

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var asset = stack.asset("uid")
```
