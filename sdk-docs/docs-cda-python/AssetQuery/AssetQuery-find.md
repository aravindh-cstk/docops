---
title: "find"
description: "This call fetches the list of all the assets of a particular stack. It also returns the content of each asset in dict format."
url: "https://www.contentstack.com/python-assetquery-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

This call fetches the list of all the assets of a particular stack. It also returns the content of each asset in dict format.

No parameters.

Returns:
Type
Dict

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
response = stack.asset_query().find()
```
