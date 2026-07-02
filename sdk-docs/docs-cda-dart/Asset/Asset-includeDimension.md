---
title: "includeDimension"
description: "include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD."
url: "https://www.contentstack.com/dart-asset-includeDimension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeDimension

include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.

No parameters.

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final asset = stack.asset("assetUid")..includeDimension();
```
