---
title: "include_branch"
description: "Includes branch in the response"
url: "https://www.contentstack.com/python-assetquery-include_branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_branch

Includes branch in the response

No parameters.

Returns:
Type
AssetQuery

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
stack.asset_query().include_branch()
```
