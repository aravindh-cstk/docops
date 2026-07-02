---
title: "include_dimension"
description: "Include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD"
url: "https://www.contentstack.com/python-asset-include_dimension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_dimension

Include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD

No parameters.

Returns:
Type
Asset

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
asset = stack.asset(uid='asset_uid')
asset = asset.include_dimension()
```
