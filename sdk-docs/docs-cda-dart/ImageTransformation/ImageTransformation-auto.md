---
title: "auto"
description: "Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved."
url: "https://www.contentstack.com/dart-imagetransformation-auto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## auto

Specify the version number of the asset that you wish to retrieve. If the version is not specified, the details of the latest version will be retrieved.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| auto | String | No | — | auto parameter is set to webp |
| format | String | No | — | The format |

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final imageTransformation = stack.imageTransform(imageUrl).auto(auto: 'webp', format: 'pjpg')
```
