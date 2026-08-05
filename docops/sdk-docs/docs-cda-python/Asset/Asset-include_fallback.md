---
title: "include_fallback"
description: "Retrieve the published content of the fallback locale if an entry is not localized in specified locale"
url: "https://www.contentstack.com/python-asset-include_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_fallback

Retrieve the published content of the fallback locale if an entry is not localized in specified locale

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.include_fallback()
```
