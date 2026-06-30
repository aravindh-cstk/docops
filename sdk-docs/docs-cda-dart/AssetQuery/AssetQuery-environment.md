---
title: "environment"
description: "Enter the name of the [environment] if you wish to retrieve the assets published in a particular environment."
url: "https://www.contentstack.com/dart-assetquery-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

Enter the name of the [environment] if you wish to retrieve the assets published in a particular environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment | String | Yes | — | The Environment |

Returns:
Type
void

```
import Contentstack

final stack = final contentType = stack.contentType(“content_type_uid”);
final asset = stack.assetQuery()..environment();
```
