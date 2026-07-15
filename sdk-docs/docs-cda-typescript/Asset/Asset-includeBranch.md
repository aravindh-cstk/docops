---
title: "includeBranch"
description: "The includeBranch method includes the branch details in the response."
url: "https://www.contentstack.com/typescript-delivery-asset-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The includeBranch method includes the branch details in the response.

No parameters.

Returns:
Type
Asset

**Example:**

```
const assetResponse = await stack.asset('asset_uid').includeBranch().fetch<BlogAsset>();
```
