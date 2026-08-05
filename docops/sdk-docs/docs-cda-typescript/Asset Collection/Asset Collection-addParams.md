---
title: "addParams"
description: "The addParam method adds a query parameter to the query."
url: "https://www.contentstack.com/typescript-delivery-assetquery-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParams

The addParam method adds a query parameter to the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paramObj | object | Yes | — | Add key-value pairs |

Returns:
Type
BaseQuery

**Example:**

```
import { BaseAsset, FindAsset } from '@contentstack/delivery-sdk'

interface BlogAsset extends BaseAsset {
  // other custom props
  dimension: {
    height: string;
    width: string;
  };
}

const asset = await stack
                      .asset()
                      .addParams({"key": "value"})
                      .find<BlogAsset>();
```
