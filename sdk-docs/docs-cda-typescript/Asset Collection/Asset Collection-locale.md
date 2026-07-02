---
title: "locale"
description: "The locale method retrieves the asset published in the specified locale."
url: "https://www.contentstack.com/typescript-delivery-assetquery-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

The locale method retrieves the asset published in the specified locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | — | Locale of the asset |

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().locale('en-us').find<BlogAsset>();
```
