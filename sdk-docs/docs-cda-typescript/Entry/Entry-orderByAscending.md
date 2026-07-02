---
title: "orderByAscending"
description: "The orderByAscending sorts the results in ascending order based on the specified field UID."
url: "https://www.contentstack.com/typescript-delivery-entry-orderbyascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByAscending

The orderByAscending sorts the results in ascending order based on the specified field UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to sort the results |

Returns:
Type
BaseQuery

**Example:**

```
const result = await stack
                       .contentType("contentTypeUid")
                       .entry()
                       .orderByAscending()
                       .find<BlogPostEntry>();
```
