---
title: "find"
description: "The find method retrieves the details of all assets in a stack."
url: "https://www.contentstack.com/python-management-asset-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all assets in a stack.

No parameters.

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.find()
```
