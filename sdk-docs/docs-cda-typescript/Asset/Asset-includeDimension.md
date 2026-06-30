---
title: "includeDimension"
description: "The includeDimension method includes the dimensions (height and width) of the image in the result."
url: "https://www.contentstack.com/typescript-delivery-asset-includedimension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeDimension

The includeDimension method includes the dimensions (height and width) of the image in the result.

No parameters.

Returns:
Type
Asset

**Example:**

```
const assetResponse = await stack.asset('asset_uid').includeDimension().fetch<BlogAsset>();
```
