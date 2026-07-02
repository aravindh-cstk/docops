---
title: "includeBranch"
description: "The includeBranch method includes the branch details in the result."
url: "https://www.contentstack.com/typescript-delivery-assetquery-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

The includeBranch method includes the branch details in the result.

No parameters.

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().includeBranch().find<BlogAsset>();
```
