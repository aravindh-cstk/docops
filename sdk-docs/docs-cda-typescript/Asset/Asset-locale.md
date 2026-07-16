---
title: "locale"
description: "The locale method retrieves the assets published in that locale."
url: "https://www.contentstack.com/typescript-delivery-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

The locale method retrieves the assets published in that locale.

No parameters.

Returns:
Type
Asset

**Example:**

```
const result = await stack.asset('asset_uid').locale('en-us').fetch<BlogAsset>();
```
