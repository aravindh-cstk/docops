---
title: "Asset"
description: "The Asset method by default creates an object for all assets of a stack. To retrieve a single asset, specify its UID."
url: "https://www.contentstack.com/typescript-delivery-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Asset

The Asset method by default creates an object for all assets of a stack. To retrieve a single asset, specify its UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| assetUid | string | No | — | UID of the asset |

Returns:
Type
Asset

**Example:**

```
const asset = stack.asset(); // For collection of asset
// OR
const asset = stack.asset('assetUid'); // For a single asset with uid 'assetUid'
```
