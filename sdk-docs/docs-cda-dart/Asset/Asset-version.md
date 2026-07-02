---
title: "version"
description: "Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved.."
url: "https://www.contentstack.com/dart-asset-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version

Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved..

No parameters.

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final asset = stack.asset("assetUid")..version();
```
