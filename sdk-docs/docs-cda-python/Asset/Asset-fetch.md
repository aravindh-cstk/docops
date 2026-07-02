---
title: "fetch"
description: "This call fetches the latest version of a specific asset of a particular stack"
url: "https://www.contentstack.com/python-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

This call fetches the latest version of a specific asset of a particular stack

No parameters.

Returns:
Type
dict

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
response = asset.fetch()
```
