---
title: "includeDimension"
description: "The includeDimension method includes the dimensions (height and width) of the image in the result"
url: "https://www.contentstack.com/typescript-delivery-assetquery-includedimension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeDimension

The includeDimension method includes the dimensions (height and width) of the image in the result

No parameters.

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().includeDimension().find<BlogAsset>();
```
