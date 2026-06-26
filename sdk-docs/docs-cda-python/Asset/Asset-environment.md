---
title: "environment"
description: "Provide the name of the environment if you wish to retrieve the assets published in a particular environment"
url: "https://www.contentstack.com/python-asset-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

Provide the name of the environment if you wish to retrieve the assets published in a particular environment

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.environment('environment_name')
```
