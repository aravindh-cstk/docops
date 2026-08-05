---
title: "remove_environment"
description: "Removes environment from the request params"
url: "https://www.contentstack.com/python-asset-remove_environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## remove_environment

Removes environment from the request params

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.remove_environment('production')
```
