---
title: "limit"
description: "The limit method will return a specific number of assets in the output."
url: "https://www.contentstack.com/typescript-delivery-assetquery-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

The limit method will return a specific number of assets in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | int | Yes | — | Enter the maximum number of assets to be returned. |

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().limit(5).find<BlogAsset>();
```
