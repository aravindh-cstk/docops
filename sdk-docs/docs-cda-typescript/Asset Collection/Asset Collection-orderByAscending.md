---
title: "orderByAscending"
description: "The orderByAscending method sorts the results in ascending order based on the specified field UID."
url: "https://www.contentstack.com/typescript-delivery-assetquery-orderbyascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## orderByAscending

The orderByAscending method sorts the results in ascending order based on the specified field UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to sort the results |

Returns:
Type
BaseQuery

**Example:**

```
const asset = await stack.asset().orderByAscending().find<BlogAsset>();
```
