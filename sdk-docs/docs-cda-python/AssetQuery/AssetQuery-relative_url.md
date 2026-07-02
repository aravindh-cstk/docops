---
title: "relative_url"
description: "include the relative URLs of the assets in the response"
url: "https://www.contentstack.com/python-assetquery-relative_url"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## relative_url

include the relative URLs of the assets in the response

No parameters.

Returns:
Type
AssetQuery

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
stack.asset_query().relative_url()
```
