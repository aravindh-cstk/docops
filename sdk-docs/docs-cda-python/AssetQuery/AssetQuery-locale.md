---
title: "locale"
description: "Enter locale code. e.g., en-us"
url: "https://www.contentstack.com/python-assetquery-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

Enter locale code. e.g., en-us

No parameters.

Returns:
Type
AssetQuery

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
stack.asset_query().locale("locale_code")
```
