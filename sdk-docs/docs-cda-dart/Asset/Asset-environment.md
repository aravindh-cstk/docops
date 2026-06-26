---
title: "environment"
description: "To fetch the content based on specific environment"
url: "https://www.contentstack.com/dart-asset-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

To fetch the content based on specific environment

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment | String | Yes | — | The environment |

Returns:
Type
ContentstackResponse

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final asset = stack.asset(asset_uid)..environment('development');
```
