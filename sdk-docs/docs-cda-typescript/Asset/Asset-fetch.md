---
title: "fetch"
description: "The fetch method retrieves the asset data of the specified asset."
url: "https://www.contentstack.com/typescript-delivery-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the asset data of the specified asset.

No parameters.

Returns:
Type
Promise

**Example:**

```
import { BaseAsset } from '@contentstack/delivery-sdk'

interface BlogAsset extends BaseAsset {
  // other custom props
}
const asset = await stack.asset('assetUid').fetch<BlogAsset>();
```
