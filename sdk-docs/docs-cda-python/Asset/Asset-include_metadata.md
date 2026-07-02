---
title: "include_metadata"
description: "Includes asset metadata along with response body."
url: "https://www.contentstack.com/python-asset-include_metadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_metadata

Includes asset metadata along with response body.

No parameters.

Returns:
Type
Asset

```
import contentstack

stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
response = stack.asset('asset_uid').include_metadata().find()
print(response)
```
