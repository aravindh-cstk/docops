---
title: "version"
description: "Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved. To retrieve a specific version, keep the environment parameter blank"
url: "https://www.contentstack.com/python-assetquery-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## version

Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved. To retrieve a specific version, keep the environment parameter blank

No parameters.

Returns:
Type
AssetQuery

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset_query = stack.asset_query()
asset_query.version(version)
```
