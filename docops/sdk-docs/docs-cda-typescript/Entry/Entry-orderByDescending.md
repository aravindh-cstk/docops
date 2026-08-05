---
title: "orderByDescending"
description: "The orderByDescending sorts the results in descending order based on the specified field UID."
url: "https://www.contentstack.com/typescript-delivery-entry-orderbydescending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## orderByDescending

The orderByDescending sorts the results in descending order based on the specified field UID.

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
                       .orderByDescending()
                       .find<BlogPostEntry>();
```
