---
title: "setCachePolicy"
description: "Allows you to set cache policies"
url: "https://www.contentstack.com/set-cachepolicy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setCachePolicy

Allows you to set cache policies

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | Contentstack.CachePolicy | No | Contentstack.CachePolicy.ONLY_NETWORK |  |

Returns:
Type
Stack

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.setCachePolicy(Contentstack.CachePolicy.IGNORE_CACHE);
```
