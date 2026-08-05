---
title: "query"
description: "The query method retrieves the details of the entry on the basis of the queries applied."
url: "https://www.contentstack.com/typescript-delivery-entry-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The query method retrieves the details of the entry on the basis of the queries applied.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryObj | object | No | — | Query in object format |

Returns:
Type
query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query({ "price_in_usd": { "$lt": 600 }});
const result = await query.whereIn("brand").find<BlogPostEntry>();
```
