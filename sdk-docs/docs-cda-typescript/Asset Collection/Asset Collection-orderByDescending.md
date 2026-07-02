---
title: "orderByDescending"
description: "The orderByDescending method sorts the results in descending order based on the specified key."
url: "https://www.contentstack.com/typescript-delivery-assetquery-orderbydescending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByDescending

The orderByDescending method sorts the results in descending order based on the specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to sort the results |

Returns:
Type
BaseQuery

**Example:**

```
const asset = await stack.asset().orderByDescending().find<BlogAsset>();
```
