---
title: "includeFallback"
description: "The includeFallback method retrieves the entry in its fallback language."
url: "https://www.contentstack.com/typescript-delivery-assetquery-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

The includeFallback method retrieves the entry in its fallback language.

No parameters.

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().includeFallback().find<BlogAsset>();
```
