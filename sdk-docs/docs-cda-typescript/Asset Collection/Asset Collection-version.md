---
title: "version"
description: "The version method retrieves a specific version of the asset in the result."
url: "https://www.contentstack.com/typescript-delivery-assetquery-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version

The version method retrieves a specific version of the asset in the result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | number | Yes | — | Version number of the asset |

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().version(1).find<BlogAsset>();
```
