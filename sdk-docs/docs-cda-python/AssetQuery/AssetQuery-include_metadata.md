---
title: "include_metadata"
description: "Includes AssetQuery metadata along with response body."
url: "https://www.contentstack.com/python-assetquery-include_metadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_metadata

Includes AssetQuery metadata along with response body.

No parameters.

Returns:
Type
AssetQuery

```
import contentstack

stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
result = stack.assetQuery().include_metadata().find()
print(result)
```
