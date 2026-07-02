---
title: "version"
description: "The version method retrieves the specified version of the asset in the result."
url: "https://www.contentstack.com/typescript-delivery-asset-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version

The version method retrieves the specified version of the asset in the result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version | number | Yes | — | Version of the required asset |

Returns:
Type
Asset

**Example:**

```
const result = await stack.asset('asset_uid').version(1).fetch<BlogAsset>();
```
