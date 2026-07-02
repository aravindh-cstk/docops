---
title: "skip"
description: "The skip method will skip a specific number of assets in the output."
url: "https://www.contentstack.com/typescript-delivery-assetquery-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## skip

The skip method will skip a specific number of assets in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skipBy | int | Yes | — | Enter the number of assets to be skipped. |

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().skip(5).find<BlogAsset>();
```
