---
title: "relative_urls"
description: "Include the relative URLs of the assets in the response"
url: "https://www.contentstack.com/python-asset-relative_urls"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## relative_urls

Include the relative URLs of the assets in the response

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.relative_urls()
```
