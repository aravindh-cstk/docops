---
title: "params"
description: "params is used to pass additional parameters to the asset query"
url: "https://www.contentstack.com/python-asset-params"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## params

params is used to pass additional parameters to the asset query

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.param('key', 'value')
```
