---
title: "environment"
description: "Provide the name of the environment if you wish to retrieve the assets published in a particular environment"
url: "https://www.contentstack.com/python-query-remove_param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## environment

Provide the name of the environment if you wish to retrieve the assets published in a particular environment

No parameters.

Returns:
Type
AssetQuery

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
asset_query.environment('production')
```
