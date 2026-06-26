---
title: "includeFallback"
description: "The includeFallback method retrieves the entry in its fallback language."
url: "https://www.contentstack.com/typescript-delivery-asset-includefallback"
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
Asset

**Example:**

```
const result = await stack.asset('asset_uid').includeFallback().fetch<BlogAsset>();
```
